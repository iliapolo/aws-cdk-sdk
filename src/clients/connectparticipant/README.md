# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ConnectParticipantClient <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantClient"></a>

#### Initializer <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantClient.Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

new connectparticipant.ConnectParticipantClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createParticipantConnection` <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantClient.createParticipantConnection"></a>

```typescript
public createParticipantConnection(input: ConnectParticipantCreateParticipantConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantCreateParticipantConnectionRequest`](#aws-cdk-sdk.connectparticipant.ConnectParticipantCreateParticipantConnectionRequest)

---

##### `disconnectParticipant` <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantClient.disconnectParticipant"></a>

```typescript
public disconnectParticipant(input: ConnectParticipantDisconnectParticipantRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantDisconnectParticipantRequest`](#aws-cdk-sdk.connectparticipant.ConnectParticipantDisconnectParticipantRequest)

---

##### `fetchTranscript` <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantClient.fetchTranscript"></a>

```typescript
public fetchTranscript(input: ConnectParticipantGetTranscriptRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptRequest`](#aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptRequest)

---

##### `sendEvent` <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantClient.sendEvent"></a>

```typescript
public sendEvent(input: ConnectParticipantSendEventRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantSendEventRequest`](#aws-cdk-sdk.connectparticipant.ConnectParticipantSendEventRequest)

---

##### `sendMessage` <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantClient.sendMessage"></a>

```typescript
public sendMessage(input: ConnectParticipantSendMessageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantSendMessageRequest`](#aws-cdk-sdk.connectparticipant.ConnectParticipantSendMessageRequest)

---




## Structs <a name="Structs"></a>

### ConnectParticipantConnectionCredentials <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantConnectionCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

const connectParticipantConnectionCredentials: connectparticipant.ConnectParticipantConnectionCredentials = { ... }
```

##### `connectionToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantConnectionCredentials.property.connectionToken"></a>

- *Type:* `string`

---

##### `expiry`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantConnectionCredentials.property.expiry"></a>

- *Type:* `string`

---

### ConnectParticipantCreateParticipantConnectionRequest <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantCreateParticipantConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

const connectParticipantCreateParticipantConnectionRequest: connectparticipant.ConnectParticipantCreateParticipantConnectionRequest = { ... }
```

##### `participantToken`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantCreateParticipantConnectionRequest.property.participantToken"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantCreateParticipantConnectionRequest.property.type"></a>

- *Type:* `string`[]

---

### ConnectParticipantCreateParticipantConnectionResponse <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantCreateParticipantConnectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

const connectParticipantCreateParticipantConnectionResponse: connectparticipant.ConnectParticipantCreateParticipantConnectionResponse = { ... }
```

##### `connectionCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantCreateParticipantConnectionResponse.property.connectionCredentials"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantConnectionCredentials`](#aws-cdk-sdk.connectparticipant.ConnectParticipantConnectionCredentials)

---

##### `websocket`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantCreateParticipantConnectionResponse.property.websocket"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantWebsocket`](#aws-cdk-sdk.connectparticipant.ConnectParticipantWebsocket)

---

### ConnectParticipantDisconnectParticipantRequest <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantDisconnectParticipantRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

const connectParticipantDisconnectParticipantRequest: connectparticipant.ConnectParticipantDisconnectParticipantRequest = { ... }
```

##### `connectionToken`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantDisconnectParticipantRequest.property.connectionToken"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantDisconnectParticipantRequest.property.clientToken"></a>

- *Type:* `string`

---

### ConnectParticipantDisconnectParticipantResponse <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantDisconnectParticipantResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

const connectParticipantDisconnectParticipantResponse: connectparticipant.ConnectParticipantDisconnectParticipantResponse = { ... }
```

### ConnectParticipantGetTranscriptRequest <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

const connectParticipantGetTranscriptRequest: connectparticipant.ConnectParticipantGetTranscriptRequest = { ... }
```

##### `connectionToken`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptRequest.property.connectionToken"></a>

- *Type:* `string`

---

##### `contactId`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptRequest.property.contactId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `scanDirection`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptRequest.property.scanDirection"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptRequest.property.sortOrder"></a>

- *Type:* `string`

---

##### `startPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptRequest.property.startPosition"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantStartPosition`](#aws-cdk-sdk.connectparticipant.ConnectParticipantStartPosition)

---

### ConnectParticipantGetTranscriptResponse <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

const connectParticipantGetTranscriptResponse: connectparticipant.ConnectParticipantGetTranscriptResponse = { ... }
```

##### `initialContactId`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptResponse.property.initialContactId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `transcript`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptResponse.property.transcript"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantItem`](#aws-cdk-sdk.connectparticipant.ConnectParticipantItem)[]

---

### ConnectParticipantItem <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

const connectParticipantItem: connectparticipant.ConnectParticipantItem = { ... }
```

##### `absoluteTime`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantItem.property.absoluteTime"></a>

- *Type:* `string`

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantItem.property.content"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantItem.property.contentType"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantItem.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantItem.property.id"></a>

- *Type:* `string`

---

##### `participantId`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantItem.property.participantId"></a>

- *Type:* `string`

---

##### `participantRole`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantItem.property.participantRole"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantItem.property.type"></a>

- *Type:* `string`

---

### ConnectParticipantSendEventRequest <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendEventRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

const connectParticipantSendEventRequest: connectparticipant.ConnectParticipantSendEventRequest = { ... }
```

##### `connectionToken`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendEventRequest.property.connectionToken"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendEventRequest.property.contentType"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendEventRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendEventRequest.property.content"></a>

- *Type:* `string`

---

### ConnectParticipantSendEventResponse <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendEventResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

const connectParticipantSendEventResponse: connectparticipant.ConnectParticipantSendEventResponse = { ... }
```

##### `absoluteTime`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendEventResponse.property.absoluteTime"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendEventResponse.property.id"></a>

- *Type:* `string`

---

### ConnectParticipantSendMessageRequest <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendMessageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

const connectParticipantSendMessageRequest: connectparticipant.ConnectParticipantSendMessageRequest = { ... }
```

##### `connectionToken`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendMessageRequest.property.connectionToken"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendMessageRequest.property.content"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendMessageRequest.property.contentType"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendMessageRequest.property.clientToken"></a>

- *Type:* `string`

---

### ConnectParticipantSendMessageResponse <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendMessageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

const connectParticipantSendMessageResponse: connectparticipant.ConnectParticipantSendMessageResponse = { ... }
```

##### `absoluteTime`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendMessageResponse.property.absoluteTime"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantSendMessageResponse.property.id"></a>

- *Type:* `string`

---

### ConnectParticipantStartPosition <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantStartPosition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

const connectParticipantStartPosition: connectparticipant.ConnectParticipantStartPosition = { ... }
```

##### `absoluteTime`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantStartPosition.property.absoluteTime"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantStartPosition.property.id"></a>

- *Type:* `string`

---

##### `mostRecent`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantStartPosition.property.mostRecent"></a>

- *Type:* `number`

---

### ConnectParticipantWebsocket <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantWebsocket"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

const connectParticipantWebsocket: connectparticipant.ConnectParticipantWebsocket = { ... }
```

##### `connectionExpiry`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantWebsocket.property.connectionExpiry"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantWebsocket.property.url"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### ConnectParticipantResponsesCreateParticipantConnection <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnection"></a>

#### Initializer <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnection.Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

new connectparticipant.ConnectParticipantResponsesCreateParticipantConnection(__scope: Construct, __resources: string[], __input: ConnectParticipantCreateParticipantConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantCreateParticipantConnectionRequest`](#aws-cdk-sdk.connectparticipant.ConnectParticipantCreateParticipantConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `connectionCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnection.property.connectionCredentials"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionConnectionCredentials`](#aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionConnectionCredentials)

---

##### `websocket`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnection.property.websocket"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionWebsocket`](#aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionWebsocket)

---


### ConnectParticipantResponsesCreateParticipantConnectionConnectionCredentials <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionConnectionCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionConnectionCredentials.Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

new connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionConnectionCredentials(__scope: Construct, __resources: string[], __input: ConnectParticipantCreateParticipantConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionConnectionCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionConnectionCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionConnectionCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantCreateParticipantConnectionRequest`](#aws-cdk-sdk.connectparticipant.ConnectParticipantCreateParticipantConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `connectionToken`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionConnectionCredentials.property.connectionToken"></a>

- *Type:* `string`

---

##### `expiry`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionConnectionCredentials.property.expiry"></a>

- *Type:* `string`

---


### ConnectParticipantResponsesCreateParticipantConnectionWebsocket <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionWebsocket"></a>

#### Initializer <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionWebsocket.Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

new connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionWebsocket(__scope: Construct, __resources: string[], __input: ConnectParticipantCreateParticipantConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionWebsocket.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionWebsocket.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionWebsocket.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantCreateParticipantConnectionRequest`](#aws-cdk-sdk.connectparticipant.ConnectParticipantCreateParticipantConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `connectionExpiry`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionWebsocket.property.connectionExpiry"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesCreateParticipantConnectionWebsocket.property.url"></a>

- *Type:* `string`

---


### ConnectParticipantResponsesFetchTranscript <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesFetchTranscript"></a>

#### Initializer <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesFetchTranscript.Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

new connectparticipant.ConnectParticipantResponsesFetchTranscript(__scope: Construct, __resources: string[], __input: ConnectParticipantGetTranscriptRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesFetchTranscript.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesFetchTranscript.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesFetchTranscript.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptRequest`](#aws-cdk-sdk.connectparticipant.ConnectParticipantGetTranscriptRequest)

---



#### Properties <a name="Properties"></a>

##### `initialContactId`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesFetchTranscript.property.initialContactId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesFetchTranscript.property.nextToken"></a>

- *Type:* `string`

---

##### `transcript`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesFetchTranscript.property.transcript"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantItem`](#aws-cdk-sdk.connectparticipant.ConnectParticipantItem)[]

---


### ConnectParticipantResponsesSendEvent <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesSendEvent"></a>

#### Initializer <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesSendEvent.Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

new connectparticipant.ConnectParticipantResponsesSendEvent(__scope: Construct, __resources: string[], __input: ConnectParticipantSendEventRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesSendEvent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesSendEvent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesSendEvent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantSendEventRequest`](#aws-cdk-sdk.connectparticipant.ConnectParticipantSendEventRequest)

---



#### Properties <a name="Properties"></a>

##### `absoluteTime`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesSendEvent.property.absoluteTime"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesSendEvent.property.id"></a>

- *Type:* `string`

---


### ConnectParticipantResponsesSendMessage <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesSendMessage"></a>

#### Initializer <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesSendMessage.Initializer"></a>

```typescript
import { connectparticipant } from 'aws-cdk-sdk'

new connectparticipant.ConnectParticipantResponsesSendMessage(__scope: Construct, __resources: string[], __input: ConnectParticipantSendMessageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesSendMessage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesSendMessage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesSendMessage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.connectparticipant.ConnectParticipantSendMessageRequest`](#aws-cdk-sdk.connectparticipant.ConnectParticipantSendMessageRequest)

---



#### Properties <a name="Properties"></a>

##### `absoluteTime`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesSendMessage.property.absoluteTime"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.connectparticipant.ConnectParticipantResponsesSendMessage.property.id"></a>

- *Type:* `string`

---



