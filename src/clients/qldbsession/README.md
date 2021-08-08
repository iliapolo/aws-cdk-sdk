# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### QldbSessionClient <a name="aws-cdk-sdk.qldbsession.QldbSessionClient"></a>

#### Initializer <a name="aws-cdk-sdk.qldbsession.QldbSessionClient.Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

new qldbsession.QldbSessionClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `sendCommand` <a name="aws-cdk-sdk.qldbsession.QldbSessionClient.sendCommand"></a>

```typescript
public sendCommand(input: QldbSessionSendCommandRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest`](#aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest)

---




## Structs <a name="Structs"></a>

### QldbSessionAbortTransactionRequest <a name="aws-cdk-sdk.qldbsession.QldbSessionAbortTransactionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionAbortTransactionRequest: qldbsession.QldbSessionAbortTransactionRequest = { ... }
```

### QldbSessionAbortTransactionResult <a name="aws-cdk-sdk.qldbsession.QldbSessionAbortTransactionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionAbortTransactionResult: qldbsession.QldbSessionAbortTransactionResult = { ... }
```

### QldbSessionCommitTransactionRequest <a name="aws-cdk-sdk.qldbsession.QldbSessionCommitTransactionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionCommitTransactionRequest: qldbsession.QldbSessionCommitTransactionRequest = { ... }
```

##### `commitDigest`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionCommitTransactionRequest.property.commitDigest"></a>

- *Type:* `any`

---

##### `transactionId`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionCommitTransactionRequest.property.transactionId"></a>

- *Type:* `string`

---

### QldbSessionCommitTransactionResult <a name="aws-cdk-sdk.qldbsession.QldbSessionCommitTransactionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionCommitTransactionResult: qldbsession.QldbSessionCommitTransactionResult = { ... }
```

##### `commitDigest`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionCommitTransactionResult.property.commitDigest"></a>

- *Type:* `any`

---

##### `transactionId`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionCommitTransactionResult.property.transactionId"></a>

- *Type:* `string`

---

### QldbSessionEndSessionRequest <a name="aws-cdk-sdk.qldbsession.QldbSessionEndSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionEndSessionRequest: qldbsession.QldbSessionEndSessionRequest = { ... }
```

### QldbSessionEndSessionResult <a name="aws-cdk-sdk.qldbsession.QldbSessionEndSessionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionEndSessionResult: qldbsession.QldbSessionEndSessionResult = { ... }
```

### QldbSessionExecuteStatementRequest <a name="aws-cdk-sdk.qldbsession.QldbSessionExecuteStatementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionExecuteStatementRequest: qldbsession.QldbSessionExecuteStatementRequest = { ... }
```

##### `statement`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionExecuteStatementRequest.property.statement"></a>

- *Type:* `string`

---

##### `transactionId`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionExecuteStatementRequest.property.transactionId"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionExecuteStatementRequest.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionValueHolder`](#aws-cdk-sdk.qldbsession.QldbSessionValueHolder)[]

---

### QldbSessionExecuteStatementResult <a name="aws-cdk-sdk.qldbsession.QldbSessionExecuteStatementResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionExecuteStatementResult: qldbsession.QldbSessionExecuteStatementResult = { ... }
```

##### `firstPage`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionExecuteStatementResult.property.firstPage"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionPage`](#aws-cdk-sdk.qldbsession.QldbSessionPage)

---

### QldbSessionFetchPageRequest <a name="aws-cdk-sdk.qldbsession.QldbSessionFetchPageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionFetchPageRequest: qldbsession.QldbSessionFetchPageRequest = { ... }
```

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionFetchPageRequest.property.nextPageToken"></a>

- *Type:* `string`

---

##### `transactionId`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionFetchPageRequest.property.transactionId"></a>

- *Type:* `string`

---

### QldbSessionFetchPageResult <a name="aws-cdk-sdk.qldbsession.QldbSessionFetchPageResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionFetchPageResult: qldbsession.QldbSessionFetchPageResult = { ... }
```

##### `page`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionFetchPageResult.property.page"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionPage`](#aws-cdk-sdk.qldbsession.QldbSessionPage)

---

### QldbSessionPage <a name="aws-cdk-sdk.qldbsession.QldbSessionPage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionPage: qldbsession.QldbSessionPage = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionPage.property.nextPageToken"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionPage.property.values"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionValueHolder`](#aws-cdk-sdk.qldbsession.QldbSessionValueHolder)[]

---

### QldbSessionSendCommandRequest <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionSendCommandRequest: qldbsession.QldbSessionSendCommandRequest = { ... }
```

##### `abortTransaction`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest.property.abortTransaction"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionAbortTransactionRequest`](#aws-cdk-sdk.qldbsession.QldbSessionAbortTransactionRequest)

---

##### `commitTransaction`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest.property.commitTransaction"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionCommitTransactionRequest`](#aws-cdk-sdk.qldbsession.QldbSessionCommitTransactionRequest)

---

##### `endSession`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest.property.endSession"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionEndSessionRequest`](#aws-cdk-sdk.qldbsession.QldbSessionEndSessionRequest)

---

##### `executeStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest.property.executeStatement"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionExecuteStatementRequest`](#aws-cdk-sdk.qldbsession.QldbSessionExecuteStatementRequest)

---

##### `fetchPage`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest.property.fetchPage"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionFetchPageRequest`](#aws-cdk-sdk.qldbsession.QldbSessionFetchPageRequest)

---

##### `sessionToken`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest.property.sessionToken"></a>

- *Type:* `string`

---

##### `startSession`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest.property.startSession"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionStartSessionRequest`](#aws-cdk-sdk.qldbsession.QldbSessionStartSessionRequest)

---

##### `startTransaction`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest.property.startTransaction"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionStartTransactionRequest`](#aws-cdk-sdk.qldbsession.QldbSessionStartTransactionRequest)

---

### QldbSessionSendCommandResult <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionSendCommandResult: qldbsession.QldbSessionSendCommandResult = { ... }
```

##### `abortTransaction`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandResult.property.abortTransaction"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionAbortTransactionResult`](#aws-cdk-sdk.qldbsession.QldbSessionAbortTransactionResult)

---

##### `commitTransaction`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandResult.property.commitTransaction"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionCommitTransactionResult`](#aws-cdk-sdk.qldbsession.QldbSessionCommitTransactionResult)

---

##### `endSession`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandResult.property.endSession"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionEndSessionResult`](#aws-cdk-sdk.qldbsession.QldbSessionEndSessionResult)

---

##### `executeStatement`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandResult.property.executeStatement"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionExecuteStatementResult`](#aws-cdk-sdk.qldbsession.QldbSessionExecuteStatementResult)

---

##### `fetchPage`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandResult.property.fetchPage"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionFetchPageResult`](#aws-cdk-sdk.qldbsession.QldbSessionFetchPageResult)

---

##### `startSession`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandResult.property.startSession"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionStartSessionResult`](#aws-cdk-sdk.qldbsession.QldbSessionStartSessionResult)

---

##### `startTransaction`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionSendCommandResult.property.startTransaction"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionStartTransactionResult`](#aws-cdk-sdk.qldbsession.QldbSessionStartTransactionResult)

---

### QldbSessionStartSessionRequest <a name="aws-cdk-sdk.qldbsession.QldbSessionStartSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionStartSessionRequest: qldbsession.QldbSessionStartSessionRequest = { ... }
```

##### `ledgerName`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionStartSessionRequest.property.ledgerName"></a>

- *Type:* `string`

---

### QldbSessionStartSessionResult <a name="aws-cdk-sdk.qldbsession.QldbSessionStartSessionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionStartSessionResult: qldbsession.QldbSessionStartSessionResult = { ... }
```

##### `sessionToken`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionStartSessionResult.property.sessionToken"></a>

- *Type:* `string`

---

### QldbSessionStartTransactionRequest <a name="aws-cdk-sdk.qldbsession.QldbSessionStartTransactionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionStartTransactionRequest: qldbsession.QldbSessionStartTransactionRequest = { ... }
```

### QldbSessionStartTransactionResult <a name="aws-cdk-sdk.qldbsession.QldbSessionStartTransactionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionStartTransactionResult: qldbsession.QldbSessionStartTransactionResult = { ... }
```

##### `transactionId`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionStartTransactionResult.property.transactionId"></a>

- *Type:* `string`

---

### QldbSessionValueHolder <a name="aws-cdk-sdk.qldbsession.QldbSessionValueHolder"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

const qldbSessionValueHolder: qldbsession.QldbSessionValueHolder = { ... }
```

##### `ionBinary`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionValueHolder.property.ionBinary"></a>

- *Type:* `any`

---

##### `ionText`<sup>Optional</sup> <a name="aws-cdk-sdk.qldbsession.QldbSessionValueHolder.property.ionText"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### QLDBSessionResponsesSendCommand <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommand"></a>

#### Initializer <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommand.Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

new qldbsession.QLDBSessionResponsesSendCommand(__scope: Construct, __resources: string[], __input: QldbSessionSendCommandRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommand.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommand.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommand.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest`](#aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest)

---



#### Properties <a name="Properties"></a>

##### `abortTransaction`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommand.property.abortTransaction"></a>

- *Type:* `any`

---

##### `commitTransaction`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommand.property.commitTransaction"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandCommitTransaction`](#aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandCommitTransaction)

---

##### `endSession`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommand.property.endSession"></a>

- *Type:* `any`

---

##### `executeStatement`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommand.property.executeStatement"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatement`](#aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatement)

---

##### `fetchPage`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommand.property.fetchPage"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPage`](#aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPage)

---

##### `startSession`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommand.property.startSession"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartSession`](#aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartSession)

---

##### `startTransaction`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommand.property.startTransaction"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartTransaction`](#aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartTransaction)

---


### QLDBSessionResponsesSendCommandCommitTransaction <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandCommitTransaction"></a>

#### Initializer <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandCommitTransaction.Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

new qldbsession.QLDBSessionResponsesSendCommandCommitTransaction(__scope: Construct, __resources: string[], __input: QldbSessionSendCommandRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandCommitTransaction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandCommitTransaction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandCommitTransaction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest`](#aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest)

---



#### Properties <a name="Properties"></a>

##### `commitDigest`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandCommitTransaction.property.commitDigest"></a>

- *Type:* `any`

---

##### `transactionId`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandCommitTransaction.property.transactionId"></a>

- *Type:* `string`

---


### QLDBSessionResponsesSendCommandExecuteStatement <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatement"></a>

#### Initializer <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatement.Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

new qldbsession.QLDBSessionResponsesSendCommandExecuteStatement(__scope: Construct, __resources: string[], __input: QldbSessionSendCommandRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest`](#aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest)

---



#### Properties <a name="Properties"></a>

##### `firstPage`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatement.property.firstPage"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatementFirstPage`](#aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatementFirstPage)

---


### QLDBSessionResponsesSendCommandExecuteStatementFirstPage <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatementFirstPage"></a>

#### Initializer <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatementFirstPage.Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

new qldbsession.QLDBSessionResponsesSendCommandExecuteStatementFirstPage(__scope: Construct, __resources: string[], __input: QldbSessionSendCommandRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatementFirstPage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatementFirstPage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatementFirstPage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest`](#aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatementFirstPage.property.nextPageToken"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandExecuteStatementFirstPage.property.values"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionValueHolder`](#aws-cdk-sdk.qldbsession.QldbSessionValueHolder)[]

---


### QLDBSessionResponsesSendCommandFetchPage <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPage"></a>

#### Initializer <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPage.Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

new qldbsession.QLDBSessionResponsesSendCommandFetchPage(__scope: Construct, __resources: string[], __input: QldbSessionSendCommandRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest`](#aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest)

---



#### Properties <a name="Properties"></a>

##### `page`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPage.property.page"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPagePage`](#aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPagePage)

---


### QLDBSessionResponsesSendCommandFetchPagePage <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPagePage"></a>

#### Initializer <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPagePage.Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

new qldbsession.QLDBSessionResponsesSendCommandFetchPagePage(__scope: Construct, __resources: string[], __input: QldbSessionSendCommandRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPagePage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPagePage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPagePage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest`](#aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPagePage.property.nextPageToken"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandFetchPagePage.property.values"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionValueHolder`](#aws-cdk-sdk.qldbsession.QldbSessionValueHolder)[]

---


### QLDBSessionResponsesSendCommandStartSession <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartSession"></a>

#### Initializer <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartSession.Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

new qldbsession.QLDBSessionResponsesSendCommandStartSession(__scope: Construct, __resources: string[], __input: QldbSessionSendCommandRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest`](#aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest)

---



#### Properties <a name="Properties"></a>

##### `sessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartSession.property.sessionToken"></a>

- *Type:* `string`

---


### QLDBSessionResponsesSendCommandStartTransaction <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartTransaction"></a>

#### Initializer <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartTransaction.Initializer"></a>

```typescript
import { qldbsession } from 'aws-cdk-sdk'

new qldbsession.QLDBSessionResponsesSendCommandStartTransaction(__scope: Construct, __resources: string[], __input: QldbSessionSendCommandRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartTransaction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartTransaction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartTransaction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest`](#aws-cdk-sdk.qldbsession.QldbSessionSendCommandRequest)

---



#### Properties <a name="Properties"></a>

##### `transactionId`<sup>Required</sup> <a name="aws-cdk-sdk.qldbsession.QLDBSessionResponsesSendCommandStartTransaction.property.transactionId"></a>

- *Type:* `string`

---



