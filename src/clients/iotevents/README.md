# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### IoTEventsClient <a name="aws-cdk-sdk.iotevents.IoTEventsClient"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsClient.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createDetectorModel` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.createDetectorModel"></a>

```typescript
public createDetectorModel(input: IoTEventsCreateDetectorModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelRequest`](#aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelRequest)

---

##### `createInput` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.createInput"></a>

```typescript
public createInput(input: IoTEventsCreateInputRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsCreateInputRequest`](#aws-cdk-sdk.iotevents.IoTEventsCreateInputRequest)

---

##### `deleteDetectorModel` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.deleteDetectorModel"></a>

```typescript
public deleteDetectorModel(input: IoTEventsDeleteDetectorModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDeleteDetectorModelRequest`](#aws-cdk-sdk.iotevents.IoTEventsDeleteDetectorModelRequest)

---

##### `deleteInput` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.deleteInput"></a>

```typescript
public deleteInput(input: IoTEventsDeleteInputRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDeleteInputRequest`](#aws-cdk-sdk.iotevents.IoTEventsDeleteInputRequest)

---

##### `describeDetectorModel` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.describeDetectorModel"></a>

```typescript
public describeDetectorModel(input: IoTEventsDescribeDetectorModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDescribeDetectorModelRequest`](#aws-cdk-sdk.iotevents.IoTEventsDescribeDetectorModelRequest)

---

##### `describeInput` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.describeInput"></a>

```typescript
public describeInput(input: IoTEventsDescribeInputRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDescribeInputRequest`](#aws-cdk-sdk.iotevents.IoTEventsDescribeInputRequest)

---

##### `describeLoggingOptions` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.describeLoggingOptions"></a>

```typescript
public describeLoggingOptions()
```

##### `listDetectorModels` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.listDetectorModels"></a>

```typescript
public listDetectorModels(input: IoTEventsListDetectorModelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsListDetectorModelsRequest`](#aws-cdk-sdk.iotevents.IoTEventsListDetectorModelsRequest)

---

##### `listDetectorModelVersions` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.listDetectorModelVersions"></a>

```typescript
public listDetectorModelVersions(input: IoTEventsListDetectorModelVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsListDetectorModelVersionsRequest`](#aws-cdk-sdk.iotevents.IoTEventsListDetectorModelVersionsRequest)

---

##### `listInputs` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.listInputs"></a>

```typescript
public listInputs(input: IoTEventsListInputsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsListInputsRequest`](#aws-cdk-sdk.iotevents.IoTEventsListInputsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: IoTEventsListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsListTagsForResourceRequest`](#aws-cdk-sdk.iotevents.IoTEventsListTagsForResourceRequest)

---

##### `putLoggingOptions` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.putLoggingOptions"></a>

```typescript
public putLoggingOptions(input: IoTEventsPutLoggingOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsPutLoggingOptionsRequest`](#aws-cdk-sdk.iotevents.IoTEventsPutLoggingOptionsRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.tagResource"></a>

```typescript
public tagResource(input: IoTEventsTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsTagResourceRequest`](#aws-cdk-sdk.iotevents.IoTEventsTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.untagResource"></a>

```typescript
public untagResource(input: IoTEventsUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsUntagResourceRequest`](#aws-cdk-sdk.iotevents.IoTEventsUntagResourceRequest)

---

##### `updateDetectorModel` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.updateDetectorModel"></a>

```typescript
public updateDetectorModel(input: IoTEventsUpdateDetectorModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsUpdateDetectorModelRequest`](#aws-cdk-sdk.iotevents.IoTEventsUpdateDetectorModelRequest)

---

##### `updateInput` <a name="aws-cdk-sdk.iotevents.IoTEventsClient.updateInput"></a>

```typescript
public updateInput(input: IoTEventsUpdateInputRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsUpdateInputRequest`](#aws-cdk-sdk.iotevents.IoTEventsUpdateInputRequest)

---




## Structs <a name="Structs"></a>

### IoTEventsAction <a name="aws-cdk-sdk.iotevents.IoTEventsAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsAction: iotevents.IoTEventsAction = { ... }
```

##### `clearTimer`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAction.property.clearTimer"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsClearTimerAction`](#aws-cdk-sdk.iotevents.IoTEventsClearTimerAction)

---

##### `dynamoDB`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAction.property.dynamoDB"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDynamoDbAction`](#aws-cdk-sdk.iotevents.IoTEventsDynamoDbAction)

---

##### `dynamoDBv2`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAction.property.dynamoDBv2"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDynamoDBv2Action`](#aws-cdk-sdk.iotevents.IoTEventsDynamoDBv2Action)

---

##### `firehose`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAction.property.firehose"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsFirehoseAction`](#aws-cdk-sdk.iotevents.IoTEventsFirehoseAction)

---

##### `iotEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAction.property.iotEvents"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsIotEventsAction`](#aws-cdk-sdk.iotevents.IoTEventsIotEventsAction)

---

##### `iotSiteWise`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAction.property.iotSiteWise"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsIotSiteWiseAction`](#aws-cdk-sdk.iotevents.IoTEventsIotSiteWiseAction)

---

##### `iotTopicPublish`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAction.property.iotTopicPublish"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsIotTopicPublishAction`](#aws-cdk-sdk.iotevents.IoTEventsIotTopicPublishAction)

---

##### `lambda`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAction.property.lambda"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsLambdaAction`](#aws-cdk-sdk.iotevents.IoTEventsLambdaAction)

---

##### `resetTimer`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAction.property.resetTimer"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsResetTimerAction`](#aws-cdk-sdk.iotevents.IoTEventsResetTimerAction)

---

##### `setTimer`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAction.property.setTimer"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsSetTimerAction`](#aws-cdk-sdk.iotevents.IoTEventsSetTimerAction)

---

##### `setVariable`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAction.property.setVariable"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsSetVariableAction`](#aws-cdk-sdk.iotevents.IoTEventsSetVariableAction)

---

##### `sns`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAction.property.sns"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsSnsTopicPublishAction`](#aws-cdk-sdk.iotevents.IoTEventsSnsTopicPublishAction)

---

##### `sqs`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAction.property.sqs"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsSqsAction`](#aws-cdk-sdk.iotevents.IoTEventsSqsAction)

---

### IoTEventsAssetPropertyTimestamp <a name="aws-cdk-sdk.iotevents.IoTEventsAssetPropertyTimestamp"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsAssetPropertyTimestamp: iotevents.IoTEventsAssetPropertyTimestamp = { ... }
```

##### `timeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAssetPropertyTimestamp.property.timeInSeconds"></a>

- *Type:* `string`

---

##### `offsetInNanos`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAssetPropertyTimestamp.property.offsetInNanos"></a>

- *Type:* `string`

---

### IoTEventsAssetPropertyValue <a name="aws-cdk-sdk.iotevents.IoTEventsAssetPropertyValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsAssetPropertyValue: iotevents.IoTEventsAssetPropertyValue = { ... }
```

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAssetPropertyValue.property.value"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsAssetPropertyVariant`](#aws-cdk-sdk.iotevents.IoTEventsAssetPropertyVariant)

---

##### `quality`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAssetPropertyValue.property.quality"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAssetPropertyValue.property.timestamp"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsAssetPropertyTimestamp`](#aws-cdk-sdk.iotevents.IoTEventsAssetPropertyTimestamp)

---

### IoTEventsAssetPropertyVariant <a name="aws-cdk-sdk.iotevents.IoTEventsAssetPropertyVariant"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsAssetPropertyVariant: iotevents.IoTEventsAssetPropertyVariant = { ... }
```

##### `booleanValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAssetPropertyVariant.property.booleanValue"></a>

- *Type:* `string`

---

##### `doubleValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAssetPropertyVariant.property.doubleValue"></a>

- *Type:* `string`

---

##### `integerValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAssetPropertyVariant.property.integerValue"></a>

- *Type:* `string`

---

##### `stringValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAssetPropertyVariant.property.stringValue"></a>

- *Type:* `string`

---

### IoTEventsAttribute <a name="aws-cdk-sdk.iotevents.IoTEventsAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsAttribute: iotevents.IoTEventsAttribute = { ... }
```

##### `jsonPath`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsAttribute.property.jsonPath"></a>

- *Type:* `string`

---

### IoTEventsClearTimerAction <a name="aws-cdk-sdk.iotevents.IoTEventsClearTimerAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsClearTimerAction: iotevents.IoTEventsClearTimerAction = { ... }
```

##### `timerName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsClearTimerAction.property.timerName"></a>

- *Type:* `string`

---

### IoTEventsCreateDetectorModelRequest <a name="aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsCreateDetectorModelRequest: iotevents.IoTEventsCreateDetectorModelRequest = { ... }
```

##### `detectorModelDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelRequest.property.detectorModelDefinition"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDetectorModelDefinition`](#aws-cdk-sdk.iotevents.IoTEventsDetectorModelDefinition)

---

##### `detectorModelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelRequest.property.detectorModelName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `detectorModelDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelRequest.property.detectorModelDescription"></a>

- *Type:* `string`

---

##### `evaluationMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelRequest.property.evaluationMethod"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelRequest.property.key"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsTag`](#aws-cdk-sdk.iotevents.IoTEventsTag)[]

---

### IoTEventsCreateDetectorModelResponse <a name="aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsCreateDetectorModelResponse: iotevents.IoTEventsCreateDetectorModelResponse = { ... }
```

##### `detectorModelConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelResponse.property.detectorModelConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration`](#aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration)

---

### IoTEventsCreateInputRequest <a name="aws-cdk-sdk.iotevents.IoTEventsCreateInputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsCreateInputRequest: iotevents.IoTEventsCreateInputRequest = { ... }
```

##### `inputDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsCreateInputRequest.property.inputDefinition"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsInputDefinition`](#aws-cdk-sdk.iotevents.IoTEventsInputDefinition)

---

##### `inputName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsCreateInputRequest.property.inputName"></a>

- *Type:* `string`

---

##### `inputDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsCreateInputRequest.property.inputDescription"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsCreateInputRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsTag`](#aws-cdk-sdk.iotevents.IoTEventsTag)[]

---

### IoTEventsCreateInputResponse <a name="aws-cdk-sdk.iotevents.IoTEventsCreateInputResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsCreateInputResponse: iotevents.IoTEventsCreateInputResponse = { ... }
```

##### `inputConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsCreateInputResponse.property.inputConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsInputConfiguration`](#aws-cdk-sdk.iotevents.IoTEventsInputConfiguration)

---

### IoTEventsDeleteDetectorModelRequest <a name="aws-cdk-sdk.iotevents.IoTEventsDeleteDetectorModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDeleteDetectorModelRequest: iotevents.IoTEventsDeleteDetectorModelRequest = { ... }
```

##### `detectorModelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDeleteDetectorModelRequest.property.detectorModelName"></a>

- *Type:* `string`

---

### IoTEventsDeleteDetectorModelResponse <a name="aws-cdk-sdk.iotevents.IoTEventsDeleteDetectorModelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDeleteDetectorModelResponse: iotevents.IoTEventsDeleteDetectorModelResponse = { ... }
```

### IoTEventsDeleteInputRequest <a name="aws-cdk-sdk.iotevents.IoTEventsDeleteInputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDeleteInputRequest: iotevents.IoTEventsDeleteInputRequest = { ... }
```

##### `inputName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDeleteInputRequest.property.inputName"></a>

- *Type:* `string`

---

### IoTEventsDeleteInputResponse <a name="aws-cdk-sdk.iotevents.IoTEventsDeleteInputResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDeleteInputResponse: iotevents.IoTEventsDeleteInputResponse = { ... }
```

### IoTEventsDescribeDetectorModelRequest <a name="aws-cdk-sdk.iotevents.IoTEventsDescribeDetectorModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDescribeDetectorModelRequest: iotevents.IoTEventsDescribeDetectorModelRequest = { ... }
```

##### `detectorModelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDescribeDetectorModelRequest.property.detectorModelName"></a>

- *Type:* `string`

---

##### `detectorModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDescribeDetectorModelRequest.property.detectorModelVersion"></a>

- *Type:* `string`

---

### IoTEventsDescribeDetectorModelResponse <a name="aws-cdk-sdk.iotevents.IoTEventsDescribeDetectorModelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDescribeDetectorModelResponse: iotevents.IoTEventsDescribeDetectorModelResponse = { ... }
```

##### `detectorModel`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDescribeDetectorModelResponse.property.detectorModel"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDetectorModel`](#aws-cdk-sdk.iotevents.IoTEventsDetectorModel)

---

### IoTEventsDescribeInputRequest <a name="aws-cdk-sdk.iotevents.IoTEventsDescribeInputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDescribeInputRequest: iotevents.IoTEventsDescribeInputRequest = { ... }
```

##### `inputName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDescribeInputRequest.property.inputName"></a>

- *Type:* `string`

---

### IoTEventsDescribeInputResponse <a name="aws-cdk-sdk.iotevents.IoTEventsDescribeInputResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDescribeInputResponse: iotevents.IoTEventsDescribeInputResponse = { ... }
```

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDescribeInputResponse.property.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsInput`](#aws-cdk-sdk.iotevents.IoTEventsInput)

---

### IoTEventsDescribeLoggingOptionsRequest <a name="aws-cdk-sdk.iotevents.IoTEventsDescribeLoggingOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDescribeLoggingOptionsRequest: iotevents.IoTEventsDescribeLoggingOptionsRequest = { ... }
```

### IoTEventsDescribeLoggingOptionsResponse <a name="aws-cdk-sdk.iotevents.IoTEventsDescribeLoggingOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDescribeLoggingOptionsResponse: iotevents.IoTEventsDescribeLoggingOptionsResponse = { ... }
```

##### `loggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDescribeLoggingOptionsResponse.property.loggingOptions"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsLoggingOptions`](#aws-cdk-sdk.iotevents.IoTEventsLoggingOptions)

---

### IoTEventsDetectorDebugOption <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorDebugOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDetectorDebugOption: iotevents.IoTEventsDetectorDebugOption = { ... }
```

##### `detectorModelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorDebugOption.property.detectorModelName"></a>

- *Type:* `string`

---

##### `keyValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorDebugOption.property.keyValue"></a>

- *Type:* `string`

---

### IoTEventsDetectorModel <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDetectorModel: iotevents.IoTEventsDetectorModel = { ... }
```

##### `detectorModelConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModel.property.detectorModelConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration`](#aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration)

---

##### `detectorModelDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModel.property.detectorModelDefinition"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDetectorModelDefinition`](#aws-cdk-sdk.iotevents.IoTEventsDetectorModelDefinition)

---

### IoTEventsDetectorModelConfiguration <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDetectorModelConfiguration: iotevents.IoTEventsDetectorModelConfiguration = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration.property.creationTime"></a>

- *Type:* `string`

---

##### `detectorModelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration.property.detectorModelArn"></a>

- *Type:* `string`

---

##### `detectorModelDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration.property.detectorModelDescription"></a>

- *Type:* `string`

---

##### `detectorModelName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration.property.detectorModelName"></a>

- *Type:* `string`

---

##### `detectorModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration.property.detectorModelVersion"></a>

- *Type:* `string`

---

##### `evaluationMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration.property.evaluationMethod"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration.property.key"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration.property.status"></a>

- *Type:* `string`

---

### IoTEventsDetectorModelDefinition <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDetectorModelDefinition: iotevents.IoTEventsDetectorModelDefinition = { ... }
```

##### `initialStateName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelDefinition.property.initialStateName"></a>

- *Type:* `string`

---

##### `states`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelDefinition.property.states"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsState`](#aws-cdk-sdk.iotevents.IoTEventsState)[]

---

### IoTEventsDetectorModelSummary <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDetectorModelSummary: iotevents.IoTEventsDetectorModelSummary = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `detectorModelDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelSummary.property.detectorModelDescription"></a>

- *Type:* `string`

---

##### `detectorModelName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelSummary.property.detectorModelName"></a>

- *Type:* `string`

---

### IoTEventsDetectorModelVersionSummary <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelVersionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDetectorModelVersionSummary: iotevents.IoTEventsDetectorModelVersionSummary = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelVersionSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `detectorModelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelVersionSummary.property.detectorModelArn"></a>

- *Type:* `string`

---

##### `detectorModelName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelVersionSummary.property.detectorModelName"></a>

- *Type:* `string`

---

##### `detectorModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelVersionSummary.property.detectorModelVersion"></a>

- *Type:* `string`

---

##### `evaluationMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelVersionSummary.property.evaluationMethod"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelVersionSummary.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelVersionSummary.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDetectorModelVersionSummary.property.status"></a>

- *Type:* `string`

---

### IoTEventsDynamoDbAction <a name="aws-cdk-sdk.iotevents.IoTEventsDynamoDbAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDynamoDbAction: iotevents.IoTEventsDynamoDbAction = { ... }
```

##### `hashKeyField`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDynamoDbAction.property.hashKeyField"></a>

- *Type:* `string`

---

##### `hashKeyValue`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDynamoDbAction.property.hashKeyValue"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDynamoDbAction.property.tableName"></a>

- *Type:* `string`

---

##### `hashKeyType`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDynamoDbAction.property.hashKeyType"></a>

- *Type:* `string`

---

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDynamoDbAction.property.operation"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDynamoDbAction.property.payload"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsPayload`](#aws-cdk-sdk.iotevents.IoTEventsPayload)

---

##### `payloadField`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDynamoDbAction.property.payloadField"></a>

- *Type:* `string`

---

##### `rangeKeyField`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDynamoDbAction.property.rangeKeyField"></a>

- *Type:* `string`

---

##### `rangeKeyType`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDynamoDbAction.property.rangeKeyType"></a>

- *Type:* `string`

---

##### `rangeKeyValue`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDynamoDbAction.property.rangeKeyValue"></a>

- *Type:* `string`

---

### IoTEventsDynamoDBv2Action <a name="aws-cdk-sdk.iotevents.IoTEventsDynamoDBv2Action"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsDynamoDBv2Action: iotevents.IoTEventsDynamoDBv2Action = { ... }
```

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDynamoDBv2Action.property.tableName"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsDynamoDBv2Action.property.payload"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsPayload`](#aws-cdk-sdk.iotevents.IoTEventsPayload)

---

### IoTEventsEvent <a name="aws-cdk-sdk.iotevents.IoTEventsEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsEvent: iotevents.IoTEventsEvent = { ... }
```

##### `eventName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsEvent.property.eventName"></a>

- *Type:* `string`

---

##### `actions`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsEvent.property.actions"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsAction`](#aws-cdk-sdk.iotevents.IoTEventsAction)[]

---

##### `condition`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsEvent.property.condition"></a>

- *Type:* `string`

---

### IoTEventsFirehoseAction <a name="aws-cdk-sdk.iotevents.IoTEventsFirehoseAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsFirehoseAction: iotevents.IoTEventsFirehoseAction = { ... }
```

##### `deliveryStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsFirehoseAction.property.deliveryStreamName"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsFirehoseAction.property.payload"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsPayload`](#aws-cdk-sdk.iotevents.IoTEventsPayload)

---

##### `separator`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsFirehoseAction.property.separator"></a>

- *Type:* `string`

---

### IoTEventsInput <a name="aws-cdk-sdk.iotevents.IoTEventsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsInput: iotevents.IoTEventsInput = { ... }
```

##### `inputConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsInput.property.inputConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsInputConfiguration`](#aws-cdk-sdk.iotevents.IoTEventsInputConfiguration)

---

##### `inputDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsInput.property.inputDefinition"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsInputDefinition`](#aws-cdk-sdk.iotevents.IoTEventsInputDefinition)

---

### IoTEventsInputConfiguration <a name="aws-cdk-sdk.iotevents.IoTEventsInputConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsInputConfiguration: iotevents.IoTEventsInputConfiguration = { ... }
```

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsInputConfiguration.property.creationTime"></a>

- *Type:* `string`

---

##### `inputArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsInputConfiguration.property.inputArn"></a>

- *Type:* `string`

---

##### `inputName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsInputConfiguration.property.inputName"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsInputConfiguration.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsInputConfiguration.property.status"></a>

- *Type:* `string`

---

##### `inputDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsInputConfiguration.property.inputDescription"></a>

- *Type:* `string`

---

### IoTEventsInputDefinition <a name="aws-cdk-sdk.iotevents.IoTEventsInputDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsInputDefinition: iotevents.IoTEventsInputDefinition = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsInputDefinition.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsAttribute`](#aws-cdk-sdk.iotevents.IoTEventsAttribute)[]

---

### IoTEventsInputSummary <a name="aws-cdk-sdk.iotevents.IoTEventsInputSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsInputSummary: iotevents.IoTEventsInputSummary = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsInputSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `inputArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsInputSummary.property.inputArn"></a>

- *Type:* `string`

---

##### `inputDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsInputSummary.property.inputDescription"></a>

- *Type:* `string`

---

##### `inputName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsInputSummary.property.inputName"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsInputSummary.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsInputSummary.property.status"></a>

- *Type:* `string`

---

### IoTEventsIotEventsAction <a name="aws-cdk-sdk.iotevents.IoTEventsIotEventsAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsIotEventsAction: iotevents.IoTEventsIotEventsAction = { ... }
```

##### `inputName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsIotEventsAction.property.inputName"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsIotEventsAction.property.payload"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsPayload`](#aws-cdk-sdk.iotevents.IoTEventsPayload)

---

### IoTEventsIotSiteWiseAction <a name="aws-cdk-sdk.iotevents.IoTEventsIotSiteWiseAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsIotSiteWiseAction: iotevents.IoTEventsIotSiteWiseAction = { ... }
```

##### `propertyValue`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsIotSiteWiseAction.property.propertyValue"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsAssetPropertyValue`](#aws-cdk-sdk.iotevents.IoTEventsAssetPropertyValue)

---

##### `assetId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsIotSiteWiseAction.property.assetId"></a>

- *Type:* `string`

---

##### `entryId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsIotSiteWiseAction.property.entryId"></a>

- *Type:* `string`

---

##### `propertyAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsIotSiteWiseAction.property.propertyAlias"></a>

- *Type:* `string`

---

##### `propertyId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsIotSiteWiseAction.property.propertyId"></a>

- *Type:* `string`

---

### IoTEventsIotTopicPublishAction <a name="aws-cdk-sdk.iotevents.IoTEventsIotTopicPublishAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsIotTopicPublishAction: iotevents.IoTEventsIotTopicPublishAction = { ... }
```

##### `mqttTopic`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsIotTopicPublishAction.property.mqttTopic"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsIotTopicPublishAction.property.payload"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsPayload`](#aws-cdk-sdk.iotevents.IoTEventsPayload)

---

### IoTEventsLambdaAction <a name="aws-cdk-sdk.iotevents.IoTEventsLambdaAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsLambdaAction: iotevents.IoTEventsLambdaAction = { ... }
```

##### `functionArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsLambdaAction.property.functionArn"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsLambdaAction.property.payload"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsPayload`](#aws-cdk-sdk.iotevents.IoTEventsPayload)

---

### IoTEventsListDetectorModelsRequest <a name="aws-cdk-sdk.iotevents.IoTEventsListDetectorModelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsListDetectorModelsRequest: iotevents.IoTEventsListDetectorModelsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsListDetectorModelsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsListDetectorModelsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTEventsListDetectorModelsResponse <a name="aws-cdk-sdk.iotevents.IoTEventsListDetectorModelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsListDetectorModelsResponse: iotevents.IoTEventsListDetectorModelsResponse = { ... }
```

##### `detectorModelSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsListDetectorModelsResponse.property.detectorModelSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDetectorModelSummary`](#aws-cdk-sdk.iotevents.IoTEventsDetectorModelSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsListDetectorModelsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTEventsListDetectorModelVersionsRequest <a name="aws-cdk-sdk.iotevents.IoTEventsListDetectorModelVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsListDetectorModelVersionsRequest: iotevents.IoTEventsListDetectorModelVersionsRequest = { ... }
```

##### `detectorModelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsListDetectorModelVersionsRequest.property.detectorModelName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsListDetectorModelVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsListDetectorModelVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTEventsListDetectorModelVersionsResponse <a name="aws-cdk-sdk.iotevents.IoTEventsListDetectorModelVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsListDetectorModelVersionsResponse: iotevents.IoTEventsListDetectorModelVersionsResponse = { ... }
```

##### `detectorModelVersionSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsListDetectorModelVersionsResponse.property.detectorModelVersionSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDetectorModelVersionSummary`](#aws-cdk-sdk.iotevents.IoTEventsDetectorModelVersionSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsListDetectorModelVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTEventsListInputsRequest <a name="aws-cdk-sdk.iotevents.IoTEventsListInputsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsListInputsRequest: iotevents.IoTEventsListInputsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsListInputsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsListInputsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IoTEventsListInputsResponse <a name="aws-cdk-sdk.iotevents.IoTEventsListInputsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsListInputsResponse: iotevents.IoTEventsListInputsResponse = { ... }
```

##### `inputSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsListInputsResponse.property.inputSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsInputSummary`](#aws-cdk-sdk.iotevents.IoTEventsInputSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsListInputsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IoTEventsListTagsForResourceRequest <a name="aws-cdk-sdk.iotevents.IoTEventsListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsListTagsForResourceRequest: iotevents.IoTEventsListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### IoTEventsListTagsForResourceResponse <a name="aws-cdk-sdk.iotevents.IoTEventsListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsListTagsForResourceResponse: iotevents.IoTEventsListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsTag`](#aws-cdk-sdk.iotevents.IoTEventsTag)[]

---

### IoTEventsLoggingOptions <a name="aws-cdk-sdk.iotevents.IoTEventsLoggingOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsLoggingOptions: iotevents.IoTEventsLoggingOptions = { ... }
```

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsLoggingOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `level`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsLoggingOptions.property.level"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsLoggingOptions.property.roleArn"></a>

- *Type:* `string`

---

##### `detectorDebugOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsLoggingOptions.property.detectorDebugOptions"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDetectorDebugOption`](#aws-cdk-sdk.iotevents.IoTEventsDetectorDebugOption)[]

---

### IoTEventsOnEnterLifecycle <a name="aws-cdk-sdk.iotevents.IoTEventsOnEnterLifecycle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsOnEnterLifecycle: iotevents.IoTEventsOnEnterLifecycle = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsOnEnterLifecycle.property.events"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsEvent`](#aws-cdk-sdk.iotevents.IoTEventsEvent)[]

---

### IoTEventsOnExitLifecycle <a name="aws-cdk-sdk.iotevents.IoTEventsOnExitLifecycle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsOnExitLifecycle: iotevents.IoTEventsOnExitLifecycle = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsOnExitLifecycle.property.events"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsEvent`](#aws-cdk-sdk.iotevents.IoTEventsEvent)[]

---

### IoTEventsOnInputLifecycle <a name="aws-cdk-sdk.iotevents.IoTEventsOnInputLifecycle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsOnInputLifecycle: iotevents.IoTEventsOnInputLifecycle = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsOnInputLifecycle.property.events"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsEvent`](#aws-cdk-sdk.iotevents.IoTEventsEvent)[]

---

##### `transitionEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsOnInputLifecycle.property.transitionEvents"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsTransitionEvent`](#aws-cdk-sdk.iotevents.IoTEventsTransitionEvent)[]

---

### IoTEventsPayload <a name="aws-cdk-sdk.iotevents.IoTEventsPayload"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsPayload: iotevents.IoTEventsPayload = { ... }
```

##### `contentExpression`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsPayload.property.contentExpression"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsPayload.property.type"></a>

- *Type:* `string`

---

### IoTEventsPutLoggingOptionsRequest <a name="aws-cdk-sdk.iotevents.IoTEventsPutLoggingOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsPutLoggingOptionsRequest: iotevents.IoTEventsPutLoggingOptionsRequest = { ... }
```

##### `loggingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsPutLoggingOptionsRequest.property.loggingOptions"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsLoggingOptions`](#aws-cdk-sdk.iotevents.IoTEventsLoggingOptions)

---

### IoTEventsResetTimerAction <a name="aws-cdk-sdk.iotevents.IoTEventsResetTimerAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsResetTimerAction: iotevents.IoTEventsResetTimerAction = { ... }
```

##### `timerName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResetTimerAction.property.timerName"></a>

- *Type:* `string`

---

### IoTEventsSetTimerAction <a name="aws-cdk-sdk.iotevents.IoTEventsSetTimerAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsSetTimerAction: iotevents.IoTEventsSetTimerAction = { ... }
```

##### `timerName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsSetTimerAction.property.timerName"></a>

- *Type:* `string`

---

##### `durationExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsSetTimerAction.property.durationExpression"></a>

- *Type:* `string`

---

##### `seconds`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsSetTimerAction.property.seconds"></a>

- *Type:* `number`

---

### IoTEventsSetVariableAction <a name="aws-cdk-sdk.iotevents.IoTEventsSetVariableAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsSetVariableAction: iotevents.IoTEventsSetVariableAction = { ... }
```

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsSetVariableAction.property.value"></a>

- *Type:* `string`

---

##### `variableName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsSetVariableAction.property.variableName"></a>

- *Type:* `string`

---

### IoTEventsSnsTopicPublishAction <a name="aws-cdk-sdk.iotevents.IoTEventsSnsTopicPublishAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsSnsTopicPublishAction: iotevents.IoTEventsSnsTopicPublishAction = { ... }
```

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsSnsTopicPublishAction.property.targetArn"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsSnsTopicPublishAction.property.payload"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsPayload`](#aws-cdk-sdk.iotevents.IoTEventsPayload)

---

### IoTEventsSqsAction <a name="aws-cdk-sdk.iotevents.IoTEventsSqsAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsSqsAction: iotevents.IoTEventsSqsAction = { ... }
```

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsSqsAction.property.queueUrl"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsSqsAction.property.payload"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsPayload`](#aws-cdk-sdk.iotevents.IoTEventsPayload)

---

##### `useBase64`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsSqsAction.property.useBase64"></a>

- *Type:* `boolean`

---

### IoTEventsState <a name="aws-cdk-sdk.iotevents.IoTEventsState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsState: iotevents.IoTEventsState = { ... }
```

##### `stateName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsState.property.stateName"></a>

- *Type:* `string`

---

##### `onEnter`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsState.property.onEnter"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsOnEnterLifecycle`](#aws-cdk-sdk.iotevents.IoTEventsOnEnterLifecycle)

---

##### `onExit`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsState.property.onExit"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsOnExitLifecycle`](#aws-cdk-sdk.iotevents.IoTEventsOnExitLifecycle)

---

##### `onInput`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsState.property.onInput"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsOnInputLifecycle`](#aws-cdk-sdk.iotevents.IoTEventsOnInputLifecycle)

---

### IoTEventsTag <a name="aws-cdk-sdk.iotevents.IoTEventsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsTag: iotevents.IoTEventsTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsTag.property.value"></a>

- *Type:* `string`

---

### IoTEventsTagResourceRequest <a name="aws-cdk-sdk.iotevents.IoTEventsTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsTagResourceRequest: iotevents.IoTEventsTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsTag`](#aws-cdk-sdk.iotevents.IoTEventsTag)[]

---

### IoTEventsTagResourceResponse <a name="aws-cdk-sdk.iotevents.IoTEventsTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsTagResourceResponse: iotevents.IoTEventsTagResourceResponse = { ... }
```

### IoTEventsTransitionEvent <a name="aws-cdk-sdk.iotevents.IoTEventsTransitionEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsTransitionEvent: iotevents.IoTEventsTransitionEvent = { ... }
```

##### `condition`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsTransitionEvent.property.condition"></a>

- *Type:* `string`

---

##### `eventName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsTransitionEvent.property.eventName"></a>

- *Type:* `string`

---

##### `nextState`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsTransitionEvent.property.nextState"></a>

- *Type:* `string`

---

##### `actions`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsTransitionEvent.property.actions"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsAction`](#aws-cdk-sdk.iotevents.IoTEventsAction)[]

---

### IoTEventsUntagResourceRequest <a name="aws-cdk-sdk.iotevents.IoTEventsUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsUntagResourceRequest: iotevents.IoTEventsUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### IoTEventsUntagResourceResponse <a name="aws-cdk-sdk.iotevents.IoTEventsUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsUntagResourceResponse: iotevents.IoTEventsUntagResourceResponse = { ... }
```

### IoTEventsUpdateDetectorModelRequest <a name="aws-cdk-sdk.iotevents.IoTEventsUpdateDetectorModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsUpdateDetectorModelRequest: iotevents.IoTEventsUpdateDetectorModelRequest = { ... }
```

##### `detectorModelDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsUpdateDetectorModelRequest.property.detectorModelDefinition"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDetectorModelDefinition`](#aws-cdk-sdk.iotevents.IoTEventsDetectorModelDefinition)

---

##### `detectorModelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsUpdateDetectorModelRequest.property.detectorModelName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsUpdateDetectorModelRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `detectorModelDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsUpdateDetectorModelRequest.property.detectorModelDescription"></a>

- *Type:* `string`

---

##### `evaluationMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsUpdateDetectorModelRequest.property.evaluationMethod"></a>

- *Type:* `string`

---

### IoTEventsUpdateDetectorModelResponse <a name="aws-cdk-sdk.iotevents.IoTEventsUpdateDetectorModelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsUpdateDetectorModelResponse: iotevents.IoTEventsUpdateDetectorModelResponse = { ... }
```

##### `detectorModelConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsUpdateDetectorModelResponse.property.detectorModelConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration`](#aws-cdk-sdk.iotevents.IoTEventsDetectorModelConfiguration)

---

### IoTEventsUpdateInputRequest <a name="aws-cdk-sdk.iotevents.IoTEventsUpdateInputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsUpdateInputRequest: iotevents.IoTEventsUpdateInputRequest = { ... }
```

##### `inputDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsUpdateInputRequest.property.inputDefinition"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsInputDefinition`](#aws-cdk-sdk.iotevents.IoTEventsInputDefinition)

---

##### `inputName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsUpdateInputRequest.property.inputName"></a>

- *Type:* `string`

---

##### `inputDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsUpdateInputRequest.property.inputDescription"></a>

- *Type:* `string`

---

### IoTEventsUpdateInputResponse <a name="aws-cdk-sdk.iotevents.IoTEventsUpdateInputResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

const ioTEventsUpdateInputResponse: iotevents.IoTEventsUpdateInputResponse = { ... }
```

##### `inputConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsUpdateInputResponse.property.inputConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsInputConfiguration`](#aws-cdk-sdk.iotevents.IoTEventsInputConfiguration)

---

## Classes <a name="Classes"></a>

### IoTEventsResponsesCreateDetectorModel <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModel"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModel.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesCreateDetectorModel(__scope: Construct, __resources: string[], __input: IoTEventsCreateDetectorModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelRequest`](#aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelRequest)

---



#### Properties <a name="Properties"></a>

##### `detectorModelConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModel.property.detectorModelConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration`](#aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration)

---


### IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration(__scope: Construct, __resources: string[], __input: IoTEventsCreateDetectorModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelRequest`](#aws-cdk-sdk.iotevents.IoTEventsCreateDetectorModelRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration.property.creationTime"></a>

- *Type:* `string`

---

##### `detectorModelArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration.property.detectorModelArn"></a>

- *Type:* `string`

---

##### `detectorModelDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration.property.detectorModelDescription"></a>

- *Type:* `string`

---

##### `detectorModelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration.property.detectorModelName"></a>

- *Type:* `string`

---

##### `detectorModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration.property.detectorModelVersion"></a>

- *Type:* `string`

---

##### `evaluationMethod`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration.property.evaluationMethod"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration.property.key"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateDetectorModelDetectorModelConfiguration.property.status"></a>

- *Type:* `string`

---


### IoTEventsResponsesCreateInput <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInput"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInput.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesCreateInput(__scope: Construct, __resources: string[], __input: IoTEventsCreateInputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsCreateInputRequest`](#aws-cdk-sdk.iotevents.IoTEventsCreateInputRequest)

---



#### Properties <a name="Properties"></a>

##### `inputConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInput.property.inputConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInputInputConfiguration`](#aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInputInputConfiguration)

---


### IoTEventsResponsesCreateInputInputConfiguration <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInputInputConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInputInputConfiguration.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesCreateInputInputConfiguration(__scope: Construct, __resources: string[], __input: IoTEventsCreateInputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInputInputConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInputInputConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInputInputConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsCreateInputRequest`](#aws-cdk-sdk.iotevents.IoTEventsCreateInputRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInputInputConfiguration.property.creationTime"></a>

- *Type:* `string`

---

##### `inputArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInputInputConfiguration.property.inputArn"></a>

- *Type:* `string`

---

##### `inputDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInputInputConfiguration.property.inputDescription"></a>

- *Type:* `string`

---

##### `inputName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInputInputConfiguration.property.inputName"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInputInputConfiguration.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesCreateInputInputConfiguration.property.status"></a>

- *Type:* `string`

---


### IoTEventsResponsesDescribeDetectorModel <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModel"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModel.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesDescribeDetectorModel(__scope: Construct, __resources: string[], __input: IoTEventsDescribeDetectorModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDescribeDetectorModelRequest`](#aws-cdk-sdk.iotevents.IoTEventsDescribeDetectorModelRequest)

---



#### Properties <a name="Properties"></a>

##### `detectorModel`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModel.property.detectorModel"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModel`](#aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModel)

---


### IoTEventsResponsesDescribeDetectorModelDetectorModel <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModel"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModel.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModel(__scope: Construct, __resources: string[], __input: IoTEventsDescribeDetectorModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDescribeDetectorModelRequest`](#aws-cdk-sdk.iotevents.IoTEventsDescribeDetectorModelRequest)

---



#### Properties <a name="Properties"></a>

##### `detectorModelConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModel.property.detectorModelConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration`](#aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration)

---

##### `detectorModelDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModel.property.detectorModelDefinition"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelDefinition`](#aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelDefinition)

---


### IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration(__scope: Construct, __resources: string[], __input: IoTEventsDescribeDetectorModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDescribeDetectorModelRequest`](#aws-cdk-sdk.iotevents.IoTEventsDescribeDetectorModelRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration.property.creationTime"></a>

- *Type:* `string`

---

##### `detectorModelArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration.property.detectorModelArn"></a>

- *Type:* `string`

---

##### `detectorModelDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration.property.detectorModelDescription"></a>

- *Type:* `string`

---

##### `detectorModelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration.property.detectorModelName"></a>

- *Type:* `string`

---

##### `detectorModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration.property.detectorModelVersion"></a>

- *Type:* `string`

---

##### `evaluationMethod`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration.property.evaluationMethod"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration.property.key"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelConfiguration.property.status"></a>

- *Type:* `string`

---


### IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelDefinition <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelDefinition.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelDefinition(__scope: Construct, __resources: string[], __input: IoTEventsDescribeDetectorModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDescribeDetectorModelRequest`](#aws-cdk-sdk.iotevents.IoTEventsDescribeDetectorModelRequest)

---



#### Properties <a name="Properties"></a>

##### `initialStateName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelDefinition.property.initialStateName"></a>

- *Type:* `string`

---

##### `states`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeDetectorModelDetectorModelDetectorModelDefinition.property.states"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsState`](#aws-cdk-sdk.iotevents.IoTEventsState)[]

---


### IoTEventsResponsesDescribeInput <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInput"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInput.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesDescribeInput(__scope: Construct, __resources: string[], __input: IoTEventsDescribeInputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDescribeInputRequest`](#aws-cdk-sdk.iotevents.IoTEventsDescribeInputRequest)

---



#### Properties <a name="Properties"></a>

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInput.property.input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInput`](#aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInput)

---


### IoTEventsResponsesDescribeInputInput <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInput"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInput.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesDescribeInputInput(__scope: Construct, __resources: string[], __input: IoTEventsDescribeInputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDescribeInputRequest`](#aws-cdk-sdk.iotevents.IoTEventsDescribeInputRequest)

---



#### Properties <a name="Properties"></a>

##### `inputConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInput.property.inputConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputConfiguration`](#aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputConfiguration)

---

##### `inputDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInput.property.inputDefinition"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputDefinition`](#aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputDefinition)

---


### IoTEventsResponsesDescribeInputInputInputConfiguration <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputConfiguration.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesDescribeInputInputInputConfiguration(__scope: Construct, __resources: string[], __input: IoTEventsDescribeInputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDescribeInputRequest`](#aws-cdk-sdk.iotevents.IoTEventsDescribeInputRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputConfiguration.property.creationTime"></a>

- *Type:* `string`

---

##### `inputArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputConfiguration.property.inputArn"></a>

- *Type:* `string`

---

##### `inputDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputConfiguration.property.inputDescription"></a>

- *Type:* `string`

---

##### `inputName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputConfiguration.property.inputName"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputConfiguration.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputConfiguration.property.status"></a>

- *Type:* `string`

---


### IoTEventsResponsesDescribeInputInputInputDefinition <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputDefinition.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesDescribeInputInputInputDefinition(__scope: Construct, __resources: string[], __input: IoTEventsDescribeInputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDescribeInputRequest`](#aws-cdk-sdk.iotevents.IoTEventsDescribeInputRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeInputInputInputDefinition.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsAttribute`](#aws-cdk-sdk.iotevents.IoTEventsAttribute)[]

---


### IoTEventsResponsesDescribeLoggingOptions <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeLoggingOptions"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeLoggingOptions.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesDescribeLoggingOptions(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeLoggingOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeLoggingOptions.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `loggingOptions`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeLoggingOptions.property.loggingOptions"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeLoggingOptionsLoggingOptions`](#aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeLoggingOptionsLoggingOptions)

---


### IoTEventsResponsesDescribeLoggingOptionsLoggingOptions <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeLoggingOptionsLoggingOptions"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeLoggingOptionsLoggingOptions.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesDescribeLoggingOptionsLoggingOptions(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeLoggingOptionsLoggingOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeLoggingOptionsLoggingOptions.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `detectorDebugOptions`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeLoggingOptionsLoggingOptions.property.detectorDebugOptions"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDetectorDebugOption`](#aws-cdk-sdk.iotevents.IoTEventsDetectorDebugOption)[]

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeLoggingOptionsLoggingOptions.property.enabled"></a>

- *Type:* `boolean`

---

##### `level`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeLoggingOptionsLoggingOptions.property.level"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesDescribeLoggingOptionsLoggingOptions.property.roleArn"></a>

- *Type:* `string`

---


### IoTEventsResponsesListDetectorModels <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListDetectorModels"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListDetectorModels.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesListDetectorModels(__scope: Construct, __resources: string[], __input: IoTEventsListDetectorModelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListDetectorModels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListDetectorModels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListDetectorModels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsListDetectorModelsRequest`](#aws-cdk-sdk.iotevents.IoTEventsListDetectorModelsRequest)

---



#### Properties <a name="Properties"></a>

##### `detectorModelSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListDetectorModels.property.detectorModelSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDetectorModelSummary`](#aws-cdk-sdk.iotevents.IoTEventsDetectorModelSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListDetectorModels.property.nextToken"></a>

- *Type:* `string`

---


### IoTEventsResponsesListDetectorModelVersions <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListDetectorModelVersions"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListDetectorModelVersions.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesListDetectorModelVersions(__scope: Construct, __resources: string[], __input: IoTEventsListDetectorModelVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListDetectorModelVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListDetectorModelVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListDetectorModelVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsListDetectorModelVersionsRequest`](#aws-cdk-sdk.iotevents.IoTEventsListDetectorModelVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `detectorModelVersionSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListDetectorModelVersions.property.detectorModelVersionSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsDetectorModelVersionSummary`](#aws-cdk-sdk.iotevents.IoTEventsDetectorModelVersionSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListDetectorModelVersions.property.nextToken"></a>

- *Type:* `string`

---


### IoTEventsResponsesListInputs <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListInputs"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListInputs.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesListInputs(__scope: Construct, __resources: string[], __input: IoTEventsListInputsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListInputs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListInputs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListInputs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsListInputsRequest`](#aws-cdk-sdk.iotevents.IoTEventsListInputsRequest)

---



#### Properties <a name="Properties"></a>

##### `inputSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListInputs.property.inputSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsInputSummary`](#aws-cdk-sdk.iotevents.IoTEventsInputSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListInputs.property.nextToken"></a>

- *Type:* `string`

---


### IoTEventsResponsesListTagsForResource <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListTagsForResource.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: IoTEventsListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsListTagsForResourceRequest`](#aws-cdk-sdk.iotevents.IoTEventsListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsTag`](#aws-cdk-sdk.iotevents.IoTEventsTag)[]

---


### IoTEventsResponsesUpdateDetectorModel <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModel"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModel.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesUpdateDetectorModel(__scope: Construct, __resources: string[], __input: IoTEventsUpdateDetectorModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsUpdateDetectorModelRequest`](#aws-cdk-sdk.iotevents.IoTEventsUpdateDetectorModelRequest)

---



#### Properties <a name="Properties"></a>

##### `detectorModelConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModel.property.detectorModelConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration`](#aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration)

---


### IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration(__scope: Construct, __resources: string[], __input: IoTEventsUpdateDetectorModelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsUpdateDetectorModelRequest`](#aws-cdk-sdk.iotevents.IoTEventsUpdateDetectorModelRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration.property.creationTime"></a>

- *Type:* `string`

---

##### `detectorModelArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration.property.detectorModelArn"></a>

- *Type:* `string`

---

##### `detectorModelDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration.property.detectorModelDescription"></a>

- *Type:* `string`

---

##### `detectorModelName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration.property.detectorModelName"></a>

- *Type:* `string`

---

##### `detectorModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration.property.detectorModelVersion"></a>

- *Type:* `string`

---

##### `evaluationMethod`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration.property.evaluationMethod"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration.property.key"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateDetectorModelDetectorModelConfiguration.property.status"></a>

- *Type:* `string`

---


### IoTEventsResponsesUpdateInput <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInput"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInput.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesUpdateInput(__scope: Construct, __resources: string[], __input: IoTEventsUpdateInputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsUpdateInputRequest`](#aws-cdk-sdk.iotevents.IoTEventsUpdateInputRequest)

---



#### Properties <a name="Properties"></a>

##### `inputConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInput.property.inputConfiguration"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInputInputConfiguration`](#aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInputInputConfiguration)

---


### IoTEventsResponsesUpdateInputInputConfiguration <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInputInputConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInputInputConfiguration.Initializer"></a>

```typescript
import { iotevents } from 'aws-cdk-sdk'

new iotevents.IoTEventsResponsesUpdateInputInputConfiguration(__scope: Construct, __resources: string[], __input: IoTEventsUpdateInputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInputInputConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInputInputConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInputInputConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotevents.IoTEventsUpdateInputRequest`](#aws-cdk-sdk.iotevents.IoTEventsUpdateInputRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInputInputConfiguration.property.creationTime"></a>

- *Type:* `string`

---

##### `inputArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInputInputConfiguration.property.inputArn"></a>

- *Type:* `string`

---

##### `inputDescription`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInputInputConfiguration.property.inputDescription"></a>

- *Type:* `string`

---

##### `inputName`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInputInputConfiguration.property.inputName"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInputInputConfiguration.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotevents.IoTEventsResponsesUpdateInputInputConfiguration.property.status"></a>

- *Type:* `string`

---



