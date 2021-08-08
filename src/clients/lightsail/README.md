# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### LightsailClient <a name="aws-cdk-sdk.lightsail.LightsailClient"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailClient.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `allocateStaticIp` <a name="aws-cdk-sdk.lightsail.LightsailClient.allocateStaticIp"></a>

```typescript
public allocateStaticIp(input: LightsailAllocateStaticIpRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAllocateStaticIpRequest`](#aws-cdk-sdk.lightsail.LightsailAllocateStaticIpRequest)

---

##### `attachCertificateToDistribution` <a name="aws-cdk-sdk.lightsail.LightsailClient.attachCertificateToDistribution"></a>

```typescript
public attachCertificateToDistribution(input: LightsailAttachCertificateToDistributionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAttachCertificateToDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailAttachCertificateToDistributionRequest)

---

##### `attachDisk` <a name="aws-cdk-sdk.lightsail.LightsailClient.attachDisk"></a>

```typescript
public attachDisk(input: LightsailAttachDiskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAttachDiskRequest`](#aws-cdk-sdk.lightsail.LightsailAttachDiskRequest)

---

##### `attachInstancesToLoadBalancer` <a name="aws-cdk-sdk.lightsail.LightsailClient.attachInstancesToLoadBalancer"></a>

```typescript
public attachInstancesToLoadBalancer(input: LightsailAttachInstancesToLoadBalancerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAttachInstancesToLoadBalancerRequest`](#aws-cdk-sdk.lightsail.LightsailAttachInstancesToLoadBalancerRequest)

---

##### `attachLoadBalancerTlsCertificate` <a name="aws-cdk-sdk.lightsail.LightsailClient.attachLoadBalancerTlsCertificate"></a>

```typescript
public attachLoadBalancerTlsCertificate(input: LightsailAttachLoadBalancerTlsCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAttachLoadBalancerTlsCertificateRequest`](#aws-cdk-sdk.lightsail.LightsailAttachLoadBalancerTlsCertificateRequest)

---

##### `attachStaticIp` <a name="aws-cdk-sdk.lightsail.LightsailClient.attachStaticIp"></a>

```typescript
public attachStaticIp(input: LightsailAttachStaticIpRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAttachStaticIpRequest`](#aws-cdk-sdk.lightsail.LightsailAttachStaticIpRequest)

---

##### `closeInstancePublicPorts` <a name="aws-cdk-sdk.lightsail.LightsailClient.closeInstancePublicPorts"></a>

```typescript
public closeInstancePublicPorts(input: LightsailCloseInstancePublicPortsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCloseInstancePublicPortsRequest`](#aws-cdk-sdk.lightsail.LightsailCloseInstancePublicPortsRequest)

---

##### `copySnapshot` <a name="aws-cdk-sdk.lightsail.LightsailClient.copySnapshot"></a>

```typescript
public copySnapshot(input: LightsailCopySnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCopySnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailCopySnapshotRequest)

---

##### `createCertificate` <a name="aws-cdk-sdk.lightsail.LightsailClient.createCertificate"></a>

```typescript
public createCertificate(input: LightsailCreateCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateCertificateRequest`](#aws-cdk-sdk.lightsail.LightsailCreateCertificateRequest)

---

##### `createCloudFormationStack` <a name="aws-cdk-sdk.lightsail.LightsailClient.createCloudFormationStack"></a>

```typescript
public createCloudFormationStack(input: LightsailCreateCloudFormationStackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateCloudFormationStackRequest`](#aws-cdk-sdk.lightsail.LightsailCreateCloudFormationStackRequest)

---

##### `createContactMethod` <a name="aws-cdk-sdk.lightsail.LightsailClient.createContactMethod"></a>

```typescript
public createContactMethod(input: LightsailCreateContactMethodRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContactMethodRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContactMethodRequest)

---

##### `createContainerService` <a name="aws-cdk-sdk.lightsail.LightsailClient.createContainerService"></a>

```typescript
public createContainerService(input: LightsailCreateContainerServiceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest)

---

##### `createContainerServiceDeployment` <a name="aws-cdk-sdk.lightsail.LightsailClient.createContainerServiceDeployment"></a>

```typescript
public createContainerServiceDeployment(input: LightsailCreateContainerServiceDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest)

---

##### `createContainerServiceRegistryLogin` <a name="aws-cdk-sdk.lightsail.LightsailClient.createContainerServiceRegistryLogin"></a>

```typescript
public createContainerServiceRegistryLogin()
```

##### `createDisk` <a name="aws-cdk-sdk.lightsail.LightsailClient.createDisk"></a>

```typescript
public createDisk(input: LightsailCreateDiskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDiskRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDiskRequest)

---

##### `createDiskFromSnapshot` <a name="aws-cdk-sdk.lightsail.LightsailClient.createDiskFromSnapshot"></a>

```typescript
public createDiskFromSnapshot(input: LightsailCreateDiskFromSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotRequest)

---

##### `createDiskSnapshot` <a name="aws-cdk-sdk.lightsail.LightsailClient.createDiskSnapshot"></a>

```typescript
public createDiskSnapshot(input: LightsailCreateDiskSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDiskSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDiskSnapshotRequest)

---

##### `createDistribution` <a name="aws-cdk-sdk.lightsail.LightsailClient.createDistribution"></a>

```typescript
public createDistribution(input: LightsailCreateDistributionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest)

---

##### `createDomain` <a name="aws-cdk-sdk.lightsail.LightsailClient.createDomain"></a>

```typescript
public createDomain(input: LightsailCreateDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDomainRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDomainRequest)

---

##### `createDomainEntry` <a name="aws-cdk-sdk.lightsail.LightsailClient.createDomainEntry"></a>

```typescript
public createDomainEntry(input: LightsailCreateDomainEntryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDomainEntryRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDomainEntryRequest)

---

##### `createInstances` <a name="aws-cdk-sdk.lightsail.LightsailClient.createInstances"></a>

```typescript
public createInstances(input: LightsailCreateInstancesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateInstancesRequest`](#aws-cdk-sdk.lightsail.LightsailCreateInstancesRequest)

---

##### `createInstancesFromSnapshot` <a name="aws-cdk-sdk.lightsail.LightsailClient.createInstancesFromSnapshot"></a>

```typescript
public createInstancesFromSnapshot(input: LightsailCreateInstancesFromSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest)

---

##### `createInstanceSnapshot` <a name="aws-cdk-sdk.lightsail.LightsailClient.createInstanceSnapshot"></a>

```typescript
public createInstanceSnapshot(input: LightsailCreateInstanceSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateInstanceSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailCreateInstanceSnapshotRequest)

---

##### `createKeyPair` <a name="aws-cdk-sdk.lightsail.LightsailClient.createKeyPair"></a>

```typescript
public createKeyPair(input: LightsailCreateKeyPairRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailCreateKeyPairRequest)

---

##### `createLoadBalancer` <a name="aws-cdk-sdk.lightsail.LightsailClient.createLoadBalancer"></a>

```typescript
public createLoadBalancer(input: LightsailCreateLoadBalancerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerRequest`](#aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerRequest)

---

##### `createLoadBalancerTlsCertificate` <a name="aws-cdk-sdk.lightsail.LightsailClient.createLoadBalancerTlsCertificate"></a>

```typescript
public createLoadBalancerTlsCertificate(input: LightsailCreateLoadBalancerTlsCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerTlsCertificateRequest`](#aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerTlsCertificateRequest)

---

##### `createRelationalDatabase` <a name="aws-cdk-sdk.lightsail.LightsailClient.createRelationalDatabase"></a>

```typescript
public createRelationalDatabase(input: LightsailCreateRelationalDatabaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest)

---

##### `createRelationalDatabaseFromSnapshot` <a name="aws-cdk-sdk.lightsail.LightsailClient.createRelationalDatabaseFromSnapshot"></a>

```typescript
public createRelationalDatabaseFromSnapshot(input: LightsailCreateRelationalDatabaseFromSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotRequest)

---

##### `createRelationalDatabaseSnapshot` <a name="aws-cdk-sdk.lightsail.LightsailClient.createRelationalDatabaseSnapshot"></a>

```typescript
public createRelationalDatabaseSnapshot(input: LightsailCreateRelationalDatabaseSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseSnapshotRequest)

---

##### `deleteAlarm` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteAlarm"></a>

```typescript
public deleteAlarm(input: LightsailDeleteAlarmRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteAlarmRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteAlarmRequest)

---

##### `deleteAutoSnapshot` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteAutoSnapshot"></a>

```typescript
public deleteAutoSnapshot(input: LightsailDeleteAutoSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteAutoSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteAutoSnapshotRequest)

---

##### `deleteCertificate` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteCertificate"></a>

```typescript
public deleteCertificate(input: LightsailDeleteCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteCertificateRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteCertificateRequest)

---

##### `deleteContactMethod` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteContactMethod"></a>

```typescript
public deleteContactMethod(input: LightsailDeleteContactMethodRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteContactMethodRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteContactMethodRequest)

---

##### `deleteContainerImage` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteContainerImage"></a>

```typescript
public deleteContainerImage(input: LightsailDeleteContainerImageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteContainerImageRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteContainerImageRequest)

---

##### `deleteContainerService` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteContainerService"></a>

```typescript
public deleteContainerService(input: LightsailDeleteContainerServiceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteContainerServiceRequest)

---

##### `deleteDisk` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteDisk"></a>

```typescript
public deleteDisk(input: LightsailDeleteDiskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDiskRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDiskRequest)

---

##### `deleteDiskSnapshot` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteDiskSnapshot"></a>

```typescript
public deleteDiskSnapshot(input: LightsailDeleteDiskSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDiskSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDiskSnapshotRequest)

---

##### `deleteDistribution` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteDistribution"></a>

```typescript
public deleteDistribution(input: LightsailDeleteDistributionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDistributionRequest)

---

##### `deleteDomain` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteDomain"></a>

```typescript
public deleteDomain(input: LightsailDeleteDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDomainRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDomainRequest)

---

##### `deleteDomainEntry` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteDomainEntry"></a>

```typescript
public deleteDomainEntry(input: LightsailDeleteDomainEntryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDomainEntryRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDomainEntryRequest)

---

##### `deleteInstance` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteInstance"></a>

```typescript
public deleteInstance(input: LightsailDeleteInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteInstanceRequest)

---

##### `deleteInstanceSnapshot` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteInstanceSnapshot"></a>

```typescript
public deleteInstanceSnapshot(input: LightsailDeleteInstanceSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteInstanceSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteInstanceSnapshotRequest)

---

##### `deleteKeyPair` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteKeyPair"></a>

```typescript
public deleteKeyPair(input: LightsailDeleteKeyPairRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteKeyPairRequest)

---

##### `deleteKnownHostKeys` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteKnownHostKeys"></a>

```typescript
public deleteKnownHostKeys(input: LightsailDeleteKnownHostKeysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteKnownHostKeysRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteKnownHostKeysRequest)

---

##### `deleteLoadBalancer` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteLoadBalancer"></a>

```typescript
public deleteLoadBalancer(input: LightsailDeleteLoadBalancerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerRequest)

---

##### `deleteLoadBalancerTlsCertificate` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteLoadBalancerTlsCertificate"></a>

```typescript
public deleteLoadBalancerTlsCertificate(input: LightsailDeleteLoadBalancerTlsCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerTlsCertificateRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerTlsCertificateRequest)

---

##### `deleteRelationalDatabase` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteRelationalDatabase"></a>

```typescript
public deleteRelationalDatabase(input: LightsailDeleteRelationalDatabaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseRequest)

---

##### `deleteRelationalDatabaseSnapshot` <a name="aws-cdk-sdk.lightsail.LightsailClient.deleteRelationalDatabaseSnapshot"></a>

```typescript
public deleteRelationalDatabaseSnapshot(input: LightsailDeleteRelationalDatabaseSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseSnapshotRequest)

---

##### `detachCertificateFromDistribution` <a name="aws-cdk-sdk.lightsail.LightsailClient.detachCertificateFromDistribution"></a>

```typescript
public detachCertificateFromDistribution(input: LightsailDetachCertificateFromDistributionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDetachCertificateFromDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailDetachCertificateFromDistributionRequest)

---

##### `detachDisk` <a name="aws-cdk-sdk.lightsail.LightsailClient.detachDisk"></a>

```typescript
public detachDisk(input: LightsailDetachDiskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDetachDiskRequest`](#aws-cdk-sdk.lightsail.LightsailDetachDiskRequest)

---

##### `detachInstancesFromLoadBalancer` <a name="aws-cdk-sdk.lightsail.LightsailClient.detachInstancesFromLoadBalancer"></a>

```typescript
public detachInstancesFromLoadBalancer(input: LightsailDetachInstancesFromLoadBalancerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDetachInstancesFromLoadBalancerRequest`](#aws-cdk-sdk.lightsail.LightsailDetachInstancesFromLoadBalancerRequest)

---

##### `detachStaticIp` <a name="aws-cdk-sdk.lightsail.LightsailClient.detachStaticIp"></a>

```typescript
public detachStaticIp(input: LightsailDetachStaticIpRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDetachStaticIpRequest`](#aws-cdk-sdk.lightsail.LightsailDetachStaticIpRequest)

---

##### `disableAddOn` <a name="aws-cdk-sdk.lightsail.LightsailClient.disableAddOn"></a>

```typescript
public disableAddOn(input: LightsailDisableAddOnRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDisableAddOnRequest`](#aws-cdk-sdk.lightsail.LightsailDisableAddOnRequest)

---

##### `downloadDefaultKeyPair` <a name="aws-cdk-sdk.lightsail.LightsailClient.downloadDefaultKeyPair"></a>

```typescript
public downloadDefaultKeyPair()
```

##### `enableAddOn` <a name="aws-cdk-sdk.lightsail.LightsailClient.enableAddOn"></a>

```typescript
public enableAddOn(input: LightsailEnableAddOnRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailEnableAddOnRequest`](#aws-cdk-sdk.lightsail.LightsailEnableAddOnRequest)

---

##### `exportSnapshot` <a name="aws-cdk-sdk.lightsail.LightsailClient.exportSnapshot"></a>

```typescript
public exportSnapshot(input: LightsailExportSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailExportSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailExportSnapshotRequest)

---

##### `fetchActiveNames` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchActiveNames"></a>

```typescript
public fetchActiveNames(input: LightsailGetActiveNamesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetActiveNamesRequest`](#aws-cdk-sdk.lightsail.LightsailGetActiveNamesRequest)

---

##### `fetchAlarms` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchAlarms"></a>

```typescript
public fetchAlarms(input: LightsailGetAlarmsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetAlarmsRequest`](#aws-cdk-sdk.lightsail.LightsailGetAlarmsRequest)

---

##### `fetchAutoSnapshots` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchAutoSnapshots"></a>

```typescript
public fetchAutoSnapshots(input: LightsailGetAutoSnapshotsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetAutoSnapshotsRequest`](#aws-cdk-sdk.lightsail.LightsailGetAutoSnapshotsRequest)

---

##### `fetchBlueprints` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchBlueprints"></a>

```typescript
public fetchBlueprints(input: LightsailGetBlueprintsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetBlueprintsRequest`](#aws-cdk-sdk.lightsail.LightsailGetBlueprintsRequest)

---

##### `fetchBundles` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchBundles"></a>

```typescript
public fetchBundles(input: LightsailGetBundlesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetBundlesRequest`](#aws-cdk-sdk.lightsail.LightsailGetBundlesRequest)

---

##### `fetchCertificates` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchCertificates"></a>

```typescript
public fetchCertificates(input: LightsailGetCertificatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetCertificatesRequest`](#aws-cdk-sdk.lightsail.LightsailGetCertificatesRequest)

---

##### `fetchCloudFormationStackRecords` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchCloudFormationStackRecords"></a>

```typescript
public fetchCloudFormationStackRecords(input: LightsailGetCloudFormationStackRecordsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetCloudFormationStackRecordsRequest`](#aws-cdk-sdk.lightsail.LightsailGetCloudFormationStackRecordsRequest)

---

##### `fetchContactMethods` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchContactMethods"></a>

```typescript
public fetchContactMethods(input: LightsailGetContactMethodsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetContactMethodsRequest`](#aws-cdk-sdk.lightsail.LightsailGetContactMethodsRequest)

---

##### `fetchContainerApiMetadata` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchContainerApiMetadata"></a>

```typescript
public fetchContainerApiMetadata()
```

##### `fetchContainerImages` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchContainerImages"></a>

```typescript
public fetchContainerImages(input: LightsailGetContainerImagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetContainerImagesRequest`](#aws-cdk-sdk.lightsail.LightsailGetContainerImagesRequest)

---

##### `fetchContainerLog` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchContainerLog"></a>

```typescript
public fetchContainerLog(input: LightsailGetContainerLogRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetContainerLogRequest`](#aws-cdk-sdk.lightsail.LightsailGetContainerLogRequest)

---

##### `fetchContainerServiceDeployments` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchContainerServiceDeployments"></a>

```typescript
public fetchContainerServiceDeployments(input: LightsailGetContainerServiceDeploymentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetContainerServiceDeploymentsRequest`](#aws-cdk-sdk.lightsail.LightsailGetContainerServiceDeploymentsRequest)

---

##### `fetchContainerServiceMetricData` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchContainerServiceMetricData"></a>

```typescript
public fetchContainerServiceMetricData(input: LightsailGetContainerServiceMetricDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetContainerServiceMetricDataRequest`](#aws-cdk-sdk.lightsail.LightsailGetContainerServiceMetricDataRequest)

---

##### `fetchContainerServicePowers` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchContainerServicePowers"></a>

```typescript
public fetchContainerServicePowers()
```

##### `fetchContainerServices` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchContainerServices"></a>

```typescript
public fetchContainerServices(input: LightsailGetContainerServicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetContainerServicesRequest`](#aws-cdk-sdk.lightsail.LightsailGetContainerServicesRequest)

---

##### `fetchDisk` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchDisk"></a>

```typescript
public fetchDisk(input: LightsailGetDiskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDiskRequest`](#aws-cdk-sdk.lightsail.LightsailGetDiskRequest)

---

##### `fetchDisks` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchDisks"></a>

```typescript
public fetchDisks(input: LightsailGetDisksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDisksRequest`](#aws-cdk-sdk.lightsail.LightsailGetDisksRequest)

---

##### `fetchDiskSnapshot` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchDiskSnapshot"></a>

```typescript
public fetchDiskSnapshot(input: LightsailGetDiskSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotRequest)

---

##### `fetchDiskSnapshots` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchDiskSnapshots"></a>

```typescript
public fetchDiskSnapshots(input: LightsailGetDiskSnapshotsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotsRequest`](#aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotsRequest)

---

##### `fetchDistributionBundles` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchDistributionBundles"></a>

```typescript
public fetchDistributionBundles()
```

##### `fetchDistributionLatestCacheReset` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchDistributionLatestCacheReset"></a>

```typescript
public fetchDistributionLatestCacheReset(input: LightsailGetDistributionLatestCacheResetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDistributionLatestCacheResetRequest`](#aws-cdk-sdk.lightsail.LightsailGetDistributionLatestCacheResetRequest)

---

##### `fetchDistributionMetricData` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchDistributionMetricData"></a>

```typescript
public fetchDistributionMetricData(input: LightsailGetDistributionMetricDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDistributionMetricDataRequest`](#aws-cdk-sdk.lightsail.LightsailGetDistributionMetricDataRequest)

---

##### `fetchDistributions` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchDistributions"></a>

```typescript
public fetchDistributions(input: LightsailGetDistributionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDistributionsRequest`](#aws-cdk-sdk.lightsail.LightsailGetDistributionsRequest)

---

##### `fetchDomain` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchDomain"></a>

```typescript
public fetchDomain(input: LightsailGetDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDomainRequest`](#aws-cdk-sdk.lightsail.LightsailGetDomainRequest)

---

##### `fetchDomains` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchDomains"></a>

```typescript
public fetchDomains(input: LightsailGetDomainsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDomainsRequest`](#aws-cdk-sdk.lightsail.LightsailGetDomainsRequest)

---

##### `fetchExportSnapshotRecords` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchExportSnapshotRecords"></a>

```typescript
public fetchExportSnapshotRecords(input: LightsailGetExportSnapshotRecordsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetExportSnapshotRecordsRequest`](#aws-cdk-sdk.lightsail.LightsailGetExportSnapshotRecordsRequest)

---

##### `fetchInstance` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchInstance"></a>

```typescript
public fetchInstance(input: LightsailGetInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceRequest)

---

##### `fetchInstanceAccessDetails` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchInstanceAccessDetails"></a>

```typescript
public fetchInstanceAccessDetails(input: LightsailGetInstanceAccessDetailsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceAccessDetailsRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceAccessDetailsRequest)

---

##### `fetchInstanceMetricData` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchInstanceMetricData"></a>

```typescript
public fetchInstanceMetricData(input: LightsailGetInstanceMetricDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceMetricDataRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceMetricDataRequest)

---

##### `fetchInstancePortStates` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchInstancePortStates"></a>

```typescript
public fetchInstancePortStates(input: LightsailGetInstancePortStatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstancePortStatesRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstancePortStatesRequest)

---

##### `fetchInstances` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchInstances"></a>

```typescript
public fetchInstances(input: LightsailGetInstancesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstancesRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstancesRequest)

---

##### `fetchInstanceSnapshot` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchInstanceSnapshot"></a>

```typescript
public fetchInstanceSnapshot(input: LightsailGetInstanceSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotRequest)

---

##### `fetchInstanceSnapshots` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchInstanceSnapshots"></a>

```typescript
public fetchInstanceSnapshots(input: LightsailGetInstanceSnapshotsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotsRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotsRequest)

---

##### `fetchInstanceState` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchInstanceState"></a>

```typescript
public fetchInstanceState(input: LightsailGetInstanceStateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceStateRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceStateRequest)

---

##### `fetchKeyPair` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchKeyPair"></a>

```typescript
public fetchKeyPair(input: LightsailGetKeyPairRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailGetKeyPairRequest)

---

##### `fetchKeyPairs` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchKeyPairs"></a>

```typescript
public fetchKeyPairs(input: LightsailGetKeyPairsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetKeyPairsRequest`](#aws-cdk-sdk.lightsail.LightsailGetKeyPairsRequest)

---

##### `fetchLoadBalancer` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchLoadBalancer"></a>

```typescript
public fetchLoadBalancer(input: LightsailGetLoadBalancerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetLoadBalancerRequest`](#aws-cdk-sdk.lightsail.LightsailGetLoadBalancerRequest)

---

##### `fetchLoadBalancerMetricData` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchLoadBalancerMetricData"></a>

```typescript
public fetchLoadBalancerMetricData(input: LightsailGetLoadBalancerMetricDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetLoadBalancerMetricDataRequest`](#aws-cdk-sdk.lightsail.LightsailGetLoadBalancerMetricDataRequest)

---

##### `fetchLoadBalancers` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchLoadBalancers"></a>

```typescript
public fetchLoadBalancers(input: LightsailGetLoadBalancersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetLoadBalancersRequest`](#aws-cdk-sdk.lightsail.LightsailGetLoadBalancersRequest)

---

##### `fetchLoadBalancerTlsCertificates` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchLoadBalancerTlsCertificates"></a>

```typescript
public fetchLoadBalancerTlsCertificates(input: LightsailGetLoadBalancerTlsCertificatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetLoadBalancerTlsCertificatesRequest`](#aws-cdk-sdk.lightsail.LightsailGetLoadBalancerTlsCertificatesRequest)

---

##### `fetchOperation` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchOperation"></a>

```typescript
public fetchOperation(input: LightsailGetOperationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetOperationRequest`](#aws-cdk-sdk.lightsail.LightsailGetOperationRequest)

---

##### `fetchOperations` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchOperations"></a>

```typescript
public fetchOperations(input: LightsailGetOperationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetOperationsRequest`](#aws-cdk-sdk.lightsail.LightsailGetOperationsRequest)

---

##### `fetchOperationsForResource` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchOperationsForResource"></a>

```typescript
public fetchOperationsForResource(input: LightsailGetOperationsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetOperationsForResourceRequest`](#aws-cdk-sdk.lightsail.LightsailGetOperationsForResourceRequest)

---

##### `fetchRegions` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchRegions"></a>

```typescript
public fetchRegions(input: LightsailGetRegionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRegionsRequest`](#aws-cdk-sdk.lightsail.LightsailGetRegionsRequest)

---

##### `fetchRelationalDatabase` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchRelationalDatabase"></a>

```typescript
public fetchRelationalDatabase(input: LightsailGetRelationalDatabaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest)

---

##### `fetchRelationalDatabaseBlueprints` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchRelationalDatabaseBlueprints"></a>

```typescript
public fetchRelationalDatabaseBlueprints(input: LightsailGetRelationalDatabaseBlueprintsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBlueprintsRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBlueprintsRequest)

---

##### `fetchRelationalDatabaseBundles` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchRelationalDatabaseBundles"></a>

```typescript
public fetchRelationalDatabaseBundles(input: LightsailGetRelationalDatabaseBundlesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBundlesRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBundlesRequest)

---

##### `fetchRelationalDatabaseEvents` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchRelationalDatabaseEvents"></a>

```typescript
public fetchRelationalDatabaseEvents(input: LightsailGetRelationalDatabaseEventsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseEventsRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseEventsRequest)

---

##### `fetchRelationalDatabaseLogEvents` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchRelationalDatabaseLogEvents"></a>

```typescript
public fetchRelationalDatabaseLogEvents(input: LightsailGetRelationalDatabaseLogEventsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogEventsRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogEventsRequest)

---

##### `fetchRelationalDatabaseLogStreams` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchRelationalDatabaseLogStreams"></a>

```typescript
public fetchRelationalDatabaseLogStreams(input: LightsailGetRelationalDatabaseLogStreamsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogStreamsRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogStreamsRequest)

---

##### `fetchRelationalDatabaseMasterUserPassword` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchRelationalDatabaseMasterUserPassword"></a>

```typescript
public fetchRelationalDatabaseMasterUserPassword(input: LightsailGetRelationalDatabaseMasterUserPasswordRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMasterUserPasswordRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMasterUserPasswordRequest)

---

##### `fetchRelationalDatabaseMetricData` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchRelationalDatabaseMetricData"></a>

```typescript
public fetchRelationalDatabaseMetricData(input: LightsailGetRelationalDatabaseMetricDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMetricDataRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMetricDataRequest)

---

##### `fetchRelationalDatabaseParameters` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchRelationalDatabaseParameters"></a>

```typescript
public fetchRelationalDatabaseParameters(input: LightsailGetRelationalDatabaseParametersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseParametersRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseParametersRequest)

---

##### `fetchRelationalDatabases` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchRelationalDatabases"></a>

```typescript
public fetchRelationalDatabases(input: LightsailGetRelationalDatabasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabasesRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabasesRequest)

---

##### `fetchRelationalDatabaseSnapshot` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchRelationalDatabaseSnapshot"></a>

```typescript
public fetchRelationalDatabaseSnapshot(input: LightsailGetRelationalDatabaseSnapshotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotRequest)

---

##### `fetchRelationalDatabaseSnapshots` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchRelationalDatabaseSnapshots"></a>

```typescript
public fetchRelationalDatabaseSnapshots(input: LightsailGetRelationalDatabaseSnapshotsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotsRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotsRequest)

---

##### `fetchStaticIp` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchStaticIp"></a>

```typescript
public fetchStaticIp(input: LightsailGetStaticIpRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetStaticIpRequest`](#aws-cdk-sdk.lightsail.LightsailGetStaticIpRequest)

---

##### `fetchStaticIps` <a name="aws-cdk-sdk.lightsail.LightsailClient.fetchStaticIps"></a>

```typescript
public fetchStaticIps(input: LightsailGetStaticIpsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetStaticIpsRequest`](#aws-cdk-sdk.lightsail.LightsailGetStaticIpsRequest)

---

##### `importKeyPair` <a name="aws-cdk-sdk.lightsail.LightsailClient.importKeyPair"></a>

```typescript
public importKeyPair(input: LightsailImportKeyPairRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailImportKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailImportKeyPairRequest)

---

##### `isVpcPeered` <a name="aws-cdk-sdk.lightsail.LightsailClient.isVpcPeered"></a>

```typescript
public isVpcPeered()
```

##### `openInstancePublicPorts` <a name="aws-cdk-sdk.lightsail.LightsailClient.openInstancePublicPorts"></a>

```typescript
public openInstancePublicPorts(input: LightsailOpenInstancePublicPortsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOpenInstancePublicPortsRequest`](#aws-cdk-sdk.lightsail.LightsailOpenInstancePublicPortsRequest)

---

##### `peerVpc` <a name="aws-cdk-sdk.lightsail.LightsailClient.peerVpc"></a>

```typescript
public peerVpc()
```

##### `putAlarm` <a name="aws-cdk-sdk.lightsail.LightsailClient.putAlarm"></a>

```typescript
public putAlarm(input: LightsailPutAlarmRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailPutAlarmRequest`](#aws-cdk-sdk.lightsail.LightsailPutAlarmRequest)

---

##### `putInstancePublicPorts` <a name="aws-cdk-sdk.lightsail.LightsailClient.putInstancePublicPorts"></a>

```typescript
public putInstancePublicPorts(input: LightsailPutInstancePublicPortsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailPutInstancePublicPortsRequest`](#aws-cdk-sdk.lightsail.LightsailPutInstancePublicPortsRequest)

---

##### `rebootInstance` <a name="aws-cdk-sdk.lightsail.LightsailClient.rebootInstance"></a>

```typescript
public rebootInstance(input: LightsailRebootInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRebootInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailRebootInstanceRequest)

---

##### `rebootRelationalDatabase` <a name="aws-cdk-sdk.lightsail.LightsailClient.rebootRelationalDatabase"></a>

```typescript
public rebootRelationalDatabase(input: LightsailRebootRelationalDatabaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRebootRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailRebootRelationalDatabaseRequest)

---

##### `registerContainerImage` <a name="aws-cdk-sdk.lightsail.LightsailClient.registerContainerImage"></a>

```typescript
public registerContainerImage(input: LightsailRegisterContainerImageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRegisterContainerImageRequest`](#aws-cdk-sdk.lightsail.LightsailRegisterContainerImageRequest)

---

##### `releaseStaticIp` <a name="aws-cdk-sdk.lightsail.LightsailClient.releaseStaticIp"></a>

```typescript
public releaseStaticIp(input: LightsailReleaseStaticIpRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailReleaseStaticIpRequest`](#aws-cdk-sdk.lightsail.LightsailReleaseStaticIpRequest)

---

##### `resetDistributionCache` <a name="aws-cdk-sdk.lightsail.LightsailClient.resetDistributionCache"></a>

```typescript
public resetDistributionCache(input: LightsailResetDistributionCacheRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResetDistributionCacheRequest`](#aws-cdk-sdk.lightsail.LightsailResetDistributionCacheRequest)

---

##### `sendContactMethodVerification` <a name="aws-cdk-sdk.lightsail.LightsailClient.sendContactMethodVerification"></a>

```typescript
public sendContactMethodVerification(input: LightsailSendContactMethodVerificationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailSendContactMethodVerificationRequest`](#aws-cdk-sdk.lightsail.LightsailSendContactMethodVerificationRequest)

---

##### `startInstance` <a name="aws-cdk-sdk.lightsail.LightsailClient.startInstance"></a>

```typescript
public startInstance(input: LightsailStartInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailStartInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailStartInstanceRequest)

---

##### `startRelationalDatabase` <a name="aws-cdk-sdk.lightsail.LightsailClient.startRelationalDatabase"></a>

```typescript
public startRelationalDatabase(input: LightsailStartRelationalDatabaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailStartRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailStartRelationalDatabaseRequest)

---

##### `stopInstance` <a name="aws-cdk-sdk.lightsail.LightsailClient.stopInstance"></a>

```typescript
public stopInstance(input: LightsailStopInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailStopInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailStopInstanceRequest)

---

##### `stopRelationalDatabase` <a name="aws-cdk-sdk.lightsail.LightsailClient.stopRelationalDatabase"></a>

```typescript
public stopRelationalDatabase(input: LightsailStopRelationalDatabaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailStopRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailStopRelationalDatabaseRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.lightsail.LightsailClient.tagResource"></a>

```typescript
public tagResource(input: LightsailTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTagResourceRequest`](#aws-cdk-sdk.lightsail.LightsailTagResourceRequest)

---

##### `testAlarm` <a name="aws-cdk-sdk.lightsail.LightsailClient.testAlarm"></a>

```typescript
public testAlarm(input: LightsailTestAlarmRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTestAlarmRequest`](#aws-cdk-sdk.lightsail.LightsailTestAlarmRequest)

---

##### `unpeerVpc` <a name="aws-cdk-sdk.lightsail.LightsailClient.unpeerVpc"></a>

```typescript
public unpeerVpc()
```

##### `untagResource` <a name="aws-cdk-sdk.lightsail.LightsailClient.untagResource"></a>

```typescript
public untagResource(input: LightsailUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUntagResourceRequest`](#aws-cdk-sdk.lightsail.LightsailUntagResourceRequest)

---

##### `updateContainerService` <a name="aws-cdk-sdk.lightsail.LightsailClient.updateContainerService"></a>

```typescript
public updateContainerService(input: LightsailUpdateContainerServiceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest)

---

##### `updateDistribution` <a name="aws-cdk-sdk.lightsail.LightsailClient.updateDistribution"></a>

```typescript
public updateDistribution(input: LightsailUpdateDistributionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateDistributionRequest)

---

##### `updateDistributionBundle` <a name="aws-cdk-sdk.lightsail.LightsailClient.updateDistributionBundle"></a>

```typescript
public updateDistributionBundle(input: LightsailUpdateDistributionBundleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateDistributionBundleRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateDistributionBundleRequest)

---

##### `updateDomainEntry` <a name="aws-cdk-sdk.lightsail.LightsailClient.updateDomainEntry"></a>

```typescript
public updateDomainEntry(input: LightsailUpdateDomainEntryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateDomainEntryRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateDomainEntryRequest)

---

##### `updateLoadBalancerAttribute` <a name="aws-cdk-sdk.lightsail.LightsailClient.updateLoadBalancerAttribute"></a>

```typescript
public updateLoadBalancerAttribute(input: LightsailUpdateLoadBalancerAttributeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateLoadBalancerAttributeRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateLoadBalancerAttributeRequest)

---

##### `updateRelationalDatabase` <a name="aws-cdk-sdk.lightsail.LightsailClient.updateRelationalDatabase"></a>

```typescript
public updateRelationalDatabase(input: LightsailUpdateRelationalDatabaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseRequest)

---

##### `updateRelationalDatabaseParameters` <a name="aws-cdk-sdk.lightsail.LightsailClient.updateRelationalDatabaseParameters"></a>

```typescript
public updateRelationalDatabaseParameters(input: LightsailUpdateRelationalDatabaseParametersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseParametersRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseParametersRequest)

---




## Structs <a name="Structs"></a>

### LightsailAddOn <a name="aws-cdk-sdk.lightsail.LightsailAddOn"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAddOn: lightsail.LightsailAddOn = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAddOn.property.name"></a>

- *Type:* `string`

---

##### `nextSnapshotTimeOfDay`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAddOn.property.nextSnapshotTimeOfDay"></a>

- *Type:* `string`

---

##### `snapshotTimeOfDay`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAddOn.property.snapshotTimeOfDay"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAddOn.property.status"></a>

- *Type:* `string`

---

### LightsailAddOnRequest <a name="aws-cdk-sdk.lightsail.LightsailAddOnRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAddOnRequest: lightsail.LightsailAddOnRequest = { ... }
```

##### `addOnType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailAddOnRequest.property.addOnType"></a>

- *Type:* `string`

---

##### `autoSnapshotAddOnRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAddOnRequest.property.autoSnapshotAddOnRequest"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAutoSnapshotAddOnRequest`](#aws-cdk-sdk.lightsail.LightsailAutoSnapshotAddOnRequest)

---

### LightsailAlarm <a name="aws-cdk-sdk.lightsail.LightsailAlarm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAlarm: lightsail.LightsailAlarm = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.arn"></a>

- *Type:* `string`

---

##### `comparisonOperator`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `contactProtocols`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.contactProtocols"></a>

- *Type:* `string`[]

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.createdAt"></a>

- *Type:* `string`

---

##### `datapointsToAlarm`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.datapointsToAlarm"></a>

- *Type:* `number`

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.evaluationPeriods"></a>

- *Type:* `number`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.metricName"></a>

- *Type:* `string`

---

##### `monitoredResourceInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.monitoredResourceInfo"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailMonitoredResourceInfo`](#aws-cdk-sdk.lightsail.LightsailMonitoredResourceInfo)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.name"></a>

- *Type:* `string`

---

##### `notificationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.notificationEnabled"></a>

- *Type:* `boolean`

---

##### `notificationTriggers`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.notificationTriggers"></a>

- *Type:* `string`[]

---

##### `period`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.period"></a>

- *Type:* `number`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.resourceType"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.state"></a>

- *Type:* `string`

---

##### `statistic`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.statistic"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.supportCode"></a>

- *Type:* `string`

---

##### `threshold`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.threshold"></a>

- *Type:* `number`

---

##### `treatMissingData`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.treatMissingData"></a>

- *Type:* `string`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAlarm.property.unit"></a>

- *Type:* `string`

---

### LightsailAllocateStaticIpRequest <a name="aws-cdk-sdk.lightsail.LightsailAllocateStaticIpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAllocateStaticIpRequest: lightsail.LightsailAllocateStaticIpRequest = { ... }
```

##### `staticIpName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailAllocateStaticIpRequest.property.staticIpName"></a>

- *Type:* `string`

---

### LightsailAllocateStaticIpResult <a name="aws-cdk-sdk.lightsail.LightsailAllocateStaticIpResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAllocateStaticIpResult: lightsail.LightsailAllocateStaticIpResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAllocateStaticIpResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailAttachCertificateToDistributionRequest <a name="aws-cdk-sdk.lightsail.LightsailAttachCertificateToDistributionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAttachCertificateToDistributionRequest: lightsail.LightsailAttachCertificateToDistributionRequest = { ... }
```

##### `certificateName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachCertificateToDistributionRequest.property.certificateName"></a>

- *Type:* `string`

---

##### `distributionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachCertificateToDistributionRequest.property.distributionName"></a>

- *Type:* `string`

---

### LightsailAttachCertificateToDistributionResult <a name="aws-cdk-sdk.lightsail.LightsailAttachCertificateToDistributionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAttachCertificateToDistributionResult: lightsail.LightsailAttachCertificateToDistributionResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachCertificateToDistributionResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailAttachDiskRequest <a name="aws-cdk-sdk.lightsail.LightsailAttachDiskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAttachDiskRequest: lightsail.LightsailAttachDiskRequest = { ... }
```

##### `diskName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachDiskRequest.property.diskName"></a>

- *Type:* `string`

---

##### `diskPath`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachDiskRequest.property.diskPath"></a>

- *Type:* `string`

---

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachDiskRequest.property.instanceName"></a>

- *Type:* `string`

---

### LightsailAttachDiskResult <a name="aws-cdk-sdk.lightsail.LightsailAttachDiskResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAttachDiskResult: lightsail.LightsailAttachDiskResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachDiskResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailAttachedDisk <a name="aws-cdk-sdk.lightsail.LightsailAttachedDisk"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAttachedDisk: lightsail.LightsailAttachedDisk = { ... }
```

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachedDisk.property.path"></a>

- *Type:* `string`

---

##### `sizeInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachedDisk.property.sizeInGb"></a>

- *Type:* `number`

---

### LightsailAttachInstancesToLoadBalancerRequest <a name="aws-cdk-sdk.lightsail.LightsailAttachInstancesToLoadBalancerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAttachInstancesToLoadBalancerRequest: lightsail.LightsailAttachInstancesToLoadBalancerRequest = { ... }
```

##### `instanceNames`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachInstancesToLoadBalancerRequest.property.instanceNames"></a>

- *Type:* `string`[]

---

##### `loadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachInstancesToLoadBalancerRequest.property.loadBalancerName"></a>

- *Type:* `string`

---

### LightsailAttachInstancesToLoadBalancerResult <a name="aws-cdk-sdk.lightsail.LightsailAttachInstancesToLoadBalancerResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAttachInstancesToLoadBalancerResult: lightsail.LightsailAttachInstancesToLoadBalancerResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachInstancesToLoadBalancerResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailAttachLoadBalancerTlsCertificateRequest <a name="aws-cdk-sdk.lightsail.LightsailAttachLoadBalancerTlsCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAttachLoadBalancerTlsCertificateRequest: lightsail.LightsailAttachLoadBalancerTlsCertificateRequest = { ... }
```

##### `certificateName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachLoadBalancerTlsCertificateRequest.property.certificateName"></a>

- *Type:* `string`

---

##### `loadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachLoadBalancerTlsCertificateRequest.property.loadBalancerName"></a>

- *Type:* `string`

---

### LightsailAttachLoadBalancerTlsCertificateResult <a name="aws-cdk-sdk.lightsail.LightsailAttachLoadBalancerTlsCertificateResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAttachLoadBalancerTlsCertificateResult: lightsail.LightsailAttachLoadBalancerTlsCertificateResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachLoadBalancerTlsCertificateResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailAttachStaticIpRequest <a name="aws-cdk-sdk.lightsail.LightsailAttachStaticIpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAttachStaticIpRequest: lightsail.LightsailAttachStaticIpRequest = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachStaticIpRequest.property.instanceName"></a>

- *Type:* `string`

---

##### `staticIpName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachStaticIpRequest.property.staticIpName"></a>

- *Type:* `string`

---

### LightsailAttachStaticIpResult <a name="aws-cdk-sdk.lightsail.LightsailAttachStaticIpResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAttachStaticIpResult: lightsail.LightsailAttachStaticIpResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAttachStaticIpResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailAutoSnapshotAddOnRequest <a name="aws-cdk-sdk.lightsail.LightsailAutoSnapshotAddOnRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAutoSnapshotAddOnRequest: lightsail.LightsailAutoSnapshotAddOnRequest = { ... }
```

##### `snapshotTimeOfDay`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAutoSnapshotAddOnRequest.property.snapshotTimeOfDay"></a>

- *Type:* `string`

---

### LightsailAutoSnapshotDetails <a name="aws-cdk-sdk.lightsail.LightsailAutoSnapshotDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAutoSnapshotDetails: lightsail.LightsailAutoSnapshotDetails = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAutoSnapshotDetails.property.createdAt"></a>

- *Type:* `string`

---

##### `date`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAutoSnapshotDetails.property.date"></a>

- *Type:* `string`

---

##### `fromAttachedDisks`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAutoSnapshotDetails.property.fromAttachedDisks"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAttachedDisk`](#aws-cdk-sdk.lightsail.LightsailAttachedDisk)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAutoSnapshotDetails.property.status"></a>

- *Type:* `string`

---

### LightsailAvailabilityZone <a name="aws-cdk-sdk.lightsail.LightsailAvailabilityZone"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailAvailabilityZone: lightsail.LightsailAvailabilityZone = { ... }
```

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAvailabilityZone.property.state"></a>

- *Type:* `string`

---

##### `zoneName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailAvailabilityZone.property.zoneName"></a>

- *Type:* `string`

---

### LightsailBlueprint <a name="aws-cdk-sdk.lightsail.LightsailBlueprint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailBlueprint: lightsail.LightsailBlueprint = { ... }
```

##### `blueprintId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBlueprint.property.blueprintId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBlueprint.property.description"></a>

- *Type:* `string`

---

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBlueprint.property.group"></a>

- *Type:* `string`

---

##### `isActive`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBlueprint.property.isActive"></a>

- *Type:* `boolean`

---

##### `licenseUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBlueprint.property.licenseUrl"></a>

- *Type:* `string`

---

##### `minPower`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBlueprint.property.minPower"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBlueprint.property.name"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBlueprint.property.platform"></a>

- *Type:* `string`

---

##### `productUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBlueprint.property.productUrl"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBlueprint.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBlueprint.property.version"></a>

- *Type:* `string`

---

##### `versionCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBlueprint.property.versionCode"></a>

- *Type:* `string`

---

### LightsailBundle <a name="aws-cdk-sdk.lightsail.LightsailBundle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailBundle: lightsail.LightsailBundle = { ... }
```

##### `bundleId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBundle.property.bundleId"></a>

- *Type:* `string`

---

##### `cpuCount`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBundle.property.cpuCount"></a>

- *Type:* `number`

---

##### `diskSizeInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBundle.property.diskSizeInGb"></a>

- *Type:* `number`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBundle.property.instanceType"></a>

- *Type:* `string`

---

##### `isActive`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBundle.property.isActive"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBundle.property.name"></a>

- *Type:* `string`

---

##### `power`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBundle.property.power"></a>

- *Type:* `number`

---

##### `price`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBundle.property.price"></a>

- *Type:* `number`

---

##### `ramSizeInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBundle.property.ramSizeInGb"></a>

- *Type:* `number`

---

##### `supportedPlatforms`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBundle.property.supportedPlatforms"></a>

- *Type:* `string`[]

---

##### `transferPerMonthInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailBundle.property.transferPerMonthInGb"></a>

- *Type:* `number`

---

### LightsailCacheBehavior <a name="aws-cdk-sdk.lightsail.LightsailCacheBehavior"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCacheBehavior: lightsail.LightsailCacheBehavior = { ... }
```

##### `behavior`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCacheBehavior.property.behavior"></a>

- *Type:* `string`

---

### LightsailCacheBehaviorPerPath <a name="aws-cdk-sdk.lightsail.LightsailCacheBehaviorPerPath"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCacheBehaviorPerPath: lightsail.LightsailCacheBehaviorPerPath = { ... }
```

##### `behavior`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCacheBehaviorPerPath.property.behavior"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCacheBehaviorPerPath.property.path"></a>

- *Type:* `string`

---

### LightsailCacheSettings <a name="aws-cdk-sdk.lightsail.LightsailCacheSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCacheSettings: lightsail.LightsailCacheSettings = { ... }
```

##### `allowedHTTPMethods`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCacheSettings.property.allowedHTTPMethods"></a>

- *Type:* `string`

---

##### `cachedHTTPMethods`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCacheSettings.property.cachedHTTPMethods"></a>

- *Type:* `string`

---

##### `defaultTTL`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCacheSettings.property.defaultTTL"></a>

- *Type:* `number`

---

##### `forwardedCookies`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCacheSettings.property.forwardedCookies"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCookieObject`](#aws-cdk-sdk.lightsail.LightsailCookieObject)

---

##### `forwardedHeaders`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCacheSettings.property.forwardedHeaders"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailHeaderObject`](#aws-cdk-sdk.lightsail.LightsailHeaderObject)

---

##### `forwardedQueryStrings`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCacheSettings.property.forwardedQueryStrings"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailQueryStringObject`](#aws-cdk-sdk.lightsail.LightsailQueryStringObject)

---

##### `maximumTTL`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCacheSettings.property.maximumTTL"></a>

- *Type:* `number`

---

##### `minimumTTL`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCacheSettings.property.minimumTTL"></a>

- *Type:* `number`

---

### LightsailCertificate <a name="aws-cdk-sdk.lightsail.LightsailCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCertificate: lightsail.LightsailCertificate = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.createdAt"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.domainName"></a>

- *Type:* `string`

---

##### `domainValidationRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.domainValidationRecords"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDomainValidationRecord`](#aws-cdk-sdk.lightsail.LightsailDomainValidationRecord)[]

---

##### `eligibleToRenew`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.eligibleToRenew"></a>

- *Type:* `string`

---

##### `inUseResourceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.inUseResourceCount"></a>

- *Type:* `number`

---

##### `issuedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.issuedAt"></a>

- *Type:* `string`

---

##### `issuerCA`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.issuerCA"></a>

- *Type:* `string`

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.keyAlgorithm"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.name"></a>

- *Type:* `string`

---

##### `notAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.notAfter"></a>

- *Type:* `string`

---

##### `notBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.notBefore"></a>

- *Type:* `string`

---

##### `renewalSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.renewalSummary"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRenewalSummary`](#aws-cdk-sdk.lightsail.LightsailRenewalSummary)

---

##### `requestFailureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.requestFailureReason"></a>

- *Type:* `string`

---

##### `revocationReason`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.revocationReason"></a>

- *Type:* `string`

---

##### `revokedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.revokedAt"></a>

- *Type:* `string`

---

##### `serialNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.serialNumber"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.status"></a>

- *Type:* `string`

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.subjectAlternativeNames"></a>

- *Type:* `string`[]

---

##### `supportCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificate.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailCertificateSummary <a name="aws-cdk-sdk.lightsail.LightsailCertificateSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCertificateSummary: lightsail.LightsailCertificateSummary = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificateSummary.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificateSummary.property.certificateDetail"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCertificate`](#aws-cdk-sdk.lightsail.LightsailCertificate)

---

##### `certificateName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificateSummary.property.certificateName"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificateSummary.property.domainName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCertificateSummary.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailCloseInstancePublicPortsRequest <a name="aws-cdk-sdk.lightsail.LightsailCloseInstancePublicPortsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCloseInstancePublicPortsRequest: lightsail.LightsailCloseInstancePublicPortsRequest = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCloseInstancePublicPortsRequest.property.instanceName"></a>

- *Type:* `string`

---

##### `portInfo`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCloseInstancePublicPortsRequest.property.portInfo"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailPortInfo`](#aws-cdk-sdk.lightsail.LightsailPortInfo)

---

### LightsailCloseInstancePublicPortsResult <a name="aws-cdk-sdk.lightsail.LightsailCloseInstancePublicPortsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCloseInstancePublicPortsResult: lightsail.LightsailCloseInstancePublicPortsResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCloseInstancePublicPortsResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailCloudFormationStackRecord <a name="aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCloudFormationStackRecord: lightsail.LightsailCloudFormationStackRecord = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecord.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecord.property.createdAt"></a>

- *Type:* `string`

---

##### `destinationInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecord.property.destinationInfo"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDestinationInfo`](#aws-cdk-sdk.lightsail.LightsailDestinationInfo)

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecord.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecord.property.name"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecord.property.resourceType"></a>

- *Type:* `string`

---

##### `sourceInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecord.property.sourceInfo"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecordSourceInfo`](#aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecordSourceInfo)[]

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecord.property.state"></a>

- *Type:* `string`

---

### LightsailCloudFormationStackRecordSourceInfo <a name="aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecordSourceInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCloudFormationStackRecordSourceInfo: lightsail.LightsailCloudFormationStackRecordSourceInfo = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecordSourceInfo.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecordSourceInfo.property.name"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecordSourceInfo.property.resourceType"></a>

- *Type:* `string`

---

### LightsailContactMethod <a name="aws-cdk-sdk.lightsail.LightsailContactMethod"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailContactMethod: lightsail.LightsailContactMethod = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContactMethod.property.arn"></a>

- *Type:* `string`

---

##### `contactEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContactMethod.property.contactEndpoint"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContactMethod.property.createdAt"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContactMethod.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContactMethod.property.name"></a>

- *Type:* `string`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContactMethod.property.protocol"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContactMethod.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContactMethod.property.status"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContactMethod.property.supportCode"></a>

- *Type:* `string`

---

### LightsailContainer <a name="aws-cdk-sdk.lightsail.LightsailContainer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailContainer: lightsail.LightsailContainer = { ... }
```

##### `command`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainer.property.command"></a>

- *Type:* `string`[]

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainer.property.environment"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `image`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainer.property.image"></a>

- *Type:* `string`

---

##### `ports`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainer.property.ports"></a>

- *Type:* {[ key: string ]: `string`}

---

### LightsailContainerImage <a name="aws-cdk-sdk.lightsail.LightsailContainerImage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailContainerImage: lightsail.LightsailContainerImage = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerImage.property.createdAt"></a>

- *Type:* `string`

---

##### `digest`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerImage.property.digest"></a>

- *Type:* `string`

---

##### `image`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerImage.property.image"></a>

- *Type:* `string`

---

### LightsailContainerService <a name="aws-cdk-sdk.lightsail.LightsailContainerService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailContainerService: lightsail.LightsailContainerService = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.arn"></a>

- *Type:* `string`

---

##### `containerServiceName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.containerServiceName"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.createdAt"></a>

- *Type:* `string`

---

##### `currentDeployment`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.currentDeployment"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerServiceDeployment`](#aws-cdk-sdk.lightsail.LightsailContainerServiceDeployment)

---

##### `isDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.isDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `nextDeployment`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.nextDeployment"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerServiceDeployment`](#aws-cdk-sdk.lightsail.LightsailContainerServiceDeployment)

---

##### `power`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.power"></a>

- *Type:* `string`

---

##### `powerId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.powerId"></a>

- *Type:* `string`

---

##### `principalArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.principalArn"></a>

- *Type:* `string`

---

##### `privateDomainName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.privateDomainName"></a>

- *Type:* `string`

---

##### `publicDomainNames`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.publicDomainNames"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.resourceType"></a>

- *Type:* `string`

---

##### `scale`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.scale"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerService.property.url"></a>

- *Type:* `string`

---

### LightsailContainerServiceDeployment <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceDeployment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailContainerServiceDeployment: lightsail.LightsailContainerServiceDeployment = { ... }
```

##### `containers`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceDeployment.property.containers"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.lightsail.LightsailContainer`](#aws-cdk-sdk.lightsail.LightsailContainer)}

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceDeployment.property.createdAt"></a>

- *Type:* `string`

---

##### `publicEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceDeployment.property.publicEndpoint"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerServiceEndpoint`](#aws-cdk-sdk.lightsail.LightsailContainerServiceEndpoint)

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceDeployment.property.state"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceDeployment.property.version"></a>

- *Type:* `number`

---

### LightsailContainerServiceDeploymentRequest <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailContainerServiceDeploymentRequest: lightsail.LightsailContainerServiceDeploymentRequest = { ... }
```

##### `containers`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceDeploymentRequest.property.containers"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.lightsail.LightsailContainer`](#aws-cdk-sdk.lightsail.LightsailContainer)}

---

##### `publicEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceDeploymentRequest.property.publicEndpoint"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailEndpointRequest`](#aws-cdk-sdk.lightsail.LightsailEndpointRequest)

---

### LightsailContainerServiceEndpoint <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailContainerServiceEndpoint: lightsail.LightsailContainerServiceEndpoint = { ... }
```

##### `containerName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceEndpoint.property.containerName"></a>

- *Type:* `string`

---

##### `containerPort`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceEndpoint.property.containerPort"></a>

- *Type:* `number`

---

##### `healthCheck`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceEndpoint.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerServiceHealthCheckConfig`](#aws-cdk-sdk.lightsail.LightsailContainerServiceHealthCheckConfig)

---

### LightsailContainerServiceHealthCheckConfig <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceHealthCheckConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailContainerServiceHealthCheckConfig: lightsail.LightsailContainerServiceHealthCheckConfig = { ... }
```

##### `healthyThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceHealthCheckConfig.property.healthyThreshold"></a>

- *Type:* `number`

---

##### `intervalSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceHealthCheckConfig.property.intervalSeconds"></a>

- *Type:* `number`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceHealthCheckConfig.property.path"></a>

- *Type:* `string`

---

##### `successCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceHealthCheckConfig.property.successCodes"></a>

- *Type:* `string`

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceHealthCheckConfig.property.timeoutSeconds"></a>

- *Type:* `number`

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceHealthCheckConfig.property.unhealthyThreshold"></a>

- *Type:* `number`

---

### LightsailContainerServiceLogEvent <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceLogEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailContainerServiceLogEvent: lightsail.LightsailContainerServiceLogEvent = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceLogEvent.property.createdAt"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceLogEvent.property.message"></a>

- *Type:* `string`

---

### LightsailContainerServicePower <a name="aws-cdk-sdk.lightsail.LightsailContainerServicePower"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailContainerServicePower: lightsail.LightsailContainerServicePower = { ... }
```

##### `cpuCount`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServicePower.property.cpuCount"></a>

- *Type:* `number`

---

##### `isActive`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServicePower.property.isActive"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServicePower.property.name"></a>

- *Type:* `string`

---

##### `powerId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServicePower.property.powerId"></a>

- *Type:* `string`

---

##### `price`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServicePower.property.price"></a>

- *Type:* `number`

---

##### `ramSizeInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServicePower.property.ramSizeInGb"></a>

- *Type:* `number`

---

### LightsailContainerServiceRegistryLogin <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceRegistryLogin"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailContainerServiceRegistryLogin: lightsail.LightsailContainerServiceRegistryLogin = { ... }
```

##### `expiresAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceRegistryLogin.property.expiresAt"></a>

- *Type:* `string`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceRegistryLogin.property.password"></a>

- *Type:* `string`

---

##### `registry`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceRegistryLogin.property.registry"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServiceRegistryLogin.property.username"></a>

- *Type:* `string`

---

### LightsailContainerServicesListResult <a name="aws-cdk-sdk.lightsail.LightsailContainerServicesListResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailContainerServicesListResult: lightsail.LightsailContainerServicesListResult = { ... }
```

##### `containerServices`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailContainerServicesListResult.property.containerServices"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerService`](#aws-cdk-sdk.lightsail.LightsailContainerService)[]

---

### LightsailCookieObject <a name="aws-cdk-sdk.lightsail.LightsailCookieObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCookieObject: lightsail.LightsailCookieObject = { ... }
```

##### `cookiesAllowList`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCookieObject.property.cookiesAllowList"></a>

- *Type:* `string`[]

---

##### `option`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCookieObject.property.option"></a>

- *Type:* `string`

---

### LightsailCopySnapshotRequest <a name="aws-cdk-sdk.lightsail.LightsailCopySnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCopySnapshotRequest: lightsail.LightsailCopySnapshotRequest = { ... }
```

##### `sourceRegion`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCopySnapshotRequest.property.sourceRegion"></a>

- *Type:* `string`

---

##### `targetSnapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCopySnapshotRequest.property.targetSnapshotName"></a>

- *Type:* `string`

---

##### `restoreDate`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCopySnapshotRequest.property.restoreDate"></a>

- *Type:* `string`

---

##### `sourceResourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCopySnapshotRequest.property.sourceResourceName"></a>

- *Type:* `string`

---

##### `sourceSnapshotName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCopySnapshotRequest.property.sourceSnapshotName"></a>

- *Type:* `string`

---

##### `useLatestRestorableAutoSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCopySnapshotRequest.property.useLatestRestorableAutoSnapshot"></a>

- *Type:* `boolean`

---

### LightsailCopySnapshotResult <a name="aws-cdk-sdk.lightsail.LightsailCopySnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCopySnapshotResult: lightsail.LightsailCopySnapshotResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCopySnapshotResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailCreateCertificateRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateCertificateRequest: lightsail.LightsailCreateCertificateRequest = { ... }
```

##### `certificateName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateCertificateRequest.property.certificateName"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateCertificateRequest.property.domainName"></a>

- *Type:* `string`

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateCertificateRequest.property.subjectAlternativeNames"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateCertificateRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailCreateCertificateResult <a name="aws-cdk-sdk.lightsail.LightsailCreateCertificateResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateCertificateResult: lightsail.LightsailCreateCertificateResult = { ... }
```

##### `certificate`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateCertificateResult.property.certificate"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCertificateSummary`](#aws-cdk-sdk.lightsail.LightsailCertificateSummary)

---

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateCertificateResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailCreateCloudFormationStackRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateCloudFormationStackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateCloudFormationStackRequest: lightsail.LightsailCreateCloudFormationStackRequest = { ... }
```

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateCloudFormationStackRequest.property.instances"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstanceEntry`](#aws-cdk-sdk.lightsail.LightsailInstanceEntry)[]

---

### LightsailCreateCloudFormationStackResult <a name="aws-cdk-sdk.lightsail.LightsailCreateCloudFormationStackResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateCloudFormationStackResult: lightsail.LightsailCreateCloudFormationStackResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateCloudFormationStackResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailCreateContactMethodRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateContactMethodRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateContactMethodRequest: lightsail.LightsailCreateContactMethodRequest = { ... }
```

##### `contactEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateContactMethodRequest.property.contactEndpoint"></a>

- *Type:* `string`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateContactMethodRequest.property.protocol"></a>

- *Type:* `string`

---

### LightsailCreateContactMethodResult <a name="aws-cdk-sdk.lightsail.LightsailCreateContactMethodResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateContactMethodResult: lightsail.LightsailCreateContactMethodResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateContactMethodResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailCreateContainerServiceDeploymentRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateContainerServiceDeploymentRequest: lightsail.LightsailCreateContainerServiceDeploymentRequest = { ... }
```

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest.property.serviceName"></a>

- *Type:* `string`

---

##### `containers`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest.property.containers"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.lightsail.LightsailContainer`](#aws-cdk-sdk.lightsail.LightsailContainer)}

---

##### `publicEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest.property.publicEndpoint"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailEndpointRequest`](#aws-cdk-sdk.lightsail.LightsailEndpointRequest)

---

### LightsailCreateContainerServiceDeploymentResult <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateContainerServiceDeploymentResult: lightsail.LightsailCreateContainerServiceDeploymentResult = { ... }
```

##### `containerService`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentResult.property.containerService"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerService`](#aws-cdk-sdk.lightsail.LightsailContainerService)

---

### LightsailCreateContainerServiceRegistryLoginRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRegistryLoginRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateContainerServiceRegistryLoginRequest: lightsail.LightsailCreateContainerServiceRegistryLoginRequest = { ... }
```

### LightsailCreateContainerServiceRegistryLoginResult <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRegistryLoginResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateContainerServiceRegistryLoginResult: lightsail.LightsailCreateContainerServiceRegistryLoginResult = { ... }
```

##### `registryLogin`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRegistryLoginResult.property.registryLogin"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerServiceRegistryLogin`](#aws-cdk-sdk.lightsail.LightsailContainerServiceRegistryLogin)

---

### LightsailCreateContainerServiceRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateContainerServiceRequest: lightsail.LightsailCreateContainerServiceRequest = { ... }
```

##### `power`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest.property.power"></a>

- *Type:* `string`

---

##### `scale`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest.property.scale"></a>

- *Type:* `number`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest.property.serviceName"></a>

- *Type:* `string`

---

##### `deployment`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest.property.deployment"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerServiceDeploymentRequest`](#aws-cdk-sdk.lightsail.LightsailContainerServiceDeploymentRequest)

---

##### `publicDomainNames`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest.property.publicDomainNames"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailCreateContainerServiceResult <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateContainerServiceResult: lightsail.LightsailCreateContainerServiceResult = { ... }
```

##### `containerService`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateContainerServiceResult.property.containerService"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerService`](#aws-cdk-sdk.lightsail.LightsailContainerService)

---

### LightsailCreateDiskFromSnapshotRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateDiskFromSnapshotRequest: lightsail.LightsailCreateDiskFromSnapshotRequest = { ... }
```

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotRequest.property.availabilityZone"></a>

- *Type:* `string`

---

##### `diskName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotRequest.property.diskName"></a>

- *Type:* `string`

---

##### `sizeInGb`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotRequest.property.sizeInGb"></a>

- *Type:* `number`

---

##### `addOns`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotRequest.property.addOns"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAddOnRequest`](#aws-cdk-sdk.lightsail.LightsailAddOnRequest)[]

---

##### `diskSnapshotName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotRequest.property.diskSnapshotName"></a>

- *Type:* `string`

---

##### `restoreDate`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotRequest.property.restoreDate"></a>

- *Type:* `string`

---

##### `sourceDiskName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotRequest.property.sourceDiskName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

##### `useLatestRestorableAutoSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotRequest.property.useLatestRestorableAutoSnapshot"></a>

- *Type:* `boolean`

---

### LightsailCreateDiskFromSnapshotResult <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateDiskFromSnapshotResult: lightsail.LightsailCreateDiskFromSnapshotResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailCreateDiskRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateDiskRequest: lightsail.LightsailCreateDiskRequest = { ... }
```

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskRequest.property.availabilityZone"></a>

- *Type:* `string`

---

##### `diskName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskRequest.property.diskName"></a>

- *Type:* `string`

---

##### `sizeInGb`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskRequest.property.sizeInGb"></a>

- *Type:* `number`

---

##### `addOns`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskRequest.property.addOns"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAddOnRequest`](#aws-cdk-sdk.lightsail.LightsailAddOnRequest)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailCreateDiskResult <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateDiskResult: lightsail.LightsailCreateDiskResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailCreateDiskSnapshotRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateDiskSnapshotRequest: lightsail.LightsailCreateDiskSnapshotRequest = { ... }
```

##### `diskSnapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskSnapshotRequest.property.diskSnapshotName"></a>

- *Type:* `string`

---

##### `diskName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskSnapshotRequest.property.diskName"></a>

- *Type:* `string`

---

##### `instanceName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskSnapshotRequest.property.instanceName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskSnapshotRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailCreateDiskSnapshotResult <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateDiskSnapshotResult: lightsail.LightsailCreateDiskSnapshotResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDiskSnapshotResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailCreateDistributionRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateDistributionRequest: lightsail.LightsailCreateDistributionRequest = { ... }
```

##### `bundleId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest.property.bundleId"></a>

- *Type:* `string`

---

##### `defaultCacheBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest.property.defaultCacheBehavior"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCacheBehavior`](#aws-cdk-sdk.lightsail.LightsailCacheBehavior)

---

##### `distributionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest.property.distributionName"></a>

- *Type:* `string`

---

##### `origin`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest.property.origin"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInputOrigin`](#aws-cdk-sdk.lightsail.LightsailInputOrigin)

---

##### `cacheBehaviors`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest.property.cacheBehaviors"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCacheBehaviorPerPath`](#aws-cdk-sdk.lightsail.LightsailCacheBehaviorPerPath)[]

---

##### `cacheBehaviorSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest.property.cacheBehaviorSettings"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCacheSettings`](#aws-cdk-sdk.lightsail.LightsailCacheSettings)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailCreateDistributionResult <a name="aws-cdk-sdk.lightsail.LightsailCreateDistributionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateDistributionResult: lightsail.LightsailCreateDistributionResult = { ... }
```

##### `distribution`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDistributionResult.property.distribution"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailLightsailDistribution`](#aws-cdk-sdk.lightsail.LightsailLightsailDistribution)

---

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDistributionResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailCreateDomainEntryRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateDomainEntryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateDomainEntryRequest: lightsail.LightsailCreateDomainEntryRequest = { ... }
```

##### `domainEntry`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDomainEntryRequest.property.domainEntry"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDomainEntry`](#aws-cdk-sdk.lightsail.LightsailDomainEntry)

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDomainEntryRequest.property.domainName"></a>

- *Type:* `string`

---

### LightsailCreateDomainEntryResult <a name="aws-cdk-sdk.lightsail.LightsailCreateDomainEntryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateDomainEntryResult: lightsail.LightsailCreateDomainEntryResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDomainEntryResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailCreateDomainRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateDomainRequest: lightsail.LightsailCreateDomainRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDomainRequest.property.domainName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDomainRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailCreateDomainResult <a name="aws-cdk-sdk.lightsail.LightsailCreateDomainResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateDomainResult: lightsail.LightsailCreateDomainResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateDomainResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailCreateInstancesFromSnapshotRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateInstancesFromSnapshotRequest: lightsail.LightsailCreateInstancesFromSnapshotRequest = { ... }
```

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest.property.availabilityZone"></a>

- *Type:* `string`

---

##### `bundleId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest.property.bundleId"></a>

- *Type:* `string`

---

##### `instanceNames`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest.property.instanceNames"></a>

- *Type:* `string`[]

---

##### `addOns`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest.property.addOns"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAddOnRequest`](#aws-cdk-sdk.lightsail.LightsailAddOnRequest)[]

---

##### `attachedDiskMapping`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest.property.attachedDiskMapping"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.lightsail.LightsailDiskMap`](#aws-cdk-sdk.lightsail.LightsailDiskMap)[]}

---

##### `instanceSnapshotName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest.property.instanceSnapshotName"></a>

- *Type:* `string`

---

##### `keyPairName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest.property.keyPairName"></a>

- *Type:* `string`

---

##### `restoreDate`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest.property.restoreDate"></a>

- *Type:* `string`

---

##### `sourceInstanceName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest.property.sourceInstanceName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

##### `useLatestRestorableAutoSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest.property.useLatestRestorableAutoSnapshot"></a>

- *Type:* `boolean`

---

##### `userData`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest.property.userData"></a>

- *Type:* `string`

---

### LightsailCreateInstancesFromSnapshotResult <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateInstancesFromSnapshotResult: lightsail.LightsailCreateInstancesFromSnapshotResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailCreateInstanceSnapshotRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateInstanceSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateInstanceSnapshotRequest: lightsail.LightsailCreateInstanceSnapshotRequest = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstanceSnapshotRequest.property.instanceName"></a>

- *Type:* `string`

---

##### `instanceSnapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstanceSnapshotRequest.property.instanceSnapshotName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstanceSnapshotRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailCreateInstanceSnapshotResult <a name="aws-cdk-sdk.lightsail.LightsailCreateInstanceSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateInstanceSnapshotResult: lightsail.LightsailCreateInstanceSnapshotResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstanceSnapshotResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailCreateInstancesRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateInstancesRequest: lightsail.LightsailCreateInstancesRequest = { ... }
```

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesRequest.property.availabilityZone"></a>

- *Type:* `string`

---

##### `blueprintId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesRequest.property.blueprintId"></a>

- *Type:* `string`

---

##### `bundleId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesRequest.property.bundleId"></a>

- *Type:* `string`

---

##### `instanceNames`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesRequest.property.instanceNames"></a>

- *Type:* `string`[]

---

##### `addOns`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesRequest.property.addOns"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAddOnRequest`](#aws-cdk-sdk.lightsail.LightsailAddOnRequest)[]

---

##### `customImageName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesRequest.property.customImageName"></a>

- *Type:* `string`

---

##### `keyPairName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesRequest.property.keyPairName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

##### `userData`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesRequest.property.userData"></a>

- *Type:* `string`

---

### LightsailCreateInstancesResult <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateInstancesResult: lightsail.LightsailCreateInstancesResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateInstancesResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailCreateKeyPairRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateKeyPairRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateKeyPairRequest: lightsail.LightsailCreateKeyPairRequest = { ... }
```

##### `keyPairName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateKeyPairRequest.property.keyPairName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateKeyPairRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailCreateKeyPairResult <a name="aws-cdk-sdk.lightsail.LightsailCreateKeyPairResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateKeyPairResult: lightsail.LightsailCreateKeyPairResult = { ... }
```

##### `keyPair`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateKeyPairResult.property.keyPair"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailKeyPair`](#aws-cdk-sdk.lightsail.LightsailKeyPair)

---

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateKeyPairResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

##### `privateKeyBase64`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateKeyPairResult.property.privateKeyBase64"></a>

- *Type:* `string`

---

##### `publicKeyBase64`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateKeyPairResult.property.publicKeyBase64"></a>

- *Type:* `string`

---

### LightsailCreateLoadBalancerRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateLoadBalancerRequest: lightsail.LightsailCreateLoadBalancerRequest = { ... }
```

##### `instancePort`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerRequest.property.instancePort"></a>

- *Type:* `number`

---

##### `loadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerRequest.property.loadBalancerName"></a>

- *Type:* `string`

---

##### `certificateAlternativeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerRequest.property.certificateAlternativeNames"></a>

- *Type:* `string`[]

---

##### `certificateDomainName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerRequest.property.certificateDomainName"></a>

- *Type:* `string`

---

##### `certificateName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerRequest.property.certificateName"></a>

- *Type:* `string`

---

##### `healthCheckPath`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerRequest.property.healthCheckPath"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailCreateLoadBalancerResult <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateLoadBalancerResult: lightsail.LightsailCreateLoadBalancerResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailCreateLoadBalancerTlsCertificateRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerTlsCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateLoadBalancerTlsCertificateRequest: lightsail.LightsailCreateLoadBalancerTlsCertificateRequest = { ... }
```

##### `certificateDomainName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerTlsCertificateRequest.property.certificateDomainName"></a>

- *Type:* `string`

---

##### `certificateName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerTlsCertificateRequest.property.certificateName"></a>

- *Type:* `string`

---

##### `loadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerTlsCertificateRequest.property.loadBalancerName"></a>

- *Type:* `string`

---

##### `certificateAlternativeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerTlsCertificateRequest.property.certificateAlternativeNames"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerTlsCertificateRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailCreateLoadBalancerTlsCertificateResult <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerTlsCertificateResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateLoadBalancerTlsCertificateResult: lightsail.LightsailCreateLoadBalancerTlsCertificateResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerTlsCertificateResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailCreateRelationalDatabaseFromSnapshotRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateRelationalDatabaseFromSnapshotRequest: lightsail.LightsailCreateRelationalDatabaseFromSnapshotRequest = { ... }
```

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotRequest.property.availabilityZone"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotRequest.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `relationalDatabaseBundleId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotRequest.property.relationalDatabaseBundleId"></a>

- *Type:* `string`

---

##### `relationalDatabaseSnapshotName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotRequest.property.relationalDatabaseSnapshotName"></a>

- *Type:* `string`

---

##### `restoreTime`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotRequest.property.restoreTime"></a>

- *Type:* `string`

---

##### `sourceRelationalDatabaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotRequest.property.sourceRelationalDatabaseName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

##### `useLatestRestorableTime`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotRequest.property.useLatestRestorableTime"></a>

- *Type:* `boolean`

---

### LightsailCreateRelationalDatabaseFromSnapshotResult <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateRelationalDatabaseFromSnapshotResult: lightsail.LightsailCreateRelationalDatabaseFromSnapshotResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailCreateRelationalDatabaseRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateRelationalDatabaseRequest: lightsail.LightsailCreateRelationalDatabaseRequest = { ... }
```

##### `masterDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest.property.masterDatabaseName"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest.property.masterUsername"></a>

- *Type:* `string`

---

##### `relationalDatabaseBlueprintId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest.property.relationalDatabaseBlueprintId"></a>

- *Type:* `string`

---

##### `relationalDatabaseBundleId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest.property.relationalDatabaseBundleId"></a>

- *Type:* `string`

---

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest.property.availabilityZone"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailCreateRelationalDatabaseResult <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateRelationalDatabaseResult: lightsail.LightsailCreateRelationalDatabaseResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailCreateRelationalDatabaseSnapshotRequest <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateRelationalDatabaseSnapshotRequest: lightsail.LightsailCreateRelationalDatabaseSnapshotRequest = { ... }
```

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseSnapshotRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

##### `relationalDatabaseSnapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseSnapshotRequest.property.relationalDatabaseSnapshotName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseSnapshotRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailCreateRelationalDatabaseSnapshotResult <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailCreateRelationalDatabaseSnapshotResult: lightsail.LightsailCreateRelationalDatabaseSnapshotResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseSnapshotResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDeleteAlarmRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteAlarmRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteAlarmRequest: lightsail.LightsailDeleteAlarmRequest = { ... }
```

##### `alarmName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteAlarmRequest.property.alarmName"></a>

- *Type:* `string`

---

### LightsailDeleteAlarmResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteAlarmResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteAlarmResult: lightsail.LightsailDeleteAlarmResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteAlarmResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDeleteAutoSnapshotRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteAutoSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteAutoSnapshotRequest: lightsail.LightsailDeleteAutoSnapshotRequest = { ... }
```

##### `date`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteAutoSnapshotRequest.property.date"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteAutoSnapshotRequest.property.resourceName"></a>

- *Type:* `string`

---

### LightsailDeleteAutoSnapshotResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteAutoSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteAutoSnapshotResult: lightsail.LightsailDeleteAutoSnapshotResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteAutoSnapshotResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDeleteCertificateRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteCertificateRequest: lightsail.LightsailDeleteCertificateRequest = { ... }
```

##### `certificateName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteCertificateRequest.property.certificateName"></a>

- *Type:* `string`

---

### LightsailDeleteCertificateResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteCertificateResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteCertificateResult: lightsail.LightsailDeleteCertificateResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteCertificateResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDeleteContactMethodRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteContactMethodRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteContactMethodRequest: lightsail.LightsailDeleteContactMethodRequest = { ... }
```

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteContactMethodRequest.property.protocol"></a>

- *Type:* `string`

---

### LightsailDeleteContactMethodResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteContactMethodResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteContactMethodResult: lightsail.LightsailDeleteContactMethodResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteContactMethodResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDeleteContainerImageRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteContainerImageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteContainerImageRequest: lightsail.LightsailDeleteContainerImageRequest = { ... }
```

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteContainerImageRequest.property.image"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteContainerImageRequest.property.serviceName"></a>

- *Type:* `string`

---

### LightsailDeleteContainerImageResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteContainerImageResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteContainerImageResult: lightsail.LightsailDeleteContainerImageResult = { ... }
```

### LightsailDeleteContainerServiceRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteContainerServiceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteContainerServiceRequest: lightsail.LightsailDeleteContainerServiceRequest = { ... }
```

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteContainerServiceRequest.property.serviceName"></a>

- *Type:* `string`

---

### LightsailDeleteContainerServiceResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteContainerServiceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteContainerServiceResult: lightsail.LightsailDeleteContainerServiceResult = { ... }
```

### LightsailDeleteDiskRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteDiskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteDiskRequest: lightsail.LightsailDeleteDiskRequest = { ... }
```

##### `diskName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteDiskRequest.property.diskName"></a>

- *Type:* `string`

---

##### `forceDeleteAddOns`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteDiskRequest.property.forceDeleteAddOns"></a>

- *Type:* `boolean`

---

### LightsailDeleteDiskResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteDiskResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteDiskResult: lightsail.LightsailDeleteDiskResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteDiskResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDeleteDiskSnapshotRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteDiskSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteDiskSnapshotRequest: lightsail.LightsailDeleteDiskSnapshotRequest = { ... }
```

##### `diskSnapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteDiskSnapshotRequest.property.diskSnapshotName"></a>

- *Type:* `string`

---

### LightsailDeleteDiskSnapshotResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteDiskSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteDiskSnapshotResult: lightsail.LightsailDeleteDiskSnapshotResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteDiskSnapshotResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDeleteDistributionRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteDistributionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteDistributionRequest: lightsail.LightsailDeleteDistributionRequest = { ... }
```

##### `distributionName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteDistributionRequest.property.distributionName"></a>

- *Type:* `string`

---

### LightsailDeleteDistributionResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteDistributionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteDistributionResult: lightsail.LightsailDeleteDistributionResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteDistributionResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailDeleteDomainEntryRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteDomainEntryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteDomainEntryRequest: lightsail.LightsailDeleteDomainEntryRequest = { ... }
```

##### `domainEntry`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteDomainEntryRequest.property.domainEntry"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDomainEntry`](#aws-cdk-sdk.lightsail.LightsailDomainEntry)

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteDomainEntryRequest.property.domainName"></a>

- *Type:* `string`

---

### LightsailDeleteDomainEntryResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteDomainEntryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteDomainEntryResult: lightsail.LightsailDeleteDomainEntryResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteDomainEntryResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailDeleteDomainRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteDomainRequest: lightsail.LightsailDeleteDomainRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteDomainRequest.property.domainName"></a>

- *Type:* `string`

---

### LightsailDeleteDomainResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteDomainResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteDomainResult: lightsail.LightsailDeleteDomainResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteDomainResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailDeleteInstanceRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteInstanceRequest: lightsail.LightsailDeleteInstanceRequest = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteInstanceRequest.property.instanceName"></a>

- *Type:* `string`

---

##### `forceDeleteAddOns`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteInstanceRequest.property.forceDeleteAddOns"></a>

- *Type:* `boolean`

---

### LightsailDeleteInstanceResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteInstanceResult: lightsail.LightsailDeleteInstanceResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteInstanceResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDeleteInstanceSnapshotRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteInstanceSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteInstanceSnapshotRequest: lightsail.LightsailDeleteInstanceSnapshotRequest = { ... }
```

##### `instanceSnapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteInstanceSnapshotRequest.property.instanceSnapshotName"></a>

- *Type:* `string`

---

### LightsailDeleteInstanceSnapshotResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteInstanceSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteInstanceSnapshotResult: lightsail.LightsailDeleteInstanceSnapshotResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteInstanceSnapshotResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDeleteKeyPairRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteKeyPairRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteKeyPairRequest: lightsail.LightsailDeleteKeyPairRequest = { ... }
```

##### `keyPairName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteKeyPairRequest.property.keyPairName"></a>

- *Type:* `string`

---

### LightsailDeleteKeyPairResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteKeyPairResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteKeyPairResult: lightsail.LightsailDeleteKeyPairResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteKeyPairResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailDeleteKnownHostKeysRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteKnownHostKeysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteKnownHostKeysRequest: lightsail.LightsailDeleteKnownHostKeysRequest = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteKnownHostKeysRequest.property.instanceName"></a>

- *Type:* `string`

---

### LightsailDeleteKnownHostKeysResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteKnownHostKeysResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteKnownHostKeysResult: lightsail.LightsailDeleteKnownHostKeysResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteKnownHostKeysResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDeleteLoadBalancerRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteLoadBalancerRequest: lightsail.LightsailDeleteLoadBalancerRequest = { ... }
```

##### `loadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerRequest.property.loadBalancerName"></a>

- *Type:* `string`

---

### LightsailDeleteLoadBalancerResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteLoadBalancerResult: lightsail.LightsailDeleteLoadBalancerResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDeleteLoadBalancerTlsCertificateRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerTlsCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteLoadBalancerTlsCertificateRequest: lightsail.LightsailDeleteLoadBalancerTlsCertificateRequest = { ... }
```

##### `certificateName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerTlsCertificateRequest.property.certificateName"></a>

- *Type:* `string`

---

##### `loadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerTlsCertificateRequest.property.loadBalancerName"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerTlsCertificateRequest.property.force"></a>

- *Type:* `boolean`

---

### LightsailDeleteLoadBalancerTlsCertificateResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerTlsCertificateResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteLoadBalancerTlsCertificateResult: lightsail.LightsailDeleteLoadBalancerTlsCertificateResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerTlsCertificateResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDeleteRelationalDatabaseRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteRelationalDatabaseRequest: lightsail.LightsailDeleteRelationalDatabaseRequest = { ... }
```

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

##### `finalRelationalDatabaseSnapshotName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseRequest.property.finalRelationalDatabaseSnapshotName"></a>

- *Type:* `string`

---

##### `skipFinalSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseRequest.property.skipFinalSnapshot"></a>

- *Type:* `boolean`

---

### LightsailDeleteRelationalDatabaseResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteRelationalDatabaseResult: lightsail.LightsailDeleteRelationalDatabaseResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDeleteRelationalDatabaseSnapshotRequest <a name="aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteRelationalDatabaseSnapshotRequest: lightsail.LightsailDeleteRelationalDatabaseSnapshotRequest = { ... }
```

##### `relationalDatabaseSnapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseSnapshotRequest.property.relationalDatabaseSnapshotName"></a>

- *Type:* `string`

---

### LightsailDeleteRelationalDatabaseSnapshotResult <a name="aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDeleteRelationalDatabaseSnapshotResult: lightsail.LightsailDeleteRelationalDatabaseSnapshotResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseSnapshotResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDestinationInfo <a name="aws-cdk-sdk.lightsail.LightsailDestinationInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDestinationInfo: lightsail.LightsailDestinationInfo = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDestinationInfo.property.id"></a>

- *Type:* `string`

---

##### `service`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDestinationInfo.property.service"></a>

- *Type:* `string`

---

### LightsailDetachCertificateFromDistributionRequest <a name="aws-cdk-sdk.lightsail.LightsailDetachCertificateFromDistributionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDetachCertificateFromDistributionRequest: lightsail.LightsailDetachCertificateFromDistributionRequest = { ... }
```

##### `distributionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDetachCertificateFromDistributionRequest.property.distributionName"></a>

- *Type:* `string`

---

### LightsailDetachCertificateFromDistributionResult <a name="aws-cdk-sdk.lightsail.LightsailDetachCertificateFromDistributionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDetachCertificateFromDistributionResult: lightsail.LightsailDetachCertificateFromDistributionResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDetachCertificateFromDistributionResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailDetachDiskRequest <a name="aws-cdk-sdk.lightsail.LightsailDetachDiskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDetachDiskRequest: lightsail.LightsailDetachDiskRequest = { ... }
```

##### `diskName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDetachDiskRequest.property.diskName"></a>

- *Type:* `string`

---

### LightsailDetachDiskResult <a name="aws-cdk-sdk.lightsail.LightsailDetachDiskResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDetachDiskResult: lightsail.LightsailDetachDiskResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDetachDiskResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDetachInstancesFromLoadBalancerRequest <a name="aws-cdk-sdk.lightsail.LightsailDetachInstancesFromLoadBalancerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDetachInstancesFromLoadBalancerRequest: lightsail.LightsailDetachInstancesFromLoadBalancerRequest = { ... }
```

##### `instanceNames`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDetachInstancesFromLoadBalancerRequest.property.instanceNames"></a>

- *Type:* `string`[]

---

##### `loadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDetachInstancesFromLoadBalancerRequest.property.loadBalancerName"></a>

- *Type:* `string`

---

### LightsailDetachInstancesFromLoadBalancerResult <a name="aws-cdk-sdk.lightsail.LightsailDetachInstancesFromLoadBalancerResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDetachInstancesFromLoadBalancerResult: lightsail.LightsailDetachInstancesFromLoadBalancerResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDetachInstancesFromLoadBalancerResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDetachStaticIpRequest <a name="aws-cdk-sdk.lightsail.LightsailDetachStaticIpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDetachStaticIpRequest: lightsail.LightsailDetachStaticIpRequest = { ... }
```

##### `staticIpName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDetachStaticIpRequest.property.staticIpName"></a>

- *Type:* `string`

---

### LightsailDetachStaticIpResult <a name="aws-cdk-sdk.lightsail.LightsailDetachStaticIpResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDetachStaticIpResult: lightsail.LightsailDetachStaticIpResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDetachStaticIpResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDisableAddOnRequest <a name="aws-cdk-sdk.lightsail.LightsailDisableAddOnRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDisableAddOnRequest: lightsail.LightsailDisableAddOnRequest = { ... }
```

##### `addOnType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisableAddOnRequest.property.addOnType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisableAddOnRequest.property.resourceName"></a>

- *Type:* `string`

---

### LightsailDisableAddOnResult <a name="aws-cdk-sdk.lightsail.LightsailDisableAddOnResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDisableAddOnResult: lightsail.LightsailDisableAddOnResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisableAddOnResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailDisk <a name="aws-cdk-sdk.lightsail.LightsailDisk"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDisk: lightsail.LightsailDisk = { ... }
```

##### `addOns`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.addOns"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAddOn`](#aws-cdk-sdk.lightsail.LightsailAddOn)[]

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.arn"></a>

- *Type:* `string`

---

##### `attachedTo`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.attachedTo"></a>

- *Type:* `string`

---

##### `attachmentState`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.attachmentState"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.createdAt"></a>

- *Type:* `string`

---

##### `gbInUse`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.gbInUse"></a>

- *Type:* `number`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.iops"></a>

- *Type:* `number`

---

##### `isAttached`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.isAttached"></a>

- *Type:* `boolean`

---

##### `isSystemDisk`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.isSystemDisk"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.name"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.path"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.resourceType"></a>

- *Type:* `string`

---

##### `sizeInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.sizeInGb"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.state"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDisk.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailDiskInfo <a name="aws-cdk-sdk.lightsail.LightsailDiskInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDiskInfo: lightsail.LightsailDiskInfo = { ... }
```

##### `isSystemDisk`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskInfo.property.isSystemDisk"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskInfo.property.name"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskInfo.property.path"></a>

- *Type:* `string`

---

##### `sizeInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskInfo.property.sizeInGb"></a>

- *Type:* `number`

---

### LightsailDiskMap <a name="aws-cdk-sdk.lightsail.LightsailDiskMap"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDiskMap: lightsail.LightsailDiskMap = { ... }
```

##### `newDiskName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskMap.property.newDiskName"></a>

- *Type:* `string`

---

##### `originalDiskPath`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskMap.property.originalDiskPath"></a>

- *Type:* `string`

---

### LightsailDiskSnapshot <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDiskSnapshot: lightsail.LightsailDiskSnapshot = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot.property.createdAt"></a>

- *Type:* `string`

---

##### `fromDiskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot.property.fromDiskArn"></a>

- *Type:* `string`

---

##### `fromDiskName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot.property.fromDiskName"></a>

- *Type:* `string`

---

##### `fromInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot.property.fromInstanceArn"></a>

- *Type:* `string`

---

##### `fromInstanceName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot.property.fromInstanceName"></a>

- *Type:* `string`

---

##### `isFromAutoSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot.property.isFromAutoSnapshot"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot.property.name"></a>

- *Type:* `string`

---

##### `progress`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot.property.progress"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot.property.resourceType"></a>

- *Type:* `string`

---

##### `sizeInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot.property.sizeInGb"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot.property.state"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshot.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailDiskSnapshotInfo <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshotInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDiskSnapshotInfo: lightsail.LightsailDiskSnapshotInfo = { ... }
```

##### `sizeInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDiskSnapshotInfo.property.sizeInGb"></a>

- *Type:* `number`

---

### LightsailDistributionBundle <a name="aws-cdk-sdk.lightsail.LightsailDistributionBundle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDistributionBundle: lightsail.LightsailDistributionBundle = { ... }
```

##### `bundleId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDistributionBundle.property.bundleId"></a>

- *Type:* `string`

---

##### `isActive`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDistributionBundle.property.isActive"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDistributionBundle.property.name"></a>

- *Type:* `string`

---

##### `price`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDistributionBundle.property.price"></a>

- *Type:* `number`

---

##### `transferPerMonthInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDistributionBundle.property.transferPerMonthInGb"></a>

- *Type:* `number`

---

### LightsailDomain <a name="aws-cdk-sdk.lightsail.LightsailDomain"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDomain: lightsail.LightsailDomain = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomain.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomain.property.createdAt"></a>

- *Type:* `string`

---

##### `domainEntries`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomain.property.domainEntries"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDomainEntry`](#aws-cdk-sdk.lightsail.LightsailDomainEntry)[]

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomain.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomain.property.name"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomain.property.resourceType"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomain.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomain.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailDomainEntry <a name="aws-cdk-sdk.lightsail.LightsailDomainEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDomainEntry: lightsail.LightsailDomainEntry = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomainEntry.property.id"></a>

- *Type:* `string`

---

##### `isAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomainEntry.property.isAlias"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomainEntry.property.name"></a>

- *Type:* `string`

---

##### `options`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomainEntry.property.options"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomainEntry.property.target"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomainEntry.property.type"></a>

- *Type:* `string`

---

### LightsailDomainValidationRecord <a name="aws-cdk-sdk.lightsail.LightsailDomainValidationRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDomainValidationRecord: lightsail.LightsailDomainValidationRecord = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomainValidationRecord.property.domainName"></a>

- *Type:* `string`

---

##### `resourceRecord`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDomainValidationRecord.property.resourceRecord"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceRecord`](#aws-cdk-sdk.lightsail.LightsailResourceRecord)

---

### LightsailDownloadDefaultKeyPairRequest <a name="aws-cdk-sdk.lightsail.LightsailDownloadDefaultKeyPairRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDownloadDefaultKeyPairRequest: lightsail.LightsailDownloadDefaultKeyPairRequest = { ... }
```

### LightsailDownloadDefaultKeyPairResult <a name="aws-cdk-sdk.lightsail.LightsailDownloadDefaultKeyPairResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailDownloadDefaultKeyPairResult: lightsail.LightsailDownloadDefaultKeyPairResult = { ... }
```

##### `privateKeyBase64`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDownloadDefaultKeyPairResult.property.privateKeyBase64"></a>

- *Type:* `string`

---

##### `publicKeyBase64`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailDownloadDefaultKeyPairResult.property.publicKeyBase64"></a>

- *Type:* `string`

---

### LightsailEnableAddOnRequest <a name="aws-cdk-sdk.lightsail.LightsailEnableAddOnRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailEnableAddOnRequest: lightsail.LightsailEnableAddOnRequest = { ... }
```

##### `addOnRequest`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailEnableAddOnRequest.property.addOnRequest"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAddOnRequest`](#aws-cdk-sdk.lightsail.LightsailAddOnRequest)

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailEnableAddOnRequest.property.resourceName"></a>

- *Type:* `string`

---

### LightsailEnableAddOnResult <a name="aws-cdk-sdk.lightsail.LightsailEnableAddOnResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailEnableAddOnResult: lightsail.LightsailEnableAddOnResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailEnableAddOnResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailEndpointRequest <a name="aws-cdk-sdk.lightsail.LightsailEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailEndpointRequest: lightsail.LightsailEndpointRequest = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailEndpointRequest.property.containerName"></a>

- *Type:* `string`

---

##### `containerPort`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailEndpointRequest.property.containerPort"></a>

- *Type:* `number`

---

##### `healthCheck`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailEndpointRequest.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerServiceHealthCheckConfig`](#aws-cdk-sdk.lightsail.LightsailContainerServiceHealthCheckConfig)

---

### LightsailExportSnapshotRecord <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailExportSnapshotRecord: lightsail.LightsailExportSnapshotRecord = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecord.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecord.property.createdAt"></a>

- *Type:* `string`

---

##### `destinationInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecord.property.destinationInfo"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDestinationInfo`](#aws-cdk-sdk.lightsail.LightsailDestinationInfo)

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecord.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecord.property.name"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecord.property.resourceType"></a>

- *Type:* `string`

---

##### `sourceInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecord.property.sourceInfo"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailExportSnapshotRecordSourceInfo`](#aws-cdk-sdk.lightsail.LightsailExportSnapshotRecordSourceInfo)

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecord.property.state"></a>

- *Type:* `string`

---

### LightsailExportSnapshotRecordSourceInfo <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecordSourceInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailExportSnapshotRecordSourceInfo: lightsail.LightsailExportSnapshotRecordSourceInfo = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecordSourceInfo.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecordSourceInfo.property.createdAt"></a>

- *Type:* `string`

---

##### `diskSnapshotInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecordSourceInfo.property.diskSnapshotInfo"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDiskSnapshotInfo`](#aws-cdk-sdk.lightsail.LightsailDiskSnapshotInfo)

---

##### `fromResourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecordSourceInfo.property.fromResourceArn"></a>

- *Type:* `string`

---

##### `fromResourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecordSourceInfo.property.fromResourceName"></a>

- *Type:* `string`

---

##### `instanceSnapshotInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecordSourceInfo.property.instanceSnapshotInfo"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstanceSnapshotInfo`](#aws-cdk-sdk.lightsail.LightsailInstanceSnapshotInfo)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecordSourceInfo.property.name"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRecordSourceInfo.property.resourceType"></a>

- *Type:* `string`

---

### LightsailExportSnapshotRequest <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailExportSnapshotRequest: lightsail.LightsailExportSnapshotRequest = { ... }
```

##### `sourceSnapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotRequest.property.sourceSnapshotName"></a>

- *Type:* `string`

---

### LightsailExportSnapshotResult <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailExportSnapshotResult: lightsail.LightsailExportSnapshotResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailExportSnapshotResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailGetActiveNamesRequest <a name="aws-cdk-sdk.lightsail.LightsailGetActiveNamesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetActiveNamesRequest: lightsail.LightsailGetActiveNamesRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetActiveNamesRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetActiveNamesResult <a name="aws-cdk-sdk.lightsail.LightsailGetActiveNamesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetActiveNamesResult: lightsail.LightsailGetActiveNamesResult = { ... }
```

##### `activeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetActiveNamesResult.property.activeNames"></a>

- *Type:* `string`[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetActiveNamesResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetAlarmsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetAlarmsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetAlarmsRequest: lightsail.LightsailGetAlarmsRequest = { ... }
```

##### `alarmName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetAlarmsRequest.property.alarmName"></a>

- *Type:* `string`

---

##### `monitoredResourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetAlarmsRequest.property.monitoredResourceName"></a>

- *Type:* `string`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetAlarmsRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetAlarmsResult <a name="aws-cdk-sdk.lightsail.LightsailGetAlarmsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetAlarmsResult: lightsail.LightsailGetAlarmsResult = { ... }
```

##### `alarms`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetAlarmsResult.property.alarms"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAlarm`](#aws-cdk-sdk.lightsail.LightsailAlarm)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetAlarmsResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetAutoSnapshotsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetAutoSnapshotsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetAutoSnapshotsRequest: lightsail.LightsailGetAutoSnapshotsRequest = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetAutoSnapshotsRequest.property.resourceName"></a>

- *Type:* `string`

---

### LightsailGetAutoSnapshotsResult <a name="aws-cdk-sdk.lightsail.LightsailGetAutoSnapshotsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetAutoSnapshotsResult: lightsail.LightsailGetAutoSnapshotsResult = { ... }
```

##### `autoSnapshots`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetAutoSnapshotsResult.property.autoSnapshots"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAutoSnapshotDetails`](#aws-cdk-sdk.lightsail.LightsailAutoSnapshotDetails)[]

---

##### `resourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetAutoSnapshotsResult.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetAutoSnapshotsResult.property.resourceType"></a>

- *Type:* `string`

---

### LightsailGetBlueprintsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetBlueprintsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetBlueprintsRequest: lightsail.LightsailGetBlueprintsRequest = { ... }
```

##### `includeInactive`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetBlueprintsRequest.property.includeInactive"></a>

- *Type:* `boolean`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetBlueprintsRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetBlueprintsResult <a name="aws-cdk-sdk.lightsail.LightsailGetBlueprintsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetBlueprintsResult: lightsail.LightsailGetBlueprintsResult = { ... }
```

##### `blueprints`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetBlueprintsResult.property.blueprints"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailBlueprint`](#aws-cdk-sdk.lightsail.LightsailBlueprint)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetBlueprintsResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetBundlesRequest <a name="aws-cdk-sdk.lightsail.LightsailGetBundlesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetBundlesRequest: lightsail.LightsailGetBundlesRequest = { ... }
```

##### `includeInactive`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetBundlesRequest.property.includeInactive"></a>

- *Type:* `boolean`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetBundlesRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetBundlesResult <a name="aws-cdk-sdk.lightsail.LightsailGetBundlesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetBundlesResult: lightsail.LightsailGetBundlesResult = { ... }
```

##### `bundles`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetBundlesResult.property.bundles"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailBundle`](#aws-cdk-sdk.lightsail.LightsailBundle)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetBundlesResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetCertificatesRequest <a name="aws-cdk-sdk.lightsail.LightsailGetCertificatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetCertificatesRequest: lightsail.LightsailGetCertificatesRequest = { ... }
```

##### `certificateName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetCertificatesRequest.property.certificateName"></a>

- *Type:* `string`

---

##### `certificateStatuses`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetCertificatesRequest.property.certificateStatuses"></a>

- *Type:* `string`[]

---

##### `includeCertificateDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetCertificatesRequest.property.includeCertificateDetails"></a>

- *Type:* `boolean`

---

### LightsailGetCertificatesResult <a name="aws-cdk-sdk.lightsail.LightsailGetCertificatesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetCertificatesResult: lightsail.LightsailGetCertificatesResult = { ... }
```

##### `certificates`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetCertificatesResult.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCertificateSummary`](#aws-cdk-sdk.lightsail.LightsailCertificateSummary)[]

---

### LightsailGetCloudFormationStackRecordsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetCloudFormationStackRecordsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetCloudFormationStackRecordsRequest: lightsail.LightsailGetCloudFormationStackRecordsRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetCloudFormationStackRecordsRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetCloudFormationStackRecordsResult <a name="aws-cdk-sdk.lightsail.LightsailGetCloudFormationStackRecordsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetCloudFormationStackRecordsResult: lightsail.LightsailGetCloudFormationStackRecordsResult = { ... }
```

##### `cloudFormationStackRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetCloudFormationStackRecordsResult.property.cloudFormationStackRecords"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecord`](#aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecord)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetCloudFormationStackRecordsResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetContactMethodsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetContactMethodsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetContactMethodsRequest: lightsail.LightsailGetContactMethodsRequest = { ... }
```

##### `protocols`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContactMethodsRequest.property.protocols"></a>

- *Type:* `string`[]

---

### LightsailGetContactMethodsResult <a name="aws-cdk-sdk.lightsail.LightsailGetContactMethodsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetContactMethodsResult: lightsail.LightsailGetContactMethodsResult = { ... }
```

##### `contactMethods`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContactMethodsResult.property.contactMethods"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContactMethod`](#aws-cdk-sdk.lightsail.LightsailContactMethod)[]

---

### LightsailGetContainerApiMetadataRequest <a name="aws-cdk-sdk.lightsail.LightsailGetContainerApiMetadataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetContainerApiMetadataRequest: lightsail.LightsailGetContainerApiMetadataRequest = { ... }
```

### LightsailGetContainerApiMetadataResult <a name="aws-cdk-sdk.lightsail.LightsailGetContainerApiMetadataResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetContainerApiMetadataResult: lightsail.LightsailGetContainerApiMetadataResult = { ... }
```

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerApiMetadataResult.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}[]

---

### LightsailGetContainerImagesRequest <a name="aws-cdk-sdk.lightsail.LightsailGetContainerImagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetContainerImagesRequest: lightsail.LightsailGetContainerImagesRequest = { ... }
```

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerImagesRequest.property.serviceName"></a>

- *Type:* `string`

---

### LightsailGetContainerImagesResult <a name="aws-cdk-sdk.lightsail.LightsailGetContainerImagesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetContainerImagesResult: lightsail.LightsailGetContainerImagesResult = { ... }
```

##### `containerImages`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerImagesResult.property.containerImages"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerImage`](#aws-cdk-sdk.lightsail.LightsailContainerImage)[]

---

### LightsailGetContainerLogRequest <a name="aws-cdk-sdk.lightsail.LightsailGetContainerLogRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetContainerLogRequest: lightsail.LightsailGetContainerLogRequest = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerLogRequest.property.containerName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerLogRequest.property.serviceName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerLogRequest.property.endTime"></a>

- *Type:* `string`

---

##### `filterPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerLogRequest.property.filterPattern"></a>

- *Type:* `string`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerLogRequest.property.pageToken"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerLogRequest.property.startTime"></a>

- *Type:* `string`

---

### LightsailGetContainerLogResult <a name="aws-cdk-sdk.lightsail.LightsailGetContainerLogResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetContainerLogResult: lightsail.LightsailGetContainerLogResult = { ... }
```

##### `logEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerLogResult.property.logEvents"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerServiceLogEvent`](#aws-cdk-sdk.lightsail.LightsailContainerServiceLogEvent)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerLogResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetContainerServiceDeploymentsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServiceDeploymentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetContainerServiceDeploymentsRequest: lightsail.LightsailGetContainerServiceDeploymentsRequest = { ... }
```

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServiceDeploymentsRequest.property.serviceName"></a>

- *Type:* `string`

---

### LightsailGetContainerServiceDeploymentsResult <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServiceDeploymentsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetContainerServiceDeploymentsResult: lightsail.LightsailGetContainerServiceDeploymentsResult = { ... }
```

##### `deployments`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServiceDeploymentsResult.property.deployments"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerServiceDeployment`](#aws-cdk-sdk.lightsail.LightsailContainerServiceDeployment)[]

---

### LightsailGetContainerServiceMetricDataRequest <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServiceMetricDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetContainerServiceMetricDataRequest: lightsail.LightsailGetContainerServiceMetricDataRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServiceMetricDataRequest.property.endTime"></a>

- *Type:* `string`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServiceMetricDataRequest.property.metricName"></a>

- *Type:* `string`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServiceMetricDataRequest.property.period"></a>

- *Type:* `number`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServiceMetricDataRequest.property.serviceName"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServiceMetricDataRequest.property.startTime"></a>

- *Type:* `string`

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServiceMetricDataRequest.property.statistics"></a>

- *Type:* `string`[]

---

### LightsailGetContainerServiceMetricDataResult <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServiceMetricDataResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetContainerServiceMetricDataResult: lightsail.LightsailGetContainerServiceMetricDataResult = { ... }
```

##### `metricData`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServiceMetricDataResult.property.metricData"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailMetricDatapoint`](#aws-cdk-sdk.lightsail.LightsailMetricDatapoint)[]

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServiceMetricDataResult.property.metricName"></a>

- *Type:* `string`

---

### LightsailGetContainerServicePowersRequest <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServicePowersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetContainerServicePowersRequest: lightsail.LightsailGetContainerServicePowersRequest = { ... }
```

### LightsailGetContainerServicePowersResult <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServicePowersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetContainerServicePowersResult: lightsail.LightsailGetContainerServicePowersResult = { ... }
```

##### `powers`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServicePowersResult.property.powers"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerServicePower`](#aws-cdk-sdk.lightsail.LightsailContainerServicePower)[]

---

### LightsailGetContainerServicesRequest <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetContainerServicesRequest: lightsail.LightsailGetContainerServicesRequest = { ... }
```

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetContainerServicesRequest.property.serviceName"></a>

- *Type:* `string`

---

### LightsailGetDiskRequest <a name="aws-cdk-sdk.lightsail.LightsailGetDiskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDiskRequest: lightsail.LightsailGetDiskRequest = { ... }
```

##### `diskName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDiskRequest.property.diskName"></a>

- *Type:* `string`

---

### LightsailGetDiskResult <a name="aws-cdk-sdk.lightsail.LightsailGetDiskResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDiskResult: lightsail.LightsailGetDiskResult = { ... }
```

##### `disk`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDiskResult.property.disk"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDisk`](#aws-cdk-sdk.lightsail.LightsailDisk)

---

### LightsailGetDiskSnapshotRequest <a name="aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDiskSnapshotRequest: lightsail.LightsailGetDiskSnapshotRequest = { ... }
```

##### `diskSnapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotRequest.property.diskSnapshotName"></a>

- *Type:* `string`

---

### LightsailGetDiskSnapshotResult <a name="aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDiskSnapshotResult: lightsail.LightsailGetDiskSnapshotResult = { ... }
```

##### `diskSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotResult.property.diskSnapshot"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDiskSnapshot`](#aws-cdk-sdk.lightsail.LightsailDiskSnapshot)

---

### LightsailGetDiskSnapshotsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDiskSnapshotsRequest: lightsail.LightsailGetDiskSnapshotsRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotsRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetDiskSnapshotsResult <a name="aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDiskSnapshotsResult: lightsail.LightsailGetDiskSnapshotsResult = { ... }
```

##### `diskSnapshots`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotsResult.property.diskSnapshots"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDiskSnapshot`](#aws-cdk-sdk.lightsail.LightsailDiskSnapshot)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotsResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetDisksRequest <a name="aws-cdk-sdk.lightsail.LightsailGetDisksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDisksRequest: lightsail.LightsailGetDisksRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDisksRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetDisksResult <a name="aws-cdk-sdk.lightsail.LightsailGetDisksResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDisksResult: lightsail.LightsailGetDisksResult = { ... }
```

##### `disks`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDisksResult.property.disks"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDisk`](#aws-cdk-sdk.lightsail.LightsailDisk)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDisksResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetDistributionBundlesRequest <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionBundlesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDistributionBundlesRequest: lightsail.LightsailGetDistributionBundlesRequest = { ... }
```

### LightsailGetDistributionBundlesResult <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionBundlesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDistributionBundlesResult: lightsail.LightsailGetDistributionBundlesResult = { ... }
```

##### `bundles`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionBundlesResult.property.bundles"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDistributionBundle`](#aws-cdk-sdk.lightsail.LightsailDistributionBundle)[]

---

### LightsailGetDistributionLatestCacheResetRequest <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionLatestCacheResetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDistributionLatestCacheResetRequest: lightsail.LightsailGetDistributionLatestCacheResetRequest = { ... }
```

##### `distributionName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionLatestCacheResetRequest.property.distributionName"></a>

- *Type:* `string`

---

### LightsailGetDistributionLatestCacheResetResult <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionLatestCacheResetResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDistributionLatestCacheResetResult: lightsail.LightsailGetDistributionLatestCacheResetResult = { ... }
```

##### `createTime`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionLatestCacheResetResult.property.createTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionLatestCacheResetResult.property.status"></a>

- *Type:* `string`

---

### LightsailGetDistributionMetricDataRequest <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionMetricDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDistributionMetricDataRequest: lightsail.LightsailGetDistributionMetricDataRequest = { ... }
```

##### `distributionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionMetricDataRequest.property.distributionName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionMetricDataRequest.property.endTime"></a>

- *Type:* `string`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionMetricDataRequest.property.metricName"></a>

- *Type:* `string`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionMetricDataRequest.property.period"></a>

- *Type:* `number`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionMetricDataRequest.property.startTime"></a>

- *Type:* `string`

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionMetricDataRequest.property.statistics"></a>

- *Type:* `string`[]

---

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionMetricDataRequest.property.unit"></a>

- *Type:* `string`

---

### LightsailGetDistributionMetricDataResult <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionMetricDataResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDistributionMetricDataResult: lightsail.LightsailGetDistributionMetricDataResult = { ... }
```

##### `metricData`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionMetricDataResult.property.metricData"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailMetricDatapoint`](#aws-cdk-sdk.lightsail.LightsailMetricDatapoint)[]

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionMetricDataResult.property.metricName"></a>

- *Type:* `string`

---

### LightsailGetDistributionsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDistributionsRequest: lightsail.LightsailGetDistributionsRequest = { ... }
```

##### `distributionName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionsRequest.property.distributionName"></a>

- *Type:* `string`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionsRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetDistributionsResult <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDistributionsResult: lightsail.LightsailGetDistributionsResult = { ... }
```

##### `distributions`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionsResult.property.distributions"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailLightsailDistribution`](#aws-cdk-sdk.lightsail.LightsailLightsailDistribution)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDistributionsResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetDomainRequest <a name="aws-cdk-sdk.lightsail.LightsailGetDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDomainRequest: lightsail.LightsailGetDomainRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDomainRequest.property.domainName"></a>

- *Type:* `string`

---

### LightsailGetDomainResult <a name="aws-cdk-sdk.lightsail.LightsailGetDomainResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDomainResult: lightsail.LightsailGetDomainResult = { ... }
```

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDomainResult.property.domain"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDomain`](#aws-cdk-sdk.lightsail.LightsailDomain)

---

### LightsailGetDomainsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetDomainsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDomainsRequest: lightsail.LightsailGetDomainsRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDomainsRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetDomainsResult <a name="aws-cdk-sdk.lightsail.LightsailGetDomainsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetDomainsResult: lightsail.LightsailGetDomainsResult = { ... }
```

##### `domains`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDomainsResult.property.domains"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDomain`](#aws-cdk-sdk.lightsail.LightsailDomain)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetDomainsResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetExportSnapshotRecordsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetExportSnapshotRecordsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetExportSnapshotRecordsRequest: lightsail.LightsailGetExportSnapshotRecordsRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetExportSnapshotRecordsRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetExportSnapshotRecordsResult <a name="aws-cdk-sdk.lightsail.LightsailGetExportSnapshotRecordsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetExportSnapshotRecordsResult: lightsail.LightsailGetExportSnapshotRecordsResult = { ... }
```

##### `exportSnapshotRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetExportSnapshotRecordsResult.property.exportSnapshotRecords"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailExportSnapshotRecord`](#aws-cdk-sdk.lightsail.LightsailExportSnapshotRecord)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetExportSnapshotRecordsResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetInstanceAccessDetailsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceAccessDetailsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstanceAccessDetailsRequest: lightsail.LightsailGetInstanceAccessDetailsRequest = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceAccessDetailsRequest.property.instanceName"></a>

- *Type:* `string`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceAccessDetailsRequest.property.protocol"></a>

- *Type:* `string`

---

### LightsailGetInstanceAccessDetailsResult <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceAccessDetailsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstanceAccessDetailsResult: lightsail.LightsailGetInstanceAccessDetailsResult = { ... }
```

##### `accessDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceAccessDetailsResult.property.accessDetails"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstanceAccessDetails`](#aws-cdk-sdk.lightsail.LightsailInstanceAccessDetails)

---

### LightsailGetInstanceMetricDataRequest <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceMetricDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstanceMetricDataRequest: lightsail.LightsailGetInstanceMetricDataRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceMetricDataRequest.property.endTime"></a>

- *Type:* `string`

---

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceMetricDataRequest.property.instanceName"></a>

- *Type:* `string`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceMetricDataRequest.property.metricName"></a>

- *Type:* `string`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceMetricDataRequest.property.period"></a>

- *Type:* `number`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceMetricDataRequest.property.startTime"></a>

- *Type:* `string`

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceMetricDataRequest.property.statistics"></a>

- *Type:* `string`[]

---

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceMetricDataRequest.property.unit"></a>

- *Type:* `string`

---

### LightsailGetInstanceMetricDataResult <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceMetricDataResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstanceMetricDataResult: lightsail.LightsailGetInstanceMetricDataResult = { ... }
```

##### `metricData`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceMetricDataResult.property.metricData"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailMetricDatapoint`](#aws-cdk-sdk.lightsail.LightsailMetricDatapoint)[]

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceMetricDataResult.property.metricName"></a>

- *Type:* `string`

---

### LightsailGetInstancePortStatesRequest <a name="aws-cdk-sdk.lightsail.LightsailGetInstancePortStatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstancePortStatesRequest: lightsail.LightsailGetInstancePortStatesRequest = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstancePortStatesRequest.property.instanceName"></a>

- *Type:* `string`

---

### LightsailGetInstancePortStatesResult <a name="aws-cdk-sdk.lightsail.LightsailGetInstancePortStatesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstancePortStatesResult: lightsail.LightsailGetInstancePortStatesResult = { ... }
```

##### `portStates`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstancePortStatesResult.property.portStates"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstancePortState`](#aws-cdk-sdk.lightsail.LightsailInstancePortState)[]

---

### LightsailGetInstanceRequest <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstanceRequest: lightsail.LightsailGetInstanceRequest = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceRequest.property.instanceName"></a>

- *Type:* `string`

---

### LightsailGetInstanceResult <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstanceResult: lightsail.LightsailGetInstanceResult = { ... }
```

##### `instance`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceResult.property.instance"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstance`](#aws-cdk-sdk.lightsail.LightsailInstance)

---

### LightsailGetInstanceSnapshotRequest <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstanceSnapshotRequest: lightsail.LightsailGetInstanceSnapshotRequest = { ... }
```

##### `instanceSnapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotRequest.property.instanceSnapshotName"></a>

- *Type:* `string`

---

### LightsailGetInstanceSnapshotResult <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstanceSnapshotResult: lightsail.LightsailGetInstanceSnapshotResult = { ... }
```

##### `instanceSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotResult.property.instanceSnapshot"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstanceSnapshot`](#aws-cdk-sdk.lightsail.LightsailInstanceSnapshot)

---

### LightsailGetInstanceSnapshotsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstanceSnapshotsRequest: lightsail.LightsailGetInstanceSnapshotsRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotsRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetInstanceSnapshotsResult <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstanceSnapshotsResult: lightsail.LightsailGetInstanceSnapshotsResult = { ... }
```

##### `instanceSnapshots`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotsResult.property.instanceSnapshots"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstanceSnapshot`](#aws-cdk-sdk.lightsail.LightsailInstanceSnapshot)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotsResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetInstancesRequest <a name="aws-cdk-sdk.lightsail.LightsailGetInstancesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstancesRequest: lightsail.LightsailGetInstancesRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstancesRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetInstancesResult <a name="aws-cdk-sdk.lightsail.LightsailGetInstancesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstancesResult: lightsail.LightsailGetInstancesResult = { ... }
```

##### `instances`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstancesResult.property.instances"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstance`](#aws-cdk-sdk.lightsail.LightsailInstance)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstancesResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetInstanceStateRequest <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceStateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstanceStateRequest: lightsail.LightsailGetInstanceStateRequest = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceStateRequest.property.instanceName"></a>

- *Type:* `string`

---

### LightsailGetInstanceStateResult <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceStateResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetInstanceStateResult: lightsail.LightsailGetInstanceStateResult = { ... }
```

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetInstanceStateResult.property.state"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstanceState`](#aws-cdk-sdk.lightsail.LightsailInstanceState)

---

### LightsailGetKeyPairRequest <a name="aws-cdk-sdk.lightsail.LightsailGetKeyPairRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetKeyPairRequest: lightsail.LightsailGetKeyPairRequest = { ... }
```

##### `keyPairName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetKeyPairRequest.property.keyPairName"></a>

- *Type:* `string`

---

### LightsailGetKeyPairResult <a name="aws-cdk-sdk.lightsail.LightsailGetKeyPairResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetKeyPairResult: lightsail.LightsailGetKeyPairResult = { ... }
```

##### `keyPair`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetKeyPairResult.property.keyPair"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailKeyPair`](#aws-cdk-sdk.lightsail.LightsailKeyPair)

---

### LightsailGetKeyPairsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetKeyPairsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetKeyPairsRequest: lightsail.LightsailGetKeyPairsRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetKeyPairsRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetKeyPairsResult <a name="aws-cdk-sdk.lightsail.LightsailGetKeyPairsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetKeyPairsResult: lightsail.LightsailGetKeyPairsResult = { ... }
```

##### `keyPairs`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetKeyPairsResult.property.keyPairs"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailKeyPair`](#aws-cdk-sdk.lightsail.LightsailKeyPair)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetKeyPairsResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetLoadBalancerMetricDataRequest <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerMetricDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetLoadBalancerMetricDataRequest: lightsail.LightsailGetLoadBalancerMetricDataRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerMetricDataRequest.property.endTime"></a>

- *Type:* `string`

---

##### `loadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerMetricDataRequest.property.loadBalancerName"></a>

- *Type:* `string`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerMetricDataRequest.property.metricName"></a>

- *Type:* `string`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerMetricDataRequest.property.period"></a>

- *Type:* `number`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerMetricDataRequest.property.startTime"></a>

- *Type:* `string`

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerMetricDataRequest.property.statistics"></a>

- *Type:* `string`[]

---

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerMetricDataRequest.property.unit"></a>

- *Type:* `string`

---

### LightsailGetLoadBalancerMetricDataResult <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerMetricDataResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetLoadBalancerMetricDataResult: lightsail.LightsailGetLoadBalancerMetricDataResult = { ... }
```

##### `metricData`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerMetricDataResult.property.metricData"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailMetricDatapoint`](#aws-cdk-sdk.lightsail.LightsailMetricDatapoint)[]

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerMetricDataResult.property.metricName"></a>

- *Type:* `string`

---

### LightsailGetLoadBalancerRequest <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetLoadBalancerRequest: lightsail.LightsailGetLoadBalancerRequest = { ... }
```

##### `loadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerRequest.property.loadBalancerName"></a>

- *Type:* `string`

---

### LightsailGetLoadBalancerResult <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetLoadBalancerResult: lightsail.LightsailGetLoadBalancerResult = { ... }
```

##### `loadBalancer`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerResult.property.loadBalancer"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailLoadBalancer`](#aws-cdk-sdk.lightsail.LightsailLoadBalancer)

---

### LightsailGetLoadBalancersRequest <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetLoadBalancersRequest: lightsail.LightsailGetLoadBalancersRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancersRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetLoadBalancersResult <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetLoadBalancersResult: lightsail.LightsailGetLoadBalancersResult = { ... }
```

##### `loadBalancers`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancersResult.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailLoadBalancer`](#aws-cdk-sdk.lightsail.LightsailLoadBalancer)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancersResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetLoadBalancerTlsCertificatesRequest <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerTlsCertificatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetLoadBalancerTlsCertificatesRequest: lightsail.LightsailGetLoadBalancerTlsCertificatesRequest = { ... }
```

##### `loadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerTlsCertificatesRequest.property.loadBalancerName"></a>

- *Type:* `string`

---

### LightsailGetLoadBalancerTlsCertificatesResult <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerTlsCertificatesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetLoadBalancerTlsCertificatesResult: lightsail.LightsailGetLoadBalancerTlsCertificatesResult = { ... }
```

##### `tlsCertificates`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetLoadBalancerTlsCertificatesResult.property.tlsCertificates"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate`](#aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate)[]

---

### LightsailGetOperationRequest <a name="aws-cdk-sdk.lightsail.LightsailGetOperationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetOperationRequest: lightsail.LightsailGetOperationRequest = { ... }
```

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetOperationRequest.property.operationId"></a>

- *Type:* `string`

---

### LightsailGetOperationResult <a name="aws-cdk-sdk.lightsail.LightsailGetOperationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetOperationResult: lightsail.LightsailGetOperationResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetOperationResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailGetOperationsForResourceRequest <a name="aws-cdk-sdk.lightsail.LightsailGetOperationsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetOperationsForResourceRequest: lightsail.LightsailGetOperationsForResourceRequest = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetOperationsForResourceRequest.property.resourceName"></a>

- *Type:* `string`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetOperationsForResourceRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetOperationsForResourceResult <a name="aws-cdk-sdk.lightsail.LightsailGetOperationsForResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetOperationsForResourceResult: lightsail.LightsailGetOperationsForResourceResult = { ... }
```

##### `nextPageCount`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetOperationsForResourceResult.property.nextPageCount"></a>

- *Type:* `string`

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetOperationsForResourceResult.property.nextPageToken"></a>

- *Type:* `string`

---

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetOperationsForResourceResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailGetOperationsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetOperationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetOperationsRequest: lightsail.LightsailGetOperationsRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetOperationsRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetOperationsResult <a name="aws-cdk-sdk.lightsail.LightsailGetOperationsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetOperationsResult: lightsail.LightsailGetOperationsResult = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetOperationsResult.property.nextPageToken"></a>

- *Type:* `string`

---

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetOperationsResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailGetRegionsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetRegionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRegionsRequest: lightsail.LightsailGetRegionsRequest = { ... }
```

##### `includeAvailabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRegionsRequest.property.includeAvailabilityZones"></a>

- *Type:* `boolean`

---

##### `includeRelationalDatabaseAvailabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRegionsRequest.property.includeRelationalDatabaseAvailabilityZones"></a>

- *Type:* `boolean`

---

### LightsailGetRegionsResult <a name="aws-cdk-sdk.lightsail.LightsailGetRegionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRegionsResult: lightsail.LightsailGetRegionsResult = { ... }
```

##### `regions`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRegionsResult.property.regions"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRegion`](#aws-cdk-sdk.lightsail.LightsailRegion)[]

---

### LightsailGetRelationalDatabaseBlueprintsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBlueprintsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseBlueprintsRequest: lightsail.LightsailGetRelationalDatabaseBlueprintsRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBlueprintsRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabaseBlueprintsResult <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBlueprintsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseBlueprintsResult: lightsail.LightsailGetRelationalDatabaseBlueprintsResult = { ... }
```

##### `blueprints`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBlueprintsResult.property.blueprints"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBlueprint`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBlueprint)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBlueprintsResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabaseBundlesRequest <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBundlesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseBundlesRequest: lightsail.LightsailGetRelationalDatabaseBundlesRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBundlesRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabaseBundlesResult <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBundlesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseBundlesResult: lightsail.LightsailGetRelationalDatabaseBundlesResult = { ... }
```

##### `bundles`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBundlesResult.property.bundles"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBundle`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBundle)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBundlesResult.property.nextPageToken"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabaseEventsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseEventsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseEventsRequest: lightsail.LightsailGetRelationalDatabaseEventsRequest = { ... }
```

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseEventsRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

##### `durationInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseEventsRequest.property.durationInMinutes"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseEventsRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabaseEventsResult <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseEventsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseEventsResult: lightsail.LightsailGetRelationalDatabaseEventsResult = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseEventsResult.property.nextPageToken"></a>

- *Type:* `string`

---

##### `relationalDatabaseEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseEventsResult.property.relationalDatabaseEvents"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabaseEvent`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabaseEvent)[]

---

### LightsailGetRelationalDatabaseLogEventsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogEventsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseLogEventsRequest: lightsail.LightsailGetRelationalDatabaseLogEventsRequest = { ... }
```

##### `logStreamName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogEventsRequest.property.logStreamName"></a>

- *Type:* `string`

---

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogEventsRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogEventsRequest.property.endTime"></a>

- *Type:* `string`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogEventsRequest.property.pageToken"></a>

- *Type:* `string`

---

##### `startFromHead`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogEventsRequest.property.startFromHead"></a>

- *Type:* `boolean`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogEventsRequest.property.startTime"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabaseLogEventsResult <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogEventsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseLogEventsResult: lightsail.LightsailGetRelationalDatabaseLogEventsResult = { ... }
```

##### `nextBackwardToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogEventsResult.property.nextBackwardToken"></a>

- *Type:* `string`

---

##### `nextForwardToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogEventsResult.property.nextForwardToken"></a>

- *Type:* `string`

---

##### `resourceLogEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogEventsResult.property.resourceLogEvents"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailLogEvent`](#aws-cdk-sdk.lightsail.LightsailLogEvent)[]

---

### LightsailGetRelationalDatabaseLogStreamsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogStreamsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseLogStreamsRequest: lightsail.LightsailGetRelationalDatabaseLogStreamsRequest = { ... }
```

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogStreamsRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabaseLogStreamsResult <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogStreamsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseLogStreamsResult: lightsail.LightsailGetRelationalDatabaseLogStreamsResult = { ... }
```

##### `logStreams`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogStreamsResult.property.logStreams"></a>

- *Type:* `string`[]

---

### LightsailGetRelationalDatabaseMasterUserPasswordRequest <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMasterUserPasswordRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseMasterUserPasswordRequest: lightsail.LightsailGetRelationalDatabaseMasterUserPasswordRequest = { ... }
```

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMasterUserPasswordRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

##### `passwordVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMasterUserPasswordRequest.property.passwordVersion"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabaseMasterUserPasswordResult <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMasterUserPasswordResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseMasterUserPasswordResult: lightsail.LightsailGetRelationalDatabaseMasterUserPasswordResult = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMasterUserPasswordResult.property.createdAt"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMasterUserPasswordResult.property.masterUserPassword"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabaseMetricDataRequest <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMetricDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseMetricDataRequest: lightsail.LightsailGetRelationalDatabaseMetricDataRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMetricDataRequest.property.endTime"></a>

- *Type:* `string`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMetricDataRequest.property.metricName"></a>

- *Type:* `string`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMetricDataRequest.property.period"></a>

- *Type:* `number`

---

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMetricDataRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMetricDataRequest.property.startTime"></a>

- *Type:* `string`

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMetricDataRequest.property.statistics"></a>

- *Type:* `string`[]

---

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMetricDataRequest.property.unit"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabaseMetricDataResult <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMetricDataResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseMetricDataResult: lightsail.LightsailGetRelationalDatabaseMetricDataResult = { ... }
```

##### `metricData`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMetricDataResult.property.metricData"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailMetricDatapoint`](#aws-cdk-sdk.lightsail.LightsailMetricDatapoint)[]

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMetricDataResult.property.metricName"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabaseParametersRequest <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseParametersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseParametersRequest: lightsail.LightsailGetRelationalDatabaseParametersRequest = { ... }
```

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseParametersRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseParametersRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabaseParametersResult <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseParametersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseParametersResult: lightsail.LightsailGetRelationalDatabaseParametersResult = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseParametersResult.property.nextPageToken"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseParametersResult.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabaseParameter`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabaseParameter)[]

---

### LightsailGetRelationalDatabaseRequest <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseRequest: lightsail.LightsailGetRelationalDatabaseRequest = { ... }
```

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabaseResult <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseResult: lightsail.LightsailGetRelationalDatabaseResult = { ... }
```

##### `relationalDatabase`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseResult.property.relationalDatabase"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabase`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabase)

---

### LightsailGetRelationalDatabaseSnapshotRequest <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseSnapshotRequest: lightsail.LightsailGetRelationalDatabaseSnapshotRequest = { ... }
```

##### `relationalDatabaseSnapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotRequest.property.relationalDatabaseSnapshotName"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabaseSnapshotResult <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseSnapshotResult: lightsail.LightsailGetRelationalDatabaseSnapshotResult = { ... }
```

##### `relationalDatabaseSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotResult.property.relationalDatabaseSnapshot"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot)

---

### LightsailGetRelationalDatabaseSnapshotsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseSnapshotsRequest: lightsail.LightsailGetRelationalDatabaseSnapshotsRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotsRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabaseSnapshotsResult <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabaseSnapshotsResult: lightsail.LightsailGetRelationalDatabaseSnapshotsResult = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotsResult.property.nextPageToken"></a>

- *Type:* `string`

---

##### `relationalDatabaseSnapshots`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotsResult.property.relationalDatabaseSnapshots"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot)[]

---

### LightsailGetRelationalDatabasesRequest <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabasesRequest: lightsail.LightsailGetRelationalDatabasesRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabasesRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetRelationalDatabasesResult <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabasesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetRelationalDatabasesResult: lightsail.LightsailGetRelationalDatabasesResult = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabasesResult.property.nextPageToken"></a>

- *Type:* `string`

---

##### `relationalDatabases`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetRelationalDatabasesResult.property.relationalDatabases"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabase`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabase)[]

---

### LightsailGetStaticIpRequest <a name="aws-cdk-sdk.lightsail.LightsailGetStaticIpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetStaticIpRequest: lightsail.LightsailGetStaticIpRequest = { ... }
```

##### `staticIpName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetStaticIpRequest.property.staticIpName"></a>

- *Type:* `string`

---

### LightsailGetStaticIpResult <a name="aws-cdk-sdk.lightsail.LightsailGetStaticIpResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetStaticIpResult: lightsail.LightsailGetStaticIpResult = { ... }
```

##### `staticIp`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetStaticIpResult.property.staticIp"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailStaticIp`](#aws-cdk-sdk.lightsail.LightsailStaticIp)

---

### LightsailGetStaticIpsRequest <a name="aws-cdk-sdk.lightsail.LightsailGetStaticIpsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetStaticIpsRequest: lightsail.LightsailGetStaticIpsRequest = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetStaticIpsRequest.property.pageToken"></a>

- *Type:* `string`

---

### LightsailGetStaticIpsResult <a name="aws-cdk-sdk.lightsail.LightsailGetStaticIpsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailGetStaticIpsResult: lightsail.LightsailGetStaticIpsResult = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetStaticIpsResult.property.nextPageToken"></a>

- *Type:* `string`

---

##### `staticIps`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailGetStaticIpsResult.property.staticIps"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailStaticIp`](#aws-cdk-sdk.lightsail.LightsailStaticIp)[]

---

### LightsailHeaderObject <a name="aws-cdk-sdk.lightsail.LightsailHeaderObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailHeaderObject: lightsail.LightsailHeaderObject = { ... }
```

##### `headersAllowList`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailHeaderObject.property.headersAllowList"></a>

- *Type:* `string`[]

---

##### `option`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailHeaderObject.property.option"></a>

- *Type:* `string`

---

### LightsailHostKeyAttributes <a name="aws-cdk-sdk.lightsail.LightsailHostKeyAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailHostKeyAttributes: lightsail.LightsailHostKeyAttributes = { ... }
```

##### `algorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailHostKeyAttributes.property.algorithm"></a>

- *Type:* `string`

---

##### `fingerprintSHA1`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailHostKeyAttributes.property.fingerprintSHA1"></a>

- *Type:* `string`

---

##### `fingerprintSHA256`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailHostKeyAttributes.property.fingerprintSHA256"></a>

- *Type:* `string`

---

##### `notValidAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailHostKeyAttributes.property.notValidAfter"></a>

- *Type:* `string`

---

##### `notValidBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailHostKeyAttributes.property.notValidBefore"></a>

- *Type:* `string`

---

##### `publicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailHostKeyAttributes.property.publicKey"></a>

- *Type:* `string`

---

##### `witnessedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailHostKeyAttributes.property.witnessedAt"></a>

- *Type:* `string`

---

### LightsailImportKeyPairRequest <a name="aws-cdk-sdk.lightsail.LightsailImportKeyPairRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailImportKeyPairRequest: lightsail.LightsailImportKeyPairRequest = { ... }
```

##### `keyPairName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailImportKeyPairRequest.property.keyPairName"></a>

- *Type:* `string`

---

##### `publicKeyBase64`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailImportKeyPairRequest.property.publicKeyBase64"></a>

- *Type:* `string`

---

### LightsailImportKeyPairResult <a name="aws-cdk-sdk.lightsail.LightsailImportKeyPairResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailImportKeyPairResult: lightsail.LightsailImportKeyPairResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailImportKeyPairResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailInputOrigin <a name="aws-cdk-sdk.lightsail.LightsailInputOrigin"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailInputOrigin: lightsail.LightsailInputOrigin = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInputOrigin.property.name"></a>

- *Type:* `string`

---

##### `protocolPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInputOrigin.property.protocolPolicy"></a>

- *Type:* `string`

---

##### `regionName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInputOrigin.property.regionName"></a>

- *Type:* `string`

---

### LightsailInstance <a name="aws-cdk-sdk.lightsail.LightsailInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailInstance: lightsail.LightsailInstance = { ... }
```

##### `addOns`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.addOns"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAddOn`](#aws-cdk-sdk.lightsail.LightsailAddOn)[]

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.arn"></a>

- *Type:* `string`

---

##### `blueprintId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.blueprintId"></a>

- *Type:* `string`

---

##### `blueprintName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.blueprintName"></a>

- *Type:* `string`

---

##### `bundleId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.bundleId"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.createdAt"></a>

- *Type:* `string`

---

##### `hardware`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.hardware"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstanceHardware`](#aws-cdk-sdk.lightsail.LightsailInstanceHardware)

---

##### `ipv6Address`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.ipv6Address"></a>

- *Type:* `string`

---

##### `isStaticIp`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.isStaticIp"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.name"></a>

- *Type:* `string`

---

##### `networking`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.networking"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstanceNetworking`](#aws-cdk-sdk.lightsail.LightsailInstanceNetworking)

---

##### `privateIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.privateIpAddress"></a>

- *Type:* `string`

---

##### `publicIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.publicIpAddress"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.resourceType"></a>

- *Type:* `string`

---

##### `sshKeyName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.sshKeyName"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.state"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstanceState`](#aws-cdk-sdk.lightsail.LightsailInstanceState)

---

##### `supportCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstance.property.username"></a>

- *Type:* `string`

---

### LightsailInstanceAccessDetails <a name="aws-cdk-sdk.lightsail.LightsailInstanceAccessDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailInstanceAccessDetails: lightsail.LightsailInstanceAccessDetails = { ... }
```

##### `certKey`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceAccessDetails.property.certKey"></a>

- *Type:* `string`

---

##### `expiresAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceAccessDetails.property.expiresAt"></a>

- *Type:* `string`

---

##### `hostKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceAccessDetails.property.hostKeys"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailHostKeyAttributes`](#aws-cdk-sdk.lightsail.LightsailHostKeyAttributes)[]

---

##### `instanceName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceAccessDetails.property.instanceName"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceAccessDetails.property.ipAddress"></a>

- *Type:* `string`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceAccessDetails.property.password"></a>

- *Type:* `string`

---

##### `passwordData`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceAccessDetails.property.passwordData"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailPasswordData`](#aws-cdk-sdk.lightsail.LightsailPasswordData)

---

##### `privateKey`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceAccessDetails.property.privateKey"></a>

- *Type:* `string`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceAccessDetails.property.protocol"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceAccessDetails.property.username"></a>

- *Type:* `string`

---

### LightsailInstanceEntry <a name="aws-cdk-sdk.lightsail.LightsailInstanceEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailInstanceEntry: lightsail.LightsailInstanceEntry = { ... }
```

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceEntry.property.availabilityZone"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceEntry.property.instanceType"></a>

- *Type:* `string`

---

##### `portInfoSource`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceEntry.property.portInfoSource"></a>

- *Type:* `string`

---

##### `sourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceEntry.property.sourceName"></a>

- *Type:* `string`

---

##### `userData`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceEntry.property.userData"></a>

- *Type:* `string`

---

### LightsailInstanceHardware <a name="aws-cdk-sdk.lightsail.LightsailInstanceHardware"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailInstanceHardware: lightsail.LightsailInstanceHardware = { ... }
```

##### `cpuCount`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceHardware.property.cpuCount"></a>

- *Type:* `number`

---

##### `disks`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceHardware.property.disks"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDisk`](#aws-cdk-sdk.lightsail.LightsailDisk)[]

---

##### `ramSizeInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceHardware.property.ramSizeInGb"></a>

- *Type:* `number`

---

### LightsailInstanceHealthSummary <a name="aws-cdk-sdk.lightsail.LightsailInstanceHealthSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailInstanceHealthSummary: lightsail.LightsailInstanceHealthSummary = { ... }
```

##### `instanceHealth`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceHealthSummary.property.instanceHealth"></a>

- *Type:* `string`

---

##### `instanceHealthReason`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceHealthSummary.property.instanceHealthReason"></a>

- *Type:* `string`

---

##### `instanceName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceHealthSummary.property.instanceName"></a>

- *Type:* `string`

---

### LightsailInstanceNetworking <a name="aws-cdk-sdk.lightsail.LightsailInstanceNetworking"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailInstanceNetworking: lightsail.LightsailInstanceNetworking = { ... }
```

##### `monthlyTransfer`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceNetworking.property.monthlyTransfer"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailMonthlyTransfer`](#aws-cdk-sdk.lightsail.LightsailMonthlyTransfer)

---

##### `ports`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceNetworking.property.ports"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstancePortInfo`](#aws-cdk-sdk.lightsail.LightsailInstancePortInfo)[]

---

### LightsailInstancePortInfo <a name="aws-cdk-sdk.lightsail.LightsailInstancePortInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailInstancePortInfo: lightsail.LightsailInstancePortInfo = { ... }
```

##### `accessDirection`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstancePortInfo.property.accessDirection"></a>

- *Type:* `string`

---

##### `accessFrom`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstancePortInfo.property.accessFrom"></a>

- *Type:* `string`

---

##### `accessType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstancePortInfo.property.accessType"></a>

- *Type:* `string`

---

##### `cidrListAliases`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstancePortInfo.property.cidrListAliases"></a>

- *Type:* `string`[]

---

##### `cidrs`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstancePortInfo.property.cidrs"></a>

- *Type:* `string`[]

---

##### `commonName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstancePortInfo.property.commonName"></a>

- *Type:* `string`

---

##### `fromPort`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstancePortInfo.property.fromPort"></a>

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstancePortInfo.property.protocol"></a>

- *Type:* `string`

---

##### `toPort`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstancePortInfo.property.toPort"></a>

- *Type:* `number`

---

### LightsailInstancePortState <a name="aws-cdk-sdk.lightsail.LightsailInstancePortState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailInstancePortState: lightsail.LightsailInstancePortState = { ... }
```

##### `cidrListAliases`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstancePortState.property.cidrListAliases"></a>

- *Type:* `string`[]

---

##### `cidrs`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstancePortState.property.cidrs"></a>

- *Type:* `string`[]

---

##### `fromPort`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstancePortState.property.fromPort"></a>

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstancePortState.property.protocol"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstancePortState.property.state"></a>

- *Type:* `string`

---

##### `toPort`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstancePortState.property.toPort"></a>

- *Type:* `number`

---

### LightsailInstanceSnapshot <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailInstanceSnapshot: lightsail.LightsailInstanceSnapshot = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.createdAt"></a>

- *Type:* `string`

---

##### `fromAttachedDisks`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.fromAttachedDisks"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDisk`](#aws-cdk-sdk.lightsail.LightsailDisk)[]

---

##### `fromBlueprintId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.fromBlueprintId"></a>

- *Type:* `string`

---

##### `fromBundleId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.fromBundleId"></a>

- *Type:* `string`

---

##### `fromInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.fromInstanceArn"></a>

- *Type:* `string`

---

##### `fromInstanceName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.fromInstanceName"></a>

- *Type:* `string`

---

##### `isFromAutoSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.isFromAutoSnapshot"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.name"></a>

- *Type:* `string`

---

##### `progress`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.progress"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.resourceType"></a>

- *Type:* `string`

---

##### `sizeInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.sizeInGb"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.state"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshot.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailInstanceSnapshotInfo <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshotInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailInstanceSnapshotInfo: lightsail.LightsailInstanceSnapshotInfo = { ... }
```

##### `fromBlueprintId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshotInfo.property.fromBlueprintId"></a>

- *Type:* `string`

---

##### `fromBundleId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshotInfo.property.fromBundleId"></a>

- *Type:* `string`

---

##### `fromDiskInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceSnapshotInfo.property.fromDiskInfo"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDiskInfo`](#aws-cdk-sdk.lightsail.LightsailDiskInfo)[]

---

### LightsailInstanceState <a name="aws-cdk-sdk.lightsail.LightsailInstanceState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailInstanceState: lightsail.LightsailInstanceState = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceState.property.code"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailInstanceState.property.name"></a>

- *Type:* `string`

---

### LightsailIsVpcPeeredRequest <a name="aws-cdk-sdk.lightsail.LightsailIsVpcPeeredRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailIsVpcPeeredRequest: lightsail.LightsailIsVpcPeeredRequest = { ... }
```

### LightsailIsVpcPeeredResult <a name="aws-cdk-sdk.lightsail.LightsailIsVpcPeeredResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailIsVpcPeeredResult: lightsail.LightsailIsVpcPeeredResult = { ... }
```

##### `isPeered`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailIsVpcPeeredResult.property.isPeered"></a>

- *Type:* `boolean`

---

### LightsailKeyPair <a name="aws-cdk-sdk.lightsail.LightsailKeyPair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailKeyPair: lightsail.LightsailKeyPair = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailKeyPair.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailKeyPair.property.createdAt"></a>

- *Type:* `string`

---

##### `fingerprint`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailKeyPair.property.fingerprint"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailKeyPair.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailKeyPair.property.name"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailKeyPair.property.resourceType"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailKeyPair.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailKeyPair.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailLightsailDistribution <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailLightsailDistribution: lightsail.LightsailLightsailDistribution = { ... }
```

##### `ableToUpdateBundle`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.ableToUpdateBundle"></a>

- *Type:* `boolean`

---

##### `alternativeDomainNames`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.alternativeDomainNames"></a>

- *Type:* `string`[]

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.arn"></a>

- *Type:* `string`

---

##### `bundleId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.bundleId"></a>

- *Type:* `string`

---

##### `cacheBehaviors`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.cacheBehaviors"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCacheBehaviorPerPath`](#aws-cdk-sdk.lightsail.LightsailCacheBehaviorPerPath)[]

---

##### `cacheBehaviorSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.cacheBehaviorSettings"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCacheSettings`](#aws-cdk-sdk.lightsail.LightsailCacheSettings)

---

##### `certificateName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.certificateName"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.createdAt"></a>

- *Type:* `string`

---

##### `defaultCacheBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.defaultCacheBehavior"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCacheBehavior`](#aws-cdk-sdk.lightsail.LightsailCacheBehavior)

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.domainName"></a>

- *Type:* `string`

---

##### `isEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.isEnabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.name"></a>

- *Type:* `string`

---

##### `origin`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.origin"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOrigin`](#aws-cdk-sdk.lightsail.LightsailOrigin)

---

##### `originPublicDNS`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.originPublicDNS"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.status"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLightsailDistribution.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailLoadBalancer <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailLoadBalancer: lightsail.LightsailLoadBalancer = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.arn"></a>

- *Type:* `string`

---

##### `configurationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.configurationOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.createdAt"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.dnsName"></a>

- *Type:* `string`

---

##### `healthCheckPath`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.healthCheckPath"></a>

- *Type:* `string`

---

##### `instanceHealthSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.instanceHealthSummary"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstanceHealthSummary`](#aws-cdk-sdk.lightsail.LightsailInstanceHealthSummary)[]

---

##### `instancePort`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.instancePort"></a>

- *Type:* `number`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.name"></a>

- *Type:* `string`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.protocol"></a>

- *Type:* `string`

---

##### `publicPorts`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.publicPorts"></a>

- *Type:* `number`[]

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.resourceType"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.state"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

##### `tlsCertificateSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancer.property.tlsCertificateSummaries"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateSummary`](#aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateSummary)[]

---

### LightsailLoadBalancerTlsCertificate <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailLoadBalancerTlsCertificate: lightsail.LightsailLoadBalancerTlsCertificate = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.createdAt"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.domainName"></a>

- *Type:* `string`

---

##### `domainValidationRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.domainValidationRecords"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateDomainValidationRecord`](#aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateDomainValidationRecord)[]

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.failureReason"></a>

- *Type:* `string`

---

##### `isAttached`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.isAttached"></a>

- *Type:* `boolean`

---

##### `issuedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.issuedAt"></a>

- *Type:* `string`

---

##### `issuer`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.issuer"></a>

- *Type:* `string`

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.keyAlgorithm"></a>

- *Type:* `string`

---

##### `loadBalancerName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.loadBalancerName"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.name"></a>

- *Type:* `string`

---

##### `notAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.notAfter"></a>

- *Type:* `string`

---

##### `notBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.notBefore"></a>

- *Type:* `string`

---

##### `renewalSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.renewalSummary"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateRenewalSummary`](#aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateRenewalSummary)

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.resourceType"></a>

- *Type:* `string`

---

##### `revocationReason`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.revocationReason"></a>

- *Type:* `string`

---

##### `revokedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.revokedAt"></a>

- *Type:* `string`

---

##### `serial`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.serial"></a>

- *Type:* `string`

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.signatureAlgorithm"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.status"></a>

- *Type:* `string`

---

##### `subject`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.subject"></a>

- *Type:* `string`

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.subjectAlternativeNames"></a>

- *Type:* `string`[]

---

##### `supportCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailLoadBalancerTlsCertificateDomainValidationOption <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateDomainValidationOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailLoadBalancerTlsCertificateDomainValidationOption: lightsail.LightsailLoadBalancerTlsCertificateDomainValidationOption = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateDomainValidationOption.property.domainName"></a>

- *Type:* `string`

---

##### `validationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateDomainValidationOption.property.validationStatus"></a>

- *Type:* `string`

---

### LightsailLoadBalancerTlsCertificateDomainValidationRecord <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateDomainValidationRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailLoadBalancerTlsCertificateDomainValidationRecord: lightsail.LightsailLoadBalancerTlsCertificateDomainValidationRecord = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateDomainValidationRecord.property.domainName"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateDomainValidationRecord.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateDomainValidationRecord.property.type"></a>

- *Type:* `string`

---

##### `validationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateDomainValidationRecord.property.validationStatus"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateDomainValidationRecord.property.value"></a>

- *Type:* `string`

---

### LightsailLoadBalancerTlsCertificateRenewalSummary <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateRenewalSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailLoadBalancerTlsCertificateRenewalSummary: lightsail.LightsailLoadBalancerTlsCertificateRenewalSummary = { ... }
```

##### `domainValidationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateRenewalSummary.property.domainValidationOptions"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateDomainValidationOption`](#aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateDomainValidationOption)[]

---

##### `renewalStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateRenewalSummary.property.renewalStatus"></a>

- *Type:* `string`

---

### LightsailLoadBalancerTlsCertificateSummary <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailLoadBalancerTlsCertificateSummary: lightsail.LightsailLoadBalancerTlsCertificateSummary = { ... }
```

##### `isAttached`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateSummary.property.isAttached"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateSummary.property.name"></a>

- *Type:* `string`

---

### LightsailLogEvent <a name="aws-cdk-sdk.lightsail.LightsailLogEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailLogEvent: lightsail.LightsailLogEvent = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLogEvent.property.createdAt"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailLogEvent.property.message"></a>

- *Type:* `string`

---

### LightsailMetricDatapoint <a name="aws-cdk-sdk.lightsail.LightsailMetricDatapoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailMetricDatapoint: lightsail.LightsailMetricDatapoint = { ... }
```

##### `average`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailMetricDatapoint.property.average"></a>

- *Type:* `number`

---

##### `maximum`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailMetricDatapoint.property.maximum"></a>

- *Type:* `number`

---

##### `minimum`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailMetricDatapoint.property.minimum"></a>

- *Type:* `number`

---

##### `sampleCount`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailMetricDatapoint.property.sampleCount"></a>

- *Type:* `number`

---

##### `sum`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailMetricDatapoint.property.sum"></a>

- *Type:* `number`

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailMetricDatapoint.property.timestamp"></a>

- *Type:* `string`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailMetricDatapoint.property.unit"></a>

- *Type:* `string`

---

### LightsailMonitoredResourceInfo <a name="aws-cdk-sdk.lightsail.LightsailMonitoredResourceInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailMonitoredResourceInfo: lightsail.LightsailMonitoredResourceInfo = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailMonitoredResourceInfo.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailMonitoredResourceInfo.property.name"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailMonitoredResourceInfo.property.resourceType"></a>

- *Type:* `string`

---

### LightsailMonthlyTransfer <a name="aws-cdk-sdk.lightsail.LightsailMonthlyTransfer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailMonthlyTransfer: lightsail.LightsailMonthlyTransfer = { ... }
```

##### `gbPerMonthAllocated`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailMonthlyTransfer.property.gbPerMonthAllocated"></a>

- *Type:* `number`

---

### LightsailOpenInstancePublicPortsRequest <a name="aws-cdk-sdk.lightsail.LightsailOpenInstancePublicPortsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailOpenInstancePublicPortsRequest: lightsail.LightsailOpenInstancePublicPortsRequest = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailOpenInstancePublicPortsRequest.property.instanceName"></a>

- *Type:* `string`

---

##### `portInfo`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailOpenInstancePublicPortsRequest.property.portInfo"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailPortInfo`](#aws-cdk-sdk.lightsail.LightsailPortInfo)

---

### LightsailOpenInstancePublicPortsResult <a name="aws-cdk-sdk.lightsail.LightsailOpenInstancePublicPortsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailOpenInstancePublicPortsResult: lightsail.LightsailOpenInstancePublicPortsResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOpenInstancePublicPortsResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailOperation <a name="aws-cdk-sdk.lightsail.LightsailOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailOperation: lightsail.LightsailOperation = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `operationDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOperation.property.statusChangedAt"></a>

- *Type:* `string`

---

### LightsailOrigin <a name="aws-cdk-sdk.lightsail.LightsailOrigin"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailOrigin: lightsail.LightsailOrigin = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOrigin.property.name"></a>

- *Type:* `string`

---

##### `protocolPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOrigin.property.protocolPolicy"></a>

- *Type:* `string`

---

##### `regionName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOrigin.property.regionName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailOrigin.property.resourceType"></a>

- *Type:* `string`

---

### LightsailPasswordData <a name="aws-cdk-sdk.lightsail.LightsailPasswordData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailPasswordData: lightsail.LightsailPasswordData = { ... }
```

##### `ciphertext`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPasswordData.property.ciphertext"></a>

- *Type:* `string`

---

##### `keyPairName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPasswordData.property.keyPairName"></a>

- *Type:* `string`

---

### LightsailPeerVpcRequest <a name="aws-cdk-sdk.lightsail.LightsailPeerVpcRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailPeerVpcRequest: lightsail.LightsailPeerVpcRequest = { ... }
```

### LightsailPeerVpcResult <a name="aws-cdk-sdk.lightsail.LightsailPeerVpcResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailPeerVpcResult: lightsail.LightsailPeerVpcResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPeerVpcResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailPendingMaintenanceAction <a name="aws-cdk-sdk.lightsail.LightsailPendingMaintenanceAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailPendingMaintenanceAction: lightsail.LightsailPendingMaintenanceAction = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPendingMaintenanceAction.property.action"></a>

- *Type:* `string`

---

##### `currentApplyDate`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPendingMaintenanceAction.property.currentApplyDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPendingMaintenanceAction.property.description"></a>

- *Type:* `string`

---

### LightsailPendingModifiedRelationalDatabaseValues <a name="aws-cdk-sdk.lightsail.LightsailPendingModifiedRelationalDatabaseValues"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailPendingModifiedRelationalDatabaseValues: lightsail.LightsailPendingModifiedRelationalDatabaseValues = { ... }
```

##### `backupRetentionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPendingModifiedRelationalDatabaseValues.property.backupRetentionEnabled"></a>

- *Type:* `boolean`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPendingModifiedRelationalDatabaseValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPendingModifiedRelationalDatabaseValues.property.masterUserPassword"></a>

- *Type:* `string`

---

### LightsailPortInfo <a name="aws-cdk-sdk.lightsail.LightsailPortInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailPortInfo: lightsail.LightsailPortInfo = { ... }
```

##### `cidrListAliases`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPortInfo.property.cidrListAliases"></a>

- *Type:* `string`[]

---

##### `cidrs`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPortInfo.property.cidrs"></a>

- *Type:* `string`[]

---

##### `fromPort`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPortInfo.property.fromPort"></a>

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPortInfo.property.protocol"></a>

- *Type:* `string`

---

##### `toPort`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPortInfo.property.toPort"></a>

- *Type:* `number`

---

### LightsailPutAlarmRequest <a name="aws-cdk-sdk.lightsail.LightsailPutAlarmRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailPutAlarmRequest: lightsail.LightsailPutAlarmRequest = { ... }
```

##### `alarmName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailPutAlarmRequest.property.alarmName"></a>

- *Type:* `string`

---

##### `comparisonOperator`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailPutAlarmRequest.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `evaluationPeriods`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailPutAlarmRequest.property.evaluationPeriods"></a>

- *Type:* `number`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailPutAlarmRequest.property.metricName"></a>

- *Type:* `string`

---

##### `monitoredResourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailPutAlarmRequest.property.monitoredResourceName"></a>

- *Type:* `string`

---

##### `threshold`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailPutAlarmRequest.property.threshold"></a>

- *Type:* `number`

---

##### `contactProtocols`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPutAlarmRequest.property.contactProtocols"></a>

- *Type:* `string`[]

---

##### `datapointsToAlarm`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPutAlarmRequest.property.datapointsToAlarm"></a>

- *Type:* `number`

---

##### `notificationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPutAlarmRequest.property.notificationEnabled"></a>

- *Type:* `boolean`

---

##### `notificationTriggers`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPutAlarmRequest.property.notificationTriggers"></a>

- *Type:* `string`[]

---

##### `treatMissingData`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPutAlarmRequest.property.treatMissingData"></a>

- *Type:* `string`

---

### LightsailPutAlarmResult <a name="aws-cdk-sdk.lightsail.LightsailPutAlarmResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailPutAlarmResult: lightsail.LightsailPutAlarmResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPutAlarmResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailPutInstancePublicPortsRequest <a name="aws-cdk-sdk.lightsail.LightsailPutInstancePublicPortsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailPutInstancePublicPortsRequest: lightsail.LightsailPutInstancePublicPortsRequest = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailPutInstancePublicPortsRequest.property.instanceName"></a>

- *Type:* `string`

---

##### `portInfos`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailPutInstancePublicPortsRequest.property.portInfos"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailPortInfo`](#aws-cdk-sdk.lightsail.LightsailPortInfo)[]

---

### LightsailPutInstancePublicPortsResult <a name="aws-cdk-sdk.lightsail.LightsailPutInstancePublicPortsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailPutInstancePublicPortsResult: lightsail.LightsailPutInstancePublicPortsResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailPutInstancePublicPortsResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailQueryStringObject <a name="aws-cdk-sdk.lightsail.LightsailQueryStringObject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailQueryStringObject: lightsail.LightsailQueryStringObject = { ... }
```

##### `option`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailQueryStringObject.property.option"></a>

- *Type:* `boolean`

---

##### `queryStringsAllowList`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailQueryStringObject.property.queryStringsAllowList"></a>

- *Type:* `string`[]

---

### LightsailRebootInstanceRequest <a name="aws-cdk-sdk.lightsail.LightsailRebootInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRebootInstanceRequest: lightsail.LightsailRebootInstanceRequest = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailRebootInstanceRequest.property.instanceName"></a>

- *Type:* `string`

---

### LightsailRebootInstanceResult <a name="aws-cdk-sdk.lightsail.LightsailRebootInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRebootInstanceResult: lightsail.LightsailRebootInstanceResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRebootInstanceResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailRebootRelationalDatabaseRequest <a name="aws-cdk-sdk.lightsail.LightsailRebootRelationalDatabaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRebootRelationalDatabaseRequest: lightsail.LightsailRebootRelationalDatabaseRequest = { ... }
```

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailRebootRelationalDatabaseRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

### LightsailRebootRelationalDatabaseResult <a name="aws-cdk-sdk.lightsail.LightsailRebootRelationalDatabaseResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRebootRelationalDatabaseResult: lightsail.LightsailRebootRelationalDatabaseResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRebootRelationalDatabaseResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailRegion <a name="aws-cdk-sdk.lightsail.LightsailRegion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRegion: lightsail.LightsailRegion = { ... }
```

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRegion.property.availabilityZones"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAvailabilityZone`](#aws-cdk-sdk.lightsail.LightsailAvailabilityZone)[]

---

##### `continentCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRegion.property.continentCode"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRegion.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRegion.property.displayName"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRegion.property.name"></a>

- *Type:* `string`

---

##### `relationalDatabaseAvailabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRegion.property.relationalDatabaseAvailabilityZones"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAvailabilityZone`](#aws-cdk-sdk.lightsail.LightsailAvailabilityZone)[]

---

### LightsailRegisterContainerImageRequest <a name="aws-cdk-sdk.lightsail.LightsailRegisterContainerImageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRegisterContainerImageRequest: lightsail.LightsailRegisterContainerImageRequest = { ... }
```

##### `digest`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailRegisterContainerImageRequest.property.digest"></a>

- *Type:* `string`

---

##### `label`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailRegisterContainerImageRequest.property.label"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailRegisterContainerImageRequest.property.serviceName"></a>

- *Type:* `string`

---

### LightsailRegisterContainerImageResult <a name="aws-cdk-sdk.lightsail.LightsailRegisterContainerImageResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRegisterContainerImageResult: lightsail.LightsailRegisterContainerImageResult = { ... }
```

##### `containerImage`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRegisterContainerImageResult.property.containerImage"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerImage`](#aws-cdk-sdk.lightsail.LightsailContainerImage)

---

### LightsailRelationalDatabase <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRelationalDatabase: lightsail.LightsailRelationalDatabase = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.arn"></a>

- *Type:* `string`

---

##### `backupRetentionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.backupRetentionEnabled"></a>

- *Type:* `boolean`

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.createdAt"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.engineVersion"></a>

- *Type:* `string`

---

##### `hardware`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.hardware"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabaseHardware`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabaseHardware)

---

##### `latestRestorableTime`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `masterDatabaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.masterDatabaseName"></a>

- *Type:* `string`

---

##### `masterEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.masterEndpoint"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabaseEndpoint`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabaseEndpoint)

---

##### `masterUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.masterUsername"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.name"></a>

- *Type:* `string`

---

##### `parameterApplyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.parameterApplyStatus"></a>

- *Type:* `string`

---

##### `pendingMaintenanceActions`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.pendingMaintenanceActions"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailPendingMaintenanceAction`](#aws-cdk-sdk.lightsail.LightsailPendingMaintenanceAction)[]

---

##### `pendingModifiedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailPendingModifiedRelationalDatabaseValues`](#aws-cdk-sdk.lightsail.LightsailPendingModifiedRelationalDatabaseValues)

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `relationalDatabaseBlueprintId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.relationalDatabaseBlueprintId"></a>

- *Type:* `string`

---

##### `relationalDatabaseBundleId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.relationalDatabaseBundleId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.resourceType"></a>

- *Type:* `string`

---

##### `secondaryAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.secondaryAvailabilityZone"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.state"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabase.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailRelationalDatabaseBlueprint <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBlueprint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRelationalDatabaseBlueprint: lightsail.LightsailRelationalDatabaseBlueprint = { ... }
```

##### `blueprintId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBlueprint.property.blueprintId"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBlueprint.property.engine"></a>

- *Type:* `string`

---

##### `engineDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBlueprint.property.engineDescription"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBlueprint.property.engineVersion"></a>

- *Type:* `string`

---

##### `engineVersionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBlueprint.property.engineVersionDescription"></a>

- *Type:* `string`

---

##### `isEngineDefault`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBlueprint.property.isEngineDefault"></a>

- *Type:* `boolean`

---

### LightsailRelationalDatabaseBundle <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBundle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRelationalDatabaseBundle: lightsail.LightsailRelationalDatabaseBundle = { ... }
```

##### `bundleId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBundle.property.bundleId"></a>

- *Type:* `string`

---

##### `cpuCount`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBundle.property.cpuCount"></a>

- *Type:* `number`

---

##### `diskSizeInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBundle.property.diskSizeInGb"></a>

- *Type:* `number`

---

##### `isActive`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBundle.property.isActive"></a>

- *Type:* `boolean`

---

##### `isEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBundle.property.isEncrypted"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBundle.property.name"></a>

- *Type:* `string`

---

##### `price`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBundle.property.price"></a>

- *Type:* `number`

---

##### `ramSizeInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBundle.property.ramSizeInGb"></a>

- *Type:* `number`

---

##### `transferPerMonthInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBundle.property.transferPerMonthInGb"></a>

- *Type:* `number`

---

### LightsailRelationalDatabaseEndpoint <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRelationalDatabaseEndpoint: lightsail.LightsailRelationalDatabaseEndpoint = { ... }
```

##### `address`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseEndpoint.property.port"></a>

- *Type:* `number`

---

### LightsailRelationalDatabaseEvent <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRelationalDatabaseEvent: lightsail.LightsailRelationalDatabaseEvent = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseEvent.property.createdAt"></a>

- *Type:* `string`

---

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseEvent.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseEvent.property.message"></a>

- *Type:* `string`

---

##### `resource`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseEvent.property.resource"></a>

- *Type:* `string`

---

### LightsailRelationalDatabaseHardware <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseHardware"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRelationalDatabaseHardware: lightsail.LightsailRelationalDatabaseHardware = { ... }
```

##### `cpuCount`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseHardware.property.cpuCount"></a>

- *Type:* `number`

---

##### `diskSizeInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseHardware.property.diskSizeInGb"></a>

- *Type:* `number`

---

##### `ramSizeInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseHardware.property.ramSizeInGb"></a>

- *Type:* `number`

---

### LightsailRelationalDatabaseParameter <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRelationalDatabaseParameter: lightsail.LightsailRelationalDatabaseParameter = { ... }
```

##### `allowedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseParameter.property.allowedValues"></a>

- *Type:* `string`

---

##### `applyMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseParameter.property.applyMethod"></a>

- *Type:* `string`

---

##### `applyType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseParameter.property.applyType"></a>

- *Type:* `string`

---

##### `dataType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseParameter.property.dataType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseParameter.property.description"></a>

- *Type:* `string`

---

##### `isModifiable`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseParameter.property.isModifiable"></a>

- *Type:* `boolean`

---

##### `parameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseParameter.property.parameterName"></a>

- *Type:* `string`

---

##### `parameterValue`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseParameter.property.parameterValue"></a>

- *Type:* `string`

---

### LightsailRelationalDatabaseSnapshot <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRelationalDatabaseSnapshot: lightsail.LightsailRelationalDatabaseSnapshot = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot.property.createdAt"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot.property.engineVersion"></a>

- *Type:* `string`

---

##### `fromRelationalDatabaseArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot.property.fromRelationalDatabaseArn"></a>

- *Type:* `string`

---

##### `fromRelationalDatabaseBlueprintId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot.property.fromRelationalDatabaseBlueprintId"></a>

- *Type:* `string`

---

##### `fromRelationalDatabaseBundleId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot.property.fromRelationalDatabaseBundleId"></a>

- *Type:* `string`

---

##### `fromRelationalDatabaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot.property.fromRelationalDatabaseName"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot.property.name"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot.property.resourceType"></a>

- *Type:* `string`

---

##### `sizeInGb`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot.property.sizeInGb"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot.property.state"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

### LightsailReleaseStaticIpRequest <a name="aws-cdk-sdk.lightsail.LightsailReleaseStaticIpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailReleaseStaticIpRequest: lightsail.LightsailReleaseStaticIpRequest = { ... }
```

##### `staticIpName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailReleaseStaticIpRequest.property.staticIpName"></a>

- *Type:* `string`

---

### LightsailReleaseStaticIpResult <a name="aws-cdk-sdk.lightsail.LightsailReleaseStaticIpResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailReleaseStaticIpResult: lightsail.LightsailReleaseStaticIpResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailReleaseStaticIpResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailRenewalSummary <a name="aws-cdk-sdk.lightsail.LightsailRenewalSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailRenewalSummary: lightsail.LightsailRenewalSummary = { ... }
```

##### `domainValidationRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRenewalSummary.property.domainValidationRecords"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDomainValidationRecord`](#aws-cdk-sdk.lightsail.LightsailDomainValidationRecord)[]

---

##### `renewalStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRenewalSummary.property.renewalStatus"></a>

- *Type:* `string`

---

##### `renewalStatusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRenewalSummary.property.renewalStatusReason"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailRenewalSummary.property.updatedAt"></a>

- *Type:* `string`

---

### LightsailResetDistributionCacheRequest <a name="aws-cdk-sdk.lightsail.LightsailResetDistributionCacheRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailResetDistributionCacheRequest: lightsail.LightsailResetDistributionCacheRequest = { ... }
```

##### `distributionName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailResetDistributionCacheRequest.property.distributionName"></a>

- *Type:* `string`

---

### LightsailResetDistributionCacheResult <a name="aws-cdk-sdk.lightsail.LightsailResetDistributionCacheResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailResetDistributionCacheResult: lightsail.LightsailResetDistributionCacheResult = { ... }
```

##### `createTime`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailResetDistributionCacheResult.property.createTime"></a>

- *Type:* `string`

---

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailResetDistributionCacheResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailResetDistributionCacheResult.property.status"></a>

- *Type:* `string`

---

### LightsailResourceLocation <a name="aws-cdk-sdk.lightsail.LightsailResourceLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailResourceLocation: lightsail.LightsailResourceLocation = { ... }
```

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailResourceLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailResourceLocation.property.regionName"></a>

- *Type:* `string`

---

### LightsailResourceRecord <a name="aws-cdk-sdk.lightsail.LightsailResourceRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailResourceRecord: lightsail.LightsailResourceRecord = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailResourceRecord.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailResourceRecord.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailResourceRecord.property.value"></a>

- *Type:* `string`

---

### LightsailSendContactMethodVerificationRequest <a name="aws-cdk-sdk.lightsail.LightsailSendContactMethodVerificationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailSendContactMethodVerificationRequest: lightsail.LightsailSendContactMethodVerificationRequest = { ... }
```

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailSendContactMethodVerificationRequest.property.protocol"></a>

- *Type:* `string`

---

### LightsailSendContactMethodVerificationResult <a name="aws-cdk-sdk.lightsail.LightsailSendContactMethodVerificationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailSendContactMethodVerificationResult: lightsail.LightsailSendContactMethodVerificationResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailSendContactMethodVerificationResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailStartInstanceRequest <a name="aws-cdk-sdk.lightsail.LightsailStartInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailStartInstanceRequest: lightsail.LightsailStartInstanceRequest = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailStartInstanceRequest.property.instanceName"></a>

- *Type:* `string`

---

### LightsailStartInstanceResult <a name="aws-cdk-sdk.lightsail.LightsailStartInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailStartInstanceResult: lightsail.LightsailStartInstanceResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailStartInstanceResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailStartRelationalDatabaseRequest <a name="aws-cdk-sdk.lightsail.LightsailStartRelationalDatabaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailStartRelationalDatabaseRequest: lightsail.LightsailStartRelationalDatabaseRequest = { ... }
```

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailStartRelationalDatabaseRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

### LightsailStartRelationalDatabaseResult <a name="aws-cdk-sdk.lightsail.LightsailStartRelationalDatabaseResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailStartRelationalDatabaseResult: lightsail.LightsailStartRelationalDatabaseResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailStartRelationalDatabaseResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailStaticIp <a name="aws-cdk-sdk.lightsail.LightsailStaticIp"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailStaticIp: lightsail.LightsailStaticIp = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailStaticIp.property.arn"></a>

- *Type:* `string`

---

##### `attachedTo`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailStaticIp.property.attachedTo"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailStaticIp.property.createdAt"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailStaticIp.property.ipAddress"></a>

- *Type:* `string`

---

##### `isAttached`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailStaticIp.property.isAttached"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailStaticIp.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResourceLocation`](#aws-cdk-sdk.lightsail.LightsailResourceLocation)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailStaticIp.property.name"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailStaticIp.property.resourceType"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailStaticIp.property.supportCode"></a>

- *Type:* `string`

---

### LightsailStopInstanceRequest <a name="aws-cdk-sdk.lightsail.LightsailStopInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailStopInstanceRequest: lightsail.LightsailStopInstanceRequest = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailStopInstanceRequest.property.instanceName"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailStopInstanceRequest.property.force"></a>

- *Type:* `boolean`

---

### LightsailStopInstanceResult <a name="aws-cdk-sdk.lightsail.LightsailStopInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailStopInstanceResult: lightsail.LightsailStopInstanceResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailStopInstanceResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailStopRelationalDatabaseRequest <a name="aws-cdk-sdk.lightsail.LightsailStopRelationalDatabaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailStopRelationalDatabaseRequest: lightsail.LightsailStopRelationalDatabaseRequest = { ... }
```

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailStopRelationalDatabaseRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

##### `relationalDatabaseSnapshotName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailStopRelationalDatabaseRequest.property.relationalDatabaseSnapshotName"></a>

- *Type:* `string`

---

### LightsailStopRelationalDatabaseResult <a name="aws-cdk-sdk.lightsail.LightsailStopRelationalDatabaseResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailStopRelationalDatabaseResult: lightsail.LightsailStopRelationalDatabaseResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailStopRelationalDatabaseResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailTag <a name="aws-cdk-sdk.lightsail.LightsailTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailTag: lightsail.LightsailTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailTag.property.value"></a>

- *Type:* `string`

---

### LightsailTagResourceRequest <a name="aws-cdk-sdk.lightsail.LightsailTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailTagResourceRequest: lightsail.LightsailTagResourceRequest = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailTagResourceRequest.property.resourceName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### LightsailTagResourceResult <a name="aws-cdk-sdk.lightsail.LightsailTagResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailTagResourceResult: lightsail.LightsailTagResourceResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailTagResourceResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailTestAlarmRequest <a name="aws-cdk-sdk.lightsail.LightsailTestAlarmRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailTestAlarmRequest: lightsail.LightsailTestAlarmRequest = { ... }
```

##### `alarmName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailTestAlarmRequest.property.alarmName"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailTestAlarmRequest.property.state"></a>

- *Type:* `string`

---

### LightsailTestAlarmResult <a name="aws-cdk-sdk.lightsail.LightsailTestAlarmResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailTestAlarmResult: lightsail.LightsailTestAlarmResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailTestAlarmResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailUnpeerVpcRequest <a name="aws-cdk-sdk.lightsail.LightsailUnpeerVpcRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUnpeerVpcRequest: lightsail.LightsailUnpeerVpcRequest = { ... }
```

### LightsailUnpeerVpcResult <a name="aws-cdk-sdk.lightsail.LightsailUnpeerVpcResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUnpeerVpcResult: lightsail.LightsailUnpeerVpcResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUnpeerVpcResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailUntagResourceRequest <a name="aws-cdk-sdk.lightsail.LightsailUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUntagResourceRequest: lightsail.LightsailUntagResourceRequest = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailUntagResourceRequest.property.resourceName"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### LightsailUntagResourceResult <a name="aws-cdk-sdk.lightsail.LightsailUntagResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUntagResourceResult: lightsail.LightsailUntagResourceResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUntagResourceResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailUpdateContainerServiceRequest <a name="aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUpdateContainerServiceRequest: lightsail.LightsailUpdateContainerServiceRequest = { ... }
```

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest.property.serviceName"></a>

- *Type:* `string`

---

##### `isDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest.property.isDisabled"></a>

- *Type:* `boolean`

---

##### `power`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest.property.power"></a>

- *Type:* `string`

---

##### `publicDomainNames`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest.property.publicDomainNames"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `scale`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest.property.scale"></a>

- *Type:* `number`

---

### LightsailUpdateContainerServiceResult <a name="aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUpdateContainerServiceResult: lightsail.LightsailUpdateContainerServiceResult = { ... }
```

##### `containerService`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceResult.property.containerService"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerService`](#aws-cdk-sdk.lightsail.LightsailContainerService)

---

### LightsailUpdateDistributionBundleRequest <a name="aws-cdk-sdk.lightsail.LightsailUpdateDistributionBundleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUpdateDistributionBundleRequest: lightsail.LightsailUpdateDistributionBundleRequest = { ... }
```

##### `bundleId`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateDistributionBundleRequest.property.bundleId"></a>

- *Type:* `string`

---

##### `distributionName`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateDistributionBundleRequest.property.distributionName"></a>

- *Type:* `string`

---

### LightsailUpdateDistributionBundleResult <a name="aws-cdk-sdk.lightsail.LightsailUpdateDistributionBundleResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUpdateDistributionBundleResult: lightsail.LightsailUpdateDistributionBundleResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateDistributionBundleResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailUpdateDistributionRequest <a name="aws-cdk-sdk.lightsail.LightsailUpdateDistributionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUpdateDistributionRequest: lightsail.LightsailUpdateDistributionRequest = { ... }
```

##### `distributionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateDistributionRequest.property.distributionName"></a>

- *Type:* `string`

---

##### `cacheBehaviors`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateDistributionRequest.property.cacheBehaviors"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCacheBehaviorPerPath`](#aws-cdk-sdk.lightsail.LightsailCacheBehaviorPerPath)[]

---

##### `cacheBehaviorSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateDistributionRequest.property.cacheBehaviorSettings"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCacheSettings`](#aws-cdk-sdk.lightsail.LightsailCacheSettings)

---

##### `defaultCacheBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateDistributionRequest.property.defaultCacheBehavior"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCacheBehavior`](#aws-cdk-sdk.lightsail.LightsailCacheBehavior)

---

##### `isEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateDistributionRequest.property.isEnabled"></a>

- *Type:* `boolean`

---

##### `origin`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateDistributionRequest.property.origin"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInputOrigin`](#aws-cdk-sdk.lightsail.LightsailInputOrigin)

---

### LightsailUpdateDistributionResult <a name="aws-cdk-sdk.lightsail.LightsailUpdateDistributionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUpdateDistributionResult: lightsail.LightsailUpdateDistributionResult = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateDistributionResult.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)

---

### LightsailUpdateDomainEntryRequest <a name="aws-cdk-sdk.lightsail.LightsailUpdateDomainEntryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUpdateDomainEntryRequest: lightsail.LightsailUpdateDomainEntryRequest = { ... }
```

##### `domainEntry`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateDomainEntryRequest.property.domainEntry"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDomainEntry`](#aws-cdk-sdk.lightsail.LightsailDomainEntry)

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateDomainEntryRequest.property.domainName"></a>

- *Type:* `string`

---

### LightsailUpdateDomainEntryResult <a name="aws-cdk-sdk.lightsail.LightsailUpdateDomainEntryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUpdateDomainEntryResult: lightsail.LightsailUpdateDomainEntryResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateDomainEntryResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailUpdateLoadBalancerAttributeRequest <a name="aws-cdk-sdk.lightsail.LightsailUpdateLoadBalancerAttributeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUpdateLoadBalancerAttributeRequest: lightsail.LightsailUpdateLoadBalancerAttributeRequest = { ... }
```

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateLoadBalancerAttributeRequest.property.attributeName"></a>

- *Type:* `string`

---

##### `attributeValue`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateLoadBalancerAttributeRequest.property.attributeValue"></a>

- *Type:* `string`

---

##### `loadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateLoadBalancerAttributeRequest.property.loadBalancerName"></a>

- *Type:* `string`

---

### LightsailUpdateLoadBalancerAttributeResult <a name="aws-cdk-sdk.lightsail.LightsailUpdateLoadBalancerAttributeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUpdateLoadBalancerAttributeResult: lightsail.LightsailUpdateLoadBalancerAttributeResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateLoadBalancerAttributeResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailUpdateRelationalDatabaseParametersRequest <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseParametersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUpdateRelationalDatabaseParametersRequest: lightsail.LightsailUpdateRelationalDatabaseParametersRequest = { ... }
```

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseParametersRequest.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabaseParameter`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabaseParameter)[]

---

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseParametersRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

### LightsailUpdateRelationalDatabaseParametersResult <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseParametersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUpdateRelationalDatabaseParametersResult: lightsail.LightsailUpdateRelationalDatabaseParametersResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseParametersResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

### LightsailUpdateRelationalDatabaseRequest <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUpdateRelationalDatabaseRequest: lightsail.LightsailUpdateRelationalDatabaseRequest = { ... }
```

##### `relationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseRequest.property.relationalDatabaseName"></a>

- *Type:* `string`

---

##### `applyImmediately`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseRequest.property.applyImmediately"></a>

- *Type:* `boolean`

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseRequest.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `disableBackupRetention`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseRequest.property.disableBackupRetention"></a>

- *Type:* `boolean`

---

##### `enableBackupRetention`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseRequest.property.enableBackupRetention"></a>

- *Type:* `boolean`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseRequest.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseRequest.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseRequest.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseRequest.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `rotateMasterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseRequest.property.rotateMasterUserPassword"></a>

- *Type:* `boolean`

---

### LightsailUpdateRelationalDatabaseResult <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

const lightsailUpdateRelationalDatabaseResult: lightsail.LightsailUpdateRelationalDatabaseResult = { ... }
```

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseResult.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---

## Classes <a name="Classes"></a>

### LightsailResponsesAllocateStaticIp <a name="aws-cdk-sdk.lightsail.LightsailResponsesAllocateStaticIp"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesAllocateStaticIp.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesAllocateStaticIp(__scope: Construct, __resources: string[], __input: LightsailAllocateStaticIpRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAllocateStaticIp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAllocateStaticIp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAllocateStaticIp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAllocateStaticIpRequest`](#aws-cdk-sdk.lightsail.LightsailAllocateStaticIpRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAllocateStaticIp.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesAttachCertificateToDistribution <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistribution"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistribution.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesAttachCertificateToDistribution(__scope: Construct, __resources: string[], __input: LightsailAttachCertificateToDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistribution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistribution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistribution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAttachCertificateToDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailAttachCertificateToDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistribution.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation)

---


### LightsailResponsesAttachCertificateToDistributionOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesAttachCertificateToDistributionOperation(__scope: Construct, __resources: string[], __input: LightsailAttachCertificateToDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAttachCertificateToDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailAttachCertificateToDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesAttachCertificateToDistributionOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesAttachCertificateToDistributionOperationLocation(__scope: Construct, __resources: string[], __input: LightsailAttachCertificateToDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAttachCertificateToDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailAttachCertificateToDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachCertificateToDistributionOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesAttachDisk <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachDisk"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachDisk.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesAttachDisk(__scope: Construct, __resources: string[], __input: LightsailAttachDiskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachDisk.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachDisk.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachDisk.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAttachDiskRequest`](#aws-cdk-sdk.lightsail.LightsailAttachDiskRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachDisk.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesAttachInstancesToLoadBalancer <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachInstancesToLoadBalancer"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachInstancesToLoadBalancer.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesAttachInstancesToLoadBalancer(__scope: Construct, __resources: string[], __input: LightsailAttachInstancesToLoadBalancerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachInstancesToLoadBalancer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachInstancesToLoadBalancer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachInstancesToLoadBalancer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAttachInstancesToLoadBalancerRequest`](#aws-cdk-sdk.lightsail.LightsailAttachInstancesToLoadBalancerRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachInstancesToLoadBalancer.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesAttachLoadBalancerTlsCertificate <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachLoadBalancerTlsCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachLoadBalancerTlsCertificate.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesAttachLoadBalancerTlsCertificate(__scope: Construct, __resources: string[], __input: LightsailAttachLoadBalancerTlsCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachLoadBalancerTlsCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachLoadBalancerTlsCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachLoadBalancerTlsCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAttachLoadBalancerTlsCertificateRequest`](#aws-cdk-sdk.lightsail.LightsailAttachLoadBalancerTlsCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachLoadBalancerTlsCertificate.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesAttachStaticIp <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachStaticIp"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachStaticIp.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesAttachStaticIp(__scope: Construct, __resources: string[], __input: LightsailAttachStaticIpRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachStaticIp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachStaticIp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachStaticIp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAttachStaticIpRequest`](#aws-cdk-sdk.lightsail.LightsailAttachStaticIpRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesAttachStaticIp.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesCloseInstancePublicPorts <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPorts"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPorts.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCloseInstancePublicPorts(__scope: Construct, __resources: string[], __input: LightsailCloseInstancePublicPortsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPorts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPorts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPorts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCloseInstancePublicPortsRequest`](#aws-cdk-sdk.lightsail.LightsailCloseInstancePublicPortsRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPorts.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation)

---


### LightsailResponsesCloseInstancePublicPortsOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCloseInstancePublicPortsOperation(__scope: Construct, __resources: string[], __input: LightsailCloseInstancePublicPortsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCloseInstancePublicPortsRequest`](#aws-cdk-sdk.lightsail.LightsailCloseInstancePublicPortsRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesCloseInstancePublicPortsOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCloseInstancePublicPortsOperationLocation(__scope: Construct, __resources: string[], __input: LightsailCloseInstancePublicPortsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCloseInstancePublicPortsRequest`](#aws-cdk-sdk.lightsail.LightsailCloseInstancePublicPortsRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCloseInstancePublicPortsOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesCopySnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesCopySnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCopySnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCopySnapshot(__scope: Construct, __resources: string[], __input: LightsailCopySnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCopySnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCopySnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCopySnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCopySnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailCopySnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCopySnapshot.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesCreateCertificate <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificate.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateCertificate(__scope: Construct, __resources: string[], __input: LightsailCreateCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateCertificateRequest`](#aws-cdk-sdk.lightsail.LightsailCreateCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificate.property.certificate"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificate`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificate)

---

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificate.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesCreateCertificateCertificate <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificate.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateCertificateCertificate(__scope: Construct, __resources: string[], __input: LightsailCreateCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateCertificateRequest`](#aws-cdk-sdk.lightsail.LightsailCreateCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificate.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateDetail`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificate.property.certificateDetail"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail)

---

##### `certificateName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificate.property.certificateName"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificate.property.domainName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificate.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---


### LightsailResponsesCreateCertificateCertificateCertificateDetail <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail(__scope: Construct, __resources: string[], __input: LightsailCreateCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateCertificateRequest`](#aws-cdk-sdk.lightsail.LightsailCreateCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.createdAt"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.domainName"></a>

- *Type:* `string`

---

##### `domainValidationRecords`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.domainValidationRecords"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDomainValidationRecord`](#aws-cdk-sdk.lightsail.LightsailDomainValidationRecord)[]

---

##### `eligibleToRenew`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.eligibleToRenew"></a>

- *Type:* `string`

---

##### `inUseResourceCount`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.inUseResourceCount"></a>

- *Type:* `number`

---

##### `issuedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.issuedAt"></a>

- *Type:* `string`

---

##### `issuerCa`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.issuerCa"></a>

- *Type:* `string`

---

##### `keyAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.keyAlgorithm"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.name"></a>

- *Type:* `string`

---

##### `notAfter`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.notAfter"></a>

- *Type:* `string`

---

##### `notBefore`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.notBefore"></a>

- *Type:* `string`

---

##### `renewalSummary`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.renewalSummary"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary)

---

##### `requestFailureReason`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.requestFailureReason"></a>

- *Type:* `string`

---

##### `revocationReason`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.revocationReason"></a>

- *Type:* `string`

---

##### `revokedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.revokedAt"></a>

- *Type:* `string`

---

##### `serialNumber`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.serialNumber"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.status"></a>

- *Type:* `string`

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.subjectAlternativeNames"></a>

- *Type:* `string`[]

---

##### `supportCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetail.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---


### LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary(__scope: Construct, __resources: string[], __input: LightsailCreateCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateCertificateRequest`](#aws-cdk-sdk.lightsail.LightsailCreateCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `domainValidationRecords`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary.property.domainValidationRecords"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDomainValidationRecord`](#aws-cdk-sdk.lightsail.LightsailDomainValidationRecord)[]

---

##### `renewalStatus`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary.property.renewalStatus"></a>

- *Type:* `string`

---

##### `renewalStatusReason`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary.property.renewalStatusReason"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary.property.updatedAt"></a>

- *Type:* `string`

---


### LightsailResponsesCreateCloudFormationStack <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCloudFormationStack"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCloudFormationStack.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateCloudFormationStack(__scope: Construct, __resources: string[], __input: LightsailCreateCloudFormationStackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCloudFormationStack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCloudFormationStack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCloudFormationStack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateCloudFormationStackRequest`](#aws-cdk-sdk.lightsail.LightsailCreateCloudFormationStackRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateCloudFormationStack.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesCreateContactMethod <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContactMethod"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContactMethod.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContactMethod(__scope: Construct, __resources: string[], __input: LightsailCreateContactMethodRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContactMethod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContactMethod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContactMethod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContactMethodRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContactMethodRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContactMethod.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesCreateContainerService <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerService"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerService.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerService(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `containerService`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerService.property.containerService"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService)

---


### LightsailResponsesCreateContainerServiceContainerService <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceContainerService(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.arn"></a>

- *Type:* `string`

---

##### `containerServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.containerServiceName"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.createdAt"></a>

- *Type:* `string`

---

##### `currentDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.currentDeployment"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment)

---

##### `isDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.isDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceLocation)

---

##### `nextDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.nextDeployment"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeployment`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeployment)

---

##### `power`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.power"></a>

- *Type:* `string`

---

##### `powerId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.powerId"></a>

- *Type:* `string`

---

##### `principalArn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.principalArn"></a>

- *Type:* `string`

---

##### `privateDomainName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.privateDomainName"></a>

- *Type:* `string`

---

##### `publicDomainNames`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.publicDomainNames"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.resourceType"></a>

- *Type:* `string`

---

##### `scale`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.scale"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerService.property.url"></a>

- *Type:* `string`

---


### LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `containers`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment.property.containers"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.lightsail.LightsailContainer`](#aws-cdk-sdk.lightsail.LightsailContainer)}

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment.property.createdAt"></a>

- *Type:* `string`

---

##### `publicEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment.property.publicEndpoint"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment.property.state"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment.property.version"></a>

- *Type:* `number`

---


### LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint.property.containerName"></a>

- *Type:* `string`

---

##### `containerPort`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint.property.containerPort"></a>

- *Type:* `number`

---

##### `healthCheck`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck)

---


### LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `healthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.healthyThreshold"></a>

- *Type:* `number`

---

##### `intervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.intervalSeconds"></a>

- *Type:* `number`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.path"></a>

- *Type:* `string`

---

##### `successCodes`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.successCodes"></a>

- *Type:* `string`

---

##### `timeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.timeoutSeconds"></a>

- *Type:* `number`

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.unhealthyThreshold"></a>

- *Type:* `number`

---


### LightsailResponsesCreateContainerServiceContainerServiceLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceContainerServiceLocation(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesCreateContainerServiceContainerServiceNextDeployment <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeployment.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeployment(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `containers`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeployment.property.containers"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.lightsail.LightsailContainer`](#aws-cdk-sdk.lightsail.LightsailContainer)}

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeployment.property.createdAt"></a>

- *Type:* `string`

---

##### `publicEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeployment.property.publicEndpoint"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeployment.property.state"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeployment.property.version"></a>

- *Type:* `number`

---


### LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint.property.containerName"></a>

- *Type:* `string`

---

##### `containerPort`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint.property.containerPort"></a>

- *Type:* `number`

---

##### `healthCheck`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck)

---


### LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `healthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.property.healthyThreshold"></a>

- *Type:* `number`

---

##### `intervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.property.intervalSeconds"></a>

- *Type:* `number`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.property.path"></a>

- *Type:* `string`

---

##### `successCodes`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.property.successCodes"></a>

- *Type:* `string`

---

##### `timeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.property.timeoutSeconds"></a>

- *Type:* `number`

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.property.unhealthyThreshold"></a>

- *Type:* `number`

---


### LightsailResponsesCreateContainerServiceDeployment <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeployment.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceDeployment(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `containerService`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeployment.property.containerService"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService)

---


### LightsailResponsesCreateContainerServiceDeploymentContainerService <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.arn"></a>

- *Type:* `string`

---

##### `containerServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.containerServiceName"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.createdAt"></a>

- *Type:* `string`

---

##### `currentDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.currentDeployment"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment)

---

##### `isDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.isDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceLocation)

---

##### `nextDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.nextDeployment"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment)

---

##### `power`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.power"></a>

- *Type:* `string`

---

##### `powerId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.powerId"></a>

- *Type:* `string`

---

##### `principalArn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.principalArn"></a>

- *Type:* `string`

---

##### `privateDomainName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.privateDomainName"></a>

- *Type:* `string`

---

##### `publicDomainNames`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.publicDomainNames"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.resourceType"></a>

- *Type:* `string`

---

##### `scale`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.scale"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerService.property.url"></a>

- *Type:* `string`

---


### LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `containers`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment.property.containers"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.lightsail.LightsailContainer`](#aws-cdk-sdk.lightsail.LightsailContainer)}

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment.property.createdAt"></a>

- *Type:* `string`

---

##### `publicEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment.property.publicEndpoint"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment.property.state"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment.property.version"></a>

- *Type:* `number`

---


### LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint.property.containerName"></a>

- *Type:* `string`

---

##### `containerPort`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint.property.containerPort"></a>

- *Type:* `number`

---

##### `healthCheck`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck)

---


### LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `healthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.healthyThreshold"></a>

- *Type:* `number`

---

##### `intervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.intervalSeconds"></a>

- *Type:* `number`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.path"></a>

- *Type:* `string`

---

##### `successCodes`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.successCodes"></a>

- *Type:* `string`

---

##### `timeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.timeoutSeconds"></a>

- *Type:* `number`

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.unhealthyThreshold"></a>

- *Type:* `number`

---


### LightsailResponsesCreateContainerServiceDeploymentContainerServiceLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceLocation(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `containers`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment.property.containers"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.lightsail.LightsailContainer`](#aws-cdk-sdk.lightsail.LightsailContainer)}

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment.property.createdAt"></a>

- *Type:* `string`

---

##### `publicEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment.property.publicEndpoint"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment.property.state"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment.property.version"></a>

- *Type:* `number`

---


### LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint.property.containerName"></a>

- *Type:* `string`

---

##### `containerPort`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint.property.containerPort"></a>

- *Type:* `number`

---

##### `healthCheck`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck)

---


### LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck(__scope: Construct, __resources: string[], __input: LightsailCreateContainerServiceDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest`](#aws-cdk-sdk.lightsail.LightsailCreateContainerServiceDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `healthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck.property.healthyThreshold"></a>

- *Type:* `number`

---

##### `intervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck.property.intervalSeconds"></a>

- *Type:* `number`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck.property.path"></a>

- *Type:* `string`

---

##### `successCodes`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck.property.successCodes"></a>

- *Type:* `string`

---

##### `timeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck.property.timeoutSeconds"></a>

- *Type:* `number`

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck.property.unhealthyThreshold"></a>

- *Type:* `number`

---


### LightsailResponsesCreateContainerServiceRegistryLogin <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceRegistryLogin"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceRegistryLogin.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceRegistryLogin(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceRegistryLogin.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceRegistryLogin.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `registryLogin`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceRegistryLogin.property.registryLogin"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceRegistryLoginRegistryLogin`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceRegistryLoginRegistryLogin)

---


### LightsailResponsesCreateContainerServiceRegistryLoginRegistryLogin <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceRegistryLoginRegistryLogin"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceRegistryLoginRegistryLogin.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateContainerServiceRegistryLoginRegistryLogin(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceRegistryLoginRegistryLogin.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceRegistryLoginRegistryLogin.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `expiresAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceRegistryLoginRegistryLogin.property.expiresAt"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceRegistryLoginRegistryLogin.property.password"></a>

- *Type:* `string`

---

##### `registry`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceRegistryLoginRegistryLogin.property.registry"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateContainerServiceRegistryLoginRegistryLogin.property.username"></a>

- *Type:* `string`

---


### LightsailResponsesCreateDisk <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDisk"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDisk.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDisk(__scope: Construct, __resources: string[], __input: LightsailCreateDiskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDisk.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDisk.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDisk.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDiskRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDiskRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDisk.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesCreateDiskFromSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDiskFromSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDiskFromSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDiskFromSnapshot(__scope: Construct, __resources: string[], __input: LightsailCreateDiskFromSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDiskFromSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDiskFromSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDiskFromSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDiskFromSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDiskFromSnapshot.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesCreateDiskSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDiskSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDiskSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDiskSnapshot(__scope: Construct, __resources: string[], __input: LightsailCreateDiskSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDiskSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDiskSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDiskSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDiskSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDiskSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDiskSnapshot.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesCreateDistribution <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistribution"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistribution.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDistribution(__scope: Construct, __resources: string[], __input: LightsailCreateDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistribution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistribution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistribution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `distribution`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistribution.property.distribution"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution)

---

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistribution.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation)

---


### LightsailResponsesCreateDistributionDistribution <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDistributionDistribution(__scope: Construct, __resources: string[], __input: LightsailCreateDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `ableToUpdateBundle`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.ableToUpdateBundle"></a>

- *Type:* `boolean`

---

##### `alternativeDomainNames`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.alternativeDomainNames"></a>

- *Type:* `string`[]

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.arn"></a>

- *Type:* `string`

---

##### `bundleId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.bundleId"></a>

- *Type:* `string`

---

##### `cacheBehaviors`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.cacheBehaviors"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCacheBehaviorPerPath`](#aws-cdk-sdk.lightsail.LightsailCacheBehaviorPerPath)[]

---

##### `cacheBehaviorSettings`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.cacheBehaviorSettings"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings)

---

##### `certificateName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.certificateName"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.createdAt"></a>

- *Type:* `string`

---

##### `defaultCacheBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.defaultCacheBehavior"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionDefaultCacheBehavior`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionDefaultCacheBehavior)

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.domainName"></a>

- *Type:* `string`

---

##### `isEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.isEnabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionLocation)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.name"></a>

- *Type:* `string`

---

##### `origin`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.origin"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionOrigin`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionOrigin)

---

##### `originPublicDns`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.originPublicDns"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.status"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistribution.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---


### LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings(__scope: Construct, __resources: string[], __input: LightsailCreateDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `allowedHttpMethods`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings.property.allowedHttpMethods"></a>

- *Type:* `string`

---

##### `cachedHttpMethods`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings.property.cachedHttpMethods"></a>

- *Type:* `string`

---

##### `defaultTtl`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings.property.defaultTtl"></a>

- *Type:* `number`

---

##### `forwardedCookies`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings.property.forwardedCookies"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies)

---

##### `forwardedHeaders`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings.property.forwardedHeaders"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders)

---

##### `forwardedQueryStrings`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings.property.forwardedQueryStrings"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings)

---

##### `maximumTtl`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings.property.maximumTtl"></a>

- *Type:* `number`

---

##### `minimumTtl`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings.property.minimumTtl"></a>

- *Type:* `number`

---


### LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies(__scope: Construct, __resources: string[], __input: LightsailCreateDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `cookiesAllowList`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies.property.cookiesAllowList"></a>

- *Type:* `string`[]

---

##### `option`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies.property.option"></a>

- *Type:* `string`

---


### LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders(__scope: Construct, __resources: string[], __input: LightsailCreateDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `headersAllowList`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders.property.headersAllowList"></a>

- *Type:* `string`[]

---

##### `option`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders.property.option"></a>

- *Type:* `string`

---


### LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings(__scope: Construct, __resources: string[], __input: LightsailCreateDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `option`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings.property.option"></a>

- *Type:* `boolean`

---

##### `queryStringsAllowList`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings.property.queryStringsAllowList"></a>

- *Type:* `string`[]

---


### LightsailResponsesCreateDistributionDistributionDefaultCacheBehavior <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionDefaultCacheBehavior"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionDefaultCacheBehavior.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDistributionDistributionDefaultCacheBehavior(__scope: Construct, __resources: string[], __input: LightsailCreateDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionDefaultCacheBehavior.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionDefaultCacheBehavior.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionDefaultCacheBehavior.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `behavior`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionDefaultCacheBehavior.property.behavior"></a>

- *Type:* `string`

---


### LightsailResponsesCreateDistributionDistributionLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDistributionDistributionLocation(__scope: Construct, __resources: string[], __input: LightsailCreateDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesCreateDistributionDistributionOrigin <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionOrigin"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionOrigin.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDistributionDistributionOrigin(__scope: Construct, __resources: string[], __input: LightsailCreateDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionOrigin.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionOrigin.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionOrigin.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionOrigin.property.name"></a>

- *Type:* `string`

---

##### `protocolPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionOrigin.property.protocolPolicy"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionOrigin.property.regionName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionDistributionOrigin.property.resourceType"></a>

- *Type:* `string`

---


### LightsailResponsesCreateDistributionOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDistributionOperation(__scope: Construct, __resources: string[], __input: LightsailCreateDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesCreateDistributionOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDistributionOperationLocation(__scope: Construct, __resources: string[], __input: LightsailCreateDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDistributionOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesCreateDomain <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomain"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomain.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDomain(__scope: Construct, __resources: string[], __input: LightsailCreateDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDomainRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomain.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation)

---


### LightsailResponsesCreateDomainEntry <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntry"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntry.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDomainEntry(__scope: Construct, __resources: string[], __input: LightsailCreateDomainEntryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntry.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntry.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntry.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDomainEntryRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDomainEntryRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntry.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation)

---


### LightsailResponsesCreateDomainEntryOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDomainEntryOperation(__scope: Construct, __resources: string[], __input: LightsailCreateDomainEntryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDomainEntryRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDomainEntryRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesCreateDomainEntryOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDomainEntryOperationLocation(__scope: Construct, __resources: string[], __input: LightsailCreateDomainEntryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDomainEntryRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDomainEntryRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainEntryOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesCreateDomainOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDomainOperation(__scope: Construct, __resources: string[], __input: LightsailCreateDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDomainRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesCreateDomainOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateDomainOperationLocation(__scope: Construct, __resources: string[], __input: LightsailCreateDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateDomainRequest`](#aws-cdk-sdk.lightsail.LightsailCreateDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateDomainOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesCreateInstances <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstances"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstances.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateInstances(__scope: Construct, __resources: string[], __input: LightsailCreateInstancesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateInstancesRequest`](#aws-cdk-sdk.lightsail.LightsailCreateInstancesRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstances.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesCreateInstancesFromSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstancesFromSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstancesFromSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateInstancesFromSnapshot(__scope: Construct, __resources: string[], __input: LightsailCreateInstancesFromSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstancesFromSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstancesFromSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstancesFromSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailCreateInstancesFromSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstancesFromSnapshot.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesCreateInstanceSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstanceSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstanceSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateInstanceSnapshot(__scope: Construct, __resources: string[], __input: LightsailCreateInstanceSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstanceSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstanceSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstanceSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateInstanceSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailCreateInstanceSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateInstanceSnapshot.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesCreateKeyPair <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPair"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPair.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateKeyPair(__scope: Construct, __resources: string[], __input: LightsailCreateKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPair.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPair.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPair.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailCreateKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `keyPair`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPair.property.keyPair"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPair`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPair)

---

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPair.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation)

---

##### `privateKeyBase64`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPair.property.privateKeyBase64"></a>

- *Type:* `string`

---

##### `publicKeyBase64`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPair.property.publicKeyBase64"></a>

- *Type:* `string`

---


### LightsailResponsesCreateKeyPairKeyPair <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPair"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPair.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateKeyPairKeyPair(__scope: Construct, __resources: string[], __input: LightsailCreateKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPair.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPair.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPair.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailCreateKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPair.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPair.property.createdAt"></a>

- *Type:* `string`

---

##### `fingerprint`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPair.property.fingerprint"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPair.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPairLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPairLocation)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPair.property.name"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPair.property.resourceType"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPair.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPair.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---


### LightsailResponsesCreateKeyPairKeyPairLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPairLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPairLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateKeyPairKeyPairLocation(__scope: Construct, __resources: string[], __input: LightsailCreateKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPairLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPairLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPairLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailCreateKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPairLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairKeyPairLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesCreateKeyPairOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateKeyPairOperation(__scope: Construct, __resources: string[], __input: LightsailCreateKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailCreateKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesCreateKeyPairOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateKeyPairOperationLocation(__scope: Construct, __resources: string[], __input: LightsailCreateKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailCreateKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateKeyPairOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesCreateLoadBalancer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateLoadBalancer"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateLoadBalancer.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateLoadBalancer(__scope: Construct, __resources: string[], __input: LightsailCreateLoadBalancerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateLoadBalancer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateLoadBalancer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateLoadBalancer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerRequest`](#aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateLoadBalancer.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesCreateLoadBalancerTlsCertificate <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateLoadBalancerTlsCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateLoadBalancerTlsCertificate.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateLoadBalancerTlsCertificate(__scope: Construct, __resources: string[], __input: LightsailCreateLoadBalancerTlsCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateLoadBalancerTlsCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateLoadBalancerTlsCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateLoadBalancerTlsCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerTlsCertificateRequest`](#aws-cdk-sdk.lightsail.LightsailCreateLoadBalancerTlsCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateLoadBalancerTlsCertificate.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesCreateRelationalDatabase <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabase.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateRelationalDatabase(__scope: Construct, __resources: string[], __input: LightsailCreateRelationalDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabase.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesCreateRelationalDatabaseFromSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabaseFromSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabaseFromSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateRelationalDatabaseFromSnapshot(__scope: Construct, __resources: string[], __input: LightsailCreateRelationalDatabaseFromSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabaseFromSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabaseFromSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabaseFromSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseFromSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabaseFromSnapshot.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesCreateRelationalDatabaseSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabaseSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabaseSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesCreateRelationalDatabaseSnapshot(__scope: Construct, __resources: string[], __input: LightsailCreateRelationalDatabaseSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabaseSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabaseSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabaseSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailCreateRelationalDatabaseSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesCreateRelationalDatabaseSnapshot.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDeleteAlarm <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteAlarm"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteAlarm.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteAlarm(__scope: Construct, __resources: string[], __input: LightsailDeleteAlarmRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteAlarm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteAlarm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteAlarm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteAlarmRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteAlarmRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteAlarm.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDeleteAutoSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteAutoSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteAutoSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteAutoSnapshot(__scope: Construct, __resources: string[], __input: LightsailDeleteAutoSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteAutoSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteAutoSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteAutoSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteAutoSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteAutoSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteAutoSnapshot.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDeleteCertificate <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteCertificate.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteCertificate(__scope: Construct, __resources: string[], __input: LightsailDeleteCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteCertificateRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteCertificate.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDeleteContactMethod <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteContactMethod"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteContactMethod.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteContactMethod(__scope: Construct, __resources: string[], __input: LightsailDeleteContactMethodRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteContactMethod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteContactMethod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteContactMethod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteContactMethodRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteContactMethodRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteContactMethod.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDeleteDisk <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDisk"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDisk.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteDisk(__scope: Construct, __resources: string[], __input: LightsailDeleteDiskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDisk.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDisk.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDisk.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDiskRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDiskRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDisk.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDeleteDiskSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDiskSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDiskSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteDiskSnapshot(__scope: Construct, __resources: string[], __input: LightsailDeleteDiskSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDiskSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDiskSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDiskSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDiskSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDiskSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDiskSnapshot.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDeleteDistribution <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistribution"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistribution.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteDistribution(__scope: Construct, __resources: string[], __input: LightsailDeleteDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistribution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistribution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistribution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistribution.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation)

---


### LightsailResponsesDeleteDistributionOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteDistributionOperation(__scope: Construct, __resources: string[], __input: LightsailDeleteDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesDeleteDistributionOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteDistributionOperationLocation(__scope: Construct, __resources: string[], __input: LightsailDeleteDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDistributionOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesDeleteDomain <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomain"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomain.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteDomain(__scope: Construct, __resources: string[], __input: LightsailDeleteDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDomainRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomain.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation)

---


### LightsailResponsesDeleteDomainEntry <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntry"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntry.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteDomainEntry(__scope: Construct, __resources: string[], __input: LightsailDeleteDomainEntryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntry.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntry.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntry.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDomainEntryRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDomainEntryRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntry.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation)

---


### LightsailResponsesDeleteDomainEntryOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteDomainEntryOperation(__scope: Construct, __resources: string[], __input: LightsailDeleteDomainEntryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDomainEntryRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDomainEntryRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesDeleteDomainEntryOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteDomainEntryOperationLocation(__scope: Construct, __resources: string[], __input: LightsailDeleteDomainEntryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDomainEntryRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDomainEntryRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainEntryOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesDeleteDomainOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteDomainOperation(__scope: Construct, __resources: string[], __input: LightsailDeleteDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDomainRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesDeleteDomainOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteDomainOperationLocation(__scope: Construct, __resources: string[], __input: LightsailDeleteDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteDomainRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteDomainOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesDeleteInstance <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteInstance"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteInstance.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteInstance(__scope: Construct, __resources: string[], __input: LightsailDeleteInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteInstance.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDeleteInstanceSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteInstanceSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteInstanceSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteInstanceSnapshot(__scope: Construct, __resources: string[], __input: LightsailDeleteInstanceSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteInstanceSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteInstanceSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteInstanceSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteInstanceSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteInstanceSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteInstanceSnapshot.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDeleteKeyPair <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPair"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPair.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteKeyPair(__scope: Construct, __resources: string[], __input: LightsailDeleteKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPair.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPair.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPair.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPair.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation)

---


### LightsailResponsesDeleteKeyPairOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteKeyPairOperation(__scope: Construct, __resources: string[], __input: LightsailDeleteKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesDeleteKeyPairOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteKeyPairOperationLocation(__scope: Construct, __resources: string[], __input: LightsailDeleteKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKeyPairOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesDeleteKnownHostKeys <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKnownHostKeys"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKnownHostKeys.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteKnownHostKeys(__scope: Construct, __resources: string[], __input: LightsailDeleteKnownHostKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKnownHostKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKnownHostKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKnownHostKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteKnownHostKeysRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteKnownHostKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteKnownHostKeys.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDeleteLoadBalancer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteLoadBalancer"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteLoadBalancer.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteLoadBalancer(__scope: Construct, __resources: string[], __input: LightsailDeleteLoadBalancerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteLoadBalancer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteLoadBalancer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteLoadBalancer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteLoadBalancer.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDeleteLoadBalancerTlsCertificate <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteLoadBalancerTlsCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteLoadBalancerTlsCertificate.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteLoadBalancerTlsCertificate(__scope: Construct, __resources: string[], __input: LightsailDeleteLoadBalancerTlsCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteLoadBalancerTlsCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteLoadBalancerTlsCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteLoadBalancerTlsCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerTlsCertificateRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteLoadBalancerTlsCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteLoadBalancerTlsCertificate.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDeleteRelationalDatabase <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteRelationalDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteRelationalDatabase.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteRelationalDatabase(__scope: Construct, __resources: string[], __input: LightsailDeleteRelationalDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteRelationalDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteRelationalDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteRelationalDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteRelationalDatabase.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDeleteRelationalDatabaseSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteRelationalDatabaseSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteRelationalDatabaseSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDeleteRelationalDatabaseSnapshot(__scope: Construct, __resources: string[], __input: LightsailDeleteRelationalDatabaseSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteRelationalDatabaseSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteRelationalDatabaseSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteRelationalDatabaseSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailDeleteRelationalDatabaseSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDeleteRelationalDatabaseSnapshot.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDetachCertificateFromDistribution <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistribution"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistribution.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDetachCertificateFromDistribution(__scope: Construct, __resources: string[], __input: LightsailDetachCertificateFromDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistribution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistribution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistribution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDetachCertificateFromDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailDetachCertificateFromDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistribution.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation)

---


### LightsailResponsesDetachCertificateFromDistributionOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDetachCertificateFromDistributionOperation(__scope: Construct, __resources: string[], __input: LightsailDetachCertificateFromDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDetachCertificateFromDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailDetachCertificateFromDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesDetachCertificateFromDistributionOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDetachCertificateFromDistributionOperationLocation(__scope: Construct, __resources: string[], __input: LightsailDetachCertificateFromDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDetachCertificateFromDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailDetachCertificateFromDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachCertificateFromDistributionOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesDetachDisk <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachDisk"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachDisk.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDetachDisk(__scope: Construct, __resources: string[], __input: LightsailDetachDiskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachDisk.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachDisk.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachDisk.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDetachDiskRequest`](#aws-cdk-sdk.lightsail.LightsailDetachDiskRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachDisk.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDetachInstancesFromLoadBalancer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachInstancesFromLoadBalancer"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachInstancesFromLoadBalancer.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDetachInstancesFromLoadBalancer(__scope: Construct, __resources: string[], __input: LightsailDetachInstancesFromLoadBalancerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachInstancesFromLoadBalancer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachInstancesFromLoadBalancer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachInstancesFromLoadBalancer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDetachInstancesFromLoadBalancerRequest`](#aws-cdk-sdk.lightsail.LightsailDetachInstancesFromLoadBalancerRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachInstancesFromLoadBalancer.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDetachStaticIp <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachStaticIp"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachStaticIp.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDetachStaticIp(__scope: Construct, __resources: string[], __input: LightsailDetachStaticIpRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachStaticIp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachStaticIp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachStaticIp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDetachStaticIpRequest`](#aws-cdk-sdk.lightsail.LightsailDetachStaticIpRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDetachStaticIp.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDisableAddOn <a name="aws-cdk-sdk.lightsail.LightsailResponsesDisableAddOn"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDisableAddOn.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDisableAddOn(__scope: Construct, __resources: string[], __input: LightsailDisableAddOnRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDisableAddOn.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDisableAddOn.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDisableAddOn.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDisableAddOnRequest`](#aws-cdk-sdk.lightsail.LightsailDisableAddOnRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDisableAddOn.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesDownloadDefaultKeyPair <a name="aws-cdk-sdk.lightsail.LightsailResponsesDownloadDefaultKeyPair"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesDownloadDefaultKeyPair.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesDownloadDefaultKeyPair(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDownloadDefaultKeyPair.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDownloadDefaultKeyPair.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `privateKeyBase64`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDownloadDefaultKeyPair.property.privateKeyBase64"></a>

- *Type:* `string`

---

##### `publicKeyBase64`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesDownloadDefaultKeyPair.property.publicKeyBase64"></a>

- *Type:* `string`

---


### LightsailResponsesEnableAddOn <a name="aws-cdk-sdk.lightsail.LightsailResponsesEnableAddOn"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesEnableAddOn.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesEnableAddOn(__scope: Construct, __resources: string[], __input: LightsailEnableAddOnRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesEnableAddOn.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesEnableAddOn.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesEnableAddOn.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailEnableAddOnRequest`](#aws-cdk-sdk.lightsail.LightsailEnableAddOnRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesEnableAddOn.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesExportSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesExportSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesExportSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesExportSnapshot(__scope: Construct, __resources: string[], __input: LightsailExportSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesExportSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesExportSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesExportSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailExportSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailExportSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesExportSnapshot.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesFetchActiveNames <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchActiveNames"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchActiveNames.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchActiveNames(__scope: Construct, __resources: string[], __input: LightsailGetActiveNamesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchActiveNames.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchActiveNames.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchActiveNames.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetActiveNamesRequest`](#aws-cdk-sdk.lightsail.LightsailGetActiveNamesRequest)

---



#### Properties <a name="Properties"></a>

##### `activeNames`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchActiveNames.property.activeNames"></a>

- *Type:* `string`[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchActiveNames.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchAlarms <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchAlarms"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchAlarms.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchAlarms(__scope: Construct, __resources: string[], __input: LightsailGetAlarmsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchAlarms.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchAlarms.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchAlarms.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetAlarmsRequest`](#aws-cdk-sdk.lightsail.LightsailGetAlarmsRequest)

---



#### Properties <a name="Properties"></a>

##### `alarms`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchAlarms.property.alarms"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAlarm`](#aws-cdk-sdk.lightsail.LightsailAlarm)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchAlarms.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchAutoSnapshots <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchAutoSnapshots"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchAutoSnapshots.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchAutoSnapshots(__scope: Construct, __resources: string[], __input: LightsailGetAutoSnapshotsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchAutoSnapshots.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchAutoSnapshots.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchAutoSnapshots.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetAutoSnapshotsRequest`](#aws-cdk-sdk.lightsail.LightsailGetAutoSnapshotsRequest)

---



#### Properties <a name="Properties"></a>

##### `autoSnapshots`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchAutoSnapshots.property.autoSnapshots"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAutoSnapshotDetails`](#aws-cdk-sdk.lightsail.LightsailAutoSnapshotDetails)[]

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchAutoSnapshots.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchAutoSnapshots.property.resourceType"></a>

- *Type:* `string`

---


### LightsailResponsesFetchBlueprints <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchBlueprints"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchBlueprints.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchBlueprints(__scope: Construct, __resources: string[], __input: LightsailGetBlueprintsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchBlueprints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchBlueprints.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchBlueprints.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetBlueprintsRequest`](#aws-cdk-sdk.lightsail.LightsailGetBlueprintsRequest)

---



#### Properties <a name="Properties"></a>

##### `blueprints`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchBlueprints.property.blueprints"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailBlueprint`](#aws-cdk-sdk.lightsail.LightsailBlueprint)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchBlueprints.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchBundles <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchBundles"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchBundles.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchBundles(__scope: Construct, __resources: string[], __input: LightsailGetBundlesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchBundles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchBundles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchBundles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetBundlesRequest`](#aws-cdk-sdk.lightsail.LightsailGetBundlesRequest)

---



#### Properties <a name="Properties"></a>

##### `bundles`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchBundles.property.bundles"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailBundle`](#aws-cdk-sdk.lightsail.LightsailBundle)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchBundles.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchCertificates <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchCertificates"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchCertificates.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchCertificates(__scope: Construct, __resources: string[], __input: LightsailGetCertificatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchCertificates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchCertificates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchCertificates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetCertificatesRequest`](#aws-cdk-sdk.lightsail.LightsailGetCertificatesRequest)

---



#### Properties <a name="Properties"></a>

##### `certificates`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchCertificates.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCertificateSummary`](#aws-cdk-sdk.lightsail.LightsailCertificateSummary)[]

---


### LightsailResponsesFetchCloudFormationStackRecords <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchCloudFormationStackRecords"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchCloudFormationStackRecords.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchCloudFormationStackRecords(__scope: Construct, __resources: string[], __input: LightsailGetCloudFormationStackRecordsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchCloudFormationStackRecords.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchCloudFormationStackRecords.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchCloudFormationStackRecords.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetCloudFormationStackRecordsRequest`](#aws-cdk-sdk.lightsail.LightsailGetCloudFormationStackRecordsRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudFormationStackRecords`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchCloudFormationStackRecords.property.cloudFormationStackRecords"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecord`](#aws-cdk-sdk.lightsail.LightsailCloudFormationStackRecord)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchCloudFormationStackRecords.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchContactMethods <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContactMethods"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContactMethods.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchContactMethods(__scope: Construct, __resources: string[], __input: LightsailGetContactMethodsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContactMethods.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContactMethods.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContactMethods.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetContactMethodsRequest`](#aws-cdk-sdk.lightsail.LightsailGetContactMethodsRequest)

---



#### Properties <a name="Properties"></a>

##### `contactMethods`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContactMethods.property.contactMethods"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContactMethod`](#aws-cdk-sdk.lightsail.LightsailContactMethod)[]

---


### LightsailResponsesFetchContainerApiMetadata <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerApiMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerApiMetadata.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchContainerApiMetadata(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerApiMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerApiMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerApiMetadata.property.metadata"></a>

- *Type:* {[ key: string ]: `string`}[]

---


### LightsailResponsesFetchContainerImages <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerImages"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerImages.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchContainerImages(__scope: Construct, __resources: string[], __input: LightsailGetContainerImagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerImages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerImages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerImages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetContainerImagesRequest`](#aws-cdk-sdk.lightsail.LightsailGetContainerImagesRequest)

---



#### Properties <a name="Properties"></a>

##### `containerImages`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerImages.property.containerImages"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerImage`](#aws-cdk-sdk.lightsail.LightsailContainerImage)[]

---


### LightsailResponsesFetchContainerLog <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerLog"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerLog.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchContainerLog(__scope: Construct, __resources: string[], __input: LightsailGetContainerLogRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerLog.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerLog.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerLog.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetContainerLogRequest`](#aws-cdk-sdk.lightsail.LightsailGetContainerLogRequest)

---



#### Properties <a name="Properties"></a>

##### `logEvents`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerLog.property.logEvents"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerServiceLogEvent`](#aws-cdk-sdk.lightsail.LightsailContainerServiceLogEvent)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerLog.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchContainerServiceDeployments <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServiceDeployments"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServiceDeployments.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchContainerServiceDeployments(__scope: Construct, __resources: string[], __input: LightsailGetContainerServiceDeploymentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServiceDeployments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServiceDeployments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServiceDeployments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetContainerServiceDeploymentsRequest`](#aws-cdk-sdk.lightsail.LightsailGetContainerServiceDeploymentsRequest)

---



#### Properties <a name="Properties"></a>

##### `deployments`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServiceDeployments.property.deployments"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerServiceDeployment`](#aws-cdk-sdk.lightsail.LightsailContainerServiceDeployment)[]

---


### LightsailResponsesFetchContainerServiceMetricData <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServiceMetricData"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServiceMetricData.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchContainerServiceMetricData(__scope: Construct, __resources: string[], __input: LightsailGetContainerServiceMetricDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServiceMetricData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServiceMetricData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServiceMetricData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetContainerServiceMetricDataRequest`](#aws-cdk-sdk.lightsail.LightsailGetContainerServiceMetricDataRequest)

---



#### Properties <a name="Properties"></a>

##### `metricData`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServiceMetricData.property.metricData"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailMetricDatapoint`](#aws-cdk-sdk.lightsail.LightsailMetricDatapoint)[]

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServiceMetricData.property.metricName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchContainerServicePowers <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServicePowers"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServicePowers.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchContainerServicePowers(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServicePowers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServicePowers.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `powers`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServicePowers.property.powers"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerServicePower`](#aws-cdk-sdk.lightsail.LightsailContainerServicePower)[]

---


### LightsailResponsesFetchContainerServices <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServices"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServices.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchContainerServices(__scope: Construct, __resources: string[], __input: LightsailGetContainerServicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetContainerServicesRequest`](#aws-cdk-sdk.lightsail.LightsailGetContainerServicesRequest)

---



#### Properties <a name="Properties"></a>

##### `containerServices`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchContainerServices.property.containerServices"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailContainerService`](#aws-cdk-sdk.lightsail.LightsailContainerService)[]

---


### LightsailResponsesFetchDisk <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDisk"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDisk.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDisk(__scope: Construct, __resources: string[], __input: LightsailGetDiskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDisk.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDisk.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDisk.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDiskRequest`](#aws-cdk-sdk.lightsail.LightsailGetDiskRequest)

---



#### Properties <a name="Properties"></a>

##### `disk`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDisk.property.disk"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk)

---


### LightsailResponsesFetchDiskDisk <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDiskDisk(__scope: Construct, __resources: string[], __input: LightsailGetDiskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDiskRequest`](#aws-cdk-sdk.lightsail.LightsailGetDiskRequest)

---



#### Properties <a name="Properties"></a>

##### `addOns`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.addOns"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAddOn`](#aws-cdk-sdk.lightsail.LightsailAddOn)[]

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.arn"></a>

- *Type:* `string`

---

##### `attachedTo`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.attachedTo"></a>

- *Type:* `string`

---

##### `attachmentState`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.attachmentState"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.createdAt"></a>

- *Type:* `string`

---

##### `gbInUse`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.gbInUse"></a>

- *Type:* `number`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.iops"></a>

- *Type:* `number`

---

##### `isAttached`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.isAttached"></a>

- *Type:* `boolean`

---

##### `isSystemDisk`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.isSystemDisk"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDiskLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDiskLocation)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.name"></a>

- *Type:* `string`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.path"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.resourceType"></a>

- *Type:* `string`

---

##### `sizeInGb`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.sizeInGb"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.state"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDisk.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---


### LightsailResponsesFetchDiskDiskLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDiskLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDiskLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDiskDiskLocation(__scope: Construct, __resources: string[], __input: LightsailGetDiskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDiskLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDiskLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDiskLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDiskRequest`](#aws-cdk-sdk.lightsail.LightsailGetDiskRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDiskLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskDiskLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchDisks <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDisks"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDisks.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDisks(__scope: Construct, __resources: string[], __input: LightsailGetDisksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDisks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDisks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDisks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDisksRequest`](#aws-cdk-sdk.lightsail.LightsailGetDisksRequest)

---



#### Properties <a name="Properties"></a>

##### `disks`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDisks.property.disks"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDisk`](#aws-cdk-sdk.lightsail.LightsailDisk)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDisks.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchDiskSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDiskSnapshot(__scope: Construct, __resources: string[], __input: LightsailGetDiskSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `diskSnapshot`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshot.property.diskSnapshot"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot)

---


### LightsailResponsesFetchDiskSnapshotDiskSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot(__scope: Construct, __resources: string[], __input: LightsailGetDiskSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.property.createdAt"></a>

- *Type:* `string`

---

##### `fromDiskArn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.property.fromDiskArn"></a>

- *Type:* `string`

---

##### `fromDiskName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.property.fromDiskName"></a>

- *Type:* `string`

---

##### `fromInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.property.fromInstanceArn"></a>

- *Type:* `string`

---

##### `fromInstanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.property.fromInstanceName"></a>

- *Type:* `string`

---

##### `isFromAutoSnapshot`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.property.isFromAutoSnapshot"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshotLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshotLocation)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.property.name"></a>

- *Type:* `string`

---

##### `progress`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.property.progress"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.property.resourceType"></a>

- *Type:* `string`

---

##### `sizeInGb`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.property.sizeInGb"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.property.state"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshot.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---


### LightsailResponsesFetchDiskSnapshotDiskSnapshotLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshotLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshotLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshotLocation(__scope: Construct, __resources: string[], __input: LightsailGetDiskSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshotLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshotLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshotLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshotLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshotDiskSnapshotLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchDiskSnapshots <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshots"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshots.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDiskSnapshots(__scope: Construct, __resources: string[], __input: LightsailGetDiskSnapshotsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshots.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshots.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshots.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotsRequest`](#aws-cdk-sdk.lightsail.LightsailGetDiskSnapshotsRequest)

---



#### Properties <a name="Properties"></a>

##### `diskSnapshots`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshots.property.diskSnapshots"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDiskSnapshot`](#aws-cdk-sdk.lightsail.LightsailDiskSnapshot)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDiskSnapshots.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchDistributionBundles <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionBundles"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionBundles.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDistributionBundles(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionBundles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionBundles.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `bundles`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionBundles.property.bundles"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDistributionBundle`](#aws-cdk-sdk.lightsail.LightsailDistributionBundle)[]

---


### LightsailResponsesFetchDistributionLatestCacheReset <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionLatestCacheReset"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionLatestCacheReset.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDistributionLatestCacheReset(__scope: Construct, __resources: string[], __input: LightsailGetDistributionLatestCacheResetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionLatestCacheReset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionLatestCacheReset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionLatestCacheReset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDistributionLatestCacheResetRequest`](#aws-cdk-sdk.lightsail.LightsailGetDistributionLatestCacheResetRequest)

---



#### Properties <a name="Properties"></a>

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionLatestCacheReset.property.createTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionLatestCacheReset.property.status"></a>

- *Type:* `string`

---


### LightsailResponsesFetchDistributionMetricData <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionMetricData"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionMetricData.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDistributionMetricData(__scope: Construct, __resources: string[], __input: LightsailGetDistributionMetricDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionMetricData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionMetricData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionMetricData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDistributionMetricDataRequest`](#aws-cdk-sdk.lightsail.LightsailGetDistributionMetricDataRequest)

---



#### Properties <a name="Properties"></a>

##### `metricData`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionMetricData.property.metricData"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailMetricDatapoint`](#aws-cdk-sdk.lightsail.LightsailMetricDatapoint)[]

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributionMetricData.property.metricName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchDistributions <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributions"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributions.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDistributions(__scope: Construct, __resources: string[], __input: LightsailGetDistributionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDistributionsRequest`](#aws-cdk-sdk.lightsail.LightsailGetDistributionsRequest)

---



#### Properties <a name="Properties"></a>

##### `distributions`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributions.property.distributions"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailLightsailDistribution`](#aws-cdk-sdk.lightsail.LightsailLightsailDistribution)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDistributions.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchDomain <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomain"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomain.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDomain(__scope: Construct, __resources: string[], __input: LightsailGetDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDomainRequest`](#aws-cdk-sdk.lightsail.LightsailGetDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomain.property.domain"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomain`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomain)

---


### LightsailResponsesFetchDomainDomain <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomain"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomain.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDomainDomain(__scope: Construct, __resources: string[], __input: LightsailGetDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDomainRequest`](#aws-cdk-sdk.lightsail.LightsailGetDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomain.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomain.property.createdAt"></a>

- *Type:* `string`

---

##### `domainEntries`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomain.property.domainEntries"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDomainEntry`](#aws-cdk-sdk.lightsail.LightsailDomainEntry)[]

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomain.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomainLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomainLocation)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomain.property.name"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomain.property.resourceType"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomain.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomain.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---


### LightsailResponsesFetchDomainDomainLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomainLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomainLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDomainDomainLocation(__scope: Construct, __resources: string[], __input: LightsailGetDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomainLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomainLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomainLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDomainRequest`](#aws-cdk-sdk.lightsail.LightsailGetDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomainLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomainDomainLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchDomains <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomains"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomains.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchDomains(__scope: Construct, __resources: string[], __input: LightsailGetDomainsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomains.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomains.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomains.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetDomainsRequest`](#aws-cdk-sdk.lightsail.LightsailGetDomainsRequest)

---



#### Properties <a name="Properties"></a>

##### `domains`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomains.property.domains"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDomain`](#aws-cdk-sdk.lightsail.LightsailDomain)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchDomains.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchExportSnapshotRecords <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchExportSnapshotRecords"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchExportSnapshotRecords.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchExportSnapshotRecords(__scope: Construct, __resources: string[], __input: LightsailGetExportSnapshotRecordsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchExportSnapshotRecords.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchExportSnapshotRecords.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchExportSnapshotRecords.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetExportSnapshotRecordsRequest`](#aws-cdk-sdk.lightsail.LightsailGetExportSnapshotRecordsRequest)

---



#### Properties <a name="Properties"></a>

##### `exportSnapshotRecords`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchExportSnapshotRecords.property.exportSnapshotRecords"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailExportSnapshotRecord`](#aws-cdk-sdk.lightsail.LightsailExportSnapshotRecord)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchExportSnapshotRecords.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchInstance <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstance"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstance.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstance(__scope: Construct, __resources: string[], __input: LightsailGetInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `instance`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstance.property.instance"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance)

---


### LightsailResponsesFetchInstanceAccessDetails <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetails"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetails.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceAccessDetails(__scope: Construct, __resources: string[], __input: LightsailGetInstanceAccessDetailsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceAccessDetailsRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceAccessDetailsRequest)

---



#### Properties <a name="Properties"></a>

##### `accessDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetails.property.accessDetails"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails)

---


### LightsailResponsesFetchInstanceAccessDetailsAccessDetails <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails(__scope: Construct, __resources: string[], __input: LightsailGetInstanceAccessDetailsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceAccessDetailsRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceAccessDetailsRequest)

---



#### Properties <a name="Properties"></a>

##### `certKey`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails.property.certKey"></a>

- *Type:* `string`

---

##### `expiresAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails.property.expiresAt"></a>

- *Type:* `string`

---

##### `hostKeys`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails.property.hostKeys"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailHostKeyAttributes`](#aws-cdk-sdk.lightsail.LightsailHostKeyAttributes)[]

---

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails.property.instanceName"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails.property.ipAddress"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails.property.password"></a>

- *Type:* `string`

---

##### `passwordData`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails.property.passwordData"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetailsPasswordData`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetailsPasswordData)

---

##### `privateKey`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails.property.privateKey"></a>

- *Type:* `string`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails.property.protocol"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetails.property.username"></a>

- *Type:* `string`

---


### LightsailResponsesFetchInstanceAccessDetailsAccessDetailsPasswordData <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetailsPasswordData"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetailsPasswordData.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetailsPasswordData(__scope: Construct, __resources: string[], __input: LightsailGetInstanceAccessDetailsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetailsPasswordData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetailsPasswordData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetailsPasswordData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceAccessDetailsRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceAccessDetailsRequest)

---



#### Properties <a name="Properties"></a>

##### `ciphertext`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetailsPasswordData.property.ciphertext"></a>

- *Type:* `string`

---

##### `keyPairName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceAccessDetailsAccessDetailsPasswordData.property.keyPairName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchInstanceInstance <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceInstance(__scope: Construct, __resources: string[], __input: LightsailGetInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `addOns`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.addOns"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailAddOn`](#aws-cdk-sdk.lightsail.LightsailAddOn)[]

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.arn"></a>

- *Type:* `string`

---

##### `blueprintId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.blueprintId"></a>

- *Type:* `string`

---

##### `blueprintName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.blueprintName"></a>

- *Type:* `string`

---

##### `bundleId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.bundleId"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.createdAt"></a>

- *Type:* `string`

---

##### `hardware`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.hardware"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceHardware`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceHardware)

---

##### `ipv6Address`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.ipv6Address"></a>

- *Type:* `string`

---

##### `isStaticIp`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.isStaticIp"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceLocation)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.name"></a>

- *Type:* `string`

---

##### `networking`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.networking"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworking`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworking)

---

##### `privateIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.privateIpAddress"></a>

- *Type:* `string`

---

##### `publicIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.publicIpAddress"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.resourceType"></a>

- *Type:* `string`

---

##### `sshKeyName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.sshKeyName"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.state"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceState`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceState)

---

##### `supportCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstance.property.username"></a>

- *Type:* `string`

---


### LightsailResponsesFetchInstanceInstanceHardware <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceHardware"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceHardware.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceInstanceHardware(__scope: Construct, __resources: string[], __input: LightsailGetInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceHardware.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceHardware.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceHardware.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `cpuCount`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceHardware.property.cpuCount"></a>

- *Type:* `number`

---

##### `disks`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceHardware.property.disks"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDisk`](#aws-cdk-sdk.lightsail.LightsailDisk)[]

---

##### `ramSizeInGb`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceHardware.property.ramSizeInGb"></a>

- *Type:* `number`

---


### LightsailResponsesFetchInstanceInstanceLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceInstanceLocation(__scope: Construct, __resources: string[], __input: LightsailGetInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchInstanceInstanceNetworking <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworking"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworking.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceInstanceNetworking(__scope: Construct, __resources: string[], __input: LightsailGetInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworking.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworking.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworking.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `monthlyTransfer`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworking.property.monthlyTransfer"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworkingMonthlyTransfer`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworkingMonthlyTransfer)

---

##### `ports`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworking.property.ports"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstancePortInfo`](#aws-cdk-sdk.lightsail.LightsailInstancePortInfo)[]

---


### LightsailResponsesFetchInstanceInstanceNetworkingMonthlyTransfer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworkingMonthlyTransfer"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworkingMonthlyTransfer.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceInstanceNetworkingMonthlyTransfer(__scope: Construct, __resources: string[], __input: LightsailGetInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworkingMonthlyTransfer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworkingMonthlyTransfer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworkingMonthlyTransfer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `gbPerMonthAllocated`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceNetworkingMonthlyTransfer.property.gbPerMonthAllocated"></a>

- *Type:* `number`

---


### LightsailResponsesFetchInstanceInstanceState <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceState"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceState.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceInstanceState(__scope: Construct, __resources: string[], __input: LightsailGetInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceState.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceState.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceState.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceState.property.code"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceInstanceState.property.name"></a>

- *Type:* `string`

---


### LightsailResponsesFetchInstanceMetricData <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceMetricData"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceMetricData.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceMetricData(__scope: Construct, __resources: string[], __input: LightsailGetInstanceMetricDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceMetricData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceMetricData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceMetricData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceMetricDataRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceMetricDataRequest)

---



#### Properties <a name="Properties"></a>

##### `metricData`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceMetricData.property.metricData"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailMetricDatapoint`](#aws-cdk-sdk.lightsail.LightsailMetricDatapoint)[]

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceMetricData.property.metricName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchInstancePortStates <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstancePortStates"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstancePortStates.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstancePortStates(__scope: Construct, __resources: string[], __input: LightsailGetInstancePortStatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstancePortStates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstancePortStates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstancePortStates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstancePortStatesRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstancePortStatesRequest)

---



#### Properties <a name="Properties"></a>

##### `portStates`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstancePortStates.property.portStates"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstancePortState`](#aws-cdk-sdk.lightsail.LightsailInstancePortState)[]

---


### LightsailResponsesFetchInstances <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstances"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstances.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstances(__scope: Construct, __resources: string[], __input: LightsailGetInstancesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstancesRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstancesRequest)

---



#### Properties <a name="Properties"></a>

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstances.property.instances"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstance`](#aws-cdk-sdk.lightsail.LightsailInstance)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstances.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchInstanceSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceSnapshot(__scope: Construct, __resources: string[], __input: LightsailGetInstanceSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceSnapshot`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshot.property.instanceSnapshot"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot)

---


### LightsailResponsesFetchInstanceSnapshotInstanceSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot(__scope: Construct, __resources: string[], __input: LightsailGetInstanceSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.createdAt"></a>

- *Type:* `string`

---

##### `fromAttachedDisks`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.fromAttachedDisks"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailDisk`](#aws-cdk-sdk.lightsail.LightsailDisk)[]

---

##### `fromBlueprintId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.fromBlueprintId"></a>

- *Type:* `string`

---

##### `fromBundleId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.fromBundleId"></a>

- *Type:* `string`

---

##### `fromInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.fromInstanceArn"></a>

- *Type:* `string`

---

##### `fromInstanceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.fromInstanceName"></a>

- *Type:* `string`

---

##### `isFromAutoSnapshot`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.isFromAutoSnapshot"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshotLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshotLocation)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.name"></a>

- *Type:* `string`

---

##### `progress`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.progress"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.resourceType"></a>

- *Type:* `string`

---

##### `sizeInGb`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.sizeInGb"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.state"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshot.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---


### LightsailResponsesFetchInstanceSnapshotInstanceSnapshotLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshotLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshotLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshotLocation(__scope: Construct, __resources: string[], __input: LightsailGetInstanceSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshotLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshotLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshotLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshotLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshotInstanceSnapshotLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchInstanceSnapshots <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshots"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshots.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceSnapshots(__scope: Construct, __resources: string[], __input: LightsailGetInstanceSnapshotsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshots.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshots.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshots.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotsRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceSnapshotsRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceSnapshots`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshots.property.instanceSnapshots"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstanceSnapshot`](#aws-cdk-sdk.lightsail.LightsailInstanceSnapshot)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceSnapshots.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchInstanceState <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceState"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceState.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceState(__scope: Construct, __resources: string[], __input: LightsailGetInstanceStateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceState.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceState.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceState.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceStateRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceStateRequest)

---



#### Properties <a name="Properties"></a>

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceState.property.state"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceStateState`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceStateState)

---


### LightsailResponsesFetchInstanceStateState <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceStateState"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceStateState.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchInstanceStateState(__scope: Construct, __resources: string[], __input: LightsailGetInstanceStateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceStateState.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceStateState.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceStateState.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetInstanceStateRequest`](#aws-cdk-sdk.lightsail.LightsailGetInstanceStateRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceStateState.property.code"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchInstanceStateState.property.name"></a>

- *Type:* `string`

---


### LightsailResponsesFetchKeyPair <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPair"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPair.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchKeyPair(__scope: Construct, __resources: string[], __input: LightsailGetKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPair.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPair.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPair.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailGetKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `keyPair`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPair.property.keyPair"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPair`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPair)

---


### LightsailResponsesFetchKeyPairKeyPair <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPair"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPair.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchKeyPairKeyPair(__scope: Construct, __resources: string[], __input: LightsailGetKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPair.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPair.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPair.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailGetKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPair.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPair.property.createdAt"></a>

- *Type:* `string`

---

##### `fingerprint`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPair.property.fingerprint"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPair.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPairLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPairLocation)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPair.property.name"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPair.property.resourceType"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPair.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPair.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---


### LightsailResponsesFetchKeyPairKeyPairLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPairLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPairLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchKeyPairKeyPairLocation(__scope: Construct, __resources: string[], __input: LightsailGetKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPairLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPairLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPairLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailGetKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPairLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairKeyPairLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchKeyPairs <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairs"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairs.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchKeyPairs(__scope: Construct, __resources: string[], __input: LightsailGetKeyPairsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetKeyPairsRequest`](#aws-cdk-sdk.lightsail.LightsailGetKeyPairsRequest)

---



#### Properties <a name="Properties"></a>

##### `keyPairs`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairs.property.keyPairs"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailKeyPair`](#aws-cdk-sdk.lightsail.LightsailKeyPair)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchKeyPairs.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchLoadBalancer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancer"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancer.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchLoadBalancer(__scope: Construct, __resources: string[], __input: LightsailGetLoadBalancerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetLoadBalancerRequest`](#aws-cdk-sdk.lightsail.LightsailGetLoadBalancerRequest)

---



#### Properties <a name="Properties"></a>

##### `loadBalancer`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancer.property.loadBalancer"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer)

---


### LightsailResponsesFetchLoadBalancerLoadBalancer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer(__scope: Construct, __resources: string[], __input: LightsailGetLoadBalancerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetLoadBalancerRequest`](#aws-cdk-sdk.lightsail.LightsailGetLoadBalancerRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.arn"></a>

- *Type:* `string`

---

##### `configurationOptions`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.configurationOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.createdAt"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.dnsName"></a>

- *Type:* `string`

---

##### `healthCheckPath`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.healthCheckPath"></a>

- *Type:* `string`

---

##### `instanceHealthSummary`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.instanceHealthSummary"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailInstanceHealthSummary`](#aws-cdk-sdk.lightsail.LightsailInstanceHealthSummary)[]

---

##### `instancePort`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.instancePort"></a>

- *Type:* `number`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancerLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancerLocation)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.name"></a>

- *Type:* `string`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.protocol"></a>

- *Type:* `string`

---

##### `publicPorts`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.publicPorts"></a>

- *Type:* `number`[]

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.resourceType"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.state"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

##### `tlsCertificateSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancer.property.tlsCertificateSummaries"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateSummary`](#aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificateSummary)[]

---


### LightsailResponsesFetchLoadBalancerLoadBalancerLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancerLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancerLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchLoadBalancerLoadBalancerLocation(__scope: Construct, __resources: string[], __input: LightsailGetLoadBalancerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancerLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancerLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancerLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetLoadBalancerRequest`](#aws-cdk-sdk.lightsail.LightsailGetLoadBalancerRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancerLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerLoadBalancerLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchLoadBalancerMetricData <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerMetricData"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerMetricData.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchLoadBalancerMetricData(__scope: Construct, __resources: string[], __input: LightsailGetLoadBalancerMetricDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerMetricData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerMetricData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerMetricData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetLoadBalancerMetricDataRequest`](#aws-cdk-sdk.lightsail.LightsailGetLoadBalancerMetricDataRequest)

---



#### Properties <a name="Properties"></a>

##### `metricData`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerMetricData.property.metricData"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailMetricDatapoint`](#aws-cdk-sdk.lightsail.LightsailMetricDatapoint)[]

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerMetricData.property.metricName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchLoadBalancers <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancers"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancers.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchLoadBalancers(__scope: Construct, __resources: string[], __input: LightsailGetLoadBalancersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetLoadBalancersRequest`](#aws-cdk-sdk.lightsail.LightsailGetLoadBalancersRequest)

---



#### Properties <a name="Properties"></a>

##### `loadBalancers`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancers.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailLoadBalancer`](#aws-cdk-sdk.lightsail.LightsailLoadBalancer)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancers.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchLoadBalancerTlsCertificates <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerTlsCertificates"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerTlsCertificates.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchLoadBalancerTlsCertificates(__scope: Construct, __resources: string[], __input: LightsailGetLoadBalancerTlsCertificatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerTlsCertificates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerTlsCertificates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerTlsCertificates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetLoadBalancerTlsCertificatesRequest`](#aws-cdk-sdk.lightsail.LightsailGetLoadBalancerTlsCertificatesRequest)

---



#### Properties <a name="Properties"></a>

##### `tlsCertificates`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchLoadBalancerTlsCertificates.property.tlsCertificates"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate`](#aws-cdk-sdk.lightsail.LightsailLoadBalancerTlsCertificate)[]

---


### LightsailResponsesFetchOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchOperation(__scope: Construct, __resources: string[], __input: LightsailGetOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetOperationRequest`](#aws-cdk-sdk.lightsail.LightsailGetOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperation.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation)

---


### LightsailResponsesFetchOperationOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchOperationOperation(__scope: Construct, __resources: string[], __input: LightsailGetOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetOperationRequest`](#aws-cdk-sdk.lightsail.LightsailGetOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesFetchOperationOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchOperationOperationLocation(__scope: Construct, __resources: string[], __input: LightsailGetOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetOperationRequest`](#aws-cdk-sdk.lightsail.LightsailGetOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchOperations <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperations"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperations.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchOperations(__scope: Construct, __resources: string[], __input: LightsailGetOperationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetOperationsRequest`](#aws-cdk-sdk.lightsail.LightsailGetOperationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperations.property.nextPageToken"></a>

- *Type:* `string`

---

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperations.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesFetchOperationsForResource <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationsForResource.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchOperationsForResource(__scope: Construct, __resources: string[], __input: LightsailGetOperationsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetOperationsForResourceRequest`](#aws-cdk-sdk.lightsail.LightsailGetOperationsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextPageCount`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationsForResource.property.nextPageCount"></a>

- *Type:* `string`

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationsForResource.property.nextPageToken"></a>

- *Type:* `string`

---

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchOperationsForResource.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesFetchRegions <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRegions"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRegions.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRegions(__scope: Construct, __resources: string[], __input: LightsailGetRegionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRegions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRegions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRegions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRegionsRequest`](#aws-cdk-sdk.lightsail.LightsailGetRegionsRequest)

---



#### Properties <a name="Properties"></a>

##### `regions`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRegions.property.regions"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRegion`](#aws-cdk-sdk.lightsail.LightsailRegion)[]

---


### LightsailResponsesFetchRelationalDatabase <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabase.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabase(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `relationalDatabase`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabase.property.relationalDatabase"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase)

---


### LightsailResponsesFetchRelationalDatabaseBlueprints <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseBlueprints"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseBlueprints.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseBlueprints(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseBlueprintsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseBlueprints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseBlueprints.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseBlueprints.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBlueprintsRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBlueprintsRequest)

---



#### Properties <a name="Properties"></a>

##### `blueprints`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseBlueprints.property.blueprints"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBlueprint`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBlueprint)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseBlueprints.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchRelationalDatabaseBundles <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseBundles"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseBundles.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseBundles(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseBundlesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseBundles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseBundles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseBundles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBundlesRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseBundlesRequest)

---



#### Properties <a name="Properties"></a>

##### `bundles`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseBundles.property.bundles"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBundle`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabaseBundle)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseBundles.property.nextPageToken"></a>

- *Type:* `string`

---


### LightsailResponsesFetchRelationalDatabaseEvents <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseEvents"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseEvents.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseEvents(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseEventsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseEventsRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseEventsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseEvents.property.nextPageToken"></a>

- *Type:* `string`

---

##### `relationalDatabaseEvents`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseEvents.property.relationalDatabaseEvents"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabaseEvent`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabaseEvent)[]

---


### LightsailResponsesFetchRelationalDatabaseLogEvents <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseLogEvents"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseLogEvents.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseLogEvents(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseLogEventsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseLogEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseLogEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseLogEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogEventsRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogEventsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextBackwardToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseLogEvents.property.nextBackwardToken"></a>

- *Type:* `string`

---

##### `nextForwardToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseLogEvents.property.nextForwardToken"></a>

- *Type:* `string`

---

##### `resourceLogEvents`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseLogEvents.property.resourceLogEvents"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailLogEvent`](#aws-cdk-sdk.lightsail.LightsailLogEvent)[]

---


### LightsailResponsesFetchRelationalDatabaseLogStreams <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseLogStreams"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseLogStreams.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseLogStreams(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseLogStreamsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseLogStreams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseLogStreams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseLogStreams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogStreamsRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseLogStreamsRequest)

---



#### Properties <a name="Properties"></a>

##### `logStreams`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseLogStreams.property.logStreams"></a>

- *Type:* `string`[]

---


### LightsailResponsesFetchRelationalDatabaseMasterUserPassword <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseMasterUserPassword"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseMasterUserPassword.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseMasterUserPassword(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseMasterUserPasswordRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseMasterUserPassword.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseMasterUserPassword.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseMasterUserPassword.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMasterUserPasswordRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMasterUserPasswordRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseMasterUserPassword.property.createdAt"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseMasterUserPassword.property.masterUserPassword"></a>

- *Type:* `string`

---


### LightsailResponsesFetchRelationalDatabaseMetricData <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseMetricData"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseMetricData.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseMetricData(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseMetricDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseMetricData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseMetricData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseMetricData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMetricDataRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseMetricDataRequest)

---



#### Properties <a name="Properties"></a>

##### `metricData`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseMetricData.property.metricData"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailMetricDatapoint`](#aws-cdk-sdk.lightsail.LightsailMetricDatapoint)[]

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseMetricData.property.metricName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchRelationalDatabaseParameters <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseParameters"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseParameters.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseParameters(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseParametersRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseParameters.property.nextPageToken"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseParameters.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabaseParameter`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabaseParameter)[]

---


### LightsailResponsesFetchRelationalDatabaseRelationalDatabase <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.arn"></a>

- *Type:* `string`

---

##### `backupRetentionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.backupRetentionEnabled"></a>

- *Type:* `boolean`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.createdAt"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.engineVersion"></a>

- *Type:* `string`

---

##### `hardware`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.hardware"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseHardware`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseHardware)

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseLocation)

---

##### `masterDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.masterDatabaseName"></a>

- *Type:* `string`

---

##### `masterEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.masterEndpoint"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseMasterEndpoint`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseMasterEndpoint)

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.masterUsername"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.name"></a>

- *Type:* `string`

---

##### `parameterApplyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.parameterApplyStatus"></a>

- *Type:* `string`

---

##### `pendingMaintenanceActions`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.pendingMaintenanceActions"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailPendingMaintenanceAction`](#aws-cdk-sdk.lightsail.LightsailPendingMaintenanceAction)[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabasePendingModifiedValues`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabasePendingModifiedValues)

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `relationalDatabaseBlueprintId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.relationalDatabaseBlueprintId"></a>

- *Type:* `string`

---

##### `relationalDatabaseBundleId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.relationalDatabaseBundleId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.resourceType"></a>

- *Type:* `string`

---

##### `secondaryAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.secondaryAvailabilityZone"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.state"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabase.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---


### LightsailResponsesFetchRelationalDatabaseRelationalDatabaseHardware <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseHardware"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseHardware.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseHardware(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseHardware.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseHardware.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseHardware.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `cpuCount`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseHardware.property.cpuCount"></a>

- *Type:* `number`

---

##### `diskSizeInGb`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseHardware.property.diskSizeInGb"></a>

- *Type:* `number`

---

##### `ramSizeInGb`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseHardware.property.ramSizeInGb"></a>

- *Type:* `number`

---


### LightsailResponsesFetchRelationalDatabaseRelationalDatabaseLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseLocation(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchRelationalDatabaseRelationalDatabaseMasterEndpoint <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseMasterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseMasterEndpoint.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseMasterEndpoint(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseMasterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseMasterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseMasterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseMasterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabaseMasterEndpoint.property.port"></a>

- *Type:* `number`

---


### LightsailResponsesFetchRelationalDatabaseRelationalDatabasePendingModifiedValues <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabasePendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabasePendingModifiedValues.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabasePendingModifiedValues(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabasePendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabasePendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabasePendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `backupRetentionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabasePendingModifiedValues.property.backupRetentionEnabled"></a>

- *Type:* `boolean`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabasePendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseRelationalDatabasePendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---


### LightsailResponsesFetchRelationalDatabases <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabases"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabases.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabases(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabasesRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabasesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabases.property.nextPageToken"></a>

- *Type:* `string`

---

##### `relationalDatabases`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabases.property.relationalDatabases"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabase`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabase)[]

---


### LightsailResponsesFetchRelationalDatabaseSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseSnapshot(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `relationalDatabaseSnapshot`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshot.property.relationalDatabaseSnapshot"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot)

---


### LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.property.createdAt"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.property.engineVersion"></a>

- *Type:* `string`

---

##### `fromRelationalDatabaseArn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.property.fromRelationalDatabaseArn"></a>

- *Type:* `string`

---

##### `fromRelationalDatabaseBlueprintId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.property.fromRelationalDatabaseBlueprintId"></a>

- *Type:* `string`

---

##### `fromRelationalDatabaseBundleId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.property.fromRelationalDatabaseBundleId"></a>

- *Type:* `string`

---

##### `fromRelationalDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.property.fromRelationalDatabaseName"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.property.name"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.property.resourceType"></a>

- *Type:* `string`

---

##### `sizeInGb`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.property.sizeInGb"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.property.state"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.property.supportCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---


### LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseSnapshotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesFetchRelationalDatabaseSnapshots <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshots"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshots.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchRelationalDatabaseSnapshots(__scope: Construct, __resources: string[], __input: LightsailGetRelationalDatabaseSnapshotsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshots.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshots.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshots.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotsRequest`](#aws-cdk-sdk.lightsail.LightsailGetRelationalDatabaseSnapshotsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshots.property.nextPageToken"></a>

- *Type:* `string`

---

##### `relationalDatabaseSnapshots`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchRelationalDatabaseSnapshots.property.relationalDatabaseSnapshots"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot`](#aws-cdk-sdk.lightsail.LightsailRelationalDatabaseSnapshot)[]

---


### LightsailResponsesFetchStaticIp <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIp"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIp.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchStaticIp(__scope: Construct, __resources: string[], __input: LightsailGetStaticIpRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetStaticIpRequest`](#aws-cdk-sdk.lightsail.LightsailGetStaticIpRequest)

---



#### Properties <a name="Properties"></a>

##### `staticIp`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIp.property.staticIp"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp)

---


### LightsailResponsesFetchStaticIps <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIps"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIps.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchStaticIps(__scope: Construct, __resources: string[], __input: LightsailGetStaticIpsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIps.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIps.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIps.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetStaticIpsRequest`](#aws-cdk-sdk.lightsail.LightsailGetStaticIpsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIps.property.nextPageToken"></a>

- *Type:* `string`

---

##### `staticIps`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIps.property.staticIps"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailStaticIp`](#aws-cdk-sdk.lightsail.LightsailStaticIp)[]

---


### LightsailResponsesFetchStaticIpStaticIp <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchStaticIpStaticIp(__scope: Construct, __resources: string[], __input: LightsailGetStaticIpRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetStaticIpRequest`](#aws-cdk-sdk.lightsail.LightsailGetStaticIpRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp.property.arn"></a>

- *Type:* `string`

---

##### `attachedTo`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp.property.attachedTo"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp.property.createdAt"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp.property.ipAddress"></a>

- *Type:* `string`

---

##### `isAttached`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp.property.isAttached"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIpLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIpLocation)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp.property.name"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp.property.resourceType"></a>

- *Type:* `string`

---

##### `supportCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIp.property.supportCode"></a>

- *Type:* `string`

---


### LightsailResponsesFetchStaticIpStaticIpLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIpLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIpLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesFetchStaticIpStaticIpLocation(__scope: Construct, __resources: string[], __input: LightsailGetStaticIpRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIpLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIpLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIpLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailGetStaticIpRequest`](#aws-cdk-sdk.lightsail.LightsailGetStaticIpRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIpLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesFetchStaticIpStaticIpLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesImportKeyPair <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPair"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPair.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesImportKeyPair(__scope: Construct, __resources: string[], __input: LightsailImportKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPair.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPair.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPair.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailImportKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailImportKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPair.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation)

---


### LightsailResponsesImportKeyPairOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesImportKeyPairOperation(__scope: Construct, __resources: string[], __input: LightsailImportKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailImportKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailImportKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesImportKeyPairOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesImportKeyPairOperationLocation(__scope: Construct, __resources: string[], __input: LightsailImportKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailImportKeyPairRequest`](#aws-cdk-sdk.lightsail.LightsailImportKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesImportKeyPairOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesIsVpcPeered <a name="aws-cdk-sdk.lightsail.LightsailResponsesIsVpcPeered"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesIsVpcPeered.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesIsVpcPeered(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesIsVpcPeered.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesIsVpcPeered.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `isPeered`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesIsVpcPeered.property.isPeered"></a>

- *Type:* `boolean`

---


### LightsailResponsesOpenInstancePublicPorts <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPorts"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPorts.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesOpenInstancePublicPorts(__scope: Construct, __resources: string[], __input: LightsailOpenInstancePublicPortsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPorts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPorts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPorts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOpenInstancePublicPortsRequest`](#aws-cdk-sdk.lightsail.LightsailOpenInstancePublicPortsRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPorts.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation)

---


### LightsailResponsesOpenInstancePublicPortsOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesOpenInstancePublicPortsOperation(__scope: Construct, __resources: string[], __input: LightsailOpenInstancePublicPortsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOpenInstancePublicPortsRequest`](#aws-cdk-sdk.lightsail.LightsailOpenInstancePublicPortsRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesOpenInstancePublicPortsOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesOpenInstancePublicPortsOperationLocation(__scope: Construct, __resources: string[], __input: LightsailOpenInstancePublicPortsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOpenInstancePublicPortsRequest`](#aws-cdk-sdk.lightsail.LightsailOpenInstancePublicPortsRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesOpenInstancePublicPortsOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesPeerVpc <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpc"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpc.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesPeerVpc(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpc.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpc.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpc.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation)

---


### LightsailResponsesPeerVpcOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesPeerVpcOperation(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesPeerVpcOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesPeerVpcOperationLocation(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPeerVpcOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesPutAlarm <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutAlarm"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutAlarm.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesPutAlarm(__scope: Construct, __resources: string[], __input: LightsailPutAlarmRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutAlarm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutAlarm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutAlarm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailPutAlarmRequest`](#aws-cdk-sdk.lightsail.LightsailPutAlarmRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutAlarm.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesPutInstancePublicPorts <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPorts"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPorts.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesPutInstancePublicPorts(__scope: Construct, __resources: string[], __input: LightsailPutInstancePublicPortsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPorts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPorts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPorts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailPutInstancePublicPortsRequest`](#aws-cdk-sdk.lightsail.LightsailPutInstancePublicPortsRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPorts.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation)

---


### LightsailResponsesPutInstancePublicPortsOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesPutInstancePublicPortsOperation(__scope: Construct, __resources: string[], __input: LightsailPutInstancePublicPortsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailPutInstancePublicPortsRequest`](#aws-cdk-sdk.lightsail.LightsailPutInstancePublicPortsRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesPutInstancePublicPortsOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesPutInstancePublicPortsOperationLocation(__scope: Construct, __resources: string[], __input: LightsailPutInstancePublicPortsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailPutInstancePublicPortsRequest`](#aws-cdk-sdk.lightsail.LightsailPutInstancePublicPortsRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesPutInstancePublicPortsOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesRebootInstance <a name="aws-cdk-sdk.lightsail.LightsailResponsesRebootInstance"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesRebootInstance.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesRebootInstance(__scope: Construct, __resources: string[], __input: LightsailRebootInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRebootInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRebootInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRebootInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRebootInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailRebootInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRebootInstance.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesRebootRelationalDatabase <a name="aws-cdk-sdk.lightsail.LightsailResponsesRebootRelationalDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesRebootRelationalDatabase.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesRebootRelationalDatabase(__scope: Construct, __resources: string[], __input: LightsailRebootRelationalDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRebootRelationalDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRebootRelationalDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRebootRelationalDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRebootRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailRebootRelationalDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRebootRelationalDatabase.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesRegisterContainerImage <a name="aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImage"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImage.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesRegisterContainerImage(__scope: Construct, __resources: string[], __input: LightsailRegisterContainerImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRegisterContainerImageRequest`](#aws-cdk-sdk.lightsail.LightsailRegisterContainerImageRequest)

---



#### Properties <a name="Properties"></a>

##### `containerImage`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImage.property.containerImage"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImageContainerImage`](#aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImageContainerImage)

---


### LightsailResponsesRegisterContainerImageContainerImage <a name="aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImageContainerImage"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImageContainerImage.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesRegisterContainerImageContainerImage(__scope: Construct, __resources: string[], __input: LightsailRegisterContainerImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImageContainerImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImageContainerImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImageContainerImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailRegisterContainerImageRequest`](#aws-cdk-sdk.lightsail.LightsailRegisterContainerImageRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImageContainerImage.property.createdAt"></a>

- *Type:* `string`

---

##### `digest`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImageContainerImage.property.digest"></a>

- *Type:* `string`

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesRegisterContainerImageContainerImage.property.image"></a>

- *Type:* `string`

---


### LightsailResponsesReleaseStaticIp <a name="aws-cdk-sdk.lightsail.LightsailResponsesReleaseStaticIp"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesReleaseStaticIp.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesReleaseStaticIp(__scope: Construct, __resources: string[], __input: LightsailReleaseStaticIpRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesReleaseStaticIp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesReleaseStaticIp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesReleaseStaticIp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailReleaseStaticIpRequest`](#aws-cdk-sdk.lightsail.LightsailReleaseStaticIpRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesReleaseStaticIp.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesResetDistributionCache <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCache"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCache.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesResetDistributionCache(__scope: Construct, __resources: string[], __input: LightsailResetDistributionCacheRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResetDistributionCacheRequest`](#aws-cdk-sdk.lightsail.LightsailResetDistributionCacheRequest)

---



#### Properties <a name="Properties"></a>

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCache.property.createTime"></a>

- *Type:* `string`

---

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCache.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCache.property.status"></a>

- *Type:* `string`

---


### LightsailResponsesResetDistributionCacheOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesResetDistributionCacheOperation(__scope: Construct, __resources: string[], __input: LightsailResetDistributionCacheRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResetDistributionCacheRequest`](#aws-cdk-sdk.lightsail.LightsailResetDistributionCacheRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesResetDistributionCacheOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesResetDistributionCacheOperationLocation(__scope: Construct, __resources: string[], __input: LightsailResetDistributionCacheRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResetDistributionCacheRequest`](#aws-cdk-sdk.lightsail.LightsailResetDistributionCacheRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesResetDistributionCacheOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesSendContactMethodVerification <a name="aws-cdk-sdk.lightsail.LightsailResponsesSendContactMethodVerification"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesSendContactMethodVerification.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesSendContactMethodVerification(__scope: Construct, __resources: string[], __input: LightsailSendContactMethodVerificationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesSendContactMethodVerification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesSendContactMethodVerification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesSendContactMethodVerification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailSendContactMethodVerificationRequest`](#aws-cdk-sdk.lightsail.LightsailSendContactMethodVerificationRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesSendContactMethodVerification.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesStartInstance <a name="aws-cdk-sdk.lightsail.LightsailResponsesStartInstance"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesStartInstance.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesStartInstance(__scope: Construct, __resources: string[], __input: LightsailStartInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStartInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStartInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStartInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailStartInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailStartInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStartInstance.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesStartRelationalDatabase <a name="aws-cdk-sdk.lightsail.LightsailResponsesStartRelationalDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesStartRelationalDatabase.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesStartRelationalDatabase(__scope: Construct, __resources: string[], __input: LightsailStartRelationalDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStartRelationalDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStartRelationalDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStartRelationalDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailStartRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailStartRelationalDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStartRelationalDatabase.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesStopInstance <a name="aws-cdk-sdk.lightsail.LightsailResponsesStopInstance"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesStopInstance.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesStopInstance(__scope: Construct, __resources: string[], __input: LightsailStopInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStopInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStopInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStopInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailStopInstanceRequest`](#aws-cdk-sdk.lightsail.LightsailStopInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStopInstance.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesStopRelationalDatabase <a name="aws-cdk-sdk.lightsail.LightsailResponsesStopRelationalDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesStopRelationalDatabase.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesStopRelationalDatabase(__scope: Construct, __resources: string[], __input: LightsailStopRelationalDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStopRelationalDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStopRelationalDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStopRelationalDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailStopRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailStopRelationalDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesStopRelationalDatabase.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesTagResource <a name="aws-cdk-sdk.lightsail.LightsailResponsesTagResource"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesTagResource.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesTagResource(__scope: Construct, __resources: string[], __input: LightsailTagResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesTagResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesTagResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesTagResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTagResourceRequest`](#aws-cdk-sdk.lightsail.LightsailTagResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesTagResource.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesTestAlarm <a name="aws-cdk-sdk.lightsail.LightsailResponsesTestAlarm"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesTestAlarm.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesTestAlarm(__scope: Construct, __resources: string[], __input: LightsailTestAlarmRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesTestAlarm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesTestAlarm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesTestAlarm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTestAlarmRequest`](#aws-cdk-sdk.lightsail.LightsailTestAlarmRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesTestAlarm.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesUnpeerVpc <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpc"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpc.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUnpeerVpc(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpc.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpc.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpc.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation)

---


### LightsailResponsesUnpeerVpcOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUnpeerVpcOperation(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesUnpeerVpcOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUnpeerVpcOperationLocation(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUnpeerVpcOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesUntagResource <a name="aws-cdk-sdk.lightsail.LightsailResponsesUntagResource"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUntagResource.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUntagResource(__scope: Construct, __resources: string[], __input: LightsailUntagResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUntagResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUntagResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUntagResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUntagResourceRequest`](#aws-cdk-sdk.lightsail.LightsailUntagResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUntagResource.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesUpdateContainerService <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerService"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerService.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateContainerService(__scope: Construct, __resources: string[], __input: LightsailUpdateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `containerService`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerService.property.containerService"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService`](#aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService)

---


### LightsailResponsesUpdateContainerServiceContainerService <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateContainerServiceContainerService(__scope: Construct, __resources: string[], __input: LightsailUpdateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.arn"></a>

- *Type:* `string`

---

##### `containerServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.containerServiceName"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.createdAt"></a>

- *Type:* `string`

---

##### `currentDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.currentDeployment"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment`](#aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment)

---

##### `isDisabled`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.isDisabled"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceLocation)

---

##### `nextDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.nextDeployment"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment`](#aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment)

---

##### `power`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.power"></a>

- *Type:* `string`

---

##### `powerId`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.powerId"></a>

- *Type:* `string`

---

##### `principalArn`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.principalArn"></a>

- *Type:* `string`

---

##### `privateDomainName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.privateDomainName"></a>

- *Type:* `string`

---

##### `publicDomainNames`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.publicDomainNames"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.resourceType"></a>

- *Type:* `string`

---

##### `scale`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.scale"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.tags"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailTag`](#aws-cdk-sdk.lightsail.LightsailTag)[]

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerService.property.url"></a>

- *Type:* `string`

---


### LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment(__scope: Construct, __resources: string[], __input: LightsailUpdateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `containers`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment.property.containers"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.lightsail.LightsailContainer`](#aws-cdk-sdk.lightsail.LightsailContainer)}

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment.property.createdAt"></a>

- *Type:* `string`

---

##### `publicEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment.property.publicEndpoint"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint`](#aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment.property.state"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment.property.version"></a>

- *Type:* `number`

---


### LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint(__scope: Construct, __resources: string[], __input: LightsailUpdateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint.property.containerName"></a>

- *Type:* `string`

---

##### `containerPort`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint.property.containerPort"></a>

- *Type:* `number`

---

##### `healthCheck`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck`](#aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck)

---


### LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck(__scope: Construct, __resources: string[], __input: LightsailUpdateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `healthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.healthyThreshold"></a>

- *Type:* `number`

---

##### `intervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.intervalSeconds"></a>

- *Type:* `number`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.path"></a>

- *Type:* `string`

---

##### `successCodes`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.successCodes"></a>

- *Type:* `string`

---

##### `timeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.timeoutSeconds"></a>

- *Type:* `number`

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck.property.unhealthyThreshold"></a>

- *Type:* `number`

---


### LightsailResponsesUpdateContainerServiceContainerServiceLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateContainerServiceContainerServiceLocation(__scope: Construct, __resources: string[], __input: LightsailUpdateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment(__scope: Construct, __resources: string[], __input: LightsailUpdateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `containers`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment.property.containers"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.lightsail.LightsailContainer`](#aws-cdk-sdk.lightsail.LightsailContainer)}

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment.property.createdAt"></a>

- *Type:* `string`

---

##### `publicEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment.property.publicEndpoint"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint`](#aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment.property.state"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment.property.version"></a>

- *Type:* `number`

---


### LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint(__scope: Construct, __resources: string[], __input: LightsailUpdateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint.property.containerName"></a>

- *Type:* `string`

---

##### `containerPort`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint.property.containerPort"></a>

- *Type:* `number`

---

##### `healthCheck`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck`](#aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck)

---


### LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck(__scope: Construct, __resources: string[], __input: LightsailUpdateContainerServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateContainerServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `healthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.property.healthyThreshold"></a>

- *Type:* `number`

---

##### `intervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.property.intervalSeconds"></a>

- *Type:* `number`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.property.path"></a>

- *Type:* `string`

---

##### `successCodes`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.property.successCodes"></a>

- *Type:* `string`

---

##### `timeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.property.timeoutSeconds"></a>

- *Type:* `number`

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck.property.unhealthyThreshold"></a>

- *Type:* `number`

---


### LightsailResponsesUpdateDistribution <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistribution"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistribution.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateDistribution(__scope: Construct, __resources: string[], __input: LightsailUpdateDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistribution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistribution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistribution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistribution.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation)

---


### LightsailResponsesUpdateDistributionBundle <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundle"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundle.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateDistributionBundle(__scope: Construct, __resources: string[], __input: LightsailUpdateDistributionBundleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateDistributionBundleRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateDistributionBundleRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundle.property.operation"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation`](#aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation)

---


### LightsailResponsesUpdateDistributionBundleOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateDistributionBundleOperation(__scope: Construct, __resources: string[], __input: LightsailUpdateDistributionBundleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateDistributionBundleRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateDistributionBundleRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesUpdateDistributionBundleOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateDistributionBundleOperationLocation(__scope: Construct, __resources: string[], __input: LightsailUpdateDistributionBundleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateDistributionBundleRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateDistributionBundleRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionBundleOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesUpdateDistributionOperation <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateDistributionOperation(__scope: Construct, __resources: string[], __input: LightsailUpdateDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.property.createdAt"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.property.errorDetails"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.property.id"></a>

- *Type:* `string`

---

##### `isTerminal`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.property.isTerminal"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.property.location"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperationLocation`](#aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperationLocation)

---

##### `operationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.property.operationDetails"></a>

- *Type:* `string`

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.property.operationType"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.property.status"></a>

- *Type:* `string`

---

##### `statusChangedAt`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperation.property.statusChangedAt"></a>

- *Type:* `string`

---


### LightsailResponsesUpdateDistributionOperationLocation <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperationLocation"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperationLocation.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateDistributionOperationLocation(__scope: Construct, __resources: string[], __input: LightsailUpdateDistributionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperationLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperationLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperationLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateDistributionRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateDistributionRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperationLocation.property.availabilityZone"></a>

- *Type:* `string`

---

##### `regionName`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDistributionOperationLocation.property.regionName"></a>

- *Type:* `string`

---


### LightsailResponsesUpdateDomainEntry <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDomainEntry"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDomainEntry.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateDomainEntry(__scope: Construct, __resources: string[], __input: LightsailUpdateDomainEntryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDomainEntry.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDomainEntry.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDomainEntry.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateDomainEntryRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateDomainEntryRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateDomainEntry.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesUpdateLoadBalancerAttribute <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateLoadBalancerAttribute"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateLoadBalancerAttribute.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateLoadBalancerAttribute(__scope: Construct, __resources: string[], __input: LightsailUpdateLoadBalancerAttributeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateLoadBalancerAttribute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateLoadBalancerAttribute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateLoadBalancerAttribute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateLoadBalancerAttributeRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateLoadBalancerAttributeRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateLoadBalancerAttribute.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesUpdateRelationalDatabase <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateRelationalDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateRelationalDatabase.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateRelationalDatabase(__scope: Construct, __resources: string[], __input: LightsailUpdateRelationalDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateRelationalDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateRelationalDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateRelationalDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateRelationalDatabase.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---


### LightsailResponsesUpdateRelationalDatabaseParameters <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateRelationalDatabaseParameters"></a>

#### Initializer <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateRelationalDatabaseParameters.Initializer"></a>

```typescript
import { lightsail } from 'aws-cdk-sdk'

new lightsail.LightsailResponsesUpdateRelationalDatabaseParameters(__scope: Construct, __resources: string[], __input: LightsailUpdateRelationalDatabaseParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateRelationalDatabaseParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateRelationalDatabaseParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateRelationalDatabaseParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseParametersRequest`](#aws-cdk-sdk.lightsail.LightsailUpdateRelationalDatabaseParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.lightsail.LightsailResponsesUpdateRelationalDatabaseParameters.property.operations"></a>

- *Type:* [`aws-cdk-sdk.lightsail.LightsailOperation`](#aws-cdk-sdk.lightsail.LightsailOperation)[]

---



