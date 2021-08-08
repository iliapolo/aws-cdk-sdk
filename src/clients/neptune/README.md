# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### NeptuneClient <a name="aws-cdk-sdk.neptune.NeptuneClient"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneClient.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addRoleToDbCluster` <a name="aws-cdk-sdk.neptune.NeptuneClient.addRoleToDbCluster"></a>

```typescript
public addRoleToDbCluster(input: NeptuneAddRoleToDbClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneAddRoleToDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneAddRoleToDbClusterMessage)

---

##### `addSourceIdentifierToSubscription` <a name="aws-cdk-sdk.neptune.NeptuneClient.addSourceIdentifierToSubscription"></a>

```typescript
public addSourceIdentifierToSubscription(input: NeptuneAddSourceIdentifierToSubscriptionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneAddSourceIdentifierToSubscriptionMessage`](#aws-cdk-sdk.neptune.NeptuneAddSourceIdentifierToSubscriptionMessage)

---

##### `addTagsToResource` <a name="aws-cdk-sdk.neptune.NeptuneClient.addTagsToResource"></a>

```typescript
public addTagsToResource(input: NeptuneAddTagsToResourceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneAddTagsToResourceMessage`](#aws-cdk-sdk.neptune.NeptuneAddTagsToResourceMessage)

---

##### `applyPendingMaintenanceAction` <a name="aws-cdk-sdk.neptune.NeptuneClient.applyPendingMaintenanceAction"></a>

```typescript
public applyPendingMaintenanceAction(input: NeptuneApplyPendingMaintenanceActionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneApplyPendingMaintenanceActionMessage`](#aws-cdk-sdk.neptune.NeptuneApplyPendingMaintenanceActionMessage)

---

##### `copyDbClusterParameterGroup` <a name="aws-cdk-sdk.neptune.NeptuneClient.copyDbClusterParameterGroup"></a>

```typescript
public copyDbClusterParameterGroup(input: NeptuneCopyDbClusterParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCopyDbClusterParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneCopyDbClusterParameterGroupMessage)

---

##### `copyDbClusterSnapshot` <a name="aws-cdk-sdk.neptune.NeptuneClient.copyDbClusterSnapshot"></a>

```typescript
public copyDbClusterSnapshot(input: NeptuneCopyDbClusterSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCopyDbClusterSnapshotMessage`](#aws-cdk-sdk.neptune.NeptuneCopyDbClusterSnapshotMessage)

---

##### `copyDbParameterGroup` <a name="aws-cdk-sdk.neptune.NeptuneClient.copyDbParameterGroup"></a>

```typescript
public copyDbParameterGroup(input: NeptuneCopyDbParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCopyDbParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneCopyDbParameterGroupMessage)

---

##### `createDbCluster` <a name="aws-cdk-sdk.neptune.NeptuneClient.createDbCluster"></a>

```typescript
public createDbCluster(input: NeptuneCreateDbClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage)

---

##### `createDbClusterEndpoint` <a name="aws-cdk-sdk.neptune.NeptuneClient.createDbClusterEndpoint"></a>

```typescript
public createDbClusterEndpoint(input: NeptuneCreateDbClusterEndpointMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointMessage)

---

##### `createDbClusterParameterGroup` <a name="aws-cdk-sdk.neptune.NeptuneClient.createDbClusterParameterGroup"></a>

```typescript
public createDbClusterParameterGroup(input: NeptuneCreateDbClusterParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbClusterParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbClusterParameterGroupMessage)

---

##### `createDbClusterSnapshot` <a name="aws-cdk-sdk.neptune.NeptuneClient.createDbClusterSnapshot"></a>

```typescript
public createDbClusterSnapshot(input: NeptuneCreateDbClusterSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbClusterSnapshotMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbClusterSnapshotMessage)

---

##### `createDbInstance` <a name="aws-cdk-sdk.neptune.NeptuneClient.createDbInstance"></a>

```typescript
public createDbInstance(input: NeptuneCreateDbInstanceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage)

---

##### `createDbParameterGroup` <a name="aws-cdk-sdk.neptune.NeptuneClient.createDbParameterGroup"></a>

```typescript
public createDbParameterGroup(input: NeptuneCreateDbParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbParameterGroupMessage)

---

##### `createDbSubnetGroup` <a name="aws-cdk-sdk.neptune.NeptuneClient.createDbSubnetGroup"></a>

```typescript
public createDbSubnetGroup(input: NeptuneCreateDbSubnetGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbSubnetGroupMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbSubnetGroupMessage)

---

##### `createEventSubscription` <a name="aws-cdk-sdk.neptune.NeptuneClient.createEventSubscription"></a>

```typescript
public createEventSubscription(input: NeptuneCreateEventSubscriptionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionMessage`](#aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionMessage)

---

##### `deleteDbCluster` <a name="aws-cdk-sdk.neptune.NeptuneClient.deleteDbCluster"></a>

```typescript
public deleteDbCluster(input: NeptuneDeleteDbClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbClusterMessage)

---

##### `deleteDbClusterEndpoint` <a name="aws-cdk-sdk.neptune.NeptuneClient.deleteDbClusterEndpoint"></a>

```typescript
public deleteDbClusterEndpoint(input: NeptuneDeleteDbClusterEndpointMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointMessage)

---

##### `deleteDbClusterParameterGroup` <a name="aws-cdk-sdk.neptune.NeptuneClient.deleteDbClusterParameterGroup"></a>

```typescript
public deleteDbClusterParameterGroup(input: NeptuneDeleteDbClusterParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbClusterParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbClusterParameterGroupMessage)

---

##### `deleteDbClusterSnapshot` <a name="aws-cdk-sdk.neptune.NeptuneClient.deleteDbClusterSnapshot"></a>

```typescript
public deleteDbClusterSnapshot(input: NeptuneDeleteDbClusterSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbClusterSnapshotMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbClusterSnapshotMessage)

---

##### `deleteDbInstance` <a name="aws-cdk-sdk.neptune.NeptuneClient.deleteDbInstance"></a>

```typescript
public deleteDbInstance(input: NeptuneDeleteDbInstanceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage)

---

##### `deleteDbParameterGroup` <a name="aws-cdk-sdk.neptune.NeptuneClient.deleteDbParameterGroup"></a>

```typescript
public deleteDbParameterGroup(input: NeptuneDeleteDbParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbParameterGroupMessage)

---

##### `deleteDbSubnetGroup` <a name="aws-cdk-sdk.neptune.NeptuneClient.deleteDbSubnetGroup"></a>

```typescript
public deleteDbSubnetGroup(input: NeptuneDeleteDbSubnetGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbSubnetGroupMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbSubnetGroupMessage)

---

##### `deleteEventSubscription` <a name="aws-cdk-sdk.neptune.NeptuneClient.deleteEventSubscription"></a>

```typescript
public deleteEventSubscription(input: NeptuneDeleteEventSubscriptionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteEventSubscriptionMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteEventSubscriptionMessage)

---

##### `describeDbClusterEndpoints` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeDbClusterEndpoints"></a>

```typescript
public describeDbClusterEndpoints(input: NeptuneDescribeDbClusterEndpointsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbClusterEndpointsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbClusterEndpointsMessage)

---

##### `describeDbClusterParameterGroups` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeDbClusterParameterGroups"></a>

```typescript
public describeDbClusterParameterGroups(input: NeptuneDescribeDbClusterParameterGroupsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParameterGroupsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParameterGroupsMessage)

---

##### `describeDbClusterParameters` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeDbClusterParameters"></a>

```typescript
public describeDbClusterParameters(input: NeptuneDescribeDbClusterParametersMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParametersMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParametersMessage)

---

##### `describeDbClusters` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeDbClusters"></a>

```typescript
public describeDbClusters(input: NeptuneDescribeDbClustersMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbClustersMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbClustersMessage)

---

##### `describeDbClusterSnapshotAttributes` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeDbClusterSnapshotAttributes"></a>

```typescript
public describeDbClusterSnapshotAttributes(input: NeptuneDescribeDbClusterSnapshotAttributesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotAttributesMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotAttributesMessage)

---

##### `describeDbClusterSnapshots` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeDbClusterSnapshots"></a>

```typescript
public describeDbClusterSnapshots(input: NeptuneDescribeDbClusterSnapshotsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotsMessage)

---

##### `describeDbEngineVersions` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeDbEngineVersions"></a>

```typescript
public describeDbEngineVersions(input: NeptuneDescribeDbEngineVersionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbEngineVersionsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbEngineVersionsMessage)

---

##### `describeDbInstances` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeDbInstances"></a>

```typescript
public describeDbInstances(input: NeptuneDescribeDbInstancesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbInstancesMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbInstancesMessage)

---

##### `describeDbParameterGroups` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeDbParameterGroups"></a>

```typescript
public describeDbParameterGroups(input: NeptuneDescribeDbParameterGroupsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbParameterGroupsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbParameterGroupsMessage)

---

##### `describeDbParameters` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeDbParameters"></a>

```typescript
public describeDbParameters(input: NeptuneDescribeDbParametersMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbParametersMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbParametersMessage)

---

##### `describeDbSubnetGroups` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeDbSubnetGroups"></a>

```typescript
public describeDbSubnetGroups(input: NeptuneDescribeDbSubnetGroupsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbSubnetGroupsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbSubnetGroupsMessage)

---

##### `describeEngineDefaultClusterParameters` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeEngineDefaultClusterParameters"></a>

```typescript
public describeEngineDefaultClusterParameters(input: NeptuneDescribeEngineDefaultClusterParametersMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultClusterParametersMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultClusterParametersMessage)

---

##### `describeEngineDefaultParameters` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeEngineDefaultParameters"></a>

```typescript
public describeEngineDefaultParameters(input: NeptuneDescribeEngineDefaultParametersMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultParametersMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultParametersMessage)

---

##### `describeEventCategories` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeEventCategories"></a>

```typescript
public describeEventCategories(input: NeptuneDescribeEventCategoriesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeEventCategoriesMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeEventCategoriesMessage)

---

##### `describeEvents` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeEvents"></a>

```typescript
public describeEvents(input: NeptuneDescribeEventsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeEventsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeEventsMessage)

---

##### `describeEventSubscriptions` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeEventSubscriptions"></a>

```typescript
public describeEventSubscriptions(input: NeptuneDescribeEventSubscriptionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeEventSubscriptionsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeEventSubscriptionsMessage)

---

##### `describeOrderableDbInstanceOptions` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeOrderableDbInstanceOptions"></a>

```typescript
public describeOrderableDbInstanceOptions(input: NeptuneDescribeOrderableDbInstanceOptionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeOrderableDbInstanceOptionsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeOrderableDbInstanceOptionsMessage)

---

##### `describePendingMaintenanceActions` <a name="aws-cdk-sdk.neptune.NeptuneClient.describePendingMaintenanceActions"></a>

```typescript
public describePendingMaintenanceActions(input: NeptuneDescribePendingMaintenanceActionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribePendingMaintenanceActionsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribePendingMaintenanceActionsMessage)

---

##### `describeValidDbInstanceModifications` <a name="aws-cdk-sdk.neptune.NeptuneClient.describeValidDbInstanceModifications"></a>

```typescript
public describeValidDbInstanceModifications(input: NeptuneDescribeValidDbInstanceModificationsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeValidDbInstanceModificationsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeValidDbInstanceModificationsMessage)

---

##### `failoverDbCluster` <a name="aws-cdk-sdk.neptune.NeptuneClient.failoverDbCluster"></a>

```typescript
public failoverDbCluster(input: NeptuneFailoverDbClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFailoverDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneFailoverDbClusterMessage)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.neptune.NeptuneClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: NeptuneListTagsForResourceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneListTagsForResourceMessage`](#aws-cdk-sdk.neptune.NeptuneListTagsForResourceMessage)

---

##### `modifyDbCluster` <a name="aws-cdk-sdk.neptune.NeptuneClient.modifyDbCluster"></a>

```typescript
public modifyDbCluster(input: NeptuneModifyDbClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage)

---

##### `modifyDbClusterEndpoint` <a name="aws-cdk-sdk.neptune.NeptuneClient.modifyDbClusterEndpoint"></a>

```typescript
public modifyDbClusterEndpoint(input: NeptuneModifyDbClusterEndpointMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointMessage)

---

##### `modifyDbClusterParameterGroup` <a name="aws-cdk-sdk.neptune.NeptuneClient.modifyDbClusterParameterGroup"></a>

```typescript
public modifyDbClusterParameterGroup(input: NeptuneModifyDbClusterParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbClusterParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbClusterParameterGroupMessage)

---

##### `modifyDbClusterSnapshotAttribute` <a name="aws-cdk-sdk.neptune.NeptuneClient.modifyDbClusterSnapshotAttribute"></a>

```typescript
public modifyDbClusterSnapshotAttribute(input: NeptuneModifyDbClusterSnapshotAttributeMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbClusterSnapshotAttributeMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbClusterSnapshotAttributeMessage)

---

##### `modifyDbInstance` <a name="aws-cdk-sdk.neptune.NeptuneClient.modifyDbInstance"></a>

```typescript
public modifyDbInstance(input: NeptuneModifyDbInstanceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage)

---

##### `modifyDbParameterGroup` <a name="aws-cdk-sdk.neptune.NeptuneClient.modifyDbParameterGroup"></a>

```typescript
public modifyDbParameterGroup(input: NeptuneModifyDbParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbParameterGroupMessage)

---

##### `modifyDbSubnetGroup` <a name="aws-cdk-sdk.neptune.NeptuneClient.modifyDbSubnetGroup"></a>

```typescript
public modifyDbSubnetGroup(input: NeptuneModifyDbSubnetGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbSubnetGroupMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbSubnetGroupMessage)

---

##### `modifyEventSubscription` <a name="aws-cdk-sdk.neptune.NeptuneClient.modifyEventSubscription"></a>

```typescript
public modifyEventSubscription(input: NeptuneModifyEventSubscriptionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyEventSubscriptionMessage`](#aws-cdk-sdk.neptune.NeptuneModifyEventSubscriptionMessage)

---

##### `promoteReadReplicaDbCluster` <a name="aws-cdk-sdk.neptune.NeptuneClient.promoteReadReplicaDbCluster"></a>

```typescript
public promoteReadReplicaDbCluster(input: NeptunePromoteReadReplicaDbClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptunePromoteReadReplicaDbClusterMessage`](#aws-cdk-sdk.neptune.NeptunePromoteReadReplicaDbClusterMessage)

---

##### `rebootDbInstance` <a name="aws-cdk-sdk.neptune.NeptuneClient.rebootDbInstance"></a>

```typescript
public rebootDbInstance(input: NeptuneRebootDbInstanceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage)

---

##### `removeRoleFromDbCluster` <a name="aws-cdk-sdk.neptune.NeptuneClient.removeRoleFromDbCluster"></a>

```typescript
public removeRoleFromDbCluster(input: NeptuneRemoveRoleFromDbClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRemoveRoleFromDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneRemoveRoleFromDbClusterMessage)

---

##### `removeSourceIdentifierFromSubscription` <a name="aws-cdk-sdk.neptune.NeptuneClient.removeSourceIdentifierFromSubscription"></a>

```typescript
public removeSourceIdentifierFromSubscription(input: NeptuneRemoveSourceIdentifierFromSubscriptionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRemoveSourceIdentifierFromSubscriptionMessage`](#aws-cdk-sdk.neptune.NeptuneRemoveSourceIdentifierFromSubscriptionMessage)

---

##### `removeTagsFromResource` <a name="aws-cdk-sdk.neptune.NeptuneClient.removeTagsFromResource"></a>

```typescript
public removeTagsFromResource(input: NeptuneRemoveTagsFromResourceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRemoveTagsFromResourceMessage`](#aws-cdk-sdk.neptune.NeptuneRemoveTagsFromResourceMessage)

---

##### `resetDbClusterParameterGroup` <a name="aws-cdk-sdk.neptune.NeptuneClient.resetDbClusterParameterGroup"></a>

```typescript
public resetDbClusterParameterGroup(input: NeptuneResetDbClusterParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResetDbClusterParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneResetDbClusterParameterGroupMessage)

---

##### `resetDbParameterGroup` <a name="aws-cdk-sdk.neptune.NeptuneClient.resetDbParameterGroup"></a>

```typescript
public resetDbParameterGroup(input: NeptuneResetDbParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResetDbParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneResetDbParameterGroupMessage)

---

##### `restoreDbClusterFromSnapshot` <a name="aws-cdk-sdk.neptune.NeptuneClient.restoreDbClusterFromSnapshot"></a>

```typescript
public restoreDbClusterFromSnapshot(input: NeptuneRestoreDbClusterFromSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage`](#aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage)

---

##### `restoreDbClusterToPointInTime` <a name="aws-cdk-sdk.neptune.NeptuneClient.restoreDbClusterToPointInTime"></a>

```typescript
public restoreDbClusterToPointInTime(input: NeptuneRestoreDbClusterToPointInTimeMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage`](#aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage)

---

##### `startDbCluster` <a name="aws-cdk-sdk.neptune.NeptuneClient.startDbCluster"></a>

```typescript
public startDbCluster(input: NeptuneStartDbClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneStartDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneStartDbClusterMessage)

---

##### `stopDbCluster` <a name="aws-cdk-sdk.neptune.NeptuneClient.stopDbCluster"></a>

```typescript
public stopDbCluster(input: NeptuneStopDbClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneStopDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneStopDbClusterMessage)

---




## Structs <a name="Structs"></a>

### NeptuneAddRoleToDbClusterMessage <a name="aws-cdk-sdk.neptune.NeptuneAddRoleToDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneAddRoleToDbClusterMessage: neptune.NeptuneAddRoleToDbClusterMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneAddRoleToDbClusterMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneAddRoleToDbClusterMessage.property.roleArn"></a>

- *Type:* `string`

---

##### `featureName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneAddRoleToDbClusterMessage.property.featureName"></a>

- *Type:* `string`

---

### NeptuneAddSourceIdentifierToSubscriptionMessage <a name="aws-cdk-sdk.neptune.NeptuneAddSourceIdentifierToSubscriptionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneAddSourceIdentifierToSubscriptionMessage: neptune.NeptuneAddSourceIdentifierToSubscriptionMessage = { ... }
```

##### `sourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneAddSourceIdentifierToSubscriptionMessage.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `subscriptionName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneAddSourceIdentifierToSubscriptionMessage.property.subscriptionName"></a>

- *Type:* `string`

---

### NeptuneAddSourceIdentifierToSubscriptionResult <a name="aws-cdk-sdk.neptune.NeptuneAddSourceIdentifierToSubscriptionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneAddSourceIdentifierToSubscriptionResult: neptune.NeptuneAddSourceIdentifierToSubscriptionResult = { ... }
```

##### `eventSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneAddSourceIdentifierToSubscriptionResult.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneEventSubscription`](#aws-cdk-sdk.neptune.NeptuneEventSubscription)

---

### NeptuneAddTagsToResourceMessage <a name="aws-cdk-sdk.neptune.NeptuneAddTagsToResourceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneAddTagsToResourceMessage: neptune.NeptuneAddTagsToResourceMessage = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneAddTagsToResourceMessage.property.resourceName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneAddTagsToResourceMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---

### NeptuneApplyPendingMaintenanceActionMessage <a name="aws-cdk-sdk.neptune.NeptuneApplyPendingMaintenanceActionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneApplyPendingMaintenanceActionMessage: neptune.NeptuneApplyPendingMaintenanceActionMessage = { ... }
```

##### `applyAction`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneApplyPendingMaintenanceActionMessage.property.applyAction"></a>

- *Type:* `string`

---

##### `optInType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneApplyPendingMaintenanceActionMessage.property.optInType"></a>

- *Type:* `string`

---

##### `resourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneApplyPendingMaintenanceActionMessage.property.resourceIdentifier"></a>

- *Type:* `string`

---

### NeptuneApplyPendingMaintenanceActionResult <a name="aws-cdk-sdk.neptune.NeptuneApplyPendingMaintenanceActionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneApplyPendingMaintenanceActionResult: neptune.NeptuneApplyPendingMaintenanceActionResult = { ... }
```

##### `resourcePendingMaintenanceActions`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneApplyPendingMaintenanceActionResult.property.resourcePendingMaintenanceActions"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResourcePendingMaintenanceActions`](#aws-cdk-sdk.neptune.NeptuneResourcePendingMaintenanceActions)

---

### NeptuneAvailabilityZone <a name="aws-cdk-sdk.neptune.NeptuneAvailabilityZone"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneAvailabilityZone: neptune.NeptuneAvailabilityZone = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneAvailabilityZone.property.name"></a>

- *Type:* `string`

---

### NeptuneCharacterSet <a name="aws-cdk-sdk.neptune.NeptuneCharacterSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCharacterSet: neptune.NeptuneCharacterSet = { ... }
```

##### `characterSetDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCharacterSet.property.characterSetDescription"></a>

- *Type:* `string`

---

##### `characterSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCharacterSet.property.characterSetName"></a>

- *Type:* `string`

---

### NeptuneCloudwatchLogsExportConfiguration <a name="aws-cdk-sdk.neptune.NeptuneCloudwatchLogsExportConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCloudwatchLogsExportConfiguration: neptune.NeptuneCloudwatchLogsExportConfiguration = { ... }
```

##### `disableLogTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCloudwatchLogsExportConfiguration.property.disableLogTypes"></a>

- *Type:* `string`[]

---

##### `enableLogTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCloudwatchLogsExportConfiguration.property.enableLogTypes"></a>

- *Type:* `string`[]

---

### NeptuneCopyDbClusterParameterGroupMessage <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCopyDbClusterParameterGroupMessage: neptune.NeptuneCopyDbClusterParameterGroupMessage = { ... }
```

##### `sourceDbClusterParameterGroupIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterParameterGroupMessage.property.sourceDbClusterParameterGroupIdentifier"></a>

- *Type:* `string`

---

##### `targetDbClusterParameterGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterParameterGroupMessage.property.targetDbClusterParameterGroupDescription"></a>

- *Type:* `string`

---

##### `targetDbClusterParameterGroupIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterParameterGroupMessage.property.targetDbClusterParameterGroupIdentifier"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterParameterGroupMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---

### NeptuneCopyDbClusterParameterGroupResult <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterParameterGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCopyDbClusterParameterGroupResult: neptune.NeptuneCopyDbClusterParameterGroupResult = { ... }
```

##### `dbClusterParameterGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterParameterGroupResult.property.dbClusterParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroup`](#aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroup)

---

### NeptuneCopyDbClusterSnapshotMessage <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCopyDbClusterSnapshotMessage: neptune.NeptuneCopyDbClusterSnapshotMessage = { ... }
```

##### `sourceDbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterSnapshotMessage.property.sourceDbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `targetDbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterSnapshotMessage.property.targetDbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `copyTags`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterSnapshotMessage.property.copyTags"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterSnapshotMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `preSignedUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterSnapshotMessage.property.preSignedUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterSnapshotMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---

### NeptuneCopyDbClusterSnapshotResult <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCopyDbClusterSnapshotResult: neptune.NeptuneCopyDbClusterSnapshotResult = { ... }
```

##### `dbClusterSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbClusterSnapshotResult.property.dbClusterSnapshot"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot`](#aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot)

---

### NeptuneCopyDbParameterGroupMessage <a name="aws-cdk-sdk.neptune.NeptuneCopyDbParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCopyDbParameterGroupMessage: neptune.NeptuneCopyDbParameterGroupMessage = { ... }
```

##### `sourceDbParameterGroupIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbParameterGroupMessage.property.sourceDbParameterGroupIdentifier"></a>

- *Type:* `string`

---

##### `targetDbParameterGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbParameterGroupMessage.property.targetDbParameterGroupDescription"></a>

- *Type:* `string`

---

##### `targetDbParameterGroupIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbParameterGroupMessage.property.targetDbParameterGroupIdentifier"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbParameterGroupMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---

### NeptuneCopyDbParameterGroupResult <a name="aws-cdk-sdk.neptune.NeptuneCopyDbParameterGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCopyDbParameterGroupResult: neptune.NeptuneCopyDbParameterGroupResult = { ... }
```

##### `dbParameterGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCopyDbParameterGroupResult.property.dbParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbParameterGroup`](#aws-cdk-sdk.neptune.NeptuneDbParameterGroup)

---

### NeptuneCreateDbClusterEndpointMessage <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateDbClusterEndpointMessage: neptune.NeptuneCreateDbClusterEndpointMessage = { ... }
```

##### `dbClusterEndpointIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointMessage.property.dbClusterEndpointIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointMessage.property.endpointType"></a>

- *Type:* `string`

---

##### `excludedMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointMessage.property.excludedMembers"></a>

- *Type:* `string`[]

---

##### `staticMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointMessage.property.staticMembers"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---

### NeptuneCreateDbClusterEndpointOutput <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateDbClusterEndpointOutput: neptune.NeptuneCreateDbClusterEndpointOutput = { ... }
```

##### `customEndpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointOutput.property.customEndpointType"></a>

- *Type:* `string`

---

##### `dbClusterEndpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointOutput.property.dbClusterEndpointArn"></a>

- *Type:* `string`

---

##### `dbClusterEndpointIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointOutput.property.dbClusterEndpointIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterEndpointResourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointOutput.property.dbClusterEndpointResourceIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointOutput.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointOutput.property.endpoint"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointOutput.property.endpointType"></a>

- *Type:* `string`

---

##### `excludedMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointOutput.property.excludedMembers"></a>

- *Type:* `string`[]

---

##### `staticMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointOutput.property.staticMembers"></a>

- *Type:* `string`[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointOutput.property.status"></a>

- *Type:* `string`

---

### NeptuneCreateDbClusterMessage <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateDbClusterMessage: neptune.NeptuneCreateDbClusterMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.engine"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `characterSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.characterSetName"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.enableCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `enableIamDatabaseAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.enableIamDatabaseAuthentication"></a>

- *Type:* `boolean`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.masterUsername"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `optionGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.optionGroupName"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `preSignedUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.preSignedUrl"></a>

- *Type:* `string`

---

##### `replicationSourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.replicationSourceIdentifier"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage.property.vpcSecurityGroupIds"></a>

- *Type:* `string`[]

---

### NeptuneCreateDbClusterParameterGroupMessage <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateDbClusterParameterGroupMessage: neptune.NeptuneCreateDbClusterParameterGroupMessage = { ... }
```

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterParameterGroupMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterParameterGroupMessage.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterParameterGroupMessage.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterParameterGroupMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---

### NeptuneCreateDbClusterParameterGroupResult <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterParameterGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateDbClusterParameterGroupResult: neptune.NeptuneCreateDbClusterParameterGroupResult = { ... }
```

##### `dbClusterParameterGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterParameterGroupResult.property.dbClusterParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroup`](#aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroup)

---

### NeptuneCreateDbClusterResult <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateDbClusterResult: neptune.NeptuneCreateDbClusterResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbCluster`](#aws-cdk-sdk.neptune.NeptuneDbCluster)

---

### NeptuneCreateDbClusterSnapshotMessage <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateDbClusterSnapshotMessage: neptune.NeptuneCreateDbClusterSnapshotMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterSnapshotMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterSnapshotMessage.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterSnapshotMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---

### NeptuneCreateDbClusterSnapshotResult <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateDbClusterSnapshotResult: neptune.NeptuneCreateDbClusterSnapshotResult = { ... }
```

##### `dbClusterSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbClusterSnapshotResult.property.dbClusterSnapshot"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot`](#aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot)

---

### NeptuneCreateDbInstanceMessage <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateDbInstanceMessage: neptune.NeptuneCreateDbInstanceMessage = { ... }
```

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.engine"></a>

- *Type:* `string`

---

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `characterSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.characterSetName"></a>

- *Type:* `string`

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.copyTagsToSnapshot"></a>

- *Type:* `boolean`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.dbName"></a>

- *Type:* `string`

---

##### `dbParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.dbParameterGroupName"></a>

- *Type:* `string`

---

##### `dbSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.dbSecurityGroups"></a>

- *Type:* `string`[]

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.domain"></a>

- *Type:* `string`

---

##### `domainIamRoleName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.domainIamRoleName"></a>

- *Type:* `string`

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.enableCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `enableIamDatabaseAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.enableIamDatabaseAuthentication"></a>

- *Type:* `boolean`

---

##### `enablePerformanceInsights`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.enablePerformanceInsights"></a>

- *Type:* `boolean`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.iops"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `licenseModel`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.masterUsername"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `monitoringInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.monitoringInterval"></a>

- *Type:* `number`

---

##### `monitoringRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.monitoringRoleArn"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.multiAz"></a>

- *Type:* `boolean`

---

##### `optionGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.optionGroupName"></a>

- *Type:* `string`

---

##### `performanceInsightsKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.performanceInsightsKmsKeyId"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `promotionTier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.promotionTier"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `storageEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.storageType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---

##### `tdeCredentialArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.tdeCredentialArn"></a>

- *Type:* `string`

---

##### `tdeCredentialPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.tdeCredentialPassword"></a>

- *Type:* `string`

---

##### `timezone`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.timezone"></a>

- *Type:* `string`

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage.property.vpcSecurityGroupIds"></a>

- *Type:* `string`[]

---

### NeptuneCreateDbInstanceResult <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateDbInstanceResult: neptune.NeptuneCreateDbInstanceResult = { ... }
```

##### `dbInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbInstanceResult.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbInstance`](#aws-cdk-sdk.neptune.NeptuneDbInstance)

---

### NeptuneCreateDbParameterGroupMessage <a name="aws-cdk-sdk.neptune.NeptuneCreateDbParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateDbParameterGroupMessage: neptune.NeptuneCreateDbParameterGroupMessage = { ... }
```

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbParameterGroupMessage.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `dbParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbParameterGroupMessage.property.dbParameterGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbParameterGroupMessage.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbParameterGroupMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---

### NeptuneCreateDbParameterGroupResult <a name="aws-cdk-sdk.neptune.NeptuneCreateDbParameterGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateDbParameterGroupResult: neptune.NeptuneCreateDbParameterGroupResult = { ... }
```

##### `dbParameterGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbParameterGroupResult.property.dbParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbParameterGroup`](#aws-cdk-sdk.neptune.NeptuneDbParameterGroup)

---

### NeptuneCreateDbSubnetGroupMessage <a name="aws-cdk-sdk.neptune.NeptuneCreateDbSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateDbSubnetGroupMessage: neptune.NeptuneCreateDbSubnetGroupMessage = { ... }
```

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbSubnetGroupMessage.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbSubnetGroupMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbSubnetGroupMessage.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbSubnetGroupMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---

### NeptuneCreateDbSubnetGroupResult <a name="aws-cdk-sdk.neptune.NeptuneCreateDbSubnetGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateDbSubnetGroupResult: neptune.NeptuneCreateDbSubnetGroupResult = { ... }
```

##### `dbSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateDbSubnetGroupResult.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbSubnetGroup`](#aws-cdk-sdk.neptune.NeptuneDbSubnetGroup)

---

### NeptuneCreateEventSubscriptionMessage <a name="aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateEventSubscriptionMessage: neptune.NeptuneCreateEventSubscriptionMessage = { ... }
```

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionMessage.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `subscriptionName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionMessage.property.subscriptionName"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionMessage.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionMessage.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `sourceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionMessage.property.sourceIds"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionMessage.property.sourceType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---

### NeptuneCreateEventSubscriptionResult <a name="aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneCreateEventSubscriptionResult: neptune.NeptuneCreateEventSubscriptionResult = { ... }
```

##### `eventSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionResult.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneEventSubscription`](#aws-cdk-sdk.neptune.NeptuneEventSubscription)

---

### NeptuneDbCluster <a name="aws-cdk-sdk.neptune.NeptuneDbCluster"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbCluster: neptune.NeptuneDbCluster = { ... }
```

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `associatedRoles`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterRole`](#aws-cdk-sdk.neptune.NeptuneDbClusterRole)[]

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `characterSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.characterSetName"></a>

- *Type:* `string`

---

##### `cloneGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.cloneGroupId"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterMember`](#aws-cdk-sdk.neptune.NeptuneDbClusterMember)[]

---

##### `dbClusterOptionGroupMemberships`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.dbClusterOptionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus`](#aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus)[]

---

##### `dbClusterParameterGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `readReplicaIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.readReplicaIdentifiers"></a>

- *Type:* `string`[]

---

##### `replicationSourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.replicationSourceIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership)[]

---

### NeptuneDbClusterEndpoint <a name="aws-cdk-sdk.neptune.NeptuneDbClusterEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbClusterEndpoint: neptune.NeptuneDbClusterEndpoint = { ... }
```

##### `customEndpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterEndpoint.property.customEndpointType"></a>

- *Type:* `string`

---

##### `dbClusterEndpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterEndpoint.property.dbClusterEndpointArn"></a>

- *Type:* `string`

---

##### `dbClusterEndpointIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterEndpoint.property.dbClusterEndpointIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterEndpointResourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterEndpoint.property.dbClusterEndpointResourceIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterEndpoint.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterEndpoint.property.endpoint"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterEndpoint.property.endpointType"></a>

- *Type:* `string`

---

##### `excludedMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterEndpoint.property.excludedMembers"></a>

- *Type:* `string`[]

---

##### `staticMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterEndpoint.property.staticMembers"></a>

- *Type:* `string`[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterEndpoint.property.status"></a>

- *Type:* `string`

---

### NeptuneDbClusterEndpointMessage <a name="aws-cdk-sdk.neptune.NeptuneDbClusterEndpointMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbClusterEndpointMessage: neptune.NeptuneDbClusterEndpointMessage = { ... }
```

##### `dbClusterEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterEndpointMessage.property.dbClusterEndpoints"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterEndpoint`](#aws-cdk-sdk.neptune.NeptuneDbClusterEndpoint)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterEndpointMessage.property.marker"></a>

- *Type:* `string`

---

### NeptuneDbClusterMember <a name="aws-cdk-sdk.neptune.NeptuneDbClusterMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbClusterMember: neptune.NeptuneDbClusterMember = { ... }
```

##### `dbClusterParameterGroupStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterMember.property.dbClusterParameterGroupStatus"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterMember.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `isClusterWriter`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterMember.property.isClusterWriter"></a>

- *Type:* `boolean`

---

##### `promotionTier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterMember.property.promotionTier"></a>

- *Type:* `number`

---

### NeptuneDbClusterMessage <a name="aws-cdk-sdk.neptune.NeptuneDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbClusterMessage: neptune.NeptuneDbClusterMessage = { ... }
```

##### `dbClusters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterMessage.property.dbClusters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbCluster`](#aws-cdk-sdk.neptune.NeptuneDbCluster)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterMessage.property.marker"></a>

- *Type:* `string`

---

### NeptuneDbClusterOptionGroupStatus <a name="aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbClusterOptionGroupStatus: neptune.NeptuneDbClusterOptionGroupStatus = { ... }
```

##### `dbClusterOptionGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus.property.dbClusterOptionGroupName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus.property.status"></a>

- *Type:* `string`

---

### NeptuneDbClusterParameterGroup <a name="aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbClusterParameterGroup: neptune.NeptuneDbClusterParameterGroup = { ... }
```

##### `dbClusterParameterGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroup.property.dbClusterParameterGroupArn"></a>

- *Type:* `string`

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroup.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `dbParameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroup.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroup.property.description"></a>

- *Type:* `string`

---

### NeptuneDbClusterParameterGroupDetails <a name="aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroupDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbClusterParameterGroupDetails: neptune.NeptuneDbClusterParameterGroupDetails = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroupDetails.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroupDetails.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneParameter`](#aws-cdk-sdk.neptune.NeptuneParameter)[]

---

### NeptuneDbClusterParameterGroupNameMessage <a name="aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroupNameMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbClusterParameterGroupNameMessage: neptune.NeptuneDbClusterParameterGroupNameMessage = { ... }
```

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroupNameMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

### NeptuneDbClusterParameterGroupsMessage <a name="aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbClusterParameterGroupsMessage: neptune.NeptuneDbClusterParameterGroupsMessage = { ... }
```

##### `dbClusterParameterGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroupsMessage.property.dbClusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroup`](#aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroup)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroupsMessage.property.marker"></a>

- *Type:* `string`

---

### NeptuneDbClusterRole <a name="aws-cdk-sdk.neptune.NeptuneDbClusterRole"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbClusterRole: neptune.NeptuneDbClusterRole = { ... }
```

##### `featureName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterRole.property.featureName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterRole.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterRole.property.status"></a>

- *Type:* `string`

---

### NeptuneDbClusterSnapshot <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbClusterSnapshot: neptune.NeptuneDbClusterSnapshot = { ... }
```

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `clusterCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.dbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.engineVersion"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `licenseModel`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.masterUsername"></a>

- *Type:* `string`

---

##### `percentProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.percentProgress"></a>

- *Type:* `number`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.port"></a>

- *Type:* `number`

---

##### `snapshotCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceDbClusterSnapshotArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.sourceDbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot.property.vpcId"></a>

- *Type:* `string`

---

### NeptuneDbClusterSnapshotAttribute <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbClusterSnapshotAttribute: neptune.NeptuneDbClusterSnapshotAttribute = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttribute.property.attributeName"></a>

- *Type:* `string`

---

##### `attributeValues`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttribute.property.attributeValues"></a>

- *Type:* `string`[]

---

### NeptuneDbClusterSnapshotAttributesResult <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttributesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbClusterSnapshotAttributesResult: neptune.NeptuneDbClusterSnapshotAttributesResult = { ... }
```

##### `dbClusterSnapshotAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttributesResult.property.dbClusterSnapshotAttributes"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttribute`](#aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttribute)[]

---

##### `dbClusterSnapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttributesResult.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

### NeptuneDbClusterSnapshotMessage <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbClusterSnapshotMessage: neptune.NeptuneDbClusterSnapshotMessage = { ... }
```

##### `dbClusterSnapshots`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotMessage.property.dbClusterSnapshots"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot`](#aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotMessage.property.marker"></a>

- *Type:* `string`

---

### NeptuneDbEngineVersion <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbEngineVersion: neptune.NeptuneDbEngineVersion = { ... }
```

##### `dbEngineDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersion.property.dbEngineDescription"></a>

- *Type:* `string`

---

##### `dbEngineVersionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersion.property.dbEngineVersionDescription"></a>

- *Type:* `string`

---

##### `dbParameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersion.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `defaultCharacterSet`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersion.property.defaultCharacterSet"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCharacterSet`](#aws-cdk-sdk.neptune.NeptuneCharacterSet)

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersion.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersion.property.engineVersion"></a>

- *Type:* `string`

---

##### `exportableLogTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersion.property.exportableLogTypes"></a>

- *Type:* `string`[]

---

##### `supportedCharacterSets`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersion.property.supportedCharacterSets"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCharacterSet`](#aws-cdk-sdk.neptune.NeptuneCharacterSet)[]

---

##### `supportedTimezones`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersion.property.supportedTimezones"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTimezone`](#aws-cdk-sdk.neptune.NeptuneTimezone)[]

---

##### `supportsLogExportsToCloudwatchLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersion.property.supportsLogExportsToCloudwatchLogs"></a>

- *Type:* `boolean`

---

##### `supportsReadReplica`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersion.property.supportsReadReplica"></a>

- *Type:* `boolean`

---

##### `validUpgradeTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersion.property.validUpgradeTarget"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneUpgradeTarget`](#aws-cdk-sdk.neptune.NeptuneUpgradeTarget)[]

---

### NeptuneDbEngineVersionMessage <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbEngineVersionMessage: neptune.NeptuneDbEngineVersionMessage = { ... }
```

##### `dbEngineVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersionMessage.property.dbEngineVersions"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbEngineVersion`](#aws-cdk-sdk.neptune.NeptuneDbEngineVersion)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbEngineVersionMessage.property.marker"></a>

- *Type:* `string`

---

### NeptuneDbInstance <a name="aws-cdk-sdk.neptune.NeptuneDbInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbInstance: neptune.NeptuneDbInstance = { ... }
```

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `characterSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.characterSetName"></a>

- *Type:* `string`

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.copyTagsToSnapshot"></a>

- *Type:* `boolean`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.dbInstanceArn"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbInstancePort`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.dbInstancePort"></a>

- *Type:* `number`

---

##### `dbInstanceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.dbInstanceStatus"></a>

- *Type:* `string`

---

##### `dbiResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.dbiResourceId"></a>

- *Type:* `string`

---

##### `dbName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.dbName"></a>

- *Type:* `string`

---

##### `dbParameterGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.dbParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbParameterGroupStatus`](#aws-cdk-sdk.neptune.NeptuneDbParameterGroupStatus)[]

---

##### `dbSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.dbSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneDbSecurityGroupMembership)[]

---

##### `dbSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbSubnetGroup`](#aws-cdk-sdk.neptune.NeptuneDbSubnetGroup)

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `domainMemberships`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.domainMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDomainMembership`](#aws-cdk-sdk.neptune.NeptuneDomainMembership)[]

---

##### `enabledCloudwatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneEndpoint`](#aws-cdk-sdk.neptune.NeptuneEndpoint)

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `enhancedMonitoringResourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.enhancedMonitoringResourceArn"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `instanceCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.iops"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `licenseModel`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.masterUsername"></a>

- *Type:* `string`

---

##### `monitoringInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.monitoringInterval"></a>

- *Type:* `number`

---

##### `monitoringRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.monitoringRoleArn"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.multiAz"></a>

- *Type:* `boolean`

---

##### `optionGroupMemberships`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.optionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneOptionGroupMembership`](#aws-cdk-sdk.neptune.NeptuneOptionGroupMembership)[]

---

##### `pendingModifiedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptunePendingModifiedValues`](#aws-cdk-sdk.neptune.NeptunePendingModifiedValues)

---

##### `performanceInsightsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.performanceInsightsEnabled"></a>

- *Type:* `boolean`

---

##### `performanceInsightsKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.performanceInsightsKmsKeyId"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `promotionTier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.promotionTier"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `readReplicaDbClusterIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.readReplicaDbClusterIdentifiers"></a>

- *Type:* `string`[]

---

##### `readReplicaDbInstanceIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.readReplicaDbInstanceIdentifiers"></a>

- *Type:* `string`[]

---

##### `readReplicaSourceDbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.readReplicaSourceDbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `secondaryAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.secondaryAvailabilityZone"></a>

- *Type:* `string`

---

##### `statusInfos`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.statusInfos"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbInstanceStatusInfo`](#aws-cdk-sdk.neptune.NeptuneDbInstanceStatusInfo)[]

---

##### `storageEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.storageType"></a>

- *Type:* `string`

---

##### `tdeCredentialArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.tdeCredentialArn"></a>

- *Type:* `string`

---

##### `timezone`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.timezone"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstance.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership)[]

---

### NeptuneDbInstanceMessage <a name="aws-cdk-sdk.neptune.NeptuneDbInstanceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbInstanceMessage: neptune.NeptuneDbInstanceMessage = { ... }
```

##### `dbInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstanceMessage.property.dbInstances"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbInstance`](#aws-cdk-sdk.neptune.NeptuneDbInstance)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstanceMessage.property.marker"></a>

- *Type:* `string`

---

### NeptuneDbInstanceStatusInfo <a name="aws-cdk-sdk.neptune.NeptuneDbInstanceStatusInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbInstanceStatusInfo: neptune.NeptuneDbInstanceStatusInfo = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstanceStatusInfo.property.message"></a>

- *Type:* `string`

---

##### `normal`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstanceStatusInfo.property.normal"></a>

- *Type:* `boolean`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstanceStatusInfo.property.status"></a>

- *Type:* `string`

---

##### `statusType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbInstanceStatusInfo.property.statusType"></a>

- *Type:* `string`

---

### NeptuneDbParameterGroup <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbParameterGroup: neptune.NeptuneDbParameterGroup = { ... }
```

##### `dbParameterGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroup.property.dbParameterGroupArn"></a>

- *Type:* `string`

---

##### `dbParameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroup.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `dbParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroup.property.dbParameterGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroup.property.description"></a>

- *Type:* `string`

---

### NeptuneDbParameterGroupDetails <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroupDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbParameterGroupDetails: neptune.NeptuneDbParameterGroupDetails = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroupDetails.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroupDetails.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneParameter`](#aws-cdk-sdk.neptune.NeptuneParameter)[]

---

### NeptuneDbParameterGroupNameMessage <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroupNameMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbParameterGroupNameMessage: neptune.NeptuneDbParameterGroupNameMessage = { ... }
```

##### `dbParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroupNameMessage.property.dbParameterGroupName"></a>

- *Type:* `string`

---

### NeptuneDbParameterGroupsMessage <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbParameterGroupsMessage: neptune.NeptuneDbParameterGroupsMessage = { ... }
```

##### `dbParameterGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroupsMessage.property.dbParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbParameterGroup`](#aws-cdk-sdk.neptune.NeptuneDbParameterGroup)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroupsMessage.property.marker"></a>

- *Type:* `string`

---

### NeptuneDbParameterGroupStatus <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroupStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbParameterGroupStatus: neptune.NeptuneDbParameterGroupStatus = { ... }
```

##### `dbParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroupStatus.property.dbParameterGroupName"></a>

- *Type:* `string`

---

##### `parameterApplyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbParameterGroupStatus.property.parameterApplyStatus"></a>

- *Type:* `string`

---

### NeptuneDbSecurityGroupMembership <a name="aws-cdk-sdk.neptune.NeptuneDbSecurityGroupMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbSecurityGroupMembership: neptune.NeptuneDbSecurityGroupMembership = { ... }
```

##### `dbSecurityGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbSecurityGroupMembership.property.dbSecurityGroupName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbSecurityGroupMembership.property.status"></a>

- *Type:* `string`

---

### NeptuneDbSubnetGroup <a name="aws-cdk-sdk.neptune.NeptuneDbSubnetGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbSubnetGroup: neptune.NeptuneDbSubnetGroup = { ... }
```

##### `dbSubnetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbSubnetGroup.property.dbSubnetGroupArn"></a>

- *Type:* `string`

---

##### `dbSubnetGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbSubnetGroup.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbSubnetGroup.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneSubnet`](#aws-cdk-sdk.neptune.NeptuneSubnet)[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---

### NeptuneDbSubnetGroupMessage <a name="aws-cdk-sdk.neptune.NeptuneDbSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDbSubnetGroupMessage: neptune.NeptuneDbSubnetGroupMessage = { ... }
```

##### `dbSubnetGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbSubnetGroupMessage.property.dbSubnetGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbSubnetGroup`](#aws-cdk-sdk.neptune.NeptuneDbSubnetGroup)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDbSubnetGroupMessage.property.marker"></a>

- *Type:* `string`

---

### NeptuneDeleteDbClusterEndpointMessage <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDeleteDbClusterEndpointMessage: neptune.NeptuneDeleteDbClusterEndpointMessage = { ... }
```

##### `dbClusterEndpointIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointMessage.property.dbClusterEndpointIdentifier"></a>

- *Type:* `string`

---

### NeptuneDeleteDbClusterEndpointOutput <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDeleteDbClusterEndpointOutput: neptune.NeptuneDeleteDbClusterEndpointOutput = { ... }
```

##### `customEndpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointOutput.property.customEndpointType"></a>

- *Type:* `string`

---

##### `dbClusterEndpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointOutput.property.dbClusterEndpointArn"></a>

- *Type:* `string`

---

##### `dbClusterEndpointIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointOutput.property.dbClusterEndpointIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterEndpointResourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointOutput.property.dbClusterEndpointResourceIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointOutput.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointOutput.property.endpoint"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointOutput.property.endpointType"></a>

- *Type:* `string`

---

##### `excludedMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointOutput.property.excludedMembers"></a>

- *Type:* `string`[]

---

##### `staticMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointOutput.property.staticMembers"></a>

- *Type:* `string`[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointOutput.property.status"></a>

- *Type:* `string`

---

### NeptuneDeleteDbClusterMessage <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDeleteDbClusterMessage: neptune.NeptuneDeleteDbClusterMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `finalDbSnapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterMessage.property.finalDbSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `skipFinalSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterMessage.property.skipFinalSnapshot"></a>

- *Type:* `boolean`

---

### NeptuneDeleteDbClusterParameterGroupMessage <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDeleteDbClusterParameterGroupMessage: neptune.NeptuneDeleteDbClusterParameterGroupMessage = { ... }
```

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterParameterGroupMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

### NeptuneDeleteDbClusterResult <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDeleteDbClusterResult: neptune.NeptuneDeleteDbClusterResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbCluster`](#aws-cdk-sdk.neptune.NeptuneDbCluster)

---

### NeptuneDeleteDbClusterSnapshotMessage <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDeleteDbClusterSnapshotMessage: neptune.NeptuneDeleteDbClusterSnapshotMessage = { ... }
```

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterSnapshotMessage.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

### NeptuneDeleteDbClusterSnapshotResult <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDeleteDbClusterSnapshotResult: neptune.NeptuneDeleteDbClusterSnapshotResult = { ... }
```

##### `dbClusterSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbClusterSnapshotResult.property.dbClusterSnapshot"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot`](#aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot)

---

### NeptuneDeleteDbInstanceMessage <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDeleteDbInstanceMessage: neptune.NeptuneDeleteDbInstanceMessage = { ... }
```

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `finalDbSnapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage.property.finalDbSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `skipFinalSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage.property.skipFinalSnapshot"></a>

- *Type:* `boolean`

---

### NeptuneDeleteDbInstanceResult <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDeleteDbInstanceResult: neptune.NeptuneDeleteDbInstanceResult = { ... }
```

##### `dbInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceResult.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbInstance`](#aws-cdk-sdk.neptune.NeptuneDbInstance)

---

### NeptuneDeleteDbParameterGroupMessage <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDeleteDbParameterGroupMessage: neptune.NeptuneDeleteDbParameterGroupMessage = { ... }
```

##### `dbParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbParameterGroupMessage.property.dbParameterGroupName"></a>

- *Type:* `string`

---

### NeptuneDeleteDbSubnetGroupMessage <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDeleteDbSubnetGroupMessage: neptune.NeptuneDeleteDbSubnetGroupMessage = { ... }
```

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteDbSubnetGroupMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

### NeptuneDeleteEventSubscriptionMessage <a name="aws-cdk-sdk.neptune.NeptuneDeleteEventSubscriptionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDeleteEventSubscriptionMessage: neptune.NeptuneDeleteEventSubscriptionMessage = { ... }
```

##### `subscriptionName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteEventSubscriptionMessage.property.subscriptionName"></a>

- *Type:* `string`

---

### NeptuneDeleteEventSubscriptionResult <a name="aws-cdk-sdk.neptune.NeptuneDeleteEventSubscriptionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDeleteEventSubscriptionResult: neptune.NeptuneDeleteEventSubscriptionResult = { ... }
```

##### `eventSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDeleteEventSubscriptionResult.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneEventSubscription`](#aws-cdk-sdk.neptune.NeptuneEventSubscription)

---

### NeptuneDescribeDbClusterEndpointsMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterEndpointsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeDbClusterEndpointsMessage: neptune.NeptuneDescribeDbClusterEndpointsMessage = { ... }
```

##### `dbClusterEndpointIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterEndpointsMessage.property.dbClusterEndpointIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterEndpointsMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterEndpointsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterEndpointsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterEndpointsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### NeptuneDescribeDbClusterParameterGroupsMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParameterGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeDbClusterParameterGroupsMessage: neptune.NeptuneDescribeDbClusterParameterGroupsMessage = { ... }
```

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParameterGroupsMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParameterGroupsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParameterGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParameterGroupsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### NeptuneDescribeDbClusterParametersMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParametersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeDbClusterParametersMessage: neptune.NeptuneDescribeDbClusterParametersMessage = { ... }
```

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParametersMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParametersMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParametersMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParametersMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParametersMessage.property.source"></a>

- *Type:* `string`

---

### NeptuneDescribeDbClustersMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClustersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeDbClustersMessage: neptune.NeptuneDescribeDbClustersMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClustersMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClustersMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClustersMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClustersMessage.property.maxRecords"></a>

- *Type:* `number`

---

### NeptuneDescribeDbClusterSnapshotAttributesMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotAttributesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeDbClusterSnapshotAttributesMessage: neptune.NeptuneDescribeDbClusterSnapshotAttributesMessage = { ... }
```

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotAttributesMessage.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

### NeptuneDescribeDbClusterSnapshotAttributesResult <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotAttributesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeDbClusterSnapshotAttributesResult: neptune.NeptuneDescribeDbClusterSnapshotAttributesResult = { ... }
```

##### `dbClusterSnapshotAttributesResult`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotAttributesResult.property.dbClusterSnapshotAttributesResult"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttributesResult`](#aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttributesResult)

---

### NeptuneDescribeDbClusterSnapshotsMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeDbClusterSnapshotsMessage: neptune.NeptuneDescribeDbClusterSnapshotsMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotsMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotsMessage.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `includePublic`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotsMessage.property.includePublic"></a>

- *Type:* `boolean`

---

##### `includeShared`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotsMessage.property.includeShared"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `snapshotType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotsMessage.property.snapshotType"></a>

- *Type:* `string`

---

### NeptuneDescribeDbEngineVersionsMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbEngineVersionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeDbEngineVersionsMessage: neptune.NeptuneDescribeDbEngineVersionsMessage = { ... }
```

##### `dbParameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbEngineVersionsMessage.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `defaultOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbEngineVersionsMessage.property.defaultOnly"></a>

- *Type:* `boolean`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbEngineVersionsMessage.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbEngineVersionsMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbEngineVersionsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `listSupportedCharacterSets`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbEngineVersionsMessage.property.listSupportedCharacterSets"></a>

- *Type:* `boolean`

---

##### `listSupportedTimezones`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbEngineVersionsMessage.property.listSupportedTimezones"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbEngineVersionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbEngineVersionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### NeptuneDescribeDbInstancesMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbInstancesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeDbInstancesMessage: neptune.NeptuneDescribeDbInstancesMessage = { ... }
```

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbInstancesMessage.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbInstancesMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbInstancesMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbInstancesMessage.property.maxRecords"></a>

- *Type:* `number`

---

### NeptuneDescribeDbParameterGroupsMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbParameterGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeDbParameterGroupsMessage: neptune.NeptuneDescribeDbParameterGroupsMessage = { ... }
```

##### `dbParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbParameterGroupsMessage.property.dbParameterGroupName"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbParameterGroupsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbParameterGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbParameterGroupsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### NeptuneDescribeDbParametersMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbParametersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeDbParametersMessage: neptune.NeptuneDescribeDbParametersMessage = { ... }
```

##### `dbParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbParametersMessage.property.dbParameterGroupName"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbParametersMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbParametersMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbParametersMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbParametersMessage.property.source"></a>

- *Type:* `string`

---

### NeptuneDescribeDbSubnetGroupsMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbSubnetGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeDbSubnetGroupsMessage: neptune.NeptuneDescribeDbSubnetGroupsMessage = { ... }
```

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbSubnetGroupsMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbSubnetGroupsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbSubnetGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeDbSubnetGroupsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### NeptuneDescribeEngineDefaultClusterParametersMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultClusterParametersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeEngineDefaultClusterParametersMessage: neptune.NeptuneDescribeEngineDefaultClusterParametersMessage = { ... }
```

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultClusterParametersMessage.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultClusterParametersMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultClusterParametersMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultClusterParametersMessage.property.maxRecords"></a>

- *Type:* `number`

---

### NeptuneDescribeEngineDefaultClusterParametersResult <a name="aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultClusterParametersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeEngineDefaultClusterParametersResult: neptune.NeptuneDescribeEngineDefaultClusterParametersResult = { ... }
```

##### `engineDefaults`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultClusterParametersResult.property.engineDefaults"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneEngineDefaults`](#aws-cdk-sdk.neptune.NeptuneEngineDefaults)

---

### NeptuneDescribeEngineDefaultParametersMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultParametersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeEngineDefaultParametersMessage: neptune.NeptuneDescribeEngineDefaultParametersMessage = { ... }
```

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultParametersMessage.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultParametersMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultParametersMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultParametersMessage.property.maxRecords"></a>

- *Type:* `number`

---

### NeptuneDescribeEngineDefaultParametersResult <a name="aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultParametersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeEngineDefaultParametersResult: neptune.NeptuneDescribeEngineDefaultParametersResult = { ... }
```

##### `engineDefaults`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultParametersResult.property.engineDefaults"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneEngineDefaults`](#aws-cdk-sdk.neptune.NeptuneEngineDefaults)

---

### NeptuneDescribeEventCategoriesMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventCategoriesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeEventCategoriesMessage: neptune.NeptuneDescribeEventCategoriesMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventCategoriesMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventCategoriesMessage.property.sourceType"></a>

- *Type:* `string`

---

### NeptuneDescribeEventsMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeEventsMessage: neptune.NeptuneDescribeEventsMessage = { ... }
```

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventsMessage.property.duration"></a>

- *Type:* `number`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventsMessage.property.endTime"></a>

- *Type:* `string`

---

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventsMessage.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `sourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventsMessage.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventsMessage.property.sourceType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventsMessage.property.startTime"></a>

- *Type:* `string`

---

### NeptuneDescribeEventSubscriptionsMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventSubscriptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeEventSubscriptionsMessage: neptune.NeptuneDescribeEventSubscriptionsMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventSubscriptionsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventSubscriptionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventSubscriptionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `subscriptionName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeEventSubscriptionsMessage.property.subscriptionName"></a>

- *Type:* `string`

---

### NeptuneDescribeOrderableDbInstanceOptionsMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeOrderableDbInstanceOptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeOrderableDbInstanceOptionsMessage: neptune.NeptuneDescribeOrderableDbInstanceOptionsMessage = { ... }
```

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeOrderableDbInstanceOptionsMessage.property.engine"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeOrderableDbInstanceOptionsMessage.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeOrderableDbInstanceOptionsMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeOrderableDbInstanceOptionsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `licenseModel`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeOrderableDbInstanceOptionsMessage.property.licenseModel"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeOrderableDbInstanceOptionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeOrderableDbInstanceOptionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeOrderableDbInstanceOptionsMessage.property.vpc"></a>

- *Type:* `boolean`

---

### NeptuneDescribePendingMaintenanceActionsMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribePendingMaintenanceActionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribePendingMaintenanceActionsMessage: neptune.NeptuneDescribePendingMaintenanceActionsMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribePendingMaintenanceActionsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribePendingMaintenanceActionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribePendingMaintenanceActionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribePendingMaintenanceActionsMessage.property.resourceIdentifier"></a>

- *Type:* `string`

---

### NeptuneDescribeValidDbInstanceModificationsMessage <a name="aws-cdk-sdk.neptune.NeptuneDescribeValidDbInstanceModificationsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeValidDbInstanceModificationsMessage: neptune.NeptuneDescribeValidDbInstanceModificationsMessage = { ... }
```

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeValidDbInstanceModificationsMessage.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

### NeptuneDescribeValidDbInstanceModificationsResult <a name="aws-cdk-sdk.neptune.NeptuneDescribeValidDbInstanceModificationsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDescribeValidDbInstanceModificationsResult: neptune.NeptuneDescribeValidDbInstanceModificationsResult = { ... }
```

##### `validDbInstanceModificationsMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDescribeValidDbInstanceModificationsResult.property.validDbInstanceModificationsMessage"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneValidDbInstanceModificationsMessage`](#aws-cdk-sdk.neptune.NeptuneValidDbInstanceModificationsMessage)

---

### NeptuneDomainMembership <a name="aws-cdk-sdk.neptune.NeptuneDomainMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDomainMembership: neptune.NeptuneDomainMembership = { ... }
```

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDomainMembership.property.domain"></a>

- *Type:* `string`

---

##### `fqdn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDomainMembership.property.fqdn"></a>

- *Type:* `string`

---

##### `iamRoleName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDomainMembership.property.iamRoleName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDomainMembership.property.status"></a>

- *Type:* `string`

---

### NeptuneDoubleRange <a name="aws-cdk-sdk.neptune.NeptuneDoubleRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneDoubleRange: neptune.NeptuneDoubleRange = { ... }
```

##### `from`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDoubleRange.property.from"></a>

- *Type:* `number`

---

##### `to`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneDoubleRange.property.to"></a>

- *Type:* `number`

---

### NeptuneEndpoint <a name="aws-cdk-sdk.neptune.NeptuneEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneEndpoint: neptune.NeptuneEndpoint = { ... }
```

##### `address`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEndpoint.property.address"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEndpoint.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEndpoint.property.port"></a>

- *Type:* `number`

---

### NeptuneEngineDefaults <a name="aws-cdk-sdk.neptune.NeptuneEngineDefaults"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneEngineDefaults: neptune.NeptuneEngineDefaults = { ... }
```

##### `dbParameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEngineDefaults.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEngineDefaults.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEngineDefaults.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneParameter`](#aws-cdk-sdk.neptune.NeptuneParameter)[]

---

### NeptuneEvent <a name="aws-cdk-sdk.neptune.NeptuneEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneEvent: neptune.NeptuneEvent = { ... }
```

##### `date`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEvent.property.date"></a>

- *Type:* `string`

---

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEvent.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEvent.property.message"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEvent.property.sourceArn"></a>

- *Type:* `string`

---

##### `sourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEvent.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEvent.property.sourceType"></a>

- *Type:* `string`

---

### NeptuneEventCategoriesMap <a name="aws-cdk-sdk.neptune.NeptuneEventCategoriesMap"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneEventCategoriesMap: neptune.NeptuneEventCategoriesMap = { ... }
```

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventCategoriesMap.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventCategoriesMap.property.sourceType"></a>

- *Type:* `string`

---

### NeptuneEventCategoriesMessage <a name="aws-cdk-sdk.neptune.NeptuneEventCategoriesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneEventCategoriesMessage: neptune.NeptuneEventCategoriesMessage = { ... }
```

##### `eventCategoriesMapList`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventCategoriesMessage.property.eventCategoriesMapList"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneEventCategoriesMap`](#aws-cdk-sdk.neptune.NeptuneEventCategoriesMap)[]

---

### NeptuneEventsMessage <a name="aws-cdk-sdk.neptune.NeptuneEventsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneEventsMessage: neptune.NeptuneEventsMessage = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventsMessage.property.events"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneEvent`](#aws-cdk-sdk.neptune.NeptuneEvent)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventsMessage.property.marker"></a>

- *Type:* `string`

---

### NeptuneEventSubscription <a name="aws-cdk-sdk.neptune.NeptuneEventSubscription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneEventSubscription: neptune.NeptuneEventSubscription = { ... }
```

##### `customerAwsId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventSubscription.property.customerAwsId"></a>

- *Type:* `string`

---

##### `custSubscriptionId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventSubscription.property.custSubscriptionId"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventSubscription.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategoriesList`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventSubscription.property.eventCategoriesList"></a>

- *Type:* `string`[]

---

##### `eventSubscriptionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventSubscription.property.eventSubscriptionArn"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventSubscription.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceIdsList`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventSubscription.property.sourceIdsList"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventSubscription.property.sourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventSubscription.property.status"></a>

- *Type:* `string`

---

##### `subscriptionCreationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventSubscription.property.subscriptionCreationTime"></a>

- *Type:* `string`

---

### NeptuneEventSubscriptionsMessage <a name="aws-cdk-sdk.neptune.NeptuneEventSubscriptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneEventSubscriptionsMessage: neptune.NeptuneEventSubscriptionsMessage = { ... }
```

##### `eventSubscriptionsList`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventSubscriptionsMessage.property.eventSubscriptionsList"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneEventSubscription`](#aws-cdk-sdk.neptune.NeptuneEventSubscription)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneEventSubscriptionsMessage.property.marker"></a>

- *Type:* `string`

---

### NeptuneFailoverDbClusterMessage <a name="aws-cdk-sdk.neptune.NeptuneFailoverDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneFailoverDbClusterMessage: neptune.NeptuneFailoverDbClusterMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneFailoverDbClusterMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `targetDbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneFailoverDbClusterMessage.property.targetDbInstanceIdentifier"></a>

- *Type:* `string`

---

### NeptuneFailoverDbClusterResult <a name="aws-cdk-sdk.neptune.NeptuneFailoverDbClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneFailoverDbClusterResult: neptune.NeptuneFailoverDbClusterResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneFailoverDbClusterResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbCluster`](#aws-cdk-sdk.neptune.NeptuneDbCluster)

---

### NeptuneFilter <a name="aws-cdk-sdk.neptune.NeptuneFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneFilter: neptune.NeptuneFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneFilter.property.values"></a>

- *Type:* `string`[]

---

### NeptuneListTagsForResourceMessage <a name="aws-cdk-sdk.neptune.NeptuneListTagsForResourceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneListTagsForResourceMessage: neptune.NeptuneListTagsForResourceMessage = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneListTagsForResourceMessage.property.resourceName"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneListTagsForResourceMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFilter`](#aws-cdk-sdk.neptune.NeptuneFilter)[]

---

### NeptuneModifyDbClusterEndpointMessage <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneModifyDbClusterEndpointMessage: neptune.NeptuneModifyDbClusterEndpointMessage = { ... }
```

##### `dbClusterEndpointIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointMessage.property.dbClusterEndpointIdentifier"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointMessage.property.endpointType"></a>

- *Type:* `string`

---

##### `excludedMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointMessage.property.excludedMembers"></a>

- *Type:* `string`[]

---

##### `staticMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointMessage.property.staticMembers"></a>

- *Type:* `string`[]

---

### NeptuneModifyDbClusterEndpointOutput <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneModifyDbClusterEndpointOutput: neptune.NeptuneModifyDbClusterEndpointOutput = { ... }
```

##### `customEndpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointOutput.property.customEndpointType"></a>

- *Type:* `string`

---

##### `dbClusterEndpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointOutput.property.dbClusterEndpointArn"></a>

- *Type:* `string`

---

##### `dbClusterEndpointIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointOutput.property.dbClusterEndpointIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterEndpointResourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointOutput.property.dbClusterEndpointResourceIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointOutput.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointOutput.property.endpoint"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointOutput.property.endpointType"></a>

- *Type:* `string`

---

##### `excludedMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointOutput.property.excludedMembers"></a>

- *Type:* `string`[]

---

##### `staticMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointOutput.property.staticMembers"></a>

- *Type:* `string`[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointOutput.property.status"></a>

- *Type:* `string`

---

### NeptuneModifyDbClusterMessage <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneModifyDbClusterMessage: neptune.NeptuneModifyDbClusterMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `applyImmediately`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage.property.applyImmediately"></a>

- *Type:* `boolean`

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `cloudwatchLogsExportConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage.property.cloudwatchLogsExportConfiguration"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCloudwatchLogsExportConfiguration`](#aws-cdk-sdk.neptune.NeptuneCloudwatchLogsExportConfiguration)

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `enableIamDatabaseAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage.property.enableIamDatabaseAuthentication"></a>

- *Type:* `boolean`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `newDbClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage.property.newDbClusterIdentifier"></a>

- *Type:* `string`

---

##### `optionGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage.property.optionGroupName"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage.property.vpcSecurityGroupIds"></a>

- *Type:* `string`[]

---

### NeptuneModifyDbClusterParameterGroupMessage <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneModifyDbClusterParameterGroupMessage: neptune.NeptuneModifyDbClusterParameterGroupMessage = { ... }
```

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterParameterGroupMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterParameterGroupMessage.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneParameter`](#aws-cdk-sdk.neptune.NeptuneParameter)[]

---

### NeptuneModifyDbClusterResult <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneModifyDbClusterResult: neptune.NeptuneModifyDbClusterResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbCluster`](#aws-cdk-sdk.neptune.NeptuneDbCluster)

---

### NeptuneModifyDbClusterSnapshotAttributeMessage <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterSnapshotAttributeMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneModifyDbClusterSnapshotAttributeMessage: neptune.NeptuneModifyDbClusterSnapshotAttributeMessage = { ... }
```

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterSnapshotAttributeMessage.property.attributeName"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterSnapshotAttributeMessage.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `valuesToAdd`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterSnapshotAttributeMessage.property.valuesToAdd"></a>

- *Type:* `string`[]

---

##### `valuesToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterSnapshotAttributeMessage.property.valuesToRemove"></a>

- *Type:* `string`[]

---

### NeptuneModifyDbClusterSnapshotAttributeResult <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterSnapshotAttributeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneModifyDbClusterSnapshotAttributeResult: neptune.NeptuneModifyDbClusterSnapshotAttributeResult = { ... }
```

##### `dbClusterSnapshotAttributesResult`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbClusterSnapshotAttributeResult.property.dbClusterSnapshotAttributesResult"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttributesResult`](#aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttributesResult)

---

### NeptuneModifyDbInstanceMessage <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneModifyDbInstanceMessage: neptune.NeptuneModifyDbInstanceMessage = { ... }
```

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.allowMajorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `applyImmediately`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.applyImmediately"></a>

- *Type:* `boolean`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `cloudwatchLogsExportConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.cloudwatchLogsExportConfiguration"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCloudwatchLogsExportConfiguration`](#aws-cdk-sdk.neptune.NeptuneCloudwatchLogsExportConfiguration)

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.copyTagsToSnapshot"></a>

- *Type:* `boolean`

---

##### `dbInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.dbParameterGroupName"></a>

- *Type:* `string`

---

##### `dbPortNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.dbPortNumber"></a>

- *Type:* `number`

---

##### `dbSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.dbSecurityGroups"></a>

- *Type:* `string`[]

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.domain"></a>

- *Type:* `string`

---

##### `domainIamRoleName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.domainIamRoleName"></a>

- *Type:* `string`

---

##### `enableIamDatabaseAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.enableIamDatabaseAuthentication"></a>

- *Type:* `boolean`

---

##### `enablePerformanceInsights`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.enablePerformanceInsights"></a>

- *Type:* `boolean`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.iops"></a>

- *Type:* `number`

---

##### `licenseModel`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `monitoringInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.monitoringInterval"></a>

- *Type:* `number`

---

##### `monitoringRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.monitoringRoleArn"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.multiAz"></a>

- *Type:* `boolean`

---

##### `newDbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.newDbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `optionGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.optionGroupName"></a>

- *Type:* `string`

---

##### `performanceInsightsKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.performanceInsightsKmsKeyId"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `promotionTier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.promotionTier"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.storageType"></a>

- *Type:* `string`

---

##### `tdeCredentialArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.tdeCredentialArn"></a>

- *Type:* `string`

---

##### `tdeCredentialPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.tdeCredentialPassword"></a>

- *Type:* `string`

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage.property.vpcSecurityGroupIds"></a>

- *Type:* `string`[]

---

### NeptuneModifyDbInstanceResult <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneModifyDbInstanceResult: neptune.NeptuneModifyDbInstanceResult = { ... }
```

##### `dbInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbInstanceResult.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbInstance`](#aws-cdk-sdk.neptune.NeptuneDbInstance)

---

### NeptuneModifyDbParameterGroupMessage <a name="aws-cdk-sdk.neptune.NeptuneModifyDbParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneModifyDbParameterGroupMessage: neptune.NeptuneModifyDbParameterGroupMessage = { ... }
```

##### `dbParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbParameterGroupMessage.property.dbParameterGroupName"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbParameterGroupMessage.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneParameter`](#aws-cdk-sdk.neptune.NeptuneParameter)[]

---

### NeptuneModifyDbSubnetGroupMessage <a name="aws-cdk-sdk.neptune.NeptuneModifyDbSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneModifyDbSubnetGroupMessage: neptune.NeptuneModifyDbSubnetGroupMessage = { ... }
```

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbSubnetGroupMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbSubnetGroupMessage.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `dbSubnetGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbSubnetGroupMessage.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

### NeptuneModifyDbSubnetGroupResult <a name="aws-cdk-sdk.neptune.NeptuneModifyDbSubnetGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneModifyDbSubnetGroupResult: neptune.NeptuneModifyDbSubnetGroupResult = { ... }
```

##### `dbSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyDbSubnetGroupResult.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbSubnetGroup`](#aws-cdk-sdk.neptune.NeptuneDbSubnetGroup)

---

### NeptuneModifyEventSubscriptionMessage <a name="aws-cdk-sdk.neptune.NeptuneModifyEventSubscriptionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneModifyEventSubscriptionMessage: neptune.NeptuneModifyEventSubscriptionMessage = { ... }
```

##### `subscriptionName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyEventSubscriptionMessage.property.subscriptionName"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyEventSubscriptionMessage.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyEventSubscriptionMessage.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyEventSubscriptionMessage.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyEventSubscriptionMessage.property.sourceType"></a>

- *Type:* `string`

---

### NeptuneModifyEventSubscriptionResult <a name="aws-cdk-sdk.neptune.NeptuneModifyEventSubscriptionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneModifyEventSubscriptionResult: neptune.NeptuneModifyEventSubscriptionResult = { ... }
```

##### `eventSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneModifyEventSubscriptionResult.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneEventSubscription`](#aws-cdk-sdk.neptune.NeptuneEventSubscription)

---

### NeptuneOptionGroupMembership <a name="aws-cdk-sdk.neptune.NeptuneOptionGroupMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneOptionGroupMembership: neptune.NeptuneOptionGroupMembership = { ... }
```

##### `optionGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOptionGroupMembership.property.optionGroupName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOptionGroupMembership.property.status"></a>

- *Type:* `string`

---

### NeptuneOrderableDbInstanceOption <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneOrderableDbInstanceOption: neptune.NeptuneOrderableDbInstanceOption = { ... }
```

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.availabilityZones"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneAvailabilityZone`](#aws-cdk-sdk.neptune.NeptuneAvailabilityZone)[]

---

##### `dbInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.engineVersion"></a>

- *Type:* `string`

---

##### `licenseModel`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.licenseModel"></a>

- *Type:* `string`

---

##### `maxIopsPerDbInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.maxIopsPerDbInstance"></a>

- *Type:* `number`

---

##### `maxIopsPerGib`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.maxIopsPerGib"></a>

- *Type:* `number`

---

##### `maxStorageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.maxStorageSize"></a>

- *Type:* `number`

---

##### `minIopsPerDbInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.minIopsPerDbInstance"></a>

- *Type:* `number`

---

##### `minIopsPerGib`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.minIopsPerGib"></a>

- *Type:* `number`

---

##### `minStorageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.minStorageSize"></a>

- *Type:* `number`

---

##### `multiAzCapable`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.multiAzCapable"></a>

- *Type:* `boolean`

---

##### `readReplicaCapable`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.readReplicaCapable"></a>

- *Type:* `boolean`

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.storageType"></a>

- *Type:* `string`

---

##### `supportsEnhancedMonitoring`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.supportsEnhancedMonitoring"></a>

- *Type:* `boolean`

---

##### `supportsIamDatabaseAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.supportsIamDatabaseAuthentication"></a>

- *Type:* `boolean`

---

##### `supportsIops`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.supportsIops"></a>

- *Type:* `boolean`

---

##### `supportsPerformanceInsights`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.supportsPerformanceInsights"></a>

- *Type:* `boolean`

---

##### `supportsStorageEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.supportsStorageEncryption"></a>

- *Type:* `boolean`

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption.property.vpc"></a>

- *Type:* `boolean`

---

### NeptuneOrderableDbInstanceOptionsMessage <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneOrderableDbInstanceOptionsMessage: neptune.NeptuneOrderableDbInstanceOptionsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOptionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `orderableDbInstanceOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOptionsMessage.property.orderableDbInstanceOptions"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption`](#aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption)[]

---

### NeptuneParameter <a name="aws-cdk-sdk.neptune.NeptuneParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneParameter: neptune.NeptuneParameter = { ... }
```

##### `allowedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneParameter.property.allowedValues"></a>

- *Type:* `string`

---

##### `applyMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneParameter.property.applyMethod"></a>

- *Type:* `string`

---

##### `applyType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneParameter.property.applyType"></a>

- *Type:* `string`

---

##### `dataType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneParameter.property.dataType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneParameter.property.description"></a>

- *Type:* `string`

---

##### `isModifiable`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneParameter.property.isModifiable"></a>

- *Type:* `boolean`

---

##### `minimumEngineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneParameter.property.minimumEngineVersion"></a>

- *Type:* `string`

---

##### `parameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneParameter.property.parameterName"></a>

- *Type:* `string`

---

##### `parameterValue`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneParameter.property.parameterValue"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneParameter.property.source"></a>

- *Type:* `string`

---

### NeptunePendingCloudwatchLogsExports <a name="aws-cdk-sdk.neptune.NeptunePendingCloudwatchLogsExports"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptunePendingCloudwatchLogsExports: neptune.NeptunePendingCloudwatchLogsExports = { ... }
```

##### `logTypesToDisable`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingCloudwatchLogsExports.property.logTypesToDisable"></a>

- *Type:* `string`[]

---

##### `logTypesToEnable`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingCloudwatchLogsExports.property.logTypesToEnable"></a>

- *Type:* `string`[]

---

### NeptunePendingMaintenanceAction <a name="aws-cdk-sdk.neptune.NeptunePendingMaintenanceAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptunePendingMaintenanceAction: neptune.NeptunePendingMaintenanceAction = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingMaintenanceAction.property.action"></a>

- *Type:* `string`

---

##### `autoAppliedAfterDate`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingMaintenanceAction.property.autoAppliedAfterDate"></a>

- *Type:* `string`

---

##### `currentApplyDate`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingMaintenanceAction.property.currentApplyDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingMaintenanceAction.property.description"></a>

- *Type:* `string`

---

##### `forcedApplyDate`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingMaintenanceAction.property.forcedApplyDate"></a>

- *Type:* `string`

---

##### `optInStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingMaintenanceAction.property.optInStatus"></a>

- *Type:* `string`

---

### NeptunePendingMaintenanceActionsMessage <a name="aws-cdk-sdk.neptune.NeptunePendingMaintenanceActionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptunePendingMaintenanceActionsMessage: neptune.NeptunePendingMaintenanceActionsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingMaintenanceActionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `pendingMaintenanceActions`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingMaintenanceActionsMessage.property.pendingMaintenanceActions"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResourcePendingMaintenanceActions`](#aws-cdk-sdk.neptune.NeptuneResourcePendingMaintenanceActions)[]

---

### NeptunePendingModifiedValues <a name="aws-cdk-sdk.neptune.NeptunePendingModifiedValues"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptunePendingModifiedValues: neptune.NeptunePendingModifiedValues = { ... }
```

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingModifiedValues.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingModifiedValues.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingModifiedValues.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingModifiedValues.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingModifiedValues.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingModifiedValues.property.iops"></a>

- *Type:* `number`

---

##### `licenseModel`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingModifiedValues.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingCloudwatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingModifiedValues.property.pendingCloudwatchLogsExports"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptunePendingCloudwatchLogsExports`](#aws-cdk-sdk.neptune.NeptunePendingCloudwatchLogsExports)

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingModifiedValues.property.port"></a>

- *Type:* `number`

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePendingModifiedValues.property.storageType"></a>

- *Type:* `string`

---

### NeptunePromoteReadReplicaDbClusterMessage <a name="aws-cdk-sdk.neptune.NeptunePromoteReadReplicaDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptunePromoteReadReplicaDbClusterMessage: neptune.NeptunePromoteReadReplicaDbClusterMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptunePromoteReadReplicaDbClusterMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

### NeptunePromoteReadReplicaDbClusterResult <a name="aws-cdk-sdk.neptune.NeptunePromoteReadReplicaDbClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptunePromoteReadReplicaDbClusterResult: neptune.NeptunePromoteReadReplicaDbClusterResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptunePromoteReadReplicaDbClusterResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbCluster`](#aws-cdk-sdk.neptune.NeptuneDbCluster)

---

### NeptuneRange <a name="aws-cdk-sdk.neptune.NeptuneRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneRange: neptune.NeptuneRange = { ... }
```

##### `from`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRange.property.from"></a>

- *Type:* `number`

---

##### `step`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRange.property.step"></a>

- *Type:* `number`

---

##### `to`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRange.property.to"></a>

- *Type:* `number`

---

### NeptuneRebootDbInstanceMessage <a name="aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneRebootDbInstanceMessage: neptune.NeptuneRebootDbInstanceMessage = { ... }
```

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `forceFailover`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage.property.forceFailover"></a>

- *Type:* `boolean`

---

### NeptuneRebootDbInstanceResult <a name="aws-cdk-sdk.neptune.NeptuneRebootDbInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneRebootDbInstanceResult: neptune.NeptuneRebootDbInstanceResult = { ... }
```

##### `dbInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRebootDbInstanceResult.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbInstance`](#aws-cdk-sdk.neptune.NeptuneDbInstance)

---

### NeptuneRemoveRoleFromDbClusterMessage <a name="aws-cdk-sdk.neptune.NeptuneRemoveRoleFromDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneRemoveRoleFromDbClusterMessage: neptune.NeptuneRemoveRoleFromDbClusterMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneRemoveRoleFromDbClusterMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneRemoveRoleFromDbClusterMessage.property.roleArn"></a>

- *Type:* `string`

---

##### `featureName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRemoveRoleFromDbClusterMessage.property.featureName"></a>

- *Type:* `string`

---

### NeptuneRemoveSourceIdentifierFromSubscriptionMessage <a name="aws-cdk-sdk.neptune.NeptuneRemoveSourceIdentifierFromSubscriptionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneRemoveSourceIdentifierFromSubscriptionMessage: neptune.NeptuneRemoveSourceIdentifierFromSubscriptionMessage = { ... }
```

##### `sourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneRemoveSourceIdentifierFromSubscriptionMessage.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `subscriptionName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneRemoveSourceIdentifierFromSubscriptionMessage.property.subscriptionName"></a>

- *Type:* `string`

---

### NeptuneRemoveSourceIdentifierFromSubscriptionResult <a name="aws-cdk-sdk.neptune.NeptuneRemoveSourceIdentifierFromSubscriptionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneRemoveSourceIdentifierFromSubscriptionResult: neptune.NeptuneRemoveSourceIdentifierFromSubscriptionResult = { ... }
```

##### `eventSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRemoveSourceIdentifierFromSubscriptionResult.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneEventSubscription`](#aws-cdk-sdk.neptune.NeptuneEventSubscription)

---

### NeptuneRemoveTagsFromResourceMessage <a name="aws-cdk-sdk.neptune.NeptuneRemoveTagsFromResourceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneRemoveTagsFromResourceMessage: neptune.NeptuneRemoveTagsFromResourceMessage = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneRemoveTagsFromResourceMessage.property.resourceName"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneRemoveTagsFromResourceMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

### NeptuneResetDbClusterParameterGroupMessage <a name="aws-cdk-sdk.neptune.NeptuneResetDbClusterParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneResetDbClusterParameterGroupMessage: neptune.NeptuneResetDbClusterParameterGroupMessage = { ... }
```

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResetDbClusterParameterGroupMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneResetDbClusterParameterGroupMessage.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneParameter`](#aws-cdk-sdk.neptune.NeptuneParameter)[]

---

##### `resetAllParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneResetDbClusterParameterGroupMessage.property.resetAllParameters"></a>

- *Type:* `boolean`

---

### NeptuneResetDbParameterGroupMessage <a name="aws-cdk-sdk.neptune.NeptuneResetDbParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneResetDbParameterGroupMessage: neptune.NeptuneResetDbParameterGroupMessage = { ... }
```

##### `dbParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResetDbParameterGroupMessage.property.dbParameterGroupName"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneResetDbParameterGroupMessage.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneParameter`](#aws-cdk-sdk.neptune.NeptuneParameter)[]

---

##### `resetAllParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneResetDbParameterGroupMessage.property.resetAllParameters"></a>

- *Type:* `boolean`

---

### NeptuneResourcePendingMaintenanceActions <a name="aws-cdk-sdk.neptune.NeptuneResourcePendingMaintenanceActions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneResourcePendingMaintenanceActions: neptune.NeptuneResourcePendingMaintenanceActions = { ... }
```

##### `pendingMaintenanceActionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneResourcePendingMaintenanceActions.property.pendingMaintenanceActionDetails"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptunePendingMaintenanceAction`](#aws-cdk-sdk.neptune.NeptunePendingMaintenanceAction)[]

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneResourcePendingMaintenanceActions.property.resourceIdentifier"></a>

- *Type:* `string`

---

### NeptuneRestoreDbClusterFromSnapshotMessage <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneRestoreDbClusterFromSnapshotMessage: neptune.NeptuneRestoreDbClusterFromSnapshotMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.engine"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.enableCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `enableIamDatabaseAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.enableIamDatabaseAuthentication"></a>

- *Type:* `boolean`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `optionGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.optionGroupName"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.port"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage.property.vpcSecurityGroupIds"></a>

- *Type:* `string`[]

---

### NeptuneRestoreDbClusterFromSnapshotResult <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneRestoreDbClusterFromSnapshotResult: neptune.NeptuneRestoreDbClusterFromSnapshotResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbCluster`](#aws-cdk-sdk.neptune.NeptuneDbCluster)

---

### NeptuneRestoreDbClusterToPointInTimeMessage <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneRestoreDbClusterToPointInTimeMessage: neptune.NeptuneRestoreDbClusterToPointInTimeMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `sourceDbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage.property.sourceDbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage.property.enableCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `enableIamDatabaseAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage.property.enableIamDatabaseAuthentication"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `optionGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage.property.optionGroupName"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage.property.port"></a>

- *Type:* `number`

---

##### `restoreToTime`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage.property.restoreToTime"></a>

- *Type:* `string`

---

##### `restoreType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage.property.restoreType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---

##### `useLatestRestorableTime`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage.property.useLatestRestorableTime"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage.property.vpcSecurityGroupIds"></a>

- *Type:* `string`[]

---

### NeptuneRestoreDbClusterToPointInTimeResult <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneRestoreDbClusterToPointInTimeResult: neptune.NeptuneRestoreDbClusterToPointInTimeResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbCluster`](#aws-cdk-sdk.neptune.NeptuneDbCluster)

---

### NeptuneStartDbClusterMessage <a name="aws-cdk-sdk.neptune.NeptuneStartDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneStartDbClusterMessage: neptune.NeptuneStartDbClusterMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneStartDbClusterMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

### NeptuneStartDbClusterResult <a name="aws-cdk-sdk.neptune.NeptuneStartDbClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneStartDbClusterResult: neptune.NeptuneStartDbClusterResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneStartDbClusterResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbCluster`](#aws-cdk-sdk.neptune.NeptuneDbCluster)

---

### NeptuneStopDbClusterMessage <a name="aws-cdk-sdk.neptune.NeptuneStopDbClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneStopDbClusterMessage: neptune.NeptuneStopDbClusterMessage = { ... }
```

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneStopDbClusterMessage.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

### NeptuneStopDbClusterResult <a name="aws-cdk-sdk.neptune.NeptuneStopDbClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneStopDbClusterResult: neptune.NeptuneStopDbClusterResult = { ... }
```

##### `dbCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneStopDbClusterResult.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbCluster`](#aws-cdk-sdk.neptune.NeptuneDbCluster)

---

### NeptuneSubnet <a name="aws-cdk-sdk.neptune.NeptuneSubnet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneSubnet: neptune.NeptuneSubnet = { ... }
```

##### `subnetAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneSubnet.property.subnetAvailabilityZone"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneAvailabilityZone`](#aws-cdk-sdk.neptune.NeptuneAvailabilityZone)

---

##### `subnetIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneSubnet.property.subnetIdentifier"></a>

- *Type:* `string`

---

##### `subnetStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneSubnet.property.subnetStatus"></a>

- *Type:* `string`

---

### NeptuneTag <a name="aws-cdk-sdk.neptune.NeptuneTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneTag: neptune.NeptuneTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneTag.property.value"></a>

- *Type:* `string`

---

### NeptuneTagListMessage <a name="aws-cdk-sdk.neptune.NeptuneTagListMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneTagListMessage: neptune.NeptuneTagListMessage = { ... }
```

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneTagListMessage.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---

### NeptuneTimezone <a name="aws-cdk-sdk.neptune.NeptuneTimezone"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneTimezone: neptune.NeptuneTimezone = { ... }
```

##### `timezoneName`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneTimezone.property.timezoneName"></a>

- *Type:* `string`

---

### NeptuneUpgradeTarget <a name="aws-cdk-sdk.neptune.NeptuneUpgradeTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneUpgradeTarget: neptune.NeptuneUpgradeTarget = { ... }
```

##### `autoUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneUpgradeTarget.property.autoUpgrade"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneUpgradeTarget.property.description"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneUpgradeTarget.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneUpgradeTarget.property.engineVersion"></a>

- *Type:* `string`

---

##### `isMajorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneUpgradeTarget.property.isMajorVersionUpgrade"></a>

- *Type:* `boolean`

---

### NeptuneValidDbInstanceModificationsMessage <a name="aws-cdk-sdk.neptune.NeptuneValidDbInstanceModificationsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneValidDbInstanceModificationsMessage: neptune.NeptuneValidDbInstanceModificationsMessage = { ... }
```

##### `storage`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneValidDbInstanceModificationsMessage.property.storage"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneValidStorageOptions`](#aws-cdk-sdk.neptune.NeptuneValidStorageOptions)[]

---

### NeptuneValidStorageOptions <a name="aws-cdk-sdk.neptune.NeptuneValidStorageOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneValidStorageOptions: neptune.NeptuneValidStorageOptions = { ... }
```

##### `iopsToStorageRatio`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneValidStorageOptions.property.iopsToStorageRatio"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDoubleRange`](#aws-cdk-sdk.neptune.NeptuneDoubleRange)[]

---

##### `provisionedIops`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneValidStorageOptions.property.provisionedIops"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRange`](#aws-cdk-sdk.neptune.NeptuneRange)[]

---

##### `storageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneValidStorageOptions.property.storageSize"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRange`](#aws-cdk-sdk.neptune.NeptuneRange)[]

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneValidStorageOptions.property.storageType"></a>

- *Type:* `string`

---

### NeptuneVpcSecurityGroupMembership <a name="aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

const neptuneVpcSecurityGroupMembership: neptune.NeptuneVpcSecurityGroupMembership = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership.property.status"></a>

- *Type:* `string`

---

##### `vpcSecurityGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership.property.vpcSecurityGroupId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### NeptuneResponsesAddSourceIdentifierToSubscription <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscription.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesAddSourceIdentifierToSubscription(__scope: Construct, __resources: string[], __input: NeptuneAddSourceIdentifierToSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneAddSourceIdentifierToSubscriptionMessage`](#aws-cdk-sdk.neptune.NeptuneAddSourceIdentifierToSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `eventSubscription`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscription.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription`](#aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription)

---


### NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription(__scope: Construct, __resources: string[], __input: NeptuneAddSourceIdentifierToSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneAddSourceIdentifierToSubscriptionMessage`](#aws-cdk-sdk.neptune.NeptuneAddSourceIdentifierToSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `customerAwsId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription.property.customerAwsId"></a>

- *Type:* `string`

---

##### `custSubscriptionId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription.property.custSubscriptionId"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategoriesList`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription.property.eventCategoriesList"></a>

- *Type:* `string`[]

---

##### `eventSubscriptionArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription.property.eventSubscriptionArn"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceIdsList`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription.property.sourceIdsList"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription.property.sourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription.property.status"></a>

- *Type:* `string`

---

##### `subscriptionCreationTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesAddSourceIdentifierToSubscriptionEventSubscription.property.subscriptionCreationTime"></a>

- *Type:* `string`

---


### NeptuneResponsesApplyPendingMaintenanceAction <a name="aws-cdk-sdk.neptune.NeptuneResponsesApplyPendingMaintenanceAction"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesApplyPendingMaintenanceAction.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesApplyPendingMaintenanceAction(__scope: Construct, __resources: string[], __input: NeptuneApplyPendingMaintenanceActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesApplyPendingMaintenanceAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesApplyPendingMaintenanceAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesApplyPendingMaintenanceAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneApplyPendingMaintenanceActionMessage`](#aws-cdk-sdk.neptune.NeptuneApplyPendingMaintenanceActionMessage)

---



#### Properties <a name="Properties"></a>

##### `resourcePendingMaintenanceActions`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesApplyPendingMaintenanceAction.property.resourcePendingMaintenanceActions"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions`](#aws-cdk-sdk.neptune.NeptuneResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions)

---


### NeptuneResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions <a name="aws-cdk-sdk.neptune.NeptuneResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions(__scope: Construct, __resources: string[], __input: NeptuneApplyPendingMaintenanceActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneApplyPendingMaintenanceActionMessage`](#aws-cdk-sdk.neptune.NeptuneApplyPendingMaintenanceActionMessage)

---



#### Properties <a name="Properties"></a>

##### `pendingMaintenanceActionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.property.pendingMaintenanceActionDetails"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptunePendingMaintenanceAction`](#aws-cdk-sdk.neptune.NeptunePendingMaintenanceAction)[]

---

##### `resourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.property.resourceIdentifier"></a>

- *Type:* `string`

---


### NeptuneResponsesCopyDbClusterParameterGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCopyDbClusterParameterGroup(__scope: Construct, __resources: string[], __input: NeptuneCopyDbClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCopyDbClusterParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneCopyDbClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroup.property.dbClusterParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroupDbClusterParameterGroup`](#aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroupDbClusterParameterGroup)

---


### NeptuneResponsesCopyDbClusterParameterGroupDbClusterParameterGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroupDbClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCopyDbClusterParameterGroupDbClusterParameterGroup(__scope: Construct, __resources: string[], __input: NeptuneCopyDbClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCopyDbClusterParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneCopyDbClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterParameterGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.property.dbClusterParameterGroupArn"></a>

- *Type:* `string`

---

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterParameterGroupDbClusterParameterGroup.property.description"></a>

- *Type:* `string`

---


### NeptuneResponsesCopyDbClusterSnapshot <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshot.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCopyDbClusterSnapshot(__scope: Construct, __resources: string[], __input: NeptuneCopyDbClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCopyDbClusterSnapshotMessage`](#aws-cdk-sdk.neptune.NeptuneCopyDbClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshot`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshot.property.dbClusterSnapshot"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot`](#aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot)

---


### NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot(__scope: Construct, __resources: string[], __input: NeptuneCopyDbClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCopyDbClusterSnapshotMessage`](#aws-cdk-sdk.neptune.NeptuneCopyDbClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.dbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.engineVersion"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `licenseModel`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.masterUsername"></a>

- *Type:* `string`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.percentProgress"></a>

- *Type:* `number`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.port"></a>

- *Type:* `number`

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceDbClusterSnapshotArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.sourceDbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbClusterSnapshotDbClusterSnapshot.property.vpcId"></a>

- *Type:* `string`

---


### NeptuneResponsesCopyDbParameterGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCopyDbParameterGroup(__scope: Construct, __resources: string[], __input: NeptuneCopyDbParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCopyDbParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneCopyDbParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroup.property.dbParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroupDbParameterGroup`](#aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroupDbParameterGroup)

---


### NeptuneResponsesCopyDbParameterGroupDbParameterGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroupDbParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroupDbParameterGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCopyDbParameterGroupDbParameterGroup(__scope: Construct, __resources: string[], __input: NeptuneCopyDbParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroupDbParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroupDbParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroupDbParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCopyDbParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneCopyDbParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbParameterGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroupDbParameterGroup.property.dbParameterGroupArn"></a>

- *Type:* `string`

---

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroupDbParameterGroup.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `dbParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroupDbParameterGroup.property.dbParameterGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCopyDbParameterGroupDbParameterGroup.property.description"></a>

- *Type:* `string`

---


### NeptuneResponsesCreateDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbCluster(__scope: Construct, __resources: string[], __input: NeptuneCreateDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbCluster.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster`](#aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster)

---


### NeptuneResponsesCreateDbClusterDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbClusterDbCluster(__scope: Construct, __resources: string[], __input: NeptuneCreateDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterRole`](#aws-cdk-sdk.neptune.NeptuneDbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `characterSetName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.characterSetName"></a>

- *Type:* `string`

---

##### `cloneGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.cloneGroupId"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterMember`](#aws-cdk-sdk.neptune.NeptuneDbClusterMember)[]

---

##### `dbClusterOptionGroupMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.dbClusterOptionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus`](#aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `readReplicaIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.readReplicaIdentifiers"></a>

- *Type:* `string`[]

---

##### `replicationSourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.replicationSourceIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership)[]

---


### NeptuneResponsesCreateDbClusterEndpoint <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterEndpoint.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbClusterEndpoint(__scope: Construct, __resources: string[], __input: NeptuneCreateDbClusterEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbClusterEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `customEndpointType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterEndpoint.property.customEndpointType"></a>

- *Type:* `string`

---

##### `dbClusterEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterEndpoint.property.dbClusterEndpointArn"></a>

- *Type:* `string`

---

##### `dbClusterEndpointIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterEndpoint.property.dbClusterEndpointIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterEndpointResourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterEndpoint.property.dbClusterEndpointResourceIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterEndpoint.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterEndpoint.property.endpoint"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterEndpoint.property.endpointType"></a>

- *Type:* `string`

---

##### `excludedMembers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterEndpoint.property.excludedMembers"></a>

- *Type:* `string`[]

---

##### `staticMembers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterEndpoint.property.staticMembers"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterEndpoint.property.status"></a>

- *Type:* `string`

---


### NeptuneResponsesCreateDbClusterParameterGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbClusterParameterGroup(__scope: Construct, __resources: string[], __input: NeptuneCreateDbClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbClusterParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroup.property.dbClusterParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroupDbClusterParameterGroup`](#aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroupDbClusterParameterGroup)

---


### NeptuneResponsesCreateDbClusterParameterGroupDbClusterParameterGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroupDbClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbClusterParameterGroupDbClusterParameterGroup(__scope: Construct, __resources: string[], __input: NeptuneCreateDbClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbClusterParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterParameterGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.property.dbClusterParameterGroupArn"></a>

- *Type:* `string`

---

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterParameterGroupDbClusterParameterGroup.property.description"></a>

- *Type:* `string`

---


### NeptuneResponsesCreateDbClusterSnapshot <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshot.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbClusterSnapshot(__scope: Construct, __resources: string[], __input: NeptuneCreateDbClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbClusterSnapshotMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshot`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshot.property.dbClusterSnapshot"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot`](#aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot)

---


### NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot(__scope: Construct, __resources: string[], __input: NeptuneCreateDbClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbClusterSnapshotMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.dbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.engineVersion"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `licenseModel`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.masterUsername"></a>

- *Type:* `string`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.percentProgress"></a>

- *Type:* `number`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.port"></a>

- *Type:* `number`

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceDbClusterSnapshotArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.sourceDbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbClusterSnapshotDbClusterSnapshot.property.vpcId"></a>

- *Type:* `string`

---


### NeptuneResponsesCreateDbInstance <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstance.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbInstance(__scope: Construct, __resources: string[], __input: NeptuneCreateDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbInstance`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstance.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance`](#aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance)

---


### NeptuneResponsesCreateDbInstanceDbInstance <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbInstanceDbInstance(__scope: Construct, __resources: string[], __input: NeptuneCreateDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `characterSetName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.characterSetName"></a>

- *Type:* `string`

---

##### `copyTagsToSnapshot`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.copyTagsToSnapshot"></a>

- *Type:* `boolean`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.dbInstanceArn"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbInstancePort`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.dbInstancePort"></a>

- *Type:* `number`

---

##### `dbInstanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.dbInstanceStatus"></a>

- *Type:* `string`

---

##### `dbiResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.dbiResourceId"></a>

- *Type:* `string`

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.dbName"></a>

- *Type:* `string`

---

##### `dbParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.dbParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbParameterGroupStatus`](#aws-cdk-sdk.neptune.NeptuneDbParameterGroupStatus)[]

---

##### `dbSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.dbSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneDbSecurityGroupMembership)[]

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceDbSubnetGroup`](#aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceDbSubnetGroup)

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `domainMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.domainMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDomainMembership`](#aws-cdk-sdk.neptune.NeptuneDomainMembership)[]

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceEndpoint`](#aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceEndpoint)

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `enhancedMonitoringResourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.enhancedMonitoringResourceArn"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `instanceCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.iops"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `licenseModel`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.masterUsername"></a>

- *Type:* `string`

---

##### `monitoringInterval`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.monitoringInterval"></a>

- *Type:* `number`

---

##### `monitoringRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.monitoringRoleArn"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.multiAz"></a>

- *Type:* `boolean`

---

##### `optionGroupMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.optionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneOptionGroupMembership`](#aws-cdk-sdk.neptune.NeptuneOptionGroupMembership)[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues`](#aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues)

---

##### `performanceInsightsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.performanceInsightsEnabled"></a>

- *Type:* `boolean`

---

##### `performanceInsightsKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.performanceInsightsKmsKeyId"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `promotionTier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.promotionTier"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `readReplicaDbClusterIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.readReplicaDbClusterIdentifiers"></a>

- *Type:* `string`[]

---

##### `readReplicaDbInstanceIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.readReplicaDbInstanceIdentifiers"></a>

- *Type:* `string`[]

---

##### `readReplicaSourceDbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.readReplicaSourceDbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `secondaryAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.secondaryAvailabilityZone"></a>

- *Type:* `string`

---

##### `statusInfos`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.statusInfos"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbInstanceStatusInfo`](#aws-cdk-sdk.neptune.NeptuneDbInstanceStatusInfo)[]

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.storageType"></a>

- *Type:* `string`

---

##### `tdeCredentialArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.tdeCredentialArn"></a>

- *Type:* `string`

---

##### `timezone`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.timezone"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstance.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership)[]

---


### NeptuneResponsesCreateDbInstanceDbInstanceDbSubnetGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceDbSubnetGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbInstanceDbInstanceDbSubnetGroup(__scope: Construct, __resources: string[], __input: NeptuneCreateDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupArn"></a>

- *Type:* `string`

---

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceDbSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceDbSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneSubnet`](#aws-cdk-sdk.neptune.NeptuneSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceDbSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### NeptuneResponsesCreateDbInstanceDbInstanceEndpoint <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceEndpoint.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbInstanceDbInstanceEndpoint(__scope: Construct, __resources: string[], __input: NeptuneCreateDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceEndpoint.property.address"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceEndpoint.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstanceEndpoint.property.port"></a>

- *Type:* `number`

---


### NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues(__scope: Construct, __resources: string[], __input: NeptuneCreateDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.iops"></a>

- *Type:* `number`

---

##### `licenseModel`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.pendingCloudwatchLogsExports"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports`](#aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports)

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.port"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValues.property.storageType"></a>

- *Type:* `string`

---


### NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(__scope: Construct, __resources: string[], __input: NeptuneCreateDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `logTypesToDisable`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToDisable"></a>

- *Type:* `string`[]

---

##### `logTypesToEnable`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToEnable"></a>

- *Type:* `string`[]

---


### NeptuneResponsesCreateDbParameterGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbParameterGroup(__scope: Construct, __resources: string[], __input: NeptuneCreateDbParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroup.property.dbParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroupDbParameterGroup`](#aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroupDbParameterGroup)

---


### NeptuneResponsesCreateDbParameterGroupDbParameterGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroupDbParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroupDbParameterGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbParameterGroupDbParameterGroup(__scope: Construct, __resources: string[], __input: NeptuneCreateDbParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroupDbParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroupDbParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroupDbParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbParameterGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroupDbParameterGroup.property.dbParameterGroupArn"></a>

- *Type:* `string`

---

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroupDbParameterGroup.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `dbParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroupDbParameterGroup.property.dbParameterGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbParameterGroupDbParameterGroup.property.description"></a>

- *Type:* `string`

---


### NeptuneResponsesCreateDbSubnetGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbSubnetGroup(__scope: Construct, __resources: string[], __input: NeptuneCreateDbSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbSubnetGroupMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroup.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroupDbSubnetGroup`](#aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroupDbSubnetGroup)

---


### NeptuneResponsesCreateDbSubnetGroupDbSubnetGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroupDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroupDbSubnetGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateDbSubnetGroupDbSubnetGroup(__scope: Construct, __resources: string[], __input: NeptuneCreateDbSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroupDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroupDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroupDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateDbSubnetGroupMessage`](#aws-cdk-sdk.neptune.NeptuneCreateDbSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroupDbSubnetGroup.property.dbSubnetGroupArn"></a>

- *Type:* `string`

---

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroupDbSubnetGroup.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroupDbSubnetGroup.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroupDbSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroupDbSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneSubnet`](#aws-cdk-sdk.neptune.NeptuneSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateDbSubnetGroupDbSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### NeptuneResponsesCreateEventSubscription <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscription.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateEventSubscription(__scope: Construct, __resources: string[], __input: NeptuneCreateEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionMessage`](#aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `eventSubscription`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscription.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription`](#aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription)

---


### NeptuneResponsesCreateEventSubscriptionEventSubscription <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription(__scope: Construct, __resources: string[], __input: NeptuneCreateEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionMessage`](#aws-cdk-sdk.neptune.NeptuneCreateEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `customerAwsId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription.property.customerAwsId"></a>

- *Type:* `string`

---

##### `custSubscriptionId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription.property.custSubscriptionId"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategoriesList`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription.property.eventCategoriesList"></a>

- *Type:* `string`[]

---

##### `eventSubscriptionArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription.property.eventSubscriptionArn"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceIdsList`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription.property.sourceIdsList"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription.property.sourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription.property.status"></a>

- *Type:* `string`

---

##### `subscriptionCreationTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesCreateEventSubscriptionEventSubscription.property.subscriptionCreationTime"></a>

- *Type:* `string`

---


### NeptuneResponsesDeleteDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDeleteDbCluster(__scope: Construct, __resources: string[], __input: NeptuneDeleteDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbCluster.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster`](#aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster)

---


### NeptuneResponsesDeleteDbClusterDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDeleteDbClusterDbCluster(__scope: Construct, __resources: string[], __input: NeptuneDeleteDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterRole`](#aws-cdk-sdk.neptune.NeptuneDbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `characterSetName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.characterSetName"></a>

- *Type:* `string`

---

##### `cloneGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.cloneGroupId"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterMember`](#aws-cdk-sdk.neptune.NeptuneDbClusterMember)[]

---

##### `dbClusterOptionGroupMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.dbClusterOptionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus`](#aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `readReplicaIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.readReplicaIdentifiers"></a>

- *Type:* `string`[]

---

##### `replicationSourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.replicationSourceIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership)[]

---


### NeptuneResponsesDeleteDbClusterEndpoint <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterEndpoint.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDeleteDbClusterEndpoint(__scope: Construct, __resources: string[], __input: NeptuneDeleteDbClusterEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbClusterEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `customEndpointType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterEndpoint.property.customEndpointType"></a>

- *Type:* `string`

---

##### `dbClusterEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterEndpoint.property.dbClusterEndpointArn"></a>

- *Type:* `string`

---

##### `dbClusterEndpointIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterEndpoint.property.dbClusterEndpointIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterEndpointResourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterEndpoint.property.dbClusterEndpointResourceIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterEndpoint.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterEndpoint.property.endpoint"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterEndpoint.property.endpointType"></a>

- *Type:* `string`

---

##### `excludedMembers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterEndpoint.property.excludedMembers"></a>

- *Type:* `string`[]

---

##### `staticMembers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterEndpoint.property.staticMembers"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterEndpoint.property.status"></a>

- *Type:* `string`

---


### NeptuneResponsesDeleteDbClusterSnapshot <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshot.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDeleteDbClusterSnapshot(__scope: Construct, __resources: string[], __input: NeptuneDeleteDbClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbClusterSnapshotMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshot`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshot.property.dbClusterSnapshot"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot`](#aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot)

---


### NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot(__scope: Construct, __resources: string[], __input: NeptuneDeleteDbClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbClusterSnapshotMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.dbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.engineVersion"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `licenseModel`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.masterUsername"></a>

- *Type:* `string`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.percentProgress"></a>

- *Type:* `number`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.port"></a>

- *Type:* `number`

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceDbClusterSnapshotArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.sourceDbClusterSnapshotArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbClusterSnapshotDbClusterSnapshot.property.vpcId"></a>

- *Type:* `string`

---


### NeptuneResponsesDeleteDbInstance <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstance.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDeleteDbInstance(__scope: Construct, __resources: string[], __input: NeptuneDeleteDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbInstance`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstance.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance`](#aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance)

---


### NeptuneResponsesDeleteDbInstanceDbInstance <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDeleteDbInstanceDbInstance(__scope: Construct, __resources: string[], __input: NeptuneDeleteDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `characterSetName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.characterSetName"></a>

- *Type:* `string`

---

##### `copyTagsToSnapshot`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.copyTagsToSnapshot"></a>

- *Type:* `boolean`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.dbInstanceArn"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbInstancePort`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.dbInstancePort"></a>

- *Type:* `number`

---

##### `dbInstanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.dbInstanceStatus"></a>

- *Type:* `string`

---

##### `dbiResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.dbiResourceId"></a>

- *Type:* `string`

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.dbName"></a>

- *Type:* `string`

---

##### `dbParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.dbParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbParameterGroupStatus`](#aws-cdk-sdk.neptune.NeptuneDbParameterGroupStatus)[]

---

##### `dbSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.dbSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneDbSecurityGroupMembership)[]

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceDbSubnetGroup`](#aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceDbSubnetGroup)

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `domainMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.domainMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDomainMembership`](#aws-cdk-sdk.neptune.NeptuneDomainMembership)[]

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceEndpoint`](#aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceEndpoint)

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `enhancedMonitoringResourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.enhancedMonitoringResourceArn"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `instanceCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.iops"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `licenseModel`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.masterUsername"></a>

- *Type:* `string`

---

##### `monitoringInterval`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.monitoringInterval"></a>

- *Type:* `number`

---

##### `monitoringRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.monitoringRoleArn"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.multiAz"></a>

- *Type:* `boolean`

---

##### `optionGroupMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.optionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneOptionGroupMembership`](#aws-cdk-sdk.neptune.NeptuneOptionGroupMembership)[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues`](#aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues)

---

##### `performanceInsightsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.performanceInsightsEnabled"></a>

- *Type:* `boolean`

---

##### `performanceInsightsKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.performanceInsightsKmsKeyId"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `promotionTier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.promotionTier"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `readReplicaDbClusterIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.readReplicaDbClusterIdentifiers"></a>

- *Type:* `string`[]

---

##### `readReplicaDbInstanceIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.readReplicaDbInstanceIdentifiers"></a>

- *Type:* `string`[]

---

##### `readReplicaSourceDbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.readReplicaSourceDbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `secondaryAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.secondaryAvailabilityZone"></a>

- *Type:* `string`

---

##### `statusInfos`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.statusInfos"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbInstanceStatusInfo`](#aws-cdk-sdk.neptune.NeptuneDbInstanceStatusInfo)[]

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.storageType"></a>

- *Type:* `string`

---

##### `tdeCredentialArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.tdeCredentialArn"></a>

- *Type:* `string`

---

##### `timezone`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.timezone"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstance.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership)[]

---


### NeptuneResponsesDeleteDbInstanceDbInstanceDbSubnetGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDeleteDbInstanceDbInstanceDbSubnetGroup(__scope: Construct, __resources: string[], __input: NeptuneDeleteDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupArn"></a>

- *Type:* `string`

---

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneSubnet`](#aws-cdk-sdk.neptune.NeptuneSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceDbSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### NeptuneResponsesDeleteDbInstanceDbInstanceEndpoint <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceEndpoint.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDeleteDbInstanceDbInstanceEndpoint(__scope: Construct, __resources: string[], __input: NeptuneDeleteDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceEndpoint.property.address"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceEndpoint.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstanceEndpoint.property.port"></a>

- *Type:* `number`

---


### NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues(__scope: Construct, __resources: string[], __input: NeptuneDeleteDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.iops"></a>

- *Type:* `number`

---

##### `licenseModel`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.pendingCloudwatchLogsExports"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports`](#aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports)

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.port"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValues.property.storageType"></a>

- *Type:* `string`

---


### NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(__scope: Construct, __resources: string[], __input: NeptuneDeleteDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `logTypesToDisable`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToDisable"></a>

- *Type:* `string`[]

---

##### `logTypesToEnable`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToEnable"></a>

- *Type:* `string`[]

---


### NeptuneResponsesDeleteEventSubscription <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscription.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDeleteEventSubscription(__scope: Construct, __resources: string[], __input: NeptuneDeleteEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteEventSubscriptionMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `eventSubscription`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscription.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription`](#aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription)

---


### NeptuneResponsesDeleteEventSubscriptionEventSubscription <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription(__scope: Construct, __resources: string[], __input: NeptuneDeleteEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDeleteEventSubscriptionMessage`](#aws-cdk-sdk.neptune.NeptuneDeleteEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `customerAwsId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription.property.customerAwsId"></a>

- *Type:* `string`

---

##### `custSubscriptionId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription.property.custSubscriptionId"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategoriesList`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription.property.eventCategoriesList"></a>

- *Type:* `string`[]

---

##### `eventSubscriptionArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription.property.eventSubscriptionArn"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceIdsList`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription.property.sourceIdsList"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription.property.sourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription.property.status"></a>

- *Type:* `string`

---

##### `subscriptionCreationTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDeleteEventSubscriptionEventSubscription.property.subscriptionCreationTime"></a>

- *Type:* `string`

---


### NeptuneResponsesDescribeDbClusterEndpoints <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterEndpoints"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterEndpoints.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeDbClusterEndpoints(__scope: Construct, __resources: string[], __input: NeptuneDescribeDbClusterEndpointsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterEndpoints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterEndpoints.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterEndpoints.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbClusterEndpointsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbClusterEndpointsMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterEndpoints.property.dbClusterEndpoints"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterEndpoint`](#aws-cdk-sdk.neptune.NeptuneDbClusterEndpoint)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterEndpoints.property.marker"></a>

- *Type:* `string`

---


### NeptuneResponsesDescribeDbClusterParameterGroups <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterParameterGroups"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterParameterGroups.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeDbClusterParameterGroups(__scope: Construct, __resources: string[], __input: NeptuneDescribeDbClusterParameterGroupsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterParameterGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterParameterGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterParameterGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParameterGroupsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParameterGroupsMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterParameterGroups.property.dbClusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroup`](#aws-cdk-sdk.neptune.NeptuneDbClusterParameterGroup)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterParameterGroups.property.marker"></a>

- *Type:* `string`

---


### NeptuneResponsesDescribeDbClusterParameters <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterParameters"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterParameters.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeDbClusterParameters(__scope: Construct, __resources: string[], __input: NeptuneDescribeDbClusterParametersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParametersMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbClusterParametersMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterParameters.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterParameters.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneParameter`](#aws-cdk-sdk.neptune.NeptuneParameter)[]

---


### NeptuneResponsesDescribeDbClusters <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusters"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusters.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeDbClusters(__scope: Construct, __resources: string[], __input: NeptuneDescribeDbClustersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbClustersMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbClustersMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusters`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusters.property.dbClusters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbCluster`](#aws-cdk-sdk.neptune.NeptuneDbCluster)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusters.property.marker"></a>

- *Type:* `string`

---


### NeptuneResponsesDescribeDbClusterSnapshotAttributes <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributes.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributes(__scope: Construct, __resources: string[], __input: NeptuneDescribeDbClusterSnapshotAttributesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotAttributesMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotAttributesMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshotAttributesResult`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributes.property.dbClusterSnapshotAttributesResult"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult`](#aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult)

---


### NeptuneResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult(__scope: Construct, __resources: string[], __input: NeptuneDescribeDbClusterSnapshotAttributesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotAttributesMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotAttributesMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshotAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult.property.dbClusterSnapshotAttributes"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttribute`](#aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttribute)[]

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---


### NeptuneResponsesDescribeDbClusterSnapshots <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshots"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshots.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeDbClusterSnapshots(__scope: Construct, __resources: string[], __input: NeptuneDescribeDbClusterSnapshotsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshots.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshots.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshots.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbClusterSnapshotsMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshots`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshots.property.dbClusterSnapshots"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot`](#aws-cdk-sdk.neptune.NeptuneDbClusterSnapshot)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbClusterSnapshots.property.marker"></a>

- *Type:* `string`

---


### NeptuneResponsesDescribeDbEngineVersions <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbEngineVersions"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbEngineVersions.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeDbEngineVersions(__scope: Construct, __resources: string[], __input: NeptuneDescribeDbEngineVersionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbEngineVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbEngineVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbEngineVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbEngineVersionsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbEngineVersionsMessage)

---



#### Properties <a name="Properties"></a>

##### `dbEngineVersions`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbEngineVersions.property.dbEngineVersions"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbEngineVersion`](#aws-cdk-sdk.neptune.NeptuneDbEngineVersion)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbEngineVersions.property.marker"></a>

- *Type:* `string`

---


### NeptuneResponsesDescribeDbInstances <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbInstances"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbInstances.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeDbInstances(__scope: Construct, __resources: string[], __input: NeptuneDescribeDbInstancesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbInstancesMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbInstancesMessage)

---



#### Properties <a name="Properties"></a>

##### `dbInstances`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbInstances.property.dbInstances"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbInstance`](#aws-cdk-sdk.neptune.NeptuneDbInstance)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbInstances.property.marker"></a>

- *Type:* `string`

---


### NeptuneResponsesDescribeDbParameterGroups <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbParameterGroups"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbParameterGroups.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeDbParameterGroups(__scope: Construct, __resources: string[], __input: NeptuneDescribeDbParameterGroupsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbParameterGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbParameterGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbParameterGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbParameterGroupsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbParameterGroupsMessage)

---



#### Properties <a name="Properties"></a>

##### `dbParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbParameterGroups.property.dbParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbParameterGroup`](#aws-cdk-sdk.neptune.NeptuneDbParameterGroup)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbParameterGroups.property.marker"></a>

- *Type:* `string`

---


### NeptuneResponsesDescribeDbParameters <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbParameters"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbParameters.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeDbParameters(__scope: Construct, __resources: string[], __input: NeptuneDescribeDbParametersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbParametersMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbParametersMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbParameters.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbParameters.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneParameter`](#aws-cdk-sdk.neptune.NeptuneParameter)[]

---


### NeptuneResponsesDescribeDbSubnetGroups <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbSubnetGroups"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbSubnetGroups.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeDbSubnetGroups(__scope: Construct, __resources: string[], __input: NeptuneDescribeDbSubnetGroupsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbSubnetGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbSubnetGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbSubnetGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeDbSubnetGroupsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeDbSubnetGroupsMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbSubnetGroups.property.dbSubnetGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbSubnetGroup`](#aws-cdk-sdk.neptune.NeptuneDbSubnetGroup)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeDbSubnetGroups.property.marker"></a>

- *Type:* `string`

---


### NeptuneResponsesDescribeEngineDefaultClusterParameters <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParameters"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParameters.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeEngineDefaultClusterParameters(__scope: Construct, __resources: string[], __input: NeptuneDescribeEngineDefaultClusterParametersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultClusterParametersMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultClusterParametersMessage)

---



#### Properties <a name="Properties"></a>

##### `engineDefaults`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParameters.property.engineDefaults"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParametersEngineDefaults`](#aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParametersEngineDefaults)

---


### NeptuneResponsesDescribeEngineDefaultClusterParametersEngineDefaults <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParametersEngineDefaults"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParametersEngineDefaults.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeEngineDefaultClusterParametersEngineDefaults(__scope: Construct, __resources: string[], __input: NeptuneDescribeEngineDefaultClusterParametersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParametersEngineDefaults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParametersEngineDefaults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParametersEngineDefaults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultClusterParametersMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultClusterParametersMessage)

---



#### Properties <a name="Properties"></a>

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParametersEngineDefaults.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParametersEngineDefaults.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultClusterParametersEngineDefaults.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneParameter`](#aws-cdk-sdk.neptune.NeptuneParameter)[]

---


### NeptuneResponsesDescribeEngineDefaultParameters <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParameters"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParameters.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeEngineDefaultParameters(__scope: Construct, __resources: string[], __input: NeptuneDescribeEngineDefaultParametersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultParametersMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultParametersMessage)

---



#### Properties <a name="Properties"></a>

##### `engineDefaults`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParameters.property.engineDefaults"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParametersEngineDefaults`](#aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParametersEngineDefaults)

---


### NeptuneResponsesDescribeEngineDefaultParametersEngineDefaults <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParametersEngineDefaults"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParametersEngineDefaults.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeEngineDefaultParametersEngineDefaults(__scope: Construct, __resources: string[], __input: NeptuneDescribeEngineDefaultParametersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParametersEngineDefaults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParametersEngineDefaults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParametersEngineDefaults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultParametersMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeEngineDefaultParametersMessage)

---



#### Properties <a name="Properties"></a>

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParametersEngineDefaults.property.dbParameterGroupFamily"></a>

- *Type:* `string`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParametersEngineDefaults.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEngineDefaultParametersEngineDefaults.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneParameter`](#aws-cdk-sdk.neptune.NeptuneParameter)[]

---


### NeptuneResponsesDescribeEventCategories <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEventCategories"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEventCategories.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeEventCategories(__scope: Construct, __resources: string[], __input: NeptuneDescribeEventCategoriesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEventCategories.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEventCategories.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEventCategories.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeEventCategoriesMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeEventCategoriesMessage)

---



#### Properties <a name="Properties"></a>

##### `eventCategoriesMapList`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEventCategories.property.eventCategoriesMapList"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneEventCategoriesMap`](#aws-cdk-sdk.neptune.NeptuneEventCategoriesMap)[]

---


### NeptuneResponsesDescribeEvents <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEvents"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEvents.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeEvents(__scope: Construct, __resources: string[], __input: NeptuneDescribeEventsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeEventsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeEventsMessage)

---



#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEvents.property.events"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneEvent`](#aws-cdk-sdk.neptune.NeptuneEvent)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEvents.property.marker"></a>

- *Type:* `string`

---


### NeptuneResponsesDescribeEventSubscriptions <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEventSubscriptions"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEventSubscriptions.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeEventSubscriptions(__scope: Construct, __resources: string[], __input: NeptuneDescribeEventSubscriptionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEventSubscriptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEventSubscriptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEventSubscriptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeEventSubscriptionsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeEventSubscriptionsMessage)

---



#### Properties <a name="Properties"></a>

##### `eventSubscriptionsList`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEventSubscriptions.property.eventSubscriptionsList"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneEventSubscription`](#aws-cdk-sdk.neptune.NeptuneEventSubscription)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeEventSubscriptions.property.marker"></a>

- *Type:* `string`

---


### NeptuneResponsesDescribeOrderableDbInstanceOptions <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeOrderableDbInstanceOptions"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeOrderableDbInstanceOptions.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeOrderableDbInstanceOptions(__scope: Construct, __resources: string[], __input: NeptuneDescribeOrderableDbInstanceOptionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeOrderableDbInstanceOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeOrderableDbInstanceOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeOrderableDbInstanceOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeOrderableDbInstanceOptionsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeOrderableDbInstanceOptionsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeOrderableDbInstanceOptions.property.marker"></a>

- *Type:* `string`

---

##### `orderableDbInstanceOptions`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeOrderableDbInstanceOptions.property.orderableDbInstanceOptions"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption`](#aws-cdk-sdk.neptune.NeptuneOrderableDbInstanceOption)[]

---


### NeptuneResponsesDescribePendingMaintenanceActions <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribePendingMaintenanceActions"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribePendingMaintenanceActions.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribePendingMaintenanceActions(__scope: Construct, __resources: string[], __input: NeptuneDescribePendingMaintenanceActionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribePendingMaintenanceActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribePendingMaintenanceActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribePendingMaintenanceActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribePendingMaintenanceActionsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribePendingMaintenanceActionsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribePendingMaintenanceActions.property.marker"></a>

- *Type:* `string`

---

##### `pendingMaintenanceActions`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribePendingMaintenanceActions.property.pendingMaintenanceActions"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResourcePendingMaintenanceActions`](#aws-cdk-sdk.neptune.NeptuneResourcePendingMaintenanceActions)[]

---


### NeptuneResponsesDescribeValidDbInstanceModifications <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeValidDbInstanceModifications"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeValidDbInstanceModifications.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeValidDbInstanceModifications(__scope: Construct, __resources: string[], __input: NeptuneDescribeValidDbInstanceModificationsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeValidDbInstanceModifications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeValidDbInstanceModifications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeValidDbInstanceModifications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeValidDbInstanceModificationsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeValidDbInstanceModificationsMessage)

---



#### Properties <a name="Properties"></a>

##### `validDbInstanceModificationsMessage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeValidDbInstanceModifications.property.validDbInstanceModificationsMessage"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesDescribeValidDbInstanceModificationsValidDbInstanceModificationsMessage`](#aws-cdk-sdk.neptune.NeptuneResponsesDescribeValidDbInstanceModificationsValidDbInstanceModificationsMessage)

---


### NeptuneResponsesDescribeValidDbInstanceModificationsValidDbInstanceModificationsMessage <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeValidDbInstanceModificationsValidDbInstanceModificationsMessage"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeValidDbInstanceModificationsValidDbInstanceModificationsMessage.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesDescribeValidDbInstanceModificationsValidDbInstanceModificationsMessage(__scope: Construct, __resources: string[], __input: NeptuneDescribeValidDbInstanceModificationsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeValidDbInstanceModificationsValidDbInstanceModificationsMessage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeValidDbInstanceModificationsValidDbInstanceModificationsMessage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeValidDbInstanceModificationsValidDbInstanceModificationsMessage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDescribeValidDbInstanceModificationsMessage`](#aws-cdk-sdk.neptune.NeptuneDescribeValidDbInstanceModificationsMessage)

---



#### Properties <a name="Properties"></a>

##### `storage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesDescribeValidDbInstanceModificationsValidDbInstanceModificationsMessage.property.storage"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneValidStorageOptions`](#aws-cdk-sdk.neptune.NeptuneValidStorageOptions)[]

---


### NeptuneResponsesFailoverDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesFailoverDbCluster(__scope: Construct, __resources: string[], __input: NeptuneFailoverDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFailoverDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneFailoverDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbCluster.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster`](#aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster)

---


### NeptuneResponsesFailoverDbClusterDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesFailoverDbClusterDbCluster(__scope: Construct, __resources: string[], __input: NeptuneFailoverDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneFailoverDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneFailoverDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterRole`](#aws-cdk-sdk.neptune.NeptuneDbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `characterSetName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.characterSetName"></a>

- *Type:* `string`

---

##### `cloneGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.cloneGroupId"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterMember`](#aws-cdk-sdk.neptune.NeptuneDbClusterMember)[]

---

##### `dbClusterOptionGroupMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.dbClusterOptionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus`](#aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `readReplicaIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.readReplicaIdentifiers"></a>

- *Type:* `string`[]

---

##### `replicationSourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.replicationSourceIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesFailoverDbClusterDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership)[]

---


### NeptuneResponsesListTagsForResource <a name="aws-cdk-sdk.neptune.NeptuneResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesListTagsForResource.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: NeptuneListTagsForResourceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneListTagsForResourceMessage`](#aws-cdk-sdk.neptune.NeptuneListTagsForResourceMessage)

---



#### Properties <a name="Properties"></a>

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesListTagsForResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneTag`](#aws-cdk-sdk.neptune.NeptuneTag)[]

---


### NeptuneResponsesModifyDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyDbCluster(__scope: Construct, __resources: string[], __input: NeptuneModifyDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbCluster.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster`](#aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster)

---


### NeptuneResponsesModifyDbClusterDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyDbClusterDbCluster(__scope: Construct, __resources: string[], __input: NeptuneModifyDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterRole`](#aws-cdk-sdk.neptune.NeptuneDbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `characterSetName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.characterSetName"></a>

- *Type:* `string`

---

##### `cloneGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.cloneGroupId"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterMember`](#aws-cdk-sdk.neptune.NeptuneDbClusterMember)[]

---

##### `dbClusterOptionGroupMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.dbClusterOptionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus`](#aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `readReplicaIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.readReplicaIdentifiers"></a>

- *Type:* `string`[]

---

##### `replicationSourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.replicationSourceIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership)[]

---


### NeptuneResponsesModifyDbClusterEndpoint <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterEndpoint.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyDbClusterEndpoint(__scope: Construct, __resources: string[], __input: NeptuneModifyDbClusterEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbClusterEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `customEndpointType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterEndpoint.property.customEndpointType"></a>

- *Type:* `string`

---

##### `dbClusterEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterEndpoint.property.dbClusterEndpointArn"></a>

- *Type:* `string`

---

##### `dbClusterEndpointIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterEndpoint.property.dbClusterEndpointIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterEndpointResourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterEndpoint.property.dbClusterEndpointResourceIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterEndpoint.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterEndpoint.property.endpoint"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterEndpoint.property.endpointType"></a>

- *Type:* `string`

---

##### `excludedMembers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterEndpoint.property.excludedMembers"></a>

- *Type:* `string`[]

---

##### `staticMembers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterEndpoint.property.staticMembers"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterEndpoint.property.status"></a>

- *Type:* `string`

---


### NeptuneResponsesModifyDbClusterParameterGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterParameterGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyDbClusterParameterGroup(__scope: Construct, __resources: string[], __input: NeptuneModifyDbClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbClusterParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterParameterGroup.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---


### NeptuneResponsesModifyDbClusterSnapshotAttribute <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterSnapshotAttribute"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterSnapshotAttribute.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyDbClusterSnapshotAttribute(__scope: Construct, __resources: string[], __input: NeptuneModifyDbClusterSnapshotAttributeMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterSnapshotAttribute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterSnapshotAttribute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterSnapshotAttribute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbClusterSnapshotAttributeMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbClusterSnapshotAttributeMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshotAttributesResult`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterSnapshotAttribute.property.dbClusterSnapshotAttributesResult"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult`](#aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult)

---


### NeptuneResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult(__scope: Construct, __resources: string[], __input: NeptuneModifyDbClusterSnapshotAttributeMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbClusterSnapshotAttributeMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbClusterSnapshotAttributeMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterSnapshotAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult.property.dbClusterSnapshotAttributes"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttribute`](#aws-cdk-sdk.neptune.NeptuneDbClusterSnapshotAttribute)[]

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult.property.dbClusterSnapshotIdentifier"></a>

- *Type:* `string`

---


### NeptuneResponsesModifyDbInstance <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstance.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyDbInstance(__scope: Construct, __resources: string[], __input: NeptuneModifyDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbInstance`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstance.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance`](#aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance)

---


### NeptuneResponsesModifyDbInstanceDbInstance <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyDbInstanceDbInstance(__scope: Construct, __resources: string[], __input: NeptuneModifyDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `characterSetName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.characterSetName"></a>

- *Type:* `string`

---

##### `copyTagsToSnapshot`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.copyTagsToSnapshot"></a>

- *Type:* `boolean`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.dbInstanceArn"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbInstancePort`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.dbInstancePort"></a>

- *Type:* `number`

---

##### `dbInstanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.dbInstanceStatus"></a>

- *Type:* `string`

---

##### `dbiResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.dbiResourceId"></a>

- *Type:* `string`

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.dbName"></a>

- *Type:* `string`

---

##### `dbParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.dbParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbParameterGroupStatus`](#aws-cdk-sdk.neptune.NeptuneDbParameterGroupStatus)[]

---

##### `dbSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.dbSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneDbSecurityGroupMembership)[]

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceDbSubnetGroup`](#aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceDbSubnetGroup)

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `domainMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.domainMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDomainMembership`](#aws-cdk-sdk.neptune.NeptuneDomainMembership)[]

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceEndpoint`](#aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceEndpoint)

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `enhancedMonitoringResourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.enhancedMonitoringResourceArn"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `instanceCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.iops"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `licenseModel`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.masterUsername"></a>

- *Type:* `string`

---

##### `monitoringInterval`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.monitoringInterval"></a>

- *Type:* `number`

---

##### `monitoringRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.monitoringRoleArn"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.multiAz"></a>

- *Type:* `boolean`

---

##### `optionGroupMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.optionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneOptionGroupMembership`](#aws-cdk-sdk.neptune.NeptuneOptionGroupMembership)[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues`](#aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues)

---

##### `performanceInsightsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.performanceInsightsEnabled"></a>

- *Type:* `boolean`

---

##### `performanceInsightsKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.performanceInsightsKmsKeyId"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `promotionTier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.promotionTier"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `readReplicaDbClusterIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.readReplicaDbClusterIdentifiers"></a>

- *Type:* `string`[]

---

##### `readReplicaDbInstanceIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.readReplicaDbInstanceIdentifiers"></a>

- *Type:* `string`[]

---

##### `readReplicaSourceDbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.readReplicaSourceDbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `secondaryAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.secondaryAvailabilityZone"></a>

- *Type:* `string`

---

##### `statusInfos`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.statusInfos"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbInstanceStatusInfo`](#aws-cdk-sdk.neptune.NeptuneDbInstanceStatusInfo)[]

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.storageType"></a>

- *Type:* `string`

---

##### `tdeCredentialArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.tdeCredentialArn"></a>

- *Type:* `string`

---

##### `timezone`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.timezone"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstance.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership)[]

---


### NeptuneResponsesModifyDbInstanceDbInstanceDbSubnetGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceDbSubnetGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyDbInstanceDbInstanceDbSubnetGroup(__scope: Construct, __resources: string[], __input: NeptuneModifyDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupArn"></a>

- *Type:* `string`

---

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceDbSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceDbSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneSubnet`](#aws-cdk-sdk.neptune.NeptuneSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceDbSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### NeptuneResponsesModifyDbInstanceDbInstanceEndpoint <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceEndpoint.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyDbInstanceDbInstanceEndpoint(__scope: Construct, __resources: string[], __input: NeptuneModifyDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceEndpoint.property.address"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceEndpoint.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstanceEndpoint.property.port"></a>

- *Type:* `number`

---


### NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues(__scope: Construct, __resources: string[], __input: NeptuneModifyDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.iops"></a>

- *Type:* `number`

---

##### `licenseModel`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.pendingCloudwatchLogsExports"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports`](#aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports)

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.port"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValues.property.storageType"></a>

- *Type:* `string`

---


### NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(__scope: Construct, __resources: string[], __input: NeptuneModifyDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `logTypesToDisable`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToDisable"></a>

- *Type:* `string`[]

---

##### `logTypesToEnable`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToEnable"></a>

- *Type:* `string`[]

---


### NeptuneResponsesModifyDbParameterGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbParameterGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyDbParameterGroup(__scope: Construct, __resources: string[], __input: NeptuneModifyDbParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbParameterGroup.property.dbParameterGroupName"></a>

- *Type:* `string`

---


### NeptuneResponsesModifyDbSubnetGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyDbSubnetGroup(__scope: Construct, __resources: string[], __input: NeptuneModifyDbSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbSubnetGroupMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroup.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroupDbSubnetGroup`](#aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroupDbSubnetGroup)

---


### NeptuneResponsesModifyDbSubnetGroupDbSubnetGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroupDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroupDbSubnetGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyDbSubnetGroupDbSubnetGroup(__scope: Construct, __resources: string[], __input: NeptuneModifyDbSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroupDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroupDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroupDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyDbSubnetGroupMessage`](#aws-cdk-sdk.neptune.NeptuneModifyDbSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroupDbSubnetGroup.property.dbSubnetGroupArn"></a>

- *Type:* `string`

---

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroupDbSubnetGroup.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroupDbSubnetGroup.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroupDbSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroupDbSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneSubnet`](#aws-cdk-sdk.neptune.NeptuneSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyDbSubnetGroupDbSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### NeptuneResponsesModifyEventSubscription <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscription.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyEventSubscription(__scope: Construct, __resources: string[], __input: NeptuneModifyEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyEventSubscriptionMessage`](#aws-cdk-sdk.neptune.NeptuneModifyEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `eventSubscription`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscription.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription`](#aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription)

---


### NeptuneResponsesModifyEventSubscriptionEventSubscription <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription(__scope: Construct, __resources: string[], __input: NeptuneModifyEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneModifyEventSubscriptionMessage`](#aws-cdk-sdk.neptune.NeptuneModifyEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `customerAwsId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription.property.customerAwsId"></a>

- *Type:* `string`

---

##### `custSubscriptionId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription.property.custSubscriptionId"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategoriesList`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription.property.eventCategoriesList"></a>

- *Type:* `string`[]

---

##### `eventSubscriptionArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription.property.eventSubscriptionArn"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceIdsList`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription.property.sourceIdsList"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription.property.sourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription.property.status"></a>

- *Type:* `string`

---

##### `subscriptionCreationTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesModifyEventSubscriptionEventSubscription.property.subscriptionCreationTime"></a>

- *Type:* `string`

---


### NeptuneResponsesPromoteReadReplicaDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesPromoteReadReplicaDbCluster(__scope: Construct, __resources: string[], __input: NeptunePromoteReadReplicaDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptunePromoteReadReplicaDbClusterMessage`](#aws-cdk-sdk.neptune.NeptunePromoteReadReplicaDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbCluster.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster`](#aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster)

---


### NeptuneResponsesPromoteReadReplicaDbClusterDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster(__scope: Construct, __resources: string[], __input: NeptunePromoteReadReplicaDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptunePromoteReadReplicaDbClusterMessage`](#aws-cdk-sdk.neptune.NeptunePromoteReadReplicaDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterRole`](#aws-cdk-sdk.neptune.NeptuneDbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `characterSetName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.characterSetName"></a>

- *Type:* `string`

---

##### `cloneGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.cloneGroupId"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterMember`](#aws-cdk-sdk.neptune.NeptuneDbClusterMember)[]

---

##### `dbClusterOptionGroupMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.dbClusterOptionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus`](#aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `readReplicaIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.readReplicaIdentifiers"></a>

- *Type:* `string`[]

---

##### `replicationSourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.replicationSourceIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesPromoteReadReplicaDbClusterDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership)[]

---


### NeptuneResponsesRebootDbInstance <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstance.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesRebootDbInstance(__scope: Construct, __resources: string[], __input: NeptuneRebootDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbInstance`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstance.property.dbInstance"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance`](#aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance)

---


### NeptuneResponsesRebootDbInstanceDbInstance <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesRebootDbInstanceDbInstance(__scope: Construct, __resources: string[], __input: NeptuneRebootDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `characterSetName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.characterSetName"></a>

- *Type:* `string`

---

##### `copyTagsToSnapshot`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.copyTagsToSnapshot"></a>

- *Type:* `boolean`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.dbInstanceArn"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbInstancePort`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.dbInstancePort"></a>

- *Type:* `number`

---

##### `dbInstanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.dbInstanceStatus"></a>

- *Type:* `string`

---

##### `dbiResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.dbiResourceId"></a>

- *Type:* `string`

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.dbName"></a>

- *Type:* `string`

---

##### `dbParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.dbParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbParameterGroupStatus`](#aws-cdk-sdk.neptune.NeptuneDbParameterGroupStatus)[]

---

##### `dbSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.dbSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneDbSecurityGroupMembership)[]

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.dbSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceDbSubnetGroup`](#aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceDbSubnetGroup)

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `domainMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.domainMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDomainMembership`](#aws-cdk-sdk.neptune.NeptuneDomainMembership)[]

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceEndpoint`](#aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceEndpoint)

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `enhancedMonitoringResourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.enhancedMonitoringResourceArn"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `instanceCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.iops"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `licenseModel`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.masterUsername"></a>

- *Type:* `string`

---

##### `monitoringInterval`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.monitoringInterval"></a>

- *Type:* `number`

---

##### `monitoringRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.monitoringRoleArn"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.multiAz"></a>

- *Type:* `boolean`

---

##### `optionGroupMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.optionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneOptionGroupMembership`](#aws-cdk-sdk.neptune.NeptuneOptionGroupMembership)[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues`](#aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues)

---

##### `performanceInsightsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.performanceInsightsEnabled"></a>

- *Type:* `boolean`

---

##### `performanceInsightsKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.performanceInsightsKmsKeyId"></a>

- *Type:* `string`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `promotionTier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.promotionTier"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `readReplicaDbClusterIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.readReplicaDbClusterIdentifiers"></a>

- *Type:* `string`[]

---

##### `readReplicaDbInstanceIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.readReplicaDbInstanceIdentifiers"></a>

- *Type:* `string`[]

---

##### `readReplicaSourceDbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.readReplicaSourceDbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `secondaryAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.secondaryAvailabilityZone"></a>

- *Type:* `string`

---

##### `statusInfos`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.statusInfos"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbInstanceStatusInfo`](#aws-cdk-sdk.neptune.NeptuneDbInstanceStatusInfo)[]

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.storageType"></a>

- *Type:* `string`

---

##### `tdeCredentialArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.tdeCredentialArn"></a>

- *Type:* `string`

---

##### `timezone`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.timezone"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstance.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership)[]

---


### NeptuneResponsesRebootDbInstanceDbInstanceDbSubnetGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceDbSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceDbSubnetGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesRebootDbInstanceDbInstanceDbSubnetGroup(__scope: Construct, __resources: string[], __input: NeptuneRebootDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceDbSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceDbSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceDbSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `dbSubnetGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupArn"></a>

- *Type:* `string`

---

##### `dbSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceDbSubnetGroup.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceDbSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceDbSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneSubnet`](#aws-cdk-sdk.neptune.NeptuneSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceDbSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### NeptuneResponsesRebootDbInstanceDbInstanceEndpoint <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceEndpoint.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesRebootDbInstanceDbInstanceEndpoint(__scope: Construct, __resources: string[], __input: NeptuneRebootDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceEndpoint.property.address"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceEndpoint.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstanceEndpoint.property.port"></a>

- *Type:* `number`

---


### NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues(__scope: Construct, __resources: string[], __input: NeptuneRebootDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.caCertificateIdentifier"></a>

- *Type:* `string`

---

##### `dbInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.dbInstanceClass"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.dbSubnetGroupName"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `iops`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.iops"></a>

- *Type:* `number`

---

##### `licenseModel`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.licenseModel"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.pendingCloudwatchLogsExports"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports`](#aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports)

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.port"></a>

- *Type:* `number`

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValues.property.storageType"></a>

- *Type:* `string`

---


### NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(__scope: Construct, __resources: string[], __input: NeptuneRebootDbInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage`](#aws-cdk-sdk.neptune.NeptuneRebootDbInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `logTypesToDisable`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToDisable"></a>

- *Type:* `string`[]

---

##### `logTypesToEnable`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports.property.logTypesToEnable"></a>

- *Type:* `string`[]

---


### NeptuneResponsesRemoveSourceIdentifierFromSubscription <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscription.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscription(__scope: Construct, __resources: string[], __input: NeptuneRemoveSourceIdentifierFromSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRemoveSourceIdentifierFromSubscriptionMessage`](#aws-cdk-sdk.neptune.NeptuneRemoveSourceIdentifierFromSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `eventSubscription`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscription.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription`](#aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription)

---


### NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription(__scope: Construct, __resources: string[], __input: NeptuneRemoveSourceIdentifierFromSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRemoveSourceIdentifierFromSubscriptionMessage`](#aws-cdk-sdk.neptune.NeptuneRemoveSourceIdentifierFromSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `customerAwsId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription.property.customerAwsId"></a>

- *Type:* `string`

---

##### `custSubscriptionId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription.property.custSubscriptionId"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategoriesList`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription.property.eventCategoriesList"></a>

- *Type:* `string`[]

---

##### `eventSubscriptionArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription.property.eventSubscriptionArn"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceIdsList`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription.property.sourceIdsList"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription.property.sourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription.property.status"></a>

- *Type:* `string`

---

##### `subscriptionCreationTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRemoveSourceIdentifierFromSubscriptionEventSubscription.property.subscriptionCreationTime"></a>

- *Type:* `string`

---


### NeptuneResponsesResetDbClusterParameterGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesResetDbClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesResetDbClusterParameterGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesResetDbClusterParameterGroup(__scope: Construct, __resources: string[], __input: NeptuneResetDbClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesResetDbClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesResetDbClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesResetDbClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResetDbClusterParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneResetDbClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesResetDbClusterParameterGroup.property.dbClusterParameterGroupName"></a>

- *Type:* `string`

---


### NeptuneResponsesResetDbParameterGroup <a name="aws-cdk-sdk.neptune.NeptuneResponsesResetDbParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesResetDbParameterGroup.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesResetDbParameterGroup(__scope: Construct, __resources: string[], __input: NeptuneResetDbParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesResetDbParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesResetDbParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesResetDbParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResetDbParameterGroupMessage`](#aws-cdk-sdk.neptune.NeptuneResetDbParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `dbParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesResetDbParameterGroup.property.dbParameterGroupName"></a>

- *Type:* `string`

---


### NeptuneResponsesRestoreDbClusterFromSnapshot <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshot.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesRestoreDbClusterFromSnapshot(__scope: Construct, __resources: string[], __input: NeptuneRestoreDbClusterFromSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage`](#aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshot.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster`](#aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster)

---


### NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster(__scope: Construct, __resources: string[], __input: NeptuneRestoreDbClusterFromSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage`](#aws-cdk-sdk.neptune.NeptuneRestoreDbClusterFromSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterRole`](#aws-cdk-sdk.neptune.NeptuneDbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `characterSetName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.characterSetName"></a>

- *Type:* `string`

---

##### `cloneGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.cloneGroupId"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterMember`](#aws-cdk-sdk.neptune.NeptuneDbClusterMember)[]

---

##### `dbClusterOptionGroupMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.dbClusterOptionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus`](#aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `readReplicaIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.readReplicaIdentifiers"></a>

- *Type:* `string`[]

---

##### `replicationSourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.replicationSourceIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterFromSnapshotDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership)[]

---


### NeptuneResponsesRestoreDbClusterToPointInTime <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTime"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTime.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesRestoreDbClusterToPointInTime(__scope: Construct, __resources: string[], __input: NeptuneRestoreDbClusterToPointInTimeMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTime.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTime.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTime.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage`](#aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTime.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster`](#aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster)

---


### NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster(__scope: Construct, __resources: string[], __input: NeptuneRestoreDbClusterToPointInTimeMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage`](#aws-cdk-sdk.neptune.NeptuneRestoreDbClusterToPointInTimeMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterRole`](#aws-cdk-sdk.neptune.NeptuneDbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `characterSetName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.characterSetName"></a>

- *Type:* `string`

---

##### `cloneGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.cloneGroupId"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterMember`](#aws-cdk-sdk.neptune.NeptuneDbClusterMember)[]

---

##### `dbClusterOptionGroupMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.dbClusterOptionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus`](#aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `readReplicaIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.readReplicaIdentifiers"></a>

- *Type:* `string`[]

---

##### `replicationSourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.replicationSourceIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesRestoreDbClusterToPointInTimeDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership)[]

---


### NeptuneResponsesStartDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesStartDbCluster(__scope: Construct, __resources: string[], __input: NeptuneStartDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneStartDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneStartDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbCluster.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster`](#aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster)

---


### NeptuneResponsesStartDbClusterDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesStartDbClusterDbCluster(__scope: Construct, __resources: string[], __input: NeptuneStartDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneStartDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneStartDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterRole`](#aws-cdk-sdk.neptune.NeptuneDbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `characterSetName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.characterSetName"></a>

- *Type:* `string`

---

##### `cloneGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.cloneGroupId"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterMember`](#aws-cdk-sdk.neptune.NeptuneDbClusterMember)[]

---

##### `dbClusterOptionGroupMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.dbClusterOptionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus`](#aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `readReplicaIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.readReplicaIdentifiers"></a>

- *Type:* `string`[]

---

##### `replicationSourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.replicationSourceIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStartDbClusterDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership)[]

---


### NeptuneResponsesStopDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesStopDbCluster(__scope: Construct, __resources: string[], __input: NeptuneStopDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneStopDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneStopDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `dbCluster`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbCluster.property.dbCluster"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster`](#aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster)

---


### NeptuneResponsesStopDbClusterDbCluster <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster"></a>

#### Initializer <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.Initializer"></a>

```typescript
import { neptune } from 'aws-cdk-sdk'

new neptune.NeptuneResponsesStopDbClusterDbCluster(__scope: Construct, __resources: string[], __input: NeptuneStopDbClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneStopDbClusterMessage`](#aws-cdk-sdk.neptune.NeptuneStopDbClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `associatedRoles`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.associatedRoles"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterRole`](#aws-cdk-sdk.neptune.NeptuneDbClusterRole)[]

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.backupRetentionPeriod"></a>

- *Type:* `number`

---

##### `characterSetName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.characterSetName"></a>

- *Type:* `string`

---

##### `cloneGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.cloneGroupId"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.databaseName"></a>

- *Type:* `string`

---

##### `dbClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.dbClusterArn"></a>

- *Type:* `string`

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.dbClusterIdentifier"></a>

- *Type:* `string`

---

##### `dbClusterMembers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.dbClusterMembers"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterMember`](#aws-cdk-sdk.neptune.NeptuneDbClusterMember)[]

---

##### `dbClusterOptionGroupMemberships`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.dbClusterOptionGroupMemberships"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus`](#aws-cdk-sdk.neptune.NeptuneDbClusterOptionGroupStatus)[]

---

##### `dbClusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.dbClusterParameterGroup"></a>

- *Type:* `string`

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.dbClusterResourceId"></a>

- *Type:* `string`

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.dbSubnetGroup"></a>

- *Type:* `string`

---

##### `deletionProtection`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.deletionProtection"></a>

- *Type:* `boolean`

---

##### `earliestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.earliestRestorableTime"></a>

- *Type:* `string`

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.enabledCloudwatchLogsExports"></a>

- *Type:* `string`[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.iamDatabaseAuthenticationEnabled"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestRestorableTime`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.latestRestorableTime"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.multiAz"></a>

- *Type:* `boolean`

---

##### `percentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.percentProgress"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.port"></a>

- *Type:* `number`

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.preferredBackupWindow"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `readerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.readerEndpoint"></a>

- *Type:* `string`

---

##### `readReplicaIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.readReplicaIdentifiers"></a>

- *Type:* `string`[]

---

##### `replicationSourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.replicationSourceIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.status"></a>

- *Type:* `string`

---

##### `storageEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.storageEncrypted"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.neptune.NeptuneResponsesStopDbClusterDbCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership`](#aws-cdk-sdk.neptune.NeptuneVpcSecurityGroupMembership)[]

---



