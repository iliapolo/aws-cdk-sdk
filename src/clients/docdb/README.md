# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DocDbClient <a name="aws-cdk-sdk.docdb.DocDbClient"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDbClient.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDbClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addTagsToResource` <a name="aws-cdk-sdk.docdb.DocDbClient.addTagsToResource"></a>

```typescript
public addTagsToResource(input: DocDbAddTagsToResourceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbAddTagsToResourceMessage`](#aws-cdk-sdk.docdb.DocDbAddTagsToResourceMessage)

---

##### `applyPendingMaintenanceAction` <a name="aws-cdk-sdk.docdb.DocDbClient.applyPendingMaintenanceAction"></a>

```typescript
public applyPendingMaintenanceAction(input: DocDbApplyPendingMaintenanceActionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbApplyPendingMaintenanceActionMessage`](#aws-cdk-sdk.docdb.DocDbApplyPendingMaintenanceActionMessage)

---

##### `copyDbClusterParameterGroup` <a name="aws-cdk-sdk.docdb.DocDbClient.copyDbClusterParameterGroup"></a>

```typescript
public copyDbClusterParameterGroup(input: DocDbCopyDbClusterParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCopyDbClusterParameterGroupMessage`](#aws-cdk-sdk.docdb.DocDbCopyDbClusterParameterGroupMessage)

---

##### `copyDbClusterSnapshot` <a name="aws-cdk-sdk.docdb.DocDbClient.copyDbClusterSnapshot"></a>

```typescript
public copyDbClusterSnapshot(input: DocDbCopyDbClusterSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCopyDbClusterSnapshotMessage`](#aws-cdk-sdk.docdb.DocDbCopyDbClusterSnapshotMessage)

---

##### `createDbCluster` <a name="aws-cdk-sdk.docdb.DocDbClient.createDbCluster"></a>

```typescript
public createDbCluster(input: DocDbCreateDbClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage)

---

##### `createDbClusterParameterGroup` <a name="aws-cdk-sdk.docdb.DocDbClient.createDbClusterParameterGroup"></a>

```typescript
public createDbClusterParameterGroup(input: DocDbCreateDbClusterParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbClusterParameterGroupMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbClusterParameterGroupMessage)

---

##### `createDbClusterSnapshot` <a name="aws-cdk-sdk.docdb.DocDbClient.createDbClusterSnapshot"></a>

```typescript
public createDbClusterSnapshot(input: DocDbCreateDbClusterSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbClusterSnapshotMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbClusterSnapshotMessage)

---

##### `createDbInstance` <a name="aws-cdk-sdk.docdb.DocDbClient.createDbInstance"></a>

```typescript
public createDbInstance(input: DocDbCreateDbInstanceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage)

---

##### `createDbSubnetGroup` <a name="aws-cdk-sdk.docdb.DocDbClient.createDbSubnetGroup"></a>

```typescript
public createDbSubnetGroup(input: DocDbCreateDbSubnetGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbSubnetGroupMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbSubnetGroupMessage)

---

##### `deleteDbCluster` <a name="aws-cdk-sdk.docdb.DocDbClient.deleteDbCluster"></a>

```typescript
public deleteDbCluster(input: DocDbDeleteDbClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDeleteDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbDeleteDbClusterMessage)

---

##### `deleteDbClusterParameterGroup` <a name="aws-cdk-sdk.docdb.DocDbClient.deleteDbClusterParameterGroup"></a>

```typescript
public deleteDbClusterParameterGroup(input: DocDbDeleteDbClusterParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDeleteDbClusterParameterGroupMessage`](#aws-cdk-sdk.docdb.DocDbDeleteDbClusterParameterGroupMessage)

---

##### `deleteDbClusterSnapshot` <a name="aws-cdk-sdk.docdb.DocDbClient.deleteDbClusterSnapshot"></a>

```typescript
public deleteDbClusterSnapshot(input: DocDbDeleteDbClusterSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDeleteDbClusterSnapshotMessage`](#aws-cdk-sdk.docdb.DocDbDeleteDbClusterSnapshotMessage)

---

##### `deleteDbInstance` <a name="aws-cdk-sdk.docdb.DocDbClient.deleteDbInstance"></a>

```typescript
public deleteDbInstance(input: DocDbDeleteDbInstanceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage)

---

##### `deleteDbSubnetGroup` <a name="aws-cdk-sdk.docdb.DocDbClient.deleteDbSubnetGroup"></a>

```typescript
public deleteDbSubnetGroup(input: DocDbDeleteDbSubnetGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDeleteDbSubnetGroupMessage`](#aws-cdk-sdk.docdb.DocDbDeleteDbSubnetGroupMessage)

---

##### `describeCertificates` <a name="aws-cdk-sdk.docdb.DocDbClient.describeCertificates"></a>

```typescript
public describeCertificates(input: DocDbDescribeCertificatesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeCertificatesMessage`](#aws-cdk-sdk.docdb.DocDbDescribeCertificatesMessage)

---

##### `describeDbClusterParameterGroups` <a name="aws-cdk-sdk.docdb.DocDbClient.describeDbClusterParameterGroups"></a>

```typescript
public describeDbClusterParameterGroups(input: DocDbDescribeDbClusterParameterGroupsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbClusterParameterGroupsMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbClusterParameterGroupsMessage)

---

##### `describeDbClusterParameters` <a name="aws-cdk-sdk.docdb.DocDbClient.describeDbClusterParameters"></a>

```typescript
public describeDbClusterParameters(input: DocDbDescribeDbClusterParametersMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbClusterParametersMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbClusterParametersMessage)

---

##### `describeDbClusters` <a name="aws-cdk-sdk.docdb.DocDbClient.describeDbClusters"></a>

```typescript
public describeDbClusters(input: DocDbDescribeDbClustersMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbClustersMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbClustersMessage)

---

##### `describeDbClusterSnapshotAttributes` <a name="aws-cdk-sdk.docdb.DocDbClient.describeDbClusterSnapshotAttributes"></a>

```typescript
public describeDbClusterSnapshotAttributes(input: DocDbDescribeDbClusterSnapshotAttributesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotAttributesMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotAttributesMessage)

---

##### `describeDbClusterSnapshots` <a name="aws-cdk-sdk.docdb.DocDbClient.describeDbClusterSnapshots"></a>

```typescript
public describeDbClusterSnapshots(input: DocDbDescribeDbClusterSnapshotsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotsMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotsMessage)

---

##### `describeDbEngineVersions` <a name="aws-cdk-sdk.docdb.DocDbClient.describeDbEngineVersions"></a>

```typescript
public describeDbEngineVersions(input: DocDbDescribeDbEngineVersionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbEngineVersionsMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbEngineVersionsMessage)

---

##### `describeDbInstances` <a name="aws-cdk-sdk.docdb.DocDbClient.describeDbInstances"></a>

```typescript
public describeDbInstances(input: DocDbDescribeDbInstancesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbInstancesMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbInstancesMessage)

---

##### `describeDbSubnetGroups` <a name="aws-cdk-sdk.docdb.DocDbClient.describeDbSubnetGroups"></a>

```typescript
public describeDbSubnetGroups(input: DocDbDescribeDbSubnetGroupsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbSubnetGroupsMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbSubnetGroupsMessage)

---

##### `describeEngineDefaultClusterParameters` <a name="aws-cdk-sdk.docdb.DocDbClient.describeEngineDefaultClusterParameters"></a>

```typescript
public describeEngineDefaultClusterParameters(input: DocDbDescribeEngineDefaultClusterParametersMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeEngineDefaultClusterParametersMessage`](#aws-cdk-sdk.docdb.DocDbDescribeEngineDefaultClusterParametersMessage)

---

##### `describeEventCategories` <a name="aws-cdk-sdk.docdb.DocDbClient.describeEventCategories"></a>

```typescript
public describeEventCategories(input: DocDbDescribeEventCategoriesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeEventCategoriesMessage`](#aws-cdk-sdk.docdb.DocDbDescribeEventCategoriesMessage)

---

##### `describeEvents` <a name="aws-cdk-sdk.docdb.DocDbClient.describeEvents"></a>

```typescript
public describeEvents(input: DocDbDescribeEventsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeEventsMessage`](#aws-cdk-sdk.docdb.DocDbDescribeEventsMessage)

---

##### `describeOrderableDbInstanceOptions` <a name="aws-cdk-sdk.docdb.DocDbClient.describeOrderableDbInstanceOptions"></a>

```typescript
public describeOrderableDbInstanceOptions(input: DocDbDescribeOrderableDbInstanceOptionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeOrderableDbInstanceOptionsMessage`](#aws-cdk-sdk.docdb.DocDbDescribeOrderableDbInstanceOptionsMessage)

---

##### `describePendingMaintenanceActions` <a name="aws-cdk-sdk.docdb.DocDbClient.describePendingMaintenanceActions"></a>

```typescript
public describePendingMaintenanceActions(input: DocDbDescribePendingMaintenanceActionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribePendingMaintenanceActionsMessage`](#aws-cdk-sdk.docdb.DocDbDescribePendingMaintenanceActionsMessage)

---

##### `failoverDbCluster` <a name="aws-cdk-sdk.docdb.DocDbClient.failoverDbCluster"></a>

```typescript
public failoverDbCluster(input: DocDbFailoverDbClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFailoverDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbFailoverDbClusterMessage)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.docdb.DocDbClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: DocDbListTagsForResourceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbListTagsForResourceMessage`](#aws-cdk-sdk.docdb.DocDbListTagsForResourceMessage)

---

##### `modifyDbCluster` <a name="aws-cdk-sdk.docdb.DocDbClient.modifyDbCluster"></a>

```typescript
public modifyDbCluster(input: DocDbModifyDbClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage)

---

##### `modifyDbClusterParameterGroup` <a name="aws-cdk-sdk.docdb.DocDbClient.modifyDbClusterParameterGroup"></a>

```typescript
public modifyDbClusterParameterGroup(input: DocDbModifyDbClusterParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbClusterParameterGroupMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbClusterParameterGroupMessage)

---

##### `modifyDbClusterSnapshotAttribute` <a name="aws-cdk-sdk.docdb.DocDbClient.modifyDbClusterSnapshotAttribute"></a>

```typescript
public modifyDbClusterSnapshotAttribute(input: DocDbModifyDbClusterSnapshotAttributeMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbClusterSnapshotAttributeMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbClusterSnapshotAttributeMessage)

---

##### `modifyDbInstance` <a name="aws-cdk-sdk.docdb.DocDbClient.modifyDbInstance"></a>

```typescript
public modifyDbInstance(input: DocDbModifyDbInstanceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage)

---

##### `modifyDbSubnetGroup` <a name="aws-cdk-sdk.docdb.DocDbClient.modifyDbSubnetGroup"></a>

```typescript
public modifyDbSubnetGroup(input: DocDbModifyDbSubnetGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbSubnetGroupMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbSubnetGroupMessage)

---

##### `rebootDbInstance` <a name="aws-cdk-sdk.docdb.DocDbClient.rebootDbInstance"></a>

```typescript
public rebootDbInstance(input: DocDbRebootDbInstanceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage)

---

##### `removeTagsFromResource` <a name="aws-cdk-sdk.docdb.DocDbClient.removeTagsFromResource"></a>

```typescript
public removeTagsFromResource(input: DocDbRemoveTagsFromResourceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbRemoveTagsFromResourceMessage`](#aws-cdk-sdk.docdb.DocDbRemoveTagsFromResourceMessage)

---

##### `resetDbClusterParameterGroup` <a name="aws-cdk-sdk.docdb.DocDbClient.resetDbClusterParameterGroup"></a>

```typescript
public resetDbClusterParameterGroup(input: DocDbResetDbClusterParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbResetDbClusterParameterGroupMessage`](#aws-cdk-sdk.docdb.DocDbResetDbClusterParameterGroupMessage)

---

##### `restoreDbClusterFromSnapshot` <a name="aws-cdk-sdk.docdb.DocDbClient.restoreDbClusterFromSnapshot"></a>

```typescript
public restoreDbClusterFromSnapshot(input: DocDbRestoreDbClusterFromSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage`](#aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage)

---

##### `restoreDbClusterToPointInTime` <a name="aws-cdk-sdk.docdb.DocDbClient.restoreDbClusterToPointInTime"></a>

```typescript
public restoreDbClusterToPointInTime(input: DocDbRestoreDbClusterToPointInTimeMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage`](#aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage)

---

##### `startDbCluster` <a name="aws-cdk-sdk.docdb.DocDbClient.startDbCluster"></a>

```typescript
public startDbCluster(input: DocDbStartDbClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbStartDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbStartDbClusterMessage)

---

##### `stopDbCluster` <a name="aws-cdk-sdk.docdb.DocDbClient.stopDbCluster"></a>

```typescript
public stopDbCluster(input: DocDbStopDbClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbStopDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbStopDbClusterMessage)

---




## Structs <a name="Structs"></a>

### DocDbAddTagsToResourceMessage <a name="aws-cdk-sdk.docdb.DocDbAddTagsToResourceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbAddTagsToResourceMessage: docdb.DocDbAddTagsToResourceMessage = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbAddTagsToResourceMessage.property.resourceName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbAddTagsToResourceMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbTag`](#aws-cdk-sdk.docdb.DocDbTag)[]

---

### DocDbApplyPendingMaintenanceActionMessage <a name="aws-cdk-sdk.docdb.DocDbApplyPendingMaintenanceActionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbApplyPendingMaintenanceActionMessage: docdb.DocDbApplyPendingMaintenanceActionMessage = { ... }
```

##### `applyAction`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbApplyPendingMaintenanceActionMessage.property.applyAction"></a>

- *Type:* `string`

---

##### `optInType`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbApplyPendingMaintenanceActionMessage.property.optInType"></a>

- *Type:* `string`

---

##### `resourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbApplyPendingMaintenanceActionMessage.property.resourceIdentifier"></a>

- *Type:* `string`

---

### DocDbApplyPendingMaintenanceActionResult <a name="aws-cdk-sdk.docdb.DocDbApplyPendingMaintenanceActionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbApplyPendingMaintenanceActionResult: docdb.DocDbApplyPendingMaintenanceActionResult = { ... }
```

##### `resourcePendingMaintenanceActions`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbApplyPendingMaintenanceActionResult.property.resourcePendingMaintenanceActions"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbResourcePendingMaintenanceActions`](#aws-cdk-sdk.docdb.DocDbResourcePendingMaintenanceActions)

---

### DocDbAvailabilityZone <a name="aws-cdk-sdk.docdb.DocDbAvailabilityZone"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbAvailabilityZone: docdb.DocDbAvailabilityZone = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbAvailabilityZone.property.name"></a>

- *Type:* `string`

---

### DocDbCertificate <a name="aws-cdk-sdk.docdb.DocDbCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCertificate: docdb.DocDbCertificate = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCertificate.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCertificate.property.certificateIdentifier"></a>

- *Type:* `string`

---

##### `certificateType`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCertificate.property.certificateType"></a>

- *Type:* `string`

---

##### `thumbprint`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCertificate.property.thumbprint"></a>

- *Type:* `string`

---

##### `validFrom`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCertificate.property.validFrom"></a>

- *Type:* `string`

---

##### `validTill`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCertificate.property.validTill"></a>

- *Type:* `string`

---

### DocDbCertificateMessage <a name="aws-cdk-sdk.docdb.DocDbCertificateMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCertificateMessage: docdb.DocDbCertificateMessage = { ... }
```

##### `certificates`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCertificateMessage.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCertificate`](#aws-cdk-sdk.docdb.DocDbCertificate)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCertificateMessage.property.marker"></a>

- *Type:* `string`

---

### DocDbCloudwatchLogsExportConfiguration <a name="aws-cdk-sdk.docdb.DocDbCloudwatchLogsExportConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCloudwatchLogsExportConfiguration: docdb.DocDbCloudwatchLogsExportConfiguration = { ... }
```

##### `disableLogTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCloudwatchLogsExportConfiguration.property.disableLogTypes"></a>

- *Type:* `string`[]

---

##### `enableLogTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCloudwatchLogsExportConfiguration.property.enableLogTypes"></a>

- *Type:* `string`[]

---

### DocDbCopyDbClusterParameterGroupMessage <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCopyDbClusterParameterGroupMessage: docdb.DocDbCopyDbClusterParameterGroupMessage = { ... }
```

##### `sourceDbClusterParameterGroupIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterParameterGroupMessage.property.sourceDbClusterParameterGroupIdentifier"></a>

- *Type:* `string`

---

##### `targetDbClusterParameterGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterParameterGroupMessage.property.targetDbClusterParameterGroupDescription"></a>

- *Type:* `string`

---

##### `targetDbClusterParameterGroupIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterParameterGroupMessage.property.targetDbClusterParameterGroupIdentifier"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterParameterGroupMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbTag`](#aws-cdk-sdk.docdb.DocDbTag)[]

---

### DocDbCopyDbClusterParameterGroupResult <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterParameterGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCopyDbClusterParameterGroupResult: docdb.DocDbCopyDbClusterParameterGroupResult = { ... }
```

##### `dbClusterParameterGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterParameterGroupResult.property.dbClusterParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterParameterGroup`](#aws-cdk-sdk.docdb.DocDbdbClusterParameterGroup)

---

### DocDbCopyDbClusterSnapshotMessage <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCopyDbClusterSnapshotMessage: docdb.DocDbCopyDbClusterSnapshotMessage = { ... }
```

##### `sourceDbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterSnapshotMessage.property.sourceDbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `targetDbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterSnapshotMessage.property.targetDbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `copyTags`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterSnapshotMessage.property.copyTags"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterSnapshotMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `preSignedUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterSnapshotMessage.property.preSignedUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterSnapshotMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbTag`](#aws-cdk-sdk.docdb.DocDbTag)[]

---

### DocDbCopyDbClusterSnapshotResult <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCopyDbClusterSnapshotResult: docdb.DocDbCopyDbClusterSnapshotResult = { ... }
```

##### `dbClusterSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCopyDbClusterSnapshotResult.property.dbClusterSnapshot"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterSnapshot`](#aws-cdk-sdk.docdb.DocDbdbClusterSnapshot)

---

### DocDbCreateDbClusterMessage <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCreateDbClusterMessage: docdb.DocDbCreateDbClusterMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.engine"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.masterUsername"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.enableCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `preSignedUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.preSignedUrl"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbTag`](#aws-cdk-sdk.docdb.DocDbTag)[]

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage.property.vpcSecurityGroupIds"></a>

- *Type:* `string`[]

---

### DocDbCreateDbClusterParameterGroupMessage <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCreateDbClusterParameterGroupMessage: docdb.DocDbCreateDbClusterParameterGroupMessage = { ... }
```

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterParameterGroupMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterParameterGroupMessage.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterParameterGroupMessage.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterParameterGroupMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbTag`](#aws-cdk-sdk.docdb.DocDbTag)[]

---

### DocDbCreateDbClusterParameterGroupResult <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterParameterGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCreateDbClusterParameterGroupResult: docdb.DocDbCreateDbClusterParameterGroupResult = { ... }
```

##### `dbClusterParameterGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterParameterGroupResult.property.dbClusterParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterParameterGroup`](#aws-cdk-sdk.docdb.DocDbdbClusterParameterGroup)

---

### DocDbCreateDbClusterResult <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCreateDbClusterResult: docdb.DocDbCreateDbClusterResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbCluster`](#aws-cdk-sdk.docdb.DocDbdbCluster)

---

### DocDbCreateDbClusterSnapshotMessage <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCreateDbClusterSnapshotMessage: docdb.DocDbCreateDbClusterSnapshotMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterSnapshotMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterSnapshotMessage.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterSnapshotMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbTag`](#aws-cdk-sdk.docdb.DocDbTag)[]

---

### DocDbCreateDbClusterSnapshotResult <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCreateDbClusterSnapshotResult: docdb.DocDbCreateDbClusterSnapshotResult = { ... }
```

##### `dbClusterSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbClusterSnapshotResult.property.dbClusterSnapshot"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterSnapshot`](#aws-cdk-sdk.docdb.DocDbdbClusterSnapshot)

---

### DocDbCreateDbInstanceMessage <a name="aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCreateDbInstanceMessage: docdb.DocDbCreateDbInstanceMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage.property.engine"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage.property.availabilityZone"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `promotionTier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage.property.promotionTier"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbTag`](#aws-cdk-sdk.docdb.DocDbTag)[]

---

### DocDbCreateDbInstanceResult <a name="aws-cdk-sdk.docdb.DocDbCreateDbInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCreateDbInstanceResult: docdb.DocDbCreateDbInstanceResult = { ... }
```

##### `dbInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbInstanceResult.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbInstance`](#aws-cdk-sdk.docdb.DocDbdbInstance)

---

### DocDbCreateDbSubnetGroupMessage <a name="aws-cdk-sdk.docdb.DocDbCreateDbSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCreateDbSubnetGroupMessage: docdb.DocDbCreateDbSubnetGroupMessage = { ... }
```

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbSubnetGroupMessage.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbSubnetGroupMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbSubnetGroupMessage.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbSubnetGroupMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbTag`](#aws-cdk-sdk.docdb.DocDbTag)[]

---

### DocDbCreateDbSubnetGroupResult <a name="aws-cdk-sdk.docdb.DocDbCreateDbSubnetGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbCreateDbSubnetGroupResult: docdb.DocDbCreateDbSubnetGroupResult = { ... }
```

##### `dbSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbCreateDbSubnetGroupResult.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbSubnetGroup`](#aws-cdk-sdk.docdb.DocDbdbSubnetGroup)

---

### DocDbdbCluster <a name="aws-cdk-sdk.docdb.DocDbdbCluster"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbCluster: docdb.DocDbdbCluster = { ... }
```

##### `associatedRoles`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterRole`](#aws-cdk-sdk.docdb.DocDbdbClusterRole)[]

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterMember`](#aws-cdk-sdk.docdb.DocDbdbClusterMember)[]

---

##### `dbClusterParameterGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership`](#aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership)[]

---

### DocDbdbClusterMember <a name="aws-cdk-sdk.docdb.DocDbdbClusterMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbClusterMember: docdb.DocDbdbClusterMember = { ... }
```

##### `dbClusterParameterGroupStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterMember.property.dbClusterParameterGroupStatus"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterMember.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `isClusterWriter`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterMember.property.isClusterWriter"></a>

- *Type:* `boolean`

---

##### `promotionTier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterMember.property.promotionTier"></a>

- *Type:* `number`

---

### DocDbdbClusterMessage <a name="aws-cdk-sdk.docdb.DocDbdbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbClusterMessage: docdb.DocDbdbClusterMessage = { ... }
```

##### `dbClusters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterMessage.property.dbClusters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbCluster`](#aws-cdk-sdk.docdb.DocDbdbCluster)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterMessage.property.marker"></a>

- *Type:* `string`

---

### DocDbdbClusterParameterGroup <a name="aws-cdk-sdk.docdb.DocDbdbClusterParameterGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbClusterParameterGroup: docdb.DocDbdbClusterParameterGroup = { ... }
```

##### `dbClusterParameterGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterParameterGroup.property.dbClusterParameterGroupArn"></a>

- *Type:* `string`

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterParameterGroup.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `dbParameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterParameterGroup.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterParameterGroup.property.description"></a>

- *Type:* `string`

---

### DocDbdbClusterParameterGroupDetails <a name="aws-cdk-sdk.docdb.DocDbdbClusterParameterGroupDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbClusterParameterGroupDetails: docdb.DocDbdbClusterParameterGroupDetails = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterParameterGroupDetails.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterParameterGroupDetails.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbParameter`](#aws-cdk-sdk.docdb.DocDbParameter)[]

---

### DocDbdbClusterParameterGroupNameMessage <a name="aws-cdk-sdk.docdb.DocDbdbClusterParameterGroupNameMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbClusterParameterGroupNameMessage: docdb.DocDbdbClusterParameterGroupNameMessage = { ... }
```

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterParameterGroupNameMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

### DocDbdbClusterParameterGroupsMessage <a name="aws-cdk-sdk.docdb.DocDbdbClusterParameterGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbClusterParameterGroupsMessage: docdb.DocDbdbClusterParameterGroupsMessage = { ... }
```

##### `dbClusterParameterGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterParameterGroupsMessage.property.dbClusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterParameterGroup`](#aws-cdk-sdk.docdb.DocDbdbClusterParameterGroup)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterParameterGroupsMessage.property.marker"></a>

- *Type:* `string`

---

### DocDbdbClusterRole <a name="aws-cdk-sdk.docdb.DocDbdbClusterRole"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbClusterRole: docdb.DocDbdbClusterRole = { ... }
```

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterRole.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterRole.property.status"></a>

- *Type:* `string`

---

### DocDbdbClusterSnapshot <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbClusterSnapshot: docdb.DocDbdbClusterSnapshot = { ... }
```

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `clusterCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotArn`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.dbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.engineVersion"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.masterUsername"></a>

- *Type:* `string`

---

##### `percentProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.percentProgress"></a>

- *Type:* `number`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.port"></a>

- *Type:* `number`

---

##### `snapshotCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceDbClusterSnapshotArn`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.sourceDbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshot.property.vpcId"></a>

- *Type:* `string`

---

### DocDbdbClusterSnapshotAttribute <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbClusterSnapshotAttribute: docdb.DocDbdbClusterSnapshotAttribute = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttribute.property.attributeName"></a>

- *Type:* `string`

---

##### `attributeValues`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttribute.property.attributeValues"></a>

- *Type:* `string`[]

---

### DocDbdbClusterSnapshotAttributesResult <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttributesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbClusterSnapshotAttributesResult: docdb.DocDbdbClusterSnapshotAttributesResult = { ... }
```

##### `dbClusterSnapshotAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttributesResult.property.dbClusterSnapshotAttributes"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttribute`](#aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttribute)[]

---

##### `dbClusterSnapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttributesResult.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

### DocDbdbClusterSnapshotMessage <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbClusterSnapshotMessage: docdb.DocDbdbClusterSnapshotMessage = { ... }
```

##### `dbClusterSnapshots`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshotMessage.property.dbClusterSnapshots"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterSnapshot`](#aws-cdk-sdk.docdb.DocDbdbClusterSnapshot)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbClusterSnapshotMessage.property.marker"></a>

- *Type:* `string`

---

### DocDbdbEngineVersion <a name="aws-cdk-sdk.docdb.DocDbdbEngineVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbEngineVersion: docdb.DocDbdbEngineVersion = { ... }
```

##### `dbEngineDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbEngineVersion.property.dbEngineDescription"></a>

- *Type:* `string`

---

##### `dbEngineVersionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbEngineVersion.property.dbEngineVersionDescription"></a>

- *Type:* `string`

---

##### `dbParameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbEngineVersion.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbEngineVersion.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbEngineVersion.property.engineVersion"></a>

- *Type:* `string`

---

##### `exportableLogTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbEngineVersion.property.exportableLogTypes"></a>

- *Type:* `string`[]

---

##### `supportsLogExportsToCloudwatchLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbEngineVersion.property.supportsLogExportsToCloudwatchLogs"></a>

- *Type:* `boolean`

---

##### `validUpgradeTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbEngineVersion.property.validUpgradeTarget"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbUpgradeTarget`](#aws-cdk-sdk.docdb.DocDbUpgradeTarget)[]

---

### DocDbdbEngineVersionMessage <a name="aws-cdk-sdk.docdb.DocDbdbEngineVersionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbEngineVersionMessage: docdb.DocDbdbEngineVersionMessage = { ... }
```

##### `dbEngineVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbEngineVersionMessage.property.dbEngineVersions"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbEngineVersion`](#aws-cdk-sdk.docdb.DocDbdbEngineVersion)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbEngineVersionMessage.property.marker"></a>

- *Type:* `string`

---

### DocDbdbInstance <a name="aws-cdk-sdk.docdb.DocDbdbInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbInstance: docdb.DocDbdbInstance = { ... }
```

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.dbInstanceArn"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.dbInstanceStatus"></a>

- *Type:* `string`

---

##### `dbiResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.dbiResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbSubnetGroup`](#aws-cdk-sdk.docdb.DocDbdbSubnetGroup)

---

##### `enabledCloudwatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbEndpoint`](#aws-cdk-sdk.docdb.DocDbEndpoint)

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `instanceCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `pendingModifiedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbPendingModifiedValues`](#aws-cdk-sdk.docdb.DocDbPendingModifiedValues)

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `promotionTier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.promotionTier"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `statusInfos`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.statusInfos"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbInstanceStatusInfo`](#aws-cdk-sdk.docdb.DocDbdbInstanceStatusInfo)[]

---

##### `storageEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstance.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership`](#aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership)[]

---

### DocDbdbInstanceMessage <a name="aws-cdk-sdk.docdb.DocDbdbInstanceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbInstanceMessage: docdb.DocDbdbInstanceMessage = { ... }
```

##### `dbInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstanceMessage.property.dbInstances"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbInstance`](#aws-cdk-sdk.docdb.DocDbdbInstance)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstanceMessage.property.marker"></a>

- *Type:* `string`

---

### DocDbdbInstanceStatusInfo <a name="aws-cdk-sdk.docdb.DocDbdbInstanceStatusInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbInstanceStatusInfo: docdb.DocDbdbInstanceStatusInfo = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstanceStatusInfo.property.message"></a>

- *Type:* `string`

---

##### `normal`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstanceStatusInfo.property.normal"></a>

- *Type:* `boolean`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstanceStatusInfo.property.status"></a>

- *Type:* `string`

---

##### `statusType`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbInstanceStatusInfo.property.statusType"></a>

- *Type:* `string`

---

### DocDbdbSubnetGroup <a name="aws-cdk-sdk.docdb.DocDbdbSubnetGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbSubnetGroup: docdb.DocDbdbSubnetGroup = { ... }
```

##### `dbSubnetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbSubnetGroup.property.dbSubnetGroupArn"></a>

- *Type:* `string`

---

##### `dbSubnetGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbSubnetGroup.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbSubnetGroup.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbSubnet`](#aws-cdk-sdk.docdb.DocDbSubnet)[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---

### DocDbdbSubnetGroupMessage <a name="aws-cdk-sdk.docdb.DocDbdbSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbdbSubnetGroupMessage: docdb.DocDbdbSubnetGroupMessage = { ... }
```

##### `dbSubnetGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbSubnetGroupMessage.property.dbSubnetGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbSubnetGroup`](#aws-cdk-sdk.docdb.DocDbdbSubnetGroup)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbdbSubnetGroupMessage.property.marker"></a>

- *Type:* `string`

---

### DocDbDeleteDbClusterMessage <a name="aws-cdk-sdk.docdb.DocDbDeleteDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDeleteDbClusterMessage: docdb.DocDbDeleteDbClusterMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbDeleteDbClusterMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `finalDbSnapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDeleteDbClusterMessage.property.finalDbSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `skipFinalSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDeleteDbClusterMessage.property.skipFinalSnapshot"></a>

- *Type:* `boolean`

---

### DocDbDeleteDbClusterParameterGroupMessage <a name="aws-cdk-sdk.docdb.DocDbDeleteDbClusterParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDeleteDbClusterParameterGroupMessage: docdb.DocDbDeleteDbClusterParameterGroupMessage = { ... }
```

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbDeleteDbClusterParameterGroupMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

### DocDbDeleteDbClusterResult <a name="aws-cdk-sdk.docdb.DocDbDeleteDbClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDeleteDbClusterResult: docdb.DocDbDeleteDbClusterResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDeleteDbClusterResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbCluster`](#aws-cdk-sdk.docdb.DocDbdbCluster)

---

### DocDbDeleteDbClusterSnapshotMessage <a name="aws-cdk-sdk.docdb.DocDbDeleteDbClusterSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDeleteDbClusterSnapshotMessage: docdb.DocDbDeleteDbClusterSnapshotMessage = { ... }
```

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbDeleteDbClusterSnapshotMessage.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

### DocDbDeleteDbClusterSnapshotResult <a name="aws-cdk-sdk.docdb.DocDbDeleteDbClusterSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDeleteDbClusterSnapshotResult: docdb.DocDbDeleteDbClusterSnapshotResult = { ... }
```

##### `dbClusterSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDeleteDbClusterSnapshotResult.property.dbClusterSnapshot"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterSnapshot`](#aws-cdk-sdk.docdb.DocDbdbClusterSnapshot)

---

### DocDbDeleteDbInstanceMessage <a name="aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDeleteDbInstanceMessage: docdb.DocDbDeleteDbInstanceMessage = { ... }
```

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

### DocDbDeleteDbInstanceResult <a name="aws-cdk-sdk.docdb.DocDbDeleteDbInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDeleteDbInstanceResult: docdb.DocDbDeleteDbInstanceResult = { ... }
```

##### `dbInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDeleteDbInstanceResult.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbInstance`](#aws-cdk-sdk.docdb.DocDbdbInstance)

---

### DocDbDeleteDbSubnetGroupMessage <a name="aws-cdk-sdk.docdb.DocDbDeleteDbSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDeleteDbSubnetGroupMessage: docdb.DocDbDeleteDbSubnetGroupMessage = { ... }
```

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbDeleteDbSubnetGroupMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

### DocDbDescribeCertificatesMessage <a name="aws-cdk-sdk.docdb.DocDbDescribeCertificatesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribeCertificatesMessage: docdb.DocDbDescribeCertificatesMessage = { ... }
```

##### `certificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeCertificatesMessage.property.certificateIdentifier"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeCertificatesMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFilter`](#aws-cdk-sdk.docdb.DocDbFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeCertificatesMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeCertificatesMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DocDbDescribeDbClusterParameterGroupsMessage <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterParameterGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribeDbClusterParameterGroupsMessage: docdb.DocDbDescribeDbClusterParameterGroupsMessage = { ... }
```

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterParameterGroupsMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterParameterGroupsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFilter`](#aws-cdk-sdk.docdb.DocDbFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterParameterGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterParameterGroupsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DocDbDescribeDbClusterParametersMessage <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterParametersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribeDbClusterParametersMessage: docdb.DocDbDescribeDbClusterParametersMessage = { ... }
```

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterParametersMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterParametersMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFilter`](#aws-cdk-sdk.docdb.DocDbFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterParametersMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterParametersMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterParametersMessage.property.source"></a>

- *Type:* `string`

---

### DocDbDescribeDbClustersMessage <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClustersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribeDbClustersMessage: docdb.DocDbDescribeDbClustersMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClustersMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClustersMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFilter`](#aws-cdk-sdk.docdb.DocDbFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClustersMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClustersMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DocDbDescribeDbClusterSnapshotAttributesMessage <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotAttributesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribeDbClusterSnapshotAttributesMessage: docdb.DocDbDescribeDbClusterSnapshotAttributesMessage = { ... }
```

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotAttributesMessage.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

### DocDbDescribeDbClusterSnapshotAttributesResult <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotAttributesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribeDbClusterSnapshotAttributesResult: docdb.DocDbDescribeDbClusterSnapshotAttributesResult = { ... }
```

##### `dbClusterSnapshotAttributesResult`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotAttributesResult.property.dbClusterSnapshotAttributesResult"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttributesResult`](#aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttributesResult)

---

### DocDbDescribeDbClusterSnapshotsMessage <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribeDbClusterSnapshotsMessage: docdb.DocDbDescribeDbClusterSnapshotsMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotsMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotsMessage.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFilter`](#aws-cdk-sdk.docdb.DocDbFilter)[]

---

##### `includePublic`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotsMessage.property.includePublic"></a>

- *Type:* `boolean`

---

##### `includeShared`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotsMessage.property.includeShared"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `snapshotType`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotsMessage.property.snapshotType"></a>

- *Type:* `string`

---

### DocDbDescribeDbEngineVersionsMessage <a name="aws-cdk-sdk.docdb.DocDbDescribeDbEngineVersionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribeDbEngineVersionsMessage: docdb.DocDbDescribeDbEngineVersionsMessage = { ... }
```

##### `dbParameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbEngineVersionsMessage.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `defaultOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbEngineVersionsMessage.property.defaultOnly"></a>

- *Type:* `boolean`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbEngineVersionsMessage.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbEngineVersionsMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbEngineVersionsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFilter`](#aws-cdk-sdk.docdb.DocDbFilter)[]

---

##### `listSupportedCharacterSets`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbEngineVersionsMessage.property.listSupportedCharacterSets"></a>

- *Type:* `boolean`

---

##### `listSupportedTimezones`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbEngineVersionsMessage.property.listSupportedTimezones"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbEngineVersionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbEngineVersionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DocDbDescribeDbInstancesMessage <a name="aws-cdk-sdk.docdb.DocDbDescribeDbInstancesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribeDbInstancesMessage: docdb.DocDbDescribeDbInstancesMessage = { ... }
```

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbInstancesMessage.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbInstancesMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFilter`](#aws-cdk-sdk.docdb.DocDbFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbInstancesMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbInstancesMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DocDbDescribeDbSubnetGroupsMessage <a name="aws-cdk-sdk.docdb.DocDbDescribeDbSubnetGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribeDbSubnetGroupsMessage: docdb.DocDbDescribeDbSubnetGroupsMessage = { ... }
```

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbSubnetGroupsMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbSubnetGroupsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFilter`](#aws-cdk-sdk.docdb.DocDbFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbSubnetGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeDbSubnetGroupsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DocDbDescribeEngineDefaultClusterParametersMessage <a name="aws-cdk-sdk.docdb.DocDbDescribeEngineDefaultClusterParametersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribeEngineDefaultClusterParametersMessage: docdb.DocDbDescribeEngineDefaultClusterParametersMessage = { ... }
```

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEngineDefaultClusterParametersMessage.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEngineDefaultClusterParametersMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFilter`](#aws-cdk-sdk.docdb.DocDbFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEngineDefaultClusterParametersMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEngineDefaultClusterParametersMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DocDbDescribeEngineDefaultClusterParametersResult <a name="aws-cdk-sdk.docdb.DocDbDescribeEngineDefaultClusterParametersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribeEngineDefaultClusterParametersResult: docdb.DocDbDescribeEngineDefaultClusterParametersResult = { ... }
```

##### `engineDefaults`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEngineDefaultClusterParametersResult.property.engineDefaults"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbEngineDefaults`](#aws-cdk-sdk.docdb.DocDbEngineDefaults)

---

### DocDbDescribeEventCategoriesMessage <a name="aws-cdk-sdk.docdb.DocDbDescribeEventCategoriesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribeEventCategoriesMessage: docdb.DocDbDescribeEventCategoriesMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEventCategoriesMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFilter`](#aws-cdk-sdk.docdb.DocDbFilter)[]

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEventCategoriesMessage.property.sourceType"></a>

- *Type:* `string`

---

### DocDbDescribeEventsMessage <a name="aws-cdk-sdk.docdb.DocDbDescribeEventsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribeEventsMessage: docdb.DocDbDescribeEventsMessage = { ... }
```

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEventsMessage.property.duration"></a>

- *Type:* `number`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEventsMessage.property.endTime"></a>

- *Type:* `string`

---

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEventsMessage.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEventsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFilter`](#aws-cdk-sdk.docdb.DocDbFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEventsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEventsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `sourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEventsMessage.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEventsMessage.property.sourceType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeEventsMessage.property.startTime"></a>

- *Type:* `string`

---

### DocDbDescribeOrderableDbInstanceOptionsMessage <a name="aws-cdk-sdk.docdb.DocDbDescribeOrderableDbInstanceOptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribeOrderableDbInstanceOptionsMessage: docdb.DocDbDescribeOrderableDbInstanceOptionsMessage = { ... }
```

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeOrderableDbInstanceOptionsMessage.property.engine"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeOrderableDbInstanceOptionsMessage.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeOrderableDbInstanceOptionsMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeOrderableDbInstanceOptionsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFilter`](#aws-cdk-sdk.docdb.DocDbFilter)[]

---

##### `licenseModel`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeOrderableDbInstanceOptionsMessage.property.licenseModel"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeOrderableDbInstanceOptionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeOrderableDbInstanceOptionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribeOrderableDbInstanceOptionsMessage.property.vpc"></a>

- *Type:* `boolean`

---

### DocDbDescribePendingMaintenanceActionsMessage <a name="aws-cdk-sdk.docdb.DocDbDescribePendingMaintenanceActionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbDescribePendingMaintenanceActionsMessage: docdb.DocDbDescribePendingMaintenanceActionsMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribePendingMaintenanceActionsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFilter`](#aws-cdk-sdk.docdb.DocDbFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribePendingMaintenanceActionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribePendingMaintenanceActionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbDescribePendingMaintenanceActionsMessage.property.resourceIdentifier"></a>

- *Type:* `string`

---

### DocDbEndpoint <a name="aws-cdk-sdk.docdb.DocDbEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbEndpoint: docdb.DocDbEndpoint = { ... }
```

##### `address`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEndpoint.property.address"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEndpoint.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEndpoint.property.port"></a>

- *Type:* `number`

---

### DocDbEngineDefaults <a name="aws-cdk-sdk.docdb.DocDbEngineDefaults"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbEngineDefaults: docdb.DocDbEngineDefaults = { ... }
```

##### `dbParameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEngineDefaults.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEngineDefaults.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEngineDefaults.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbParameter`](#aws-cdk-sdk.docdb.DocDbParameter)[]

---

### DocDbEvent <a name="aws-cdk-sdk.docdb.DocDbEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbEvent: docdb.DocDbEvent = { ... }
```

##### `date`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEvent.property.date"></a>

- *Type:* `string`

---

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEvent.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEvent.property.message"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEvent.property.sourceArn"></a>

- *Type:* `string`

---

##### `sourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEvent.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEvent.property.sourceType"></a>

- *Type:* `string`

---

### DocDbEventCategoriesMap <a name="aws-cdk-sdk.docdb.DocDbEventCategoriesMap"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbEventCategoriesMap: docdb.DocDbEventCategoriesMap = { ... }
```

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEventCategoriesMap.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEventCategoriesMap.property.sourceType"></a>

- *Type:* `string`

---

### DocDbEventCategoriesMessage <a name="aws-cdk-sdk.docdb.DocDbEventCategoriesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbEventCategoriesMessage: docdb.DocDbEventCategoriesMessage = { ... }
```

##### `eventCategoriesMapList`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEventCategoriesMessage.property.eventCategoriesMapList"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbEventCategoriesMap`](#aws-cdk-sdk.docdb.DocDbEventCategoriesMap)[]

---

### DocDbEventsMessage <a name="aws-cdk-sdk.docdb.DocDbEventsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbEventsMessage: docdb.DocDbEventsMessage = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEventsMessage.property.events"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbEvent`](#aws-cdk-sdk.docdb.DocDbEvent)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbEventsMessage.property.marker"></a>

- *Type:* `string`

---

### DocDbFailoverDbClusterMessage <a name="aws-cdk-sdk.docdb.DocDbFailoverDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbFailoverDbClusterMessage: docdb.DocDbFailoverDbClusterMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbFailoverDbClusterMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `targetDbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbFailoverDbClusterMessage.property.targetDbInstanceIdentifier"></a>

- *Type:* `string`

---

### DocDbFailoverDbClusterResult <a name="aws-cdk-sdk.docdb.DocDbFailoverDbClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbFailoverDbClusterResult: docdb.DocDbFailoverDbClusterResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbFailoverDbClusterResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbCluster`](#aws-cdk-sdk.docdb.DocDbdbCluster)

---

### DocDbFilter <a name="aws-cdk-sdk.docdb.DocDbFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbFilter: docdb.DocDbFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbFilter.property.values"></a>

- *Type:* `string`[]

---

### DocDbListTagsForResourceMessage <a name="aws-cdk-sdk.docdb.DocDbListTagsForResourceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbListTagsForResourceMessage: docdb.DocDbListTagsForResourceMessage = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbListTagsForResourceMessage.property.resourceName"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbListTagsForResourceMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFilter`](#aws-cdk-sdk.docdb.DocDbFilter)[]

---

### DocDbModifyDbClusterMessage <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbModifyDbClusterMessage: docdb.DocDbModifyDbClusterMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `applyImmediately`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage.property.applyImmediately"></a>

- *Type:* `boolean`

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `cloudwatchLogsExportConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage.property.cloudwatchLogsExportConfiguration"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCloudwatchLogsExportConfiguration`](#aws-cdk-sdk.docdb.DocDbCloudwatchLogsExportConfiguration)

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `newDbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage.property.newDbClusterIdentifier"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage.property.vpcSecurityGroupIds"></a>

- *Type:* `string`[]

---

### DocDbModifyDbClusterParameterGroupMessage <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbModifyDbClusterParameterGroupMessage: docdb.DocDbModifyDbClusterParameterGroupMessage = { ... }
```

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterParameterGroupMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterParameterGroupMessage.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbParameter`](#aws-cdk-sdk.docdb.DocDbParameter)[]

---

### DocDbModifyDbClusterResult <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbModifyDbClusterResult: docdb.DocDbModifyDbClusterResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbCluster`](#aws-cdk-sdk.docdb.DocDbdbCluster)

---

### DocDbModifyDbClusterSnapshotAttributeMessage <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterSnapshotAttributeMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbModifyDbClusterSnapshotAttributeMessage: docdb.DocDbModifyDbClusterSnapshotAttributeMessage = { ... }
```

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterSnapshotAttributeMessage.property.attributeName"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterSnapshotAttributeMessage.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `valuesToAdd`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterSnapshotAttributeMessage.property.valuesToAdd"></a>

- *Type:* `string`[]

---

##### `valuesToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterSnapshotAttributeMessage.property.valuesToRemove"></a>

- *Type:* `string`[]

---

### DocDbModifyDbClusterSnapshotAttributeResult <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterSnapshotAttributeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbModifyDbClusterSnapshotAttributeResult: docdb.DocDbModifyDbClusterSnapshotAttributeResult = { ... }
```

##### `dbClusterSnapshotAttributesResult`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbClusterSnapshotAttributeResult.property.dbClusterSnapshotAttributesResult"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttributesResult`](#aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttributesResult)

---

### DocDbModifyDbInstanceMessage <a name="aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbModifyDbInstanceMessage: docdb.DocDbModifyDbInstanceMessage = { ... }
```

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `applyImmediately`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage.property.applyImmediately"></a>

- *Type:* `boolean`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `newDbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage.property.newDbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `promotionTier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage.property.promotionTier"></a>

- *Type:* `number`

---

### DocDbModifyDbInstanceResult <a name="aws-cdk-sdk.docdb.DocDbModifyDbInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbModifyDbInstanceResult: docdb.DocDbModifyDbInstanceResult = { ... }
```

##### `dbInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbInstanceResult.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbInstance`](#aws-cdk-sdk.docdb.DocDbdbInstance)

---

### DocDbModifyDbSubnetGroupMessage <a name="aws-cdk-sdk.docdb.DocDbModifyDbSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbModifyDbSubnetGroupMessage: docdb.DocDbModifyDbSubnetGroupMessage = { ... }
```

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbSubnetGroupMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbSubnetGroupMessage.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `dbSubnetGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbSubnetGroupMessage.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

### DocDbModifyDbSubnetGroupResult <a name="aws-cdk-sdk.docdb.DocDbModifyDbSubnetGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbModifyDbSubnetGroupResult: docdb.DocDbModifyDbSubnetGroupResult = { ... }
```

##### `dbSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbModifyDbSubnetGroupResult.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbSubnetGroup`](#aws-cdk-sdk.docdb.DocDbdbSubnetGroup)

---

### DocDbOrderableDbInstanceOption <a name="aws-cdk-sdk.docdb.DocDbOrderableDbInstanceOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbOrderableDbInstanceOption: docdb.DocDbOrderableDbInstanceOption = { ... }
```

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbOrderableDbInstanceOption.property.availabilityZones"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbAvailabilityZone`](#aws-cdk-sdk.docdb.DocDbAvailabilityZone)[]

---

##### `dbInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbOrderableDbInstanceOption.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbOrderableDbInstanceOption.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbOrderableDbInstanceOption.property.engineVersion"></a>

- *Type:* `string`

---

##### `licenseModel`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbOrderableDbInstanceOption.property.licenseModel"></a>

- *Type:* `string`

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbOrderableDbInstanceOption.property.vpc"></a>

- *Type:* `boolean`

---

### DocDbOrderableDbInstanceOptionsMessage <a name="aws-cdk-sdk.docdb.DocDbOrderableDbInstanceOptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbOrderableDbInstanceOptionsMessage: docdb.DocDbOrderableDbInstanceOptionsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbOrderableDbInstanceOptionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `orderableDbInstanceOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbOrderableDbInstanceOptionsMessage.property.orderableDbInstanceOptions"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbOrderableDbInstanceOption`](#aws-cdk-sdk.docdb.DocDbOrderableDbInstanceOption)[]

---

### DocDbParameter <a name="aws-cdk-sdk.docdb.DocDbParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbParameter: docdb.DocDbParameter = { ... }
```

##### `allowedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbParameter.property.allowedValues"></a>

- *Type:* `string`

---

##### `applyMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbParameter.property.applyMethod"></a>

- *Type:* `string`

---

##### `applyType`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbParameter.property.applyType"></a>

- *Type:* `string`

---

##### `dataType`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbParameter.property.dataType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbParameter.property.description"></a>

- *Type:* `string`

---

##### `isModifiable`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbParameter.property.isModifiable"></a>

- *Type:* `boolean`

---

##### `minimumEngineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbParameter.property.minimumEngineVersion"></a>

- *Type:* `string`

---

##### `parameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbParameter.property.parameterName"></a>

- *Type:* `string`

---

##### `parameterValue`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbParameter.property.parameterValue"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbParameter.property.source"></a>

- *Type:* `string`

---

### DocDbPendingCloudwatchLogsExports <a name="aws-cdk-sdk.docdb.DocDbPendingCloudwatchLogsExports"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbPendingCloudwatchLogsExports: docdb.DocDbPendingCloudwatchLogsExports = { ... }
```

##### `logTypesToDisable`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingCloudwatchLogsExports.property.logTypesToDisable"></a>

- *Type:* `string`[]

---

##### `logTypesToEnable`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingCloudwatchLogsExports.property.logTypesToEnable"></a>

- *Type:* `string`[]

---

### DocDbPendingMaintenanceAction <a name="aws-cdk-sdk.docdb.DocDbPendingMaintenanceAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbPendingMaintenanceAction: docdb.DocDbPendingMaintenanceAction = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingMaintenanceAction.property.action"></a>

- *Type:* `string`

---

##### `autoAppliedAfterDate`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingMaintenanceAction.property.autoAppliedAfterDate"></a>

- *Type:* `string`

---

##### `currentApplyDate`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingMaintenanceAction.property.currentApplyDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingMaintenanceAction.property.description"></a>

- *Type:* `string`

---

##### `forcedApplyDate`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingMaintenanceAction.property.forcedApplyDate"></a>

- *Type:* `string`

---

##### `optInStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingMaintenanceAction.property.optInStatus"></a>

- *Type:* `string`

---

### DocDbPendingMaintenanceActionsMessage <a name="aws-cdk-sdk.docdb.DocDbPendingMaintenanceActionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbPendingMaintenanceActionsMessage: docdb.DocDbPendingMaintenanceActionsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingMaintenanceActionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `pendingMaintenanceActions`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingMaintenanceActionsMessage.property.pendingMaintenanceActions"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbResourcePendingMaintenanceActions`](#aws-cdk-sdk.docdb.DocDbResourcePendingMaintenanceActions)[]

---

### DocDbPendingModifiedValues <a name="aws-cdk-sdk.docdb.DocDbPendingModifiedValues"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbPendingModifiedValues: docdb.DocDbPendingModifiedValues = { ... }
```

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingModifiedValues.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingModifiedValues.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingModifiedValues.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingModifiedValues.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingModifiedValues.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingModifiedValues.property.iops"></a>

- *Type:* `number`

---

##### `licenseModel`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingModifiedValues.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingCloudwatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingModifiedValues.property.pendingCloudwatchLogsExports"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbPendingCloudwatchLogsExports`](#aws-cdk-sdk.docdb.DocDbPendingCloudwatchLogsExports)

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingModifiedValues.property.port"></a>

- *Type:* `number`

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbPendingModifiedValues.property.storageType"></a>

- *Type:* `string`

---

### DocDbRebootDbInstanceMessage <a name="aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbRebootDbInstanceMessage: docdb.DocDbRebootDbInstanceMessage = { ... }
```

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `forceFailover`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage.property.forceFailover"></a>

- *Type:* `boolean`

---

### DocDbRebootDbInstanceResult <a name="aws-cdk-sdk.docdb.DocDbRebootDbInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbRebootDbInstanceResult: docdb.DocDbRebootDbInstanceResult = { ... }
```

##### `dbInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRebootDbInstanceResult.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbInstance`](#aws-cdk-sdk.docdb.DocDbdbInstance)

---

### DocDbRemoveTagsFromResourceMessage <a name="aws-cdk-sdk.docdb.DocDbRemoveTagsFromResourceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbRemoveTagsFromResourceMessage: docdb.DocDbRemoveTagsFromResourceMessage = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbRemoveTagsFromResourceMessage.property.resourceName"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbRemoveTagsFromResourceMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

### DocDbResetDbClusterParameterGroupMessage <a name="aws-cdk-sdk.docdb.DocDbResetDbClusterParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbResetDbClusterParameterGroupMessage: docdb.DocDbResetDbClusterParameterGroupMessage = { ... }
```

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbResetDbClusterParameterGroupMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbResetDbClusterParameterGroupMessage.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbParameter`](#aws-cdk-sdk.docdb.DocDbParameter)[]

---

##### `resetAllParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbResetDbClusterParameterGroupMessage.property.resetAllParameters"></a>

- *Type:* `boolean`

---

### DocDbResourcePendingMaintenanceActions <a name="aws-cdk-sdk.docdb.DocDbResourcePendingMaintenanceActions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbResourcePendingMaintenanceActions: docdb.DocDbResourcePendingMaintenanceActions = { ... }
```

##### `pendingMaintenanceActionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbResourcePendingMaintenanceActions.property.pendingMaintenanceActionDetails"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbPendingMaintenanceAction`](#aws-cdk-sdk.docdb.DocDbPendingMaintenanceAction)[]

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbResourcePendingMaintenanceActions.property.resourceIdentifier"></a>

- *Type:* `string`

---

### DocDbRestoreDbClusterFromSnapshotMessage <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbRestoreDbClusterFromSnapshotMessage: docdb.DocDbRestoreDbClusterFromSnapshotMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage.property.engine"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage.property.enableCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage.property.port"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbTag`](#aws-cdk-sdk.docdb.DocDbTag)[]

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage.property.vpcSecurityGroupIds"></a>

- *Type:* `string`[]

---

### DocDbRestoreDbClusterFromSnapshotResult <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbRestoreDbClusterFromSnapshotResult: docdb.DocDbRestoreDbClusterFromSnapshotResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbCluster`](#aws-cdk-sdk.docdb.DocDbdbCluster)

---

### DocDbRestoreDbClusterToPointInTimeMessage <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbRestoreDbClusterToPointInTimeMessage: docdb.DocDbRestoreDbClusterToPointInTimeMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `sourceDbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage.property.sourceDbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage.property.enableCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage.property.port"></a>

- *Type:* `number`

---

##### `restoreToTime`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage.property.restoreToTime"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbTag`](#aws-cdk-sdk.docdb.DocDbTag)[]

---

##### `useLatestRestorableTime`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage.property.useLatestRestorableTime"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage.property.vpcSecurityGroupIds"></a>

- *Type:* `string`[]

---

### DocDbRestoreDbClusterToPointInTimeResult <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbRestoreDbClusterToPointInTimeResult: docdb.DocDbRestoreDbClusterToPointInTimeResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbCluster`](#aws-cdk-sdk.docdb.DocDbdbCluster)

---

### DocDbStartDbClusterMessage <a name="aws-cdk-sdk.docdb.DocDbStartDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbStartDbClusterMessage: docdb.DocDbStartDbClusterMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbStartDbClusterMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

### DocDbStartDbClusterResult <a name="aws-cdk-sdk.docdb.DocDbStartDbClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbStartDbClusterResult: docdb.DocDbStartDbClusterResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbStartDbClusterResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbCluster`](#aws-cdk-sdk.docdb.DocDbdbCluster)

---

### DocDbStopDbClusterMessage <a name="aws-cdk-sdk.docdb.DocDbStopDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbStopDbClusterMessage: docdb.DocDbStopDbClusterMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDbStopDbClusterMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

### DocDbStopDbClusterResult <a name="aws-cdk-sdk.docdb.DocDbStopDbClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbStopDbClusterResult: docdb.DocDbStopDbClusterResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbStopDbClusterResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbCluster`](#aws-cdk-sdk.docdb.DocDbdbCluster)

---

### DocDbSubnet <a name="aws-cdk-sdk.docdb.DocDbSubnet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbSubnet: docdb.DocDbSubnet = { ... }
```

##### `subnetAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbSubnet.property.subnetAvailabilityZone"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbAvailabilityZone`](#aws-cdk-sdk.docdb.DocDbAvailabilityZone)

---

##### `subnetIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbSubnet.property.subnetIdentifier"></a>

- *Type:* `string`

---

##### `subnetStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbSubnet.property.subnetStatus"></a>

- *Type:* `string`

---

### DocDbTag <a name="aws-cdk-sdk.docdb.DocDbTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbTag: docdb.DocDbTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbTag.property.value"></a>

- *Type:* `string`

---

### DocDbTagListMessage <a name="aws-cdk-sdk.docdb.DocDbTagListMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbTagListMessage: docdb.DocDbTagListMessage = { ... }
```

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbTagListMessage.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbTag`](#aws-cdk-sdk.docdb.DocDbTag)[]

---

### DocDbUpgradeTarget <a name="aws-cdk-sdk.docdb.DocDbUpgradeTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbUpgradeTarget: docdb.DocDbUpgradeTarget = { ... }
```

##### `autoUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbUpgradeTarget.property.autoUpgrade"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbUpgradeTarget.property.description"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbUpgradeTarget.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbUpgradeTarget.property.engineVersion"></a>

- *Type:* `string`

---

##### `isMajorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbUpgradeTarget.property.isMajorVersionUpgrade"></a>

- *Type:* `boolean`

---

### DocDbVpcSecurityGroupMembership <a name="aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

const docDbVpcSecurityGroupMembership: docdb.DocDbVpcSecurityGroupMembership = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership.property.status"></a>

- *Type:* `string`

---

##### `vpcSecurityGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership.property.vpcSecurityGroupId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### DocDBResponsesApplyPendingMaintenanceAction <a name="aws-cdk-sdk.docdb.DocDBResponsesApplyPendingMaintenanceAction"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesApplyPendingMaintenanceAction.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesApplyPendingMaintenanceAction(__scope: Construct, __resources: string[], __input: DocDbApplyPendingMaintenanceActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesApplyPendingMaintenanceAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesApplyPendingMaintenanceAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesApplyPendingMaintenanceAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbApplyPendingMaintenanceActionMessage`](#aws-cdk-sdk.docdb.DocDbApplyPendingMaintenanceActionMessage)

---



#### Properties <a name="Properties"></a>

##### `resourcePendingMaintenanceActions`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesApplyPendingMaintenanceAction.property.resourcePendingMaintenanceActions"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions`](#aws-cdk-sdk.docdb.DocDBResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions)

---


### DocDBResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions <a name="aws-cdk-sdk.docdb.DocDBResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions(__scope: Construct, __resources: string[], __input: DocDbApplyPendingMaintenanceActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbApplyPendingMaintenanceActionMessage`](#aws-cdk-sdk.docdb.DocDbApplyPendingMaintenanceActionMessage)

---



#### Properties <a name="Properties"></a>

##### `pendingMaintenanceActionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.property.pendingMaintenanceActionDetails"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbPendingMaintenanceAction`](#aws-cdk-sdk.docdb.DocDbPendingMaintenanceAction)[]

---

##### `resourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.property.resourceIdentifier"></a>

- *Type:* `string`

---


### DocDBResponsesCopyDbClusterParameterGroup <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroup.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCopyDbClusterParameterGroup(__scope: Construct, __resources: string[], __input: DocDbCopyDbClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCopyDbClusterParameterGroupMessage`](#aws-cdk-sdk.docdb.DocDbCopyDbClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroup.property.dbClusterParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup`](#aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup)

---


### DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup(__scope: Construct, __resources: string[], __input: DocDbCopyDbClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCopyDbClusterParameterGroupMessage`](#aws-cdk-sdk.docdb.DocDbCopyDbClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterParameterGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.property.dbClusterParameterGroupArn"></a>

- *Type:* `string`

---

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.property.description"></a>

- *Type:* `string`

---


### DocDBResponsesCopyDbClusterSnapshot <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshot.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCopyDbClusterSnapshot(__scope: Construct, __resources: string[], __input: DocDbCopyDbClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCopyDbClusterSnapshotMessage`](#aws-cdk-sdk.docdb.DocDbCopyDbClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshot`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshot.property.dbClusterSnapshot"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot`](#aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot)

---


### DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot(__scope: Construct, __resources: string[], __input: DocDbCopyDbClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCopyDbClusterSnapshotMessage`](#aws-cdk-sdk.docdb.DocDbCopyDbClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.dbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.engineVersion"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.masterUsername"></a>

- *Type:* `string`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.percentProgress"></a>

- *Type:* `number`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.port"></a>

- *Type:* `number`

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceDbClusterSnapshotArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.sourceDbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.vpcId"></a>

- *Type:* `string`

---


### DocDBResponsesCreateDbCluster <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbCluster.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCreateDbCluster(__scope: Construct, __resources: string[], __input: DocDbCreateDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbCluster.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster`](#aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster)

---


### DocDBResponsesCreateDbClusterDbCluster <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCreateDbClusterDbCluster(__scope: Construct, __resources: string[], __input: DocDbCreateDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterRole`](#aws-cdk-sdk.docdb.DocDbdbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterMember`](#aws-cdk-sdk.docdb.DocDbdbClusterMember)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership`](#aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership)[]

---


### DocDBResponsesCreateDbClusterParameterGroup <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroup.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCreateDbClusterParameterGroup(__scope: Construct, __resources: string[], __input: DocDbCreateDbClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbClusterParameterGroupMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroup.property.dbClusterParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup`](#aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup)

---


### DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup(__scope: Construct, __resources: string[], __input: DocDbCreateDbClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbClusterParameterGroupMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterParameterGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.property.dbClusterParameterGroupArn"></a>

- *Type:* `string`

---

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.property.description"></a>

- *Type:* `string`

---


### DocDBResponsesCreateDbClusterSnapshot <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshot.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCreateDbClusterSnapshot(__scope: Construct, __resources: string[], __input: DocDbCreateDbClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbClusterSnapshotMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshot`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshot.property.dbClusterSnapshot"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot`](#aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot)

---


### DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot(__scope: Construct, __resources: string[], __input: DocDbCreateDbClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbClusterSnapshotMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.dbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.engineVersion"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.masterUsername"></a>

- *Type:* `string`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.percentProgress"></a>

- *Type:* `number`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.port"></a>

- *Type:* `number`

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceDbClusterSnapshotArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.sourceDbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.vpcId"></a>

- *Type:* `string`

---


### DocDBResponsesCreateDbInstance <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstance.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCreateDbInstance(__scope: Construct, __resources: string[], __input: DocDbCreateDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbInstance`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstance.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance`](#aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance)

---


### DocDBResponsesCreateDbInstanceDbInstance <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCreateDbInstanceDbInstance(__scope: Construct, __resources: string[], __input: DocDbCreateDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.dbInstanceArn"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.dbInstanceStatus"></a>

- *Type:* `string`

---

##### `dbiResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.dbiResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup`](#aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup)

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceEndpoint`](#aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceEndpoint)

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `instanceCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues`](#aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues)

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `promotionTier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.promotionTier"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `statusInfos`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.statusInfos"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbInstanceStatusInfo`](#aws-cdk-sdk.docdb.DocDbdbInstanceStatusInfo)[]

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstance.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership`](#aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership)[]

---


### DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup(__scope: Construct, __resources: string[], __input: DocDbCreateDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupArn"></a>

- *Type:* `string`

---

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbSubnet`](#aws-cdk-sdk.docdb.DocDbSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### DocDBResponsesCreateDbInstanceDbInstanceEndpoint <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceEndpoint.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCreateDbInstanceDbInstanceEndpoint(__scope: Construct, __resources: string[], __input: DocDbCreateDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceEndpoint.property.address"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceEndpoint.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstanceEndpoint.property.port"></a>

- *Type:* `number`

---


### DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues(__scope: Construct, __resources: string[], __input: DocDbCreateDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.iops"></a>

- *Type:* `number`

---

##### `licenseModel`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.pendingCloudwatchLogsExports"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports`](#aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports)

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.port"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.storageType"></a>

- *Type:* `string`

---


### DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(__scope: Construct, __resources: string[], __input: DocDbCreateDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `logTypesToDisable`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToDisable"></a>

- *Type:* `string`[]

---

##### `logTypesToEnable`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToEnable"></a>

- *Type:* `string`[]

---


### DocDBResponsesCreateDbSubnetGroup <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroup.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCreateDbSubnetGroup(__scope: Construct, __resources: string[], __input: DocDbCreateDbSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbSubnetGroupMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroup.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroupDbSubnetGroup`](#aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroupDbSubnetGroup)

---


### DocDBResponsesCreateDbSubnetGroupDbSubnetGroup <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroupDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroupDbSubnetGroup.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesCreateDbSubnetGroupDbSubnetGroup(__scope: Construct, __resources: string[], __input: DocDbCreateDbSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroupDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroupDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroupDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCreateDbSubnetGroupMessage`](#aws-cdk-sdk.docdb.DocDbCreateDbSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroupDbSubnetGroup.property.dbSubnetGroupArn"></a>

- *Type:* `string`

---

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroupDbSubnetGroup.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroupDbSubnetGroup.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroupDbSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroupDbSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbSubnet`](#aws-cdk-sdk.docdb.DocDbSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesCreateDbSubnetGroupDbSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### DocDBResponsesDeleteDbCluster <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbCluster.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDeleteDbCluster(__scope: Construct, __resources: string[], __input: DocDbDeleteDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDeleteDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbDeleteDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbCluster.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster`](#aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster)

---


### DocDBResponsesDeleteDbClusterDbCluster <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDeleteDbClusterDbCluster(__scope: Construct, __resources: string[], __input: DocDbDeleteDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDeleteDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbDeleteDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterRole`](#aws-cdk-sdk.docdb.DocDbdbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterMember`](#aws-cdk-sdk.docdb.DocDbdbClusterMember)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership`](#aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership)[]

---


### DocDBResponsesDeleteDbClusterSnapshot <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshot.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDeleteDbClusterSnapshot(__scope: Construct, __resources: string[], __input: DocDbDeleteDbClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDeleteDbClusterSnapshotMessage`](#aws-cdk-sdk.docdb.DocDbDeleteDbClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshot`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshot.property.dbClusterSnapshot"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot`](#aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot)

---


### DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot(__scope: Construct, __resources: string[], __input: DocDbDeleteDbClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDeleteDbClusterSnapshotMessage`](#aws-cdk-sdk.docdb.DocDbDeleteDbClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.dbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.engineVersion"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.masterUsername"></a>

- *Type:* `string`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.percentProgress"></a>

- *Type:* `number`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.port"></a>

- *Type:* `number`

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceDbClusterSnapshotArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.sourceDbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.vpcId"></a>

- *Type:* `string`

---


### DocDBResponsesDeleteDbInstance <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstance.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDeleteDbInstance(__scope: Construct, __resources: string[], __input: DocDbDeleteDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbInstance`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstance.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance`](#aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance)

---


### DocDBResponsesDeleteDbInstanceDbInstance <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDeleteDbInstanceDbInstance(__scope: Construct, __resources: string[], __input: DocDbDeleteDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.dbInstanceArn"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.dbInstanceStatus"></a>

- *Type:* `string`

---

##### `dbiResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.dbiResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup`](#aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup)

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceEndpoint`](#aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceEndpoint)

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `instanceCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues`](#aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues)

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `promotionTier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.promotionTier"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `statusInfos`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.statusInfos"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbInstanceStatusInfo`](#aws-cdk-sdk.docdb.DocDbdbInstanceStatusInfo)[]

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstance.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership`](#aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership)[]

---


### DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup(__scope: Construct, __resources: string[], __input: DocDbDeleteDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupArn"></a>

- *Type:* `string`

---

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbSubnet`](#aws-cdk-sdk.docdb.DocDbSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### DocDBResponsesDeleteDbInstanceDbInstanceEndpoint <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceEndpoint.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDeleteDbInstanceDbInstanceEndpoint(__scope: Construct, __resources: string[], __input: DocDbDeleteDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceEndpoint.property.address"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceEndpoint.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstanceEndpoint.property.port"></a>

- *Type:* `number`

---


### DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues(__scope: Construct, __resources: string[], __input: DocDbDeleteDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.iops"></a>

- *Type:* `number`

---

##### `licenseModel`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.pendingCloudwatchLogsExports"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports`](#aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports)

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.port"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.storageType"></a>

- *Type:* `string`

---


### DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(__scope: Construct, __resources: string[], __input: DocDbDeleteDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbDeleteDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `logTypesToDisable`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToDisable"></a>

- *Type:* `string`[]

---

##### `logTypesToEnable`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToEnable"></a>

- *Type:* `string`[]

---


### DocDBResponsesDescribeCertificates <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeCertificates"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeCertificates.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribeCertificates(__scope: Construct, __resources: string[], __input: DocDbDescribeCertificatesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeCertificates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeCertificates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeCertificates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeCertificatesMessage`](#aws-cdk-sdk.docdb.DocDbDescribeCertificatesMessage)

---



#### Properties <a name="Properties"></a>

##### `certificates`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeCertificates.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbCertificate`](#aws-cdk-sdk.docdb.DocDbCertificate)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeCertificates.property.marker"></a>

- *Type:* `string`

---


### DocDBResponsesDescribeDbClusterParameterGroups <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterParameterGroups"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterParameterGroups.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribeDbClusterParameterGroups(__scope: Construct, __resources: string[], __input: DocDbDescribeDbClusterParameterGroupsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterParameterGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterParameterGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterParameterGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbClusterParameterGroupsMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbClusterParameterGroupsMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterParameterGroups.property.dbClusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterParameterGroup`](#aws-cdk-sdk.docdb.DocDbdbClusterParameterGroup)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterParameterGroups.property.marker"></a>

- *Type:* `string`

---


### DocDBResponsesDescribeDbClusterParameters <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterParameters"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterParameters.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribeDbClusterParameters(__scope: Construct, __resources: string[], __input: DocDbDescribeDbClusterParametersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbClusterParametersMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbClusterParametersMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterParameters.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterParameters.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbParameter`](#aws-cdk-sdk.docdb.DocDbParameter)[]

---


### DocDBResponsesDescribeDbClusters <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusters"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusters.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribeDbClusters(__scope: Construct, __resources: string[], __input: DocDbDescribeDbClustersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbClustersMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbClustersMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusters`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusters.property.dbClusters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbCluster`](#aws-cdk-sdk.docdb.DocDbdbCluster)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusters.property.marker"></a>

- *Type:* `string`

---


### DocDBResponsesDescribeDbClusterSnapshotAttributes <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshotAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshotAttributes.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribeDbClusterSnapshotAttributes(__scope: Construct, __resources: string[], __input: DocDbDescribeDbClusterSnapshotAttributesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshotAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshotAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshotAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotAttributesMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotAttributesMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshotAttributesResult`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshotAttributes.property.dbClusterSnapshotAttributesResult"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult`](#aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult)

---


### DocDBResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult(__scope: Construct, __resources: string[], __input: DocDbDescribeDbClusterSnapshotAttributesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotAttributesMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotAttributesMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshotAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult.property.dbClusterSnapshotAttributes"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttribute`](#aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttribute)[]

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---


### DocDBResponsesDescribeDbClusterSnapshots <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshots"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshots.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribeDbClusterSnapshots(__scope: Construct, __resources: string[], __input: DocDbDescribeDbClusterSnapshotsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshots.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshots.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshots.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotsMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbClusterSnapshotsMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshots`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshots.property.dbClusterSnapshots"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterSnapshot`](#aws-cdk-sdk.docdb.DocDbdbClusterSnapshot)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbClusterSnapshots.property.marker"></a>

- *Type:* `string`

---


### DocDBResponsesDescribeDbEngineVersions <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbEngineVersions"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbEngineVersions.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribeDbEngineVersions(__scope: Construct, __resources: string[], __input: DocDbDescribeDbEngineVersionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbEngineVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbEngineVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbEngineVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbEngineVersionsMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbEngineVersionsMessage)

---



#### Properties <a name="Properties"></a>

##### `dbEngineVersions`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbEngineVersions.property.dbEngineVersions"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbEngineVersion`](#aws-cdk-sdk.docdb.DocDbdbEngineVersion)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbEngineVersions.property.marker"></a>

- *Type:* `string`

---


### DocDBResponsesDescribeDbInstances <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbInstances"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbInstances.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribeDbInstances(__scope: Construct, __resources: string[], __input: DocDbDescribeDbInstancesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbInstancesMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbInstancesMessage)

---



#### Properties <a name="Properties"></a>

##### `dbInstances`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbInstances.property.dbInstances"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbInstance`](#aws-cdk-sdk.docdb.DocDbdbInstance)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbInstances.property.marker"></a>

- *Type:* `string`

---


### DocDBResponsesDescribeDbSubnetGroups <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbSubnetGroups"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbSubnetGroups.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribeDbSubnetGroups(__scope: Construct, __resources: string[], __input: DocDbDescribeDbSubnetGroupsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbSubnetGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbSubnetGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbSubnetGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeDbSubnetGroupsMessage`](#aws-cdk-sdk.docdb.DocDbDescribeDbSubnetGroupsMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroups`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbSubnetGroups.property.dbSubnetGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbSubnetGroup`](#aws-cdk-sdk.docdb.DocDbdbSubnetGroup)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeDbSubnetGroups.property.marker"></a>

- *Type:* `string`

---


### DocDBResponsesDescribeEngineDefaultClusterParameters <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParameters"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParameters.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribeEngineDefaultClusterParameters(__scope: Construct, __resources: string[], __input: DocDbDescribeEngineDefaultClusterParametersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeEngineDefaultClusterParametersMessage`](#aws-cdk-sdk.docdb.DocDbDescribeEngineDefaultClusterParametersMessage)

---



#### Properties <a name="Properties"></a>

##### `engineDefaults`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParameters.property.engineDefaults"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParametersEngineDefaults`](#aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParametersEngineDefaults)

---


### DocDBResponsesDescribeEngineDefaultClusterParametersEngineDefaults <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParametersEngineDefaults"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParametersEngineDefaults.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribeEngineDefaultClusterParametersEngineDefaults(__scope: Construct, __resources: string[], __input: DocDbDescribeEngineDefaultClusterParametersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParametersEngineDefaults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParametersEngineDefaults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParametersEngineDefaults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeEngineDefaultClusterParametersMessage`](#aws-cdk-sdk.docdb.DocDbDescribeEngineDefaultClusterParametersMessage)

---



#### Properties <a name="Properties"></a>

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParametersEngineDefaults.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParametersEngineDefaults.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEngineDefaultClusterParametersEngineDefaults.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbParameter`](#aws-cdk-sdk.docdb.DocDbParameter)[]

---


### DocDBResponsesDescribeEventCategories <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEventCategories"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEventCategories.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribeEventCategories(__scope: Construct, __resources: string[], __input: DocDbDescribeEventCategoriesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEventCategories.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEventCategories.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEventCategories.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeEventCategoriesMessage`](#aws-cdk-sdk.docdb.DocDbDescribeEventCategoriesMessage)

---



#### Properties <a name="Properties"></a>

##### `eventCategoriesMapList`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEventCategories.property.eventCategoriesMapList"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbEventCategoriesMap`](#aws-cdk-sdk.docdb.DocDbEventCategoriesMap)[]

---


### DocDBResponsesDescribeEvents <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEvents"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEvents.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribeEvents(__scope: Construct, __resources: string[], __input: DocDbDescribeEventsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeEventsMessage`](#aws-cdk-sdk.docdb.DocDbDescribeEventsMessage)

---



#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEvents.property.events"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbEvent`](#aws-cdk-sdk.docdb.DocDbEvent)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeEvents.property.marker"></a>

- *Type:* `string`

---


### DocDBResponsesDescribeOrderableDbInstanceOptions <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeOrderableDbInstanceOptions"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeOrderableDbInstanceOptions.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribeOrderableDbInstanceOptions(__scope: Construct, __resources: string[], __input: DocDbDescribeOrderableDbInstanceOptionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeOrderableDbInstanceOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeOrderableDbInstanceOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeOrderableDbInstanceOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribeOrderableDbInstanceOptionsMessage`](#aws-cdk-sdk.docdb.DocDbDescribeOrderableDbInstanceOptionsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeOrderableDbInstanceOptions.property.marker"></a>

- *Type:* `string`

---

##### `orderableDbInstanceOptions`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribeOrderableDbInstanceOptions.property.orderableDbInstanceOptions"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbOrderableDbInstanceOption`](#aws-cdk-sdk.docdb.DocDbOrderableDbInstanceOption)[]

---


### DocDBResponsesDescribePendingMaintenanceActions <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribePendingMaintenanceActions"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribePendingMaintenanceActions.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesDescribePendingMaintenanceActions(__scope: Construct, __resources: string[], __input: DocDbDescribePendingMaintenanceActionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribePendingMaintenanceActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribePendingMaintenanceActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribePendingMaintenanceActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbDescribePendingMaintenanceActionsMessage`](#aws-cdk-sdk.docdb.DocDbDescribePendingMaintenanceActionsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribePendingMaintenanceActions.property.marker"></a>

- *Type:* `string`

---

##### `pendingMaintenanceActions`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesDescribePendingMaintenanceActions.property.pendingMaintenanceActions"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbResourcePendingMaintenanceActions`](#aws-cdk-sdk.docdb.DocDbResourcePendingMaintenanceActions)[]

---


### DocDBResponsesFailoverDbCluster <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbCluster.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesFailoverDbCluster(__scope: Construct, __resources: string[], __input: DocDbFailoverDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFailoverDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbFailoverDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbCluster.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster`](#aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster)

---


### DocDBResponsesFailoverDbClusterDbCluster <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesFailoverDbClusterDbCluster(__scope: Construct, __resources: string[], __input: DocDbFailoverDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbFailoverDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbFailoverDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterRole`](#aws-cdk-sdk.docdb.DocDbdbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterMember`](#aws-cdk-sdk.docdb.DocDbdbClusterMember)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesFailoverDbClusterDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership`](#aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership)[]

---


### DocDBResponsesListTagsForResource <a name="aws-cdk-sdk.docdb.DocDBResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesListTagsForResource.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: DocDbListTagsForResourceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbListTagsForResourceMessage`](#aws-cdk-sdk.docdb.DocDbListTagsForResourceMessage)

---



#### Properties <a name="Properties"></a>

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesListTagsForResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbTag`](#aws-cdk-sdk.docdb.DocDbTag)[]

---


### DocDBResponsesModifyDbCluster <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbCluster.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesModifyDbCluster(__scope: Construct, __resources: string[], __input: DocDbModifyDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbCluster.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster`](#aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster)

---


### DocDBResponsesModifyDbClusterDbCluster <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesModifyDbClusterDbCluster(__scope: Construct, __resources: string[], __input: DocDbModifyDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterRole`](#aws-cdk-sdk.docdb.DocDbdbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterMember`](#aws-cdk-sdk.docdb.DocDbdbClusterMember)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership`](#aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership)[]

---


### DocDBResponsesModifyDbClusterParameterGroup <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterParameterGroup.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesModifyDbClusterParameterGroup(__scope: Construct, __resources: string[], __input: DocDbModifyDbClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbClusterParameterGroupMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterParameterGroup.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---


### DocDBResponsesModifyDbClusterSnapshotAttribute <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterSnapshotAttribute"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterSnapshotAttribute.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesModifyDbClusterSnapshotAttribute(__scope: Construct, __resources: string[], __input: DocDbModifyDbClusterSnapshotAttributeMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterSnapshotAttribute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterSnapshotAttribute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterSnapshotAttribute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbClusterSnapshotAttributeMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbClusterSnapshotAttributeMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshotAttributesResult`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterSnapshotAttribute.property.dbClusterSnapshotAttributesResult"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult`](#aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult)

---


### DocDBResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult(__scope: Construct, __resources: string[], __input: DocDbModifyDbClusterSnapshotAttributeMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbClusterSnapshotAttributeMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbClusterSnapshotAttributeMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshotAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult.property.dbClusterSnapshotAttributes"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttribute`](#aws-cdk-sdk.docdb.DocDbdbClusterSnapshotAttribute)[]

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---


### DocDBResponsesModifyDbInstance <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstance.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesModifyDbInstance(__scope: Construct, __resources: string[], __input: DocDbModifyDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbInstance`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstance.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance`](#aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance)

---


### DocDBResponsesModifyDbInstanceDbInstance <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesModifyDbInstanceDbInstance(__scope: Construct, __resources: string[], __input: DocDbModifyDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.dbInstanceArn"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.dbInstanceStatus"></a>

- *Type:* `string`

---

##### `dbiResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.dbiResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup`](#aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup)

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceEndpoint`](#aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceEndpoint)

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `instanceCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues`](#aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues)

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `promotionTier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.promotionTier"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `statusInfos`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.statusInfos"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbInstanceStatusInfo`](#aws-cdk-sdk.docdb.DocDbdbInstanceStatusInfo)[]

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstance.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership`](#aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership)[]

---


### DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup(__scope: Construct, __resources: string[], __input: DocDbModifyDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupArn"></a>

- *Type:* `string`

---

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbSubnet`](#aws-cdk-sdk.docdb.DocDbSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### DocDBResponsesModifyDbInstanceDbInstanceEndpoint <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceEndpoint.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesModifyDbInstanceDbInstanceEndpoint(__scope: Construct, __resources: string[], __input: DocDbModifyDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceEndpoint.property.address"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceEndpoint.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstanceEndpoint.property.port"></a>

- *Type:* `number`

---


### DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues(__scope: Construct, __resources: string[], __input: DocDbModifyDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.iops"></a>

- *Type:* `number`

---

##### `licenseModel`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.pendingCloudwatchLogsExports"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports`](#aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports)

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.port"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.storageType"></a>

- *Type:* `string`

---


### DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(__scope: Construct, __resources: string[], __input: DocDbModifyDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `logTypesToDisable`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToDisable"></a>

- *Type:* `string`[]

---

##### `logTypesToEnable`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToEnable"></a>

- *Type:* `string`[]

---


### DocDBResponsesModifyDbSubnetGroup <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroup.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesModifyDbSubnetGroup(__scope: Construct, __resources: string[], __input: DocDbModifyDbSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbSubnetGroupMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroup.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroupDbSubnetGroup`](#aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroupDbSubnetGroup)

---


### DocDBResponsesModifyDbSubnetGroupDbSubnetGroup <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroupDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroupDbSubnetGroup.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesModifyDbSubnetGroupDbSubnetGroup(__scope: Construct, __resources: string[], __input: DocDbModifyDbSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroupDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroupDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroupDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbModifyDbSubnetGroupMessage`](#aws-cdk-sdk.docdb.DocDbModifyDbSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroupDbSubnetGroup.property.dbSubnetGroupArn"></a>

- *Type:* `string`

---

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroupDbSubnetGroup.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroupDbSubnetGroup.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroupDbSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroupDbSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbSubnet`](#aws-cdk-sdk.docdb.DocDbSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesModifyDbSubnetGroupDbSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### DocDBResponsesRebootDbInstance <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstance.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesRebootDbInstance(__scope: Construct, __resources: string[], __input: DocDbRebootDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbInstance`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstance.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance`](#aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance)

---


### DocDBResponsesRebootDbInstanceDbInstance <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesRebootDbInstanceDbInstance(__scope: Construct, __resources: string[], __input: DocDbRebootDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.dbInstanceArn"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.dbInstanceStatus"></a>

- *Type:* `string`

---

##### `dbiResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.dbiResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup`](#aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup)

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceEndpoint`](#aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceEndpoint)

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `instanceCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues`](#aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues)

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `promotionTier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.promotionTier"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `statusInfos`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.statusInfos"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbInstanceStatusInfo`](#aws-cdk-sdk.docdb.DocDbdbInstanceStatusInfo)[]

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstance.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership`](#aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership)[]

---


### DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup(__scope: Construct, __resources: string[], __input: DocDbRebootDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupArn"></a>

- *Type:* `string`

---

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbSubnet`](#aws-cdk-sdk.docdb.DocDbSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### DocDBResponsesRebootDbInstanceDbInstanceEndpoint <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceEndpoint.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesRebootDbInstanceDbInstanceEndpoint(__scope: Construct, __resources: string[], __input: DocDbRebootDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceEndpoint.property.address"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceEndpoint.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstanceEndpoint.property.port"></a>

- *Type:* `number`

---


### DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues(__scope: Construct, __resources: string[], __input: DocDbRebootDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.iops"></a>

- *Type:* `number`

---

##### `licenseModel`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.pendingCloudwatchLogsExports"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports`](#aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports)

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.port"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.storageType"></a>

- *Type:* `string`

---


### DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(__scope: Construct, __resources: string[], __input: DocDbRebootDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage`](#aws-cdk-sdk.docdb.DocDbRebootDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `logTypesToDisable`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToDisable"></a>

- *Type:* `string`[]

---

##### `logTypesToEnable`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToEnable"></a>

- *Type:* `string`[]

---


### DocDBResponsesResetDbClusterParameterGroup <a name="aws-cdk-sdk.docdb.DocDBResponsesResetDbClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesResetDbClusterParameterGroup.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesResetDbClusterParameterGroup(__scope: Construct, __resources: string[], __input: DocDbResetDbClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesResetDbClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesResetDbClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesResetDbClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbResetDbClusterParameterGroupMessage`](#aws-cdk-sdk.docdb.DocDbResetDbClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesResetDbClusterParameterGroup.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---


### DocDBResponsesRestoreDbClusterFromSnapshot <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshot.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesRestoreDbClusterFromSnapshot(__scope: Construct, __resources: string[], __input: DocDbRestoreDbClusterFromSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage`](#aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshot.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster`](#aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster)

---


### DocDBResponsesRestoreDbClusterFromSnapshotDbCluster <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster(__scope: Construct, __resources: string[], __input: DocDbRestoreDbClusterFromSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage`](#aws-cdk-sdk.docdb.DocDbRestoreDbClusterFromSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterRole`](#aws-cdk-sdk.docdb.DocDbdbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterMember`](#aws-cdk-sdk.docdb.DocDbdbClusterMember)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterFromSnapshotDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership`](#aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership)[]

---


### DocDBResponsesRestoreDbClusterToPointInTime <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTime"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTime.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesRestoreDbClusterToPointInTime(__scope: Construct, __resources: string[], __input: DocDbRestoreDbClusterToPointInTimeMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTime.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTime.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTime.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage`](#aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTime.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster`](#aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster)

---


### DocDBResponsesRestoreDbClusterToPointInTimeDbCluster <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster(__scope: Construct, __resources: string[], __input: DocDbRestoreDbClusterToPointInTimeMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage`](#aws-cdk-sdk.docdb.DocDbRestoreDbClusterToPointInTimeMessage)

---



#### Properties <a name="Properties"></a>

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterRole`](#aws-cdk-sdk.docdb.DocDbdbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterMember`](#aws-cdk-sdk.docdb.DocDbdbClusterMember)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesRestoreDbClusterToPointInTimeDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership`](#aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership)[]

---


### DocDBResponsesStartDbCluster <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbCluster.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesStartDbCluster(__scope: Construct, __resources: string[], __input: DocDbStartDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbStartDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbStartDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbCluster.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster`](#aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster)

---


### DocDBResponsesStartDbClusterDbCluster <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesStartDbClusterDbCluster(__scope: Construct, __resources: string[], __input: DocDbStartDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbStartDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbStartDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterRole`](#aws-cdk-sdk.docdb.DocDbdbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterMember`](#aws-cdk-sdk.docdb.DocDbdbClusterMember)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStartDbClusterDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership`](#aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership)[]

---


### DocDBResponsesStopDbCluster <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbCluster.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesStopDbCluster(__scope: Construct, __resources: string[], __input: DocDbStopDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbStopDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbStopDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbCluster.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster`](#aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster)

---


### DocDBResponsesStopDbClusterDbCluster <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.Initializer"></a>

```typescript
import { docdb } from 'aws-cdk-sdk'

new docdb.DocDBResponsesStopDbClusterDbCluster(__scope: Construct, __resources: string[], __input: DocDbStopDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbStopDbClusterMessage`](#aws-cdk-sdk.docdb.DocDbStopDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterRole`](#aws-cdk-sdk.docdb.DocDbdbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbdbClusterMember`](#aws-cdk-sdk.docdb.DocDbdbClusterMember)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.docdb.DocDBResponsesStopDbClusterDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership`](#aws-cdk-sdk.docdb.DocDbVpcSecurityGroupMembership)[]

---



