# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### WorkMailMessageFlowClient <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowClient"></a>

#### Initializer <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowClient.Initializer"></a>

```typescript
import { workmailmessageflow } from 'aws-cdk-sdk'

new workmailmessageflow.WorkMailMessageFlowClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `fetchRawMessageContent` <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowClient.fetchRawMessageContent"></a>

```typescript
public fetchRawMessageContent(input: WorkMailMessageFlowGetRawMessageContentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowGetRawMessageContentRequest`](#aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowGetRawMessageContentRequest)

---




## Structs <a name="Structs"></a>

### WorkMailMessageFlowGetRawMessageContentRequest <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowGetRawMessageContentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmailmessageflow } from 'aws-cdk-sdk'

const workMailMessageFlowGetRawMessageContentRequest: workmailmessageflow.WorkMailMessageFlowGetRawMessageContentRequest = { ... }
```

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowGetRawMessageContentRequest.property.messageId"></a>

- *Type:* `string`

---

### WorkMailMessageFlowGetRawMessageContentResponse <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowGetRawMessageContentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { workmailmessageflow } from 'aws-cdk-sdk'

const workMailMessageFlowGetRawMessageContentResponse: workmailmessageflow.WorkMailMessageFlowGetRawMessageContentResponse = { ... }
```

##### `messageContent`<sup>Required</sup> <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowGetRawMessageContentResponse.property.messageContent"></a>

- *Type:* `any`

---

## Classes <a name="Classes"></a>

### WorkMailMessageFlowResponsesFetchRawMessageContent <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowResponsesFetchRawMessageContent"></a>

#### Initializer <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowResponsesFetchRawMessageContent.Initializer"></a>

```typescript
import { workmailmessageflow } from 'aws-cdk-sdk'

new workmailmessageflow.WorkMailMessageFlowResponsesFetchRawMessageContent(__scope: Construct, __resources: string[], __input: WorkMailMessageFlowGetRawMessageContentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowResponsesFetchRawMessageContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowResponsesFetchRawMessageContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowResponsesFetchRawMessageContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowGetRawMessageContentRequest`](#aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowGetRawMessageContentRequest)

---



#### Properties <a name="Properties"></a>

##### `messageContent`<sup>Required</sup> <a name="aws-cdk-sdk.workmailmessageflow.WorkMailMessageFlowResponsesFetchRawMessageContent.property.messageContent"></a>

- *Type:* `any`

---



