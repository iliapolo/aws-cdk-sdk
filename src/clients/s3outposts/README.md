# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### S3OutpostsClient <a name="aws-cdk-sdk.s3outposts.S3OutpostsClient"></a>

#### Initializer <a name="aws-cdk-sdk.s3outposts.S3OutpostsClient.Initializer"></a>

```typescript
import { s3outposts } from 'aws-cdk-sdk'

new s3outposts.S3OutpostsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createEndpoint` <a name="aws-cdk-sdk.s3outposts.S3OutpostsClient.createEndpoint"></a>

```typescript
public createEndpoint(input: S3OutpostsCreateEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3outposts.S3OutpostsCreateEndpointRequest`](#aws-cdk-sdk.s3outposts.S3OutpostsCreateEndpointRequest)

---

##### `deleteEndpoint` <a name="aws-cdk-sdk.s3outposts.S3OutpostsClient.deleteEndpoint"></a>

```typescript
public deleteEndpoint(input: S3OutpostsDeleteEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3outposts.S3OutpostsDeleteEndpointRequest`](#aws-cdk-sdk.s3outposts.S3OutpostsDeleteEndpointRequest)

---

##### `listEndpoints` <a name="aws-cdk-sdk.s3outposts.S3OutpostsClient.listEndpoints"></a>

```typescript
public listEndpoints(input: S3OutpostsListEndpointsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.s3outposts.S3OutpostsListEndpointsRequest`](#aws-cdk-sdk.s3outposts.S3OutpostsListEndpointsRequest)

---




## Structs <a name="Structs"></a>

### S3OutpostsCreateEndpointRequest <a name="aws-cdk-sdk.s3outposts.S3OutpostsCreateEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3outposts } from 'aws-cdk-sdk'

const s3OutpostsCreateEndpointRequest: s3outposts.S3OutpostsCreateEndpointRequest = { ... }
```

##### `outpostId`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsCreateEndpointRequest.property.outpostId"></a>

- *Type:* `string`

---

##### `securityGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsCreateEndpointRequest.property.securityGroupId"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsCreateEndpointRequest.property.subnetId"></a>

- *Type:* `string`

---

### S3OutpostsCreateEndpointResult <a name="aws-cdk-sdk.s3outposts.S3OutpostsCreateEndpointResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3outposts } from 'aws-cdk-sdk'

const s3OutpostsCreateEndpointResult: s3outposts.S3OutpostsCreateEndpointResult = { ... }
```

##### `endpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsCreateEndpointResult.property.endpointArn"></a>

- *Type:* `string`

---

### S3OutpostsDeleteEndpointRequest <a name="aws-cdk-sdk.s3outposts.S3OutpostsDeleteEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3outposts } from 'aws-cdk-sdk'

const s3OutpostsDeleteEndpointRequest: s3outposts.S3OutpostsDeleteEndpointRequest = { ... }
```

##### `endpointId`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsDeleteEndpointRequest.property.endpointId"></a>

- *Type:* `string`

---

##### `outpostId`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsDeleteEndpointRequest.property.outpostId"></a>

- *Type:* `string`

---

### S3OutpostsEndpoint <a name="aws-cdk-sdk.s3outposts.S3OutpostsEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3outposts } from 'aws-cdk-sdk'

const s3OutpostsEndpoint: s3outposts.S3OutpostsEndpoint = { ... }
```

##### `cidrBlock`<sup>Optional</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsEndpoint.property.cidrBlock"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsEndpoint.property.creationTime"></a>

- *Type:* `string`

---

##### `endpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsEndpoint.property.endpointArn"></a>

- *Type:* `string`

---

##### `networkInterfaces`<sup>Optional</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsEndpoint.property.networkInterfaces"></a>

- *Type:* [`aws-cdk-sdk.s3outposts.S3OutpostsNetworkInterface`](#aws-cdk-sdk.s3outposts.S3OutpostsNetworkInterface)[]

---

##### `outpostsId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsEndpoint.property.outpostsId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsEndpoint.property.status"></a>

- *Type:* `string`

---

### S3OutpostsListEndpointsRequest <a name="aws-cdk-sdk.s3outposts.S3OutpostsListEndpointsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3outposts } from 'aws-cdk-sdk'

const s3OutpostsListEndpointsRequest: s3outposts.S3OutpostsListEndpointsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsListEndpointsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsListEndpointsRequest.property.nextToken"></a>

- *Type:* `string`

---

### S3OutpostsListEndpointsResult <a name="aws-cdk-sdk.s3outposts.S3OutpostsListEndpointsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3outposts } from 'aws-cdk-sdk'

const s3OutpostsListEndpointsResult: s3outposts.S3OutpostsListEndpointsResult = { ... }
```

##### `endpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsListEndpointsResult.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.s3outposts.S3OutpostsEndpoint`](#aws-cdk-sdk.s3outposts.S3OutpostsEndpoint)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsListEndpointsResult.property.nextToken"></a>

- *Type:* `string`

---

### S3OutpostsNetworkInterface <a name="aws-cdk-sdk.s3outposts.S3OutpostsNetworkInterface"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { s3outposts } from 'aws-cdk-sdk'

const s3OutpostsNetworkInterface: s3outposts.S3OutpostsNetworkInterface = { ... }
```

##### `networkInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsNetworkInterface.property.networkInterfaceId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### S3OutpostsResponsesCreateEndpoint <a name="aws-cdk-sdk.s3outposts.S3OutpostsResponsesCreateEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.s3outposts.S3OutpostsResponsesCreateEndpoint.Initializer"></a>

```typescript
import { s3outposts } from 'aws-cdk-sdk'

new s3outposts.S3OutpostsResponsesCreateEndpoint(__scope: Construct, __resources: string[], __input: S3OutpostsCreateEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsResponsesCreateEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsResponsesCreateEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsResponsesCreateEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3outposts.S3OutpostsCreateEndpointRequest`](#aws-cdk-sdk.s3outposts.S3OutpostsCreateEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsResponsesCreateEndpoint.property.endpointArn"></a>

- *Type:* `string`

---


### S3OutpostsResponsesListEndpoints <a name="aws-cdk-sdk.s3outposts.S3OutpostsResponsesListEndpoints"></a>

#### Initializer <a name="aws-cdk-sdk.s3outposts.S3OutpostsResponsesListEndpoints.Initializer"></a>

```typescript
import { s3outposts } from 'aws-cdk-sdk'

new s3outposts.S3OutpostsResponsesListEndpoints(__scope: Construct, __resources: string[], __input: S3OutpostsListEndpointsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsResponsesListEndpoints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsResponsesListEndpoints.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsResponsesListEndpoints.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.s3outposts.S3OutpostsListEndpointsRequest`](#aws-cdk-sdk.s3outposts.S3OutpostsListEndpointsRequest)

---



#### Properties <a name="Properties"></a>

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsResponsesListEndpoints.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.s3outposts.S3OutpostsEndpoint`](#aws-cdk-sdk.s3outposts.S3OutpostsEndpoint)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.s3outposts.S3OutpostsResponsesListEndpoints.property.nextToken"></a>

- *Type:* `string`

---



