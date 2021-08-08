# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### Ec2InstanceConnectClient <a name="aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectClient"></a>

#### Initializer <a name="aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectClient.Initializer"></a>

```typescript
import { ec2instanceconnect } from 'aws-cdk-sdk'

new ec2instanceconnect.Ec2InstanceConnectClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `sendSshPublicKey` <a name="aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectClient.sendSshPublicKey"></a>

```typescript
public sendSshPublicKey(input: Ec2InstanceConnectSendSshPublicKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectSendSshPublicKeyRequest`](#aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectSendSshPublicKeyRequest)

---




## Structs <a name="Structs"></a>

### Ec2InstanceConnectSendSshPublicKeyRequest <a name="aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectSendSshPublicKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ec2instanceconnect } from 'aws-cdk-sdk'

const ec2InstanceConnectSendSshPublicKeyRequest: ec2instanceconnect.Ec2InstanceConnectSendSshPublicKeyRequest = { ... }
```

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectSendSshPublicKeyRequest.property.availabilityZone"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectSendSshPublicKeyRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `instanceOsUser`<sup>Required</sup> <a name="aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectSendSshPublicKeyRequest.property.instanceOsUser"></a>

- *Type:* `string`

---

##### `sshPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectSendSshPublicKeyRequest.property.sshPublicKey"></a>

- *Type:* `string`

---

### Ec2InstanceConnectSendSshPublicKeyResponse <a name="aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectSendSshPublicKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ec2instanceconnect } from 'aws-cdk-sdk'

const ec2InstanceConnectSendSshPublicKeyResponse: ec2instanceconnect.Ec2InstanceConnectSendSshPublicKeyResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectSendSshPublicKeyResponse.property.requestId"></a>

- *Type:* `string`

---

##### `success`<sup>Optional</sup> <a name="aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectSendSshPublicKeyResponse.property.success"></a>

- *Type:* `boolean`

---

## Classes <a name="Classes"></a>

### EC2InstanceConnectResponsesSendSshPublicKey <a name="aws-cdk-sdk.ec2instanceconnect.EC2InstanceConnectResponsesSendSshPublicKey"></a>

#### Initializer <a name="aws-cdk-sdk.ec2instanceconnect.EC2InstanceConnectResponsesSendSshPublicKey.Initializer"></a>

```typescript
import { ec2instanceconnect } from 'aws-cdk-sdk'

new ec2instanceconnect.EC2InstanceConnectResponsesSendSshPublicKey(__scope: Construct, __resources: string[], __input: Ec2InstanceConnectSendSshPublicKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ec2instanceconnect.EC2InstanceConnectResponsesSendSshPublicKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ec2instanceconnect.EC2InstanceConnectResponsesSendSshPublicKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ec2instanceconnect.EC2InstanceConnectResponsesSendSshPublicKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectSendSshPublicKeyRequest`](#aws-cdk-sdk.ec2instanceconnect.Ec2InstanceConnectSendSshPublicKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.ec2instanceconnect.EC2InstanceConnectResponsesSendSshPublicKey.property.requestId"></a>

- *Type:* `string`

---

##### `success`<sup>Required</sup> <a name="aws-cdk-sdk.ec2instanceconnect.EC2InstanceConnectResponsesSendSshPublicKey.property.success"></a>

- *Type:* `boolean`

---



