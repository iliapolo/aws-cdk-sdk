# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### PersonalizeEventsClient <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsClient"></a>

#### Initializer <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsClient.Initializer"></a>

```typescript
import { personalizeevents } from 'aws-cdk-sdk'

new personalizeevents.PersonalizeEventsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `putEvents` <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsClient.putEvents"></a>

```typescript
public putEvents(input: PersonalizeEventsPutEventsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalizeevents.PersonalizeEventsPutEventsRequest`](#aws-cdk-sdk.personalizeevents.PersonalizeEventsPutEventsRequest)

---

##### `putItems` <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsClient.putItems"></a>

```typescript
public putItems(input: PersonalizeEventsPutItemsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalizeevents.PersonalizeEventsPutItemsRequest`](#aws-cdk-sdk.personalizeevents.PersonalizeEventsPutItemsRequest)

---

##### `putUsers` <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsClient.putUsers"></a>

```typescript
public putUsers(input: PersonalizeEventsPutUsersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.personalizeevents.PersonalizeEventsPutUsersRequest`](#aws-cdk-sdk.personalizeevents.PersonalizeEventsPutUsersRequest)

---




## Structs <a name="Structs"></a>

### PersonalizeEventsEvent <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalizeevents } from 'aws-cdk-sdk'

const personalizeEventsEvent: personalizeevents.PersonalizeEventsEvent = { ... }
```

##### `eventType`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsEvent.property.eventType"></a>

- *Type:* `string`

---

##### `sentAt`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsEvent.property.sentAt"></a>

- *Type:* `string`

---

##### `eventId`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsEvent.property.eventId"></a>

- *Type:* `string`

---

##### `eventValue`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsEvent.property.eventValue"></a>

- *Type:* `number`

---

##### `impression`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsEvent.property.impression"></a>

- *Type:* `string`[]

---

##### `itemId`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsEvent.property.itemId"></a>

- *Type:* `string`

---

##### `properties`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsEvent.property.properties"></a>

- *Type:* `string`

---

##### `recommendationId`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsEvent.property.recommendationId"></a>

- *Type:* `string`

---

### PersonalizeEventsItem <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalizeevents } from 'aws-cdk-sdk'

const personalizeEventsItem: personalizeevents.PersonalizeEventsItem = { ... }
```

##### `itemId`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsItem.property.itemId"></a>

- *Type:* `string`

---

##### `properties`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsItem.property.properties"></a>

- *Type:* `string`

---

### PersonalizeEventsPutEventsRequest <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsPutEventsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalizeevents } from 'aws-cdk-sdk'

const personalizeEventsPutEventsRequest: personalizeevents.PersonalizeEventsPutEventsRequest = { ... }
```

##### `eventList`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsPutEventsRequest.property.eventList"></a>

- *Type:* [`aws-cdk-sdk.personalizeevents.PersonalizeEventsEvent`](#aws-cdk-sdk.personalizeevents.PersonalizeEventsEvent)[]

---

##### `sessionId`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsPutEventsRequest.property.sessionId"></a>

- *Type:* `string`

---

##### `trackingId`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsPutEventsRequest.property.trackingId"></a>

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsPutEventsRequest.property.userId"></a>

- *Type:* `string`

---

### PersonalizeEventsPutItemsRequest <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsPutItemsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalizeevents } from 'aws-cdk-sdk'

const personalizeEventsPutItemsRequest: personalizeevents.PersonalizeEventsPutItemsRequest = { ... }
```

##### `datasetArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsPutItemsRequest.property.datasetArn"></a>

- *Type:* `string`

---

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsPutItemsRequest.property.items"></a>

- *Type:* [`aws-cdk-sdk.personalizeevents.PersonalizeEventsItem`](#aws-cdk-sdk.personalizeevents.PersonalizeEventsItem)[]

---

### PersonalizeEventsPutUsersRequest <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsPutUsersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalizeevents } from 'aws-cdk-sdk'

const personalizeEventsPutUsersRequest: personalizeevents.PersonalizeEventsPutUsersRequest = { ... }
```

##### `datasetArn`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsPutUsersRequest.property.datasetArn"></a>

- *Type:* `string`

---

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsPutUsersRequest.property.users"></a>

- *Type:* [`aws-cdk-sdk.personalizeevents.PersonalizeEventsUser`](#aws-cdk-sdk.personalizeevents.PersonalizeEventsUser)[]

---

### PersonalizeEventsUser <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { personalizeevents } from 'aws-cdk-sdk'

const personalizeEventsUser: personalizeevents.PersonalizeEventsUser = { ... }
```

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsUser.property.userId"></a>

- *Type:* `string`

---

##### `properties`<sup>Optional</sup> <a name="aws-cdk-sdk.personalizeevents.PersonalizeEventsUser.property.properties"></a>

- *Type:* `string`

---



