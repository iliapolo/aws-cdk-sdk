# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### OpsWorksCmClient <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCmClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateNode` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.associateNode"></a>

```typescript
public associateNode(input: OpsWorksCmAssociateNodeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmAssociateNodeRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmAssociateNodeRequest)

---

##### `createBackup` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.createBackup"></a>

```typescript
public createBackup(input: OpsWorksCmCreateBackupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmCreateBackupRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmCreateBackupRequest)

---

##### `createServer` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.createServer"></a>

```typescript
public createServer(input: OpsWorksCmCreateServerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest)

---

##### `deleteBackup` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.deleteBackup"></a>

```typescript
public deleteBackup(input: OpsWorksCmDeleteBackupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmDeleteBackupRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmDeleteBackupRequest)

---

##### `deleteServer` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.deleteServer"></a>

```typescript
public deleteServer(input: OpsWorksCmDeleteServerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmDeleteServerRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmDeleteServerRequest)

---

##### `describeAccountAttributes` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.describeAccountAttributes"></a>

```typescript
public describeAccountAttributes()
```

##### `describeBackups` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.describeBackups"></a>

```typescript
public describeBackups(input: OpsWorksCmDescribeBackupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeBackupsRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeBackupsRequest)

---

##### `describeEvents` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.describeEvents"></a>

```typescript
public describeEvents(input: OpsWorksCmDescribeEventsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeEventsRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeEventsRequest)

---

##### `describeNodeAssociationStatus` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.describeNodeAssociationStatus"></a>

```typescript
public describeNodeAssociationStatus(input: OpsWorksCmDescribeNodeAssociationStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeNodeAssociationStatusRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeNodeAssociationStatusRequest)

---

##### `describeServers` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.describeServers"></a>

```typescript
public describeServers(input: OpsWorksCmDescribeServersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeServersRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeServersRequest)

---

##### `disassociateNode` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.disassociateNode"></a>

```typescript
public disassociateNode(input: OpsWorksCmDisassociateNodeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmDisassociateNodeRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmDisassociateNodeRequest)

---

##### `exportServerEngineAttribute` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.exportServerEngineAttribute"></a>

```typescript
public exportServerEngineAttribute(input: OpsWorksCmExportServerEngineAttributeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmExportServerEngineAttributeRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmExportServerEngineAttributeRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: OpsWorksCmListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmListTagsForResourceRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmListTagsForResourceRequest)

---

##### `restoreServer` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.restoreServer"></a>

```typescript
public restoreServer(input: OpsWorksCmRestoreServerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmRestoreServerRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmRestoreServerRequest)

---

##### `startMaintenance` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.startMaintenance"></a>

```typescript
public startMaintenance(input: OpsWorksCmStartMaintenanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmStartMaintenanceRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmStartMaintenanceRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.tagResource"></a>

```typescript
public tagResource(input: OpsWorksCmTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmTagResourceRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.untagResource"></a>

```typescript
public untagResource(input: OpsWorksCmUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmUntagResourceRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmUntagResourceRequest)

---

##### `updateServer` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.updateServer"></a>

```typescript
public updateServer(input: OpsWorksCmUpdateServerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerRequest)

---

##### `updateServerEngineAttributes` <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.updateServerEngineAttributes"></a>

```typescript
public updateServerEngineAttributes(input: OpsWorksCmUpdateServerEngineAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerEngineAttributesRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerEngineAttributesRequest)

---




## Structs <a name="Structs"></a>

### OpsWorksCmAccountAttribute <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmAccountAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmAccountAttribute: opsworkscm.OpsWorksCmAccountAttribute = { ... }
```

##### `maximum`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmAccountAttribute.property.maximum"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmAccountAttribute.property.name"></a>

- *Type:* `string`

---

##### `used`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmAccountAttribute.property.used"></a>

- *Type:* `number`

---

### OpsWorksCmAssociateNodeRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmAssociateNodeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmAssociateNodeRequest: opsworkscm.OpsWorksCmAssociateNodeRequest = { ... }
```

##### `engineAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmAssociateNodeRequest.property.engineAttributes"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute)[]

---

##### `nodeName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmAssociateNodeRequest.property.nodeName"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmAssociateNodeRequest.property.serverName"></a>

- *Type:* `string`

---

### OpsWorksCmAssociateNodeResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmAssociateNodeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmAssociateNodeResponse: opsworkscm.OpsWorksCmAssociateNodeResponse = { ... }
```

##### `nodeAssociationStatusToken`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmAssociateNodeResponse.property.nodeAssociationStatusToken"></a>

- *Type:* `string`

---

### OpsWorksCmBackup <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmBackup: opsworkscm.OpsWorksCmBackup = { ... }
```

##### `backupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.backupArn"></a>

- *Type:* `string`

---

##### `backupId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.backupId"></a>

- *Type:* `string`

---

##### `backupType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.backupType"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.description"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.engine"></a>

- *Type:* `string`

---

##### `engineModel`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.engineModel"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.engineVersion"></a>

- *Type:* `string`

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.instanceProfileArn"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.instanceType"></a>

- *Type:* `string`

---

##### `keyPair`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.keyPair"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `s3DataSize`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.s3DataSize"></a>

- *Type:* `number`

---

##### `s3DataUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.s3DataUrl"></a>

- *Type:* `string`

---

##### `s3LogUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.s3LogUrl"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.serverName"></a>

- *Type:* `string`

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.status"></a>

- *Type:* `string`

---

##### `statusDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.statusDescription"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `toolsVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.toolsVersion"></a>

- *Type:* `string`

---

##### `userArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmBackup.property.userArn"></a>

- *Type:* `string`

---

### OpsWorksCmCreateBackupRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateBackupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmCreateBackupRequest: opsworkscm.OpsWorksCmCreateBackupRequest = { ... }
```

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateBackupRequest.property.serverName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateBackupRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateBackupRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmTag`](#aws-cdk-sdk.opsworkscm.OpsWorksCmTag)[]

---

### OpsWorksCmCreateBackupResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateBackupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmCreateBackupResponse: opsworkscm.OpsWorksCmCreateBackupResponse = { ... }
```

##### `backup`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateBackupResponse.property.backup"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmBackup`](#aws-cdk-sdk.opsworkscm.OpsWorksCmBackup)

---

### OpsWorksCmCreateServerRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmCreateServerRequest: opsworkscm.OpsWorksCmCreateServerRequest = { ... }
```

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.engine"></a>

- *Type:* `string`

---

##### `instanceProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.instanceProfileArn"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.instanceType"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.serverName"></a>

- *Type:* `string`

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.associatePublicIpAddress"></a>

- *Type:* `boolean`

---

##### `backupId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.backupId"></a>

- *Type:* `string`

---

##### `backupRetentionCount`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.backupRetentionCount"></a>

- *Type:* `number`

---

##### `customCertificate`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.customCertificate"></a>

- *Type:* `string`

---

##### `customDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.customDomain"></a>

- *Type:* `string`

---

##### `customPrivateKey`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.customPrivateKey"></a>

- *Type:* `string`

---

##### `disableAutomatedBackup`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.disableAutomatedBackup"></a>

- *Type:* `boolean`

---

##### `engineAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.engineAttributes"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute)[]

---

##### `engineModel`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.engineModel"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.engineVersion"></a>

- *Type:* `string`

---

##### `keyPair`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.keyPair"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmTag`](#aws-cdk-sdk.opsworkscm.OpsWorksCmTag)[]

---

### OpsWorksCmCreateServerResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmCreateServerResponse: opsworkscm.OpsWorksCmCreateServerResponse = { ... }
```

##### `server`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerResponse.property.server"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmServer`](#aws-cdk-sdk.opsworkscm.OpsWorksCmServer)

---

### OpsWorksCmDeleteBackupRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDeleteBackupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDeleteBackupRequest: opsworkscm.OpsWorksCmDeleteBackupRequest = { ... }
```

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDeleteBackupRequest.property.backupId"></a>

- *Type:* `string`

---

### OpsWorksCmDeleteBackupResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDeleteBackupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDeleteBackupResponse: opsworkscm.OpsWorksCmDeleteBackupResponse = { ... }
```

### OpsWorksCmDeleteServerRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDeleteServerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDeleteServerRequest: opsworkscm.OpsWorksCmDeleteServerRequest = { ... }
```

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDeleteServerRequest.property.serverName"></a>

- *Type:* `string`

---

### OpsWorksCmDeleteServerResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDeleteServerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDeleteServerResponse: opsworkscm.OpsWorksCmDeleteServerResponse = { ... }
```

### OpsWorksCmDescribeAccountAttributesRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeAccountAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDescribeAccountAttributesRequest: opsworkscm.OpsWorksCmDescribeAccountAttributesRequest = { ... }
```

### OpsWorksCmDescribeAccountAttributesResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeAccountAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDescribeAccountAttributesResponse: opsworkscm.OpsWorksCmDescribeAccountAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeAccountAttributesResponse.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmAccountAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCmAccountAttribute)[]

---

### OpsWorksCmDescribeBackupsRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeBackupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDescribeBackupsRequest: opsworkscm.OpsWorksCmDescribeBackupsRequest = { ... }
```

##### `backupId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeBackupsRequest.property.backupId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeBackupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeBackupsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeBackupsRequest.property.serverName"></a>

- *Type:* `string`

---

### OpsWorksCmDescribeBackupsResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeBackupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDescribeBackupsResponse: opsworkscm.OpsWorksCmDescribeBackupsResponse = { ... }
```

##### `backups`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeBackupsResponse.property.backups"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmBackup`](#aws-cdk-sdk.opsworkscm.OpsWorksCmBackup)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeBackupsResponse.property.nextToken"></a>

- *Type:* `string`

---

### OpsWorksCmDescribeEventsRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeEventsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDescribeEventsRequest: opsworkscm.OpsWorksCmDescribeEventsRequest = { ... }
```

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeEventsRequest.property.serverName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeEventsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeEventsRequest.property.nextToken"></a>

- *Type:* `string`

---

### OpsWorksCmDescribeEventsResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeEventsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDescribeEventsResponse: opsworkscm.OpsWorksCmDescribeEventsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeEventsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `serverEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeEventsResponse.property.serverEvents"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmServerEvent`](#aws-cdk-sdk.opsworkscm.OpsWorksCmServerEvent)[]

---

### OpsWorksCmDescribeNodeAssociationStatusRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeNodeAssociationStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDescribeNodeAssociationStatusRequest: opsworkscm.OpsWorksCmDescribeNodeAssociationStatusRequest = { ... }
```

##### `nodeAssociationStatusToken`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeNodeAssociationStatusRequest.property.nodeAssociationStatusToken"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeNodeAssociationStatusRequest.property.serverName"></a>

- *Type:* `string`

---

### OpsWorksCmDescribeNodeAssociationStatusResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeNodeAssociationStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDescribeNodeAssociationStatusResponse: opsworkscm.OpsWorksCmDescribeNodeAssociationStatusResponse = { ... }
```

##### `engineAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeNodeAssociationStatusResponse.property.engineAttributes"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute)[]

---

##### `nodeAssociationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeNodeAssociationStatusResponse.property.nodeAssociationStatus"></a>

- *Type:* `string`

---

### OpsWorksCmDescribeServersRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeServersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDescribeServersRequest: opsworkscm.OpsWorksCmDescribeServersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeServersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeServersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeServersRequest.property.serverName"></a>

- *Type:* `string`

---

### OpsWorksCmDescribeServersResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeServersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDescribeServersResponse: opsworkscm.OpsWorksCmDescribeServersResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeServersResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `servers`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeServersResponse.property.servers"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmServer`](#aws-cdk-sdk.opsworkscm.OpsWorksCmServer)[]

---

### OpsWorksCmDisassociateNodeRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDisassociateNodeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDisassociateNodeRequest: opsworkscm.OpsWorksCmDisassociateNodeRequest = { ... }
```

##### `nodeName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDisassociateNodeRequest.property.nodeName"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDisassociateNodeRequest.property.serverName"></a>

- *Type:* `string`

---

##### `engineAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDisassociateNodeRequest.property.engineAttributes"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute)[]

---

### OpsWorksCmDisassociateNodeResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDisassociateNodeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmDisassociateNodeResponse: opsworkscm.OpsWorksCmDisassociateNodeResponse = { ... }
```

##### `nodeAssociationStatusToken`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmDisassociateNodeResponse.property.nodeAssociationStatusToken"></a>

- *Type:* `string`

---

### OpsWorksCmEngineAttribute <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmEngineAttribute: opsworkscm.OpsWorksCmEngineAttribute = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute.property.value"></a>

- *Type:* `string`

---

### OpsWorksCmExportServerEngineAttributeRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmExportServerEngineAttributeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmExportServerEngineAttributeRequest: opsworkscm.OpsWorksCmExportServerEngineAttributeRequest = { ... }
```

##### `exportAttributeName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmExportServerEngineAttributeRequest.property.exportAttributeName"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmExportServerEngineAttributeRequest.property.serverName"></a>

- *Type:* `string`

---

##### `inputAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmExportServerEngineAttributeRequest.property.inputAttributes"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute)[]

---

### OpsWorksCmExportServerEngineAttributeResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmExportServerEngineAttributeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmExportServerEngineAttributeResponse: opsworkscm.OpsWorksCmExportServerEngineAttributeResponse = { ... }
```

##### `engineAttribute`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmExportServerEngineAttributeResponse.property.engineAttribute"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute)

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmExportServerEngineAttributeResponse.property.serverName"></a>

- *Type:* `string`

---

### OpsWorksCmListTagsForResourceRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmListTagsForResourceRequest: opsworkscm.OpsWorksCmListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmListTagsForResourceRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmListTagsForResourceRequest.property.nextToken"></a>

- *Type:* `string`

---

### OpsWorksCmListTagsForResourceResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmListTagsForResourceResponse: opsworkscm.OpsWorksCmListTagsForResourceResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmListTagsForResourceResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmTag`](#aws-cdk-sdk.opsworkscm.OpsWorksCmTag)[]

---

### OpsWorksCmRestoreServerRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmRestoreServerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmRestoreServerRequest: opsworkscm.OpsWorksCmRestoreServerRequest = { ... }
```

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmRestoreServerRequest.property.backupId"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmRestoreServerRequest.property.serverName"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmRestoreServerRequest.property.instanceType"></a>

- *Type:* `string`

---

##### `keyPair`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmRestoreServerRequest.property.keyPair"></a>

- *Type:* `string`

---

### OpsWorksCmRestoreServerResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmRestoreServerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmRestoreServerResponse: opsworkscm.OpsWorksCmRestoreServerResponse = { ... }
```

### OpsWorksCmServer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmServer: opsworkscm.OpsWorksCmServer = { ... }
```

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.associatePublicIpAddress"></a>

- *Type:* `boolean`

---

##### `backupRetentionCount`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.backupRetentionCount"></a>

- *Type:* `number`

---

##### `cloudFormationStackArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.cloudFormationStackArn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.createdAt"></a>

- *Type:* `string`

---

##### `customDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.customDomain"></a>

- *Type:* `string`

---

##### `disableAutomatedBackup`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.disableAutomatedBackup"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.engine"></a>

- *Type:* `string`

---

##### `engineAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.engineAttributes"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute)[]

---

##### `engineModel`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.engineModel"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.engineVersion"></a>

- *Type:* `string`

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.instanceProfileArn"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.instanceType"></a>

- *Type:* `string`

---

##### `keyPair`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.keyPair"></a>

- *Type:* `string`

---

##### `maintenanceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.maintenanceStatus"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `serverArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.serverArn"></a>

- *Type:* `string`

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.serverName"></a>

- *Type:* `string`

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.statusReason"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServer.property.subnetIds"></a>

- *Type:* `string`[]

---

### OpsWorksCmServerEvent <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServerEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmServerEvent: opsworkscm.OpsWorksCmServerEvent = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServerEvent.property.createdAt"></a>

- *Type:* `string`

---

##### `logUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServerEvent.property.logUrl"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServerEvent.property.message"></a>

- *Type:* `string`

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmServerEvent.property.serverName"></a>

- *Type:* `string`

---

### OpsWorksCmStartMaintenanceRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmStartMaintenanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmStartMaintenanceRequest: opsworkscm.OpsWorksCmStartMaintenanceRequest = { ... }
```

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmStartMaintenanceRequest.property.serverName"></a>

- *Type:* `string`

---

##### `engineAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmStartMaintenanceRequest.property.engineAttributes"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute)[]

---

### OpsWorksCmStartMaintenanceResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmStartMaintenanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmStartMaintenanceResponse: opsworkscm.OpsWorksCmStartMaintenanceResponse = { ... }
```

##### `server`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmStartMaintenanceResponse.property.server"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmServer`](#aws-cdk-sdk.opsworkscm.OpsWorksCmServer)

---

### OpsWorksCmTag <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmTag: opsworkscm.OpsWorksCmTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmTag.property.value"></a>

- *Type:* `string`

---

### OpsWorksCmTagResourceRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmTagResourceRequest: opsworkscm.OpsWorksCmTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmTag`](#aws-cdk-sdk.opsworkscm.OpsWorksCmTag)[]

---

### OpsWorksCmTagResourceResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmTagResourceResponse: opsworkscm.OpsWorksCmTagResourceResponse = { ... }
```

### OpsWorksCmUntagResourceRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmUntagResourceRequest: opsworkscm.OpsWorksCmUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### OpsWorksCmUntagResourceResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmUntagResourceResponse: opsworkscm.OpsWorksCmUntagResourceResponse = { ... }
```

### OpsWorksCmUpdateServerEngineAttributesRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerEngineAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmUpdateServerEngineAttributesRequest: opsworkscm.OpsWorksCmUpdateServerEngineAttributesRequest = { ... }
```

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerEngineAttributesRequest.property.attributeName"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerEngineAttributesRequest.property.serverName"></a>

- *Type:* `string`

---

##### `attributeValue`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerEngineAttributesRequest.property.attributeValue"></a>

- *Type:* `string`

---

### OpsWorksCmUpdateServerEngineAttributesResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerEngineAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmUpdateServerEngineAttributesResponse: opsworkscm.OpsWorksCmUpdateServerEngineAttributesResponse = { ... }
```

##### `server`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerEngineAttributesResponse.property.server"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmServer`](#aws-cdk-sdk.opsworkscm.OpsWorksCmServer)

---

### OpsWorksCmUpdateServerRequest <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmUpdateServerRequest: opsworkscm.OpsWorksCmUpdateServerRequest = { ... }
```

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerRequest.property.serverName"></a>

- *Type:* `string`

---

##### `backupRetentionCount`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerRequest.property.backupRetentionCount"></a>

- *Type:* `number`

---

##### `disableAutomatedBackup`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerRequest.property.disableAutomatedBackup"></a>

- *Type:* `boolean`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerRequest.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerRequest.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

### OpsWorksCmUpdateServerResponse <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

const opsWorksCmUpdateServerResponse: opsworkscm.OpsWorksCmUpdateServerResponse = { ... }
```

##### `server`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerResponse.property.server"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmServer`](#aws-cdk-sdk.opsworkscm.OpsWorksCmServer)

---

## Classes <a name="Classes"></a>

### OpsWorksCMResponsesAssociateNode <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesAssociateNode"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesAssociateNode.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesAssociateNode(__scope: Construct, __resources: string[], __input: OpsWorksCmAssociateNodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesAssociateNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesAssociateNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesAssociateNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmAssociateNodeRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmAssociateNodeRequest)

---



#### Properties <a name="Properties"></a>

##### `nodeAssociationStatusToken`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesAssociateNode.property.nodeAssociationStatusToken"></a>

- *Type:* `string`

---


### OpsWorksCMResponsesCreateBackup <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackup"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackup.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesCreateBackup(__scope: Construct, __resources: string[], __input: OpsWorksCmCreateBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmCreateBackupRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmCreateBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `backup`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackup.property.backup"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup`](#aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup)

---


### OpsWorksCMResponsesCreateBackupBackup <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesCreateBackupBackup(__scope: Construct, __resources: string[], __input: OpsWorksCmCreateBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmCreateBackupRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmCreateBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `backupArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.backupArn"></a>

- *Type:* `string`

---

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.backupId"></a>

- *Type:* `string`

---

##### `backupType`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.backupType"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.description"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.engine"></a>

- *Type:* `string`

---

##### `engineModel`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.engineModel"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.engineVersion"></a>

- *Type:* `string`

---

##### `instanceProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.instanceProfileArn"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.instanceType"></a>

- *Type:* `string`

---

##### `keyPair`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.keyPair"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `s3DataSize`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.s3DataSize"></a>

- *Type:* `number`

---

##### `s3DataUrl`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.s3DataUrl"></a>

- *Type:* `string`

---

##### `s3LogUrl`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.s3LogUrl"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.serverName"></a>

- *Type:* `string`

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.status"></a>

- *Type:* `string`

---

##### `statusDescription`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.statusDescription"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `toolsVersion`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.toolsVersion"></a>

- *Type:* `string`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateBackupBackup.property.userArn"></a>

- *Type:* `string`

---


### OpsWorksCMResponsesCreateServer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServer"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServer.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesCreateServer(__scope: Construct, __resources: string[], __input: OpsWorksCmCreateServerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest)

---



#### Properties <a name="Properties"></a>

##### `server`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServer.property.server"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer`](#aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer)

---


### OpsWorksCMResponsesCreateServerServer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesCreateServerServer(__scope: Construct, __resources: string[], __input: OpsWorksCmCreateServerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmCreateServerRequest)

---



#### Properties <a name="Properties"></a>

##### `associatePublicIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.associatePublicIpAddress"></a>

- *Type:* `boolean`

---

##### `backupRetentionCount`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.backupRetentionCount"></a>

- *Type:* `number`

---

##### `cloudFormationStackArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.cloudFormationStackArn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.createdAt"></a>

- *Type:* `string`

---

##### `customDomain`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.customDomain"></a>

- *Type:* `string`

---

##### `disableAutomatedBackup`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.disableAutomatedBackup"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.engine"></a>

- *Type:* `string`

---

##### `engineAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.engineAttributes"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute)[]

---

##### `engineModel`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.engineModel"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.engineVersion"></a>

- *Type:* `string`

---

##### `instanceProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.instanceProfileArn"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.instanceType"></a>

- *Type:* `string`

---

##### `keyPair`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.keyPair"></a>

- *Type:* `string`

---

##### `maintenanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.maintenanceStatus"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `serverArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.serverArn"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.serverName"></a>

- *Type:* `string`

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.statusReason"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesCreateServerServer.property.subnetIds"></a>

- *Type:* `string`[]

---


### OpsWorksCMResponsesDescribeAccountAttributes <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeAccountAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeAccountAttributes.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesDescribeAccountAttributes(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeAccountAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeAccountAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeAccountAttributes.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmAccountAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCmAccountAttribute)[]

---


### OpsWorksCMResponsesDescribeBackups <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeBackups"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeBackups.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesDescribeBackups(__scope: Construct, __resources: string[], __input: OpsWorksCmDescribeBackupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeBackups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeBackups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeBackups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeBackupsRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeBackupsRequest)

---



#### Properties <a name="Properties"></a>

##### `backups`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeBackups.property.backups"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmBackup`](#aws-cdk-sdk.opsworkscm.OpsWorksCmBackup)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeBackups.property.nextToken"></a>

- *Type:* `string`

---


### OpsWorksCMResponsesDescribeEvents <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeEvents"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeEvents.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesDescribeEvents(__scope: Construct, __resources: string[], __input: OpsWorksCmDescribeEventsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeEventsRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeEventsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeEvents.property.nextToken"></a>

- *Type:* `string`

---

##### `serverEvents`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeEvents.property.serverEvents"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmServerEvent`](#aws-cdk-sdk.opsworkscm.OpsWorksCmServerEvent)[]

---


### OpsWorksCMResponsesDescribeNodeAssociationStatus <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeNodeAssociationStatus"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeNodeAssociationStatus.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesDescribeNodeAssociationStatus(__scope: Construct, __resources: string[], __input: OpsWorksCmDescribeNodeAssociationStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeNodeAssociationStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeNodeAssociationStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeNodeAssociationStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeNodeAssociationStatusRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeNodeAssociationStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `engineAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeNodeAssociationStatus.property.engineAttributes"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute)[]

---

##### `nodeAssociationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeNodeAssociationStatus.property.nodeAssociationStatus"></a>

- *Type:* `string`

---


### OpsWorksCMResponsesDescribeServers <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeServers"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeServers.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesDescribeServers(__scope: Construct, __resources: string[], __input: OpsWorksCmDescribeServersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeServers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeServers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeServers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeServersRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmDescribeServersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeServers.property.nextToken"></a>

- *Type:* `string`

---

##### `servers`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDescribeServers.property.servers"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmServer`](#aws-cdk-sdk.opsworkscm.OpsWorksCmServer)[]

---


### OpsWorksCMResponsesDisassociateNode <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDisassociateNode"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDisassociateNode.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesDisassociateNode(__scope: Construct, __resources: string[], __input: OpsWorksCmDisassociateNodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDisassociateNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDisassociateNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDisassociateNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmDisassociateNodeRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmDisassociateNodeRequest)

---



#### Properties <a name="Properties"></a>

##### `nodeAssociationStatusToken`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesDisassociateNode.property.nodeAssociationStatusToken"></a>

- *Type:* `string`

---


### OpsWorksCMResponsesExportServerEngineAttribute <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttribute"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttribute.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesExportServerEngineAttribute(__scope: Construct, __resources: string[], __input: OpsWorksCmExportServerEngineAttributeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttribute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttribute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttribute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmExportServerEngineAttributeRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmExportServerEngineAttributeRequest)

---



#### Properties <a name="Properties"></a>

##### `engineAttribute`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttribute.property.engineAttribute"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttributeEngineAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttributeEngineAttribute)

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttribute.property.serverName"></a>

- *Type:* `string`

---


### OpsWorksCMResponsesExportServerEngineAttributeEngineAttribute <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttributeEngineAttribute"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttributeEngineAttribute.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesExportServerEngineAttributeEngineAttribute(__scope: Construct, __resources: string[], __input: OpsWorksCmExportServerEngineAttributeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttributeEngineAttribute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttributeEngineAttribute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttributeEngineAttribute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmExportServerEngineAttributeRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmExportServerEngineAttributeRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttributeEngineAttribute.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesExportServerEngineAttributeEngineAttribute.property.value"></a>

- *Type:* `string`

---


### OpsWorksCMResponsesListTagsForResource <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesListTagsForResource.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: OpsWorksCmListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmListTagsForResourceRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmTag`](#aws-cdk-sdk.opsworkscm.OpsWorksCmTag)[]

---


### OpsWorksCMResponsesStartMaintenance <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenance"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenance.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesStartMaintenance(__scope: Construct, __resources: string[], __input: OpsWorksCmStartMaintenanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmStartMaintenanceRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmStartMaintenanceRequest)

---



#### Properties <a name="Properties"></a>

##### `server`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenance.property.server"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer`](#aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer)

---


### OpsWorksCMResponsesStartMaintenanceServer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesStartMaintenanceServer(__scope: Construct, __resources: string[], __input: OpsWorksCmStartMaintenanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmStartMaintenanceRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmStartMaintenanceRequest)

---



#### Properties <a name="Properties"></a>

##### `associatePublicIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.associatePublicIpAddress"></a>

- *Type:* `boolean`

---

##### `backupRetentionCount`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.backupRetentionCount"></a>

- *Type:* `number`

---

##### `cloudFormationStackArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.cloudFormationStackArn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.createdAt"></a>

- *Type:* `string`

---

##### `customDomain`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.customDomain"></a>

- *Type:* `string`

---

##### `disableAutomatedBackup`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.disableAutomatedBackup"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.engine"></a>

- *Type:* `string`

---

##### `engineAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.engineAttributes"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute)[]

---

##### `engineModel`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.engineModel"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.engineVersion"></a>

- *Type:* `string`

---

##### `instanceProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.instanceProfileArn"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.instanceType"></a>

- *Type:* `string`

---

##### `keyPair`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.keyPair"></a>

- *Type:* `string`

---

##### `maintenanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.maintenanceStatus"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `serverArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.serverArn"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.serverName"></a>

- *Type:* `string`

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.statusReason"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesStartMaintenanceServer.property.subnetIds"></a>

- *Type:* `string`[]

---


### OpsWorksCMResponsesUpdateServer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServer"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServer.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesUpdateServer(__scope: Construct, __resources: string[], __input: OpsWorksCmUpdateServerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerRequest)

---



#### Properties <a name="Properties"></a>

##### `server`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServer.property.server"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer`](#aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer)

---


### OpsWorksCMResponsesUpdateServerEngineAttributes <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributes.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributes(__scope: Construct, __resources: string[], __input: OpsWorksCmUpdateServerEngineAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerEngineAttributesRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerEngineAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `server`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributes.property.server"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer`](#aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer)

---


### OpsWorksCMResponsesUpdateServerEngineAttributesServer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer(__scope: Construct, __resources: string[], __input: OpsWorksCmUpdateServerEngineAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerEngineAttributesRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerEngineAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `associatePublicIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.associatePublicIpAddress"></a>

- *Type:* `boolean`

---

##### `backupRetentionCount`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.backupRetentionCount"></a>

- *Type:* `number`

---

##### `cloudFormationStackArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.cloudFormationStackArn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.createdAt"></a>

- *Type:* `string`

---

##### `customDomain`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.customDomain"></a>

- *Type:* `string`

---

##### `disableAutomatedBackup`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.disableAutomatedBackup"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.engine"></a>

- *Type:* `string`

---

##### `engineAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.engineAttributes"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute)[]

---

##### `engineModel`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.engineModel"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.engineVersion"></a>

- *Type:* `string`

---

##### `instanceProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.instanceProfileArn"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.instanceType"></a>

- *Type:* `string`

---

##### `keyPair`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.keyPair"></a>

- *Type:* `string`

---

##### `maintenanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.maintenanceStatus"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `serverArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.serverArn"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.serverName"></a>

- *Type:* `string`

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.statusReason"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerEngineAttributesServer.property.subnetIds"></a>

- *Type:* `string`[]

---


### OpsWorksCMResponsesUpdateServerServer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer"></a>

#### Initializer <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.Initializer"></a>

```typescript
import { opsworkscm } from 'aws-cdk-sdk'

new opsworkscm.OpsWorksCMResponsesUpdateServerServer(__scope: Construct, __resources: string[], __input: OpsWorksCmUpdateServerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerRequest`](#aws-cdk-sdk.opsworkscm.OpsWorksCmUpdateServerRequest)

---



#### Properties <a name="Properties"></a>

##### `associatePublicIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.associatePublicIpAddress"></a>

- *Type:* `boolean`

---

##### `backupRetentionCount`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.backupRetentionCount"></a>

- *Type:* `number`

---

##### `cloudFormationStackArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.cloudFormationStackArn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.createdAt"></a>

- *Type:* `string`

---

##### `customDomain`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.customDomain"></a>

- *Type:* `string`

---

##### `disableAutomatedBackup`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.disableAutomatedBackup"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.engine"></a>

- *Type:* `string`

---

##### `engineAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.engineAttributes"></a>

- *Type:* [`aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute`](#aws-cdk-sdk.opsworkscm.OpsWorksCmEngineAttribute)[]

---

##### `engineModel`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.engineModel"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.engineVersion"></a>

- *Type:* `string`

---

##### `instanceProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.instanceProfileArn"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.instanceType"></a>

- *Type:* `string`

---

##### `keyPair`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.keyPair"></a>

- *Type:* `string`

---

##### `maintenanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.maintenanceStatus"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `serverArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.serverArn"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.serverName"></a>

- *Type:* `string`

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.statusReason"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.opsworkscm.OpsWorksCMResponsesUpdateServerServer.property.subnetIds"></a>

- *Type:* `string`[]

---



