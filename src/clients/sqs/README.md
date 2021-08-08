# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SqsClient <a name="aws-cdk-sdk.sqs.SqsClient"></a>

#### Initializer <a name="aws-cdk-sdk.sqs.SqsClient.Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

new sqs.SqsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addPermission` <a name="aws-cdk-sdk.sqs.SqsClient.addPermission"></a>

```typescript
public addPermission(input: SqsAddPermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsAddPermissionRequest`](#aws-cdk-sdk.sqs.SqsAddPermissionRequest)

---

##### `changeMessageVisibility` <a name="aws-cdk-sdk.sqs.SqsClient.changeMessageVisibility"></a>

```typescript
public changeMessageVisibility(input: SqsChangeMessageVisibilityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsChangeMessageVisibilityRequest`](#aws-cdk-sdk.sqs.SqsChangeMessageVisibilityRequest)

---

##### `changeMessageVisibilityBatch` <a name="aws-cdk-sdk.sqs.SqsClient.changeMessageVisibilityBatch"></a>

```typescript
public changeMessageVisibilityBatch(input: SqsChangeMessageVisibilityBatchRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchRequest`](#aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchRequest)

---

##### `createQueue` <a name="aws-cdk-sdk.sqs.SqsClient.createQueue"></a>

```typescript
public createQueue(input: SqsCreateQueueRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsCreateQueueRequest`](#aws-cdk-sdk.sqs.SqsCreateQueueRequest)

---

##### `deleteMessage` <a name="aws-cdk-sdk.sqs.SqsClient.deleteMessage"></a>

```typescript
public deleteMessage(input: SqsDeleteMessageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsDeleteMessageRequest`](#aws-cdk-sdk.sqs.SqsDeleteMessageRequest)

---

##### `deleteMessageBatch` <a name="aws-cdk-sdk.sqs.SqsClient.deleteMessageBatch"></a>

```typescript
public deleteMessageBatch(input: SqsDeleteMessageBatchRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsDeleteMessageBatchRequest`](#aws-cdk-sdk.sqs.SqsDeleteMessageBatchRequest)

---

##### `deleteQueue` <a name="aws-cdk-sdk.sqs.SqsClient.deleteQueue"></a>

```typescript
public deleteQueue(input: SqsDeleteQueueRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsDeleteQueueRequest`](#aws-cdk-sdk.sqs.SqsDeleteQueueRequest)

---

##### `fetchQueueAttributes` <a name="aws-cdk-sdk.sqs.SqsClient.fetchQueueAttributes"></a>

```typescript
public fetchQueueAttributes(input: SqsGetQueueAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsGetQueueAttributesRequest`](#aws-cdk-sdk.sqs.SqsGetQueueAttributesRequest)

---

##### `fetchQueueUrl` <a name="aws-cdk-sdk.sqs.SqsClient.fetchQueueUrl"></a>

```typescript
public fetchQueueUrl(input: SqsGetQueueUrlRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsGetQueueUrlRequest`](#aws-cdk-sdk.sqs.SqsGetQueueUrlRequest)

---

##### `listDeadLetterSourceQueues` <a name="aws-cdk-sdk.sqs.SqsClient.listDeadLetterSourceQueues"></a>

```typescript
public listDeadLetterSourceQueues(input: SqsListDeadLetterSourceQueuesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsListDeadLetterSourceQueuesRequest`](#aws-cdk-sdk.sqs.SqsListDeadLetterSourceQueuesRequest)

---

##### `listQueues` <a name="aws-cdk-sdk.sqs.SqsClient.listQueues"></a>

```typescript
public listQueues(input: SqsListQueuesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsListQueuesRequest`](#aws-cdk-sdk.sqs.SqsListQueuesRequest)

---

##### `listQueueTags` <a name="aws-cdk-sdk.sqs.SqsClient.listQueueTags"></a>

```typescript
public listQueueTags(input: SqsListQueueTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsListQueueTagsRequest`](#aws-cdk-sdk.sqs.SqsListQueueTagsRequest)

---

##### `purgeQueue` <a name="aws-cdk-sdk.sqs.SqsClient.purgeQueue"></a>

```typescript
public purgeQueue(input: SqsPurgeQueueRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsPurgeQueueRequest`](#aws-cdk-sdk.sqs.SqsPurgeQueueRequest)

---

##### `putQueueAttributes` <a name="aws-cdk-sdk.sqs.SqsClient.putQueueAttributes"></a>

```typescript
public putQueueAttributes(input: SqsSetQueueAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsSetQueueAttributesRequest`](#aws-cdk-sdk.sqs.SqsSetQueueAttributesRequest)

---

##### `receiveMessage` <a name="aws-cdk-sdk.sqs.SqsClient.receiveMessage"></a>

```typescript
public receiveMessage(input: SqsReceiveMessageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsReceiveMessageRequest`](#aws-cdk-sdk.sqs.SqsReceiveMessageRequest)

---

##### `removePermission` <a name="aws-cdk-sdk.sqs.SqsClient.removePermission"></a>

```typescript
public removePermission(input: SqsRemovePermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsRemovePermissionRequest`](#aws-cdk-sdk.sqs.SqsRemovePermissionRequest)

---

##### `sendMessage` <a name="aws-cdk-sdk.sqs.SqsClient.sendMessage"></a>

```typescript
public sendMessage(input: SqsSendMessageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsSendMessageRequest`](#aws-cdk-sdk.sqs.SqsSendMessageRequest)

---

##### `sendMessageBatch` <a name="aws-cdk-sdk.sqs.SqsClient.sendMessageBatch"></a>

```typescript
public sendMessageBatch(input: SqsSendMessageBatchRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsSendMessageBatchRequest`](#aws-cdk-sdk.sqs.SqsSendMessageBatchRequest)

---

##### `tagQueue` <a name="aws-cdk-sdk.sqs.SqsClient.tagQueue"></a>

```typescript
public tagQueue(input: SqsTagQueueRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsTagQueueRequest`](#aws-cdk-sdk.sqs.SqsTagQueueRequest)

---

##### `untagQueue` <a name="aws-cdk-sdk.sqs.SqsClient.untagQueue"></a>

```typescript
public untagQueue(input: SqsUntagQueueRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsUntagQueueRequest`](#aws-cdk-sdk.sqs.SqsUntagQueueRequest)

---




## Structs <a name="Structs"></a>

### SqsAddPermissionRequest <a name="aws-cdk-sdk.sqs.SqsAddPermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsAddPermissionRequest: sqs.SqsAddPermissionRequest = { ... }
```

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsAddPermissionRequest.property.actions"></a>

- *Type:* `string`[]

---

##### `awsAccountIds`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsAddPermissionRequest.property.awsAccountIds"></a>

- *Type:* `string`[]

---

##### `label`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsAddPermissionRequest.property.label"></a>

- *Type:* `string`

---

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsAddPermissionRequest.property.queueUrl"></a>

- *Type:* `string`

---

### SqsBatchResultErrorEntry <a name="aws-cdk-sdk.sqs.SqsBatchResultErrorEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsBatchResultErrorEntry: sqs.SqsBatchResultErrorEntry = { ... }
```

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsBatchResultErrorEntry.property.code"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsBatchResultErrorEntry.property.id"></a>

- *Type:* `string`

---

##### `senderFault`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsBatchResultErrorEntry.property.senderFault"></a>

- *Type:* `boolean`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsBatchResultErrorEntry.property.message"></a>

- *Type:* `string`

---

### SqsChangeMessageVisibilityBatchRequest <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsChangeMessageVisibilityBatchRequest: sqs.SqsChangeMessageVisibilityBatchRequest = { ... }
```

##### `entries`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchRequest.property.entries"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchRequestEntry`](#aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchRequestEntry)[]

---

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchRequest.property.queueUrl"></a>

- *Type:* `string`

---

### SqsChangeMessageVisibilityBatchRequestEntry <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchRequestEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsChangeMessageVisibilityBatchRequestEntry: sqs.SqsChangeMessageVisibilityBatchRequestEntry = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchRequestEntry.property.id"></a>

- *Type:* `string`

---

##### `receiptHandle`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchRequestEntry.property.receiptHandle"></a>

- *Type:* `string`

---

##### `visibilityTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchRequestEntry.property.visibilityTimeout"></a>

- *Type:* `number`

---

### SqsChangeMessageVisibilityBatchResult <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsChangeMessageVisibilityBatchResult: sqs.SqsChangeMessageVisibilityBatchResult = { ... }
```

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchResult.property.failed"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsBatchResultErrorEntry`](#aws-cdk-sdk.sqs.SqsBatchResultErrorEntry)[]

---

##### `successful`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchResult.property.successful"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchResultEntry`](#aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchResultEntry)[]

---

### SqsChangeMessageVisibilityBatchResultEntry <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchResultEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsChangeMessageVisibilityBatchResultEntry: sqs.SqsChangeMessageVisibilityBatchResultEntry = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchResultEntry.property.id"></a>

- *Type:* `string`

---

### SqsChangeMessageVisibilityRequest <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsChangeMessageVisibilityRequest: sqs.SqsChangeMessageVisibilityRequest = { ... }
```

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityRequest.property.queueUrl"></a>

- *Type:* `string`

---

##### `receiptHandle`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityRequest.property.receiptHandle"></a>

- *Type:* `string`

---

##### `visibilityTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsChangeMessageVisibilityRequest.property.visibilityTimeout"></a>

- *Type:* `number`

---

### SqsCreateQueueRequest <a name="aws-cdk-sdk.sqs.SqsCreateQueueRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsCreateQueueRequest: sqs.SqsCreateQueueRequest = { ... }
```

##### `queueName`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsCreateQueueRequest.property.queueName"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsCreateQueueRequest.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsCreateQueueRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SqsCreateQueueResult <a name="aws-cdk-sdk.sqs.SqsCreateQueueResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsCreateQueueResult: sqs.SqsCreateQueueResult = { ... }
```

##### `queueUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsCreateQueueResult.property.queueUrl"></a>

- *Type:* `string`

---

### SqsDeleteMessageBatchRequest <a name="aws-cdk-sdk.sqs.SqsDeleteMessageBatchRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsDeleteMessageBatchRequest: sqs.SqsDeleteMessageBatchRequest = { ... }
```

##### `entries`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsDeleteMessageBatchRequest.property.entries"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsDeleteMessageBatchRequestEntry`](#aws-cdk-sdk.sqs.SqsDeleteMessageBatchRequestEntry)[]

---

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsDeleteMessageBatchRequest.property.queueUrl"></a>

- *Type:* `string`

---

### SqsDeleteMessageBatchRequestEntry <a name="aws-cdk-sdk.sqs.SqsDeleteMessageBatchRequestEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsDeleteMessageBatchRequestEntry: sqs.SqsDeleteMessageBatchRequestEntry = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsDeleteMessageBatchRequestEntry.property.id"></a>

- *Type:* `string`

---

##### `receiptHandle`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsDeleteMessageBatchRequestEntry.property.receiptHandle"></a>

- *Type:* `string`

---

### SqsDeleteMessageBatchResult <a name="aws-cdk-sdk.sqs.SqsDeleteMessageBatchResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsDeleteMessageBatchResult: sqs.SqsDeleteMessageBatchResult = { ... }
```

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsDeleteMessageBatchResult.property.failed"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsBatchResultErrorEntry`](#aws-cdk-sdk.sqs.SqsBatchResultErrorEntry)[]

---

##### `successful`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsDeleteMessageBatchResult.property.successful"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsDeleteMessageBatchResultEntry`](#aws-cdk-sdk.sqs.SqsDeleteMessageBatchResultEntry)[]

---

### SqsDeleteMessageBatchResultEntry <a name="aws-cdk-sdk.sqs.SqsDeleteMessageBatchResultEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsDeleteMessageBatchResultEntry: sqs.SqsDeleteMessageBatchResultEntry = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsDeleteMessageBatchResultEntry.property.id"></a>

- *Type:* `string`

---

### SqsDeleteMessageRequest <a name="aws-cdk-sdk.sqs.SqsDeleteMessageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsDeleteMessageRequest: sqs.SqsDeleteMessageRequest = { ... }
```

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsDeleteMessageRequest.property.queueUrl"></a>

- *Type:* `string`

---

##### `receiptHandle`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsDeleteMessageRequest.property.receiptHandle"></a>

- *Type:* `string`

---

### SqsDeleteQueueRequest <a name="aws-cdk-sdk.sqs.SqsDeleteQueueRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsDeleteQueueRequest: sqs.SqsDeleteQueueRequest = { ... }
```

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsDeleteQueueRequest.property.queueUrl"></a>

- *Type:* `string`

---

### SqsGetQueueAttributesRequest <a name="aws-cdk-sdk.sqs.SqsGetQueueAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsGetQueueAttributesRequest: sqs.SqsGetQueueAttributesRequest = { ... }
```

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsGetQueueAttributesRequest.property.queueUrl"></a>

- *Type:* `string`

---

##### `attributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsGetQueueAttributesRequest.property.attributeNames"></a>

- *Type:* `string`[]

---

### SqsGetQueueAttributesResult <a name="aws-cdk-sdk.sqs.SqsGetQueueAttributesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsGetQueueAttributesResult: sqs.SqsGetQueueAttributesResult = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsGetQueueAttributesResult.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

### SqsGetQueueUrlRequest <a name="aws-cdk-sdk.sqs.SqsGetQueueUrlRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsGetQueueUrlRequest: sqs.SqsGetQueueUrlRequest = { ... }
```

##### `queueName`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsGetQueueUrlRequest.property.queueName"></a>

- *Type:* `string`

---

##### `queueOwnerAwsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsGetQueueUrlRequest.property.queueOwnerAwsAccountId"></a>

- *Type:* `string`

---

### SqsGetQueueUrlResult <a name="aws-cdk-sdk.sqs.SqsGetQueueUrlResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsGetQueueUrlResult: sqs.SqsGetQueueUrlResult = { ... }
```

##### `queueUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsGetQueueUrlResult.property.queueUrl"></a>

- *Type:* `string`

---

### SqsListDeadLetterSourceQueuesRequest <a name="aws-cdk-sdk.sqs.SqsListDeadLetterSourceQueuesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsListDeadLetterSourceQueuesRequest: sqs.SqsListDeadLetterSourceQueuesRequest = { ... }
```

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsListDeadLetterSourceQueuesRequest.property.queueUrl"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsListDeadLetterSourceQueuesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsListDeadLetterSourceQueuesRequest.property.nextToken"></a>

- *Type:* `string`

---

### SqsListDeadLetterSourceQueuesResult <a name="aws-cdk-sdk.sqs.SqsListDeadLetterSourceQueuesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsListDeadLetterSourceQueuesResult: sqs.SqsListDeadLetterSourceQueuesResult = { ... }
```

##### `queueUrls`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsListDeadLetterSourceQueuesResult.property.queueUrls"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsListDeadLetterSourceQueuesResult.property.nextToken"></a>

- *Type:* `string`

---

### SqsListQueuesRequest <a name="aws-cdk-sdk.sqs.SqsListQueuesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsListQueuesRequest: sqs.SqsListQueuesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsListQueuesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsListQueuesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `queueNamePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsListQueuesRequest.property.queueNamePrefix"></a>

- *Type:* `string`

---

### SqsListQueuesResult <a name="aws-cdk-sdk.sqs.SqsListQueuesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsListQueuesResult: sqs.SqsListQueuesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsListQueuesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `queueUrls`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsListQueuesResult.property.queueUrls"></a>

- *Type:* `string`[]

---

### SqsListQueueTagsRequest <a name="aws-cdk-sdk.sqs.SqsListQueueTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsListQueueTagsRequest: sqs.SqsListQueueTagsRequest = { ... }
```

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsListQueueTagsRequest.property.queueUrl"></a>

- *Type:* `string`

---

### SqsListQueueTagsResult <a name="aws-cdk-sdk.sqs.SqsListQueueTagsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsListQueueTagsResult: sqs.SqsListQueueTagsResult = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsListQueueTagsResult.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SqsMessage <a name="aws-cdk-sdk.sqs.SqsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsMessage: sqs.SqsMessage = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsMessage.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsMessage.property.body"></a>

- *Type:* `string`

---

##### `md5OfBody`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsMessage.property.md5OfBody"></a>

- *Type:* `string`

---

##### `md5OfMessageAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsMessage.property.md5OfMessageAttributes"></a>

- *Type:* `string`

---

##### `messageAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsMessage.property.messageAttributes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.sqs.SqsMessageAttributeValue`](#aws-cdk-sdk.sqs.SqsMessageAttributeValue)}

---

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsMessage.property.messageId"></a>

- *Type:* `string`

---

##### `receiptHandle`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsMessage.property.receiptHandle"></a>

- *Type:* `string`

---

### SqsMessageAttributeValue <a name="aws-cdk-sdk.sqs.SqsMessageAttributeValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsMessageAttributeValue: sqs.SqsMessageAttributeValue = { ... }
```

##### `dataType`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsMessageAttributeValue.property.dataType"></a>

- *Type:* `string`

---

##### `binaryListValues`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsMessageAttributeValue.property.binaryListValues"></a>

- *Type:* `any`[]

---

##### `binaryValue`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsMessageAttributeValue.property.binaryValue"></a>

- *Type:* `any`

---

##### `stringListValues`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsMessageAttributeValue.property.stringListValues"></a>

- *Type:* `string`[]

---

##### `stringValue`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsMessageAttributeValue.property.stringValue"></a>

- *Type:* `string`

---

### SqsMessageSystemAttributeValue <a name="aws-cdk-sdk.sqs.SqsMessageSystemAttributeValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsMessageSystemAttributeValue: sqs.SqsMessageSystemAttributeValue = { ... }
```

##### `dataType`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsMessageSystemAttributeValue.property.dataType"></a>

- *Type:* `string`

---

##### `binaryListValues`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsMessageSystemAttributeValue.property.binaryListValues"></a>

- *Type:* `any`[]

---

##### `binaryValue`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsMessageSystemAttributeValue.property.binaryValue"></a>

- *Type:* `any`

---

##### `stringListValues`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsMessageSystemAttributeValue.property.stringListValues"></a>

- *Type:* `string`[]

---

##### `stringValue`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsMessageSystemAttributeValue.property.stringValue"></a>

- *Type:* `string`

---

### SqsPurgeQueueRequest <a name="aws-cdk-sdk.sqs.SqsPurgeQueueRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsPurgeQueueRequest: sqs.SqsPurgeQueueRequest = { ... }
```

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsPurgeQueueRequest.property.queueUrl"></a>

- *Type:* `string`

---

### SqsReceiveMessageRequest <a name="aws-cdk-sdk.sqs.SqsReceiveMessageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsReceiveMessageRequest: sqs.SqsReceiveMessageRequest = { ... }
```

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsReceiveMessageRequest.property.queueUrl"></a>

- *Type:* `string`

---

##### `attributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsReceiveMessageRequest.property.attributeNames"></a>

- *Type:* `string`[]

---

##### `maxNumberOfMessages`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsReceiveMessageRequest.property.maxNumberOfMessages"></a>

- *Type:* `number`

---

##### `messageAttributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsReceiveMessageRequest.property.messageAttributeNames"></a>

- *Type:* `string`[]

---

##### `receiveRequestAttemptId`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsReceiveMessageRequest.property.receiveRequestAttemptId"></a>

- *Type:* `string`

---

##### `visibilityTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsReceiveMessageRequest.property.visibilityTimeout"></a>

- *Type:* `number`

---

##### `waitTimeSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsReceiveMessageRequest.property.waitTimeSeconds"></a>

- *Type:* `number`

---

### SqsReceiveMessageResult <a name="aws-cdk-sdk.sqs.SqsReceiveMessageResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsReceiveMessageResult: sqs.SqsReceiveMessageResult = { ... }
```

##### `messages`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsReceiveMessageResult.property.messages"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsMessage`](#aws-cdk-sdk.sqs.SqsMessage)[]

---

### SqsRemovePermissionRequest <a name="aws-cdk-sdk.sqs.SqsRemovePermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsRemovePermissionRequest: sqs.SqsRemovePermissionRequest = { ... }
```

##### `label`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsRemovePermissionRequest.property.label"></a>

- *Type:* `string`

---

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsRemovePermissionRequest.property.queueUrl"></a>

- *Type:* `string`

---

### SqsSendMessageBatchRequest <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsSendMessageBatchRequest: sqs.SqsSendMessageBatchRequest = { ... }
```

##### `entries`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchRequest.property.entries"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsSendMessageBatchRequestEntry`](#aws-cdk-sdk.sqs.SqsSendMessageBatchRequestEntry)[]

---

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchRequest.property.queueUrl"></a>

- *Type:* `string`

---

### SqsSendMessageBatchRequestEntry <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchRequestEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsSendMessageBatchRequestEntry: sqs.SqsSendMessageBatchRequestEntry = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchRequestEntry.property.id"></a>

- *Type:* `string`

---

##### `messageBody`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchRequestEntry.property.messageBody"></a>

- *Type:* `string`

---

##### `delaySeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchRequestEntry.property.delaySeconds"></a>

- *Type:* `number`

---

##### `messageAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchRequestEntry.property.messageAttributes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.sqs.SqsMessageAttributeValue`](#aws-cdk-sdk.sqs.SqsMessageAttributeValue)}

---

##### `messageDeduplicationId`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchRequestEntry.property.messageDeduplicationId"></a>

- *Type:* `string`

---

##### `messageGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchRequestEntry.property.messageGroupId"></a>

- *Type:* `string`

---

##### `messageSystemAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchRequestEntry.property.messageSystemAttributes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.sqs.SqsMessageSystemAttributeValue`](#aws-cdk-sdk.sqs.SqsMessageSystemAttributeValue)}

---

### SqsSendMessageBatchResult <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsSendMessageBatchResult: sqs.SqsSendMessageBatchResult = { ... }
```

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchResult.property.failed"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsBatchResultErrorEntry`](#aws-cdk-sdk.sqs.SqsBatchResultErrorEntry)[]

---

##### `successful`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchResult.property.successful"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsSendMessageBatchResultEntry`](#aws-cdk-sdk.sqs.SqsSendMessageBatchResultEntry)[]

---

### SqsSendMessageBatchResultEntry <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchResultEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsSendMessageBatchResultEntry: sqs.SqsSendMessageBatchResultEntry = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchResultEntry.property.id"></a>

- *Type:* `string`

---

##### `md5OfMessageBody`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchResultEntry.property.md5OfMessageBody"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchResultEntry.property.messageId"></a>

- *Type:* `string`

---

##### `md5OfMessageAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchResultEntry.property.md5OfMessageAttributes"></a>

- *Type:* `string`

---

##### `md5OfMessageSystemAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchResultEntry.property.md5OfMessageSystemAttributes"></a>

- *Type:* `string`

---

##### `sequenceNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageBatchResultEntry.property.sequenceNumber"></a>

- *Type:* `string`

---

### SqsSendMessageRequest <a name="aws-cdk-sdk.sqs.SqsSendMessageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsSendMessageRequest: sqs.SqsSendMessageRequest = { ... }
```

##### `messageBody`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageRequest.property.messageBody"></a>

- *Type:* `string`

---

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageRequest.property.queueUrl"></a>

- *Type:* `string`

---

##### `delaySeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageRequest.property.delaySeconds"></a>

- *Type:* `number`

---

##### `messageAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageRequest.property.messageAttributes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.sqs.SqsMessageAttributeValue`](#aws-cdk-sdk.sqs.SqsMessageAttributeValue)}

---

##### `messageDeduplicationId`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageRequest.property.messageDeduplicationId"></a>

- *Type:* `string`

---

##### `messageGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageRequest.property.messageGroupId"></a>

- *Type:* `string`

---

##### `messageSystemAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageRequest.property.messageSystemAttributes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.sqs.SqsMessageSystemAttributeValue`](#aws-cdk-sdk.sqs.SqsMessageSystemAttributeValue)}

---

### SqsSendMessageResult <a name="aws-cdk-sdk.sqs.SqsSendMessageResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsSendMessageResult: sqs.SqsSendMessageResult = { ... }
```

##### `md5OfMessageAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageResult.property.md5OfMessageAttributes"></a>

- *Type:* `string`

---

##### `md5OfMessageBody`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageResult.property.md5OfMessageBody"></a>

- *Type:* `string`

---

##### `md5OfMessageSystemAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageResult.property.md5OfMessageSystemAttributes"></a>

- *Type:* `string`

---

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageResult.property.messageId"></a>

- *Type:* `string`

---

##### `sequenceNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.sqs.SqsSendMessageResult.property.sequenceNumber"></a>

- *Type:* `string`

---

### SqsSetQueueAttributesRequest <a name="aws-cdk-sdk.sqs.SqsSetQueueAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsSetQueueAttributesRequest: sqs.SqsSetQueueAttributesRequest = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsSetQueueAttributesRequest.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsSetQueueAttributesRequest.property.queueUrl"></a>

- *Type:* `string`

---

### SqsTagQueueRequest <a name="aws-cdk-sdk.sqs.SqsTagQueueRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsTagQueueRequest: sqs.SqsTagQueueRequest = { ... }
```

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsTagQueueRequest.property.queueUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsTagQueueRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SqsUntagQueueRequest <a name="aws-cdk-sdk.sqs.SqsUntagQueueRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

const sqsUntagQueueRequest: sqs.SqsUntagQueueRequest = { ... }
```

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsUntagQueueRequest.property.queueUrl"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SqsUntagQueueRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

## Classes <a name="Classes"></a>

### SQSResponsesChangeMessageVisibilityBatch <a name="aws-cdk-sdk.sqs.SQSResponsesChangeMessageVisibilityBatch"></a>

#### Initializer <a name="aws-cdk-sdk.sqs.SQSResponsesChangeMessageVisibilityBatch.Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

new sqs.SQSResponsesChangeMessageVisibilityBatch(__scope: Construct, __resources: string[], __input: SqsChangeMessageVisibilityBatchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesChangeMessageVisibilityBatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesChangeMessageVisibilityBatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesChangeMessageVisibilityBatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchRequest`](#aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchRequest)

---



#### Properties <a name="Properties"></a>

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesChangeMessageVisibilityBatch.property.failed"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsBatchResultErrorEntry`](#aws-cdk-sdk.sqs.SqsBatchResultErrorEntry)[]

---

##### `successful`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesChangeMessageVisibilityBatch.property.successful"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchResultEntry`](#aws-cdk-sdk.sqs.SqsChangeMessageVisibilityBatchResultEntry)[]

---


### SQSResponsesCreateQueue <a name="aws-cdk-sdk.sqs.SQSResponsesCreateQueue"></a>

#### Initializer <a name="aws-cdk-sdk.sqs.SQSResponsesCreateQueue.Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

new sqs.SQSResponsesCreateQueue(__scope: Construct, __resources: string[], __input: SqsCreateQueueRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesCreateQueue.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesCreateQueue.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesCreateQueue.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsCreateQueueRequest`](#aws-cdk-sdk.sqs.SqsCreateQueueRequest)

---



#### Properties <a name="Properties"></a>

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesCreateQueue.property.queueUrl"></a>

- *Type:* `string`

---


### SQSResponsesDeleteMessageBatch <a name="aws-cdk-sdk.sqs.SQSResponsesDeleteMessageBatch"></a>

#### Initializer <a name="aws-cdk-sdk.sqs.SQSResponsesDeleteMessageBatch.Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

new sqs.SQSResponsesDeleteMessageBatch(__scope: Construct, __resources: string[], __input: SqsDeleteMessageBatchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesDeleteMessageBatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesDeleteMessageBatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesDeleteMessageBatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsDeleteMessageBatchRequest`](#aws-cdk-sdk.sqs.SqsDeleteMessageBatchRequest)

---



#### Properties <a name="Properties"></a>

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesDeleteMessageBatch.property.failed"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsBatchResultErrorEntry`](#aws-cdk-sdk.sqs.SqsBatchResultErrorEntry)[]

---

##### `successful`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesDeleteMessageBatch.property.successful"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsDeleteMessageBatchResultEntry`](#aws-cdk-sdk.sqs.SqsDeleteMessageBatchResultEntry)[]

---


### SQSResponsesFetchQueueAttributes <a name="aws-cdk-sdk.sqs.SQSResponsesFetchQueueAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.sqs.SQSResponsesFetchQueueAttributes.Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

new sqs.SQSResponsesFetchQueueAttributes(__scope: Construct, __resources: string[], __input: SqsGetQueueAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesFetchQueueAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesFetchQueueAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesFetchQueueAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsGetQueueAttributesRequest`](#aws-cdk-sdk.sqs.SqsGetQueueAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesFetchQueueAttributes.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---


### SQSResponsesFetchQueueUrl <a name="aws-cdk-sdk.sqs.SQSResponsesFetchQueueUrl"></a>

#### Initializer <a name="aws-cdk-sdk.sqs.SQSResponsesFetchQueueUrl.Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

new sqs.SQSResponsesFetchQueueUrl(__scope: Construct, __resources: string[], __input: SqsGetQueueUrlRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesFetchQueueUrl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesFetchQueueUrl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesFetchQueueUrl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsGetQueueUrlRequest`](#aws-cdk-sdk.sqs.SqsGetQueueUrlRequest)

---



#### Properties <a name="Properties"></a>

##### `queueUrl`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesFetchQueueUrl.property.queueUrl"></a>

- *Type:* `string`

---


### SQSResponsesListDeadLetterSourceQueues <a name="aws-cdk-sdk.sqs.SQSResponsesListDeadLetterSourceQueues"></a>

#### Initializer <a name="aws-cdk-sdk.sqs.SQSResponsesListDeadLetterSourceQueues.Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

new sqs.SQSResponsesListDeadLetterSourceQueues(__scope: Construct, __resources: string[], __input: SqsListDeadLetterSourceQueuesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesListDeadLetterSourceQueues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesListDeadLetterSourceQueues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesListDeadLetterSourceQueues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsListDeadLetterSourceQueuesRequest`](#aws-cdk-sdk.sqs.SqsListDeadLetterSourceQueuesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesListDeadLetterSourceQueues.property.nextToken"></a>

- *Type:* `string`

---

##### `queueUrls`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesListDeadLetterSourceQueues.property.queueUrls"></a>

- *Type:* `string`[]

---


### SQSResponsesListQueues <a name="aws-cdk-sdk.sqs.SQSResponsesListQueues"></a>

#### Initializer <a name="aws-cdk-sdk.sqs.SQSResponsesListQueues.Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

new sqs.SQSResponsesListQueues(__scope: Construct, __resources: string[], __input: SqsListQueuesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesListQueues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesListQueues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesListQueues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsListQueuesRequest`](#aws-cdk-sdk.sqs.SqsListQueuesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesListQueues.property.nextToken"></a>

- *Type:* `string`

---

##### `queueUrls`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesListQueues.property.queueUrls"></a>

- *Type:* `string`[]

---


### SQSResponsesListQueueTags <a name="aws-cdk-sdk.sqs.SQSResponsesListQueueTags"></a>

#### Initializer <a name="aws-cdk-sdk.sqs.SQSResponsesListQueueTags.Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

new sqs.SQSResponsesListQueueTags(__scope: Construct, __resources: string[], __input: SqsListQueueTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesListQueueTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesListQueueTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesListQueueTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsListQueueTagsRequest`](#aws-cdk-sdk.sqs.SqsListQueueTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesListQueueTags.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### SQSResponsesReceiveMessage <a name="aws-cdk-sdk.sqs.SQSResponsesReceiveMessage"></a>

#### Initializer <a name="aws-cdk-sdk.sqs.SQSResponsesReceiveMessage.Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

new sqs.SQSResponsesReceiveMessage(__scope: Construct, __resources: string[], __input: SqsReceiveMessageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesReceiveMessage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesReceiveMessage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesReceiveMessage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsReceiveMessageRequest`](#aws-cdk-sdk.sqs.SqsReceiveMessageRequest)

---



#### Properties <a name="Properties"></a>

##### `messages`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesReceiveMessage.property.messages"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsMessage`](#aws-cdk-sdk.sqs.SqsMessage)[]

---


### SQSResponsesSendMessage <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessage"></a>

#### Initializer <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessage.Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

new sqs.SQSResponsesSendMessage(__scope: Construct, __resources: string[], __input: SqsSendMessageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsSendMessageRequest`](#aws-cdk-sdk.sqs.SqsSendMessageRequest)

---



#### Properties <a name="Properties"></a>

##### `md5OfMessageAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessage.property.md5OfMessageAttributes"></a>

- *Type:* `string`

---

##### `md5OfMessageBody`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessage.property.md5OfMessageBody"></a>

- *Type:* `string`

---

##### `md5OfMessageSystemAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessage.property.md5OfMessageSystemAttributes"></a>

- *Type:* `string`

---

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessage.property.messageId"></a>

- *Type:* `string`

---

##### `sequenceNumber`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessage.property.sequenceNumber"></a>

- *Type:* `string`

---


### SQSResponsesSendMessageBatch <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessageBatch"></a>

#### Initializer <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessageBatch.Initializer"></a>

```typescript
import { sqs } from 'aws-cdk-sdk'

new sqs.SQSResponsesSendMessageBatch(__scope: Construct, __resources: string[], __input: SqsSendMessageBatchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessageBatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessageBatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessageBatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsSendMessageBatchRequest`](#aws-cdk-sdk.sqs.SqsSendMessageBatchRequest)

---



#### Properties <a name="Properties"></a>

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessageBatch.property.failed"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsBatchResultErrorEntry`](#aws-cdk-sdk.sqs.SqsBatchResultErrorEntry)[]

---

##### `successful`<sup>Required</sup> <a name="aws-cdk-sdk.sqs.SQSResponsesSendMessageBatch.property.successful"></a>

- *Type:* [`aws-cdk-sdk.sqs.SqsSendMessageBatchResultEntry`](#aws-cdk-sdk.sqs.SqsSendMessageBatchResultEntry)[]

---



