# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CodeStarconnectionsClient <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient"></a>

#### Initializer <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

new codestarconnections.CodeStarconnectionsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createConnection` <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.createConnection"></a>

```typescript
public createConnection(input: CodeStarconnectionsCreateConnectionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateConnectionInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateConnectionInput)

---

##### `createHost` <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.createHost"></a>

```typescript
public createHost(input: CodeStarconnectionsCreateHostInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateHostInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateHostInput)

---

##### `deleteConnection` <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.deleteConnection"></a>

```typescript
public deleteConnection(input: CodeStarconnectionsDeleteConnectionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsDeleteConnectionInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsDeleteConnectionInput)

---

##### `deleteHost` <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.deleteHost"></a>

```typescript
public deleteHost(input: CodeStarconnectionsDeleteHostInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsDeleteHostInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsDeleteHostInput)

---

##### `fetchConnection` <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.fetchConnection"></a>

```typescript
public fetchConnection(input: CodeStarconnectionsGetConnectionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetConnectionInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetConnectionInput)

---

##### `fetchHost` <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.fetchHost"></a>

```typescript
public fetchHost(input: CodeStarconnectionsGetHostInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetHostInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetHostInput)

---

##### `listConnections` <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.listConnections"></a>

```typescript
public listConnections(input: CodeStarconnectionsListConnectionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsListConnectionsInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsListConnectionsInput)

---

##### `listHosts` <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.listHosts"></a>

```typescript
public listHosts(input: CodeStarconnectionsListHostsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsListHostsInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsListHostsInput)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: CodeStarconnectionsListTagsForResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsListTagsForResourceInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsListTagsForResourceInput)

---

##### `tagResource` <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.tagResource"></a>

```typescript
public tagResource(input: CodeStarconnectionsTagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsTagResourceInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsTagResourceInput)

---

##### `untagResource` <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.untagResource"></a>

```typescript
public untagResource(input: CodeStarconnectionsUntagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsUntagResourceInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsUntagResourceInput)

---

##### `updateHost` <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.updateHost"></a>

```typescript
public updateHost(input: CodeStarconnectionsUpdateHostInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsUpdateHostInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsUpdateHostInput)

---




## Structs <a name="Structs"></a>

### CodeStarconnectionsConnection <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsConnection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsConnection: codestarconnections.CodeStarconnectionsConnection = { ... }
```

##### `connectionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsConnection.property.connectionArn"></a>

- *Type:* `string`

---

##### `connectionName`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsConnection.property.connectionName"></a>

- *Type:* `string`

---

##### `connectionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsConnection.property.connectionStatus"></a>

- *Type:* `string`

---

##### `hostArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsConnection.property.hostArn"></a>

- *Type:* `string`

---

##### `ownerAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsConnection.property.ownerAccountId"></a>

- *Type:* `string`

---

##### `providerType`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsConnection.property.providerType"></a>

- *Type:* `string`

---

### CodeStarconnectionsCreateConnectionInput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateConnectionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsCreateConnectionInput: codestarconnections.CodeStarconnectionsCreateConnectionInput = { ... }
```

##### `connectionName`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateConnectionInput.property.connectionName"></a>

- *Type:* `string`

---

##### `hostArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateConnectionInput.property.hostArn"></a>

- *Type:* `string`

---

##### `providerType`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateConnectionInput.property.providerType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateConnectionInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsTag`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsTag)[]

---

### CodeStarconnectionsCreateConnectionOutput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateConnectionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsCreateConnectionOutput: codestarconnections.CodeStarconnectionsCreateConnectionOutput = { ... }
```

##### `connectionArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateConnectionOutput.property.connectionArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateConnectionOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsTag`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsTag)[]

---

### CodeStarconnectionsCreateHostInput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateHostInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsCreateHostInput: codestarconnections.CodeStarconnectionsCreateHostInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateHostInput.property.name"></a>

- *Type:* `string`

---

##### `providerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateHostInput.property.providerEndpoint"></a>

- *Type:* `string`

---

##### `providerType`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateHostInput.property.providerType"></a>

- *Type:* `string`

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateHostInput.property.vpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsVpcConfiguration`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsVpcConfiguration)

---

### CodeStarconnectionsCreateHostOutput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateHostOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsCreateHostOutput: codestarconnections.CodeStarconnectionsCreateHostOutput = { ... }
```

##### `hostArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateHostOutput.property.hostArn"></a>

- *Type:* `string`

---

### CodeStarconnectionsDeleteConnectionInput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsDeleteConnectionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsDeleteConnectionInput: codestarconnections.CodeStarconnectionsDeleteConnectionInput = { ... }
```

##### `connectionArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsDeleteConnectionInput.property.connectionArn"></a>

- *Type:* `string`

---

### CodeStarconnectionsDeleteConnectionOutput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsDeleteConnectionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsDeleteConnectionOutput: codestarconnections.CodeStarconnectionsDeleteConnectionOutput = { ... }
```

### CodeStarconnectionsDeleteHostInput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsDeleteHostInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsDeleteHostInput: codestarconnections.CodeStarconnectionsDeleteHostInput = { ... }
```

##### `hostArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsDeleteHostInput.property.hostArn"></a>

- *Type:* `string`

---

### CodeStarconnectionsDeleteHostOutput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsDeleteHostOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsDeleteHostOutput: codestarconnections.CodeStarconnectionsDeleteHostOutput = { ... }
```

### CodeStarconnectionsGetConnectionInput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetConnectionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsGetConnectionInput: codestarconnections.CodeStarconnectionsGetConnectionInput = { ... }
```

##### `connectionArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetConnectionInput.property.connectionArn"></a>

- *Type:* `string`

---

### CodeStarconnectionsGetConnectionOutput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetConnectionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsGetConnectionOutput: codestarconnections.CodeStarconnectionsGetConnectionOutput = { ... }
```

##### `connection`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetConnectionOutput.property.connection"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsConnection`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsConnection)

---

### CodeStarconnectionsGetHostInput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetHostInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsGetHostInput: codestarconnections.CodeStarconnectionsGetHostInput = { ... }
```

##### `hostArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetHostInput.property.hostArn"></a>

- *Type:* `string`

---

### CodeStarconnectionsGetHostOutput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetHostOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsGetHostOutput: codestarconnections.CodeStarconnectionsGetHostOutput = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetHostOutput.property.name"></a>

- *Type:* `string`

---

##### `providerEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetHostOutput.property.providerEndpoint"></a>

- *Type:* `string`

---

##### `providerType`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetHostOutput.property.providerType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetHostOutput.property.status"></a>

- *Type:* `string`

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetHostOutput.property.vpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsVpcConfiguration`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsVpcConfiguration)

---

### CodeStarconnectionsHost <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsHost"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsHost: codestarconnections.CodeStarconnectionsHost = { ... }
```

##### `hostArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsHost.property.hostArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsHost.property.name"></a>

- *Type:* `string`

---

##### `providerEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsHost.property.providerEndpoint"></a>

- *Type:* `string`

---

##### `providerType`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsHost.property.providerType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsHost.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsHost.property.statusMessage"></a>

- *Type:* `string`

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsHost.property.vpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsVpcConfiguration`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsVpcConfiguration)

---

### CodeStarconnectionsListConnectionsInput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListConnectionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsListConnectionsInput: codestarconnections.CodeStarconnectionsListConnectionsInput = { ... }
```

##### `hostArnFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListConnectionsInput.property.hostArnFilter"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListConnectionsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListConnectionsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `providerTypeFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListConnectionsInput.property.providerTypeFilter"></a>

- *Type:* `string`

---

### CodeStarconnectionsListConnectionsOutput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListConnectionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsListConnectionsOutput: codestarconnections.CodeStarconnectionsListConnectionsOutput = { ... }
```

##### `connections`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListConnectionsOutput.property.connections"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsConnection`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsConnection)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListConnectionsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeStarconnectionsListHostsInput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListHostsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsListHostsInput: codestarconnections.CodeStarconnectionsListHostsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListHostsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListHostsInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeStarconnectionsListHostsOutput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListHostsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsListHostsOutput: codestarconnections.CodeStarconnectionsListHostsOutput = { ... }
```

##### `hosts`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListHostsOutput.property.hosts"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsHost`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsHost)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListHostsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeStarconnectionsListTagsForResourceInput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListTagsForResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsListTagsForResourceInput: codestarconnections.CodeStarconnectionsListTagsForResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListTagsForResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

### CodeStarconnectionsListTagsForResourceOutput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListTagsForResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsListTagsForResourceOutput: codestarconnections.CodeStarconnectionsListTagsForResourceOutput = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsListTagsForResourceOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsTag`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsTag)[]

---

### CodeStarconnectionsTag <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsTag: codestarconnections.CodeStarconnectionsTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsTag.property.value"></a>

- *Type:* `string`

---

### CodeStarconnectionsTagResourceInput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsTagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsTagResourceInput: codestarconnections.CodeStarconnectionsTagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsTagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsTagResourceInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsTag`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsTag)[]

---

### CodeStarconnectionsTagResourceOutput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsTagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsTagResourceOutput: codestarconnections.CodeStarconnectionsTagResourceOutput = { ... }
```

### CodeStarconnectionsUntagResourceInput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsUntagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsUntagResourceInput: codestarconnections.CodeStarconnectionsUntagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsUntagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsUntagResourceInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### CodeStarconnectionsUntagResourceOutput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsUntagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsUntagResourceOutput: codestarconnections.CodeStarconnectionsUntagResourceOutput = { ... }
```

### CodeStarconnectionsUpdateHostInput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsUpdateHostInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsUpdateHostInput: codestarconnections.CodeStarconnectionsUpdateHostInput = { ... }
```

##### `hostArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsUpdateHostInput.property.hostArn"></a>

- *Type:* `string`

---

##### `providerEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsUpdateHostInput.property.providerEndpoint"></a>

- *Type:* `string`

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsUpdateHostInput.property.vpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsVpcConfiguration`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsVpcConfiguration)

---

### CodeStarconnectionsUpdateHostOutput <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsUpdateHostOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsUpdateHostOutput: codestarconnections.CodeStarconnectionsUpdateHostOutput = { ... }
```

### CodeStarconnectionsVpcConfiguration <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsVpcConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

const codeStarconnectionsVpcConfiguration: codestarconnections.CodeStarconnectionsVpcConfiguration = { ... }
```

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsVpcConfiguration.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsVpcConfiguration.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsVpcConfiguration.property.vpcId"></a>

- *Type:* `string`

---

##### `tlsCertificate`<sup>Optional</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsVpcConfiguration.property.tlsCertificate"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### CodeStarconnectionsResponsesCreateConnection <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesCreateConnection"></a>

#### Initializer <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesCreateConnection.Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

new codestarconnections.CodeStarconnectionsResponsesCreateConnection(__scope: Construct, __resources: string[], __input: CodeStarconnectionsCreateConnectionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesCreateConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesCreateConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesCreateConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateConnectionInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateConnectionInput)

---



#### Properties <a name="Properties"></a>

##### `connectionArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesCreateConnection.property.connectionArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesCreateConnection.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsTag`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsTag)[]

---


### CodeStarconnectionsResponsesCreateHost <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesCreateHost"></a>

#### Initializer <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesCreateHost.Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

new codestarconnections.CodeStarconnectionsResponsesCreateHost(__scope: Construct, __resources: string[], __input: CodeStarconnectionsCreateHostInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesCreateHost.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesCreateHost.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesCreateHost.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateHostInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsCreateHostInput)

---



#### Properties <a name="Properties"></a>

##### `hostArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesCreateHost.property.hostArn"></a>

- *Type:* `string`

---


### CodeStarconnectionsResponsesFetchConnection <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnection"></a>

#### Initializer <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnection.Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

new codestarconnections.CodeStarconnectionsResponsesFetchConnection(__scope: Construct, __resources: string[], __input: CodeStarconnectionsGetConnectionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetConnectionInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetConnectionInput)

---



#### Properties <a name="Properties"></a>

##### `connection`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnection.property.connection"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnectionConnection`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnectionConnection)

---


### CodeStarconnectionsResponsesFetchConnectionConnection <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnectionConnection"></a>

#### Initializer <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnectionConnection.Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

new codestarconnections.CodeStarconnectionsResponsesFetchConnectionConnection(__scope: Construct, __resources: string[], __input: CodeStarconnectionsGetConnectionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnectionConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnectionConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnectionConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetConnectionInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetConnectionInput)

---



#### Properties <a name="Properties"></a>

##### `connectionArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnectionConnection.property.connectionArn"></a>

- *Type:* `string`

---

##### `connectionName`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnectionConnection.property.connectionName"></a>

- *Type:* `string`

---

##### `connectionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnectionConnection.property.connectionStatus"></a>

- *Type:* `string`

---

##### `hostArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnectionConnection.property.hostArn"></a>

- *Type:* `string`

---

##### `ownerAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnectionConnection.property.ownerAccountId"></a>

- *Type:* `string`

---

##### `providerType`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchConnectionConnection.property.providerType"></a>

- *Type:* `string`

---


### CodeStarconnectionsResponsesFetchHost <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHost"></a>

#### Initializer <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHost.Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

new codestarconnections.CodeStarconnectionsResponsesFetchHost(__scope: Construct, __resources: string[], __input: CodeStarconnectionsGetHostInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHost.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHost.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHost.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetHostInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetHostInput)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHost.property.name"></a>

- *Type:* `string`

---

##### `providerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHost.property.providerEndpoint"></a>

- *Type:* `string`

---

##### `providerType`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHost.property.providerType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHost.property.status"></a>

- *Type:* `string`

---

##### `vpcConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHost.property.vpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHostVpcConfiguration`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHostVpcConfiguration)

---


### CodeStarconnectionsResponsesFetchHostVpcConfiguration <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHostVpcConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHostVpcConfiguration.Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

new codestarconnections.CodeStarconnectionsResponsesFetchHostVpcConfiguration(__scope: Construct, __resources: string[], __input: CodeStarconnectionsGetHostInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHostVpcConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHostVpcConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHostVpcConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetHostInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsGetHostInput)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHostVpcConfiguration.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHostVpcConfiguration.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tlsCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHostVpcConfiguration.property.tlsCertificate"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesFetchHostVpcConfiguration.property.vpcId"></a>

- *Type:* `string`

---


### CodeStarconnectionsResponsesListConnections <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListConnections"></a>

#### Initializer <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListConnections.Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

new codestarconnections.CodeStarconnectionsResponsesListConnections(__scope: Construct, __resources: string[], __input: CodeStarconnectionsListConnectionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListConnections.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListConnections.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListConnections.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsListConnectionsInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsListConnectionsInput)

---



#### Properties <a name="Properties"></a>

##### `connections`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListConnections.property.connections"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsConnection`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsConnection)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListConnections.property.nextToken"></a>

- *Type:* `string`

---


### CodeStarconnectionsResponsesListHosts <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListHosts"></a>

#### Initializer <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListHosts.Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

new codestarconnections.CodeStarconnectionsResponsesListHosts(__scope: Construct, __resources: string[], __input: CodeStarconnectionsListHostsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListHosts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListHosts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListHosts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsListHostsInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsListHostsInput)

---



#### Properties <a name="Properties"></a>

##### `hosts`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListHosts.property.hosts"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsHost`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsHost)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListHosts.property.nextToken"></a>

- *Type:* `string`

---


### CodeStarconnectionsResponsesListTagsForResource <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListTagsForResource.Initializer"></a>

```typescript
import { codestarconnections } from 'aws-cdk-sdk'

new codestarconnections.CodeStarconnectionsResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: CodeStarconnectionsListTagsForResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsListTagsForResourceInput`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsListTagsForResourceInput)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codestarconnections.CodeStarconnectionsResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codestarconnections.CodeStarconnectionsTag`](#aws-cdk-sdk.codestarconnections.CodeStarconnectionsTag)[]

---



