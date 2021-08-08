# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ApiGatewayManagementApiClient <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiClient"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiClient.Initializer"></a>

```typescript
import { apigatewaymanagementapi } from 'aws-cdk-sdk'

new apigatewaymanagementapi.ApiGatewayManagementApiClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `deleteConnection` <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiClient.deleteConnection"></a>

```typescript
public deleteConnection(input: ApiGatewayManagementApiDeleteConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiDeleteConnectionRequest`](#aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiDeleteConnectionRequest)

---

##### `fetchConnection` <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiClient.fetchConnection"></a>

```typescript
public fetchConnection(input: ApiGatewayManagementApiGetConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiGetConnectionRequest`](#aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiGetConnectionRequest)

---

##### `postToConnection` <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiClient.postToConnection"></a>

```typescript
public postToConnection(input: ApiGatewayManagementApiPostToConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiPostToConnectionRequest`](#aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiPostToConnectionRequest)

---




## Structs <a name="Structs"></a>

### ApiGatewayManagementApiDeleteConnectionRequest <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiDeleteConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewaymanagementapi } from 'aws-cdk-sdk'

const apiGatewayManagementApiDeleteConnectionRequest: apigatewaymanagementapi.ApiGatewayManagementApiDeleteConnectionRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiDeleteConnectionRequest.property.connectionId"></a>

- *Type:* `string`

---

### ApiGatewayManagementApiGetConnectionRequest <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiGetConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewaymanagementapi } from 'aws-cdk-sdk'

const apiGatewayManagementApiGetConnectionRequest: apigatewaymanagementapi.ApiGatewayManagementApiGetConnectionRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiGetConnectionRequest.property.connectionId"></a>

- *Type:* `string`

---

### ApiGatewayManagementApiGetConnectionResponse <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiGetConnectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewaymanagementapi } from 'aws-cdk-sdk'

const apiGatewayManagementApiGetConnectionResponse: apigatewaymanagementapi.ApiGatewayManagementApiGetConnectionResponse = { ... }
```

##### `connectedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiGetConnectionResponse.property.connectedAt"></a>

- *Type:* `string`

---

##### `identity`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiGetConnectionResponse.property.identity"></a>

- *Type:* [`aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiIdentity`](#aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiIdentity)

---

##### `lastActiveAt`<sup>Optional</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiGetConnectionResponse.property.lastActiveAt"></a>

- *Type:* `string`

---

### ApiGatewayManagementApiIdentity <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiIdentity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewaymanagementapi } from 'aws-cdk-sdk'

const apiGatewayManagementApiIdentity: apigatewaymanagementapi.ApiGatewayManagementApiIdentity = { ... }
```

##### `sourceIp`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiIdentity.property.sourceIp"></a>

- *Type:* `string`

---

##### `userAgent`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiIdentity.property.userAgent"></a>

- *Type:* `string`

---

### ApiGatewayManagementApiPostToConnectionRequest <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiPostToConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { apigatewaymanagementapi } from 'aws-cdk-sdk'

const apiGatewayManagementApiPostToConnectionRequest: apigatewaymanagementapi.ApiGatewayManagementApiPostToConnectionRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiPostToConnectionRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiPostToConnectionRequest.property.data"></a>

- *Type:* `any`

---

## Classes <a name="Classes"></a>

### ApiGatewayManagementApiResponsesFetchConnection <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnection"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnection.Initializer"></a>

```typescript
import { apigatewaymanagementapi } from 'aws-cdk-sdk'

new apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnection(__scope: Construct, __resources: string[], __input: ApiGatewayManagementApiGetConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiGetConnectionRequest`](#aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiGetConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `connectedAt`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnection.property.connectedAt"></a>

- *Type:* `string`

---

##### `identity`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnection.property.identity"></a>

- *Type:* [`aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnectionIdentity`](#aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnectionIdentity)

---

##### `lastActiveAt`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnection.property.lastActiveAt"></a>

- *Type:* `string`

---


### ApiGatewayManagementApiResponsesFetchConnectionIdentity <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnectionIdentity"></a>

#### Initializer <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnectionIdentity.Initializer"></a>

```typescript
import { apigatewaymanagementapi } from 'aws-cdk-sdk'

new apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnectionIdentity(__scope: Construct, __resources: string[], __input: ApiGatewayManagementApiGetConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnectionIdentity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnectionIdentity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnectionIdentity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiGetConnectionRequest`](#aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiGetConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `sourceIp`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnectionIdentity.property.sourceIp"></a>

- *Type:* `string`

---

##### `userAgent`<sup>Required</sup> <a name="aws-cdk-sdk.apigatewaymanagementapi.ApiGatewayManagementApiResponsesFetchConnectionIdentity.property.userAgent"></a>

- *Type:* `string`

---



