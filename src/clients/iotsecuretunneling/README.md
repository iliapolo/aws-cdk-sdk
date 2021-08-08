# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### IoTSecureTunnelingClient <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient"></a>

#### Initializer <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

new iotsecuretunneling.IoTSecureTunnelingClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `closeTunnel` <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.closeTunnel"></a>

```typescript
public closeTunnel(input: IoTSecureTunnelingCloseTunnelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingCloseTunnelRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingCloseTunnelRequest)

---

##### `describeTunnel` <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.describeTunnel"></a>

```typescript
public describeTunnel(input: IoTSecureTunnelingDescribeTunnelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: IoTSecureTunnelingListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTagsForResourceRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTagsForResourceRequest)

---

##### `listTunnels` <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.listTunnels"></a>

```typescript
public listTunnels(input: IoTSecureTunnelingListTunnelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTunnelsRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTunnelsRequest)

---

##### `openTunnel` <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.openTunnel"></a>

```typescript
public openTunnel(input: IoTSecureTunnelingOpenTunnelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingOpenTunnelRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingOpenTunnelRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.tagResource"></a>

```typescript
public tagResource(input: IoTSecureTunnelingTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTagResourceRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.untagResource"></a>

```typescript
public untagResource(input: IoTSecureTunnelingUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingUntagResourceRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingUntagResourceRequest)

---




## Structs <a name="Structs"></a>

### IoTSecureTunnelingCloseTunnelRequest <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingCloseTunnelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingCloseTunnelRequest: iotsecuretunneling.IoTSecureTunnelingCloseTunnelRequest = { ... }
```

##### `tunnelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingCloseTunnelRequest.property.tunnelId"></a>

- *Type:* `string`

---

##### `delete`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingCloseTunnelRequest.property.delete"></a>

- *Type:* `boolean`

---

### IoTSecureTunnelingCloseTunnelResponse <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingCloseTunnelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingCloseTunnelResponse: iotsecuretunneling.IoTSecureTunnelingCloseTunnelResponse = { ... }
```

### IoTSecureTunnelingConnectionState <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingConnectionState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingConnectionState: iotsecuretunneling.IoTSecureTunnelingConnectionState = { ... }
```

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingConnectionState.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingConnectionState.property.status"></a>

- *Type:* `string`

---

### IoTSecureTunnelingDescribeTunnelRequest <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingDescribeTunnelRequest: iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest = { ... }
```

##### `tunnelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest.property.tunnelId"></a>

- *Type:* `string`

---

### IoTSecureTunnelingDescribeTunnelResponse <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingDescribeTunnelResponse: iotsecuretunneling.IoTSecureTunnelingDescribeTunnelResponse = { ... }
```

##### `tunnel`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelResponse.property.tunnel"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnel`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnel)

---

### IoTSecureTunnelingDestinationConfig <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDestinationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingDestinationConfig: iotsecuretunneling.IoTSecureTunnelingDestinationConfig = { ... }
```

##### `services`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDestinationConfig.property.services"></a>

- *Type:* `string`[]

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDestinationConfig.property.thingName"></a>

- *Type:* `string`

---

### IoTSecureTunnelingListTagsForResourceRequest <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingListTagsForResourceRequest: iotsecuretunneling.IoTSecureTunnelingListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### IoTSecureTunnelingListTagsForResourceResponse <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingListTagsForResourceResponse: iotsecuretunneling.IoTSecureTunnelingListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTag`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTag)[]

---

### IoTSecureTunnelingListTunnelsRequest <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTunnelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingListTunnelsRequest: iotsecuretunneling.IoTSecureTunnelingListTunnelsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTunnelsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTunnelsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `thingName`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTunnelsRequest.property.thingName"></a>

- *Type:* `string`

---

### IoTSecureTunnelingListTunnelsResponse <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTunnelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingListTunnelsResponse: iotsecuretunneling.IoTSecureTunnelingListTunnelsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTunnelsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tunnelSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTunnelsResponse.property.tunnelSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnelSummary`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnelSummary)[]

---

### IoTSecureTunnelingOpenTunnelRequest <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingOpenTunnelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingOpenTunnelRequest: iotsecuretunneling.IoTSecureTunnelingOpenTunnelRequest = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingOpenTunnelRequest.property.description"></a>

- *Type:* `string`

---

##### `destinationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingOpenTunnelRequest.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDestinationConfig`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDestinationConfig)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingOpenTunnelRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTag`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTag)[]

---

##### `timeoutConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingOpenTunnelRequest.property.timeoutConfig"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTimeoutConfig`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTimeoutConfig)

---

### IoTSecureTunnelingOpenTunnelResponse <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingOpenTunnelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingOpenTunnelResponse: iotsecuretunneling.IoTSecureTunnelingOpenTunnelResponse = { ... }
```

##### `destinationAccessToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingOpenTunnelResponse.property.destinationAccessToken"></a>

- *Type:* `string`

---

##### `sourceAccessToken`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingOpenTunnelResponse.property.sourceAccessToken"></a>

- *Type:* `string`

---

##### `tunnelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingOpenTunnelResponse.property.tunnelArn"></a>

- *Type:* `string`

---

##### `tunnelId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingOpenTunnelResponse.property.tunnelId"></a>

- *Type:* `string`

---

### IoTSecureTunnelingTag <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingTag: iotsecuretunneling.IoTSecureTunnelingTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTag.property.value"></a>

- *Type:* `string`

---

### IoTSecureTunnelingTagResourceRequest <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingTagResourceRequest: iotsecuretunneling.IoTSecureTunnelingTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTag`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTag)[]

---

### IoTSecureTunnelingTagResourceResponse <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingTagResourceResponse: iotsecuretunneling.IoTSecureTunnelingTagResourceResponse = { ... }
```

### IoTSecureTunnelingTimeoutConfig <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTimeoutConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingTimeoutConfig: iotsecuretunneling.IoTSecureTunnelingTimeoutConfig = { ... }
```

##### `maxLifetimeTimeoutMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTimeoutConfig.property.maxLifetimeTimeoutMinutes"></a>

- *Type:* `number`

---

### IoTSecureTunnelingTunnel <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingTunnel: iotsecuretunneling.IoTSecureTunnelingTunnel = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnel.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnel.property.description"></a>

- *Type:* `string`

---

##### `destinationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnel.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDestinationConfig`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDestinationConfig)

---

##### `destinationConnectionState`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnel.property.destinationConnectionState"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingConnectionState`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingConnectionState)

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnel.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `sourceConnectionState`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnel.property.sourceConnectionState"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingConnectionState`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingConnectionState)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnel.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnel.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTag`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTag)[]

---

##### `timeoutConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnel.property.timeoutConfig"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTimeoutConfig`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTimeoutConfig)

---

##### `tunnelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnel.property.tunnelArn"></a>

- *Type:* `string`

---

##### `tunnelId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnel.property.tunnelId"></a>

- *Type:* `string`

---

### IoTSecureTunnelingTunnelSummary <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnelSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingTunnelSummary: iotsecuretunneling.IoTSecureTunnelingTunnelSummary = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnelSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnelSummary.property.description"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnelSummary.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnelSummary.property.status"></a>

- *Type:* `string`

---

##### `tunnelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnelSummary.property.tunnelArn"></a>

- *Type:* `string`

---

##### `tunnelId`<sup>Optional</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnelSummary.property.tunnelId"></a>

- *Type:* `string`

---

### IoTSecureTunnelingUntagResourceRequest <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingUntagResourceRequest: iotsecuretunneling.IoTSecureTunnelingUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### IoTSecureTunnelingUntagResourceResponse <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

const ioTSecureTunnelingUntagResourceResponse: iotsecuretunneling.IoTSecureTunnelingUntagResourceResponse = { ... }
```

## Classes <a name="Classes"></a>

### IoTSecureTunnelingResponsesDescribeTunnel <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnel"></a>

#### Initializer <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnel.Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

new iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnel(__scope: Construct, __resources: string[], __input: IoTSecureTunnelingDescribeTunnelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest)

---



#### Properties <a name="Properties"></a>

##### `tunnel`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnel.property.tunnel"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel)

---


### IoTSecureTunnelingResponsesDescribeTunnelTunnel <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel"></a>

#### Initializer <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel.Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

new iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel(__scope: Construct, __resources: string[], __input: IoTSecureTunnelingDescribeTunnelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel.property.description"></a>

- *Type:* `string`

---

##### `destinationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel.property.destinationConfig"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConfig`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConfig)

---

##### `destinationConnectionState`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel.property.destinationConnectionState"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConnectionState`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConnectionState)

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `sourceConnectionState`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel.property.sourceConnectionState"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelSourceConnectionState`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelSourceConnectionState)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTag`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTag)[]

---

##### `timeoutConfig`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel.property.timeoutConfig"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelTimeoutConfig`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelTimeoutConfig)

---

##### `tunnelArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel.property.tunnelArn"></a>

- *Type:* `string`

---

##### `tunnelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnel.property.tunnelId"></a>

- *Type:* `string`

---


### IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConfig <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConfig.Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

new iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConfig(__scope: Construct, __resources: string[], __input: IoTSecureTunnelingDescribeTunnelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest)

---



#### Properties <a name="Properties"></a>

##### `services`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConfig.property.services"></a>

- *Type:* `string`[]

---

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConfig.property.thingName"></a>

- *Type:* `string`

---


### IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConnectionState <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConnectionState"></a>

#### Initializer <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConnectionState.Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

new iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConnectionState(__scope: Construct, __resources: string[], __input: IoTSecureTunnelingDescribeTunnelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConnectionState.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConnectionState.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConnectionState.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest)

---



#### Properties <a name="Properties"></a>

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConnectionState.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelDestinationConnectionState.property.status"></a>

- *Type:* `string`

---


### IoTSecureTunnelingResponsesDescribeTunnelTunnelSourceConnectionState <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelSourceConnectionState"></a>

#### Initializer <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelSourceConnectionState.Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

new iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelSourceConnectionState(__scope: Construct, __resources: string[], __input: IoTSecureTunnelingDescribeTunnelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelSourceConnectionState.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelSourceConnectionState.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelSourceConnectionState.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest)

---



#### Properties <a name="Properties"></a>

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelSourceConnectionState.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelSourceConnectionState.property.status"></a>

- *Type:* `string`

---


### IoTSecureTunnelingResponsesDescribeTunnelTunnelTimeoutConfig <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelTimeoutConfig"></a>

#### Initializer <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelTimeoutConfig.Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

new iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelTimeoutConfig(__scope: Construct, __resources: string[], __input: IoTSecureTunnelingDescribeTunnelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelTimeoutConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelTimeoutConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelTimeoutConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingDescribeTunnelRequest)

---



#### Properties <a name="Properties"></a>

##### `maxLifetimeTimeoutMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesDescribeTunnelTunnelTimeoutConfig.property.maxLifetimeTimeoutMinutes"></a>

- *Type:* `number`

---


### IoTSecureTunnelingResponsesListTagsForResource <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesListTagsForResource.Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

new iotsecuretunneling.IoTSecureTunnelingResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: IoTSecureTunnelingListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTagsForResourceRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTag`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTag)[]

---


### IoTSecureTunnelingResponsesListTunnels <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesListTunnels"></a>

#### Initializer <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesListTunnels.Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

new iotsecuretunneling.IoTSecureTunnelingResponsesListTunnels(__scope: Construct, __resources: string[], __input: IoTSecureTunnelingListTunnelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesListTunnels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesListTunnels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesListTunnels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTunnelsRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingListTunnelsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesListTunnels.property.nextToken"></a>

- *Type:* `string`

---

##### `tunnelSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesListTunnels.property.tunnelSummaries"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnelSummary`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingTunnelSummary)[]

---


### IoTSecureTunnelingResponsesOpenTunnel <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesOpenTunnel"></a>

#### Initializer <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesOpenTunnel.Initializer"></a>

```typescript
import { iotsecuretunneling } from 'aws-cdk-sdk'

new iotsecuretunneling.IoTSecureTunnelingResponsesOpenTunnel(__scope: Construct, __resources: string[], __input: IoTSecureTunnelingOpenTunnelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesOpenTunnel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesOpenTunnel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesOpenTunnel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingOpenTunnelRequest`](#aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingOpenTunnelRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationAccessToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesOpenTunnel.property.destinationAccessToken"></a>

- *Type:* `string`

---

##### `sourceAccessToken`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesOpenTunnel.property.sourceAccessToken"></a>

- *Type:* `string`

---

##### `tunnelArn`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesOpenTunnel.property.tunnelArn"></a>

- *Type:* `string`

---

##### `tunnelId`<sup>Required</sup> <a name="aws-cdk-sdk.iotsecuretunneling.IoTSecureTunnelingResponsesOpenTunnel.property.tunnelId"></a>

- *Type:* `string`

---



