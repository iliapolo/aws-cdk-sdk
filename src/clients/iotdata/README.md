# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### IotDataClient <a name="aws-cdk-sdk.iotdata.IotDataClient"></a>

#### Initializer <a name="aws-cdk-sdk.iotdata.IotDataClient.Initializer"></a>

```typescript
import { iotdata } from 'aws-cdk-sdk'

new iotdata.IotDataClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `deleteThingShadow` <a name="aws-cdk-sdk.iotdata.IotDataClient.deleteThingShadow"></a>

```typescript
public deleteThingShadow(input: IotDataDeleteThingShadowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotdata.IotDataDeleteThingShadowRequest`](#aws-cdk-sdk.iotdata.IotDataDeleteThingShadowRequest)

---

##### `fetchThingShadow` <a name="aws-cdk-sdk.iotdata.IotDataClient.fetchThingShadow"></a>

```typescript
public fetchThingShadow(input: IotDataGetThingShadowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotdata.IotDataGetThingShadowRequest`](#aws-cdk-sdk.iotdata.IotDataGetThingShadowRequest)

---

##### `listNamedShadowsForThing` <a name="aws-cdk-sdk.iotdata.IotDataClient.listNamedShadowsForThing"></a>

```typescript
public listNamedShadowsForThing(input: IotDataListNamedShadowsForThingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotdata.IotDataListNamedShadowsForThingRequest`](#aws-cdk-sdk.iotdata.IotDataListNamedShadowsForThingRequest)

---

##### `publish` <a name="aws-cdk-sdk.iotdata.IotDataClient.publish"></a>

```typescript
public publish(input: IotDataPublishRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotdata.IotDataPublishRequest`](#aws-cdk-sdk.iotdata.IotDataPublishRequest)

---

##### `updateThingShadow` <a name="aws-cdk-sdk.iotdata.IotDataClient.updateThingShadow"></a>

```typescript
public updateThingShadow(input: IotDataUpdateThingShadowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotdata.IotDataUpdateThingShadowRequest`](#aws-cdk-sdk.iotdata.IotDataUpdateThingShadowRequest)

---




## Structs <a name="Structs"></a>

### IotDataDeleteThingShadowRequest <a name="aws-cdk-sdk.iotdata.IotDataDeleteThingShadowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotdata } from 'aws-cdk-sdk'

const iotDataDeleteThingShadowRequest: iotdata.IotDataDeleteThingShadowRequest = { ... }
```

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataDeleteThingShadowRequest.property.thingName"></a>

- *Type:* `string`

---

##### `shadowName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotdata.IotDataDeleteThingShadowRequest.property.shadowName"></a>

- *Type:* `string`

---

### IotDataDeleteThingShadowResponse <a name="aws-cdk-sdk.iotdata.IotDataDeleteThingShadowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotdata } from 'aws-cdk-sdk'

const iotDataDeleteThingShadowResponse: iotdata.IotDataDeleteThingShadowResponse = { ... }
```

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataDeleteThingShadowResponse.property.payload"></a>

- *Type:* `any`

---

### IotDataGetThingShadowRequest <a name="aws-cdk-sdk.iotdata.IotDataGetThingShadowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotdata } from 'aws-cdk-sdk'

const iotDataGetThingShadowRequest: iotdata.IotDataGetThingShadowRequest = { ... }
```

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataGetThingShadowRequest.property.thingName"></a>

- *Type:* `string`

---

##### `shadowName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotdata.IotDataGetThingShadowRequest.property.shadowName"></a>

- *Type:* `string`

---

### IotDataGetThingShadowResponse <a name="aws-cdk-sdk.iotdata.IotDataGetThingShadowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotdata } from 'aws-cdk-sdk'

const iotDataGetThingShadowResponse: iotdata.IotDataGetThingShadowResponse = { ... }
```

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.iotdata.IotDataGetThingShadowResponse.property.payload"></a>

- *Type:* `any`

---

### IotDataListNamedShadowsForThingRequest <a name="aws-cdk-sdk.iotdata.IotDataListNamedShadowsForThingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotdata } from 'aws-cdk-sdk'

const iotDataListNamedShadowsForThingRequest: iotdata.IotDataListNamedShadowsForThingRequest = { ... }
```

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataListNamedShadowsForThingRequest.property.thingName"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotdata.IotDataListNamedShadowsForThingRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.iotdata.IotDataListNamedShadowsForThingRequest.property.pageSize"></a>

- *Type:* `number`

---

### IotDataListNamedShadowsForThingResponse <a name="aws-cdk-sdk.iotdata.IotDataListNamedShadowsForThingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotdata } from 'aws-cdk-sdk'

const iotDataListNamedShadowsForThingResponse: iotdata.IotDataListNamedShadowsForThingResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotdata.IotDataListNamedShadowsForThingResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `results`<sup>Optional</sup> <a name="aws-cdk-sdk.iotdata.IotDataListNamedShadowsForThingResponse.property.results"></a>

- *Type:* `string`[]

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.iotdata.IotDataListNamedShadowsForThingResponse.property.timestamp"></a>

- *Type:* `number`

---

### IotDataPublishRequest <a name="aws-cdk-sdk.iotdata.IotDataPublishRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotdata } from 'aws-cdk-sdk'

const iotDataPublishRequest: iotdata.IotDataPublishRequest = { ... }
```

##### `topic`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataPublishRequest.property.topic"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.iotdata.IotDataPublishRequest.property.payload"></a>

- *Type:* `any`

---

##### `qos`<sup>Optional</sup> <a name="aws-cdk-sdk.iotdata.IotDataPublishRequest.property.qos"></a>

- *Type:* `number`

---

### IotDataUpdateThingShadowRequest <a name="aws-cdk-sdk.iotdata.IotDataUpdateThingShadowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotdata } from 'aws-cdk-sdk'

const iotDataUpdateThingShadowRequest: iotdata.IotDataUpdateThingShadowRequest = { ... }
```

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataUpdateThingShadowRequest.property.payload"></a>

- *Type:* `any`

---

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataUpdateThingShadowRequest.property.thingName"></a>

- *Type:* `string`

---

##### `shadowName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotdata.IotDataUpdateThingShadowRequest.property.shadowName"></a>

- *Type:* `string`

---

### IotDataUpdateThingShadowResponse <a name="aws-cdk-sdk.iotdata.IotDataUpdateThingShadowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotdata } from 'aws-cdk-sdk'

const iotDataUpdateThingShadowResponse: iotdata.IotDataUpdateThingShadowResponse = { ... }
```

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.iotdata.IotDataUpdateThingShadowResponse.property.payload"></a>

- *Type:* `any`

---

## Classes <a name="Classes"></a>

### IotDataResponsesDeleteThingShadow <a name="aws-cdk-sdk.iotdata.IotDataResponsesDeleteThingShadow"></a>

#### Initializer <a name="aws-cdk-sdk.iotdata.IotDataResponsesDeleteThingShadow.Initializer"></a>

```typescript
import { iotdata } from 'aws-cdk-sdk'

new iotdata.IotDataResponsesDeleteThingShadow(__scope: Construct, __resources: string[], __input: IotDataDeleteThingShadowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesDeleteThingShadow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesDeleteThingShadow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesDeleteThingShadow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotdata.IotDataDeleteThingShadowRequest`](#aws-cdk-sdk.iotdata.IotDataDeleteThingShadowRequest)

---



#### Properties <a name="Properties"></a>

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesDeleteThingShadow.property.payload"></a>

- *Type:* `any`

---


### IotDataResponsesFetchThingShadow <a name="aws-cdk-sdk.iotdata.IotDataResponsesFetchThingShadow"></a>

#### Initializer <a name="aws-cdk-sdk.iotdata.IotDataResponsesFetchThingShadow.Initializer"></a>

```typescript
import { iotdata } from 'aws-cdk-sdk'

new iotdata.IotDataResponsesFetchThingShadow(__scope: Construct, __resources: string[], __input: IotDataGetThingShadowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesFetchThingShadow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesFetchThingShadow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesFetchThingShadow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotdata.IotDataGetThingShadowRequest`](#aws-cdk-sdk.iotdata.IotDataGetThingShadowRequest)

---



#### Properties <a name="Properties"></a>

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesFetchThingShadow.property.payload"></a>

- *Type:* `any`

---


### IotDataResponsesListNamedShadowsForThing <a name="aws-cdk-sdk.iotdata.IotDataResponsesListNamedShadowsForThing"></a>

#### Initializer <a name="aws-cdk-sdk.iotdata.IotDataResponsesListNamedShadowsForThing.Initializer"></a>

```typescript
import { iotdata } from 'aws-cdk-sdk'

new iotdata.IotDataResponsesListNamedShadowsForThing(__scope: Construct, __resources: string[], __input: IotDataListNamedShadowsForThingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesListNamedShadowsForThing.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesListNamedShadowsForThing.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesListNamedShadowsForThing.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotdata.IotDataListNamedShadowsForThingRequest`](#aws-cdk-sdk.iotdata.IotDataListNamedShadowsForThingRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesListNamedShadowsForThing.property.nextToken"></a>

- *Type:* `string`

---

##### `results`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesListNamedShadowsForThing.property.results"></a>

- *Type:* `string`[]

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesListNamedShadowsForThing.property.timestamp"></a>

- *Type:* `number`

---


### IotDataResponsesUpdateThingShadow <a name="aws-cdk-sdk.iotdata.IotDataResponsesUpdateThingShadow"></a>

#### Initializer <a name="aws-cdk-sdk.iotdata.IotDataResponsesUpdateThingShadow.Initializer"></a>

```typescript
import { iotdata } from 'aws-cdk-sdk'

new iotdata.IotDataResponsesUpdateThingShadow(__scope: Construct, __resources: string[], __input: IotDataUpdateThingShadowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesUpdateThingShadow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesUpdateThingShadow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesUpdateThingShadow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotdata.IotDataUpdateThingShadowRequest`](#aws-cdk-sdk.iotdata.IotDataUpdateThingShadowRequest)

---



#### Properties <a name="Properties"></a>

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.iotdata.IotDataResponsesUpdateThingShadow.property.payload"></a>

- *Type:* `any`

---



