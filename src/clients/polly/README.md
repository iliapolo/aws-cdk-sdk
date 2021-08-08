# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### PollyClient <a name="aws-cdk-sdk.polly.PollyClient"></a>

#### Initializer <a name="aws-cdk-sdk.polly.PollyClient.Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

new polly.PollyClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `deleteLexicon` <a name="aws-cdk-sdk.polly.PollyClient.deleteLexicon"></a>

```typescript
public deleteLexicon(input: PollyDeleteLexiconInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyDeleteLexiconInput`](#aws-cdk-sdk.polly.PollyDeleteLexiconInput)

---

##### `describeVoices` <a name="aws-cdk-sdk.polly.PollyClient.describeVoices"></a>

```typescript
public describeVoices(input: PollyDescribeVoicesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyDescribeVoicesInput`](#aws-cdk-sdk.polly.PollyDescribeVoicesInput)

---

##### `fetchLexicon` <a name="aws-cdk-sdk.polly.PollyClient.fetchLexicon"></a>

```typescript
public fetchLexicon(input: PollyGetLexiconInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyGetLexiconInput`](#aws-cdk-sdk.polly.PollyGetLexiconInput)

---

##### `fetchSpeechSynthesisTask` <a name="aws-cdk-sdk.polly.PollyClient.fetchSpeechSynthesisTask"></a>

```typescript
public fetchSpeechSynthesisTask(input: PollyGetSpeechSynthesisTaskInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyGetSpeechSynthesisTaskInput`](#aws-cdk-sdk.polly.PollyGetSpeechSynthesisTaskInput)

---

##### `listLexicons` <a name="aws-cdk-sdk.polly.PollyClient.listLexicons"></a>

```typescript
public listLexicons(input: PollyListLexiconsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyListLexiconsInput`](#aws-cdk-sdk.polly.PollyListLexiconsInput)

---

##### `listSpeechSynthesisTasks` <a name="aws-cdk-sdk.polly.PollyClient.listSpeechSynthesisTasks"></a>

```typescript
public listSpeechSynthesisTasks(input: PollyListSpeechSynthesisTasksInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyListSpeechSynthesisTasksInput`](#aws-cdk-sdk.polly.PollyListSpeechSynthesisTasksInput)

---

##### `putLexicon` <a name="aws-cdk-sdk.polly.PollyClient.putLexicon"></a>

```typescript
public putLexicon(input: PollyPutLexiconInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyPutLexiconInput`](#aws-cdk-sdk.polly.PollyPutLexiconInput)

---

##### `startSpeechSynthesisTask` <a name="aws-cdk-sdk.polly.PollyClient.startSpeechSynthesisTask"></a>

```typescript
public startSpeechSynthesisTask(input: PollyStartSpeechSynthesisTaskInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput`](#aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput)

---

##### `synthesizeSpeech` <a name="aws-cdk-sdk.polly.PollyClient.synthesizeSpeech"></a>

```typescript
public synthesizeSpeech(input: PollySynthesizeSpeechInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollySynthesizeSpeechInput`](#aws-cdk-sdk.polly.PollySynthesizeSpeechInput)

---




## Structs <a name="Structs"></a>

### PollyDeleteLexiconInput <a name="aws-cdk-sdk.polly.PollyDeleteLexiconInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyDeleteLexiconInput: polly.PollyDeleteLexiconInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyDeleteLexiconInput.property.name"></a>

- *Type:* `string`

---

### PollyDeleteLexiconOutput <a name="aws-cdk-sdk.polly.PollyDeleteLexiconOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyDeleteLexiconOutput: polly.PollyDeleteLexiconOutput = { ... }
```

### PollyDescribeVoicesInput <a name="aws-cdk-sdk.polly.PollyDescribeVoicesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyDescribeVoicesInput: polly.PollyDescribeVoicesInput = { ... }
```

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyDescribeVoicesInput.property.engine"></a>

- *Type:* `string`

---

##### `includeAdditionalLanguageCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyDescribeVoicesInput.property.includeAdditionalLanguageCodes"></a>

- *Type:* `boolean`

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyDescribeVoicesInput.property.languageCode"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyDescribeVoicesInput.property.nextToken"></a>

- *Type:* `string`

---

### PollyDescribeVoicesOutput <a name="aws-cdk-sdk.polly.PollyDescribeVoicesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyDescribeVoicesOutput: polly.PollyDescribeVoicesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyDescribeVoicesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `voices`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyDescribeVoicesOutput.property.voices"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyVoice`](#aws-cdk-sdk.polly.PollyVoice)[]

---

### PollyGetLexiconInput <a name="aws-cdk-sdk.polly.PollyGetLexiconInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyGetLexiconInput: polly.PollyGetLexiconInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyGetLexiconInput.property.name"></a>

- *Type:* `string`

---

### PollyGetLexiconOutput <a name="aws-cdk-sdk.polly.PollyGetLexiconOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyGetLexiconOutput: polly.PollyGetLexiconOutput = { ... }
```

##### `lexicon`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyGetLexiconOutput.property.lexicon"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyLexicon`](#aws-cdk-sdk.polly.PollyLexicon)

---

##### `lexiconAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyGetLexiconOutput.property.lexiconAttributes"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyLexiconAttributes`](#aws-cdk-sdk.polly.PollyLexiconAttributes)

---

### PollyGetSpeechSynthesisTaskInput <a name="aws-cdk-sdk.polly.PollyGetSpeechSynthesisTaskInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyGetSpeechSynthesisTaskInput: polly.PollyGetSpeechSynthesisTaskInput = { ... }
```

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyGetSpeechSynthesisTaskInput.property.taskId"></a>

- *Type:* `string`

---

### PollyGetSpeechSynthesisTaskOutput <a name="aws-cdk-sdk.polly.PollyGetSpeechSynthesisTaskOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyGetSpeechSynthesisTaskOutput: polly.PollyGetSpeechSynthesisTaskOutput = { ... }
```

##### `synthesisTask`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyGetSpeechSynthesisTaskOutput.property.synthesisTask"></a>

- *Type:* [`aws-cdk-sdk.polly.PollySynthesisTask`](#aws-cdk-sdk.polly.PollySynthesisTask)

---

### PollyLexicon <a name="aws-cdk-sdk.polly.PollyLexicon"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyLexicon: polly.PollyLexicon = { ... }
```

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyLexicon.property.content"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyLexicon.property.name"></a>

- *Type:* `string`

---

### PollyLexiconAttributes <a name="aws-cdk-sdk.polly.PollyLexiconAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyLexiconAttributes: polly.PollyLexiconAttributes = { ... }
```

##### `alphabet`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyLexiconAttributes.property.alphabet"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyLexiconAttributes.property.languageCode"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyLexiconAttributes.property.lastModified"></a>

- *Type:* `string`

---

##### `lexemesCount`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyLexiconAttributes.property.lexemesCount"></a>

- *Type:* `number`

---

##### `lexiconArn`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyLexiconAttributes.property.lexiconArn"></a>

- *Type:* `string`

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyLexiconAttributes.property.size"></a>

- *Type:* `number`

---

### PollyLexiconDescription <a name="aws-cdk-sdk.polly.PollyLexiconDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyLexiconDescription: polly.PollyLexiconDescription = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyLexiconDescription.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyLexiconAttributes`](#aws-cdk-sdk.polly.PollyLexiconAttributes)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyLexiconDescription.property.name"></a>

- *Type:* `string`

---

### PollyListLexiconsInput <a name="aws-cdk-sdk.polly.PollyListLexiconsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyListLexiconsInput: polly.PollyListLexiconsInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyListLexiconsInput.property.nextToken"></a>

- *Type:* `string`

---

### PollyListLexiconsOutput <a name="aws-cdk-sdk.polly.PollyListLexiconsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyListLexiconsOutput: polly.PollyListLexiconsOutput = { ... }
```

##### `lexicons`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyListLexiconsOutput.property.lexicons"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyLexiconDescription`](#aws-cdk-sdk.polly.PollyLexiconDescription)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyListLexiconsOutput.property.nextToken"></a>

- *Type:* `string`

---

### PollyListSpeechSynthesisTasksInput <a name="aws-cdk-sdk.polly.PollyListSpeechSynthesisTasksInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyListSpeechSynthesisTasksInput: polly.PollyListSpeechSynthesisTasksInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyListSpeechSynthesisTasksInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyListSpeechSynthesisTasksInput.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyListSpeechSynthesisTasksInput.property.status"></a>

- *Type:* `string`

---

### PollyListSpeechSynthesisTasksOutput <a name="aws-cdk-sdk.polly.PollyListSpeechSynthesisTasksOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyListSpeechSynthesisTasksOutput: polly.PollyListSpeechSynthesisTasksOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyListSpeechSynthesisTasksOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `synthesisTasks`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyListSpeechSynthesisTasksOutput.property.synthesisTasks"></a>

- *Type:* [`aws-cdk-sdk.polly.PollySynthesisTask`](#aws-cdk-sdk.polly.PollySynthesisTask)[]

---

### PollyPutLexiconInput <a name="aws-cdk-sdk.polly.PollyPutLexiconInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyPutLexiconInput: polly.PollyPutLexiconInput = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyPutLexiconInput.property.content"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyPutLexiconInput.property.name"></a>

- *Type:* `string`

---

### PollyPutLexiconOutput <a name="aws-cdk-sdk.polly.PollyPutLexiconOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyPutLexiconOutput: polly.PollyPutLexiconOutput = { ... }
```

### PollyStartSpeechSynthesisTaskInput <a name="aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyStartSpeechSynthesisTaskInput: polly.PollyStartSpeechSynthesisTaskInput = { ... }
```

##### `outputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput.property.outputFormat"></a>

- *Type:* `string`

---

##### `outputS3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput.property.outputS3BucketName"></a>

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput.property.text"></a>

- *Type:* `string`

---

##### `voiceId`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput.property.voiceId"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput.property.engine"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput.property.languageCode"></a>

- *Type:* `string`

---

##### `lexiconNames`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput.property.lexiconNames"></a>

- *Type:* `string`[]

---

##### `outputS3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput.property.outputS3KeyPrefix"></a>

- *Type:* `string`

---

##### `sampleRate`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput.property.sampleRate"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `speechMarkTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput.property.speechMarkTypes"></a>

- *Type:* `string`[]

---

##### `textType`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput.property.textType"></a>

- *Type:* `string`

---

### PollyStartSpeechSynthesisTaskOutput <a name="aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyStartSpeechSynthesisTaskOutput: polly.PollyStartSpeechSynthesisTaskOutput = { ... }
```

##### `synthesisTask`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskOutput.property.synthesisTask"></a>

- *Type:* [`aws-cdk-sdk.polly.PollySynthesisTask`](#aws-cdk-sdk.polly.PollySynthesisTask)

---

### PollySynthesisTask <a name="aws-cdk-sdk.polly.PollySynthesisTask"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollySynthesisTask: polly.PollySynthesisTask = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesisTask.property.creationTime"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesisTask.property.engine"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesisTask.property.languageCode"></a>

- *Type:* `string`

---

##### `lexiconNames`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesisTask.property.lexiconNames"></a>

- *Type:* `string`[]

---

##### `outputFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesisTask.property.outputFormat"></a>

- *Type:* `string`

---

##### `outputUri`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesisTask.property.outputUri"></a>

- *Type:* `string`

---

##### `requestCharacters`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesisTask.property.requestCharacters"></a>

- *Type:* `number`

---

##### `sampleRate`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesisTask.property.sampleRate"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesisTask.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `speechMarkTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesisTask.property.speechMarkTypes"></a>

- *Type:* `string`[]

---

##### `taskId`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesisTask.property.taskId"></a>

- *Type:* `string`

---

##### `taskStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesisTask.property.taskStatus"></a>

- *Type:* `string`

---

##### `taskStatusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesisTask.property.taskStatusReason"></a>

- *Type:* `string`

---

##### `textType`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesisTask.property.textType"></a>

- *Type:* `string`

---

##### `voiceId`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesisTask.property.voiceId"></a>

- *Type:* `string`

---

### PollySynthesizeSpeechInput <a name="aws-cdk-sdk.polly.PollySynthesizeSpeechInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollySynthesizeSpeechInput: polly.PollySynthesizeSpeechInput = { ... }
```

##### `outputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollySynthesizeSpeechInput.property.outputFormat"></a>

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollySynthesizeSpeechInput.property.text"></a>

- *Type:* `string`

---

##### `voiceId`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollySynthesizeSpeechInput.property.voiceId"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesizeSpeechInput.property.engine"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesizeSpeechInput.property.languageCode"></a>

- *Type:* `string`

---

##### `lexiconNames`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesizeSpeechInput.property.lexiconNames"></a>

- *Type:* `string`[]

---

##### `sampleRate`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesizeSpeechInput.property.sampleRate"></a>

- *Type:* `string`

---

##### `speechMarkTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesizeSpeechInput.property.speechMarkTypes"></a>

- *Type:* `string`[]

---

##### `textType`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesizeSpeechInput.property.textType"></a>

- *Type:* `string`

---

### PollySynthesizeSpeechOutput <a name="aws-cdk-sdk.polly.PollySynthesizeSpeechOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollySynthesizeSpeechOutput: polly.PollySynthesizeSpeechOutput = { ... }
```

##### `audioStream`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesizeSpeechOutput.property.audioStream"></a>

- *Type:* `any`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesizeSpeechOutput.property.contentType"></a>

- *Type:* `string`

---

##### `requestCharacters`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollySynthesizeSpeechOutput.property.requestCharacters"></a>

- *Type:* `number`

---

### PollyVoice <a name="aws-cdk-sdk.polly.PollyVoice"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

const pollyVoice: polly.PollyVoice = { ... }
```

##### `additionalLanguageCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyVoice.property.additionalLanguageCodes"></a>

- *Type:* `string`[]

---

##### `gender`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyVoice.property.gender"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyVoice.property.id"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyVoice.property.languageCode"></a>

- *Type:* `string`

---

##### `languageName`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyVoice.property.languageName"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyVoice.property.name"></a>

- *Type:* `string`

---

##### `supportedEngines`<sup>Optional</sup> <a name="aws-cdk-sdk.polly.PollyVoice.property.supportedEngines"></a>

- *Type:* `string`[]

---

## Classes <a name="Classes"></a>

### PollyResponsesDescribeVoices <a name="aws-cdk-sdk.polly.PollyResponsesDescribeVoices"></a>

#### Initializer <a name="aws-cdk-sdk.polly.PollyResponsesDescribeVoices.Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

new polly.PollyResponsesDescribeVoices(__scope: Construct, __resources: string[], __input: PollyDescribeVoicesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesDescribeVoices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesDescribeVoices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesDescribeVoices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyDescribeVoicesInput`](#aws-cdk-sdk.polly.PollyDescribeVoicesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesDescribeVoices.property.nextToken"></a>

- *Type:* `string`

---

##### `voices`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesDescribeVoices.property.voices"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyVoice`](#aws-cdk-sdk.polly.PollyVoice)[]

---


### PollyResponsesFetchLexicon <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexicon"></a>

#### Initializer <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexicon.Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

new polly.PollyResponsesFetchLexicon(__scope: Construct, __resources: string[], __input: PollyGetLexiconInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexicon.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexicon.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexicon.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyGetLexiconInput`](#aws-cdk-sdk.polly.PollyGetLexiconInput)

---



#### Properties <a name="Properties"></a>

##### `lexicon`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexicon.property.lexicon"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexicon`](#aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexicon)

---

##### `lexiconAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexicon.property.lexiconAttributes"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexiconAttributes`](#aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexiconAttributes)

---


### PollyResponsesFetchLexiconLexicon <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexicon"></a>

#### Initializer <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexicon.Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

new polly.PollyResponsesFetchLexiconLexicon(__scope: Construct, __resources: string[], __input: PollyGetLexiconInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexicon.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexicon.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexicon.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyGetLexiconInput`](#aws-cdk-sdk.polly.PollyGetLexiconInput)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexicon.property.content"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexicon.property.name"></a>

- *Type:* `string`

---


### PollyResponsesFetchLexiconLexiconAttributes <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexiconAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexiconAttributes.Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

new polly.PollyResponsesFetchLexiconLexiconAttributes(__scope: Construct, __resources: string[], __input: PollyGetLexiconInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexiconAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexiconAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexiconAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyGetLexiconInput`](#aws-cdk-sdk.polly.PollyGetLexiconInput)

---



#### Properties <a name="Properties"></a>

##### `alphabet`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexiconAttributes.property.alphabet"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexiconAttributes.property.languageCode"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexiconAttributes.property.lastModified"></a>

- *Type:* `string`

---

##### `lexemesCount`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexiconAttributes.property.lexemesCount"></a>

- *Type:* `number`

---

##### `lexiconArn`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexiconAttributes.property.lexiconArn"></a>

- *Type:* `string`

---

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchLexiconLexiconAttributes.property.size"></a>

- *Type:* `number`

---


### PollyResponsesFetchSpeechSynthesisTask <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTask"></a>

#### Initializer <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTask.Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

new polly.PollyResponsesFetchSpeechSynthesisTask(__scope: Construct, __resources: string[], __input: PollyGetSpeechSynthesisTaskInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyGetSpeechSynthesisTaskInput`](#aws-cdk-sdk.polly.PollyGetSpeechSynthesisTaskInput)

---



#### Properties <a name="Properties"></a>

##### `synthesisTask`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTask.property.synthesisTask"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask`](#aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask)

---


### PollyResponsesFetchSpeechSynthesisTaskSynthesisTask <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask"></a>

#### Initializer <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

new polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask(__scope: Construct, __resources: string[], __input: PollyGetSpeechSynthesisTaskInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyGetSpeechSynthesisTaskInput`](#aws-cdk-sdk.polly.PollyGetSpeechSynthesisTaskInput)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.property.creationTime"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.property.engine"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.property.languageCode"></a>

- *Type:* `string`

---

##### `lexiconNames`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.property.lexiconNames"></a>

- *Type:* `string`[]

---

##### `outputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.property.outputFormat"></a>

- *Type:* `string`

---

##### `outputUri`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.property.outputUri"></a>

- *Type:* `string`

---

##### `requestCharacters`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.property.requestCharacters"></a>

- *Type:* `number`

---

##### `sampleRate`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.property.sampleRate"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `speechMarkTypes`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.property.speechMarkTypes"></a>

- *Type:* `string`[]

---

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.property.taskId"></a>

- *Type:* `string`

---

##### `taskStatus`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.property.taskStatus"></a>

- *Type:* `string`

---

##### `taskStatusReason`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.property.taskStatusReason"></a>

- *Type:* `string`

---

##### `textType`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.property.textType"></a>

- *Type:* `string`

---

##### `voiceId`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesFetchSpeechSynthesisTaskSynthesisTask.property.voiceId"></a>

- *Type:* `string`

---


### PollyResponsesListLexicons <a name="aws-cdk-sdk.polly.PollyResponsesListLexicons"></a>

#### Initializer <a name="aws-cdk-sdk.polly.PollyResponsesListLexicons.Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

new polly.PollyResponsesListLexicons(__scope: Construct, __resources: string[], __input: PollyListLexiconsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesListLexicons.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesListLexicons.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesListLexicons.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyListLexiconsInput`](#aws-cdk-sdk.polly.PollyListLexiconsInput)

---



#### Properties <a name="Properties"></a>

##### `lexicons`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesListLexicons.property.lexicons"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyLexiconDescription`](#aws-cdk-sdk.polly.PollyLexiconDescription)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesListLexicons.property.nextToken"></a>

- *Type:* `string`

---


### PollyResponsesListSpeechSynthesisTasks <a name="aws-cdk-sdk.polly.PollyResponsesListSpeechSynthesisTasks"></a>

#### Initializer <a name="aws-cdk-sdk.polly.PollyResponsesListSpeechSynthesisTasks.Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

new polly.PollyResponsesListSpeechSynthesisTasks(__scope: Construct, __resources: string[], __input: PollyListSpeechSynthesisTasksInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesListSpeechSynthesisTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesListSpeechSynthesisTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesListSpeechSynthesisTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyListSpeechSynthesisTasksInput`](#aws-cdk-sdk.polly.PollyListSpeechSynthesisTasksInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesListSpeechSynthesisTasks.property.nextToken"></a>

- *Type:* `string`

---

##### `synthesisTasks`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesListSpeechSynthesisTasks.property.synthesisTasks"></a>

- *Type:* [`aws-cdk-sdk.polly.PollySynthesisTask`](#aws-cdk-sdk.polly.PollySynthesisTask)[]

---


### PollyResponsesStartSpeechSynthesisTask <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTask"></a>

#### Initializer <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTask.Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

new polly.PollyResponsesStartSpeechSynthesisTask(__scope: Construct, __resources: string[], __input: PollyStartSpeechSynthesisTaskInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput`](#aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput)

---



#### Properties <a name="Properties"></a>

##### `synthesisTask`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTask.property.synthesisTask"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask`](#aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask)

---


### PollyResponsesStartSpeechSynthesisTaskSynthesisTask <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask"></a>

#### Initializer <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

new polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask(__scope: Construct, __resources: string[], __input: PollyStartSpeechSynthesisTaskInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput`](#aws-cdk-sdk.polly.PollyStartSpeechSynthesisTaskInput)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.property.creationTime"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.property.engine"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.property.languageCode"></a>

- *Type:* `string`

---

##### `lexiconNames`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.property.lexiconNames"></a>

- *Type:* `string`[]

---

##### `outputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.property.outputFormat"></a>

- *Type:* `string`

---

##### `outputUri`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.property.outputUri"></a>

- *Type:* `string`

---

##### `requestCharacters`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.property.requestCharacters"></a>

- *Type:* `number`

---

##### `sampleRate`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.property.sampleRate"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `speechMarkTypes`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.property.speechMarkTypes"></a>

- *Type:* `string`[]

---

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.property.taskId"></a>

- *Type:* `string`

---

##### `taskStatus`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.property.taskStatus"></a>

- *Type:* `string`

---

##### `taskStatusReason`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.property.taskStatusReason"></a>

- *Type:* `string`

---

##### `textType`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.property.textType"></a>

- *Type:* `string`

---

##### `voiceId`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesStartSpeechSynthesisTaskSynthesisTask.property.voiceId"></a>

- *Type:* `string`

---


### PollyResponsesSynthesizeSpeech <a name="aws-cdk-sdk.polly.PollyResponsesSynthesizeSpeech"></a>

#### Initializer <a name="aws-cdk-sdk.polly.PollyResponsesSynthesizeSpeech.Initializer"></a>

```typescript
import { polly } from 'aws-cdk-sdk'

new polly.PollyResponsesSynthesizeSpeech(__scope: Construct, __resources: string[], __input: PollySynthesizeSpeechInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesSynthesizeSpeech.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesSynthesizeSpeech.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesSynthesizeSpeech.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.polly.PollySynthesizeSpeechInput`](#aws-cdk-sdk.polly.PollySynthesizeSpeechInput)

---



#### Properties <a name="Properties"></a>

##### `audioStream`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesSynthesizeSpeech.property.audioStream"></a>

- *Type:* `any`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesSynthesizeSpeech.property.contentType"></a>

- *Type:* `string`

---

##### `requestCharacters`<sup>Required</sup> <a name="aws-cdk-sdk.polly.PollyResponsesSynthesizeSpeech.property.requestCharacters"></a>

- *Type:* `number`

---



