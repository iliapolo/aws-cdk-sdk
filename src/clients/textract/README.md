# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### TextractClient <a name="aws-cdk-sdk.textract.TextractClient"></a>

#### Initializer <a name="aws-cdk-sdk.textract.TextractClient.Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

new textract.TextractClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `analyzeDocument` <a name="aws-cdk-sdk.textract.TextractClient.analyzeDocument"></a>

```typescript
public analyzeDocument(input: TextractAnalyzeDocumentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractAnalyzeDocumentRequest`](#aws-cdk-sdk.textract.TextractAnalyzeDocumentRequest)

---

##### `detectDocumentText` <a name="aws-cdk-sdk.textract.TextractClient.detectDocumentText"></a>

```typescript
public detectDocumentText(input: TextractDetectDocumentTextRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractDetectDocumentTextRequest`](#aws-cdk-sdk.textract.TextractDetectDocumentTextRequest)

---

##### `fetchDocumentAnalysis` <a name="aws-cdk-sdk.textract.TextractClient.fetchDocumentAnalysis"></a>

```typescript
public fetchDocumentAnalysis(input: TextractGetDocumentAnalysisRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractGetDocumentAnalysisRequest`](#aws-cdk-sdk.textract.TextractGetDocumentAnalysisRequest)

---

##### `fetchDocumentTextDetection` <a name="aws-cdk-sdk.textract.TextractClient.fetchDocumentTextDetection"></a>

```typescript
public fetchDocumentTextDetection(input: TextractGetDocumentTextDetectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractGetDocumentTextDetectionRequest`](#aws-cdk-sdk.textract.TextractGetDocumentTextDetectionRequest)

---

##### `startDocumentAnalysis` <a name="aws-cdk-sdk.textract.TextractClient.startDocumentAnalysis"></a>

```typescript
public startDocumentAnalysis(input: TextractStartDocumentAnalysisRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractStartDocumentAnalysisRequest`](#aws-cdk-sdk.textract.TextractStartDocumentAnalysisRequest)

---

##### `startDocumentTextDetection` <a name="aws-cdk-sdk.textract.TextractClient.startDocumentTextDetection"></a>

```typescript
public startDocumentTextDetection(input: TextractStartDocumentTextDetectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractStartDocumentTextDetectionRequest`](#aws-cdk-sdk.textract.TextractStartDocumentTextDetectionRequest)

---




## Structs <a name="Structs"></a>

### TextractAnalyzeDocumentRequest <a name="aws-cdk-sdk.textract.TextractAnalyzeDocumentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractAnalyzeDocumentRequest: textract.TextractAnalyzeDocumentRequest = { ... }
```

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractAnalyzeDocumentRequest.property.document"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractDocument`](#aws-cdk-sdk.textract.TextractDocument)

---

##### `featureTypes`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractAnalyzeDocumentRequest.property.featureTypes"></a>

- *Type:* `string`[]

---

##### `humanLoopConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractAnalyzeDocumentRequest.property.humanLoopConfig"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractHumanLoopConfig`](#aws-cdk-sdk.textract.TextractHumanLoopConfig)

---

### TextractAnalyzeDocumentResponse <a name="aws-cdk-sdk.textract.TextractAnalyzeDocumentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractAnalyzeDocumentResponse: textract.TextractAnalyzeDocumentResponse = { ... }
```

##### `analyzeDocumentModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractAnalyzeDocumentResponse.property.analyzeDocumentModelVersion"></a>

- *Type:* `string`

---

##### `blocks`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractAnalyzeDocumentResponse.property.blocks"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractBlock`](#aws-cdk-sdk.textract.TextractBlock)[]

---

##### `documentMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractAnalyzeDocumentResponse.property.documentMetadata"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractDocumentMetadata`](#aws-cdk-sdk.textract.TextractDocumentMetadata)

---

##### `humanLoopActivationOutput`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractAnalyzeDocumentResponse.property.humanLoopActivationOutput"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractHumanLoopActivationOutput`](#aws-cdk-sdk.textract.TextractHumanLoopActivationOutput)

---

### TextractBlock <a name="aws-cdk-sdk.textract.TextractBlock"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractBlock: textract.TextractBlock = { ... }
```

##### `blockType`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBlock.property.blockType"></a>

- *Type:* `string`

---

##### `columnIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBlock.property.columnIndex"></a>

- *Type:* `number`

---

##### `columnSpan`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBlock.property.columnSpan"></a>

- *Type:* `number`

---

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBlock.property.confidence"></a>

- *Type:* `number`

---

##### `entityTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBlock.property.entityTypes"></a>

- *Type:* `string`[]

---

##### `geometry`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBlock.property.geometry"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractGeometry`](#aws-cdk-sdk.textract.TextractGeometry)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBlock.property.id"></a>

- *Type:* `string`

---

##### `page`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBlock.property.page"></a>

- *Type:* `number`

---

##### `relationships`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBlock.property.relationships"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractRelationship`](#aws-cdk-sdk.textract.TextractRelationship)[]

---

##### `rowIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBlock.property.rowIndex"></a>

- *Type:* `number`

---

##### `rowSpan`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBlock.property.rowSpan"></a>

- *Type:* `number`

---

##### `selectionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBlock.property.selectionStatus"></a>

- *Type:* `string`

---

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBlock.property.text"></a>

- *Type:* `string`

---

##### `textType`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBlock.property.textType"></a>

- *Type:* `string`

---

### TextractBoundingBox <a name="aws-cdk-sdk.textract.TextractBoundingBox"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractBoundingBox: textract.TextractBoundingBox = { ... }
```

##### `height`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBoundingBox.property.height"></a>

- *Type:* `number`

---

##### `left`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBoundingBox.property.left"></a>

- *Type:* `number`

---

##### `top`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBoundingBox.property.top"></a>

- *Type:* `number`

---

##### `width`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractBoundingBox.property.width"></a>

- *Type:* `number`

---

### TextractDetectDocumentTextRequest <a name="aws-cdk-sdk.textract.TextractDetectDocumentTextRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractDetectDocumentTextRequest: textract.TextractDetectDocumentTextRequest = { ... }
```

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractDetectDocumentTextRequest.property.document"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractDocument`](#aws-cdk-sdk.textract.TextractDocument)

---

### TextractDetectDocumentTextResponse <a name="aws-cdk-sdk.textract.TextractDetectDocumentTextResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractDetectDocumentTextResponse: textract.TextractDetectDocumentTextResponse = { ... }
```

##### `blocks`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractDetectDocumentTextResponse.property.blocks"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractBlock`](#aws-cdk-sdk.textract.TextractBlock)[]

---

##### `detectDocumentTextModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractDetectDocumentTextResponse.property.detectDocumentTextModelVersion"></a>

- *Type:* `string`

---

##### `documentMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractDetectDocumentTextResponse.property.documentMetadata"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractDocumentMetadata`](#aws-cdk-sdk.textract.TextractDocumentMetadata)

---

### TextractDocument <a name="aws-cdk-sdk.textract.TextractDocument"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractDocument: textract.TextractDocument = { ... }
```

##### `bytes`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractDocument.property.bytes"></a>

- *Type:* `any`

---

##### `s3Object`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractDocument.property.s3Object"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractS3Object`](#aws-cdk-sdk.textract.TextractS3Object)

---

### TextractDocumentLocation <a name="aws-cdk-sdk.textract.TextractDocumentLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractDocumentLocation: textract.TextractDocumentLocation = { ... }
```

##### `s3Object`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractDocumentLocation.property.s3Object"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractS3Object`](#aws-cdk-sdk.textract.TextractS3Object)

---

### TextractDocumentMetadata <a name="aws-cdk-sdk.textract.TextractDocumentMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractDocumentMetadata: textract.TextractDocumentMetadata = { ... }
```

##### `pages`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractDocumentMetadata.property.pages"></a>

- *Type:* `number`

---

### TextractGeometry <a name="aws-cdk-sdk.textract.TextractGeometry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractGeometry: textract.TextractGeometry = { ... }
```

##### `boundingBox`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGeometry.property.boundingBox"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractBoundingBox`](#aws-cdk-sdk.textract.TextractBoundingBox)

---

##### `polygon`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGeometry.property.polygon"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractPoint`](#aws-cdk-sdk.textract.TextractPoint)[]

---

### TextractGetDocumentAnalysisRequest <a name="aws-cdk-sdk.textract.TextractGetDocumentAnalysisRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractGetDocumentAnalysisRequest: textract.TextractGetDocumentAnalysisRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentAnalysisRequest.property.jobId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentAnalysisRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentAnalysisRequest.property.nextToken"></a>

- *Type:* `string`

---

### TextractGetDocumentAnalysisResponse <a name="aws-cdk-sdk.textract.TextractGetDocumentAnalysisResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractGetDocumentAnalysisResponse: textract.TextractGetDocumentAnalysisResponse = { ... }
```

##### `analyzeDocumentModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentAnalysisResponse.property.analyzeDocumentModelVersion"></a>

- *Type:* `string`

---

##### `blocks`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentAnalysisResponse.property.blocks"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractBlock`](#aws-cdk-sdk.textract.TextractBlock)[]

---

##### `documentMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentAnalysisResponse.property.documentMetadata"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractDocumentMetadata`](#aws-cdk-sdk.textract.TextractDocumentMetadata)

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentAnalysisResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentAnalysisResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentAnalysisResponse.property.statusMessage"></a>

- *Type:* `string`

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentAnalysisResponse.property.warnings"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractWarning`](#aws-cdk-sdk.textract.TextractWarning)[]

---

### TextractGetDocumentTextDetectionRequest <a name="aws-cdk-sdk.textract.TextractGetDocumentTextDetectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractGetDocumentTextDetectionRequest: textract.TextractGetDocumentTextDetectionRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentTextDetectionRequest.property.jobId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentTextDetectionRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentTextDetectionRequest.property.nextToken"></a>

- *Type:* `string`

---

### TextractGetDocumentTextDetectionResponse <a name="aws-cdk-sdk.textract.TextractGetDocumentTextDetectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractGetDocumentTextDetectionResponse: textract.TextractGetDocumentTextDetectionResponse = { ... }
```

##### `blocks`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentTextDetectionResponse.property.blocks"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractBlock`](#aws-cdk-sdk.textract.TextractBlock)[]

---

##### `detectDocumentTextModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentTextDetectionResponse.property.detectDocumentTextModelVersion"></a>

- *Type:* `string`

---

##### `documentMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentTextDetectionResponse.property.documentMetadata"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractDocumentMetadata`](#aws-cdk-sdk.textract.TextractDocumentMetadata)

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentTextDetectionResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentTextDetectionResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentTextDetectionResponse.property.statusMessage"></a>

- *Type:* `string`

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractGetDocumentTextDetectionResponse.property.warnings"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractWarning`](#aws-cdk-sdk.textract.TextractWarning)[]

---

### TextractHumanLoopActivationOutput <a name="aws-cdk-sdk.textract.TextractHumanLoopActivationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractHumanLoopActivationOutput: textract.TextractHumanLoopActivationOutput = { ... }
```

##### `humanLoopActivationConditionsEvaluationResults`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractHumanLoopActivationOutput.property.humanLoopActivationConditionsEvaluationResults"></a>

- *Type:* `string`

---

##### `humanLoopActivationReasons`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractHumanLoopActivationOutput.property.humanLoopActivationReasons"></a>

- *Type:* `string`[]

---

##### `humanLoopArn`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractHumanLoopActivationOutput.property.humanLoopArn"></a>

- *Type:* `string`

---

### TextractHumanLoopConfig <a name="aws-cdk-sdk.textract.TextractHumanLoopConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractHumanLoopConfig: textract.TextractHumanLoopConfig = { ... }
```

##### `flowDefinitionArn`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractHumanLoopConfig.property.flowDefinitionArn"></a>

- *Type:* `string`

---

##### `humanLoopName`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractHumanLoopConfig.property.humanLoopName"></a>

- *Type:* `string`

---

##### `dataAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractHumanLoopConfig.property.dataAttributes"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractHumanLoopDataAttributes`](#aws-cdk-sdk.textract.TextractHumanLoopDataAttributes)

---

### TextractHumanLoopDataAttributes <a name="aws-cdk-sdk.textract.TextractHumanLoopDataAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractHumanLoopDataAttributes: textract.TextractHumanLoopDataAttributes = { ... }
```

##### `contentClassifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractHumanLoopDataAttributes.property.contentClassifiers"></a>

- *Type:* `string`[]

---

### TextractNotificationChannel <a name="aws-cdk-sdk.textract.TextractNotificationChannel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractNotificationChannel: textract.TextractNotificationChannel = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractNotificationChannel.property.roleArn"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractNotificationChannel.property.snsTopicArn"></a>

- *Type:* `string`

---

### TextractOutputConfig <a name="aws-cdk-sdk.textract.TextractOutputConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractOutputConfig: textract.TextractOutputConfig = { ... }
```

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractOutputConfig.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractOutputConfig.property.s3Prefix"></a>

- *Type:* `string`

---

### TextractPoint <a name="aws-cdk-sdk.textract.TextractPoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractPoint: textract.TextractPoint = { ... }
```

##### `x`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractPoint.property.x"></a>

- *Type:* `number`

---

##### `y`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractPoint.property.y"></a>

- *Type:* `number`

---

### TextractRelationship <a name="aws-cdk-sdk.textract.TextractRelationship"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractRelationship: textract.TextractRelationship = { ... }
```

##### `ids`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractRelationship.property.ids"></a>

- *Type:* `string`[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractRelationship.property.type"></a>

- *Type:* `string`

---

### TextractS3Object <a name="aws-cdk-sdk.textract.TextractS3Object"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractS3Object: textract.TextractS3Object = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractS3Object.property.bucket"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractS3Object.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractS3Object.property.version"></a>

- *Type:* `string`

---

### TextractStartDocumentAnalysisRequest <a name="aws-cdk-sdk.textract.TextractStartDocumentAnalysisRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractStartDocumentAnalysisRequest: textract.TextractStartDocumentAnalysisRequest = { ... }
```

##### `documentLocation`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractStartDocumentAnalysisRequest.property.documentLocation"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractDocumentLocation`](#aws-cdk-sdk.textract.TextractDocumentLocation)

---

##### `featureTypes`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractStartDocumentAnalysisRequest.property.featureTypes"></a>

- *Type:* `string`[]

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractStartDocumentAnalysisRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobTag`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractStartDocumentAnalysisRequest.property.jobTag"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractStartDocumentAnalysisRequest.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `notificationChannel`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractStartDocumentAnalysisRequest.property.notificationChannel"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractNotificationChannel`](#aws-cdk-sdk.textract.TextractNotificationChannel)

---

##### `outputConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractStartDocumentAnalysisRequest.property.outputConfig"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractOutputConfig`](#aws-cdk-sdk.textract.TextractOutputConfig)

---

### TextractStartDocumentAnalysisResponse <a name="aws-cdk-sdk.textract.TextractStartDocumentAnalysisResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractStartDocumentAnalysisResponse: textract.TextractStartDocumentAnalysisResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractStartDocumentAnalysisResponse.property.jobId"></a>

- *Type:* `string`

---

### TextractStartDocumentTextDetectionRequest <a name="aws-cdk-sdk.textract.TextractStartDocumentTextDetectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractStartDocumentTextDetectionRequest: textract.TextractStartDocumentTextDetectionRequest = { ... }
```

##### `documentLocation`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractStartDocumentTextDetectionRequest.property.documentLocation"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractDocumentLocation`](#aws-cdk-sdk.textract.TextractDocumentLocation)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractStartDocumentTextDetectionRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobTag`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractStartDocumentTextDetectionRequest.property.jobTag"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractStartDocumentTextDetectionRequest.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `notificationChannel`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractStartDocumentTextDetectionRequest.property.notificationChannel"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractNotificationChannel`](#aws-cdk-sdk.textract.TextractNotificationChannel)

---

##### `outputConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractStartDocumentTextDetectionRequest.property.outputConfig"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractOutputConfig`](#aws-cdk-sdk.textract.TextractOutputConfig)

---

### TextractStartDocumentTextDetectionResponse <a name="aws-cdk-sdk.textract.TextractStartDocumentTextDetectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractStartDocumentTextDetectionResponse: textract.TextractStartDocumentTextDetectionResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractStartDocumentTextDetectionResponse.property.jobId"></a>

- *Type:* `string`

---

### TextractWarning <a name="aws-cdk-sdk.textract.TextractWarning"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

const textractWarning: textract.TextractWarning = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractWarning.property.errorCode"></a>

- *Type:* `string`

---

##### `pages`<sup>Optional</sup> <a name="aws-cdk-sdk.textract.TextractWarning.property.pages"></a>

- *Type:* `number`[]

---

## Classes <a name="Classes"></a>

### TextractResponsesAnalyzeDocument <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocument"></a>

#### Initializer <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocument.Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

new textract.TextractResponsesAnalyzeDocument(__scope: Construct, __resources: string[], __input: TextractAnalyzeDocumentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocument.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocument.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocument.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractAnalyzeDocumentRequest`](#aws-cdk-sdk.textract.TextractAnalyzeDocumentRequest)

---



#### Properties <a name="Properties"></a>

##### `analyzeDocumentModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocument.property.analyzeDocumentModelVersion"></a>

- *Type:* `string`

---

##### `blocks`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocument.property.blocks"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractBlock`](#aws-cdk-sdk.textract.TextractBlock)[]

---

##### `documentMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocument.property.documentMetadata"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentDocumentMetadata`](#aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentDocumentMetadata)

---

##### `humanLoopActivationOutput`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocument.property.humanLoopActivationOutput"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentHumanLoopActivationOutput`](#aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentHumanLoopActivationOutput)

---


### TextractResponsesAnalyzeDocumentDocumentMetadata <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentDocumentMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentDocumentMetadata.Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

new textract.TextractResponsesAnalyzeDocumentDocumentMetadata(__scope: Construct, __resources: string[], __input: TextractAnalyzeDocumentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentDocumentMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentDocumentMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentDocumentMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractAnalyzeDocumentRequest`](#aws-cdk-sdk.textract.TextractAnalyzeDocumentRequest)

---



#### Properties <a name="Properties"></a>

##### `pages`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentDocumentMetadata.property.pages"></a>

- *Type:* `number`

---


### TextractResponsesAnalyzeDocumentHumanLoopActivationOutput <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentHumanLoopActivationOutput"></a>

#### Initializer <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentHumanLoopActivationOutput.Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

new textract.TextractResponsesAnalyzeDocumentHumanLoopActivationOutput(__scope: Construct, __resources: string[], __input: TextractAnalyzeDocumentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentHumanLoopActivationOutput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentHumanLoopActivationOutput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentHumanLoopActivationOutput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractAnalyzeDocumentRequest`](#aws-cdk-sdk.textract.TextractAnalyzeDocumentRequest)

---



#### Properties <a name="Properties"></a>

##### `humanLoopActivationConditionsEvaluationResults`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentHumanLoopActivationOutput.property.humanLoopActivationConditionsEvaluationResults"></a>

- *Type:* `string`

---

##### `humanLoopActivationReasons`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentHumanLoopActivationOutput.property.humanLoopActivationReasons"></a>

- *Type:* `string`[]

---

##### `humanLoopArn`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesAnalyzeDocumentHumanLoopActivationOutput.property.humanLoopArn"></a>

- *Type:* `string`

---


### TextractResponsesDetectDocumentText <a name="aws-cdk-sdk.textract.TextractResponsesDetectDocumentText"></a>

#### Initializer <a name="aws-cdk-sdk.textract.TextractResponsesDetectDocumentText.Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

new textract.TextractResponsesDetectDocumentText(__scope: Construct, __resources: string[], __input: TextractDetectDocumentTextRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesDetectDocumentText.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesDetectDocumentText.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesDetectDocumentText.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractDetectDocumentTextRequest`](#aws-cdk-sdk.textract.TextractDetectDocumentTextRequest)

---



#### Properties <a name="Properties"></a>

##### `blocks`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesDetectDocumentText.property.blocks"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractBlock`](#aws-cdk-sdk.textract.TextractBlock)[]

---

##### `detectDocumentTextModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesDetectDocumentText.property.detectDocumentTextModelVersion"></a>

- *Type:* `string`

---

##### `documentMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesDetectDocumentText.property.documentMetadata"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractResponsesDetectDocumentTextDocumentMetadata`](#aws-cdk-sdk.textract.TextractResponsesDetectDocumentTextDocumentMetadata)

---


### TextractResponsesDetectDocumentTextDocumentMetadata <a name="aws-cdk-sdk.textract.TextractResponsesDetectDocumentTextDocumentMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.textract.TextractResponsesDetectDocumentTextDocumentMetadata.Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

new textract.TextractResponsesDetectDocumentTextDocumentMetadata(__scope: Construct, __resources: string[], __input: TextractDetectDocumentTextRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesDetectDocumentTextDocumentMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesDetectDocumentTextDocumentMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesDetectDocumentTextDocumentMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractDetectDocumentTextRequest`](#aws-cdk-sdk.textract.TextractDetectDocumentTextRequest)

---



#### Properties <a name="Properties"></a>

##### `pages`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesDetectDocumentTextDocumentMetadata.property.pages"></a>

- *Type:* `number`

---


### TextractResponsesFetchDocumentAnalysis <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysis"></a>

#### Initializer <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysis.Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

new textract.TextractResponsesFetchDocumentAnalysis(__scope: Construct, __resources: string[], __input: TextractGetDocumentAnalysisRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysis.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysis.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysis.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractGetDocumentAnalysisRequest`](#aws-cdk-sdk.textract.TextractGetDocumentAnalysisRequest)

---



#### Properties <a name="Properties"></a>

##### `analyzeDocumentModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysis.property.analyzeDocumentModelVersion"></a>

- *Type:* `string`

---

##### `blocks`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysis.property.blocks"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractBlock`](#aws-cdk-sdk.textract.TextractBlock)[]

---

##### `documentMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysis.property.documentMetadata"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysisDocumentMetadata`](#aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysisDocumentMetadata)

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysis.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysis.property.nextToken"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysis.property.statusMessage"></a>

- *Type:* `string`

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysis.property.warnings"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractWarning`](#aws-cdk-sdk.textract.TextractWarning)[]

---


### TextractResponsesFetchDocumentAnalysisDocumentMetadata <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysisDocumentMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysisDocumentMetadata.Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

new textract.TextractResponsesFetchDocumentAnalysisDocumentMetadata(__scope: Construct, __resources: string[], __input: TextractGetDocumentAnalysisRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysisDocumentMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysisDocumentMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysisDocumentMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractGetDocumentAnalysisRequest`](#aws-cdk-sdk.textract.TextractGetDocumentAnalysisRequest)

---



#### Properties <a name="Properties"></a>

##### `pages`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentAnalysisDocumentMetadata.property.pages"></a>

- *Type:* `number`

---


### TextractResponsesFetchDocumentTextDetection <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetection"></a>

#### Initializer <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetection.Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

new textract.TextractResponsesFetchDocumentTextDetection(__scope: Construct, __resources: string[], __input: TextractGetDocumentTextDetectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractGetDocumentTextDetectionRequest`](#aws-cdk-sdk.textract.TextractGetDocumentTextDetectionRequest)

---



#### Properties <a name="Properties"></a>

##### `blocks`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetection.property.blocks"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractBlock`](#aws-cdk-sdk.textract.TextractBlock)[]

---

##### `detectDocumentTextModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetection.property.detectDocumentTextModelVersion"></a>

- *Type:* `string`

---

##### `documentMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetection.property.documentMetadata"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetectionDocumentMetadata`](#aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetectionDocumentMetadata)

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetection.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetection.property.nextToken"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetection.property.statusMessage"></a>

- *Type:* `string`

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetection.property.warnings"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractWarning`](#aws-cdk-sdk.textract.TextractWarning)[]

---


### TextractResponsesFetchDocumentTextDetectionDocumentMetadata <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetectionDocumentMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetectionDocumentMetadata.Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

new textract.TextractResponsesFetchDocumentTextDetectionDocumentMetadata(__scope: Construct, __resources: string[], __input: TextractGetDocumentTextDetectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetectionDocumentMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetectionDocumentMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetectionDocumentMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractGetDocumentTextDetectionRequest`](#aws-cdk-sdk.textract.TextractGetDocumentTextDetectionRequest)

---



#### Properties <a name="Properties"></a>

##### `pages`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesFetchDocumentTextDetectionDocumentMetadata.property.pages"></a>

- *Type:* `number`

---


### TextractResponsesStartDocumentAnalysis <a name="aws-cdk-sdk.textract.TextractResponsesStartDocumentAnalysis"></a>

#### Initializer <a name="aws-cdk-sdk.textract.TextractResponsesStartDocumentAnalysis.Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

new textract.TextractResponsesStartDocumentAnalysis(__scope: Construct, __resources: string[], __input: TextractStartDocumentAnalysisRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesStartDocumentAnalysis.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesStartDocumentAnalysis.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesStartDocumentAnalysis.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractStartDocumentAnalysisRequest`](#aws-cdk-sdk.textract.TextractStartDocumentAnalysisRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesStartDocumentAnalysis.property.jobId"></a>

- *Type:* `string`

---


### TextractResponsesStartDocumentTextDetection <a name="aws-cdk-sdk.textract.TextractResponsesStartDocumentTextDetection"></a>

#### Initializer <a name="aws-cdk-sdk.textract.TextractResponsesStartDocumentTextDetection.Initializer"></a>

```typescript
import { textract } from 'aws-cdk-sdk'

new textract.TextractResponsesStartDocumentTextDetection(__scope: Construct, __resources: string[], __input: TextractStartDocumentTextDetectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesStartDocumentTextDetection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesStartDocumentTextDetection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesStartDocumentTextDetection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.textract.TextractStartDocumentTextDetectionRequest`](#aws-cdk-sdk.textract.TextractStartDocumentTextDetectionRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.textract.TextractResponsesStartDocumentTextDetection.property.jobId"></a>

- *Type:* `string`

---



