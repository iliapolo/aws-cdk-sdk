# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### QldbClient <a name="aws-cdk-sdk.qldb.QldbClient"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QldbClient.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QldbClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelJournalKinesisStream` <a name="aws-cdk-sdk.qldb.QldbClient.cancelJournalKinesisStream"></a>

```typescript
public cancelJournalKinesisStream(input: QldbCancelJournalKinesisStreamRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbCancelJournalKinesisStreamRequest`](#aws-cdk-sdk.qldb.QldbCancelJournalKinesisStreamRequest)

---

##### `createLedger` <a name="aws-cdk-sdk.qldb.QldbClient.createLedger"></a>

```typescript
public createLedger(input: QldbCreateLedgerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbCreateLedgerRequest`](#aws-cdk-sdk.qldb.QldbCreateLedgerRequest)

---

##### `deleteLedger` <a name="aws-cdk-sdk.qldb.QldbClient.deleteLedger"></a>

```typescript
public deleteLedger(input: QldbDeleteLedgerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbDeleteLedgerRequest`](#aws-cdk-sdk.qldb.QldbDeleteLedgerRequest)

---

##### `describeJournalKinesisStream` <a name="aws-cdk-sdk.qldb.QldbClient.describeJournalKinesisStream"></a>

```typescript
public describeJournalKinesisStream(input: QldbDescribeJournalKinesisStreamRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbDescribeJournalKinesisStreamRequest`](#aws-cdk-sdk.qldb.QldbDescribeJournalKinesisStreamRequest)

---

##### `describeJournalS3Export` <a name="aws-cdk-sdk.qldb.QldbClient.describeJournalS3Export"></a>

```typescript
public describeJournalS3Export(input: QldbDescribeJournalS3ExportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbDescribeJournalS3ExportRequest`](#aws-cdk-sdk.qldb.QldbDescribeJournalS3ExportRequest)

---

##### `describeLedger` <a name="aws-cdk-sdk.qldb.QldbClient.describeLedger"></a>

```typescript
public describeLedger(input: QldbDescribeLedgerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbDescribeLedgerRequest`](#aws-cdk-sdk.qldb.QldbDescribeLedgerRequest)

---

##### `exportJournalToS3` <a name="aws-cdk-sdk.qldb.QldbClient.exportJournalToS3"></a>

```typescript
public exportJournalToS3(input: QldbExportJournalToS3Request)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbExportJournalToS3Request`](#aws-cdk-sdk.qldb.QldbExportJournalToS3Request)

---

##### `fetchBlock` <a name="aws-cdk-sdk.qldb.QldbClient.fetchBlock"></a>

```typescript
public fetchBlock(input: QldbGetBlockRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbGetBlockRequest`](#aws-cdk-sdk.qldb.QldbGetBlockRequest)

---

##### `fetchDigest` <a name="aws-cdk-sdk.qldb.QldbClient.fetchDigest"></a>

```typescript
public fetchDigest(input: QldbGetDigestRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbGetDigestRequest`](#aws-cdk-sdk.qldb.QldbGetDigestRequest)

---

##### `fetchRevision` <a name="aws-cdk-sdk.qldb.QldbClient.fetchRevision"></a>

```typescript
public fetchRevision(input: QldbGetRevisionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbGetRevisionRequest`](#aws-cdk-sdk.qldb.QldbGetRevisionRequest)

---

##### `listJournalKinesisStreamsForLedger` <a name="aws-cdk-sdk.qldb.QldbClient.listJournalKinesisStreamsForLedger"></a>

```typescript
public listJournalKinesisStreamsForLedger(input: QldbListJournalKinesisStreamsForLedgerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbListJournalKinesisStreamsForLedgerRequest`](#aws-cdk-sdk.qldb.QldbListJournalKinesisStreamsForLedgerRequest)

---

##### `listJournalS3Exports` <a name="aws-cdk-sdk.qldb.QldbClient.listJournalS3Exports"></a>

```typescript
public listJournalS3Exports(input: QldbListJournalS3ExportsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbListJournalS3ExportsRequest`](#aws-cdk-sdk.qldb.QldbListJournalS3ExportsRequest)

---

##### `listJournalS3ExportsForLedger` <a name="aws-cdk-sdk.qldb.QldbClient.listJournalS3ExportsForLedger"></a>

```typescript
public listJournalS3ExportsForLedger(input: QldbListJournalS3ExportsForLedgerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbListJournalS3ExportsForLedgerRequest`](#aws-cdk-sdk.qldb.QldbListJournalS3ExportsForLedgerRequest)

---

##### `listLedgers` <a name="aws-cdk-sdk.qldb.QldbClient.listLedgers"></a>

```typescript
public listLedgers(input: QldbListLedgersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbListLedgersRequest`](#aws-cdk-sdk.qldb.QldbListLedgersRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.qldb.QldbClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: QldbListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbListTagsForResourceRequest`](#aws-cdk-sdk.qldb.QldbListTagsForResourceRequest)

---

##### `streamJournalToKinesis` <a name="aws-cdk-sdk.qldb.QldbClient.streamJournalToKinesis"></a>

```typescript
public streamJournalToKinesis(input: QldbStreamJournalToKinesisRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbStreamJournalToKinesisRequest`](#aws-cdk-sdk.qldb.QldbStreamJournalToKinesisRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.qldb.QldbClient.tagResource"></a>

```typescript
public tagResource(input: QldbTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbTagResourceRequest`](#aws-cdk-sdk.qldb.QldbTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.qldb.QldbClient.untagResource"></a>

```typescript
public untagResource(input: QldbUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbUntagResourceRequest`](#aws-cdk-sdk.qldb.QldbUntagResourceRequest)

---

##### `updateLedger` <a name="aws-cdk-sdk.qldb.QldbClient.updateLedger"></a>

```typescript
public updateLedger(input: QldbUpdateLedgerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbUpdateLedgerRequest`](#aws-cdk-sdk.qldb.QldbUpdateLedgerRequest)

---




## Structs <a name="Structs"></a>

### QldbCancelJournalKinesisStreamRequest <a name="aws-cdk-sdk.qldb.QldbCancelJournalKinesisStreamRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbCancelJournalKinesisStreamRequest: qldb.QldbCancelJournalKinesisStreamRequest = { ... }
```

##### `ledgerName`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbCancelJournalKinesisStreamRequest.property.ledgerName"></a>

- *Type:* `string`

---

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbCancelJournalKinesisStreamRequest.property.streamId"></a>

- *Type:* `string`

---

### QldbCancelJournalKinesisStreamResponse <a name="aws-cdk-sdk.qldb.QldbCancelJournalKinesisStreamResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbCancelJournalKinesisStreamResponse: qldb.QldbCancelJournalKinesisStreamResponse = { ... }
```

##### `streamId`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbCancelJournalKinesisStreamResponse.property.streamId"></a>

- *Type:* `string`

---

### QldbCreateLedgerRequest <a name="aws-cdk-sdk.qldb.QldbCreateLedgerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbCreateLedgerRequest: qldb.QldbCreateLedgerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbCreateLedgerRequest.property.name"></a>

- *Type:* `string`

---

##### `permissionsMode`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbCreateLedgerRequest.property.permissionsMode"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbCreateLedgerRequest.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbCreateLedgerRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### QldbCreateLedgerResponse <a name="aws-cdk-sdk.qldb.QldbCreateLedgerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbCreateLedgerResponse: qldb.QldbCreateLedgerResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbCreateLedgerResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbCreateLedgerResponse.property.creationDateTime"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbCreateLedgerResponse.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbCreateLedgerResponse.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbCreateLedgerResponse.property.state"></a>

- *Type:* `string`

---

### QldbDeleteLedgerRequest <a name="aws-cdk-sdk.qldb.QldbDeleteLedgerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbDeleteLedgerRequest: qldb.QldbDeleteLedgerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbDeleteLedgerRequest.property.name"></a>

- *Type:* `string`

---

### QldbDescribeJournalKinesisStreamRequest <a name="aws-cdk-sdk.qldb.QldbDescribeJournalKinesisStreamRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbDescribeJournalKinesisStreamRequest: qldb.QldbDescribeJournalKinesisStreamRequest = { ... }
```

##### `ledgerName`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbDescribeJournalKinesisStreamRequest.property.ledgerName"></a>

- *Type:* `string`

---

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbDescribeJournalKinesisStreamRequest.property.streamId"></a>

- *Type:* `string`

---

### QldbDescribeJournalKinesisStreamResponse <a name="aws-cdk-sdk.qldb.QldbDescribeJournalKinesisStreamResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbDescribeJournalKinesisStreamResponse: qldb.QldbDescribeJournalKinesisStreamResponse = { ... }
```

##### `stream`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbDescribeJournalKinesisStreamResponse.property.stream"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription`](#aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription)

---

### QldbDescribeJournalS3ExportRequest <a name="aws-cdk-sdk.qldb.QldbDescribeJournalS3ExportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbDescribeJournalS3ExportRequest: qldb.QldbDescribeJournalS3ExportRequest = { ... }
```

##### `exportId`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbDescribeJournalS3ExportRequest.property.exportId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbDescribeJournalS3ExportRequest.property.name"></a>

- *Type:* `string`

---

### QldbDescribeJournalS3ExportResponse <a name="aws-cdk-sdk.qldb.QldbDescribeJournalS3ExportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbDescribeJournalS3ExportResponse: qldb.QldbDescribeJournalS3ExportResponse = { ... }
```

##### `exportDescription`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbDescribeJournalS3ExportResponse.property.exportDescription"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbJournalS3ExportDescription`](#aws-cdk-sdk.qldb.QldbJournalS3ExportDescription)

---

### QldbDescribeLedgerRequest <a name="aws-cdk-sdk.qldb.QldbDescribeLedgerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbDescribeLedgerRequest: qldb.QldbDescribeLedgerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbDescribeLedgerRequest.property.name"></a>

- *Type:* `string`

---

### QldbDescribeLedgerResponse <a name="aws-cdk-sdk.qldb.QldbDescribeLedgerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbDescribeLedgerResponse: qldb.QldbDescribeLedgerResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbDescribeLedgerResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbDescribeLedgerResponse.property.creationDateTime"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbDescribeLedgerResponse.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbDescribeLedgerResponse.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbDescribeLedgerResponse.property.state"></a>

- *Type:* `string`

---

### QldbExportJournalToS3Request <a name="aws-cdk-sdk.qldb.QldbExportJournalToS3Request"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbExportJournalToS3Request: qldb.QldbExportJournalToS3Request = { ... }
```

##### `exclusiveEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbExportJournalToS3Request.property.exclusiveEndTime"></a>

- *Type:* `string`

---

##### `inclusiveStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbExportJournalToS3Request.property.inclusiveStartTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbExportJournalToS3Request.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbExportJournalToS3Request.property.roleArn"></a>

- *Type:* `string`

---

##### `s3ExportConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbExportJournalToS3Request.property.s3ExportConfiguration"></a>

- *Type:* [`aws-cdk-sdk.qldb.Qldbs3ExportConfiguration`](#aws-cdk-sdk.qldb.Qldbs3ExportConfiguration)

---

### QldbExportJournalToS3Response <a name="aws-cdk-sdk.qldb.QldbExportJournalToS3Response"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbExportJournalToS3Response: qldb.QldbExportJournalToS3Response = { ... }
```

##### `exportId`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbExportJournalToS3Response.property.exportId"></a>

- *Type:* `string`

---

### QldbGetBlockRequest <a name="aws-cdk-sdk.qldb.QldbGetBlockRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbGetBlockRequest: qldb.QldbGetBlockRequest = { ... }
```

##### `blockAddress`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbGetBlockRequest.property.blockAddress"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbValueHolder`](#aws-cdk-sdk.qldb.QldbValueHolder)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbGetBlockRequest.property.name"></a>

- *Type:* `string`

---

##### `digestTipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbGetBlockRequest.property.digestTipAddress"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbValueHolder`](#aws-cdk-sdk.qldb.QldbValueHolder)

---

### QldbGetBlockResponse <a name="aws-cdk-sdk.qldb.QldbGetBlockResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbGetBlockResponse: qldb.QldbGetBlockResponse = { ... }
```

##### `block`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbGetBlockResponse.property.block"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbValueHolder`](#aws-cdk-sdk.qldb.QldbValueHolder)

---

##### `proof`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbGetBlockResponse.property.proof"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbValueHolder`](#aws-cdk-sdk.qldb.QldbValueHolder)

---

### QldbGetDigestRequest <a name="aws-cdk-sdk.qldb.QldbGetDigestRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbGetDigestRequest: qldb.QldbGetDigestRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbGetDigestRequest.property.name"></a>

- *Type:* `string`

---

### QldbGetDigestResponse <a name="aws-cdk-sdk.qldb.QldbGetDigestResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbGetDigestResponse: qldb.QldbGetDigestResponse = { ... }
```

##### `digest`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbGetDigestResponse.property.digest"></a>

- *Type:* `any`

---

##### `digestTipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbGetDigestResponse.property.digestTipAddress"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbValueHolder`](#aws-cdk-sdk.qldb.QldbValueHolder)

---

### QldbGetRevisionRequest <a name="aws-cdk-sdk.qldb.QldbGetRevisionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbGetRevisionRequest: qldb.QldbGetRevisionRequest = { ... }
```

##### `blockAddress`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbGetRevisionRequest.property.blockAddress"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbValueHolder`](#aws-cdk-sdk.qldb.QldbValueHolder)

---

##### `documentId`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbGetRevisionRequest.property.documentId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbGetRevisionRequest.property.name"></a>

- *Type:* `string`

---

##### `digestTipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbGetRevisionRequest.property.digestTipAddress"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbValueHolder`](#aws-cdk-sdk.qldb.QldbValueHolder)

---

### QldbGetRevisionResponse <a name="aws-cdk-sdk.qldb.QldbGetRevisionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbGetRevisionResponse: qldb.QldbGetRevisionResponse = { ... }
```

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbGetRevisionResponse.property.revision"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbValueHolder`](#aws-cdk-sdk.qldb.QldbValueHolder)

---

##### `proof`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbGetRevisionResponse.property.proof"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbValueHolder`](#aws-cdk-sdk.qldb.QldbValueHolder)

---

### QldbJournalKinesisStreamDescription <a name="aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbJournalKinesisStreamDescription: qldb.QldbJournalKinesisStreamDescription = { ... }
```

##### `kinesisConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription.property.kinesisConfiguration"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbKinesisConfiguration`](#aws-cdk-sdk.qldb.QldbKinesisConfiguration)

---

##### `ledgerName`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription.property.ledgerName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription.property.status"></a>

- *Type:* `string`

---

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription.property.streamId"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription.property.streamName"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription.property.creationTime"></a>

- *Type:* `string`

---

##### `errorCause`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription.property.errorCause"></a>

- *Type:* `string`

---

##### `exclusiveEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription.property.exclusiveEndTime"></a>

- *Type:* `string`

---

##### `inclusiveStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription.property.inclusiveStartTime"></a>

- *Type:* `string`

---

### QldbJournalS3ExportDescription <a name="aws-cdk-sdk.qldb.QldbJournalS3ExportDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbJournalS3ExportDescription: qldb.QldbJournalS3ExportDescription = { ... }
```

##### `exclusiveEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbJournalS3ExportDescription.property.exclusiveEndTime"></a>

- *Type:* `string`

---

##### `exportCreationTime`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbJournalS3ExportDescription.property.exportCreationTime"></a>

- *Type:* `string`

---

##### `exportId`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbJournalS3ExportDescription.property.exportId"></a>

- *Type:* `string`

---

##### `inclusiveStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbJournalS3ExportDescription.property.inclusiveStartTime"></a>

- *Type:* `string`

---

##### `ledgerName`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbJournalS3ExportDescription.property.ledgerName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbJournalS3ExportDescription.property.roleArn"></a>

- *Type:* `string`

---

##### `s3ExportConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbJournalS3ExportDescription.property.s3ExportConfiguration"></a>

- *Type:* [`aws-cdk-sdk.qldb.Qldbs3ExportConfiguration`](#aws-cdk-sdk.qldb.Qldbs3ExportConfiguration)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbJournalS3ExportDescription.property.status"></a>

- *Type:* `string`

---

### QldbKinesisConfiguration <a name="aws-cdk-sdk.qldb.QldbKinesisConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbKinesisConfiguration: qldb.QldbKinesisConfiguration = { ... }
```

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbKinesisConfiguration.property.streamArn"></a>

- *Type:* `string`

---

##### `aggregationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbKinesisConfiguration.property.aggregationEnabled"></a>

- *Type:* `boolean`

---

### QldbLedgerSummary <a name="aws-cdk-sdk.qldb.QldbLedgerSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbLedgerSummary: qldb.QldbLedgerSummary = { ... }
```

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbLedgerSummary.property.creationDateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbLedgerSummary.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbLedgerSummary.property.state"></a>

- *Type:* `string`

---

### QldbListJournalKinesisStreamsForLedgerRequest <a name="aws-cdk-sdk.qldb.QldbListJournalKinesisStreamsForLedgerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbListJournalKinesisStreamsForLedgerRequest: qldb.QldbListJournalKinesisStreamsForLedgerRequest = { ... }
```

##### `ledgerName`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbListJournalKinesisStreamsForLedgerRequest.property.ledgerName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListJournalKinesisStreamsForLedgerRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListJournalKinesisStreamsForLedgerRequest.property.nextToken"></a>

- *Type:* `string`

---

### QldbListJournalKinesisStreamsForLedgerResponse <a name="aws-cdk-sdk.qldb.QldbListJournalKinesisStreamsForLedgerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbListJournalKinesisStreamsForLedgerResponse: qldb.QldbListJournalKinesisStreamsForLedgerResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListJournalKinesisStreamsForLedgerResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `streams`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListJournalKinesisStreamsForLedgerResponse.property.streams"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription`](#aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription)[]

---

### QldbListJournalS3ExportsForLedgerRequest <a name="aws-cdk-sdk.qldb.QldbListJournalS3ExportsForLedgerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbListJournalS3ExportsForLedgerRequest: qldb.QldbListJournalS3ExportsForLedgerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbListJournalS3ExportsForLedgerRequest.property.name"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListJournalS3ExportsForLedgerRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListJournalS3ExportsForLedgerRequest.property.nextToken"></a>

- *Type:* `string`

---

### QldbListJournalS3ExportsForLedgerResponse <a name="aws-cdk-sdk.qldb.QldbListJournalS3ExportsForLedgerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbListJournalS3ExportsForLedgerResponse: qldb.QldbListJournalS3ExportsForLedgerResponse = { ... }
```

##### `journalS3Exports`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListJournalS3ExportsForLedgerResponse.property.journalS3Exports"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbJournalS3ExportDescription`](#aws-cdk-sdk.qldb.QldbJournalS3ExportDescription)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListJournalS3ExportsForLedgerResponse.property.nextToken"></a>

- *Type:* `string`

---

### QldbListJournalS3ExportsRequest <a name="aws-cdk-sdk.qldb.QldbListJournalS3ExportsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbListJournalS3ExportsRequest: qldb.QldbListJournalS3ExportsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListJournalS3ExportsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListJournalS3ExportsRequest.property.nextToken"></a>

- *Type:* `string`

---

### QldbListJournalS3ExportsResponse <a name="aws-cdk-sdk.qldb.QldbListJournalS3ExportsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbListJournalS3ExportsResponse: qldb.QldbListJournalS3ExportsResponse = { ... }
```

##### `journalS3Exports`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListJournalS3ExportsResponse.property.journalS3Exports"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbJournalS3ExportDescription`](#aws-cdk-sdk.qldb.QldbJournalS3ExportDescription)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListJournalS3ExportsResponse.property.nextToken"></a>

- *Type:* `string`

---

### QldbListLedgersRequest <a name="aws-cdk-sdk.qldb.QldbListLedgersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbListLedgersRequest: qldb.QldbListLedgersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListLedgersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListLedgersRequest.property.nextToken"></a>

- *Type:* `string`

---

### QldbListLedgersResponse <a name="aws-cdk-sdk.qldb.QldbListLedgersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbListLedgersResponse: qldb.QldbListLedgersResponse = { ... }
```

##### `ledgers`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListLedgersResponse.property.ledgers"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbLedgerSummary`](#aws-cdk-sdk.qldb.QldbLedgerSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListLedgersResponse.property.nextToken"></a>

- *Type:* `string`

---

### QldbListTagsForResourceRequest <a name="aws-cdk-sdk.qldb.QldbListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbListTagsForResourceRequest: qldb.QldbListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### QldbListTagsForResourceResponse <a name="aws-cdk-sdk.qldb.QldbListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbListTagsForResourceResponse: qldb.QldbListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### Qldbs3EncryptionConfiguration <a name="aws-cdk-sdk.qldb.Qldbs3EncryptionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbs3EncryptionConfiguration: qldb.Qldbs3EncryptionConfiguration = { ... }
```

##### `objectEncryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.Qldbs3EncryptionConfiguration.property.objectEncryptionType"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.Qldbs3EncryptionConfiguration.property.kmsKeyArn"></a>

- *Type:* `string`

---

### Qldbs3ExportConfiguration <a name="aws-cdk-sdk.qldb.Qldbs3ExportConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbs3ExportConfiguration: qldb.Qldbs3ExportConfiguration = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.Qldbs3ExportConfiguration.property.bucket"></a>

- *Type:* `string`

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.Qldbs3ExportConfiguration.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.qldb.Qldbs3EncryptionConfiguration`](#aws-cdk-sdk.qldb.Qldbs3EncryptionConfiguration)

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.Qldbs3ExportConfiguration.property.prefix"></a>

- *Type:* `string`

---

### QldbStreamJournalToKinesisRequest <a name="aws-cdk-sdk.qldb.QldbStreamJournalToKinesisRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbStreamJournalToKinesisRequest: qldb.QldbStreamJournalToKinesisRequest = { ... }
```

##### `inclusiveStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbStreamJournalToKinesisRequest.property.inclusiveStartTime"></a>

- *Type:* `string`

---

##### `kinesisConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbStreamJournalToKinesisRequest.property.kinesisConfiguration"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbKinesisConfiguration`](#aws-cdk-sdk.qldb.QldbKinesisConfiguration)

---

##### `ledgerName`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbStreamJournalToKinesisRequest.property.ledgerName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbStreamJournalToKinesisRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbStreamJournalToKinesisRequest.property.streamName"></a>

- *Type:* `string`

---

##### `exclusiveEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbStreamJournalToKinesisRequest.property.exclusiveEndTime"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbStreamJournalToKinesisRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### QldbStreamJournalToKinesisResponse <a name="aws-cdk-sdk.qldb.QldbStreamJournalToKinesisResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbStreamJournalToKinesisResponse: qldb.QldbStreamJournalToKinesisResponse = { ... }
```

##### `streamId`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbStreamJournalToKinesisResponse.property.streamId"></a>

- *Type:* `string`

---

### QldbTagResourceRequest <a name="aws-cdk-sdk.qldb.QldbTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbTagResourceRequest: qldb.QldbTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### QldbTagResourceResponse <a name="aws-cdk-sdk.qldb.QldbTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbTagResourceResponse: qldb.QldbTagResourceResponse = { ... }
```

### QldbUntagResourceRequest <a name="aws-cdk-sdk.qldb.QldbUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbUntagResourceRequest: qldb.QldbUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### QldbUntagResourceResponse <a name="aws-cdk-sdk.qldb.QldbUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbUntagResourceResponse: qldb.QldbUntagResourceResponse = { ... }
```

### QldbUpdateLedgerRequest <a name="aws-cdk-sdk.qldb.QldbUpdateLedgerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbUpdateLedgerRequest: qldb.QldbUpdateLedgerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QldbUpdateLedgerRequest.property.name"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbUpdateLedgerRequest.property.deletionProtection"></a>

- *Type:* `boolean`

---

### QldbUpdateLedgerResponse <a name="aws-cdk-sdk.qldb.QldbUpdateLedgerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbUpdateLedgerResponse: qldb.QldbUpdateLedgerResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbUpdateLedgerResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbUpdateLedgerResponse.property.creationDateTime"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbUpdateLedgerResponse.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbUpdateLedgerResponse.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbUpdateLedgerResponse.property.state"></a>

- *Type:* `string`

---

### QldbValueHolder <a name="aws-cdk-sdk.qldb.QldbValueHolder"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

const qldbValueHolder: qldb.QldbValueHolder = { ... }
```

##### `ionText`<sup>Optional</sup> <a name="aws-cdk-sdk.qldb.QldbValueHolder.property.ionText"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### QLDBResponsesCancelJournalKinesisStream <a name="aws-cdk-sdk.qldb.QLDBResponsesCancelJournalKinesisStream"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesCancelJournalKinesisStream.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesCancelJournalKinesisStream(__scope: Construct, __resources: string[], __input: QldbCancelJournalKinesisStreamRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesCancelJournalKinesisStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesCancelJournalKinesisStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesCancelJournalKinesisStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbCancelJournalKinesisStreamRequest`](#aws-cdk-sdk.qldb.QldbCancelJournalKinesisStreamRequest)

---



#### Properties <a name="Properties"></a>

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesCancelJournalKinesisStream.property.streamId"></a>

- *Type:* `string`

---


### QLDBResponsesCreateLedger <a name="aws-cdk-sdk.qldb.QLDBResponsesCreateLedger"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesCreateLedger.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesCreateLedger(__scope: Construct, __resources: string[], __input: QldbCreateLedgerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesCreateLedger.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesCreateLedger.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesCreateLedger.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbCreateLedgerRequest`](#aws-cdk-sdk.qldb.QldbCreateLedgerRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesCreateLedger.property.arn"></a>

- *Type:* `string`

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesCreateLedger.property.creationDateTime"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesCreateLedger.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesCreateLedger.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesCreateLedger.property.state"></a>

- *Type:* `string`

---


### QLDBResponsesDescribeJournalKinesisStream <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStream"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStream.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesDescribeJournalKinesisStream(__scope: Construct, __resources: string[], __input: QldbDescribeJournalKinesisStreamRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbDescribeJournalKinesisStreamRequest`](#aws-cdk-sdk.qldb.QldbDescribeJournalKinesisStreamRequest)

---



#### Properties <a name="Properties"></a>

##### `stream`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStream.property.stream"></a>

- *Type:* [`aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream`](#aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream)

---


### QLDBResponsesDescribeJournalKinesisStreamStream <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesDescribeJournalKinesisStreamStream(__scope: Construct, __resources: string[], __input: QldbDescribeJournalKinesisStreamRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbDescribeJournalKinesisStreamRequest`](#aws-cdk-sdk.qldb.QldbDescribeJournalKinesisStreamRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream.property.creationTime"></a>

- *Type:* `string`

---

##### `errorCause`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream.property.errorCause"></a>

- *Type:* `string`

---

##### `exclusiveEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream.property.exclusiveEndTime"></a>

- *Type:* `string`

---

##### `inclusiveStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream.property.inclusiveStartTime"></a>

- *Type:* `string`

---

##### `kinesisConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream.property.kinesisConfiguration"></a>

- *Type:* [`aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStreamKinesisConfiguration`](#aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStreamKinesisConfiguration)

---

##### `ledgerName`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream.property.ledgerName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream.property.status"></a>

- *Type:* `string`

---

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream.property.streamId"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStream.property.streamName"></a>

- *Type:* `string`

---


### QLDBResponsesDescribeJournalKinesisStreamStreamKinesisConfiguration <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStreamKinesisConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStreamKinesisConfiguration.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesDescribeJournalKinesisStreamStreamKinesisConfiguration(__scope: Construct, __resources: string[], __input: QldbDescribeJournalKinesisStreamRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStreamKinesisConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStreamKinesisConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStreamKinesisConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbDescribeJournalKinesisStreamRequest`](#aws-cdk-sdk.qldb.QldbDescribeJournalKinesisStreamRequest)

---



#### Properties <a name="Properties"></a>

##### `aggregationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStreamKinesisConfiguration.property.aggregationEnabled"></a>

- *Type:* `boolean`

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalKinesisStreamStreamKinesisConfiguration.property.streamArn"></a>

- *Type:* `string`

---


### QLDBResponsesDescribeJournalS3Export <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3Export"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3Export.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesDescribeJournalS3Export(__scope: Construct, __resources: string[], __input: QldbDescribeJournalS3ExportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3Export.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3Export.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3Export.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbDescribeJournalS3ExportRequest`](#aws-cdk-sdk.qldb.QldbDescribeJournalS3ExportRequest)

---



#### Properties <a name="Properties"></a>

##### `exportDescription`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3Export.property.exportDescription"></a>

- *Type:* [`aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescription`](#aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescription)

---


### QLDBResponsesDescribeJournalS3ExportExportDescription <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescription"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescription.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesDescribeJournalS3ExportExportDescription(__scope: Construct, __resources: string[], __input: QldbDescribeJournalS3ExportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbDescribeJournalS3ExportRequest`](#aws-cdk-sdk.qldb.QldbDescribeJournalS3ExportRequest)

---



#### Properties <a name="Properties"></a>

##### `exclusiveEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescription.property.exclusiveEndTime"></a>

- *Type:* `string`

---

##### `exportCreationTime`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescription.property.exportCreationTime"></a>

- *Type:* `string`

---

##### `exportId`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescription.property.exportId"></a>

- *Type:* `string`

---

##### `inclusiveStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescription.property.inclusiveStartTime"></a>

- *Type:* `string`

---

##### `ledgerName`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescription.property.ledgerName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescription.property.roleArn"></a>

- *Type:* `string`

---

##### `s3ExportConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescription.property.s3ExportConfiguration"></a>

- *Type:* [`aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfiguration`](#aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfiguration)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescription.property.status"></a>

- *Type:* `string`

---


### QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfiguration <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfiguration.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfiguration(__scope: Construct, __resources: string[], __input: QldbDescribeJournalS3ExportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbDescribeJournalS3ExportRequest`](#aws-cdk-sdk.qldb.QldbDescribeJournalS3ExportRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfiguration.property.bucket"></a>

- *Type:* `string`

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfiguration.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration`](#aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration)

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfiguration.property.prefix"></a>

- *Type:* `string`

---


### QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration(__scope: Construct, __resources: string[], __input: QldbDescribeJournalS3ExportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbDescribeJournalS3ExportRequest`](#aws-cdk-sdk.qldb.QldbDescribeJournalS3ExportRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `objectEncryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeJournalS3ExportExportDescriptionS3ExportConfigurationEncryptionConfiguration.property.objectEncryptionType"></a>

- *Type:* `string`

---


### QLDBResponsesDescribeLedger <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeLedger"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeLedger.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesDescribeLedger(__scope: Construct, __resources: string[], __input: QldbDescribeLedgerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeLedger.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeLedger.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeLedger.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbDescribeLedgerRequest`](#aws-cdk-sdk.qldb.QldbDescribeLedgerRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeLedger.property.arn"></a>

- *Type:* `string`

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeLedger.property.creationDateTime"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeLedger.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeLedger.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesDescribeLedger.property.state"></a>

- *Type:* `string`

---


### QLDBResponsesExportJournalToS3 <a name="aws-cdk-sdk.qldb.QLDBResponsesExportJournalToS3"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesExportJournalToS3.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesExportJournalToS3(__scope: Construct, __resources: string[], __input: QldbExportJournalToS3Request)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesExportJournalToS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesExportJournalToS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesExportJournalToS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbExportJournalToS3Request`](#aws-cdk-sdk.qldb.QldbExportJournalToS3Request)

---



#### Properties <a name="Properties"></a>

##### `exportId`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesExportJournalToS3.property.exportId"></a>

- *Type:* `string`

---


### QLDBResponsesFetchBlock <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlock"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlock.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesFetchBlock(__scope: Construct, __resources: string[], __input: QldbGetBlockRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlock.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlock.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlock.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbGetBlockRequest`](#aws-cdk-sdk.qldb.QldbGetBlockRequest)

---



#### Properties <a name="Properties"></a>

##### `block`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlock.property.block"></a>

- *Type:* [`aws-cdk-sdk.qldb.QLDBResponsesFetchBlockBlock`](#aws-cdk-sdk.qldb.QLDBResponsesFetchBlockBlock)

---

##### `proof`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlock.property.proof"></a>

- *Type:* [`aws-cdk-sdk.qldb.QLDBResponsesFetchBlockProof`](#aws-cdk-sdk.qldb.QLDBResponsesFetchBlockProof)

---


### QLDBResponsesFetchBlockBlock <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlockBlock"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlockBlock.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesFetchBlockBlock(__scope: Construct, __resources: string[], __input: QldbGetBlockRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlockBlock.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlockBlock.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlockBlock.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbGetBlockRequest`](#aws-cdk-sdk.qldb.QldbGetBlockRequest)

---



#### Properties <a name="Properties"></a>

##### `ionText`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlockBlock.property.ionText"></a>

- *Type:* `string`

---


### QLDBResponsesFetchBlockProof <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlockProof"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlockProof.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesFetchBlockProof(__scope: Construct, __resources: string[], __input: QldbGetBlockRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlockProof.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlockProof.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlockProof.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbGetBlockRequest`](#aws-cdk-sdk.qldb.QldbGetBlockRequest)

---



#### Properties <a name="Properties"></a>

##### `ionText`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchBlockProof.property.ionText"></a>

- *Type:* `string`

---


### QLDBResponsesFetchDigest <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchDigest"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchDigest.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesFetchDigest(__scope: Construct, __resources: string[], __input: QldbGetDigestRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchDigest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchDigest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchDigest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbGetDigestRequest`](#aws-cdk-sdk.qldb.QldbGetDigestRequest)

---



#### Properties <a name="Properties"></a>

##### `digest`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchDigest.property.digest"></a>

- *Type:* `any`

---

##### `digestTipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchDigest.property.digestTipAddress"></a>

- *Type:* [`aws-cdk-sdk.qldb.QLDBResponsesFetchDigestDigestTipAddress`](#aws-cdk-sdk.qldb.QLDBResponsesFetchDigestDigestTipAddress)

---


### QLDBResponsesFetchDigestDigestTipAddress <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchDigestDigestTipAddress"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchDigestDigestTipAddress.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesFetchDigestDigestTipAddress(__scope: Construct, __resources: string[], __input: QldbGetDigestRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchDigestDigestTipAddress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchDigestDigestTipAddress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchDigestDigestTipAddress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbGetDigestRequest`](#aws-cdk-sdk.qldb.QldbGetDigestRequest)

---



#### Properties <a name="Properties"></a>

##### `ionText`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchDigestDigestTipAddress.property.ionText"></a>

- *Type:* `string`

---


### QLDBResponsesFetchRevision <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevision"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevision.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesFetchRevision(__scope: Construct, __resources: string[], __input: QldbGetRevisionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbGetRevisionRequest`](#aws-cdk-sdk.qldb.QldbGetRevisionRequest)

---



#### Properties <a name="Properties"></a>

##### `proof`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevision.property.proof"></a>

- *Type:* [`aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionProof`](#aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionProof)

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevision.property.revision"></a>

- *Type:* [`aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionRevision`](#aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionRevision)

---


### QLDBResponsesFetchRevisionProof <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionProof"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionProof.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesFetchRevisionProof(__scope: Construct, __resources: string[], __input: QldbGetRevisionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionProof.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionProof.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionProof.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbGetRevisionRequest`](#aws-cdk-sdk.qldb.QldbGetRevisionRequest)

---



#### Properties <a name="Properties"></a>

##### `ionText`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionProof.property.ionText"></a>

- *Type:* `string`

---


### QLDBResponsesFetchRevisionRevision <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionRevision"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionRevision.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesFetchRevisionRevision(__scope: Construct, __resources: string[], __input: QldbGetRevisionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbGetRevisionRequest`](#aws-cdk-sdk.qldb.QldbGetRevisionRequest)

---



#### Properties <a name="Properties"></a>

##### `ionText`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesFetchRevisionRevision.property.ionText"></a>

- *Type:* `string`

---


### QLDBResponsesListJournalKinesisStreamsForLedger <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalKinesisStreamsForLedger"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalKinesisStreamsForLedger.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesListJournalKinesisStreamsForLedger(__scope: Construct, __resources: string[], __input: QldbListJournalKinesisStreamsForLedgerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalKinesisStreamsForLedger.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalKinesisStreamsForLedger.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalKinesisStreamsForLedger.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbListJournalKinesisStreamsForLedgerRequest`](#aws-cdk-sdk.qldb.QldbListJournalKinesisStreamsForLedgerRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalKinesisStreamsForLedger.property.nextToken"></a>

- *Type:* `string`

---

##### `streams`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalKinesisStreamsForLedger.property.streams"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription`](#aws-cdk-sdk.qldb.QldbJournalKinesisStreamDescription)[]

---


### QLDBResponsesListJournalS3Exports <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalS3Exports"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalS3Exports.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesListJournalS3Exports(__scope: Construct, __resources: string[], __input: QldbListJournalS3ExportsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalS3Exports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalS3Exports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalS3Exports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbListJournalS3ExportsRequest`](#aws-cdk-sdk.qldb.QldbListJournalS3ExportsRequest)

---



#### Properties <a name="Properties"></a>

##### `journalS3Exports`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalS3Exports.property.journalS3Exports"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbJournalS3ExportDescription`](#aws-cdk-sdk.qldb.QldbJournalS3ExportDescription)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalS3Exports.property.nextToken"></a>

- *Type:* `string`

---


### QLDBResponsesListJournalS3ExportsForLedger <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalS3ExportsForLedger"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalS3ExportsForLedger.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesListJournalS3ExportsForLedger(__scope: Construct, __resources: string[], __input: QldbListJournalS3ExportsForLedgerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalS3ExportsForLedger.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalS3ExportsForLedger.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalS3ExportsForLedger.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbListJournalS3ExportsForLedgerRequest`](#aws-cdk-sdk.qldb.QldbListJournalS3ExportsForLedgerRequest)

---



#### Properties <a name="Properties"></a>

##### `journalS3Exports`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalS3ExportsForLedger.property.journalS3Exports"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbJournalS3ExportDescription`](#aws-cdk-sdk.qldb.QldbJournalS3ExportDescription)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListJournalS3ExportsForLedger.property.nextToken"></a>

- *Type:* `string`

---


### QLDBResponsesListLedgers <a name="aws-cdk-sdk.qldb.QLDBResponsesListLedgers"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesListLedgers.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesListLedgers(__scope: Construct, __resources: string[], __input: QldbListLedgersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListLedgers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListLedgers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListLedgers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbListLedgersRequest`](#aws-cdk-sdk.qldb.QldbListLedgersRequest)

---



#### Properties <a name="Properties"></a>

##### `ledgers`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListLedgers.property.ledgers"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbLedgerSummary`](#aws-cdk-sdk.qldb.QldbLedgerSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListLedgers.property.nextToken"></a>

- *Type:* `string`

---


### QLDBResponsesListTagsForResource <a name="aws-cdk-sdk.qldb.QLDBResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesListTagsForResource.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: QldbListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbListTagsForResourceRequest`](#aws-cdk-sdk.qldb.QldbListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### QLDBResponsesStreamJournalToKinesis <a name="aws-cdk-sdk.qldb.QLDBResponsesStreamJournalToKinesis"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesStreamJournalToKinesis.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesStreamJournalToKinesis(__scope: Construct, __resources: string[], __input: QldbStreamJournalToKinesisRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesStreamJournalToKinesis.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesStreamJournalToKinesis.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesStreamJournalToKinesis.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbStreamJournalToKinesisRequest`](#aws-cdk-sdk.qldb.QldbStreamJournalToKinesisRequest)

---



#### Properties <a name="Properties"></a>

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesStreamJournalToKinesis.property.streamId"></a>

- *Type:* `string`

---


### QLDBResponsesUpdateLedger <a name="aws-cdk-sdk.qldb.QLDBResponsesUpdateLedger"></a>

#### Initializer <a name="aws-cdk-sdk.qldb.QLDBResponsesUpdateLedger.Initializer"></a>

```typescript
import { qldb } from 'aws-cdk-sdk'

new qldb.QLDBResponsesUpdateLedger(__scope: Construct, __resources: string[], __input: QldbUpdateLedgerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesUpdateLedger.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesUpdateLedger.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesUpdateLedger.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldb.QldbUpdateLedgerRequest`](#aws-cdk-sdk.qldb.QldbUpdateLedgerRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesUpdateLedger.property.arn"></a>

- *Type:* `string`

---

##### `creationDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesUpdateLedger.property.creationDateTime"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesUpdateLedger.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesUpdateLedger.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.qldb.QLDBResponsesUpdateLedger.property.state"></a>

- *Type:* `string`

---



