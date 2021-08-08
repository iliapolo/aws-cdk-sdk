# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CloudHsmClient <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHsmClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addTagsToResource` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.addTagsToResource"></a>

```typescript
public addTagsToResource(input: CloudHsmAddTagsToResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmAddTagsToResourceRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmAddTagsToResourceRequest)

---

##### `createHapg` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.createHapg"></a>

```typescript
public createHapg(input: CloudHsmCreateHapgRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmCreateHapgRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmCreateHapgRequest)

---

##### `createHsm` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.createHsm"></a>

```typescript
public createHsm(input: CloudHsmCreateHsmRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmCreateHsmRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmCreateHsmRequest)

---

##### `createLunaClient` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.createLunaClient"></a>

```typescript
public createLunaClient(input: CloudHsmCreateLunaClientRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmCreateLunaClientRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmCreateLunaClientRequest)

---

##### `deleteHapg` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.deleteHapg"></a>

```typescript
public deleteHapg(input: CloudHsmDeleteHapgRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmDeleteHapgRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmDeleteHapgRequest)

---

##### `deleteHsm` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.deleteHsm"></a>

```typescript
public deleteHsm(input: CloudHsmDeleteHsmRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmDeleteHsmRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmDeleteHsmRequest)

---

##### `deleteLunaClient` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.deleteLunaClient"></a>

```typescript
public deleteLunaClient(input: CloudHsmDeleteLunaClientRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmDeleteLunaClientRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmDeleteLunaClientRequest)

---

##### `describeHapg` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.describeHapg"></a>

```typescript
public describeHapg(input: CloudHsmDescribeHapgRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgRequest)

---

##### `describeHsm` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.describeHsm"></a>

```typescript
public describeHsm(input: CloudHsmDescribeHsmRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmRequest)

---

##### `describeLunaClient` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.describeLunaClient"></a>

```typescript
public describeLunaClient(input: CloudHsmDescribeLunaClientRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmDescribeLunaClientRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmDescribeLunaClientRequest)

---

##### `fetchConfig` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.fetchConfig"></a>

```typescript
public fetchConfig(input: CloudHsmGetConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmGetConfigRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmGetConfigRequest)

---

##### `listAvailableZones` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.listAvailableZones"></a>

```typescript
public listAvailableZones()
```

##### `listHapgs` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.listHapgs"></a>

```typescript
public listHapgs(input: CloudHsmListHapgsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmListHapgsRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmListHapgsRequest)

---

##### `listHsms` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.listHsms"></a>

```typescript
public listHsms(input: CloudHsmListHsmsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmListHsmsRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmListHsmsRequest)

---

##### `listLunaClients` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.listLunaClients"></a>

```typescript
public listLunaClients(input: CloudHsmListLunaClientsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmListLunaClientsRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmListLunaClientsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: CloudHsmListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmListTagsForResourceRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmListTagsForResourceRequest)

---

##### `modifyHapg` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.modifyHapg"></a>

```typescript
public modifyHapg(input: CloudHsmModifyHapgRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmModifyHapgRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmModifyHapgRequest)

---

##### `modifyHsm` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.modifyHsm"></a>

```typescript
public modifyHsm(input: CloudHsmModifyHsmRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmModifyHsmRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmModifyHsmRequest)

---

##### `modifyLunaClient` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.modifyLunaClient"></a>

```typescript
public modifyLunaClient(input: CloudHsmModifyLunaClientRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmModifyLunaClientRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmModifyLunaClientRequest)

---

##### `removeTagsFromResource` <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.removeTagsFromResource"></a>

```typescript
public removeTagsFromResource(input: CloudHsmRemoveTagsFromResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmRemoveTagsFromResourceRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmRemoveTagsFromResourceRequest)

---




## Structs <a name="Structs"></a>

### CloudHsmAddTagsToResourceRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmAddTagsToResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmAddTagsToResourceRequest: cloudhsm.CloudHsmAddTagsToResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmAddTagsToResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmAddTagsToResourceRequest.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmTag`](#aws-cdk-sdk.cloudhsm.CloudHsmTag)[]

---

### CloudHsmAddTagsToResourceResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmAddTagsToResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmAddTagsToResourceResponse: cloudhsm.CloudHsmAddTagsToResourceResponse = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmAddTagsToResourceResponse.property.status"></a>

- *Type:* `string`

---

### CloudHsmCreateHapgRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateHapgRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmCreateHapgRequest: cloudhsm.CloudHsmCreateHapgRequest = { ... }
```

##### `label`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateHapgRequest.property.label"></a>

- *Type:* `string`

---

### CloudHsmCreateHapgResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateHapgResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmCreateHapgResponse: cloudhsm.CloudHsmCreateHapgResponse = { ... }
```

##### `hapgArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateHapgResponse.property.hapgArn"></a>

- *Type:* `string`

---

### CloudHsmCreateHsmRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateHsmRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmCreateHsmRequest: cloudhsm.CloudHsmCreateHsmRequest = { ... }
```

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateHsmRequest.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `sshKey`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateHsmRequest.property.sshKey"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateHsmRequest.property.subnetId"></a>

- *Type:* `string`

---

##### `subscriptionType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateHsmRequest.property.subscriptionType"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateHsmRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `eniIp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateHsmRequest.property.eniIp"></a>

- *Type:* `string`

---

##### `externalId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateHsmRequest.property.externalId"></a>

- *Type:* `string`

---

##### `syslogIp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateHsmRequest.property.syslogIp"></a>

- *Type:* `string`

---

### CloudHsmCreateHsmResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateHsmResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmCreateHsmResponse: cloudhsm.CloudHsmCreateHsmResponse = { ... }
```

##### `hsmArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateHsmResponse.property.hsmArn"></a>

- *Type:* `string`

---

### CloudHsmCreateLunaClientRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateLunaClientRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmCreateLunaClientRequest: cloudhsm.CloudHsmCreateLunaClientRequest = { ... }
```

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateLunaClientRequest.property.certificate"></a>

- *Type:* `string`

---

##### `label`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateLunaClientRequest.property.label"></a>

- *Type:* `string`

---

### CloudHsmCreateLunaClientResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateLunaClientResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmCreateLunaClientResponse: cloudhsm.CloudHsmCreateLunaClientResponse = { ... }
```

##### `clientArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmCreateLunaClientResponse.property.clientArn"></a>

- *Type:* `string`

---

### CloudHsmDeleteHapgRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmDeleteHapgRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmDeleteHapgRequest: cloudhsm.CloudHsmDeleteHapgRequest = { ... }
```

##### `hapgArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDeleteHapgRequest.property.hapgArn"></a>

- *Type:* `string`

---

### CloudHsmDeleteHapgResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmDeleteHapgResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmDeleteHapgResponse: cloudhsm.CloudHsmDeleteHapgResponse = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDeleteHapgResponse.property.status"></a>

- *Type:* `string`

---

### CloudHsmDeleteHsmRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmDeleteHsmRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmDeleteHsmRequest: cloudhsm.CloudHsmDeleteHsmRequest = { ... }
```

##### `hsmArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDeleteHsmRequest.property.hsmArn"></a>

- *Type:* `string`

---

### CloudHsmDeleteHsmResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmDeleteHsmResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmDeleteHsmResponse: cloudhsm.CloudHsmDeleteHsmResponse = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDeleteHsmResponse.property.status"></a>

- *Type:* `string`

---

### CloudHsmDeleteLunaClientRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmDeleteLunaClientRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmDeleteLunaClientRequest: cloudhsm.CloudHsmDeleteLunaClientRequest = { ... }
```

##### `clientArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDeleteLunaClientRequest.property.clientArn"></a>

- *Type:* `string`

---

### CloudHsmDeleteLunaClientResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmDeleteLunaClientResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmDeleteLunaClientResponse: cloudhsm.CloudHsmDeleteLunaClientResponse = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDeleteLunaClientResponse.property.status"></a>

- *Type:* `string`

---

### CloudHsmDescribeHapgRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmDescribeHapgRequest: cloudhsm.CloudHsmDescribeHapgRequest = { ... }
```

##### `hapgArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgRequest.property.hapgArn"></a>

- *Type:* `string`

---

### CloudHsmDescribeHapgResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmDescribeHapgResponse: cloudhsm.CloudHsmDescribeHapgResponse = { ... }
```

##### `hapgArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgResponse.property.hapgArn"></a>

- *Type:* `string`

---

##### `hapgSerial`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgResponse.property.hapgSerial"></a>

- *Type:* `string`

---

##### `hsmsLastActionFailed`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgResponse.property.hsmsLastActionFailed"></a>

- *Type:* `string`[]

---

##### `hsmsPendingDeletion`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgResponse.property.hsmsPendingDeletion"></a>

- *Type:* `string`[]

---

##### `hsmsPendingRegistration`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgResponse.property.hsmsPendingRegistration"></a>

- *Type:* `string`[]

---

##### `label`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgResponse.property.label"></a>

- *Type:* `string`

---

##### `lastModifiedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgResponse.property.lastModifiedTimestamp"></a>

- *Type:* `string`

---

##### `partitionSerialList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgResponse.property.partitionSerialList"></a>

- *Type:* `string`[]

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgResponse.property.state"></a>

- *Type:* `string`

---

### CloudHsmDescribeHsmRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmDescribeHsmRequest: cloudhsm.CloudHsmDescribeHsmRequest = { ... }
```

##### `hsmArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmRequest.property.hsmArn"></a>

- *Type:* `string`

---

##### `hsmSerialNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmRequest.property.hsmSerialNumber"></a>

- *Type:* `string`

---

### CloudHsmDescribeHsmResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmDescribeHsmResponse: cloudhsm.CloudHsmDescribeHsmResponse = { ... }
```

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.availabilityZone"></a>

- *Type:* `string`

---

##### `eniId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.eniId"></a>

- *Type:* `string`

---

##### `eniIp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.eniIp"></a>

- *Type:* `string`

---

##### `hsmArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.hsmArn"></a>

- *Type:* `string`

---

##### `hsmType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.hsmType"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `partitions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.partitions"></a>

- *Type:* `string`[]

---

##### `serialNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.serialNumber"></a>

- *Type:* `string`

---

##### `serverCertLastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.serverCertLastUpdated"></a>

- *Type:* `string`

---

##### `serverCertUri`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.serverCertUri"></a>

- *Type:* `string`

---

##### `softwareVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.softwareVersion"></a>

- *Type:* `string`

---

##### `sshKeyLastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.sshKeyLastUpdated"></a>

- *Type:* `string`

---

##### `sshPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.sshPublicKey"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.statusDetails"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.subnetId"></a>

- *Type:* `string`

---

##### `subscriptionEndDate`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.subscriptionEndDate"></a>

- *Type:* `string`

---

##### `subscriptionStartDate`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.subscriptionStartDate"></a>

- *Type:* `string`

---

##### `subscriptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.subscriptionType"></a>

- *Type:* `string`

---

##### `vendorName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.vendorName"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmResponse.property.vpcId"></a>

- *Type:* `string`

---

### CloudHsmDescribeLunaClientRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeLunaClientRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmDescribeLunaClientRequest: cloudhsm.CloudHsmDescribeLunaClientRequest = { ... }
```

##### `certificateFingerprint`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeLunaClientRequest.property.certificateFingerprint"></a>

- *Type:* `string`

---

##### `clientArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeLunaClientRequest.property.clientArn"></a>

- *Type:* `string`

---

### CloudHsmDescribeLunaClientResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeLunaClientResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmDescribeLunaClientResponse: cloudhsm.CloudHsmDescribeLunaClientResponse = { ... }
```

##### `certificate`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeLunaClientResponse.property.certificate"></a>

- *Type:* `string`

---

##### `certificateFingerprint`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeLunaClientResponse.property.certificateFingerprint"></a>

- *Type:* `string`

---

##### `clientArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeLunaClientResponse.property.clientArn"></a>

- *Type:* `string`

---

##### `label`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeLunaClientResponse.property.label"></a>

- *Type:* `string`

---

##### `lastModifiedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmDescribeLunaClientResponse.property.lastModifiedTimestamp"></a>

- *Type:* `string`

---

### CloudHsmGetConfigRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmGetConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmGetConfigRequest: cloudhsm.CloudHsmGetConfigRequest = { ... }
```

##### `clientArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmGetConfigRequest.property.clientArn"></a>

- *Type:* `string`

---

##### `clientVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmGetConfigRequest.property.clientVersion"></a>

- *Type:* `string`

---

##### `hapgList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmGetConfigRequest.property.hapgList"></a>

- *Type:* `string`[]

---

### CloudHsmGetConfigResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmGetConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmGetConfigResponse: cloudhsm.CloudHsmGetConfigResponse = { ... }
```

##### `configCred`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmGetConfigResponse.property.configCred"></a>

- *Type:* `string`

---

##### `configFile`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmGetConfigResponse.property.configFile"></a>

- *Type:* `string`

---

##### `configType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmGetConfigResponse.property.configType"></a>

- *Type:* `string`

---

### CloudHsmListAvailableZonesRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmListAvailableZonesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmListAvailableZonesRequest: cloudhsm.CloudHsmListAvailableZonesRequest = { ... }
```

### CloudHsmListAvailableZonesResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmListAvailableZonesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmListAvailableZonesResponse: cloudhsm.CloudHsmListAvailableZonesResponse = { ... }
```

##### `azList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmListAvailableZonesResponse.property.azList"></a>

- *Type:* `string`[]

---

### CloudHsmListHapgsRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmListHapgsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmListHapgsRequest: cloudhsm.CloudHsmListHapgsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmListHapgsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudHsmListHapgsResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmListHapgsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmListHapgsResponse: cloudhsm.CloudHsmListHapgsResponse = { ... }
```

##### `hapgList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmListHapgsResponse.property.hapgList"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmListHapgsResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudHsmListHsmsRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmListHsmsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmListHsmsRequest: cloudhsm.CloudHsmListHsmsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmListHsmsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudHsmListHsmsResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmListHsmsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmListHsmsResponse: cloudhsm.CloudHsmListHsmsResponse = { ... }
```

##### `hsmList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmListHsmsResponse.property.hsmList"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmListHsmsResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudHsmListLunaClientsRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmListLunaClientsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmListLunaClientsRequest: cloudhsm.CloudHsmListLunaClientsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmListLunaClientsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudHsmListLunaClientsResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmListLunaClientsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmListLunaClientsResponse: cloudhsm.CloudHsmListLunaClientsResponse = { ... }
```

##### `clientList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmListLunaClientsResponse.property.clientList"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmListLunaClientsResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudHsmListTagsForResourceRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmListTagsForResourceRequest: cloudhsm.CloudHsmListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### CloudHsmListTagsForResourceResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmListTagsForResourceResponse: cloudhsm.CloudHsmListTagsForResourceResponse = { ... }
```

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmListTagsForResourceResponse.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmTag`](#aws-cdk-sdk.cloudhsm.CloudHsmTag)[]

---

### CloudHsmModifyHapgRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyHapgRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmModifyHapgRequest: cloudhsm.CloudHsmModifyHapgRequest = { ... }
```

##### `hapgArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyHapgRequest.property.hapgArn"></a>

- *Type:* `string`

---

##### `label`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyHapgRequest.property.label"></a>

- *Type:* `string`

---

##### `partitionSerialList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyHapgRequest.property.partitionSerialList"></a>

- *Type:* `string`[]

---

### CloudHsmModifyHapgResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyHapgResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmModifyHapgResponse: cloudhsm.CloudHsmModifyHapgResponse = { ... }
```

##### `hapgArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyHapgResponse.property.hapgArn"></a>

- *Type:* `string`

---

### CloudHsmModifyHsmRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyHsmRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmModifyHsmRequest: cloudhsm.CloudHsmModifyHsmRequest = { ... }
```

##### `hsmArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyHsmRequest.property.hsmArn"></a>

- *Type:* `string`

---

##### `eniIp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyHsmRequest.property.eniIp"></a>

- *Type:* `string`

---

##### `externalId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyHsmRequest.property.externalId"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyHsmRequest.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyHsmRequest.property.subnetId"></a>

- *Type:* `string`

---

##### `syslogIp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyHsmRequest.property.syslogIp"></a>

- *Type:* `string`

---

### CloudHsmModifyHsmResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyHsmResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmModifyHsmResponse: cloudhsm.CloudHsmModifyHsmResponse = { ... }
```

##### `hsmArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyHsmResponse.property.hsmArn"></a>

- *Type:* `string`

---

### CloudHsmModifyLunaClientRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyLunaClientRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmModifyLunaClientRequest: cloudhsm.CloudHsmModifyLunaClientRequest = { ... }
```

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyLunaClientRequest.property.certificate"></a>

- *Type:* `string`

---

##### `clientArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyLunaClientRequest.property.clientArn"></a>

- *Type:* `string`

---

### CloudHsmModifyLunaClientResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyLunaClientResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmModifyLunaClientResponse: cloudhsm.CloudHsmModifyLunaClientResponse = { ... }
```

##### `clientArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmModifyLunaClientResponse.property.clientArn"></a>

- *Type:* `string`

---

### CloudHsmRemoveTagsFromResourceRequest <a name="aws-cdk-sdk.cloudhsm.CloudHsmRemoveTagsFromResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmRemoveTagsFromResourceRequest: cloudhsm.CloudHsmRemoveTagsFromResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmRemoveTagsFromResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeyList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmRemoveTagsFromResourceRequest.property.tagKeyList"></a>

- *Type:* `string`[]

---

### CloudHsmRemoveTagsFromResourceResponse <a name="aws-cdk-sdk.cloudhsm.CloudHsmRemoveTagsFromResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmRemoveTagsFromResourceResponse: cloudhsm.CloudHsmRemoveTagsFromResourceResponse = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmRemoveTagsFromResourceResponse.property.status"></a>

- *Type:* `string`

---

### CloudHsmTag <a name="aws-cdk-sdk.cloudhsm.CloudHsmTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

const cloudHsmTag: cloudhsm.CloudHsmTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHsmTag.property.value"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### CloudHSMResponsesAddTagsToResource <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesAddTagsToResource"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesAddTagsToResource.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesAddTagsToResource(__scope: Construct, __resources: string[], __input: CloudHsmAddTagsToResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesAddTagsToResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesAddTagsToResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesAddTagsToResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmAddTagsToResourceRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmAddTagsToResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesAddTagsToResource.property.status"></a>

- *Type:* `string`

---


### CloudHSMResponsesCreateHapg <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateHapg"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateHapg.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesCreateHapg(__scope: Construct, __resources: string[], __input: CloudHsmCreateHapgRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateHapg.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateHapg.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateHapg.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmCreateHapgRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmCreateHapgRequest)

---



#### Properties <a name="Properties"></a>

##### `hapgArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateHapg.property.hapgArn"></a>

- *Type:* `string`

---


### CloudHSMResponsesCreateHsm <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateHsm"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateHsm.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesCreateHsm(__scope: Construct, __resources: string[], __input: CloudHsmCreateHsmRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateHsm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateHsm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateHsm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmCreateHsmRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmCreateHsmRequest)

---



#### Properties <a name="Properties"></a>

##### `hsmArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateHsm.property.hsmArn"></a>

- *Type:* `string`

---


### CloudHSMResponsesCreateLunaClient <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateLunaClient"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateLunaClient.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesCreateLunaClient(__scope: Construct, __resources: string[], __input: CloudHsmCreateLunaClientRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateLunaClient.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateLunaClient.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateLunaClient.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmCreateLunaClientRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmCreateLunaClientRequest)

---



#### Properties <a name="Properties"></a>

##### `clientArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesCreateLunaClient.property.clientArn"></a>

- *Type:* `string`

---


### CloudHSMResponsesDeleteHapg <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteHapg"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteHapg.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesDeleteHapg(__scope: Construct, __resources: string[], __input: CloudHsmDeleteHapgRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteHapg.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteHapg.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteHapg.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmDeleteHapgRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmDeleteHapgRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteHapg.property.status"></a>

- *Type:* `string`

---


### CloudHSMResponsesDeleteHsm <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteHsm"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteHsm.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesDeleteHsm(__scope: Construct, __resources: string[], __input: CloudHsmDeleteHsmRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteHsm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteHsm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteHsm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmDeleteHsmRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmDeleteHsmRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteHsm.property.status"></a>

- *Type:* `string`

---


### CloudHSMResponsesDeleteLunaClient <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteLunaClient"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteLunaClient.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesDeleteLunaClient(__scope: Construct, __resources: string[], __input: CloudHsmDeleteLunaClientRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteLunaClient.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteLunaClient.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteLunaClient.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmDeleteLunaClientRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmDeleteLunaClientRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDeleteLunaClient.property.status"></a>

- *Type:* `string`

---


### CloudHSMResponsesDescribeHapg <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHapg"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHapg.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesDescribeHapg(__scope: Construct, __resources: string[], __input: CloudHsmDescribeHapgRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHapg.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHapg.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHapg.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmDescribeHapgRequest)

---



#### Properties <a name="Properties"></a>

##### `hapgArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHapg.property.hapgArn"></a>

- *Type:* `string`

---

##### `hapgSerial`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHapg.property.hapgSerial"></a>

- *Type:* `string`

---

##### `hsmsLastActionFailed`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHapg.property.hsmsLastActionFailed"></a>

- *Type:* `string`[]

---

##### `hsmsPendingDeletion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHapg.property.hsmsPendingDeletion"></a>

- *Type:* `string`[]

---

##### `hsmsPendingRegistration`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHapg.property.hsmsPendingRegistration"></a>

- *Type:* `string`[]

---

##### `label`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHapg.property.label"></a>

- *Type:* `string`

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHapg.property.lastModifiedTimestamp"></a>

- *Type:* `string`

---

##### `partitionSerialList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHapg.property.partitionSerialList"></a>

- *Type:* `string`[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHapg.property.state"></a>

- *Type:* `string`

---


### CloudHSMResponsesDescribeHsm <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesDescribeHsm(__scope: Construct, __resources: string[], __input: CloudHsmDescribeHsmRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmDescribeHsmRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.availabilityZone"></a>

- *Type:* `string`

---

##### `eniId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.eniId"></a>

- *Type:* `string`

---

##### `eniIp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.eniIp"></a>

- *Type:* `string`

---

##### `hsmArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.hsmArn"></a>

- *Type:* `string`

---

##### `hsmType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.hsmType"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `partitions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.partitions"></a>

- *Type:* `string`[]

---

##### `serialNumber`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.serialNumber"></a>

- *Type:* `string`

---

##### `serverCertLastUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.serverCertLastUpdated"></a>

- *Type:* `string`

---

##### `serverCertUri`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.serverCertUri"></a>

- *Type:* `string`

---

##### `softwareVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.softwareVersion"></a>

- *Type:* `string`

---

##### `sshKeyLastUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.sshKeyLastUpdated"></a>

- *Type:* `string`

---

##### `sshPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.sshPublicKey"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.statusDetails"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.subnetId"></a>

- *Type:* `string`

---

##### `subscriptionEndDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.subscriptionEndDate"></a>

- *Type:* `string`

---

##### `subscriptionStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.subscriptionStartDate"></a>

- *Type:* `string`

---

##### `subscriptionType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.subscriptionType"></a>

- *Type:* `string`

---

##### `vendorName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.vendorName"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeHsm.property.vpcId"></a>

- *Type:* `string`

---


### CloudHSMResponsesDescribeLunaClient <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeLunaClient"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeLunaClient.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesDescribeLunaClient(__scope: Construct, __resources: string[], __input: CloudHsmDescribeLunaClientRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeLunaClient.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeLunaClient.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeLunaClient.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmDescribeLunaClientRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmDescribeLunaClientRequest)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeLunaClient.property.certificate"></a>

- *Type:* `string`

---

##### `certificateFingerprint`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeLunaClient.property.certificateFingerprint"></a>

- *Type:* `string`

---

##### `clientArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeLunaClient.property.clientArn"></a>

- *Type:* `string`

---

##### `label`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeLunaClient.property.label"></a>

- *Type:* `string`

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesDescribeLunaClient.property.lastModifiedTimestamp"></a>

- *Type:* `string`

---


### CloudHSMResponsesFetchConfig <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesFetchConfig"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesFetchConfig.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesFetchConfig(__scope: Construct, __resources: string[], __input: CloudHsmGetConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesFetchConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesFetchConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesFetchConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmGetConfigRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmGetConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `configCred`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesFetchConfig.property.configCred"></a>

- *Type:* `string`

---

##### `configFile`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesFetchConfig.property.configFile"></a>

- *Type:* `string`

---

##### `configType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesFetchConfig.property.configType"></a>

- *Type:* `string`

---


### CloudHSMResponsesListAvailableZones <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListAvailableZones"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListAvailableZones.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesListAvailableZones(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListAvailableZones.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListAvailableZones.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `azList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListAvailableZones.property.azList"></a>

- *Type:* `string`[]

---


### CloudHSMResponsesListHapgs <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListHapgs"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListHapgs.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesListHapgs(__scope: Construct, __resources: string[], __input: CloudHsmListHapgsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListHapgs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListHapgs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListHapgs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmListHapgsRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmListHapgsRequest)

---



#### Properties <a name="Properties"></a>

##### `hapgList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListHapgs.property.hapgList"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListHapgs.property.nextToken"></a>

- *Type:* `string`

---


### CloudHSMResponsesListHsms <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListHsms"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListHsms.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesListHsms(__scope: Construct, __resources: string[], __input: CloudHsmListHsmsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListHsms.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListHsms.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListHsms.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmListHsmsRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmListHsmsRequest)

---



#### Properties <a name="Properties"></a>

##### `hsmList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListHsms.property.hsmList"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListHsms.property.nextToken"></a>

- *Type:* `string`

---


### CloudHSMResponsesListLunaClients <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListLunaClients"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListLunaClients.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesListLunaClients(__scope: Construct, __resources: string[], __input: CloudHsmListLunaClientsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListLunaClients.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListLunaClients.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListLunaClients.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmListLunaClientsRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmListLunaClientsRequest)

---



#### Properties <a name="Properties"></a>

##### `clientList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListLunaClients.property.clientList"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListLunaClients.property.nextToken"></a>

- *Type:* `string`

---


### CloudHSMResponsesListTagsForResource <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListTagsForResource.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: CloudHsmListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmListTagsForResourceRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesListTagsForResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmTag`](#aws-cdk-sdk.cloudhsm.CloudHsmTag)[]

---


### CloudHSMResponsesModifyHapg <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyHapg"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyHapg.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesModifyHapg(__scope: Construct, __resources: string[], __input: CloudHsmModifyHapgRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyHapg.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyHapg.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyHapg.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmModifyHapgRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmModifyHapgRequest)

---



#### Properties <a name="Properties"></a>

##### `hapgArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyHapg.property.hapgArn"></a>

- *Type:* `string`

---


### CloudHSMResponsesModifyHsm <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyHsm"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyHsm.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesModifyHsm(__scope: Construct, __resources: string[], __input: CloudHsmModifyHsmRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyHsm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyHsm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyHsm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmModifyHsmRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmModifyHsmRequest)

---



#### Properties <a name="Properties"></a>

##### `hsmArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyHsm.property.hsmArn"></a>

- *Type:* `string`

---


### CloudHSMResponsesModifyLunaClient <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyLunaClient"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyLunaClient.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesModifyLunaClient(__scope: Construct, __resources: string[], __input: CloudHsmModifyLunaClientRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyLunaClient.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyLunaClient.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyLunaClient.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmModifyLunaClientRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmModifyLunaClientRequest)

---



#### Properties <a name="Properties"></a>

##### `clientArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesModifyLunaClient.property.clientArn"></a>

- *Type:* `string`

---


### CloudHSMResponsesRemoveTagsFromResource <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesRemoveTagsFromResource"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesRemoveTagsFromResource.Initializer"></a>

```typescript
import { cloudhsm } from 'aws-cdk-sdk'

new cloudhsm.CloudHSMResponsesRemoveTagsFromResource(__scope: Construct, __resources: string[], __input: CloudHsmRemoveTagsFromResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesRemoveTagsFromResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesRemoveTagsFromResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesRemoveTagsFromResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsm.CloudHsmRemoveTagsFromResourceRequest`](#aws-cdk-sdk.cloudhsm.CloudHsmRemoveTagsFromResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsm.CloudHSMResponsesRemoveTagsFromResource.property.status"></a>

- *Type:* `string`

---



