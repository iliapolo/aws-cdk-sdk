# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### TransferClient <a name="aws-cdk-sdk.transfer.TransferClient"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferClient.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createServer` <a name="aws-cdk-sdk.transfer.TransferClient.createServer"></a>

```typescript
public createServer(input: TransferCreateServerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferCreateServerRequest`](#aws-cdk-sdk.transfer.TransferCreateServerRequest)

---

##### `createUser` <a name="aws-cdk-sdk.transfer.TransferClient.createUser"></a>

```typescript
public createUser(input: TransferCreateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferCreateUserRequest`](#aws-cdk-sdk.transfer.TransferCreateUserRequest)

---

##### `deleteServer` <a name="aws-cdk-sdk.transfer.TransferClient.deleteServer"></a>

```typescript
public deleteServer(input: TransferDeleteServerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDeleteServerRequest`](#aws-cdk-sdk.transfer.TransferDeleteServerRequest)

---

##### `deleteSshPublicKey` <a name="aws-cdk-sdk.transfer.TransferClient.deleteSshPublicKey"></a>

```typescript
public deleteSshPublicKey(input: TransferDeleteSshPublicKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDeleteSshPublicKeyRequest`](#aws-cdk-sdk.transfer.TransferDeleteSshPublicKeyRequest)

---

##### `deleteUser` <a name="aws-cdk-sdk.transfer.TransferClient.deleteUser"></a>

```typescript
public deleteUser(input: TransferDeleteUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDeleteUserRequest`](#aws-cdk-sdk.transfer.TransferDeleteUserRequest)

---

##### `describeSecurityPolicy` <a name="aws-cdk-sdk.transfer.TransferClient.describeSecurityPolicy"></a>

```typescript
public describeSecurityPolicy(input: TransferDescribeSecurityPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDescribeSecurityPolicyRequest`](#aws-cdk-sdk.transfer.TransferDescribeSecurityPolicyRequest)

---

##### `describeServer` <a name="aws-cdk-sdk.transfer.TransferClient.describeServer"></a>

```typescript
public describeServer(input: TransferDescribeServerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDescribeServerRequest`](#aws-cdk-sdk.transfer.TransferDescribeServerRequest)

---

##### `describeUser` <a name="aws-cdk-sdk.transfer.TransferClient.describeUser"></a>

```typescript
public describeUser(input: TransferDescribeUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDescribeUserRequest`](#aws-cdk-sdk.transfer.TransferDescribeUserRequest)

---

##### `importSshPublicKey` <a name="aws-cdk-sdk.transfer.TransferClient.importSshPublicKey"></a>

```typescript
public importSshPublicKey(input: TransferImportSshPublicKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferImportSshPublicKeyRequest`](#aws-cdk-sdk.transfer.TransferImportSshPublicKeyRequest)

---

##### `listSecurityPolicies` <a name="aws-cdk-sdk.transfer.TransferClient.listSecurityPolicies"></a>

```typescript
public listSecurityPolicies(input: TransferListSecurityPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferListSecurityPoliciesRequest`](#aws-cdk-sdk.transfer.TransferListSecurityPoliciesRequest)

---

##### `listServers` <a name="aws-cdk-sdk.transfer.TransferClient.listServers"></a>

```typescript
public listServers(input: TransferListServersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferListServersRequest`](#aws-cdk-sdk.transfer.TransferListServersRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.transfer.TransferClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: TransferListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferListTagsForResourceRequest`](#aws-cdk-sdk.transfer.TransferListTagsForResourceRequest)

---

##### `listUsers` <a name="aws-cdk-sdk.transfer.TransferClient.listUsers"></a>

```typescript
public listUsers(input: TransferListUsersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferListUsersRequest`](#aws-cdk-sdk.transfer.TransferListUsersRequest)

---

##### `startServer` <a name="aws-cdk-sdk.transfer.TransferClient.startServer"></a>

```typescript
public startServer(input: TransferStartServerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferStartServerRequest`](#aws-cdk-sdk.transfer.TransferStartServerRequest)

---

##### `stopServer` <a name="aws-cdk-sdk.transfer.TransferClient.stopServer"></a>

```typescript
public stopServer(input: TransferStopServerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferStopServerRequest`](#aws-cdk-sdk.transfer.TransferStopServerRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.transfer.TransferClient.tagResource"></a>

```typescript
public tagResource(input: TransferTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferTagResourceRequest`](#aws-cdk-sdk.transfer.TransferTagResourceRequest)

---

##### `testIdentityProvider` <a name="aws-cdk-sdk.transfer.TransferClient.testIdentityProvider"></a>

```typescript
public testIdentityProvider(input: TransferTestIdentityProviderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferTestIdentityProviderRequest`](#aws-cdk-sdk.transfer.TransferTestIdentityProviderRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.transfer.TransferClient.untagResource"></a>

```typescript
public untagResource(input: TransferUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferUntagResourceRequest`](#aws-cdk-sdk.transfer.TransferUntagResourceRequest)

---

##### `updateServer` <a name="aws-cdk-sdk.transfer.TransferClient.updateServer"></a>

```typescript
public updateServer(input: TransferUpdateServerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferUpdateServerRequest`](#aws-cdk-sdk.transfer.TransferUpdateServerRequest)

---

##### `updateUser` <a name="aws-cdk-sdk.transfer.TransferClient.updateUser"></a>

```typescript
public updateUser(input: TransferUpdateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferUpdateUserRequest`](#aws-cdk-sdk.transfer.TransferUpdateUserRequest)

---




## Structs <a name="Structs"></a>

### TransferCreateServerRequest <a name="aws-cdk-sdk.transfer.TransferCreateServerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferCreateServerRequest: transfer.TransferCreateServerRequest = { ... }
```

##### `certificate`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateServerRequest.property.certificate"></a>

- *Type:* `string`

---

##### `endpointDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateServerRequest.property.endpointDetails"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferEndpointDetails`](#aws-cdk-sdk.transfer.TransferEndpointDetails)

---

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateServerRequest.property.endpointType"></a>

- *Type:* `string`

---

##### `hostKey`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateServerRequest.property.hostKey"></a>

- *Type:* `string`

---

##### `identityProviderDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateServerRequest.property.identityProviderDetails"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferIdentityProviderDetails`](#aws-cdk-sdk.transfer.TransferIdentityProviderDetails)

---

##### `identityProviderType`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateServerRequest.property.identityProviderType"></a>

- *Type:* `string`

---

##### `loggingRole`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateServerRequest.property.loggingRole"></a>

- *Type:* `string`

---

##### `protocols`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateServerRequest.property.protocols"></a>

- *Type:* `string`[]

---

##### `securityPolicyName`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateServerRequest.property.securityPolicyName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateServerRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferTag`](#aws-cdk-sdk.transfer.TransferTag)[]

---

### TransferCreateServerResponse <a name="aws-cdk-sdk.transfer.TransferCreateServerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferCreateServerResponse: transfer.TransferCreateServerResponse = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferCreateServerResponse.property.serverId"></a>

- *Type:* `string`

---

### TransferCreateUserRequest <a name="aws-cdk-sdk.transfer.TransferCreateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferCreateUserRequest: transfer.TransferCreateUserRequest = { ... }
```

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferCreateUserRequest.property.role"></a>

- *Type:* `string`

---

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferCreateUserRequest.property.serverId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferCreateUserRequest.property.userName"></a>

- *Type:* `string`

---

##### `homeDirectory`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateUserRequest.property.homeDirectory"></a>

- *Type:* `string`

---

##### `homeDirectoryMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateUserRequest.property.homeDirectoryMappings"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferHomeDirectoryMapEntry`](#aws-cdk-sdk.transfer.TransferHomeDirectoryMapEntry)[]

---

##### `homeDirectoryType`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateUserRequest.property.homeDirectoryType"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateUserRequest.property.policy"></a>

- *Type:* `string`

---

##### `sshPublicKeyBody`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateUserRequest.property.sshPublicKeyBody"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferCreateUserRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferTag`](#aws-cdk-sdk.transfer.TransferTag)[]

---

### TransferCreateUserResponse <a name="aws-cdk-sdk.transfer.TransferCreateUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferCreateUserResponse: transfer.TransferCreateUserResponse = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferCreateUserResponse.property.serverId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferCreateUserResponse.property.userName"></a>

- *Type:* `string`

---

### TransferDeleteServerRequest <a name="aws-cdk-sdk.transfer.TransferDeleteServerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferDeleteServerRequest: transfer.TransferDeleteServerRequest = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDeleteServerRequest.property.serverId"></a>

- *Type:* `string`

---

### TransferDeleteSshPublicKeyRequest <a name="aws-cdk-sdk.transfer.TransferDeleteSshPublicKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferDeleteSshPublicKeyRequest: transfer.TransferDeleteSshPublicKeyRequest = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDeleteSshPublicKeyRequest.property.serverId"></a>

- *Type:* `string`

---

##### `sshPublicKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDeleteSshPublicKeyRequest.property.sshPublicKeyId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDeleteSshPublicKeyRequest.property.userName"></a>

- *Type:* `string`

---

### TransferDeleteUserRequest <a name="aws-cdk-sdk.transfer.TransferDeleteUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferDeleteUserRequest: transfer.TransferDeleteUserRequest = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDeleteUserRequest.property.serverId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDeleteUserRequest.property.userName"></a>

- *Type:* `string`

---

### TransferDescribedSecurityPolicy <a name="aws-cdk-sdk.transfer.TransferDescribedSecurityPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferDescribedSecurityPolicy: transfer.TransferDescribedSecurityPolicy = { ... }
```

##### `securityPolicyName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedSecurityPolicy.property.securityPolicyName"></a>

- *Type:* `string`

---

##### `fips`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedSecurityPolicy.property.fips"></a>

- *Type:* `boolean`

---

##### `sshCiphers`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedSecurityPolicy.property.sshCiphers"></a>

- *Type:* `string`[]

---

##### `sshKexs`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedSecurityPolicy.property.sshKexs"></a>

- *Type:* `string`[]

---

##### `sshMacs`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedSecurityPolicy.property.sshMacs"></a>

- *Type:* `string`[]

---

##### `tlsCiphers`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedSecurityPolicy.property.tlsCiphers"></a>

- *Type:* `string`[]

---

### TransferDescribedServer <a name="aws-cdk-sdk.transfer.TransferDescribedServer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferDescribedServer: transfer.TransferDescribedServer = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedServer.property.arn"></a>

- *Type:* `string`

---

##### `certificate`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedServer.property.certificate"></a>

- *Type:* `string`

---

##### `endpointDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedServer.property.endpointDetails"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferEndpointDetails`](#aws-cdk-sdk.transfer.TransferEndpointDetails)

---

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedServer.property.endpointType"></a>

- *Type:* `string`

---

##### `hostKeyFingerprint`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedServer.property.hostKeyFingerprint"></a>

- *Type:* `string`

---

##### `identityProviderDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedServer.property.identityProviderDetails"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferIdentityProviderDetails`](#aws-cdk-sdk.transfer.TransferIdentityProviderDetails)

---

##### `identityProviderType`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedServer.property.identityProviderType"></a>

- *Type:* `string`

---

##### `loggingRole`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedServer.property.loggingRole"></a>

- *Type:* `string`

---

##### `protocols`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedServer.property.protocols"></a>

- *Type:* `string`[]

---

##### `securityPolicyName`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedServer.property.securityPolicyName"></a>

- *Type:* `string`

---

##### `serverId`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedServer.property.serverId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedServer.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedServer.property.tags"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferTag`](#aws-cdk-sdk.transfer.TransferTag)[]

---

##### `userCount`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedServer.property.userCount"></a>

- *Type:* `number`

---

### TransferDescribedUser <a name="aws-cdk-sdk.transfer.TransferDescribedUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferDescribedUser: transfer.TransferDescribedUser = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedUser.property.arn"></a>

- *Type:* `string`

---

##### `homeDirectory`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedUser.property.homeDirectory"></a>

- *Type:* `string`

---

##### `homeDirectoryMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedUser.property.homeDirectoryMappings"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferHomeDirectoryMapEntry`](#aws-cdk-sdk.transfer.TransferHomeDirectoryMapEntry)[]

---

##### `homeDirectoryType`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedUser.property.homeDirectoryType"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedUser.property.policy"></a>

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedUser.property.role"></a>

- *Type:* `string`

---

##### `sshPublicKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedUser.property.sshPublicKeys"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferSshPublicKey`](#aws-cdk-sdk.transfer.TransferSshPublicKey)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedUser.property.tags"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferTag`](#aws-cdk-sdk.transfer.TransferTag)[]

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferDescribedUser.property.userName"></a>

- *Type:* `string`

---

### TransferDescribeSecurityPolicyRequest <a name="aws-cdk-sdk.transfer.TransferDescribeSecurityPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferDescribeSecurityPolicyRequest: transfer.TransferDescribeSecurityPolicyRequest = { ... }
```

##### `securityPolicyName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDescribeSecurityPolicyRequest.property.securityPolicyName"></a>

- *Type:* `string`

---

### TransferDescribeSecurityPolicyResponse <a name="aws-cdk-sdk.transfer.TransferDescribeSecurityPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferDescribeSecurityPolicyResponse: transfer.TransferDescribeSecurityPolicyResponse = { ... }
```

##### `securityPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDescribeSecurityPolicyResponse.property.securityPolicy"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDescribedSecurityPolicy`](#aws-cdk-sdk.transfer.TransferDescribedSecurityPolicy)

---

### TransferDescribeServerRequest <a name="aws-cdk-sdk.transfer.TransferDescribeServerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferDescribeServerRequest: transfer.TransferDescribeServerRequest = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDescribeServerRequest.property.serverId"></a>

- *Type:* `string`

---

### TransferDescribeServerResponse <a name="aws-cdk-sdk.transfer.TransferDescribeServerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferDescribeServerResponse: transfer.TransferDescribeServerResponse = { ... }
```

##### `server`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDescribeServerResponse.property.server"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDescribedServer`](#aws-cdk-sdk.transfer.TransferDescribedServer)

---

### TransferDescribeUserRequest <a name="aws-cdk-sdk.transfer.TransferDescribeUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferDescribeUserRequest: transfer.TransferDescribeUserRequest = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDescribeUserRequest.property.serverId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDescribeUserRequest.property.userName"></a>

- *Type:* `string`

---

### TransferDescribeUserResponse <a name="aws-cdk-sdk.transfer.TransferDescribeUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferDescribeUserResponse: transfer.TransferDescribeUserResponse = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDescribeUserResponse.property.serverId"></a>

- *Type:* `string`

---

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferDescribeUserResponse.property.user"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDescribedUser`](#aws-cdk-sdk.transfer.TransferDescribedUser)

---

### TransferEndpointDetails <a name="aws-cdk-sdk.transfer.TransferEndpointDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferEndpointDetails: transfer.TransferEndpointDetails = { ... }
```

##### `addressAllocationIds`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferEndpointDetails.property.addressAllocationIds"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferEndpointDetails.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferEndpointDetails.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferEndpointDetails.property.vpcEndpointId"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferEndpointDetails.property.vpcId"></a>

- *Type:* `string`

---

### TransferHomeDirectoryMapEntry <a name="aws-cdk-sdk.transfer.TransferHomeDirectoryMapEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferHomeDirectoryMapEntry: transfer.TransferHomeDirectoryMapEntry = { ... }
```

##### `entry`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferHomeDirectoryMapEntry.property.entry"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferHomeDirectoryMapEntry.property.target"></a>

- *Type:* `string`

---

### TransferIdentityProviderDetails <a name="aws-cdk-sdk.transfer.TransferIdentityProviderDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferIdentityProviderDetails: transfer.TransferIdentityProviderDetails = { ... }
```

##### `invocationRole`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferIdentityProviderDetails.property.invocationRole"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferIdentityProviderDetails.property.url"></a>

- *Type:* `string`

---

### TransferImportSshPublicKeyRequest <a name="aws-cdk-sdk.transfer.TransferImportSshPublicKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferImportSshPublicKeyRequest: transfer.TransferImportSshPublicKeyRequest = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferImportSshPublicKeyRequest.property.serverId"></a>

- *Type:* `string`

---

##### `sshPublicKeyBody`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferImportSshPublicKeyRequest.property.sshPublicKeyBody"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferImportSshPublicKeyRequest.property.userName"></a>

- *Type:* `string`

---

### TransferImportSshPublicKeyResponse <a name="aws-cdk-sdk.transfer.TransferImportSshPublicKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferImportSshPublicKeyResponse: transfer.TransferImportSshPublicKeyResponse = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferImportSshPublicKeyResponse.property.serverId"></a>

- *Type:* `string`

---

##### `sshPublicKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferImportSshPublicKeyResponse.property.sshPublicKeyId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferImportSshPublicKeyResponse.property.userName"></a>

- *Type:* `string`

---

### TransferListedServer <a name="aws-cdk-sdk.transfer.TransferListedServer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferListedServer: transfer.TransferListedServer = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferListedServer.property.arn"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListedServer.property.endpointType"></a>

- *Type:* `string`

---

##### `identityProviderType`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListedServer.property.identityProviderType"></a>

- *Type:* `string`

---

##### `loggingRole`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListedServer.property.loggingRole"></a>

- *Type:* `string`

---

##### `serverId`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListedServer.property.serverId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListedServer.property.state"></a>

- *Type:* `string`

---

##### `userCount`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListedServer.property.userCount"></a>

- *Type:* `number`

---

### TransferListedUser <a name="aws-cdk-sdk.transfer.TransferListedUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferListedUser: transfer.TransferListedUser = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferListedUser.property.arn"></a>

- *Type:* `string`

---

##### `homeDirectory`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListedUser.property.homeDirectory"></a>

- *Type:* `string`

---

##### `homeDirectoryType`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListedUser.property.homeDirectoryType"></a>

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListedUser.property.role"></a>

- *Type:* `string`

---

##### `sshPublicKeyCount`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListedUser.property.sshPublicKeyCount"></a>

- *Type:* `number`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListedUser.property.userName"></a>

- *Type:* `string`

---

### TransferListSecurityPoliciesRequest <a name="aws-cdk-sdk.transfer.TransferListSecurityPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferListSecurityPoliciesRequest: transfer.TransferListSecurityPoliciesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListSecurityPoliciesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListSecurityPoliciesRequest.property.nextToken"></a>

- *Type:* `string`

---

### TransferListSecurityPoliciesResponse <a name="aws-cdk-sdk.transfer.TransferListSecurityPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferListSecurityPoliciesResponse: transfer.TransferListSecurityPoliciesResponse = { ... }
```

##### `securityPolicyNames`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferListSecurityPoliciesResponse.property.securityPolicyNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListSecurityPoliciesResponse.property.nextToken"></a>

- *Type:* `string`

---

### TransferListServersRequest <a name="aws-cdk-sdk.transfer.TransferListServersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferListServersRequest: transfer.TransferListServersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListServersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListServersRequest.property.nextToken"></a>

- *Type:* `string`

---

### TransferListServersResponse <a name="aws-cdk-sdk.transfer.TransferListServersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferListServersResponse: transfer.TransferListServersResponse = { ... }
```

##### `servers`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferListServersResponse.property.servers"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferListedServer`](#aws-cdk-sdk.transfer.TransferListedServer)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListServersResponse.property.nextToken"></a>

- *Type:* `string`

---

### TransferListTagsForResourceRequest <a name="aws-cdk-sdk.transfer.TransferListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferListTagsForResourceRequest: transfer.TransferListTagsForResourceRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferListTagsForResourceRequest.property.arn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListTagsForResourceRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListTagsForResourceRequest.property.nextToken"></a>

- *Type:* `string`

---

### TransferListTagsForResourceResponse <a name="aws-cdk-sdk.transfer.TransferListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferListTagsForResourceResponse: transfer.TransferListTagsForResourceResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListTagsForResourceResponse.property.arn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListTagsForResourceResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferTag`](#aws-cdk-sdk.transfer.TransferTag)[]

---

### TransferListUsersRequest <a name="aws-cdk-sdk.transfer.TransferListUsersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferListUsersRequest: transfer.TransferListUsersRequest = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferListUsersRequest.property.serverId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListUsersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListUsersRequest.property.nextToken"></a>

- *Type:* `string`

---

### TransferListUsersResponse <a name="aws-cdk-sdk.transfer.TransferListUsersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferListUsersResponse: transfer.TransferListUsersResponse = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferListUsersResponse.property.serverId"></a>

- *Type:* `string`

---

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferListUsersResponse.property.users"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferListedUser`](#aws-cdk-sdk.transfer.TransferListedUser)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferListUsersResponse.property.nextToken"></a>

- *Type:* `string`

---

### TransferSshPublicKey <a name="aws-cdk-sdk.transfer.TransferSshPublicKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferSshPublicKey: transfer.TransferSshPublicKey = { ... }
```

##### `dateImported`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferSshPublicKey.property.dateImported"></a>

- *Type:* `string`

---

##### `sshPublicKeyBody`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferSshPublicKey.property.sshPublicKeyBody"></a>

- *Type:* `string`

---

##### `sshPublicKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferSshPublicKey.property.sshPublicKeyId"></a>

- *Type:* `string`

---

### TransferStartServerRequest <a name="aws-cdk-sdk.transfer.TransferStartServerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferStartServerRequest: transfer.TransferStartServerRequest = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferStartServerRequest.property.serverId"></a>

- *Type:* `string`

---

### TransferStopServerRequest <a name="aws-cdk-sdk.transfer.TransferStopServerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferStopServerRequest: transfer.TransferStopServerRequest = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferStopServerRequest.property.serverId"></a>

- *Type:* `string`

---

### TransferTag <a name="aws-cdk-sdk.transfer.TransferTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferTag: transfer.TransferTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferTag.property.value"></a>

- *Type:* `string`

---

### TransferTagResourceRequest <a name="aws-cdk-sdk.transfer.TransferTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferTagResourceRequest: transfer.TransferTagResourceRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferTagResourceRequest.property.arn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferTag`](#aws-cdk-sdk.transfer.TransferTag)[]

---

### TransferTestIdentityProviderRequest <a name="aws-cdk-sdk.transfer.TransferTestIdentityProviderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferTestIdentityProviderRequest: transfer.TransferTestIdentityProviderRequest = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferTestIdentityProviderRequest.property.serverId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferTestIdentityProviderRequest.property.userName"></a>

- *Type:* `string`

---

##### `serverProtocol`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferTestIdentityProviderRequest.property.serverProtocol"></a>

- *Type:* `string`

---

##### `sourceIp`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferTestIdentityProviderRequest.property.sourceIp"></a>

- *Type:* `string`

---

##### `userPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferTestIdentityProviderRequest.property.userPassword"></a>

- *Type:* `string`

---

### TransferTestIdentityProviderResponse <a name="aws-cdk-sdk.transfer.TransferTestIdentityProviderResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferTestIdentityProviderResponse: transfer.TransferTestIdentityProviderResponse = { ... }
```

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferTestIdentityProviderResponse.property.statusCode"></a>

- *Type:* `number`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferTestIdentityProviderResponse.property.url"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferTestIdentityProviderResponse.property.message"></a>

- *Type:* `string`

---

##### `response`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferTestIdentityProviderResponse.property.response"></a>

- *Type:* `string`

---

### TransferUntagResourceRequest <a name="aws-cdk-sdk.transfer.TransferUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferUntagResourceRequest: transfer.TransferUntagResourceRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferUntagResourceRequest.property.arn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### TransferUpdateServerRequest <a name="aws-cdk-sdk.transfer.TransferUpdateServerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferUpdateServerRequest: transfer.TransferUpdateServerRequest = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateServerRequest.property.serverId"></a>

- *Type:* `string`

---

##### `certificate`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateServerRequest.property.certificate"></a>

- *Type:* `string`

---

##### `endpointDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateServerRequest.property.endpointDetails"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferEndpointDetails`](#aws-cdk-sdk.transfer.TransferEndpointDetails)

---

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateServerRequest.property.endpointType"></a>

- *Type:* `string`

---

##### `hostKey`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateServerRequest.property.hostKey"></a>

- *Type:* `string`

---

##### `identityProviderDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateServerRequest.property.identityProviderDetails"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferIdentityProviderDetails`](#aws-cdk-sdk.transfer.TransferIdentityProviderDetails)

---

##### `loggingRole`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateServerRequest.property.loggingRole"></a>

- *Type:* `string`

---

##### `protocols`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateServerRequest.property.protocols"></a>

- *Type:* `string`[]

---

##### `securityPolicyName`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateServerRequest.property.securityPolicyName"></a>

- *Type:* `string`

---

### TransferUpdateServerResponse <a name="aws-cdk-sdk.transfer.TransferUpdateServerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferUpdateServerResponse: transfer.TransferUpdateServerResponse = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateServerResponse.property.serverId"></a>

- *Type:* `string`

---

### TransferUpdateUserRequest <a name="aws-cdk-sdk.transfer.TransferUpdateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferUpdateUserRequest: transfer.TransferUpdateUserRequest = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateUserRequest.property.serverId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateUserRequest.property.userName"></a>

- *Type:* `string`

---

##### `homeDirectory`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateUserRequest.property.homeDirectory"></a>

- *Type:* `string`

---

##### `homeDirectoryMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateUserRequest.property.homeDirectoryMappings"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferHomeDirectoryMapEntry`](#aws-cdk-sdk.transfer.TransferHomeDirectoryMapEntry)[]

---

##### `homeDirectoryType`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateUserRequest.property.homeDirectoryType"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateUserRequest.property.policy"></a>

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateUserRequest.property.role"></a>

- *Type:* `string`

---

### TransferUpdateUserResponse <a name="aws-cdk-sdk.transfer.TransferUpdateUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

const transferUpdateUserResponse: transfer.TransferUpdateUserResponse = { ... }
```

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateUserResponse.property.serverId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferUpdateUserResponse.property.userName"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### TransferResponsesCreateServer <a name="aws-cdk-sdk.transfer.TransferResponsesCreateServer"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesCreateServer.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesCreateServer(__scope: Construct, __resources: string[], __input: TransferCreateServerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesCreateServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesCreateServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesCreateServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferCreateServerRequest`](#aws-cdk-sdk.transfer.TransferCreateServerRequest)

---



#### Properties <a name="Properties"></a>

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesCreateServer.property.serverId"></a>

- *Type:* `string`

---


### TransferResponsesCreateUser <a name="aws-cdk-sdk.transfer.TransferResponsesCreateUser"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesCreateUser.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesCreateUser(__scope: Construct, __resources: string[], __input: TransferCreateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesCreateUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesCreateUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesCreateUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferCreateUserRequest`](#aws-cdk-sdk.transfer.TransferCreateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesCreateUser.property.serverId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesCreateUser.property.userName"></a>

- *Type:* `string`

---


### TransferResponsesDescribeSecurityPolicy <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicy.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesDescribeSecurityPolicy(__scope: Construct, __resources: string[], __input: TransferDescribeSecurityPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDescribeSecurityPolicyRequest`](#aws-cdk-sdk.transfer.TransferDescribeSecurityPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `securityPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicy.property.securityPolicy"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicySecurityPolicy`](#aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicySecurityPolicy)

---


### TransferResponsesDescribeSecurityPolicySecurityPolicy <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicySecurityPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicySecurityPolicy.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesDescribeSecurityPolicySecurityPolicy(__scope: Construct, __resources: string[], __input: TransferDescribeSecurityPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicySecurityPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicySecurityPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicySecurityPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDescribeSecurityPolicyRequest`](#aws-cdk-sdk.transfer.TransferDescribeSecurityPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `fips`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicySecurityPolicy.property.fips"></a>

- *Type:* `boolean`

---

##### `securityPolicyName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicySecurityPolicy.property.securityPolicyName"></a>

- *Type:* `string`

---

##### `sshCiphers`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicySecurityPolicy.property.sshCiphers"></a>

- *Type:* `string`[]

---

##### `sshKexs`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicySecurityPolicy.property.sshKexs"></a>

- *Type:* `string`[]

---

##### `sshMacs`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicySecurityPolicy.property.sshMacs"></a>

- *Type:* `string`[]

---

##### `tlsCiphers`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeSecurityPolicySecurityPolicy.property.tlsCiphers"></a>

- *Type:* `string`[]

---


### TransferResponsesDescribeServer <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServer"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServer.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesDescribeServer(__scope: Construct, __resources: string[], __input: TransferDescribeServerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDescribeServerRequest`](#aws-cdk-sdk.transfer.TransferDescribeServerRequest)

---



#### Properties <a name="Properties"></a>

##### `server`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServer.property.server"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer`](#aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer)

---


### TransferResponsesDescribeServerServer <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesDescribeServerServer(__scope: Construct, __resources: string[], __input: TransferDescribeServerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDescribeServerRequest`](#aws-cdk-sdk.transfer.TransferDescribeServerRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.property.arn"></a>

- *Type:* `string`

---

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.property.certificate"></a>

- *Type:* `string`

---

##### `endpointDetails`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.property.endpointDetails"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerEndpointDetails`](#aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerEndpointDetails)

---

##### `endpointType`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.property.endpointType"></a>

- *Type:* `string`

---

##### `hostKeyFingerprint`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.property.hostKeyFingerprint"></a>

- *Type:* `string`

---

##### `identityProviderDetails`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.property.identityProviderDetails"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerIdentityProviderDetails`](#aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerIdentityProviderDetails)

---

##### `identityProviderType`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.property.identityProviderType"></a>

- *Type:* `string`

---

##### `loggingRole`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.property.loggingRole"></a>

- *Type:* `string`

---

##### `protocols`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.property.protocols"></a>

- *Type:* `string`[]

---

##### `securityPolicyName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.property.securityPolicyName"></a>

- *Type:* `string`

---

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.property.serverId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.property.tags"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferTag`](#aws-cdk-sdk.transfer.TransferTag)[]

---

##### `userCount`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServer.property.userCount"></a>

- *Type:* `number`

---


### TransferResponsesDescribeServerServerEndpointDetails <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerEndpointDetails"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerEndpointDetails.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesDescribeServerServerEndpointDetails(__scope: Construct, __resources: string[], __input: TransferDescribeServerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerEndpointDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerEndpointDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerEndpointDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDescribeServerRequest`](#aws-cdk-sdk.transfer.TransferDescribeServerRequest)

---



#### Properties <a name="Properties"></a>

##### `addressAllocationIds`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerEndpointDetails.property.addressAllocationIds"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerEndpointDetails.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerEndpointDetails.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerEndpointDetails.property.vpcEndpointId"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerEndpointDetails.property.vpcId"></a>

- *Type:* `string`

---


### TransferResponsesDescribeServerServerIdentityProviderDetails <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerIdentityProviderDetails"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerIdentityProviderDetails.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesDescribeServerServerIdentityProviderDetails(__scope: Construct, __resources: string[], __input: TransferDescribeServerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerIdentityProviderDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerIdentityProviderDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerIdentityProviderDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDescribeServerRequest`](#aws-cdk-sdk.transfer.TransferDescribeServerRequest)

---



#### Properties <a name="Properties"></a>

##### `invocationRole`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerIdentityProviderDetails.property.invocationRole"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeServerServerIdentityProviderDetails.property.url"></a>

- *Type:* `string`

---


### TransferResponsesDescribeUser <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUser"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUser.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesDescribeUser(__scope: Construct, __resources: string[], __input: TransferDescribeUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDescribeUserRequest`](#aws-cdk-sdk.transfer.TransferDescribeUserRequest)

---



#### Properties <a name="Properties"></a>

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUser.property.serverId"></a>

- *Type:* `string`

---

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUser.property.user"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser`](#aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser)

---


### TransferResponsesDescribeUserUser <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesDescribeUserUser(__scope: Construct, __resources: string[], __input: TransferDescribeUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferDescribeUserRequest`](#aws-cdk-sdk.transfer.TransferDescribeUserRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser.property.arn"></a>

- *Type:* `string`

---

##### `homeDirectory`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser.property.homeDirectory"></a>

- *Type:* `string`

---

##### `homeDirectoryMappings`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser.property.homeDirectoryMappings"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferHomeDirectoryMapEntry`](#aws-cdk-sdk.transfer.TransferHomeDirectoryMapEntry)[]

---

##### `homeDirectoryType`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser.property.homeDirectoryType"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser.property.policy"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser.property.role"></a>

- *Type:* `string`

---

##### `sshPublicKeys`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser.property.sshPublicKeys"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferSshPublicKey`](#aws-cdk-sdk.transfer.TransferSshPublicKey)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser.property.tags"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferTag`](#aws-cdk-sdk.transfer.TransferTag)[]

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesDescribeUserUser.property.userName"></a>

- *Type:* `string`

---


### TransferResponsesImportSshPublicKey <a name="aws-cdk-sdk.transfer.TransferResponsesImportSshPublicKey"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesImportSshPublicKey.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesImportSshPublicKey(__scope: Construct, __resources: string[], __input: TransferImportSshPublicKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesImportSshPublicKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesImportSshPublicKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesImportSshPublicKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferImportSshPublicKeyRequest`](#aws-cdk-sdk.transfer.TransferImportSshPublicKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesImportSshPublicKey.property.serverId"></a>

- *Type:* `string`

---

##### `sshPublicKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesImportSshPublicKey.property.sshPublicKeyId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesImportSshPublicKey.property.userName"></a>

- *Type:* `string`

---


### TransferResponsesListSecurityPolicies <a name="aws-cdk-sdk.transfer.TransferResponsesListSecurityPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesListSecurityPolicies.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesListSecurityPolicies(__scope: Construct, __resources: string[], __input: TransferListSecurityPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListSecurityPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListSecurityPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListSecurityPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferListSecurityPoliciesRequest`](#aws-cdk-sdk.transfer.TransferListSecurityPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListSecurityPolicies.property.nextToken"></a>

- *Type:* `string`

---

##### `securityPolicyNames`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListSecurityPolicies.property.securityPolicyNames"></a>

- *Type:* `string`[]

---


### TransferResponsesListServers <a name="aws-cdk-sdk.transfer.TransferResponsesListServers"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesListServers.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesListServers(__scope: Construct, __resources: string[], __input: TransferListServersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListServers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListServers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListServers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferListServersRequest`](#aws-cdk-sdk.transfer.TransferListServersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListServers.property.nextToken"></a>

- *Type:* `string`

---

##### `servers`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListServers.property.servers"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferListedServer`](#aws-cdk-sdk.transfer.TransferListedServer)[]

---


### TransferResponsesListTagsForResource <a name="aws-cdk-sdk.transfer.TransferResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesListTagsForResource.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: TransferListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferListTagsForResourceRequest`](#aws-cdk-sdk.transfer.TransferListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListTagsForResource.property.arn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferTag`](#aws-cdk-sdk.transfer.TransferTag)[]

---


### TransferResponsesListUsers <a name="aws-cdk-sdk.transfer.TransferResponsesListUsers"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesListUsers.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesListUsers(__scope: Construct, __resources: string[], __input: TransferListUsersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListUsers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListUsers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListUsers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferListUsersRequest`](#aws-cdk-sdk.transfer.TransferListUsersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListUsers.property.nextToken"></a>

- *Type:* `string`

---

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListUsers.property.serverId"></a>

- *Type:* `string`

---

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesListUsers.property.users"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferListedUser`](#aws-cdk-sdk.transfer.TransferListedUser)[]

---


### TransferResponsesTestIdentityProvider <a name="aws-cdk-sdk.transfer.TransferResponsesTestIdentityProvider"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesTestIdentityProvider.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesTestIdentityProvider(__scope: Construct, __resources: string[], __input: TransferTestIdentityProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesTestIdentityProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesTestIdentityProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesTestIdentityProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferTestIdentityProviderRequest`](#aws-cdk-sdk.transfer.TransferTestIdentityProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesTestIdentityProvider.property.message"></a>

- *Type:* `string`

---

##### `response`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesTestIdentityProvider.property.response"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesTestIdentityProvider.property.statusCode"></a>

- *Type:* `number`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesTestIdentityProvider.property.url"></a>

- *Type:* `string`

---


### TransferResponsesUpdateServer <a name="aws-cdk-sdk.transfer.TransferResponsesUpdateServer"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesUpdateServer.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesUpdateServer(__scope: Construct, __resources: string[], __input: TransferUpdateServerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesUpdateServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesUpdateServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesUpdateServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferUpdateServerRequest`](#aws-cdk-sdk.transfer.TransferUpdateServerRequest)

---



#### Properties <a name="Properties"></a>

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesUpdateServer.property.serverId"></a>

- *Type:* `string`

---


### TransferResponsesUpdateUser <a name="aws-cdk-sdk.transfer.TransferResponsesUpdateUser"></a>

#### Initializer <a name="aws-cdk-sdk.transfer.TransferResponsesUpdateUser.Initializer"></a>

```typescript
import { transfer } from 'aws-cdk-sdk'

new transfer.TransferResponsesUpdateUser(__scope: Construct, __resources: string[], __input: TransferUpdateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesUpdateUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesUpdateUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesUpdateUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.transfer.TransferUpdateUserRequest`](#aws-cdk-sdk.transfer.TransferUpdateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesUpdateUser.property.serverId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.transfer.TransferResponsesUpdateUser.property.userName"></a>

- *Type:* `string`

---



