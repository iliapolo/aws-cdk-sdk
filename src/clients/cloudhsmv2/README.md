# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CloudHsmv2Client <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHsmv2Client(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `copyBackupToRegion` <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.copyBackupToRegion"></a>

```typescript
public copyBackupToRegion(input: CloudHsmv2CopyBackupToRegionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2CopyBackupToRegionRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2CopyBackupToRegionRequest)

---

##### `createCluster` <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.createCluster"></a>

```typescript
public createCluster(input: CloudHsmv2CreateClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest)

---

##### `createHsm` <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.createHsm"></a>

```typescript
public createHsm(input: CloudHsmv2CreateHsmRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateHsmRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateHsmRequest)

---

##### `deleteBackup` <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.deleteBackup"></a>

```typescript
public deleteBackup(input: CloudHsmv2DeleteBackupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteBackupRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteBackupRequest)

---

##### `deleteCluster` <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.deleteCluster"></a>

```typescript
public deleteCluster(input: CloudHsmv2DeleteClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteClusterRequest)

---

##### `deleteHsm` <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.deleteHsm"></a>

```typescript
public deleteHsm(input: CloudHsmv2DeleteHsmRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteHsmRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteHsmRequest)

---

##### `describeBackups` <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.describeBackups"></a>

```typescript
public describeBackups(input: CloudHsmv2DescribeBackupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeBackupsRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeBackupsRequest)

---

##### `describeClusters` <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.describeClusters"></a>

```typescript
public describeClusters(input: CloudHsmv2DescribeClustersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeClustersRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeClustersRequest)

---

##### `initializeCluster` <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.initializeCluster"></a>

```typescript
public initializeCluster(input: CloudHsmv2InitializeClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2InitializeClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2InitializeClusterRequest)

---

##### `listTags` <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.listTags"></a>

```typescript
public listTags(input: CloudHsmv2ListTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2ListTagsRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2ListTagsRequest)

---

##### `modifyBackupAttributes` <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.modifyBackupAttributes"></a>

```typescript
public modifyBackupAttributes(input: CloudHsmv2ModifyBackupAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyBackupAttributesRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyBackupAttributesRequest)

---

##### `modifyCluster` <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.modifyCluster"></a>

```typescript
public modifyCluster(input: CloudHsmv2ModifyClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyClusterRequest)

---

##### `restoreBackup` <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.restoreBackup"></a>

```typescript
public restoreBackup(input: CloudHsmv2RestoreBackupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2RestoreBackupRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2RestoreBackupRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.tagResource"></a>

```typescript
public tagResource(input: CloudHsmv2TagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2TagResourceRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2TagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.untagResource"></a>

```typescript
public untagResource(input: CloudHsmv2UntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2UntagResourceRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2UntagResourceRequest)

---




## Structs <a name="Structs"></a>

### CloudHsmv2Backup <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2Backup: cloudhsmv2.CloudHsmv2Backup = { ... }
```

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup.property.backupId"></a>

- *Type:* `string`

---

##### `backupState`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup.property.backupState"></a>

- *Type:* `string`

---

##### `clusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup.property.clusterId"></a>

- *Type:* `string`

---

##### `copyTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup.property.copyTimestamp"></a>

- *Type:* `string`

---

##### `createTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup.property.createTimestamp"></a>

- *Type:* `string`

---

##### `deleteTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup.property.deleteTimestamp"></a>

- *Type:* `string`

---

##### `neverExpires`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup.property.neverExpires"></a>

- *Type:* `boolean`

---

##### `sourceBackup`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup.property.sourceBackup"></a>

- *Type:* `string`

---

##### `sourceCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup.property.sourceCluster"></a>

- *Type:* `string`

---

##### `sourceRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup.property.sourceRegion"></a>

- *Type:* `string`

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag)[]

---

### CloudHsmv2BackupRetentionPolicy <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2BackupRetentionPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2BackupRetentionPolicy: cloudhsmv2.CloudHsmv2BackupRetentionPolicy = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2BackupRetentionPolicy.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2BackupRetentionPolicy.property.value"></a>

- *Type:* `string`

---

### CloudHsmv2Certificates <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Certificates"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2Certificates: cloudhsmv2.CloudHsmv2Certificates = { ... }
```

##### `awsHardwareCertificate`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Certificates.property.awsHardwareCertificate"></a>

- *Type:* `string`

---

##### `clusterCertificate`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Certificates.property.clusterCertificate"></a>

- *Type:* `string`

---

##### `clusterCsr`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Certificates.property.clusterCsr"></a>

- *Type:* `string`

---

##### `hsmCertificate`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Certificates.property.hsmCertificate"></a>

- *Type:* `string`

---

##### `manufacturerHardwareCertificate`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Certificates.property.manufacturerHardwareCertificate"></a>

- *Type:* `string`

---

### CloudHsmv2Cluster <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2Cluster: cloudhsmv2.CloudHsmv2Cluster = { ... }
```

##### `backupPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster.property.backupPolicy"></a>

- *Type:* `string`

---

##### `backupRetentionPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster.property.backupRetentionPolicy"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2BackupRetentionPolicy`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2BackupRetentionPolicy)

---

##### `certificates`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Certificates`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Certificates)

---

##### `clusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster.property.clusterId"></a>

- *Type:* `string`

---

##### `createTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster.property.createTimestamp"></a>

- *Type:* `string`

---

##### `hsms`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster.property.hsms"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm)[]

---

##### `hsmType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster.property.hsmType"></a>

- *Type:* `string`

---

##### `preCoPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster.property.preCoPassword"></a>

- *Type:* `string`

---

##### `securityGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster.property.securityGroup"></a>

- *Type:* `string`

---

##### `sourceBackupId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster.property.sourceBackupId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster.property.state"></a>

- *Type:* `string`

---

##### `stateMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster.property.stateMessage"></a>

- *Type:* `string`

---

##### `subnetMapping`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster.property.subnetMapping"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag)[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster.property.vpcId"></a>

- *Type:* `string`

---

### CloudHsmv2CopyBackupToRegionRequest <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CopyBackupToRegionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2CopyBackupToRegionRequest: cloudhsmv2.CloudHsmv2CopyBackupToRegionRequest = { ... }
```

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CopyBackupToRegionRequest.property.backupId"></a>

- *Type:* `string`

---

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CopyBackupToRegionRequest.property.destinationRegion"></a>

- *Type:* `string`

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CopyBackupToRegionRequest.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag)[]

---

### CloudHsmv2CopyBackupToRegionResponse <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CopyBackupToRegionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2CopyBackupToRegionResponse: cloudhsmv2.CloudHsmv2CopyBackupToRegionResponse = { ... }
```

##### `destinationBackup`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CopyBackupToRegionResponse.property.destinationBackup"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2DestinationBackup`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2DestinationBackup)

---

### CloudHsmv2CreateClusterRequest <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2CreateClusterRequest: cloudhsmv2.CloudHsmv2CreateClusterRequest = { ... }
```

##### `hsmType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest.property.hsmType"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `backupRetentionPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest.property.backupRetentionPolicy"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2BackupRetentionPolicy`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2BackupRetentionPolicy)

---

##### `sourceBackupId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest.property.sourceBackupId"></a>

- *Type:* `string`

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag)[]

---

### CloudHsmv2CreateClusterResponse <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2CreateClusterResponse: cloudhsmv2.CloudHsmv2CreateClusterResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster)

---

### CloudHsmv2CreateHsmRequest <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateHsmRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2CreateHsmRequest: cloudhsmv2.CloudHsmv2CreateHsmRequest = { ... }
```

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateHsmRequest.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateHsmRequest.property.clusterId"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateHsmRequest.property.ipAddress"></a>

- *Type:* `string`

---

### CloudHsmv2CreateHsmResponse <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateHsmResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2CreateHsmResponse: cloudhsmv2.CloudHsmv2CreateHsmResponse = { ... }
```

##### `hsm`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateHsmResponse.property.hsm"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm)

---

### CloudHsmv2DeleteBackupRequest <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteBackupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2DeleteBackupRequest: cloudhsmv2.CloudHsmv2DeleteBackupRequest = { ... }
```

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteBackupRequest.property.backupId"></a>

- *Type:* `string`

---

### CloudHsmv2DeleteBackupResponse <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteBackupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2DeleteBackupResponse: cloudhsmv2.CloudHsmv2DeleteBackupResponse = { ... }
```

##### `backup`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteBackupResponse.property.backup"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup)

---

### CloudHsmv2DeleteClusterRequest <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2DeleteClusterRequest: cloudhsmv2.CloudHsmv2DeleteClusterRequest = { ... }
```

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteClusterRequest.property.clusterId"></a>

- *Type:* `string`

---

### CloudHsmv2DeleteClusterResponse <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteClusterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2DeleteClusterResponse: cloudhsmv2.CloudHsmv2DeleteClusterResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteClusterResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster)

---

### CloudHsmv2DeleteHsmRequest <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteHsmRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2DeleteHsmRequest: cloudhsmv2.CloudHsmv2DeleteHsmRequest = { ... }
```

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteHsmRequest.property.clusterId"></a>

- *Type:* `string`

---

##### `eniId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteHsmRequest.property.eniId"></a>

- *Type:* `string`

---

##### `eniIp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteHsmRequest.property.eniIp"></a>

- *Type:* `string`

---

##### `hsmId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteHsmRequest.property.hsmId"></a>

- *Type:* `string`

---

### CloudHsmv2DeleteHsmResponse <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteHsmResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2DeleteHsmResponse: cloudhsmv2.CloudHsmv2DeleteHsmResponse = { ... }
```

##### `hsmId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteHsmResponse.property.hsmId"></a>

- *Type:* `string`

---

### CloudHsmv2DescribeBackupsRequest <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeBackupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2DescribeBackupsRequest: cloudhsmv2.CloudHsmv2DescribeBackupsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeBackupsRequest.property.filters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeBackupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeBackupsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortAscending`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeBackupsRequest.property.sortAscending"></a>

- *Type:* `boolean`

---

### CloudHsmv2DescribeBackupsResponse <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeBackupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2DescribeBackupsResponse: cloudhsmv2.CloudHsmv2DescribeBackupsResponse = { ... }
```

##### `backups`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeBackupsResponse.property.backups"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeBackupsResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudHsmv2DescribeClustersRequest <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeClustersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2DescribeClustersRequest: cloudhsmv2.CloudHsmv2DescribeClustersRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeClustersRequest.property.filters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeClustersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeClustersRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudHsmv2DescribeClustersResponse <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeClustersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2DescribeClustersResponse: cloudhsmv2.CloudHsmv2DescribeClustersResponse = { ... }
```

##### `clusters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeClustersResponse.property.clusters"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeClustersResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudHsmv2DestinationBackup <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DestinationBackup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2DestinationBackup: cloudhsmv2.CloudHsmv2DestinationBackup = { ... }
```

##### `createTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DestinationBackup.property.createTimestamp"></a>

- *Type:* `string`

---

##### `sourceBackup`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DestinationBackup.property.sourceBackup"></a>

- *Type:* `string`

---

##### `sourceCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DestinationBackup.property.sourceCluster"></a>

- *Type:* `string`

---

##### `sourceRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2DestinationBackup.property.sourceRegion"></a>

- *Type:* `string`

---

### CloudHsmv2Hsm <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2Hsm: cloudhsmv2.CloudHsmv2Hsm = { ... }
```

##### `hsmId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm.property.hsmId"></a>

- *Type:* `string`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm.property.clusterId"></a>

- *Type:* `string`

---

##### `eniId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm.property.eniId"></a>

- *Type:* `string`

---

##### `eniIp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm.property.eniIp"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm.property.state"></a>

- *Type:* `string`

---

##### `stateMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm.property.stateMessage"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm.property.subnetId"></a>

- *Type:* `string`

---

### CloudHsmv2InitializeClusterRequest <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2InitializeClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2InitializeClusterRequest: cloudhsmv2.CloudHsmv2InitializeClusterRequest = { ... }
```

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2InitializeClusterRequest.property.clusterId"></a>

- *Type:* `string`

---

##### `signedCert`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2InitializeClusterRequest.property.signedCert"></a>

- *Type:* `string`

---

##### `trustAnchor`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2InitializeClusterRequest.property.trustAnchor"></a>

- *Type:* `string`

---

### CloudHsmv2InitializeClusterResponse <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2InitializeClusterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2InitializeClusterResponse: cloudhsmv2.CloudHsmv2InitializeClusterResponse = { ... }
```

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2InitializeClusterResponse.property.state"></a>

- *Type:* `string`

---

##### `stateMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2InitializeClusterResponse.property.stateMessage"></a>

- *Type:* `string`

---

### CloudHsmv2ListTagsRequest <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ListTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2ListTagsRequest: cloudhsmv2.CloudHsmv2ListTagsRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ListTagsRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ListTagsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ListTagsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudHsmv2ListTagsResponse <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ListTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2ListTagsResponse: cloudhsmv2.CloudHsmv2ListTagsResponse = { ... }
```

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ListTagsResponse.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ListTagsResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudHsmv2ModifyBackupAttributesRequest <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyBackupAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2ModifyBackupAttributesRequest: cloudhsmv2.CloudHsmv2ModifyBackupAttributesRequest = { ... }
```

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyBackupAttributesRequest.property.backupId"></a>

- *Type:* `string`

---

##### `neverExpires`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyBackupAttributesRequest.property.neverExpires"></a>

- *Type:* `boolean`

---

### CloudHsmv2ModifyBackupAttributesResponse <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyBackupAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2ModifyBackupAttributesResponse: cloudhsmv2.CloudHsmv2ModifyBackupAttributesResponse = { ... }
```

##### `backup`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyBackupAttributesResponse.property.backup"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup)

---

### CloudHsmv2ModifyClusterRequest <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2ModifyClusterRequest: cloudhsmv2.CloudHsmv2ModifyClusterRequest = { ... }
```

##### `backupRetentionPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyClusterRequest.property.backupRetentionPolicy"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2BackupRetentionPolicy`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2BackupRetentionPolicy)

---

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyClusterRequest.property.clusterId"></a>

- *Type:* `string`

---

### CloudHsmv2ModifyClusterResponse <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyClusterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2ModifyClusterResponse: cloudhsmv2.CloudHsmv2ModifyClusterResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyClusterResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster)

---

### CloudHsmv2RestoreBackupRequest <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2RestoreBackupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2RestoreBackupRequest: cloudhsmv2.CloudHsmv2RestoreBackupRequest = { ... }
```

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2RestoreBackupRequest.property.backupId"></a>

- *Type:* `string`

---

### CloudHsmv2RestoreBackupResponse <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2RestoreBackupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2RestoreBackupResponse: cloudhsmv2.CloudHsmv2RestoreBackupResponse = { ... }
```

##### `backup`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2RestoreBackupResponse.property.backup"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup)

---

### CloudHsmv2Tag <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2Tag: cloudhsmv2.CloudHsmv2Tag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag.property.value"></a>

- *Type:* `string`

---

### CloudHsmv2TagResourceRequest <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2TagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2TagResourceRequest: cloudhsmv2.CloudHsmv2TagResourceRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2TagResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2TagResourceRequest.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag)[]

---

### CloudHsmv2TagResourceResponse <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2TagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2TagResourceResponse: cloudhsmv2.CloudHsmv2TagResourceResponse = { ... }
```

### CloudHsmv2UntagResourceRequest <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2UntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2UntagResourceRequest: cloudhsmv2.CloudHsmv2UntagResourceRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2UntagResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `tagKeyList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2UntagResourceRequest.property.tagKeyList"></a>

- *Type:* `string`[]

---

### CloudHsmv2UntagResourceResponse <a name="aws-cdk-sdk.cloudhsmv2.CloudHsmv2UntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

const cloudHsmv2UntagResourceResponse: cloudhsmv2.CloudHsmv2UntagResourceResponse = { ... }
```

## Classes <a name="Classes"></a>

### CloudHSMV2ResponsesCopyBackupToRegion <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegion"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegion.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegion(__scope: Construct, __resources: string[], __input: CloudHsmv2CopyBackupToRegionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2CopyBackupToRegionRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2CopyBackupToRegionRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationBackup`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegion.property.destinationBackup"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup`](#aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup)

---


### CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup(__scope: Construct, __resources: string[], __input: CloudHsmv2CopyBackupToRegionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2CopyBackupToRegionRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2CopyBackupToRegionRequest)

---



#### Properties <a name="Properties"></a>

##### `createTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup.property.createTimestamp"></a>

- *Type:* `string`

---

##### `sourceBackup`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup.property.sourceBackup"></a>

- *Type:* `string`

---

##### `sourceCluster`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup.property.sourceCluster"></a>

- *Type:* `string`

---

##### `sourceRegion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCopyBackupToRegionDestinationBackup.property.sourceRegion"></a>

- *Type:* `string`

---


### CloudHSMV2ResponsesCreateCluster <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateCluster"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateCluster.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesCreateCluster(__scope: Construct, __resources: string[], __input: CloudHsmv2CreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster`](#aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster)

---


### CloudHSMV2ResponsesCreateClusterCluster <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster(__scope: Construct, __resources: string[], __input: CloudHsmv2CreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `backupPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.property.backupPolicy"></a>

- *Type:* `string`

---

##### `backupRetentionPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.property.backupRetentionPolicy"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterBackupRetentionPolicy`](#aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterBackupRetentionPolicy)

---

##### `certificates`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterCertificates`](#aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterCertificates)

---

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.property.clusterId"></a>

- *Type:* `string`

---

##### `createTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.property.createTimestamp"></a>

- *Type:* `string`

---

##### `hsms`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.property.hsms"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm)[]

---

##### `hsmType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.property.hsmType"></a>

- *Type:* `string`

---

##### `preCoPassword`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.property.preCoPassword"></a>

- *Type:* `string`

---

##### `securityGroup`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.property.securityGroup"></a>

- *Type:* `string`

---

##### `sourceBackupId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.property.sourceBackupId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.property.state"></a>

- *Type:* `string`

---

##### `stateMessage`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.property.stateMessage"></a>

- *Type:* `string`

---

##### `subnetMapping`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.property.subnetMapping"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterCluster.property.vpcId"></a>

- *Type:* `string`

---


### CloudHSMV2ResponsesCreateClusterClusterBackupRetentionPolicy <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterBackupRetentionPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterBackupRetentionPolicy.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterBackupRetentionPolicy(__scope: Construct, __resources: string[], __input: CloudHsmv2CreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterBackupRetentionPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterBackupRetentionPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterBackupRetentionPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterBackupRetentionPolicy.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterBackupRetentionPolicy.property.value"></a>

- *Type:* `string`

---


### CloudHSMV2ResponsesCreateClusterClusterCertificates <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterCertificates"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterCertificates.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterCertificates(__scope: Construct, __resources: string[], __input: CloudHsmv2CreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterCertificates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterCertificates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterCertificates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `awsHardwareCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterCertificates.property.awsHardwareCertificate"></a>

- *Type:* `string`

---

##### `clusterCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterCertificates.property.clusterCertificate"></a>

- *Type:* `string`

---

##### `clusterCsr`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterCertificates.property.clusterCsr"></a>

- *Type:* `string`

---

##### `hsmCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterCertificates.property.hsmCertificate"></a>

- *Type:* `string`

---

##### `manufacturerHardwareCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateClusterClusterCertificates.property.manufacturerHardwareCertificate"></a>

- *Type:* `string`

---


### CloudHSMV2ResponsesCreateHsm <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsm"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsm.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesCreateHsm(__scope: Construct, __resources: string[], __input: CloudHsmv2CreateHsmRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateHsmRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateHsmRequest)

---



#### Properties <a name="Properties"></a>

##### `hsm`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsm.property.hsm"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm`](#aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm)

---


### CloudHSMV2ResponsesCreateHsmHsm <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm(__scope: Construct, __resources: string[], __input: CloudHsmv2CreateHsmRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateHsmRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2CreateHsmRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm.property.clusterId"></a>

- *Type:* `string`

---

##### `eniId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm.property.eniId"></a>

- *Type:* `string`

---

##### `eniIp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm.property.eniIp"></a>

- *Type:* `string`

---

##### `hsmId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm.property.hsmId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm.property.state"></a>

- *Type:* `string`

---

##### `stateMessage`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm.property.stateMessage"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesCreateHsmHsm.property.subnetId"></a>

- *Type:* `string`

---


### CloudHSMV2ResponsesDeleteBackup <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackup"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackup.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesDeleteBackup(__scope: Construct, __resources: string[], __input: CloudHsmv2DeleteBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteBackupRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `backup`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackup.property.backup"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup`](#aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup)

---


### CloudHSMV2ResponsesDeleteBackupBackup <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup(__scope: Construct, __resources: string[], __input: CloudHsmv2DeleteBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteBackupRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup.property.backupId"></a>

- *Type:* `string`

---

##### `backupState`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup.property.backupState"></a>

- *Type:* `string`

---

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup.property.clusterId"></a>

- *Type:* `string`

---

##### `copyTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup.property.copyTimestamp"></a>

- *Type:* `string`

---

##### `createTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup.property.createTimestamp"></a>

- *Type:* `string`

---

##### `deleteTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup.property.deleteTimestamp"></a>

- *Type:* `string`

---

##### `neverExpires`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup.property.neverExpires"></a>

- *Type:* `boolean`

---

##### `sourceBackup`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup.property.sourceBackup"></a>

- *Type:* `string`

---

##### `sourceCluster`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup.property.sourceCluster"></a>

- *Type:* `string`

---

##### `sourceRegion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup.property.sourceRegion"></a>

- *Type:* `string`

---

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteBackupBackup.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag)[]

---


### CloudHSMV2ResponsesDeleteCluster <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteCluster"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteCluster.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesDeleteCluster(__scope: Construct, __resources: string[], __input: CloudHsmv2DeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster`](#aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster)

---


### CloudHSMV2ResponsesDeleteClusterCluster <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster(__scope: Construct, __resources: string[], __input: CloudHsmv2DeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `backupPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.property.backupPolicy"></a>

- *Type:* `string`

---

##### `backupRetentionPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.property.backupRetentionPolicy"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterBackupRetentionPolicy`](#aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterBackupRetentionPolicy)

---

##### `certificates`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterCertificates`](#aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterCertificates)

---

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.property.clusterId"></a>

- *Type:* `string`

---

##### `createTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.property.createTimestamp"></a>

- *Type:* `string`

---

##### `hsms`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.property.hsms"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm)[]

---

##### `hsmType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.property.hsmType"></a>

- *Type:* `string`

---

##### `preCoPassword`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.property.preCoPassword"></a>

- *Type:* `string`

---

##### `securityGroup`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.property.securityGroup"></a>

- *Type:* `string`

---

##### `sourceBackupId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.property.sourceBackupId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.property.state"></a>

- *Type:* `string`

---

##### `stateMessage`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.property.stateMessage"></a>

- *Type:* `string`

---

##### `subnetMapping`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.property.subnetMapping"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterCluster.property.vpcId"></a>

- *Type:* `string`

---


### CloudHSMV2ResponsesDeleteClusterClusterBackupRetentionPolicy <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterBackupRetentionPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterBackupRetentionPolicy.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterBackupRetentionPolicy(__scope: Construct, __resources: string[], __input: CloudHsmv2DeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterBackupRetentionPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterBackupRetentionPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterBackupRetentionPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterBackupRetentionPolicy.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterBackupRetentionPolicy.property.value"></a>

- *Type:* `string`

---


### CloudHSMV2ResponsesDeleteClusterClusterCertificates <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterCertificates"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterCertificates.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterCertificates(__scope: Construct, __resources: string[], __input: CloudHsmv2DeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterCertificates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterCertificates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterCertificates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `awsHardwareCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterCertificates.property.awsHardwareCertificate"></a>

- *Type:* `string`

---

##### `clusterCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterCertificates.property.clusterCertificate"></a>

- *Type:* `string`

---

##### `clusterCsr`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterCertificates.property.clusterCsr"></a>

- *Type:* `string`

---

##### `hsmCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterCertificates.property.hsmCertificate"></a>

- *Type:* `string`

---

##### `manufacturerHardwareCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteClusterClusterCertificates.property.manufacturerHardwareCertificate"></a>

- *Type:* `string`

---


### CloudHSMV2ResponsesDeleteHsm <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteHsm"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteHsm.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesDeleteHsm(__scope: Construct, __resources: string[], __input: CloudHsmv2DeleteHsmRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteHsm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteHsm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteHsm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteHsmRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2DeleteHsmRequest)

---



#### Properties <a name="Properties"></a>

##### `hsmId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDeleteHsm.property.hsmId"></a>

- *Type:* `string`

---


### CloudHSMV2ResponsesDescribeBackups <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDescribeBackups"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDescribeBackups.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesDescribeBackups(__scope: Construct, __resources: string[], __input: CloudHsmv2DescribeBackupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDescribeBackups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDescribeBackups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDescribeBackups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeBackupsRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeBackupsRequest)

---



#### Properties <a name="Properties"></a>

##### `backups`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDescribeBackups.property.backups"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Backup)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDescribeBackups.property.nextToken"></a>

- *Type:* `string`

---


### CloudHSMV2ResponsesDescribeClusters <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDescribeClusters"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDescribeClusters.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesDescribeClusters(__scope: Construct, __resources: string[], __input: CloudHsmv2DescribeClustersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDescribeClusters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDescribeClusters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDescribeClusters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeClustersRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2DescribeClustersRequest)

---



#### Properties <a name="Properties"></a>

##### `clusters`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDescribeClusters.property.clusters"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Cluster)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesDescribeClusters.property.nextToken"></a>

- *Type:* `string`

---


### CloudHSMV2ResponsesInitializeCluster <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesInitializeCluster"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesInitializeCluster.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesInitializeCluster(__scope: Construct, __resources: string[], __input: CloudHsmv2InitializeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesInitializeCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesInitializeCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesInitializeCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2InitializeClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2InitializeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesInitializeCluster.property.state"></a>

- *Type:* `string`

---

##### `stateMessage`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesInitializeCluster.property.stateMessage"></a>

- *Type:* `string`

---


### CloudHSMV2ResponsesListTags <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesListTags"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesListTags.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesListTags(__scope: Construct, __resources: string[], __input: CloudHsmv2ListTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesListTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesListTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesListTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2ListTagsRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2ListTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesListTags.property.nextToken"></a>

- *Type:* `string`

---

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesListTags.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag)[]

---


### CloudHSMV2ResponsesModifyBackupAttributes <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributes.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributes(__scope: Construct, __resources: string[], __input: CloudHsmv2ModifyBackupAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyBackupAttributesRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyBackupAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `backup`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributes.property.backup"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup`](#aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup)

---


### CloudHSMV2ResponsesModifyBackupAttributesBackup <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup(__scope: Construct, __resources: string[], __input: CloudHsmv2ModifyBackupAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyBackupAttributesRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyBackupAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup.property.backupId"></a>

- *Type:* `string`

---

##### `backupState`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup.property.backupState"></a>

- *Type:* `string`

---

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup.property.clusterId"></a>

- *Type:* `string`

---

##### `copyTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup.property.copyTimestamp"></a>

- *Type:* `string`

---

##### `createTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup.property.createTimestamp"></a>

- *Type:* `string`

---

##### `deleteTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup.property.deleteTimestamp"></a>

- *Type:* `string`

---

##### `neverExpires`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup.property.neverExpires"></a>

- *Type:* `boolean`

---

##### `sourceBackup`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup.property.sourceBackup"></a>

- *Type:* `string`

---

##### `sourceCluster`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup.property.sourceCluster"></a>

- *Type:* `string`

---

##### `sourceRegion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup.property.sourceRegion"></a>

- *Type:* `string`

---

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyBackupAttributesBackup.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag)[]

---


### CloudHSMV2ResponsesModifyCluster <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyCluster"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyCluster.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesModifyCluster(__scope: Construct, __resources: string[], __input: CloudHsmv2ModifyClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster`](#aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster)

---


### CloudHSMV2ResponsesModifyClusterCluster <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster(__scope: Construct, __resources: string[], __input: CloudHsmv2ModifyClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `backupPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.property.backupPolicy"></a>

- *Type:* `string`

---

##### `backupRetentionPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.property.backupRetentionPolicy"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterBackupRetentionPolicy`](#aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterBackupRetentionPolicy)

---

##### `certificates`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterCertificates`](#aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterCertificates)

---

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.property.clusterId"></a>

- *Type:* `string`

---

##### `createTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.property.createTimestamp"></a>

- *Type:* `string`

---

##### `hsms`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.property.hsms"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Hsm)[]

---

##### `hsmType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.property.hsmType"></a>

- *Type:* `string`

---

##### `preCoPassword`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.property.preCoPassword"></a>

- *Type:* `string`

---

##### `securityGroup`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.property.securityGroup"></a>

- *Type:* `string`

---

##### `sourceBackupId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.property.sourceBackupId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.property.state"></a>

- *Type:* `string`

---

##### `stateMessage`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.property.stateMessage"></a>

- *Type:* `string`

---

##### `subnetMapping`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.property.subnetMapping"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterCluster.property.vpcId"></a>

- *Type:* `string`

---


### CloudHSMV2ResponsesModifyClusterClusterBackupRetentionPolicy <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterBackupRetentionPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterBackupRetentionPolicy.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterBackupRetentionPolicy(__scope: Construct, __resources: string[], __input: CloudHsmv2ModifyClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterBackupRetentionPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterBackupRetentionPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterBackupRetentionPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterBackupRetentionPolicy.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterBackupRetentionPolicy.property.value"></a>

- *Type:* `string`

---


### CloudHSMV2ResponsesModifyClusterClusterCertificates <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterCertificates"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterCertificates.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterCertificates(__scope: Construct, __resources: string[], __input: CloudHsmv2ModifyClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterCertificates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterCertificates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterCertificates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyClusterRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2ModifyClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `awsHardwareCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterCertificates.property.awsHardwareCertificate"></a>

- *Type:* `string`

---

##### `clusterCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterCertificates.property.clusterCertificate"></a>

- *Type:* `string`

---

##### `clusterCsr`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterCertificates.property.clusterCsr"></a>

- *Type:* `string`

---

##### `hsmCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterCertificates.property.hsmCertificate"></a>

- *Type:* `string`

---

##### `manufacturerHardwareCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesModifyClusterClusterCertificates.property.manufacturerHardwareCertificate"></a>

- *Type:* `string`

---


### CloudHSMV2ResponsesRestoreBackup <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackup"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackup.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesRestoreBackup(__scope: Construct, __resources: string[], __input: CloudHsmv2RestoreBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2RestoreBackupRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2RestoreBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `backup`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackup.property.backup"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup`](#aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup)

---


### CloudHSMV2ResponsesRestoreBackupBackup <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup"></a>

#### Initializer <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup.Initializer"></a>

```typescript
import { cloudhsmv2 } from 'aws-cdk-sdk'

new cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup(__scope: Construct, __resources: string[], __input: CloudHsmv2RestoreBackupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2RestoreBackupRequest`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2RestoreBackupRequest)

---



#### Properties <a name="Properties"></a>

##### `backupId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup.property.backupId"></a>

- *Type:* `string`

---

##### `backupState`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup.property.backupState"></a>

- *Type:* `string`

---

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup.property.clusterId"></a>

- *Type:* `string`

---

##### `copyTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup.property.copyTimestamp"></a>

- *Type:* `string`

---

##### `createTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup.property.createTimestamp"></a>

- *Type:* `string`

---

##### `deleteTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup.property.deleteTimestamp"></a>

- *Type:* `string`

---

##### `neverExpires`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup.property.neverExpires"></a>

- *Type:* `boolean`

---

##### `sourceBackup`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup.property.sourceBackup"></a>

- *Type:* `string`

---

##### `sourceCluster`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup.property.sourceCluster"></a>

- *Type:* `string`

---

##### `sourceRegion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup.property.sourceRegion"></a>

- *Type:* `string`

---

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudhsmv2.CloudHSMV2ResponsesRestoreBackupBackup.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag`](#aws-cdk-sdk.cloudhsmv2.CloudHsmv2Tag)[]

---



