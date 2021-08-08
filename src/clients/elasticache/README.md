# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ElastiCacheClient <a name="aws-cdk-sdk.elasticache.ElastiCacheClient"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addTagsToResource` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.addTagsToResource"></a>

```typescript
public addTagsToResource(input: ElastiCacheAddTagsToResourceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheAddTagsToResourceMessage`](#aws-cdk-sdk.elasticache.ElastiCacheAddTagsToResourceMessage)

---

##### `authorizeCacheSecurityGroupIngress` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.authorizeCacheSecurityGroupIngress"></a>

```typescript
public authorizeCacheSecurityGroupIngress(input: ElastiCacheAuthorizeCacheSecurityGroupIngressMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage`](#aws-cdk-sdk.elasticache.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage)

---

##### `batchApplyUpdateAction` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.batchApplyUpdateAction"></a>

```typescript
public batchApplyUpdateAction(input: ElastiCacheBatchApplyUpdateActionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheBatchApplyUpdateActionMessage`](#aws-cdk-sdk.elasticache.ElastiCacheBatchApplyUpdateActionMessage)

---

##### `batchStopUpdateAction` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.batchStopUpdateAction"></a>

```typescript
public batchStopUpdateAction(input: ElastiCacheBatchStopUpdateActionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheBatchStopUpdateActionMessage`](#aws-cdk-sdk.elasticache.ElastiCacheBatchStopUpdateActionMessage)

---

##### `completeMigration` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.completeMigration"></a>

```typescript
public completeMigration(input: ElastiCacheCompleteMigrationMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage)

---

##### `copySnapshot` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.copySnapshot"></a>

```typescript
public copySnapshot(input: ElastiCacheCopySnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCopySnapshotMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCopySnapshotMessage)

---

##### `createCacheCluster` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.createCacheCluster"></a>

```typescript
public createCacheCluster(input: ElastiCacheCreateCacheClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage)

---

##### `createCacheParameterGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.createCacheParameterGroup"></a>

```typescript
public createCacheParameterGroup(input: ElastiCacheCreateCacheParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheParameterGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheParameterGroupMessage)

---

##### `createCacheSecurityGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.createCacheSecurityGroup"></a>

```typescript
public createCacheSecurityGroup(input: ElastiCacheCreateCacheSecurityGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSecurityGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSecurityGroupMessage)

---

##### `createCacheSubnetGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.createCacheSubnetGroup"></a>

```typescript
public createCacheSubnetGroup(input: ElastiCacheCreateCacheSubnetGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSubnetGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSubnetGroupMessage)

---

##### `createGlobalReplicationGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.createGlobalReplicationGroup"></a>

```typescript
public createGlobalReplicationGroup(input: ElastiCacheCreateGlobalReplicationGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateGlobalReplicationGroupMessage)

---

##### `createReplicationGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.createReplicationGroup"></a>

```typescript
public createReplicationGroup(input: ElastiCacheCreateReplicationGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage)

---

##### `createSnapshot` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.createSnapshot"></a>

```typescript
public createSnapshot(input: ElastiCacheCreateSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateSnapshotMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateSnapshotMessage)

---

##### `createUser` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.createUser"></a>

```typescript
public createUser(input: ElastiCacheCreateUserMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateUserMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateUserMessage)

---

##### `createUserGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.createUserGroup"></a>

```typescript
public createUserGroup(input: ElastiCacheCreateUserGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateUserGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateUserGroupMessage)

---

##### `decreaseNodeGroupsInGlobalReplicationGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.decreaseNodeGroupsInGlobalReplicationGroup"></a>

```typescript
public decreaseNodeGroupsInGlobalReplicationGroup(input: ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage)

---

##### `decreaseReplicaCount` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.decreaseReplicaCount"></a>

```typescript
public decreaseReplicaCount(input: ElastiCacheDecreaseReplicaCountMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage)

---

##### `deleteCacheCluster` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.deleteCacheCluster"></a>

```typescript
public deleteCacheCluster(input: ElastiCacheDeleteCacheClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage)

---

##### `deleteCacheParameterGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.deleteCacheParameterGroup"></a>

```typescript
public deleteCacheParameterGroup(input: ElastiCacheDeleteCacheParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheParameterGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheParameterGroupMessage)

---

##### `deleteCacheSecurityGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.deleteCacheSecurityGroup"></a>

```typescript
public deleteCacheSecurityGroup(input: ElastiCacheDeleteCacheSecurityGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheSecurityGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheSecurityGroupMessage)

---

##### `deleteCacheSubnetGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.deleteCacheSubnetGroup"></a>

```typescript
public deleteCacheSubnetGroup(input: ElastiCacheDeleteCacheSubnetGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheSubnetGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheSubnetGroupMessage)

---

##### `deleteGlobalReplicationGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.deleteGlobalReplicationGroup"></a>

```typescript
public deleteGlobalReplicationGroup(input: ElastiCacheDeleteGlobalReplicationGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteGlobalReplicationGroupMessage)

---

##### `deleteReplicationGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.deleteReplicationGroup"></a>

```typescript
public deleteReplicationGroup(input: ElastiCacheDeleteReplicationGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage)

---

##### `deleteSnapshot` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.deleteSnapshot"></a>

```typescript
public deleteSnapshot(input: ElastiCacheDeleteSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteSnapshotMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteSnapshotMessage)

---

##### `deleteUser` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.deleteUser"></a>

```typescript
public deleteUser(input: ElastiCacheDeleteUserMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteUserMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteUserMessage)

---

##### `deleteUserGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.deleteUserGroup"></a>

```typescript
public deleteUserGroup(input: ElastiCacheDeleteUserGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteUserGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteUserGroupMessage)

---

##### `describeCacheClusters` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeCacheClusters"></a>

```typescript
public describeCacheClusters(input: ElastiCacheDescribeCacheClustersMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheClustersMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheClustersMessage)

---

##### `describeCacheEngineVersions` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeCacheEngineVersions"></a>

```typescript
public describeCacheEngineVersions(input: ElastiCacheDescribeCacheEngineVersionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheEngineVersionsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheEngineVersionsMessage)

---

##### `describeCacheParameterGroups` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeCacheParameterGroups"></a>

```typescript
public describeCacheParameterGroups(input: ElastiCacheDescribeCacheParameterGroupsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParameterGroupsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParameterGroupsMessage)

---

##### `describeCacheParameters` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeCacheParameters"></a>

```typescript
public describeCacheParameters(input: ElastiCacheDescribeCacheParametersMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParametersMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParametersMessage)

---

##### `describeCacheSecurityGroups` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeCacheSecurityGroups"></a>

```typescript
public describeCacheSecurityGroups(input: ElastiCacheDescribeCacheSecurityGroupsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSecurityGroupsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSecurityGroupsMessage)

---

##### `describeCacheSubnetGroups` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeCacheSubnetGroups"></a>

```typescript
public describeCacheSubnetGroups(input: ElastiCacheDescribeCacheSubnetGroupsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSubnetGroupsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSubnetGroupsMessage)

---

##### `describeEngineDefaultParameters` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeEngineDefaultParameters"></a>

```typescript
public describeEngineDefaultParameters(input: ElastiCacheDescribeEngineDefaultParametersMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeEngineDefaultParametersMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeEngineDefaultParametersMessage)

---

##### `describeEvents` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeEvents"></a>

```typescript
public describeEvents(input: ElastiCacheDescribeEventsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeEventsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeEventsMessage)

---

##### `describeGlobalReplicationGroups` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeGlobalReplicationGroups"></a>

```typescript
public describeGlobalReplicationGroups(input: ElastiCacheDescribeGlobalReplicationGroupsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeGlobalReplicationGroupsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeGlobalReplicationGroupsMessage)

---

##### `describeReplicationGroups` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeReplicationGroups"></a>

```typescript
public describeReplicationGroups(input: ElastiCacheDescribeReplicationGroupsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeReplicationGroupsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeReplicationGroupsMessage)

---

##### `describeReservedCacheNodes` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeReservedCacheNodes"></a>

```typescript
public describeReservedCacheNodes(input: ElastiCacheDescribeReservedCacheNodesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesMessage)

---

##### `describeReservedCacheNodesOfferings` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeReservedCacheNodesOfferings"></a>

```typescript
public describeReservedCacheNodesOfferings(input: ElastiCacheDescribeReservedCacheNodesOfferingsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesOfferingsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesOfferingsMessage)

---

##### `describeServiceUpdates` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeServiceUpdates"></a>

```typescript
public describeServiceUpdates(input: ElastiCacheDescribeServiceUpdatesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeServiceUpdatesMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeServiceUpdatesMessage)

---

##### `describeSnapshots` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeSnapshots"></a>

```typescript
public describeSnapshots(input: ElastiCacheDescribeSnapshotsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeSnapshotsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeSnapshotsMessage)

---

##### `describeUpdateActions` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeUpdateActions"></a>

```typescript
public describeUpdateActions(input: ElastiCacheDescribeUpdateActionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeUpdateActionsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeUpdateActionsMessage)

---

##### `describeUserGroups` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeUserGroups"></a>

```typescript
public describeUserGroups(input: ElastiCacheDescribeUserGroupsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeUserGroupsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeUserGroupsMessage)

---

##### `describeUsers` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.describeUsers"></a>

```typescript
public describeUsers(input: ElastiCacheDescribeUsersMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeUsersMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeUsersMessage)

---

##### `disassociateGlobalReplicationGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.disassociateGlobalReplicationGroup"></a>

```typescript
public disassociateGlobalReplicationGroup(input: ElastiCacheDisassociateGlobalReplicationGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDisassociateGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDisassociateGlobalReplicationGroupMessage)

---

##### `failoverGlobalReplicationGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.failoverGlobalReplicationGroup"></a>

```typescript
public failoverGlobalReplicationGroup(input: ElastiCacheFailoverGlobalReplicationGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheFailoverGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheFailoverGlobalReplicationGroupMessage)

---

##### `increaseNodeGroupsInGlobalReplicationGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.increaseNodeGroupsInGlobalReplicationGroup"></a>

```typescript
public increaseNodeGroupsInGlobalReplicationGroup(input: ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage)

---

##### `increaseReplicaCount` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.increaseReplicaCount"></a>

```typescript
public increaseReplicaCount(input: ElastiCacheIncreaseReplicaCountMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage)

---

##### `listAllowedNodeTypeModifications` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.listAllowedNodeTypeModifications"></a>

```typescript
public listAllowedNodeTypeModifications(input: ElastiCacheListAllowedNodeTypeModificationsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheListAllowedNodeTypeModificationsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheListAllowedNodeTypeModificationsMessage)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: ElastiCacheListTagsForResourceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheListTagsForResourceMessage`](#aws-cdk-sdk.elasticache.ElastiCacheListTagsForResourceMessage)

---

##### `modifyCacheCluster` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.modifyCacheCluster"></a>

```typescript
public modifyCacheCluster(input: ElastiCacheModifyCacheClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage)

---

##### `modifyCacheParameterGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.modifyCacheParameterGroup"></a>

```typescript
public modifyCacheParameterGroup(input: ElastiCacheModifyCacheParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyCacheParameterGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyCacheParameterGroupMessage)

---

##### `modifyCacheSubnetGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.modifyCacheSubnetGroup"></a>

```typescript
public modifyCacheSubnetGroup(input: ElastiCacheModifyCacheSubnetGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyCacheSubnetGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyCacheSubnetGroupMessage)

---

##### `modifyGlobalReplicationGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.modifyGlobalReplicationGroup"></a>

```typescript
public modifyGlobalReplicationGroup(input: ElastiCacheModifyGlobalReplicationGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyGlobalReplicationGroupMessage)

---

##### `modifyReplicationGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.modifyReplicationGroup"></a>

```typescript
public modifyReplicationGroup(input: ElastiCacheModifyReplicationGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage)

---

##### `modifyReplicationGroupShardConfiguration` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.modifyReplicationGroupShardConfiguration"></a>

```typescript
public modifyReplicationGroupShardConfiguration(input: ElastiCacheModifyReplicationGroupShardConfigurationMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage)

---

##### `modifyUser` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.modifyUser"></a>

```typescript
public modifyUser(input: ElastiCacheModifyUserMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyUserMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyUserMessage)

---

##### `modifyUserGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.modifyUserGroup"></a>

```typescript
public modifyUserGroup(input: ElastiCacheModifyUserGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyUserGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyUserGroupMessage)

---

##### `purchaseReservedCacheNodesOffering` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.purchaseReservedCacheNodesOffering"></a>

```typescript
public purchaseReservedCacheNodesOffering(input: ElastiCachePurchaseReservedCacheNodesOfferingMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCachePurchaseReservedCacheNodesOfferingMessage`](#aws-cdk-sdk.elasticache.ElastiCachePurchaseReservedCacheNodesOfferingMessage)

---

##### `rebalanceSlotsInGlobalReplicationGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.rebalanceSlotsInGlobalReplicationGroup"></a>

```typescript
public rebalanceSlotsInGlobalReplicationGroup(input: ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage)

---

##### `rebootCacheCluster` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.rebootCacheCluster"></a>

```typescript
public rebootCacheCluster(input: ElastiCacheRebootCacheClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage)

---

##### `removeTagsFromResource` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.removeTagsFromResource"></a>

```typescript
public removeTagsFromResource(input: ElastiCacheRemoveTagsFromResourceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRemoveTagsFromResourceMessage`](#aws-cdk-sdk.elasticache.ElastiCacheRemoveTagsFromResourceMessage)

---

##### `resetCacheParameterGroup` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.resetCacheParameterGroup"></a>

```typescript
public resetCacheParameterGroup(input: ElastiCacheResetCacheParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResetCacheParameterGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheResetCacheParameterGroupMessage)

---

##### `revokeCacheSecurityGroupIngress` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.revokeCacheSecurityGroupIngress"></a>

```typescript
public revokeCacheSecurityGroupIngress(input: ElastiCacheRevokeCacheSecurityGroupIngressMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRevokeCacheSecurityGroupIngressMessage`](#aws-cdk-sdk.elasticache.ElastiCacheRevokeCacheSecurityGroupIngressMessage)

---

##### `startMigration` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.startMigration"></a>

```typescript
public startMigration(input: ElastiCacheStartMigrationMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage)

---

##### `testFailover` <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.testFailover"></a>

```typescript
public testFailover(input: ElastiCacheTestFailoverMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage`](#aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage)

---




## Structs <a name="Structs"></a>

### ElastiCacheAddTagsToResourceMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheAddTagsToResourceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheAddTagsToResourceMessage: elasticache.ElastiCacheAddTagsToResourceMessage = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheAddTagsToResourceMessage.property.resourceName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheAddTagsToResourceMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTag`](#aws-cdk-sdk.elasticache.ElastiCacheTag)[]

---

### ElastiCacheAllowedNodeTypeModificationsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheAllowedNodeTypeModificationsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheAllowedNodeTypeModificationsMessage: elasticache.ElastiCacheAllowedNodeTypeModificationsMessage = { ... }
```

##### `scaleDownModifications`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheAllowedNodeTypeModificationsMessage.property.scaleDownModifications"></a>

- *Type:* `string`[]

---

##### `scaleUpModifications`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheAllowedNodeTypeModificationsMessage.property.scaleUpModifications"></a>

- *Type:* `string`[]

---

### ElastiCacheAuthentication <a name="aws-cdk-sdk.elasticache.ElastiCacheAuthentication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheAuthentication: elasticache.ElastiCacheAuthentication = { ... }
```

##### `passwordCount`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheAuthentication.property.passwordCount"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheAuthentication.property.type"></a>

- *Type:* `string`

---

### ElastiCacheAuthorizeCacheSecurityGroupIngressMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheAuthorizeCacheSecurityGroupIngressMessage: elasticache.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage = { ... }
```

##### `cacheSecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage.property.cacheSecurityGroupName"></a>

- *Type:* `string`

---

##### `ec2SecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage.property.ec2SecurityGroupName"></a>

- *Type:* `string`

---

##### `ec2SecurityGroupOwnerId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage.property.ec2SecurityGroupOwnerId"></a>

- *Type:* `string`

---

### ElastiCacheAuthorizeCacheSecurityGroupIngressResult <a name="aws-cdk-sdk.elasticache.ElastiCacheAuthorizeCacheSecurityGroupIngressResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheAuthorizeCacheSecurityGroupIngressResult: elasticache.ElastiCacheAuthorizeCacheSecurityGroupIngressResult = { ... }
```

##### `cacheSecurityGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheAuthorizeCacheSecurityGroupIngressResult.property.cacheSecurityGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup`](#aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup)

---

### ElastiCacheAvailabilityZone <a name="aws-cdk-sdk.elasticache.ElastiCacheAvailabilityZone"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheAvailabilityZone: elasticache.ElastiCacheAvailabilityZone = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheAvailabilityZone.property.name"></a>

- *Type:* `string`

---

### ElastiCacheBatchApplyUpdateActionMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheBatchApplyUpdateActionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheBatchApplyUpdateActionMessage: elasticache.ElastiCacheBatchApplyUpdateActionMessage = { ... }
```

##### `serviceUpdateName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheBatchApplyUpdateActionMessage.property.serviceUpdateName"></a>

- *Type:* `string`

---

##### `cacheClusterIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheBatchApplyUpdateActionMessage.property.cacheClusterIds"></a>

- *Type:* `string`[]

---

##### `replicationGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheBatchApplyUpdateActionMessage.property.replicationGroupIds"></a>

- *Type:* `string`[]

---

### ElastiCacheBatchStopUpdateActionMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheBatchStopUpdateActionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheBatchStopUpdateActionMessage: elasticache.ElastiCacheBatchStopUpdateActionMessage = { ... }
```

##### `serviceUpdateName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheBatchStopUpdateActionMessage.property.serviceUpdateName"></a>

- *Type:* `string`

---

##### `cacheClusterIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheBatchStopUpdateActionMessage.property.cacheClusterIds"></a>

- *Type:* `string`[]

---

##### `replicationGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheBatchStopUpdateActionMessage.property.replicationGroupIds"></a>

- *Type:* `string`[]

---

### ElastiCacheCacheCluster <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheCluster: elasticache.ElastiCacheCacheCluster = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenLastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.authTokenLastModifiedDate"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `cacheClusterCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.cacheClusterCreateTime"></a>

- *Type:* `string`

---

##### `cacheClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `cacheClusterStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.cacheClusterStatus"></a>

- *Type:* `string`

---

##### `cacheNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.cacheNodes"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheNode`](#aws-cdk-sdk.elasticache.ElastiCacheCacheNode)[]

---

##### `cacheNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `cacheParameterGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.cacheParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroupStatus`](#aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroupStatus)

---

##### `cacheSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.cacheSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMembership`](#aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMembership)[]

---

##### `cacheSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `clientDownloadLandingPage`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.clientDownloadLandingPage"></a>

- *Type:* `string`

---

##### `configurationEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.configurationEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheEndpoint)

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNotificationConfiguration`](#aws-cdk-sdk.elasticache.ElastiCacheNotificationConfiguration)

---

##### `numCacheNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.numCacheNodes"></a>

- *Type:* `number`

---

##### `pendingModifiedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCachePendingModifiedValues`](#aws-cdk-sdk.elasticache.ElastiCachePendingModifiedValues)

---

##### `preferredAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.preferredAvailabilityZone"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `preferredOutpostArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.preferredOutpostArn"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.securityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheSecurityGroupMembership`](#aws-cdk-sdk.elasticache.ElastiCacheSecurityGroupMembership)[]

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshotWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheCluster.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

### ElastiCacheCacheClusterMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheClusterMessage: elasticache.ElastiCacheCacheClusterMessage = { ... }
```

##### `cacheClusters`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheClusterMessage.property.cacheClusters"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheCluster`](#aws-cdk-sdk.elasticache.ElastiCacheCacheCluster)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheClusterMessage.property.marker"></a>

- *Type:* `string`

---

### ElastiCacheCacheEngineVersion <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheEngineVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheEngineVersion: elasticache.ElastiCacheCacheEngineVersion = { ... }
```

##### `cacheEngineDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheEngineVersion.property.cacheEngineDescription"></a>

- *Type:* `string`

---

##### `cacheEngineVersionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheEngineVersion.property.cacheEngineVersionDescription"></a>

- *Type:* `string`

---

##### `cacheParameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheEngineVersion.property.cacheParameterGroupFamily"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheEngineVersion.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheEngineVersion.property.engineVersion"></a>

- *Type:* `string`

---

### ElastiCacheCacheEngineVersionMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheEngineVersionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheEngineVersionMessage: elasticache.ElastiCacheCacheEngineVersionMessage = { ... }
```

##### `cacheEngineVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheEngineVersionMessage.property.cacheEngineVersions"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheEngineVersion`](#aws-cdk-sdk.elasticache.ElastiCacheCacheEngineVersion)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheEngineVersionMessage.property.marker"></a>

- *Type:* `string`

---

### ElastiCacheCacheNode <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheNode: elasticache.ElastiCacheCacheNode = { ... }
```

##### `cacheNodeCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNode.property.cacheNodeCreateTime"></a>

- *Type:* `string`

---

##### `cacheNodeId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNode.property.cacheNodeId"></a>

- *Type:* `string`

---

##### `cacheNodeStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNode.property.cacheNodeStatus"></a>

- *Type:* `string`

---

##### `customerAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNode.property.customerAvailabilityZone"></a>

- *Type:* `string`

---

##### `customerOutpostArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNode.property.customerOutpostArn"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNode.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheEndpoint)

---

##### `parameterGroupStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNode.property.parameterGroupStatus"></a>

- *Type:* `string`

---

##### `sourceCacheNodeId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNode.property.sourceCacheNodeId"></a>

- *Type:* `string`

---

### ElastiCacheCacheNodeTypeSpecificParameter <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheNodeTypeSpecificParameter: elasticache.ElastiCacheCacheNodeTypeSpecificParameter = { ... }
```

##### `allowedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter.property.allowedValues"></a>

- *Type:* `string`

---

##### `cacheNodeTypeSpecificValues`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter.property.cacheNodeTypeSpecificValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificValue`](#aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificValue)[]

---

##### `changeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter.property.changeType"></a>

- *Type:* `string`

---

##### `dataType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter.property.dataType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter.property.description"></a>

- *Type:* `string`

---

##### `isModifiable`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter.property.isModifiable"></a>

- *Type:* `boolean`

---

##### `minimumEngineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter.property.minimumEngineVersion"></a>

- *Type:* `string`

---

##### `parameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter.property.parameterName"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter.property.source"></a>

- *Type:* `string`

---

### ElastiCacheCacheNodeTypeSpecificValue <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheNodeTypeSpecificValue: elasticache.ElastiCacheCacheNodeTypeSpecificValue = { ... }
```

##### `cacheNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificValue.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificValue.property.value"></a>

- *Type:* `string`

---

### ElastiCacheCacheNodeUpdateStatus <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeUpdateStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheNodeUpdateStatus: elasticache.ElastiCacheCacheNodeUpdateStatus = { ... }
```

##### `cacheNodeId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeUpdateStatus.property.cacheNodeId"></a>

- *Type:* `string`

---

##### `nodeDeletionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeUpdateStatus.property.nodeDeletionDate"></a>

- *Type:* `string`

---

##### `nodeUpdateEndDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeUpdateStatus.property.nodeUpdateEndDate"></a>

- *Type:* `string`

---

##### `nodeUpdateInitiatedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeUpdateStatus.property.nodeUpdateInitiatedBy"></a>

- *Type:* `string`

---

##### `nodeUpdateInitiatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeUpdateStatus.property.nodeUpdateInitiatedDate"></a>

- *Type:* `string`

---

##### `nodeUpdateStartDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeUpdateStatus.property.nodeUpdateStartDate"></a>

- *Type:* `string`

---

##### `nodeUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeUpdateStatus.property.nodeUpdateStatus"></a>

- *Type:* `string`

---

##### `nodeUpdateStatusModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheNodeUpdateStatus.property.nodeUpdateStatusModifiedDate"></a>

- *Type:* `string`

---

### ElastiCacheCacheParameterGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheParameterGroup: elasticache.ElastiCacheCacheParameterGroup = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroup.property.arn"></a>

- *Type:* `string`

---

##### `cacheParameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroup.property.cacheParameterGroupFamily"></a>

- *Type:* `string`

---

##### `cacheParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroup.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroup.property.description"></a>

- *Type:* `string`

---

##### `isGlobal`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroup.property.isGlobal"></a>

- *Type:* `boolean`

---

### ElastiCacheCacheParameterGroupDetails <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroupDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheParameterGroupDetails: elasticache.ElastiCacheCacheParameterGroupDetails = { ... }
```

##### `cacheNodeTypeSpecificParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroupDetails.property.cacheNodeTypeSpecificParameters"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter`](#aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroupDetails.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroupDetails.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheParameter`](#aws-cdk-sdk.elasticache.ElastiCacheParameter)[]

---

### ElastiCacheCacheParameterGroupNameMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroupNameMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheParameterGroupNameMessage: elasticache.ElastiCacheCacheParameterGroupNameMessage = { ... }
```

##### `cacheParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroupNameMessage.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

### ElastiCacheCacheParameterGroupsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheParameterGroupsMessage: elasticache.ElastiCacheCacheParameterGroupsMessage = { ... }
```

##### `cacheParameterGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroupsMessage.property.cacheParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroup`](#aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroup)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroupsMessage.property.marker"></a>

- *Type:* `string`

---

### ElastiCacheCacheParameterGroupStatus <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroupStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheParameterGroupStatus: elasticache.ElastiCacheCacheParameterGroupStatus = { ... }
```

##### `cacheNodeIdsToReboot`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroupStatus.property.cacheNodeIdsToReboot"></a>

- *Type:* `string`[]

---

##### `cacheParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroupStatus.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `parameterApplyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroupStatus.property.parameterApplyStatus"></a>

- *Type:* `string`

---

### ElastiCacheCacheSecurityGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheSecurityGroup: elasticache.ElastiCacheCacheSecurityGroup = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup.property.arn"></a>

- *Type:* `string`

---

##### `cacheSecurityGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup.property.cacheSecurityGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup.property.description"></a>

- *Type:* `string`

---

##### `ec2SecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup.property.ec2SecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheEc2SecurityGroup`](#aws-cdk-sdk.elasticache.ElastiCacheEc2SecurityGroup)[]

---

##### `ownerId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup.property.ownerId"></a>

- *Type:* `string`

---

### ElastiCacheCacheSecurityGroupMembership <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheSecurityGroupMembership: elasticache.ElastiCacheCacheSecurityGroupMembership = { ... }
```

##### `cacheSecurityGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMembership.property.cacheSecurityGroupName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMembership.property.status"></a>

- *Type:* `string`

---

### ElastiCacheCacheSecurityGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheSecurityGroupMessage: elasticache.ElastiCacheCacheSecurityGroupMessage = { ... }
```

##### `cacheSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMessage.property.cacheSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup`](#aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMessage.property.marker"></a>

- *Type:* `string`

---

### ElastiCacheCacheSubnetGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheSubnetGroup: elasticache.ElastiCacheCacheSubnetGroup = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroup.property.arn"></a>

- *Type:* `string`

---

##### `cacheSubnetGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroup.property.cacheSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `cacheSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroup.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnets`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheSubnet`](#aws-cdk-sdk.elasticache.ElastiCacheSubnet)[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---

### ElastiCacheCacheSubnetGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCacheSubnetGroupMessage: elasticache.ElastiCacheCacheSubnetGroupMessage = { ... }
```

##### `cacheSubnetGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroupMessage.property.cacheSubnetGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroup`](#aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroup)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroupMessage.property.marker"></a>

- *Type:* `string`

---

### ElastiCacheCompleteMigrationMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCompleteMigrationMessage: elasticache.ElastiCacheCompleteMigrationMessage = { ... }
```

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage.property.force"></a>

- *Type:* `boolean`

---

### ElastiCacheCompleteMigrationResponse <a name="aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCompleteMigrationResponse: elasticache.ElastiCacheCompleteMigrationResponse = { ... }
```

##### `replicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationResponse.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup)

---

### ElastiCacheConfigureShard <a name="aws-cdk-sdk.elasticache.ElastiCacheConfigureShard"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheConfigureShard: elasticache.ElastiCacheConfigureShard = { ... }
```

##### `newReplicaCount`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheConfigureShard.property.newReplicaCount"></a>

- *Type:* `number`

---

##### `nodeGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheConfigureShard.property.nodeGroupId"></a>

- *Type:* `string`

---

##### `preferredAvailabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheConfigureShard.property.preferredAvailabilityZones"></a>

- *Type:* `string`[]

---

##### `preferredOutpostArns`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheConfigureShard.property.preferredOutpostArns"></a>

- *Type:* `string`[]

---

### ElastiCacheCopySnapshotMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCopySnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCopySnapshotMessage: elasticache.ElastiCacheCopySnapshotMessage = { ... }
```

##### `sourceSnapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCopySnapshotMessage.property.sourceSnapshotName"></a>

- *Type:* `string`

---

##### `targetSnapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCopySnapshotMessage.property.targetSnapshotName"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCopySnapshotMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `targetBucket`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCopySnapshotMessage.property.targetBucket"></a>

- *Type:* `string`

---

### ElastiCacheCopySnapshotResult <a name="aws-cdk-sdk.elasticache.ElastiCacheCopySnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCopySnapshotResult: elasticache.ElastiCacheCopySnapshotResult = { ... }
```

##### `snapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCopySnapshotResult.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheSnapshot`](#aws-cdk-sdk.elasticache.ElastiCacheSnapshot)

---

### ElastiCacheCreateCacheClusterMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateCacheClusterMessage: elasticache.ElastiCacheCreateCacheClusterMessage = { ... }
```

##### `cacheClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `authToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.authToken"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `azMode`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.azMode"></a>

- *Type:* `string`

---

##### `cacheNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `cacheParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `cacheSecurityGroupNames`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.cacheSecurityGroupNames"></a>

- *Type:* `string`[]

---

##### `cacheSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.notificationTopicArn"></a>

- *Type:* `string`

---

##### `numCacheNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.numCacheNodes"></a>

- *Type:* `number`

---

##### `outpostMode`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.outpostMode"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.port"></a>

- *Type:* `number`

---

##### `preferredAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.preferredAvailabilityZone"></a>

- *Type:* `string`

---

##### `preferredAvailabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.preferredAvailabilityZones"></a>

- *Type:* `string`[]

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `preferredOutpostArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.preferredOutpostArn"></a>

- *Type:* `string`

---

##### `preferredOutpostArns`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.preferredOutpostArns"></a>

- *Type:* `string`[]

---

##### `replicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `snapshotArns`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.snapshotArns"></a>

- *Type:* `string`[]

---

##### `snapshotName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.snapshotName"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshotWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTag`](#aws-cdk-sdk.elasticache.ElastiCacheTag)[]

---

### ElastiCacheCreateCacheClusterResult <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateCacheClusterResult: elasticache.ElastiCacheCreateCacheClusterResult = { ... }
```

##### `cacheCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterResult.property.cacheCluster"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheCluster`](#aws-cdk-sdk.elasticache.ElastiCacheCacheCluster)

---

### ElastiCacheCreateCacheParameterGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateCacheParameterGroupMessage: elasticache.ElastiCacheCreateCacheParameterGroupMessage = { ... }
```

##### `cacheParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheParameterGroupMessage.property.cacheParameterGroupFamily"></a>

- *Type:* `string`

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheParameterGroupMessage.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheParameterGroupMessage.property.description"></a>

- *Type:* `string`

---

### ElastiCacheCreateCacheParameterGroupResult <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheParameterGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateCacheParameterGroupResult: elasticache.ElastiCacheCreateCacheParameterGroupResult = { ... }
```

##### `cacheParameterGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheParameterGroupResult.property.cacheParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroup`](#aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroup)

---

### ElastiCacheCreateCacheSecurityGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSecurityGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateCacheSecurityGroupMessage: elasticache.ElastiCacheCreateCacheSecurityGroupMessage = { ... }
```

##### `cacheSecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSecurityGroupMessage.property.cacheSecurityGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSecurityGroupMessage.property.description"></a>

- *Type:* `string`

---

### ElastiCacheCreateCacheSecurityGroupResult <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSecurityGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateCacheSecurityGroupResult: elasticache.ElastiCacheCreateCacheSecurityGroupResult = { ... }
```

##### `cacheSecurityGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSecurityGroupResult.property.cacheSecurityGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup`](#aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup)

---

### ElastiCacheCreateCacheSubnetGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateCacheSubnetGroupMessage: elasticache.ElastiCacheCreateCacheSubnetGroupMessage = { ... }
```

##### `cacheSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSubnetGroupMessage.property.cacheSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSubnetGroupMessage.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSubnetGroupMessage.property.subnetIds"></a>

- *Type:* `string`[]

---

### ElastiCacheCreateCacheSubnetGroupResult <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSubnetGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateCacheSubnetGroupResult: elasticache.ElastiCacheCreateCacheSubnetGroupResult = { ... }
```

##### `cacheSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSubnetGroupResult.property.cacheSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroup`](#aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroup)

---

### ElastiCacheCreateGlobalReplicationGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateGlobalReplicationGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateGlobalReplicationGroupMessage: elasticache.ElastiCacheCreateGlobalReplicationGroupMessage = { ... }
```

##### `globalReplicationGroupIdSuffix`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateGlobalReplicationGroupMessage.property.globalReplicationGroupIdSuffix"></a>

- *Type:* `string`

---

##### `primaryReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateGlobalReplicationGroupMessage.property.primaryReplicationGroupId"></a>

- *Type:* `string`

---

##### `globalReplicationGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateGlobalReplicationGroupMessage.property.globalReplicationGroupDescription"></a>

- *Type:* `string`

---

### ElastiCacheCreateGlobalReplicationGroupResult <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateGlobalReplicationGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateGlobalReplicationGroupResult: elasticache.ElastiCacheCreateGlobalReplicationGroupResult = { ... }
```

##### `globalReplicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateGlobalReplicationGroupResult.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup)

---

### ElastiCacheCreateReplicationGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateReplicationGroupMessage: elasticache.ElastiCacheCreateReplicationGroupMessage = { ... }
```

##### `replicationGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.replicationGroupDescription"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.authToken"></a>

- *Type:* `string`

---

##### `automaticFailoverEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.automaticFailoverEnabled"></a>

- *Type:* `boolean`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `cacheNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `cacheParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `cacheSecurityGroupNames`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.cacheSecurityGroupNames"></a>

- *Type:* `string`[]

---

##### `cacheSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `globalReplicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `multiAzEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.multiAzEnabled"></a>

- *Type:* `boolean`

---

##### `nodeGroupConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.nodeGroupConfiguration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeGroupConfiguration`](#aws-cdk-sdk.elasticache.ElastiCacheNodeGroupConfiguration)[]

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.notificationTopicArn"></a>

- *Type:* `string`

---

##### `numCacheClusters`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.numCacheClusters"></a>

- *Type:* `number`

---

##### `numNodeGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.numNodeGroups"></a>

- *Type:* `number`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.port"></a>

- *Type:* `number`

---

##### `preferredCacheClusterAZs`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.preferredCacheClusterAZs"></a>

- *Type:* `string`[]

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `primaryClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.primaryClusterId"></a>

- *Type:* `string`

---

##### `replicasPerNodeGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.replicasPerNodeGroup"></a>

- *Type:* `number`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `snapshotArns`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.snapshotArns"></a>

- *Type:* `string`[]

---

##### `snapshotName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.snapshotName"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshotWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTag`](#aws-cdk-sdk.elasticache.ElastiCacheTag)[]

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `userGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage.property.userGroupIds"></a>

- *Type:* `string`[]

---

### ElastiCacheCreateReplicationGroupResult <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateReplicationGroupResult: elasticache.ElastiCacheCreateReplicationGroupResult = { ... }
```

##### `replicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupResult.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup)

---

### ElastiCacheCreateSnapshotMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateSnapshotMessage: elasticache.ElastiCacheCreateSnapshotMessage = { ... }
```

##### `snapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateSnapshotMessage.property.snapshotName"></a>

- *Type:* `string`

---

##### `cacheClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateSnapshotMessage.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateSnapshotMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateSnapshotMessage.property.replicationGroupId"></a>

- *Type:* `string`

---

### ElastiCacheCreateSnapshotResult <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateSnapshotResult: elasticache.ElastiCacheCreateSnapshotResult = { ... }
```

##### `snapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateSnapshotResult.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheSnapshot`](#aws-cdk-sdk.elasticache.ElastiCacheSnapshot)

---

### ElastiCacheCreateUserGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateUserGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateUserGroupMessage: elasticache.ElastiCacheCreateUserGroupMessage = { ... }
```

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateUserGroupMessage.property.engine"></a>

- *Type:* `string`

---

##### `userGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateUserGroupMessage.property.userGroupId"></a>

- *Type:* `string`

---

##### `userIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateUserGroupMessage.property.userIds"></a>

- *Type:* `string`[]

---

### ElastiCacheCreateUserMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateUserMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCreateUserMessage: elasticache.ElastiCacheCreateUserMessage = { ... }
```

##### `accessString`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateUserMessage.property.accessString"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateUserMessage.property.engine"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateUserMessage.property.userId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateUserMessage.property.userName"></a>

- *Type:* `string`

---

##### `noPasswordRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateUserMessage.property.noPasswordRequired"></a>

- *Type:* `boolean`

---

##### `passwords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCreateUserMessage.property.passwords"></a>

- *Type:* `string`[]

---

### ElastiCacheCustomerNodeEndpoint <a name="aws-cdk-sdk.elasticache.ElastiCacheCustomerNodeEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheCustomerNodeEndpoint: elasticache.ElastiCacheCustomerNodeEndpoint = { ... }
```

##### `address`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCustomerNodeEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheCustomerNodeEndpoint.property.port"></a>

- *Type:* `number`

---

### ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage: elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage = { ... }
```

##### `applyImmediately`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage.property.applyImmediately"></a>

- *Type:* `boolean`

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `nodeGroupCount`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage.property.nodeGroupCount"></a>

- *Type:* `number`

---

##### `globalNodeGroupsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage.property.globalNodeGroupsToRemove"></a>

- *Type:* `string`[]

---

##### `globalNodeGroupsToRetain`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage.property.globalNodeGroupsToRetain"></a>

- *Type:* `string`[]

---

### ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupResult <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDecreaseNodeGroupsInGlobalReplicationGroupResult: elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupResult = { ... }
```

##### `globalReplicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupResult.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup)

---

### ElastiCacheDecreaseReplicaCountMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDecreaseReplicaCountMessage: elasticache.ElastiCacheDecreaseReplicaCountMessage = { ... }
```

##### `applyImmediately`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage.property.applyImmediately"></a>

- *Type:* `boolean`

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `newReplicaCount`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage.property.newReplicaCount"></a>

- *Type:* `number`

---

##### `replicaConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage.property.replicaConfiguration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheConfigureShard`](#aws-cdk-sdk.elasticache.ElastiCacheConfigureShard)[]

---

##### `replicasToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage.property.replicasToRemove"></a>

- *Type:* `string`[]

---

### ElastiCacheDecreaseReplicaCountResult <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDecreaseReplicaCountResult: elasticache.ElastiCacheDecreaseReplicaCountResult = { ... }
```

##### `replicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountResult.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup)

---

### ElastiCacheDeleteCacheClusterMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDeleteCacheClusterMessage: elasticache.ElastiCacheDeleteCacheClusterMessage = { ... }
```

##### `cacheClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage.property.finalSnapshotIdentifier"></a>

- *Type:* `string`

---

### ElastiCacheDeleteCacheClusterResult <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDeleteCacheClusterResult: elasticache.ElastiCacheDeleteCacheClusterResult = { ... }
```

##### `cacheCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterResult.property.cacheCluster"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheCluster`](#aws-cdk-sdk.elasticache.ElastiCacheCacheCluster)

---

### ElastiCacheDeleteCacheParameterGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDeleteCacheParameterGroupMessage: elasticache.ElastiCacheDeleteCacheParameterGroupMessage = { ... }
```

##### `cacheParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheParameterGroupMessage.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

### ElastiCacheDeleteCacheSecurityGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheSecurityGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDeleteCacheSecurityGroupMessage: elasticache.ElastiCacheDeleteCacheSecurityGroupMessage = { ... }
```

##### `cacheSecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheSecurityGroupMessage.property.cacheSecurityGroupName"></a>

- *Type:* `string`

---

### ElastiCacheDeleteCacheSubnetGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDeleteCacheSubnetGroupMessage: elasticache.ElastiCacheDeleteCacheSubnetGroupMessage = { ... }
```

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheSubnetGroupMessage.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

### ElastiCacheDeleteGlobalReplicationGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteGlobalReplicationGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDeleteGlobalReplicationGroupMessage: elasticache.ElastiCacheDeleteGlobalReplicationGroupMessage = { ... }
```

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteGlobalReplicationGroupMessage.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `retainPrimaryReplicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteGlobalReplicationGroupMessage.property.retainPrimaryReplicationGroup"></a>

- *Type:* `boolean`

---

### ElastiCacheDeleteGlobalReplicationGroupResult <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteGlobalReplicationGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDeleteGlobalReplicationGroupResult: elasticache.ElastiCacheDeleteGlobalReplicationGroupResult = { ... }
```

##### `globalReplicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteGlobalReplicationGroupResult.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup)

---

### ElastiCacheDeleteReplicationGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDeleteReplicationGroupMessage: elasticache.ElastiCacheDeleteReplicationGroupMessage = { ... }
```

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage.property.finalSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `retainPrimaryCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage.property.retainPrimaryCluster"></a>

- *Type:* `boolean`

---

### ElastiCacheDeleteReplicationGroupResult <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDeleteReplicationGroupResult: elasticache.ElastiCacheDeleteReplicationGroupResult = { ... }
```

##### `replicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupResult.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup)

---

### ElastiCacheDeleteSnapshotMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDeleteSnapshotMessage: elasticache.ElastiCacheDeleteSnapshotMessage = { ... }
```

##### `snapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteSnapshotMessage.property.snapshotName"></a>

- *Type:* `string`

---

### ElastiCacheDeleteSnapshotResult <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDeleteSnapshotResult: elasticache.ElastiCacheDeleteSnapshotResult = { ... }
```

##### `snapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteSnapshotResult.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheSnapshot`](#aws-cdk-sdk.elasticache.ElastiCacheSnapshot)

---

### ElastiCacheDeleteUserGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteUserGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDeleteUserGroupMessage: elasticache.ElastiCacheDeleteUserGroupMessage = { ... }
```

##### `userGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteUserGroupMessage.property.userGroupId"></a>

- *Type:* `string`

---

### ElastiCacheDeleteUserMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteUserMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDeleteUserMessage: elasticache.ElastiCacheDeleteUserMessage = { ... }
```

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDeleteUserMessage.property.userId"></a>

- *Type:* `string`

---

### ElastiCacheDescribeCacheClustersMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheClustersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeCacheClustersMessage: elasticache.ElastiCacheDescribeCacheClustersMessage = { ... }
```

##### `cacheClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheClustersMessage.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheClustersMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheClustersMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `showCacheClustersNotInReplicationGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheClustersMessage.property.showCacheClustersNotInReplicationGroups"></a>

- *Type:* `boolean`

---

##### `showCacheNodeInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheClustersMessage.property.showCacheNodeInfo"></a>

- *Type:* `boolean`

---

### ElastiCacheDescribeCacheEngineVersionsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheEngineVersionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeCacheEngineVersionsMessage: elasticache.ElastiCacheDescribeCacheEngineVersionsMessage = { ... }
```

##### `cacheParameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheEngineVersionsMessage.property.cacheParameterGroupFamily"></a>

- *Type:* `string`

---

##### `defaultOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheEngineVersionsMessage.property.defaultOnly"></a>

- *Type:* `boolean`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheEngineVersionsMessage.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheEngineVersionsMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheEngineVersionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheEngineVersionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### ElastiCacheDescribeCacheParameterGroupsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParameterGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeCacheParameterGroupsMessage: elasticache.ElastiCacheDescribeCacheParameterGroupsMessage = { ... }
```

##### `cacheParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParameterGroupsMessage.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParameterGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParameterGroupsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### ElastiCacheDescribeCacheParametersMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParametersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeCacheParametersMessage: elasticache.ElastiCacheDescribeCacheParametersMessage = { ... }
```

##### `cacheParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParametersMessage.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParametersMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParametersMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParametersMessage.property.source"></a>

- *Type:* `string`

---

### ElastiCacheDescribeCacheSecurityGroupsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSecurityGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeCacheSecurityGroupsMessage: elasticache.ElastiCacheDescribeCacheSecurityGroupsMessage = { ... }
```

##### `cacheSecurityGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSecurityGroupsMessage.property.cacheSecurityGroupName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSecurityGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSecurityGroupsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### ElastiCacheDescribeCacheSubnetGroupsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSubnetGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeCacheSubnetGroupsMessage: elasticache.ElastiCacheDescribeCacheSubnetGroupsMessage = { ... }
```

##### `cacheSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSubnetGroupsMessage.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSubnetGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSubnetGroupsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### ElastiCacheDescribeEngineDefaultParametersMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeEngineDefaultParametersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeEngineDefaultParametersMessage: elasticache.ElastiCacheDescribeEngineDefaultParametersMessage = { ... }
```

##### `cacheParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeEngineDefaultParametersMessage.property.cacheParameterGroupFamily"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeEngineDefaultParametersMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeEngineDefaultParametersMessage.property.maxRecords"></a>

- *Type:* `number`

---

### ElastiCacheDescribeEngineDefaultParametersResult <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeEngineDefaultParametersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeEngineDefaultParametersResult: elasticache.ElastiCacheDescribeEngineDefaultParametersResult = { ... }
```

##### `engineDefaults`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeEngineDefaultParametersResult.property.engineDefaults"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheEngineDefaults`](#aws-cdk-sdk.elasticache.ElastiCacheEngineDefaults)

---

### ElastiCacheDescribeEventsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeEventsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeEventsMessage: elasticache.ElastiCacheDescribeEventsMessage = { ... }
```

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeEventsMessage.property.duration"></a>

- *Type:* `number`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeEventsMessage.property.endTime"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeEventsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeEventsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `sourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeEventsMessage.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeEventsMessage.property.sourceType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeEventsMessage.property.startTime"></a>

- *Type:* `string`

---

### ElastiCacheDescribeGlobalReplicationGroupsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeGlobalReplicationGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeGlobalReplicationGroupsMessage: elasticache.ElastiCacheDescribeGlobalReplicationGroupsMessage = { ... }
```

##### `globalReplicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeGlobalReplicationGroupsMessage.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeGlobalReplicationGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeGlobalReplicationGroupsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `showMemberInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeGlobalReplicationGroupsMessage.property.showMemberInfo"></a>

- *Type:* `boolean`

---

### ElastiCacheDescribeGlobalReplicationGroupsResult <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeGlobalReplicationGroupsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeGlobalReplicationGroupsResult: elasticache.ElastiCacheDescribeGlobalReplicationGroupsResult = { ... }
```

##### `globalReplicationGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeGlobalReplicationGroupsResult.property.globalReplicationGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeGlobalReplicationGroupsResult.property.marker"></a>

- *Type:* `string`

---

### ElastiCacheDescribeReplicationGroupsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReplicationGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeReplicationGroupsMessage: elasticache.ElastiCacheDescribeReplicationGroupsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReplicationGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReplicationGroupsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `replicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReplicationGroupsMessage.property.replicationGroupId"></a>

- *Type:* `string`

---

### ElastiCacheDescribeReservedCacheNodesMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeReservedCacheNodesMessage: elasticache.ElastiCacheDescribeReservedCacheNodesMessage = { ... }
```

##### `cacheNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesMessage.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesMessage.property.duration"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `offeringType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesMessage.property.offeringType"></a>

- *Type:* `string`

---

##### `productDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesMessage.property.productDescription"></a>

- *Type:* `string`

---

##### `reservedCacheNodeId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesMessage.property.reservedCacheNodeId"></a>

- *Type:* `string`

---

##### `reservedCacheNodesOfferingId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesMessage.property.reservedCacheNodesOfferingId"></a>

- *Type:* `string`

---

### ElastiCacheDescribeReservedCacheNodesOfferingsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesOfferingsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeReservedCacheNodesOfferingsMessage: elasticache.ElastiCacheDescribeReservedCacheNodesOfferingsMessage = { ... }
```

##### `cacheNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesOfferingsMessage.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesOfferingsMessage.property.duration"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesOfferingsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesOfferingsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `offeringType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesOfferingsMessage.property.offeringType"></a>

- *Type:* `string`

---

##### `productDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesOfferingsMessage.property.productDescription"></a>

- *Type:* `string`

---

##### `reservedCacheNodesOfferingId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesOfferingsMessage.property.reservedCacheNodesOfferingId"></a>

- *Type:* `string`

---

### ElastiCacheDescribeServiceUpdatesMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeServiceUpdatesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeServiceUpdatesMessage: elasticache.ElastiCacheDescribeServiceUpdatesMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeServiceUpdatesMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeServiceUpdatesMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `serviceUpdateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeServiceUpdatesMessage.property.serviceUpdateName"></a>

- *Type:* `string`

---

##### `serviceUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeServiceUpdatesMessage.property.serviceUpdateStatus"></a>

- *Type:* `string`[]

---

### ElastiCacheDescribeSnapshotsListMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeSnapshotsListMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeSnapshotsListMessage: elasticache.ElastiCacheDescribeSnapshotsListMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeSnapshotsListMessage.property.marker"></a>

- *Type:* `string`

---

##### `snapshots`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeSnapshotsListMessage.property.snapshots"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheSnapshot`](#aws-cdk-sdk.elasticache.ElastiCacheSnapshot)[]

---

### ElastiCacheDescribeSnapshotsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeSnapshotsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeSnapshotsMessage: elasticache.ElastiCacheDescribeSnapshotsMessage = { ... }
```

##### `cacheClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeSnapshotsMessage.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeSnapshotsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeSnapshotsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `replicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeSnapshotsMessage.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `showNodeGroupConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeSnapshotsMessage.property.showNodeGroupConfig"></a>

- *Type:* `boolean`

---

##### `snapshotName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeSnapshotsMessage.property.snapshotName"></a>

- *Type:* `string`

---

##### `snapshotSource`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeSnapshotsMessage.property.snapshotSource"></a>

- *Type:* `string`

---

### ElastiCacheDescribeUpdateActionsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUpdateActionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeUpdateActionsMessage: elasticache.ElastiCacheDescribeUpdateActionsMessage = { ... }
```

##### `cacheClusterIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUpdateActionsMessage.property.cacheClusterIds"></a>

- *Type:* `string`[]

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUpdateActionsMessage.property.engine"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUpdateActionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUpdateActionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `replicationGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUpdateActionsMessage.property.replicationGroupIds"></a>

- *Type:* `string`[]

---

##### `serviceUpdateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUpdateActionsMessage.property.serviceUpdateName"></a>

- *Type:* `string`

---

##### `serviceUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUpdateActionsMessage.property.serviceUpdateStatus"></a>

- *Type:* `string`[]

---

##### `serviceUpdateTimeRange`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUpdateActionsMessage.property.serviceUpdateTimeRange"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTimeRangeFilter`](#aws-cdk-sdk.elasticache.ElastiCacheTimeRangeFilter)

---

##### `showNodeLevelUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUpdateActionsMessage.property.showNodeLevelUpdateStatus"></a>

- *Type:* `boolean`

---

##### `updateActionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUpdateActionsMessage.property.updateActionStatus"></a>

- *Type:* `string`[]

---

### ElastiCacheDescribeUserGroupsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUserGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeUserGroupsMessage: elasticache.ElastiCacheDescribeUserGroupsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUserGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUserGroupsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `userGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUserGroupsMessage.property.userGroupId"></a>

- *Type:* `string`

---

### ElastiCacheDescribeUserGroupsResult <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUserGroupsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeUserGroupsResult: elasticache.ElastiCacheDescribeUserGroupsResult = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUserGroupsResult.property.marker"></a>

- *Type:* `string`

---

##### `userGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUserGroupsResult.property.userGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheUserGroup`](#aws-cdk-sdk.elasticache.ElastiCacheUserGroup)[]

---

### ElastiCacheDescribeUsersMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUsersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeUsersMessage: elasticache.ElastiCacheDescribeUsersMessage = { ... }
```

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUsersMessage.property.engine"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUsersMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheFilter`](#aws-cdk-sdk.elasticache.ElastiCacheFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUsersMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUsersMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUsersMessage.property.userId"></a>

- *Type:* `string`

---

### ElastiCacheDescribeUsersResult <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUsersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDescribeUsersResult: elasticache.ElastiCacheDescribeUsersResult = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUsersResult.property.marker"></a>

- *Type:* `string`

---

##### `users`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDescribeUsersResult.property.users"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheUser`](#aws-cdk-sdk.elasticache.ElastiCacheUser)[]

---

### ElastiCacheDisassociateGlobalReplicationGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheDisassociateGlobalReplicationGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDisassociateGlobalReplicationGroupMessage: elasticache.ElastiCacheDisassociateGlobalReplicationGroupMessage = { ... }
```

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDisassociateGlobalReplicationGroupMessage.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDisassociateGlobalReplicationGroupMessage.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `replicationGroupRegion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDisassociateGlobalReplicationGroupMessage.property.replicationGroupRegion"></a>

- *Type:* `string`

---

### ElastiCacheDisassociateGlobalReplicationGroupResult <a name="aws-cdk-sdk.elasticache.ElastiCacheDisassociateGlobalReplicationGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheDisassociateGlobalReplicationGroupResult: elasticache.ElastiCacheDisassociateGlobalReplicationGroupResult = { ... }
```

##### `globalReplicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheDisassociateGlobalReplicationGroupResult.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup)

---

### ElastiCacheEc2SecurityGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheEc2SecurityGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheEc2SecurityGroup: elasticache.ElastiCacheEc2SecurityGroup = { ... }
```

##### `ec2SecurityGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheEc2SecurityGroup.property.ec2SecurityGroupName"></a>

- *Type:* `string`

---

##### `ec2SecurityGroupOwnerId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheEc2SecurityGroup.property.ec2SecurityGroupOwnerId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheEc2SecurityGroup.property.status"></a>

- *Type:* `string`

---

### ElastiCacheEndpoint <a name="aws-cdk-sdk.elasticache.ElastiCacheEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheEndpoint: elasticache.ElastiCacheEndpoint = { ... }
```

##### `address`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheEndpoint.property.port"></a>

- *Type:* `number`

---

### ElastiCacheEngineDefaults <a name="aws-cdk-sdk.elasticache.ElastiCacheEngineDefaults"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheEngineDefaults: elasticache.ElastiCacheEngineDefaults = { ... }
```

##### `cacheNodeTypeSpecificParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheEngineDefaults.property.cacheNodeTypeSpecificParameters"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter`](#aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter)[]

---

##### `cacheParameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheEngineDefaults.property.cacheParameterGroupFamily"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheEngineDefaults.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheEngineDefaults.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheParameter`](#aws-cdk-sdk.elasticache.ElastiCacheParameter)[]

---

### ElastiCacheEvent <a name="aws-cdk-sdk.elasticache.ElastiCacheEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheEvent: elasticache.ElastiCacheEvent = { ... }
```

##### `date`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheEvent.property.date"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheEvent.property.message"></a>

- *Type:* `string`

---

##### `sourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheEvent.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheEvent.property.sourceType"></a>

- *Type:* `string`

---

### ElastiCacheEventsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheEventsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheEventsMessage: elasticache.ElastiCacheEventsMessage = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheEventsMessage.property.events"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheEvent`](#aws-cdk-sdk.elasticache.ElastiCacheEvent)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheEventsMessage.property.marker"></a>

- *Type:* `string`

---

### ElastiCacheFailoverGlobalReplicationGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheFailoverGlobalReplicationGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheFailoverGlobalReplicationGroupMessage: elasticache.ElastiCacheFailoverGlobalReplicationGroupMessage = { ... }
```

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheFailoverGlobalReplicationGroupMessage.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `primaryRegion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheFailoverGlobalReplicationGroupMessage.property.primaryRegion"></a>

- *Type:* `string`

---

##### `primaryReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheFailoverGlobalReplicationGroupMessage.property.primaryReplicationGroupId"></a>

- *Type:* `string`

---

### ElastiCacheFailoverGlobalReplicationGroupResult <a name="aws-cdk-sdk.elasticache.ElastiCacheFailoverGlobalReplicationGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheFailoverGlobalReplicationGroupResult: elasticache.ElastiCacheFailoverGlobalReplicationGroupResult = { ... }
```

##### `globalReplicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheFailoverGlobalReplicationGroupResult.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup)

---

### ElastiCacheFilter <a name="aws-cdk-sdk.elasticache.ElastiCacheFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheFilter: elasticache.ElastiCacheFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheFilter.property.values"></a>

- *Type:* `string`[]

---

### ElastiCacheGlobalNodeGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheGlobalNodeGroup: elasticache.ElastiCacheGlobalNodeGroup = { ... }
```

##### `globalNodeGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup.property.globalNodeGroupId"></a>

- *Type:* `string`

---

##### `slots`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup.property.slots"></a>

- *Type:* `string`

---

### ElastiCacheGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheGlobalReplicationGroup: elasticache.ElastiCacheGlobalReplicationGroup = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `cacheNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup.property.engineVersion"></a>

- *Type:* `string`

---

##### `globalNodeGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup.property.globalNodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup)[]

---

##### `globalReplicationGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

- *Type:* `string`

---

##### `globalReplicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `members`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup.property.members"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

### ElastiCacheGlobalReplicationGroupInfo <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheGlobalReplicationGroupInfo: elasticache.ElastiCacheGlobalReplicationGroupInfo = { ... }
```

##### `globalReplicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupInfo.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `globalReplicationGroupMemberRole`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupInfo.property.globalReplicationGroupMemberRole"></a>

- *Type:* `string`

---

### ElastiCacheGlobalReplicationGroupMember <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheGlobalReplicationGroupMember: elasticache.ElastiCacheGlobalReplicationGroupMember = { ... }
```

##### `automaticFailover`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember.property.automaticFailover"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `replicationGroupRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember.property.replicationGroupRegion"></a>

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember.property.role"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember.property.status"></a>

- *Type:* `string`

---

### ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage: elasticache.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage = { ... }
```

##### `applyImmediately`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage.property.applyImmediately"></a>

- *Type:* `boolean`

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `nodeGroupCount`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage.property.nodeGroupCount"></a>

- *Type:* `number`

---

##### `regionalConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage.property.regionalConfigurations"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRegionalConfiguration`](#aws-cdk-sdk.elasticache.ElastiCacheRegionalConfiguration)[]

---

### ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupResult <a name="aws-cdk-sdk.elasticache.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheIncreaseNodeGroupsInGlobalReplicationGroupResult: elasticache.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupResult = { ... }
```

##### `globalReplicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupResult.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup)

---

### ElastiCacheIncreaseReplicaCountMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheIncreaseReplicaCountMessage: elasticache.ElastiCacheIncreaseReplicaCountMessage = { ... }
```

##### `applyImmediately`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage.property.applyImmediately"></a>

- *Type:* `boolean`

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `newReplicaCount`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage.property.newReplicaCount"></a>

- *Type:* `number`

---

##### `replicaConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage.property.replicaConfiguration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheConfigureShard`](#aws-cdk-sdk.elasticache.ElastiCacheConfigureShard)[]

---

### ElastiCacheIncreaseReplicaCountResult <a name="aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheIncreaseReplicaCountResult: elasticache.ElastiCacheIncreaseReplicaCountResult = { ... }
```

##### `replicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountResult.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup)

---

### ElastiCacheListAllowedNodeTypeModificationsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheListAllowedNodeTypeModificationsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheListAllowedNodeTypeModificationsMessage: elasticache.ElastiCacheListAllowedNodeTypeModificationsMessage = { ... }
```

##### `cacheClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheListAllowedNodeTypeModificationsMessage.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheListAllowedNodeTypeModificationsMessage.property.replicationGroupId"></a>

- *Type:* `string`

---

### ElastiCacheListTagsForResourceMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheListTagsForResourceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheListTagsForResourceMessage: elasticache.ElastiCacheListTagsForResourceMessage = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheListTagsForResourceMessage.property.resourceName"></a>

- *Type:* `string`

---

### ElastiCacheModifyCacheClusterMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheModifyCacheClusterMessage: elasticache.ElastiCacheModifyCacheClusterMessage = { ... }
```

##### `cacheClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `applyImmediately`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.applyImmediately"></a>

- *Type:* `boolean`

---

##### `authToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.authToken"></a>

- *Type:* `string`

---

##### `authTokenUpdateStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.authTokenUpdateStrategy"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `azMode`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.azMode"></a>

- *Type:* `string`

---

##### `cacheNodeIdsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.cacheNodeIdsToRemove"></a>

- *Type:* `string`[]

---

##### `cacheNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `cacheParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `cacheSecurityGroupNames`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.cacheSecurityGroupNames"></a>

- *Type:* `string`[]

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `newAvailabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.newAvailabilityZones"></a>

- *Type:* `string`[]

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.notificationTopicArn"></a>

- *Type:* `string`

---

##### `notificationTopicStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.notificationTopicStatus"></a>

- *Type:* `string`

---

##### `numCacheNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.numCacheNodes"></a>

- *Type:* `number`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshotWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage.property.snapshotWindow"></a>

- *Type:* `string`

---

### ElastiCacheModifyCacheClusterResult <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheModifyCacheClusterResult: elasticache.ElastiCacheModifyCacheClusterResult = { ... }
```

##### `cacheCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterResult.property.cacheCluster"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheCluster`](#aws-cdk-sdk.elasticache.ElastiCacheCacheCluster)

---

### ElastiCacheModifyCacheParameterGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheModifyCacheParameterGroupMessage: elasticache.ElastiCacheModifyCacheParameterGroupMessage = { ... }
```

##### `cacheParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheParameterGroupMessage.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `parameterNameValues`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheParameterGroupMessage.property.parameterNameValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheParameterNameValue`](#aws-cdk-sdk.elasticache.ElastiCacheParameterNameValue)[]

---

### ElastiCacheModifyCacheSubnetGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheModifyCacheSubnetGroupMessage: elasticache.ElastiCacheModifyCacheSubnetGroupMessage = { ... }
```

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheSubnetGroupMessage.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `cacheSubnetGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheSubnetGroupMessage.property.cacheSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheSubnetGroupMessage.property.subnetIds"></a>

- *Type:* `string`[]

---

### ElastiCacheModifyCacheSubnetGroupResult <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheSubnetGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheModifyCacheSubnetGroupResult: elasticache.ElastiCacheModifyCacheSubnetGroupResult = { ... }
```

##### `cacheSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyCacheSubnetGroupResult.property.cacheSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroup`](#aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroup)

---

### ElastiCacheModifyGlobalReplicationGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyGlobalReplicationGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheModifyGlobalReplicationGroupMessage: elasticache.ElastiCacheModifyGlobalReplicationGroupMessage = { ... }
```

##### `applyImmediately`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyGlobalReplicationGroupMessage.property.applyImmediately"></a>

- *Type:* `boolean`

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyGlobalReplicationGroupMessage.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `automaticFailoverEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyGlobalReplicationGroupMessage.property.automaticFailoverEnabled"></a>

- *Type:* `boolean`

---

##### `cacheNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyGlobalReplicationGroupMessage.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyGlobalReplicationGroupMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `globalReplicationGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyGlobalReplicationGroupMessage.property.globalReplicationGroupDescription"></a>

- *Type:* `string`

---

### ElastiCacheModifyGlobalReplicationGroupResult <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyGlobalReplicationGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheModifyGlobalReplicationGroupResult: elasticache.ElastiCacheModifyGlobalReplicationGroupResult = { ... }
```

##### `globalReplicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyGlobalReplicationGroupResult.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup)

---

### ElastiCacheModifyReplicationGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheModifyReplicationGroupMessage: elasticache.ElastiCacheModifyReplicationGroupMessage = { ... }
```

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `applyImmediately`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.applyImmediately"></a>

- *Type:* `boolean`

---

##### `authToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.authToken"></a>

- *Type:* `string`

---

##### `authTokenUpdateStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.authTokenUpdateStrategy"></a>

- *Type:* `string`

---

##### `automaticFailoverEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.automaticFailoverEnabled"></a>

- *Type:* `boolean`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `cacheNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `cacheParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `cacheSecurityGroupNames`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.cacheSecurityGroupNames"></a>

- *Type:* `string`[]

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `multiAzEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.multiAzEnabled"></a>

- *Type:* `boolean`

---

##### `nodeGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.nodeGroupId"></a>

- *Type:* `string`

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.notificationTopicArn"></a>

- *Type:* `string`

---

##### `notificationTopicStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.notificationTopicStatus"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `primaryClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.primaryClusterId"></a>

- *Type:* `string`

---

##### `removeUserGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.removeUserGroups"></a>

- *Type:* `boolean`

---

##### `replicationGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.replicationGroupDescription"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshottingClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.snapshottingClusterId"></a>

- *Type:* `string`

---

##### `snapshotWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `userGroupIdsToAdd`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.userGroupIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userGroupIdsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage.property.userGroupIdsToRemove"></a>

- *Type:* `string`[]

---

### ElastiCacheModifyReplicationGroupResult <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheModifyReplicationGroupResult: elasticache.ElastiCacheModifyReplicationGroupResult = { ... }
```

##### `replicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupResult.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup)

---

### ElastiCacheModifyReplicationGroupShardConfigurationMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheModifyReplicationGroupShardConfigurationMessage: elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage = { ... }
```

##### `applyImmediately`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage.property.applyImmediately"></a>

- *Type:* `boolean`

---

##### `nodeGroupCount`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage.property.nodeGroupCount"></a>

- *Type:* `number`

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `nodeGroupsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage.property.nodeGroupsToRemove"></a>

- *Type:* `string`[]

---

##### `nodeGroupsToRetain`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage.property.nodeGroupsToRetain"></a>

- *Type:* `string`[]

---

##### `reshardingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage.property.reshardingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReshardingConfiguration`](#aws-cdk-sdk.elasticache.ElastiCacheReshardingConfiguration)[]

---

### ElastiCacheModifyReplicationGroupShardConfigurationResult <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheModifyReplicationGroupShardConfigurationResult: elasticache.ElastiCacheModifyReplicationGroupShardConfigurationResult = { ... }
```

##### `replicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationResult.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup)

---

### ElastiCacheModifyUserGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyUserGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheModifyUserGroupMessage: elasticache.ElastiCacheModifyUserGroupMessage = { ... }
```

##### `userGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyUserGroupMessage.property.userGroupId"></a>

- *Type:* `string`

---

##### `userIdsToAdd`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyUserGroupMessage.property.userIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userIdsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyUserGroupMessage.property.userIdsToRemove"></a>

- *Type:* `string`[]

---

### ElastiCacheModifyUserMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyUserMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheModifyUserMessage: elasticache.ElastiCacheModifyUserMessage = { ... }
```

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyUserMessage.property.userId"></a>

- *Type:* `string`

---

##### `accessString`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyUserMessage.property.accessString"></a>

- *Type:* `string`

---

##### `appendAccessString`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyUserMessage.property.appendAccessString"></a>

- *Type:* `string`

---

##### `noPasswordRequired`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyUserMessage.property.noPasswordRequired"></a>

- *Type:* `boolean`

---

##### `passwords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheModifyUserMessage.property.passwords"></a>

- *Type:* `string`[]

---

### ElastiCacheNodeGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheNodeGroup: elasticache.ElastiCacheNodeGroup = { ... }
```

##### `nodeGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroup.property.nodeGroupId"></a>

- *Type:* `string`

---

##### `nodeGroupMembers`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroup.property.nodeGroupMembers"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMember`](#aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMember)[]

---

##### `primaryEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroup.property.primaryEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheEndpoint)

---

##### `readerEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroup.property.readerEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheEndpoint)

---

##### `slots`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroup.property.slots"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroup.property.status"></a>

- *Type:* `string`

---

### ElastiCacheNodeGroupConfiguration <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheNodeGroupConfiguration: elasticache.ElastiCacheNodeGroupConfiguration = { ... }
```

##### `nodeGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupConfiguration.property.nodeGroupId"></a>

- *Type:* `string`

---

##### `primaryAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupConfiguration.property.primaryAvailabilityZone"></a>

- *Type:* `string`

---

##### `primaryOutpostArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupConfiguration.property.primaryOutpostArn"></a>

- *Type:* `string`

---

##### `replicaAvailabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupConfiguration.property.replicaAvailabilityZones"></a>

- *Type:* `string`[]

---

##### `replicaCount`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupConfiguration.property.replicaCount"></a>

- *Type:* `number`

---

##### `replicaOutpostArns`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupConfiguration.property.replicaOutpostArns"></a>

- *Type:* `string`[]

---

##### `slots`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupConfiguration.property.slots"></a>

- *Type:* `string`

---

### ElastiCacheNodeGroupMember <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheNodeGroupMember: elasticache.ElastiCacheNodeGroupMember = { ... }
```

##### `cacheClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMember.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `cacheNodeId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMember.property.cacheNodeId"></a>

- *Type:* `string`

---

##### `currentRole`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMember.property.currentRole"></a>

- *Type:* `string`

---

##### `preferredAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMember.property.preferredAvailabilityZone"></a>

- *Type:* `string`

---

##### `preferredOutpostArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMember.property.preferredOutpostArn"></a>

- *Type:* `string`

---

##### `readEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMember.property.readEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheEndpoint)

---

### ElastiCacheNodeGroupMemberUpdateStatus <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMemberUpdateStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheNodeGroupMemberUpdateStatus: elasticache.ElastiCacheNodeGroupMemberUpdateStatus = { ... }
```

##### `cacheClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMemberUpdateStatus.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `cacheNodeId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMemberUpdateStatus.property.cacheNodeId"></a>

- *Type:* `string`

---

##### `nodeDeletionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMemberUpdateStatus.property.nodeDeletionDate"></a>

- *Type:* `string`

---

##### `nodeUpdateEndDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMemberUpdateStatus.property.nodeUpdateEndDate"></a>

- *Type:* `string`

---

##### `nodeUpdateInitiatedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMemberUpdateStatus.property.nodeUpdateInitiatedBy"></a>

- *Type:* `string`

---

##### `nodeUpdateInitiatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMemberUpdateStatus.property.nodeUpdateInitiatedDate"></a>

- *Type:* `string`

---

##### `nodeUpdateStartDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMemberUpdateStatus.property.nodeUpdateStartDate"></a>

- *Type:* `string`

---

##### `nodeUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMemberUpdateStatus.property.nodeUpdateStatus"></a>

- *Type:* `string`

---

##### `nodeUpdateStatusModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMemberUpdateStatus.property.nodeUpdateStatusModifiedDate"></a>

- *Type:* `string`

---

### ElastiCacheNodeGroupUpdateStatus <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupUpdateStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheNodeGroupUpdateStatus: elasticache.ElastiCacheNodeGroupUpdateStatus = { ... }
```

##### `nodeGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupUpdateStatus.property.nodeGroupId"></a>

- *Type:* `string`

---

##### `nodeGroupMemberUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeGroupUpdateStatus.property.nodeGroupMemberUpdateStatus"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMemberUpdateStatus`](#aws-cdk-sdk.elasticache.ElastiCacheNodeGroupMemberUpdateStatus)[]

---

### ElastiCacheNodeSnapshot <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheNodeSnapshot: elasticache.ElastiCacheNodeSnapshot = { ... }
```

##### `cacheClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `cacheNodeCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot.property.cacheNodeCreateTime"></a>

- *Type:* `string`

---

##### `cacheNodeId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot.property.cacheNodeId"></a>

- *Type:* `string`

---

##### `cacheSize`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot.property.cacheSize"></a>

- *Type:* `string`

---

##### `nodeGroupConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot.property.nodeGroupConfiguration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeGroupConfiguration`](#aws-cdk-sdk.elasticache.ElastiCacheNodeGroupConfiguration)

---

##### `nodeGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot.property.nodeGroupId"></a>

- *Type:* `string`

---

##### `snapshotCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

### ElastiCacheNotificationConfiguration <a name="aws-cdk-sdk.elasticache.ElastiCacheNotificationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheNotificationConfiguration: elasticache.ElastiCacheNotificationConfiguration = { ... }
```

##### `topicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNotificationConfiguration.property.topicArn"></a>

- *Type:* `string`

---

##### `topicStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheNotificationConfiguration.property.topicStatus"></a>

- *Type:* `string`

---

### ElastiCacheParameter <a name="aws-cdk-sdk.elasticache.ElastiCacheParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheParameter: elasticache.ElastiCacheParameter = { ... }
```

##### `allowedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheParameter.property.allowedValues"></a>

- *Type:* `string`

---

##### `changeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheParameter.property.changeType"></a>

- *Type:* `string`

---

##### `dataType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheParameter.property.dataType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheParameter.property.description"></a>

- *Type:* `string`

---

##### `isModifiable`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheParameter.property.isModifiable"></a>

- *Type:* `boolean`

---

##### `minimumEngineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheParameter.property.minimumEngineVersion"></a>

- *Type:* `string`

---

##### `parameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheParameter.property.parameterName"></a>

- *Type:* `string`

---

##### `parameterValue`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheParameter.property.parameterValue"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheParameter.property.source"></a>

- *Type:* `string`

---

### ElastiCacheParameterNameValue <a name="aws-cdk-sdk.elasticache.ElastiCacheParameterNameValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheParameterNameValue: elasticache.ElastiCacheParameterNameValue = { ... }
```

##### `parameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheParameterNameValue.property.parameterName"></a>

- *Type:* `string`

---

##### `parameterValue`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheParameterNameValue.property.parameterValue"></a>

- *Type:* `string`

---

### ElastiCachePendingModifiedValues <a name="aws-cdk-sdk.elasticache.ElastiCachePendingModifiedValues"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCachePendingModifiedValues: elasticache.ElastiCachePendingModifiedValues = { ... }
```

##### `authTokenStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCachePendingModifiedValues.property.authTokenStatus"></a>

- *Type:* `string`

---

##### `cacheNodeIdsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCachePendingModifiedValues.property.cacheNodeIdsToRemove"></a>

- *Type:* `string`[]

---

##### `cacheNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCachePendingModifiedValues.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCachePendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `numCacheNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCachePendingModifiedValues.property.numCacheNodes"></a>

- *Type:* `number`

---

### ElastiCacheProcessedUpdateAction <a name="aws-cdk-sdk.elasticache.ElastiCacheProcessedUpdateAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheProcessedUpdateAction: elasticache.ElastiCacheProcessedUpdateAction = { ... }
```

##### `cacheClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheProcessedUpdateAction.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheProcessedUpdateAction.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `serviceUpdateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheProcessedUpdateAction.property.serviceUpdateName"></a>

- *Type:* `string`

---

##### `updateActionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheProcessedUpdateAction.property.updateActionStatus"></a>

- *Type:* `string`

---

### ElastiCachePurchaseReservedCacheNodesOfferingMessage <a name="aws-cdk-sdk.elasticache.ElastiCachePurchaseReservedCacheNodesOfferingMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCachePurchaseReservedCacheNodesOfferingMessage: elasticache.ElastiCachePurchaseReservedCacheNodesOfferingMessage = { ... }
```

##### `reservedCacheNodesOfferingId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCachePurchaseReservedCacheNodesOfferingMessage.property.reservedCacheNodesOfferingId"></a>

- *Type:* `string`

---

##### `cacheNodeCount`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCachePurchaseReservedCacheNodesOfferingMessage.property.cacheNodeCount"></a>

- *Type:* `number`

---

##### `reservedCacheNodeId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCachePurchaseReservedCacheNodesOfferingMessage.property.reservedCacheNodeId"></a>

- *Type:* `string`

---

### ElastiCachePurchaseReservedCacheNodesOfferingResult <a name="aws-cdk-sdk.elasticache.ElastiCachePurchaseReservedCacheNodesOfferingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCachePurchaseReservedCacheNodesOfferingResult: elasticache.ElastiCachePurchaseReservedCacheNodesOfferingResult = { ... }
```

##### `reservedCacheNode`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCachePurchaseReservedCacheNodesOfferingResult.property.reservedCacheNode"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode`](#aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode)

---

### ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheRebalanceSlotsInGlobalReplicationGroupMessage: elasticache.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage = { ... }
```

##### `applyImmediately`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage.property.applyImmediately"></a>

- *Type:* `boolean`

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

### ElastiCacheRebalanceSlotsInGlobalReplicationGroupResult <a name="aws-cdk-sdk.elasticache.ElastiCacheRebalanceSlotsInGlobalReplicationGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheRebalanceSlotsInGlobalReplicationGroupResult: elasticache.ElastiCacheRebalanceSlotsInGlobalReplicationGroupResult = { ... }
```

##### `globalReplicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRebalanceSlotsInGlobalReplicationGroupResult.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup)

---

### ElastiCacheRebootCacheClusterMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheRebootCacheClusterMessage: elasticache.ElastiCacheRebootCacheClusterMessage = { ... }
```

##### `cacheClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `cacheNodeIdsToReboot`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage.property.cacheNodeIdsToReboot"></a>

- *Type:* `string`[]

---

### ElastiCacheRebootCacheClusterResult <a name="aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheRebootCacheClusterResult: elasticache.ElastiCacheRebootCacheClusterResult = { ... }
```

##### `cacheCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterResult.property.cacheCluster"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheCluster`](#aws-cdk-sdk.elasticache.ElastiCacheCacheCluster)

---

### ElastiCacheRecurringCharge <a name="aws-cdk-sdk.elasticache.ElastiCacheRecurringCharge"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheRecurringCharge: elasticache.ElastiCacheRecurringCharge = { ... }
```

##### `recurringChargeAmount`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRecurringCharge.property.recurringChargeAmount"></a>

- *Type:* `number`

---

##### `recurringChargeFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRecurringCharge.property.recurringChargeFrequency"></a>

- *Type:* `string`

---

### ElastiCacheRegionalConfiguration <a name="aws-cdk-sdk.elasticache.ElastiCacheRegionalConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheRegionalConfiguration: elasticache.ElastiCacheRegionalConfiguration = { ... }
```

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRegionalConfiguration.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `replicationGroupRegion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRegionalConfiguration.property.replicationGroupRegion"></a>

- *Type:* `string`

---

##### `reshardingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRegionalConfiguration.property.reshardingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReshardingConfiguration`](#aws-cdk-sdk.elasticache.ElastiCacheReshardingConfiguration)[]

---

### ElastiCacheRemoveTagsFromResourceMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheRemoveTagsFromResourceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheRemoveTagsFromResourceMessage: elasticache.ElastiCacheRemoveTagsFromResourceMessage = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRemoveTagsFromResourceMessage.property.resourceName"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRemoveTagsFromResourceMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

### ElastiCacheReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheReplicationGroup: elasticache.ElastiCacheReplicationGroup = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenLastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.authTokenLastModifiedDate"></a>

- *Type:* `string`

---

##### `automaticFailover`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.automaticFailover"></a>

- *Type:* `string`

---

##### `cacheNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `configurationEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.configurationEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheEndpoint)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.description"></a>

- *Type:* `string`

---

##### `globalReplicationGroupInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.globalReplicationGroupInfo"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupInfo`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupInfo)

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `memberClusters`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.memberClusters"></a>

- *Type:* `string`[]

---

##### `memberClustersOutpostArns`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.memberClustersOutpostArns"></a>

- *Type:* `string`[]

---

##### `multiAz`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.multiAz"></a>

- *Type:* `string`

---

##### `nodeGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.nodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheNodeGroup)[]

---

##### `pendingModifiedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReplicationGroupPendingModifiedValues`](#aws-cdk-sdk.elasticache.ElastiCacheReplicationGroupPendingModifiedValues)

---

##### `replicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshottingClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.snapshottingClusterId"></a>

- *Type:* `string`

---

##### `snapshotWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `userGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup.property.userGroupIds"></a>

- *Type:* `string`[]

---

### ElastiCacheReplicationGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheReplicationGroupMessage: elasticache.ElastiCacheReplicationGroupMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroupMessage.property.marker"></a>

- *Type:* `string`

---

##### `replicationGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroupMessage.property.replicationGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup)[]

---

### ElastiCacheReplicationGroupPendingModifiedValues <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroupPendingModifiedValues"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheReplicationGroupPendingModifiedValues: elasticache.ElastiCacheReplicationGroupPendingModifiedValues = { ... }
```

##### `authTokenStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroupPendingModifiedValues.property.authTokenStatus"></a>

- *Type:* `string`

---

##### `automaticFailoverStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroupPendingModifiedValues.property.automaticFailoverStatus"></a>

- *Type:* `string`

---

##### `primaryClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroupPendingModifiedValues.property.primaryClusterId"></a>

- *Type:* `string`

---

##### `resharding`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroupPendingModifiedValues.property.resharding"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReshardingStatus`](#aws-cdk-sdk.elasticache.ElastiCacheReshardingStatus)

---

##### `userGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReplicationGroupPendingModifiedValues.property.userGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheUserGroupsUpdateStatus`](#aws-cdk-sdk.elasticache.ElastiCacheUserGroupsUpdateStatus)

---

### ElastiCacheReservedCacheNode <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheReservedCacheNode: elasticache.ElastiCacheReservedCacheNode = { ... }
```

##### `cacheNodeCount`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode.property.cacheNodeCount"></a>

- *Type:* `number`

---

##### `cacheNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode.property.duration"></a>

- *Type:* `number`

---

##### `fixedPrice`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode.property.fixedPrice"></a>

- *Type:* `number`

---

##### `offeringType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode.property.offeringType"></a>

- *Type:* `string`

---

##### `productDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode.property.productDescription"></a>

- *Type:* `string`

---

##### `recurringCharges`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode.property.recurringCharges"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRecurringCharge`](#aws-cdk-sdk.elasticache.ElastiCacheRecurringCharge)[]

---

##### `reservationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode.property.reservationArn"></a>

- *Type:* `string`

---

##### `reservedCacheNodeId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode.property.reservedCacheNodeId"></a>

- *Type:* `string`

---

##### `reservedCacheNodesOfferingId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode.property.reservedCacheNodesOfferingId"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode.property.state"></a>

- *Type:* `string`

---

##### `usagePrice`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode.property.usagePrice"></a>

- *Type:* `number`

---

### ElastiCacheReservedCacheNodeMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodeMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheReservedCacheNodeMessage: elasticache.ElastiCacheReservedCacheNodeMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodeMessage.property.marker"></a>

- *Type:* `string`

---

##### `reservedCacheNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodeMessage.property.reservedCacheNodes"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode`](#aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode)[]

---

### ElastiCacheReservedCacheNodesOffering <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOffering"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheReservedCacheNodesOffering: elasticache.ElastiCacheReservedCacheNodesOffering = { ... }
```

##### `cacheNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOffering.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOffering.property.duration"></a>

- *Type:* `number`

---

##### `fixedPrice`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOffering.property.fixedPrice"></a>

- *Type:* `number`

---

##### `offeringType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOffering.property.offeringType"></a>

- *Type:* `string`

---

##### `productDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOffering.property.productDescription"></a>

- *Type:* `string`

---

##### `recurringCharges`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOffering.property.recurringCharges"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRecurringCharge`](#aws-cdk-sdk.elasticache.ElastiCacheRecurringCharge)[]

---

##### `reservedCacheNodesOfferingId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOffering.property.reservedCacheNodesOfferingId"></a>

- *Type:* `string`

---

##### `usagePrice`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOffering.property.usagePrice"></a>

- *Type:* `number`

---

### ElastiCacheReservedCacheNodesOfferingMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOfferingMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheReservedCacheNodesOfferingMessage: elasticache.ElastiCacheReservedCacheNodesOfferingMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOfferingMessage.property.marker"></a>

- *Type:* `string`

---

##### `reservedCacheNodesOfferings`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOfferingMessage.property.reservedCacheNodesOfferings"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOffering`](#aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOffering)[]

---

### ElastiCacheResetCacheParameterGroupMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheResetCacheParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheResetCacheParameterGroupMessage: elasticache.ElastiCacheResetCacheParameterGroupMessage = { ... }
```

##### `cacheParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResetCacheParameterGroupMessage.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `parameterNameValues`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResetCacheParameterGroupMessage.property.parameterNameValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheParameterNameValue`](#aws-cdk-sdk.elasticache.ElastiCacheParameterNameValue)[]

---

##### `resetAllParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResetCacheParameterGroupMessage.property.resetAllParameters"></a>

- *Type:* `boolean`

---

### ElastiCacheReshardingConfiguration <a name="aws-cdk-sdk.elasticache.ElastiCacheReshardingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheReshardingConfiguration: elasticache.ElastiCacheReshardingConfiguration = { ... }
```

##### `nodeGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReshardingConfiguration.property.nodeGroupId"></a>

- *Type:* `string`

---

##### `preferredAvailabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReshardingConfiguration.property.preferredAvailabilityZones"></a>

- *Type:* `string`[]

---

### ElastiCacheReshardingStatus <a name="aws-cdk-sdk.elasticache.ElastiCacheReshardingStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheReshardingStatus: elasticache.ElastiCacheReshardingStatus = { ... }
```

##### `slotMigration`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheReshardingStatus.property.slotMigration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheSlotMigration`](#aws-cdk-sdk.elasticache.ElastiCacheSlotMigration)

---

### ElastiCacheRevokeCacheSecurityGroupIngressMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheRevokeCacheSecurityGroupIngressMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheRevokeCacheSecurityGroupIngressMessage: elasticache.ElastiCacheRevokeCacheSecurityGroupIngressMessage = { ... }
```

##### `cacheSecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRevokeCacheSecurityGroupIngressMessage.property.cacheSecurityGroupName"></a>

- *Type:* `string`

---

##### `ec2SecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRevokeCacheSecurityGroupIngressMessage.property.ec2SecurityGroupName"></a>

- *Type:* `string`

---

##### `ec2SecurityGroupOwnerId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRevokeCacheSecurityGroupIngressMessage.property.ec2SecurityGroupOwnerId"></a>

- *Type:* `string`

---

### ElastiCacheRevokeCacheSecurityGroupIngressResult <a name="aws-cdk-sdk.elasticache.ElastiCacheRevokeCacheSecurityGroupIngressResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheRevokeCacheSecurityGroupIngressResult: elasticache.ElastiCacheRevokeCacheSecurityGroupIngressResult = { ... }
```

##### `cacheSecurityGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheRevokeCacheSecurityGroupIngressResult.property.cacheSecurityGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup`](#aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup)

---

### ElastiCacheSecurityGroupMembership <a name="aws-cdk-sdk.elasticache.ElastiCacheSecurityGroupMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheSecurityGroupMembership: elasticache.ElastiCacheSecurityGroupMembership = { ... }
```

##### `securityGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSecurityGroupMembership.property.securityGroupId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSecurityGroupMembership.property.status"></a>

- *Type:* `string`

---

### ElastiCacheServiceUpdate <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheServiceUpdate: elasticache.ElastiCacheServiceUpdate = { ... }
```

##### `autoUpdateAfterRecommendedApplyByDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate.property.autoUpdateAfterRecommendedApplyByDate"></a>

- *Type:* `boolean`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate.property.engineVersion"></a>

- *Type:* `string`

---

##### `estimatedUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate.property.estimatedUpdateTime"></a>

- *Type:* `string`

---

##### `serviceUpdateDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate.property.serviceUpdateDescription"></a>

- *Type:* `string`

---

##### `serviceUpdateEndDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate.property.serviceUpdateEndDate"></a>

- *Type:* `string`

---

##### `serviceUpdateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate.property.serviceUpdateName"></a>

- *Type:* `string`

---

##### `serviceUpdateRecommendedApplyByDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate.property.serviceUpdateRecommendedApplyByDate"></a>

- *Type:* `string`

---

##### `serviceUpdateReleaseDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate.property.serviceUpdateReleaseDate"></a>

- *Type:* `string`

---

##### `serviceUpdateSeverity`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate.property.serviceUpdateSeverity"></a>

- *Type:* `string`

---

##### `serviceUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate.property.serviceUpdateStatus"></a>

- *Type:* `string`

---

##### `serviceUpdateType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate.property.serviceUpdateType"></a>

- *Type:* `string`

---

### ElastiCacheServiceUpdatesMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdatesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheServiceUpdatesMessage: elasticache.ElastiCacheServiceUpdatesMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdatesMessage.property.marker"></a>

- *Type:* `string`

---

##### `serviceUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheServiceUpdatesMessage.property.serviceUpdates"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate`](#aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate)[]

---

### ElastiCacheSlotMigration <a name="aws-cdk-sdk.elasticache.ElastiCacheSlotMigration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheSlotMigration: elasticache.ElastiCacheSlotMigration = { ... }
```

##### `progressPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSlotMigration.property.progressPercentage"></a>

- *Type:* `number`

---

### ElastiCacheSnapshot <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheSnapshot: elasticache.ElastiCacheSnapshot = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.arn"></a>

- *Type:* `string`

---

##### `automaticFailover`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.automaticFailover"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `cacheClusterCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.cacheClusterCreateTime"></a>

- *Type:* `string`

---

##### `cacheClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `cacheNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `cacheParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `cacheSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.engineVersion"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `nodeSnapshots`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.nodeSnapshots"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot`](#aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot)[]

---

##### `numCacheNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.numCacheNodes"></a>

- *Type:* `number`

---

##### `numNodeGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.numNodeGroups"></a>

- *Type:* `number`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.port"></a>

- *Type:* `number`

---

##### `preferredAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.preferredAvailabilityZone"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `preferredOutpostArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.preferredOutpostArn"></a>

- *Type:* `string`

---

##### `replicationGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.replicationGroupDescription"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `snapshotName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.snapshotName"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshotSource`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.snapshotSource"></a>

- *Type:* `string`

---

##### `snapshotStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.snapshotStatus"></a>

- *Type:* `string`

---

##### `snapshotWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.topicArn"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSnapshot.property.vpcId"></a>

- *Type:* `string`

---

### ElastiCacheStartMigrationMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheStartMigrationMessage: elasticache.ElastiCacheStartMigrationMessage = { ... }
```

##### `customerNodeEndpointList`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage.property.customerNodeEndpointList"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCustomerNodeEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheCustomerNodeEndpoint)[]

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage.property.replicationGroupId"></a>

- *Type:* `string`

---

### ElastiCacheStartMigrationResponse <a name="aws-cdk-sdk.elasticache.ElastiCacheStartMigrationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheStartMigrationResponse: elasticache.ElastiCacheStartMigrationResponse = { ... }
```

##### `replicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheStartMigrationResponse.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup)

---

### ElastiCacheSubnet <a name="aws-cdk-sdk.elasticache.ElastiCacheSubnet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheSubnet: elasticache.ElastiCacheSubnet = { ... }
```

##### `subnetAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSubnet.property.subnetAvailabilityZone"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheAvailabilityZone`](#aws-cdk-sdk.elasticache.ElastiCacheAvailabilityZone)

---

##### `subnetIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSubnet.property.subnetIdentifier"></a>

- *Type:* `string`

---

##### `subnetOutpost`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSubnet.property.subnetOutpost"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheSubnetOutpost`](#aws-cdk-sdk.elasticache.ElastiCacheSubnetOutpost)

---

### ElastiCacheSubnetOutpost <a name="aws-cdk-sdk.elasticache.ElastiCacheSubnetOutpost"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheSubnetOutpost: elasticache.ElastiCacheSubnetOutpost = { ... }
```

##### `subnetOutpostArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheSubnetOutpost.property.subnetOutpostArn"></a>

- *Type:* `string`

---

### ElastiCacheTag <a name="aws-cdk-sdk.elasticache.ElastiCacheTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheTag: elasticache.ElastiCacheTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheTag.property.value"></a>

- *Type:* `string`

---

### ElastiCacheTagListMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheTagListMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheTagListMessage: elasticache.ElastiCacheTagListMessage = { ... }
```

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheTagListMessage.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTag`](#aws-cdk-sdk.elasticache.ElastiCacheTag)[]

---

### ElastiCacheTestFailoverMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheTestFailoverMessage: elasticache.ElastiCacheTestFailoverMessage = { ... }
```

##### `nodeGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage.property.nodeGroupId"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage.property.replicationGroupId"></a>

- *Type:* `string`

---

### ElastiCacheTestFailoverResult <a name="aws-cdk-sdk.elasticache.ElastiCacheTestFailoverResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheTestFailoverResult: elasticache.ElastiCacheTestFailoverResult = { ... }
```

##### `replicationGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheTestFailoverResult.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup)

---

### ElastiCacheTimeRangeFilter <a name="aws-cdk-sdk.elasticache.ElastiCacheTimeRangeFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheTimeRangeFilter: elasticache.ElastiCacheTimeRangeFilter = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheTimeRangeFilter.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheTimeRangeFilter.property.startTime"></a>

- *Type:* `string`

---

### ElastiCacheUnprocessedUpdateAction <a name="aws-cdk-sdk.elasticache.ElastiCacheUnprocessedUpdateAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheUnprocessedUpdateAction: elasticache.ElastiCacheUnprocessedUpdateAction = { ... }
```

##### `cacheClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUnprocessedUpdateAction.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUnprocessedUpdateAction.property.errorMessage"></a>

- *Type:* `string`

---

##### `errorType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUnprocessedUpdateAction.property.errorType"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUnprocessedUpdateAction.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `serviceUpdateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUnprocessedUpdateAction.property.serviceUpdateName"></a>

- *Type:* `string`

---

### ElastiCacheUpdateAction <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheUpdateAction: elasticache.ElastiCacheUpdateAction = { ... }
```

##### `cacheClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `cacheNodeUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.cacheNodeUpdateStatus"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheNodeUpdateStatus`](#aws-cdk-sdk.elasticache.ElastiCacheCacheNodeUpdateStatus)[]

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.engine"></a>

- *Type:* `string`

---

##### `estimatedUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.estimatedUpdateTime"></a>

- *Type:* `string`

---

##### `nodeGroupUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.nodeGroupUpdateStatus"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeGroupUpdateStatus`](#aws-cdk-sdk.elasticache.ElastiCacheNodeGroupUpdateStatus)[]

---

##### `nodesUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.nodesUpdated"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `serviceUpdateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.serviceUpdateName"></a>

- *Type:* `string`

---

##### `serviceUpdateRecommendedApplyByDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.serviceUpdateRecommendedApplyByDate"></a>

- *Type:* `string`

---

##### `serviceUpdateReleaseDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.serviceUpdateReleaseDate"></a>

- *Type:* `string`

---

##### `serviceUpdateSeverity`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.serviceUpdateSeverity"></a>

- *Type:* `string`

---

##### `serviceUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.serviceUpdateStatus"></a>

- *Type:* `string`

---

##### `serviceUpdateType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.serviceUpdateType"></a>

- *Type:* `string`

---

##### `slaMet`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.slaMet"></a>

- *Type:* `string`

---

##### `updateActionAvailableDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.updateActionAvailableDate"></a>

- *Type:* `string`

---

##### `updateActionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.updateActionStatus"></a>

- *Type:* `string`

---

##### `updateActionStatusModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateAction.property.updateActionStatusModifiedDate"></a>

- *Type:* `string`

---

### ElastiCacheUpdateActionResultsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateActionResultsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheUpdateActionResultsMessage: elasticache.ElastiCacheUpdateActionResultsMessage = { ... }
```

##### `processedUpdateActions`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateActionResultsMessage.property.processedUpdateActions"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheProcessedUpdateAction`](#aws-cdk-sdk.elasticache.ElastiCacheProcessedUpdateAction)[]

---

##### `unprocessedUpdateActions`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateActionResultsMessage.property.unprocessedUpdateActions"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheUnprocessedUpdateAction`](#aws-cdk-sdk.elasticache.ElastiCacheUnprocessedUpdateAction)[]

---

### ElastiCacheUpdateActionsMessage <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateActionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheUpdateActionsMessage: elasticache.ElastiCacheUpdateActionsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateActionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `updateActions`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUpdateActionsMessage.property.updateActions"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheUpdateAction`](#aws-cdk-sdk.elasticache.ElastiCacheUpdateAction)[]

---

### ElastiCacheUser <a name="aws-cdk-sdk.elasticache.ElastiCacheUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheUser: elasticache.ElastiCacheUser = { ... }
```

##### `accessString`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUser.property.accessString"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUser.property.arn"></a>

- *Type:* `string`

---

##### `authentication`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUser.property.authentication"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheAuthentication`](#aws-cdk-sdk.elasticache.ElastiCacheAuthentication)

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUser.property.engine"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUser.property.status"></a>

- *Type:* `string`

---

##### `userGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUser.property.userGroupIds"></a>

- *Type:* `string`[]

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUser.property.userId"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUser.property.userName"></a>

- *Type:* `string`

---

### ElastiCacheUserGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheUserGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheUserGroup: elasticache.ElastiCacheUserGroup = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUserGroup.property.arn"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUserGroup.property.engine"></a>

- *Type:* `string`

---

##### `pendingChanges`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUserGroup.property.pendingChanges"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheUserGroupPendingChanges`](#aws-cdk-sdk.elasticache.ElastiCacheUserGroupPendingChanges)

---

##### `replicationGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUserGroup.property.replicationGroups"></a>

- *Type:* `string`[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUserGroup.property.status"></a>

- *Type:* `string`

---

##### `userGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUserGroup.property.userGroupId"></a>

- *Type:* `string`

---

##### `userIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUserGroup.property.userIds"></a>

- *Type:* `string`[]

---

### ElastiCacheUserGroupPendingChanges <a name="aws-cdk-sdk.elasticache.ElastiCacheUserGroupPendingChanges"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheUserGroupPendingChanges: elasticache.ElastiCacheUserGroupPendingChanges = { ... }
```

##### `userIdsToAdd`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUserGroupPendingChanges.property.userIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userIdsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUserGroupPendingChanges.property.userIdsToRemove"></a>

- *Type:* `string`[]

---

### ElastiCacheUserGroupsUpdateStatus <a name="aws-cdk-sdk.elasticache.ElastiCacheUserGroupsUpdateStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

const elastiCacheUserGroupsUpdateStatus: elasticache.ElastiCacheUserGroupsUpdateStatus = { ... }
```

##### `userGroupIdsToAdd`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUserGroupsUpdateStatus.property.userGroupIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userGroupIdsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheUserGroupsUpdateStatus.property.userGroupIdsToRemove"></a>

- *Type:* `string`[]

---

## Classes <a name="Classes"></a>

### ElastiCacheResponsesAddTagsToResource <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAddTagsToResource"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAddTagsToResource.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesAddTagsToResource(__scope: Construct, __resources: string[], __input: ElastiCacheAddTagsToResourceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAddTagsToResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAddTagsToResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAddTagsToResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheAddTagsToResourceMessage`](#aws-cdk-sdk.elasticache.ElastiCacheAddTagsToResourceMessage)

---



#### Properties <a name="Properties"></a>

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAddTagsToResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTag`](#aws-cdk-sdk.elasticache.ElastiCacheTag)[]

---


### ElastiCacheResponsesAuthorizeCacheSecurityGroupIngress <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngress"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngress.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngress(__scope: Construct, __resources: string[], __input: ElastiCacheAuthorizeCacheSecurityGroupIngressMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage`](#aws-cdk-sdk.elasticache.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheSecurityGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngress.property.cacheSecurityGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup)

---


### ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup(__scope: Construct, __resources: string[], __input: ElastiCacheAuthorizeCacheSecurityGroupIngressMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage`](#aws-cdk-sdk.elasticache.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup.property.arn"></a>

- *Type:* `string`

---

##### `cacheSecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup.property.cacheSecurityGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup.property.description"></a>

- *Type:* `string`

---

##### `ec2SecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup.property.ec2SecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheEc2SecurityGroup`](#aws-cdk-sdk.elasticache.ElastiCacheEc2SecurityGroup)[]

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup.property.ownerId"></a>

- *Type:* `string`

---


### ElastiCacheResponsesBatchApplyUpdateAction <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesBatchApplyUpdateAction"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesBatchApplyUpdateAction.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesBatchApplyUpdateAction(__scope: Construct, __resources: string[], __input: ElastiCacheBatchApplyUpdateActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesBatchApplyUpdateAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesBatchApplyUpdateAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesBatchApplyUpdateAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheBatchApplyUpdateActionMessage`](#aws-cdk-sdk.elasticache.ElastiCacheBatchApplyUpdateActionMessage)

---



#### Properties <a name="Properties"></a>

##### `processedUpdateActions`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesBatchApplyUpdateAction.property.processedUpdateActions"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheProcessedUpdateAction`](#aws-cdk-sdk.elasticache.ElastiCacheProcessedUpdateAction)[]

---

##### `unprocessedUpdateActions`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesBatchApplyUpdateAction.property.unprocessedUpdateActions"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheUnprocessedUpdateAction`](#aws-cdk-sdk.elasticache.ElastiCacheUnprocessedUpdateAction)[]

---


### ElastiCacheResponsesBatchStopUpdateAction <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesBatchStopUpdateAction"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesBatchStopUpdateAction.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesBatchStopUpdateAction(__scope: Construct, __resources: string[], __input: ElastiCacheBatchStopUpdateActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesBatchStopUpdateAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesBatchStopUpdateAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesBatchStopUpdateAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheBatchStopUpdateActionMessage`](#aws-cdk-sdk.elasticache.ElastiCacheBatchStopUpdateActionMessage)

---



#### Properties <a name="Properties"></a>

##### `processedUpdateActions`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesBatchStopUpdateAction.property.processedUpdateActions"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheProcessedUpdateAction`](#aws-cdk-sdk.elasticache.ElastiCacheProcessedUpdateAction)[]

---

##### `unprocessedUpdateActions`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesBatchStopUpdateAction.property.unprocessedUpdateActions"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheUnprocessedUpdateAction`](#aws-cdk-sdk.elasticache.ElastiCacheUnprocessedUpdateAction)[]

---


### ElastiCacheResponsesCompleteMigration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCompleteMigration(__scope: Construct, __resources: string[], __input: ElastiCacheCompleteMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigration.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup)

---


### ElastiCacheResponsesCompleteMigrationReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheCompleteMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenLastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.authTokenLastModifiedDate"></a>

- *Type:* `string`

---

##### `automaticFailover`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.automaticFailover"></a>

- *Type:* `string`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `configurationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.configurationEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupConfigurationEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupConfigurationEndpoint)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.description"></a>

- *Type:* `string`

---

##### `globalReplicationGroupInfo`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.globalReplicationGroupInfo"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupGlobalReplicationGroupInfo`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupGlobalReplicationGroupInfo)

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `memberClusters`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.memberClusters"></a>

- *Type:* `string`[]

---

##### `memberClustersOutpostArns`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.memberClustersOutpostArns"></a>

- *Type:* `string`[]

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.multiAz"></a>

- *Type:* `string`

---

##### `nodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.nodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheNodeGroup)[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues)

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshottingClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.snapshottingClusterId"></a>

- *Type:* `string`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `userGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroup.property.userGroupIds"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesCompleteMigrationReplicationGroupConfigurationEndpoint <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupConfigurationEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupConfigurationEndpoint.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupConfigurationEndpoint(__scope: Construct, __resources: string[], __input: ElastiCacheCompleteMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupConfigurationEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupConfigurationEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupConfigurationEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupConfigurationEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupConfigurationEndpoint.property.port"></a>

- *Type:* `number`

---


### ElastiCacheResponsesCompleteMigrationReplicationGroupGlobalReplicationGroupInfo <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupGlobalReplicationGroupInfo"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupGlobalReplicationGroupInfo.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupGlobalReplicationGroupInfo(__scope: Construct, __resources: string[], __input: ElastiCacheCompleteMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupGlobalReplicationGroupInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupGlobalReplicationGroupInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupGlobalReplicationGroupInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `globalReplicationGroupMemberRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupMemberRole"></a>

- *Type:* `string`

---


### ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues(__scope: Construct, __resources: string[], __input: ElastiCacheCompleteMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `authTokenStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues.property.authTokenStatus"></a>

- *Type:* `string`

---

##### `automaticFailoverStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues.property.automaticFailoverStatus"></a>

- *Type:* `string`

---

##### `primaryClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues.property.primaryClusterId"></a>

- *Type:* `string`

---

##### `resharding`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues.property.resharding"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesResharding`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesResharding)

---

##### `userGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues.property.userGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups)

---


### ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesResharding <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesResharding"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesResharding.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesResharding(__scope: Construct, __resources: string[], __input: ElastiCacheCompleteMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesResharding.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesResharding.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesResharding.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `slotMigration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesResharding.property.slotMigration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration)

---


### ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration(__scope: Construct, __resources: string[], __input: ElastiCacheCompleteMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `progressPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration.property.progressPercentage"></a>

- *Type:* `number`

---


### ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups(__scope: Construct, __resources: string[], __input: ElastiCacheCompleteMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCompleteMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `userGroupIdsToAdd`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userGroupIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToRemove"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesCopySnapshot <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshot.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCopySnapshot(__scope: Construct, __resources: string[], __input: ElastiCacheCopySnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCopySnapshotMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCopySnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `snapshot`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshot.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot)

---


### ElastiCacheResponsesCopySnapshotSnapshot <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCopySnapshotSnapshot(__scope: Construct, __resources: string[], __input: ElastiCacheCopySnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCopySnapshotMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCopySnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.arn"></a>

- *Type:* `string`

---

##### `automaticFailover`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.automaticFailover"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `cacheClusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.cacheClusterCreateTime"></a>

- *Type:* `string`

---

##### `cacheClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.engineVersion"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `nodeSnapshots`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.nodeSnapshots"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot`](#aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot)[]

---

##### `numCacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.numCacheNodes"></a>

- *Type:* `number`

---

##### `numNodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.numNodeGroups"></a>

- *Type:* `number`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.port"></a>

- *Type:* `number`

---

##### `preferredAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.preferredAvailabilityZone"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `preferredOutpostArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.preferredOutpostArn"></a>

- *Type:* `string`

---

##### `replicationGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.replicationGroupDescription"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `snapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.snapshotName"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshotSource`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.snapshotSource"></a>

- *Type:* `string`

---

##### `snapshotStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.snapshotStatus"></a>

- *Type:* `string`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.topicArn"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCopySnapshotSnapshot.property.vpcId"></a>

- *Type:* `string`

---


### ElastiCacheResponsesCreateCacheCluster <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheCluster"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheCluster.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateCacheCluster(__scope: Construct, __resources: string[], __input: ElastiCacheCreateCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheCluster`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheCluster.property.cacheCluster"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster)

---


### ElastiCacheResponsesCreateCacheClusterCacheCluster <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster(__scope: Construct, __resources: string[], __input: ElastiCacheCreateCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenLastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.authTokenLastModifiedDate"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `cacheClusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.cacheClusterCreateTime"></a>

- *Type:* `string`

---

##### `cacheClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `cacheClusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.cacheClusterStatus"></a>

- *Type:* `string`

---

##### `cacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.cacheNodes"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheNode`](#aws-cdk-sdk.elasticache.ElastiCacheCacheNode)[]

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `cacheParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.cacheParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterCacheParameterGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterCacheParameterGroup)

---

##### `cacheSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.cacheSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMembership`](#aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMembership)[]

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `clientDownloadLandingPage`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.clientDownloadLandingPage"></a>

- *Type:* `string`

---

##### `configurationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.configurationEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterConfigurationEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterConfigurationEndpoint)

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterNotificationConfiguration`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterNotificationConfiguration)

---

##### `numCacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.numCacheNodes"></a>

- *Type:* `number`

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues)

---

##### `preferredAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.preferredAvailabilityZone"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `preferredOutpostArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.preferredOutpostArn"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.securityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheSecurityGroupMembership`](#aws-cdk-sdk.elasticache.ElastiCacheSecurityGroupMembership)[]

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheCluster.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---


### ElastiCacheResponsesCreateCacheClusterCacheClusterCacheParameterGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterCacheParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterCacheParameterGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterCacheParameterGroup(__scope: Construct, __resources: string[], __input: ElastiCacheCreateCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterCacheParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterCacheParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterCacheParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheNodeIdsToReboot`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterCacheParameterGroup.property.cacheNodeIdsToReboot"></a>

- *Type:* `string`[]

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterCacheParameterGroup.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `parameterApplyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterCacheParameterGroup.property.parameterApplyStatus"></a>

- *Type:* `string`

---


### ElastiCacheResponsesCreateCacheClusterCacheClusterConfigurationEndpoint <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterConfigurationEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterConfigurationEndpoint.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterConfigurationEndpoint(__scope: Construct, __resources: string[], __input: ElastiCacheCreateCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterConfigurationEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterConfigurationEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterConfigurationEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterConfigurationEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterConfigurationEndpoint.property.port"></a>

- *Type:* `number`

---


### ElastiCacheResponsesCreateCacheClusterCacheClusterNotificationConfiguration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterNotificationConfiguration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterNotificationConfiguration(__scope: Construct, __resources: string[], __input: ElastiCacheCreateCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterNotificationConfiguration.property.topicArn"></a>

- *Type:* `string`

---

##### `topicStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterNotificationConfiguration.property.topicStatus"></a>

- *Type:* `string`

---


### ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: ElastiCacheCreateCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `authTokenStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues.property.authTokenStatus"></a>

- *Type:* `string`

---

##### `cacheNodeIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues.property.cacheNodeIdsToRemove"></a>

- *Type:* `string`[]

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `numCacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues.property.numCacheNodes"></a>

- *Type:* `number`

---


### ElastiCacheResponsesCreateCacheParameterGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateCacheParameterGroup(__scope: Construct, __resources: string[], __input: ElastiCacheCreateCacheParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheParameterGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroup.property.cacheParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup)

---


### ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup(__scope: Construct, __resources: string[], __input: ElastiCacheCreateCacheParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheParameterGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup.property.arn"></a>

- *Type:* `string`

---

##### `cacheParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup.property.cacheParameterGroupFamily"></a>

- *Type:* `string`

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup.property.description"></a>

- *Type:* `string`

---

##### `isGlobal`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup.property.isGlobal"></a>

- *Type:* `boolean`

---


### ElastiCacheResponsesCreateCacheSecurityGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateCacheSecurityGroup(__scope: Construct, __resources: string[], __input: ElastiCacheCreateCacheSecurityGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSecurityGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSecurityGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheSecurityGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroup.property.cacheSecurityGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup)

---


### ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup(__scope: Construct, __resources: string[], __input: ElastiCacheCreateCacheSecurityGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSecurityGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSecurityGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup.property.arn"></a>

- *Type:* `string`

---

##### `cacheSecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup.property.cacheSecurityGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup.property.description"></a>

- *Type:* `string`

---

##### `ec2SecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup.property.ec2SecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheEc2SecurityGroup`](#aws-cdk-sdk.elasticache.ElastiCacheEc2SecurityGroup)[]

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup.property.ownerId"></a>

- *Type:* `string`

---


### ElastiCacheResponsesCreateCacheSubnetGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateCacheSubnetGroup(__scope: Construct, __resources: string[], __input: ElastiCacheCreateCacheSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSubnetGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroup.property.cacheSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup)

---


### ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup(__scope: Construct, __resources: string[], __input: ElastiCacheCreateCacheSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSubnetGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateCacheSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup.property.arn"></a>

- *Type:* `string`

---

##### `cacheSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup.property.cacheSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheSubnet`](#aws-cdk-sdk.elasticache.ElastiCacheSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### ElastiCacheResponsesCreateGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheCreateGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroup.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup)

---


### ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheCreateGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.property.engineVersion"></a>

- *Type:* `string`

---

##### `globalNodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.property.globalNodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup)[]

---

##### `globalReplicationGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

- *Type:* `string`

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.property.members"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---


### ElastiCacheResponsesCreateReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheCreateReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroup.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup)

---


### ElastiCacheResponsesCreateReplicationGroupReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheCreateReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenLastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.authTokenLastModifiedDate"></a>

- *Type:* `string`

---

##### `automaticFailover`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.automaticFailover"></a>

- *Type:* `string`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `configurationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.configurationEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupConfigurationEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupConfigurationEndpoint)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.description"></a>

- *Type:* `string`

---

##### `globalReplicationGroupInfo`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.globalReplicationGroupInfo"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo)

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `memberClusters`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.memberClusters"></a>

- *Type:* `string`[]

---

##### `memberClustersOutpostArns`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.memberClustersOutpostArns"></a>

- *Type:* `string`[]

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.multiAz"></a>

- *Type:* `string`

---

##### `nodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.nodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheNodeGroup)[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues)

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshottingClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.snapshottingClusterId"></a>

- *Type:* `string`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `userGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroup.property.userGroupIds"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesCreateReplicationGroupReplicationGroupConfigurationEndpoint <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupConfigurationEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupConfigurationEndpoint.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupConfigurationEndpoint(__scope: Construct, __resources: string[], __input: ElastiCacheCreateReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupConfigurationEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupConfigurationEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupConfigurationEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupConfigurationEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupConfigurationEndpoint.property.port"></a>

- *Type:* `number`

---


### ElastiCacheResponsesCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo(__scope: Construct, __resources: string[], __input: ElastiCacheCreateReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `globalReplicationGroupMemberRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupMemberRole"></a>

- *Type:* `string`

---


### ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues(__scope: Construct, __resources: string[], __input: ElastiCacheCreateReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `authTokenStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues.property.authTokenStatus"></a>

- *Type:* `string`

---

##### `automaticFailoverStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues.property.automaticFailoverStatus"></a>

- *Type:* `string`

---

##### `primaryClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues.property.primaryClusterId"></a>

- *Type:* `string`

---

##### `resharding`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues.property.resharding"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding)

---

##### `userGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues.property.userGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups)

---


### ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding(__scope: Construct, __resources: string[], __input: ElastiCacheCreateReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `slotMigration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding.property.slotMigration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration)

---


### ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration(__scope: Construct, __resources: string[], __input: ElastiCacheCreateReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `progressPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration.property.progressPercentage"></a>

- *Type:* `number`

---


### ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups(__scope: Construct, __resources: string[], __input: ElastiCacheCreateReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `userGroupIdsToAdd`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userGroupIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToRemove"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesCreateSnapshot <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshot.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateSnapshot(__scope: Construct, __resources: string[], __input: ElastiCacheCreateSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateSnapshotMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `snapshot`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshot.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot)

---


### ElastiCacheResponsesCreateSnapshotSnapshot <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateSnapshotSnapshot(__scope: Construct, __resources: string[], __input: ElastiCacheCreateSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateSnapshotMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.arn"></a>

- *Type:* `string`

---

##### `automaticFailover`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.automaticFailover"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `cacheClusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.cacheClusterCreateTime"></a>

- *Type:* `string`

---

##### `cacheClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.engineVersion"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `nodeSnapshots`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.nodeSnapshots"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot`](#aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot)[]

---

##### `numCacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.numCacheNodes"></a>

- *Type:* `number`

---

##### `numNodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.numNodeGroups"></a>

- *Type:* `number`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.port"></a>

- *Type:* `number`

---

##### `preferredAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.preferredAvailabilityZone"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `preferredOutpostArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.preferredOutpostArn"></a>

- *Type:* `string`

---

##### `replicationGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.replicationGroupDescription"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `snapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.snapshotName"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshotSource`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.snapshotSource"></a>

- *Type:* `string`

---

##### `snapshotStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.snapshotStatus"></a>

- *Type:* `string`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.topicArn"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateSnapshotSnapshot.property.vpcId"></a>

- *Type:* `string`

---


### ElastiCacheResponsesCreateUser <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUser"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUser.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateUser(__scope: Construct, __resources: string[], __input: ElastiCacheCreateUserMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateUserMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateUserMessage)

---



#### Properties <a name="Properties"></a>

##### `accessString`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUser.property.accessString"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUser.property.arn"></a>

- *Type:* `string`

---

##### `authentication`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUser.property.authentication"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserAuthentication`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserAuthentication)

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUser.property.engine"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUser.property.status"></a>

- *Type:* `string`

---

##### `userGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUser.property.userGroupIds"></a>

- *Type:* `string`[]

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUser.property.userId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUser.property.userName"></a>

- *Type:* `string`

---


### ElastiCacheResponsesCreateUserAuthentication <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserAuthentication"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserAuthentication.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateUserAuthentication(__scope: Construct, __resources: string[], __input: ElastiCacheCreateUserMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserAuthentication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserAuthentication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserAuthentication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateUserMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateUserMessage)

---



#### Properties <a name="Properties"></a>

##### `passwordCount`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserAuthentication.property.passwordCount"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserAuthentication.property.type"></a>

- *Type:* `string`

---


### ElastiCacheResponsesCreateUserGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateUserGroup(__scope: Construct, __resources: string[], __input: ElastiCacheCreateUserGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateUserGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateUserGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroup.property.arn"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroup.property.engine"></a>

- *Type:* `string`

---

##### `pendingChanges`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroup.property.pendingChanges"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroupPendingChanges`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroupPendingChanges)

---

##### `replicationGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroup.property.replicationGroups"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroup.property.status"></a>

- *Type:* `string`

---

##### `userGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroup.property.userGroupId"></a>

- *Type:* `string`

---

##### `userIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroup.property.userIds"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesCreateUserGroupPendingChanges <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroupPendingChanges"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroupPendingChanges.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesCreateUserGroupPendingChanges(__scope: Construct, __resources: string[], __input: ElastiCacheCreateUserGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroupPendingChanges.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroupPendingChanges.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroupPendingChanges.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCreateUserGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheCreateUserGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `userIdsToAdd`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroupPendingChanges.property.userIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesCreateUserGroupPendingChanges.property.userIdsToRemove"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroup.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup)

---


### ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.engineVersion"></a>

- *Type:* `string`

---

##### `globalNodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.globalNodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup)[]

---

##### `globalReplicationGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

- *Type:* `string`

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.members"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---


### ElastiCacheResponsesDecreaseReplicaCount <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCount"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCount.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDecreaseReplicaCount(__scope: Construct, __resources: string[], __input: ElastiCacheDecreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCount.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup)

---


### ElastiCacheResponsesDecreaseReplicaCountReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheDecreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenLastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.authTokenLastModifiedDate"></a>

- *Type:* `string`

---

##### `automaticFailover`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.automaticFailover"></a>

- *Type:* `string`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `configurationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.configurationEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupConfigurationEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupConfigurationEndpoint)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.description"></a>

- *Type:* `string`

---

##### `globalReplicationGroupInfo`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.globalReplicationGroupInfo"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo)

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `memberClusters`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.memberClusters"></a>

- *Type:* `string`[]

---

##### `memberClustersOutpostArns`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.memberClustersOutpostArns"></a>

- *Type:* `string`[]

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.multiAz"></a>

- *Type:* `string`

---

##### `nodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.nodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheNodeGroup)[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues)

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshottingClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.snapshottingClusterId"></a>

- *Type:* `string`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `userGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroup.property.userGroupIds"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesDecreaseReplicaCountReplicationGroupConfigurationEndpoint <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupConfigurationEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupConfigurationEndpoint.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupConfigurationEndpoint(__scope: Construct, __resources: string[], __input: ElastiCacheDecreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupConfigurationEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupConfigurationEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupConfigurationEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupConfigurationEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupConfigurationEndpoint.property.port"></a>

- *Type:* `number`

---


### ElastiCacheResponsesDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo(__scope: Construct, __resources: string[], __input: ElastiCacheDecreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `globalReplicationGroupMemberRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupMemberRole"></a>

- *Type:* `string`

---


### ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues(__scope: Construct, __resources: string[], __input: ElastiCacheDecreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `authTokenStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues.property.authTokenStatus"></a>

- *Type:* `string`

---

##### `automaticFailoverStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues.property.automaticFailoverStatus"></a>

- *Type:* `string`

---

##### `primaryClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues.property.primaryClusterId"></a>

- *Type:* `string`

---

##### `resharding`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues.property.resharding"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding)

---

##### `userGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues.property.userGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups)

---


### ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding(__scope: Construct, __resources: string[], __input: ElastiCacheDecreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `slotMigration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding.property.slotMigration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration)

---


### ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration(__scope: Construct, __resources: string[], __input: ElastiCacheDecreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `progressPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration.property.progressPercentage"></a>

- *Type:* `number`

---


### ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups(__scope: Construct, __resources: string[], __input: ElastiCacheDecreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDecreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `userGroupIdsToAdd`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userGroupIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToRemove"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesDeleteCacheCluster <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheCluster"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheCluster.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteCacheCluster(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheCluster`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheCluster.property.cacheCluster"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster)

---


### ElastiCacheResponsesDeleteCacheClusterCacheCluster <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenLastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.authTokenLastModifiedDate"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `cacheClusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.cacheClusterCreateTime"></a>

- *Type:* `string`

---

##### `cacheClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `cacheClusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.cacheClusterStatus"></a>

- *Type:* `string`

---

##### `cacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.cacheNodes"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheNode`](#aws-cdk-sdk.elasticache.ElastiCacheCacheNode)[]

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `cacheParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.cacheParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterCacheParameterGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterCacheParameterGroup)

---

##### `cacheSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.cacheSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMembership`](#aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMembership)[]

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `clientDownloadLandingPage`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.clientDownloadLandingPage"></a>

- *Type:* `string`

---

##### `configurationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.configurationEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterConfigurationEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterConfigurationEndpoint)

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterNotificationConfiguration`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterNotificationConfiguration)

---

##### `numCacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.numCacheNodes"></a>

- *Type:* `number`

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues)

---

##### `preferredAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.preferredAvailabilityZone"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `preferredOutpostArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.preferredOutpostArn"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.securityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheSecurityGroupMembership`](#aws-cdk-sdk.elasticache.ElastiCacheSecurityGroupMembership)[]

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheCluster.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---


### ElastiCacheResponsesDeleteCacheClusterCacheClusterCacheParameterGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterCacheParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterCacheParameterGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterCacheParameterGroup(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterCacheParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterCacheParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterCacheParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheNodeIdsToReboot`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterCacheParameterGroup.property.cacheNodeIdsToReboot"></a>

- *Type:* `string`[]

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterCacheParameterGroup.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `parameterApplyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterCacheParameterGroup.property.parameterApplyStatus"></a>

- *Type:* `string`

---


### ElastiCacheResponsesDeleteCacheClusterCacheClusterConfigurationEndpoint <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterConfigurationEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterConfigurationEndpoint.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterConfigurationEndpoint(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterConfigurationEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterConfigurationEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterConfigurationEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterConfigurationEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterConfigurationEndpoint.property.port"></a>

- *Type:* `number`

---


### ElastiCacheResponsesDeleteCacheClusterCacheClusterNotificationConfiguration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterNotificationConfiguration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterNotificationConfiguration(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterNotificationConfiguration.property.topicArn"></a>

- *Type:* `string`

---

##### `topicStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterNotificationConfiguration.property.topicStatus"></a>

- *Type:* `string`

---


### ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `authTokenStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues.property.authTokenStatus"></a>

- *Type:* `string`

---

##### `cacheNodeIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues.property.cacheNodeIdsToRemove"></a>

- *Type:* `string`[]

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `numCacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues.property.numCacheNodes"></a>

- *Type:* `number`

---


### ElastiCacheResponsesDeleteGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroup.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup)

---


### ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.property.engineVersion"></a>

- *Type:* `string`

---

##### `globalNodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.property.globalNodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup)[]

---

##### `globalReplicationGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

- *Type:* `string`

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.property.members"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---


### ElastiCacheResponsesDeleteReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroup.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup)

---


### ElastiCacheResponsesDeleteReplicationGroupReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenLastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.authTokenLastModifiedDate"></a>

- *Type:* `string`

---

##### `automaticFailover`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.automaticFailover"></a>

- *Type:* `string`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `configurationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.configurationEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupConfigurationEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupConfigurationEndpoint)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.description"></a>

- *Type:* `string`

---

##### `globalReplicationGroupInfo`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.globalReplicationGroupInfo"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo)

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `memberClusters`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.memberClusters"></a>

- *Type:* `string`[]

---

##### `memberClustersOutpostArns`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.memberClustersOutpostArns"></a>

- *Type:* `string`[]

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.multiAz"></a>

- *Type:* `string`

---

##### `nodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.nodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheNodeGroup)[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues)

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshottingClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.snapshottingClusterId"></a>

- *Type:* `string`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `userGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroup.property.userGroupIds"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesDeleteReplicationGroupReplicationGroupConfigurationEndpoint <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupConfigurationEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupConfigurationEndpoint.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupConfigurationEndpoint(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupConfigurationEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupConfigurationEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupConfigurationEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupConfigurationEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupConfigurationEndpoint.property.port"></a>

- *Type:* `number`

---


### ElastiCacheResponsesDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `globalReplicationGroupMemberRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupMemberRole"></a>

- *Type:* `string`

---


### ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `authTokenStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues.property.authTokenStatus"></a>

- *Type:* `string`

---

##### `automaticFailoverStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues.property.automaticFailoverStatus"></a>

- *Type:* `string`

---

##### `primaryClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues.property.primaryClusterId"></a>

- *Type:* `string`

---

##### `resharding`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues.property.resharding"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding)

---

##### `userGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues.property.userGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups)

---


### ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `slotMigration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding.property.slotMigration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration)

---


### ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `progressPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration.property.progressPercentage"></a>

- *Type:* `number`

---


### ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `userGroupIdsToAdd`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userGroupIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToRemove"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesDeleteSnapshot <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshot.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteSnapshot(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteSnapshotMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `snapshot`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshot.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot)

---


### ElastiCacheResponsesDeleteSnapshotSnapshot <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteSnapshotMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.arn"></a>

- *Type:* `string`

---

##### `automaticFailover`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.automaticFailover"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `cacheClusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.cacheClusterCreateTime"></a>

- *Type:* `string`

---

##### `cacheClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.engineVersion"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `nodeSnapshots`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.nodeSnapshots"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot`](#aws-cdk-sdk.elasticache.ElastiCacheNodeSnapshot)[]

---

##### `numCacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.numCacheNodes"></a>

- *Type:* `number`

---

##### `numNodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.numNodeGroups"></a>

- *Type:* `number`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.port"></a>

- *Type:* `number`

---

##### `preferredAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.preferredAvailabilityZone"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `preferredOutpostArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.preferredOutpostArn"></a>

- *Type:* `string`

---

##### `replicationGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.replicationGroupDescription"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `snapshotName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.snapshotName"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshotSource`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.snapshotSource"></a>

- *Type:* `string`

---

##### `snapshotStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.snapshotStatus"></a>

- *Type:* `string`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.topicArn"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteSnapshotSnapshot.property.vpcId"></a>

- *Type:* `string`

---


### ElastiCacheResponsesDeleteUser <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUser"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUser.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteUser(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteUserMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteUserMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteUserMessage)

---



#### Properties <a name="Properties"></a>

##### `accessString`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUser.property.accessString"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUser.property.arn"></a>

- *Type:* `string`

---

##### `authentication`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUser.property.authentication"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserAuthentication`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserAuthentication)

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUser.property.engine"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUser.property.status"></a>

- *Type:* `string`

---

##### `userGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUser.property.userGroupIds"></a>

- *Type:* `string`[]

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUser.property.userId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUser.property.userName"></a>

- *Type:* `string`

---


### ElastiCacheResponsesDeleteUserAuthentication <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserAuthentication"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserAuthentication.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteUserAuthentication(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteUserMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserAuthentication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserAuthentication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserAuthentication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteUserMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteUserMessage)

---



#### Properties <a name="Properties"></a>

##### `passwordCount`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserAuthentication.property.passwordCount"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserAuthentication.property.type"></a>

- *Type:* `string`

---


### ElastiCacheResponsesDeleteUserGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteUserGroup(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteUserGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteUserGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteUserGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroup.property.arn"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroup.property.engine"></a>

- *Type:* `string`

---

##### `pendingChanges`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroup.property.pendingChanges"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroupPendingChanges`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroupPendingChanges)

---

##### `replicationGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroup.property.replicationGroups"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroup.property.status"></a>

- *Type:* `string`

---

##### `userGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroup.property.userGroupId"></a>

- *Type:* `string`

---

##### `userIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroup.property.userIds"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesDeleteUserGroupPendingChanges <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroupPendingChanges"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroupPendingChanges.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDeleteUserGroupPendingChanges(__scope: Construct, __resources: string[], __input: ElastiCacheDeleteUserGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroupPendingChanges.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroupPendingChanges.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroupPendingChanges.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDeleteUserGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDeleteUserGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `userIdsToAdd`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroupPendingChanges.property.userIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDeleteUserGroupPendingChanges.property.userIdsToRemove"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesDescribeCacheClusters <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheClusters"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheClusters.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeCacheClusters(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeCacheClustersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheClusters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheClusters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheClusters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheClustersMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheClustersMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheClusters`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheClusters.property.cacheClusters"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheCluster`](#aws-cdk-sdk.elasticache.ElastiCacheCacheCluster)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheClusters.property.marker"></a>

- *Type:* `string`

---


### ElastiCacheResponsesDescribeCacheEngineVersions <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheEngineVersions"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheEngineVersions.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeCacheEngineVersions(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeCacheEngineVersionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheEngineVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheEngineVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheEngineVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheEngineVersionsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheEngineVersionsMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheEngineVersions`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheEngineVersions.property.cacheEngineVersions"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheEngineVersion`](#aws-cdk-sdk.elasticache.ElastiCacheCacheEngineVersion)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheEngineVersions.property.marker"></a>

- *Type:* `string`

---


### ElastiCacheResponsesDescribeCacheParameterGroups <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheParameterGroups"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheParameterGroups.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeCacheParameterGroups(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeCacheParameterGroupsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheParameterGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheParameterGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheParameterGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParameterGroupsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParameterGroupsMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheParameterGroups.property.cacheParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroup`](#aws-cdk-sdk.elasticache.ElastiCacheCacheParameterGroup)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheParameterGroups.property.marker"></a>

- *Type:* `string`

---


### ElastiCacheResponsesDescribeCacheParameters <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheParameters"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheParameters.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeCacheParameters(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeCacheParametersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParametersMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheParametersMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheNodeTypeSpecificParameters`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheParameters.property.cacheNodeTypeSpecificParameters"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter`](#aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheParameters.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheParameters.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheParameter`](#aws-cdk-sdk.elasticache.ElastiCacheParameter)[]

---


### ElastiCacheResponsesDescribeCacheSecurityGroups <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheSecurityGroups"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheSecurityGroups.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeCacheSecurityGroups(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeCacheSecurityGroupsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheSecurityGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheSecurityGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheSecurityGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSecurityGroupsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSecurityGroupsMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheSecurityGroups.property.cacheSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup`](#aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroup)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheSecurityGroups.property.marker"></a>

- *Type:* `string`

---


### ElastiCacheResponsesDescribeCacheSubnetGroups <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheSubnetGroups"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheSubnetGroups.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeCacheSubnetGroups(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeCacheSubnetGroupsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheSubnetGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheSubnetGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheSubnetGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSubnetGroupsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeCacheSubnetGroupsMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheSubnetGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheSubnetGroups.property.cacheSubnetGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroup`](#aws-cdk-sdk.elasticache.ElastiCacheCacheSubnetGroup)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeCacheSubnetGroups.property.marker"></a>

- *Type:* `string`

---


### ElastiCacheResponsesDescribeEngineDefaultParameters <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParameters"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParameters.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeEngineDefaultParameters(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeEngineDefaultParametersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeEngineDefaultParametersMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeEngineDefaultParametersMessage)

---



#### Properties <a name="Properties"></a>

##### `engineDefaults`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParameters.property.engineDefaults"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults)

---


### ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeEngineDefaultParametersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeEngineDefaultParametersMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeEngineDefaultParametersMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheNodeTypeSpecificParameters`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults.property.cacheNodeTypeSpecificParameters"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter`](#aws-cdk-sdk.elasticache.ElastiCacheCacheNodeTypeSpecificParameter)[]

---

##### `cacheParameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults.property.cacheParameterGroupFamily"></a>

- *Type:* `string`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheParameter`](#aws-cdk-sdk.elasticache.ElastiCacheParameter)[]

---


### ElastiCacheResponsesDescribeEvents <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEvents"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEvents.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeEvents(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeEventsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeEventsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeEventsMessage)

---



#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEvents.property.events"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheEvent`](#aws-cdk-sdk.elasticache.ElastiCacheEvent)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeEvents.property.marker"></a>

- *Type:* `string`

---


### ElastiCacheResponsesDescribeGlobalReplicationGroups <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeGlobalReplicationGroups"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeGlobalReplicationGroups.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeGlobalReplicationGroups(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeGlobalReplicationGroupsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeGlobalReplicationGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeGlobalReplicationGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeGlobalReplicationGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeGlobalReplicationGroupsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeGlobalReplicationGroupsMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeGlobalReplicationGroups.property.globalReplicationGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroup)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeGlobalReplicationGroups.property.marker"></a>

- *Type:* `string`

---


### ElastiCacheResponsesDescribeReplicationGroups <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReplicationGroups"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReplicationGroups.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeReplicationGroups(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeReplicationGroupsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReplicationGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReplicationGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReplicationGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeReplicationGroupsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeReplicationGroupsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReplicationGroups.property.marker"></a>

- *Type:* `string`

---

##### `replicationGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReplicationGroups.property.replicationGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheReplicationGroup)[]

---


### ElastiCacheResponsesDescribeReservedCacheNodes <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReservedCacheNodes"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReservedCacheNodes.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeReservedCacheNodes(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeReservedCacheNodesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReservedCacheNodes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReservedCacheNodes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReservedCacheNodes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReservedCacheNodes.property.marker"></a>

- *Type:* `string`

---

##### `reservedCacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReservedCacheNodes.property.reservedCacheNodes"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode`](#aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNode)[]

---


### ElastiCacheResponsesDescribeReservedCacheNodesOfferings <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReservedCacheNodesOfferings"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReservedCacheNodesOfferings.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeReservedCacheNodesOfferings(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeReservedCacheNodesOfferingsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReservedCacheNodesOfferings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReservedCacheNodesOfferings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReservedCacheNodesOfferings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesOfferingsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeReservedCacheNodesOfferingsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReservedCacheNodesOfferings.property.marker"></a>

- *Type:* `string`

---

##### `reservedCacheNodesOfferings`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeReservedCacheNodesOfferings.property.reservedCacheNodesOfferings"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOffering`](#aws-cdk-sdk.elasticache.ElastiCacheReservedCacheNodesOffering)[]

---


### ElastiCacheResponsesDescribeServiceUpdates <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeServiceUpdates"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeServiceUpdates.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeServiceUpdates(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeServiceUpdatesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeServiceUpdates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeServiceUpdates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeServiceUpdates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeServiceUpdatesMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeServiceUpdatesMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeServiceUpdates.property.marker"></a>

- *Type:* `string`

---

##### `serviceUpdates`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeServiceUpdates.property.serviceUpdates"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate`](#aws-cdk-sdk.elasticache.ElastiCacheServiceUpdate)[]

---


### ElastiCacheResponsesDescribeSnapshots <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeSnapshots"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeSnapshots.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeSnapshots(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeSnapshotsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeSnapshots.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeSnapshots.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeSnapshots.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeSnapshotsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeSnapshotsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeSnapshots.property.marker"></a>

- *Type:* `string`

---

##### `snapshots`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeSnapshots.property.snapshots"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheSnapshot`](#aws-cdk-sdk.elasticache.ElastiCacheSnapshot)[]

---


### ElastiCacheResponsesDescribeUpdateActions <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUpdateActions"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUpdateActions.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeUpdateActions(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeUpdateActionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUpdateActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUpdateActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUpdateActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeUpdateActionsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeUpdateActionsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUpdateActions.property.marker"></a>

- *Type:* `string`

---

##### `updateActions`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUpdateActions.property.updateActions"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheUpdateAction`](#aws-cdk-sdk.elasticache.ElastiCacheUpdateAction)[]

---


### ElastiCacheResponsesDescribeUserGroups <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUserGroups"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUserGroups.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeUserGroups(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeUserGroupsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUserGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUserGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUserGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeUserGroupsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeUserGroupsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUserGroups.property.marker"></a>

- *Type:* `string`

---

##### `userGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUserGroups.property.userGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheUserGroup`](#aws-cdk-sdk.elasticache.ElastiCacheUserGroup)[]

---


### ElastiCacheResponsesDescribeUsers <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUsers"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUsers.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDescribeUsers(__scope: Construct, __resources: string[], __input: ElastiCacheDescribeUsersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUsers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUsers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUsers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDescribeUsersMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDescribeUsersMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUsers.property.marker"></a>

- *Type:* `string`

---

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDescribeUsers.property.users"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheUser`](#aws-cdk-sdk.elasticache.ElastiCacheUser)[]

---


### ElastiCacheResponsesDisassociateGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheDisassociateGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDisassociateGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDisassociateGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroup.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup)

---


### ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheDisassociateGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheDisassociateGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheDisassociateGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.property.engineVersion"></a>

- *Type:* `string`

---

##### `globalNodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.property.globalNodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup)[]

---

##### `globalReplicationGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

- *Type:* `string`

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.property.members"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---


### ElastiCacheResponsesFailoverGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheFailoverGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheFailoverGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheFailoverGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroup.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup)

---


### ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheFailoverGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheFailoverGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheFailoverGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.property.engineVersion"></a>

- *Type:* `string`

---

##### `globalNodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.property.globalNodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup)[]

---

##### `globalReplicationGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

- *Type:* `string`

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.property.members"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---


### ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroup.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup)

---


### ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.engineVersion"></a>

- *Type:* `string`

---

##### `globalNodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.globalNodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup)[]

---

##### `globalReplicationGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

- *Type:* `string`

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.members"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---


### ElastiCacheResponsesIncreaseReplicaCount <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCount"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCount.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesIncreaseReplicaCount(__scope: Construct, __resources: string[], __input: ElastiCacheIncreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCount.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup)

---


### ElastiCacheResponsesIncreaseReplicaCountReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheIncreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenLastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.authTokenLastModifiedDate"></a>

- *Type:* `string`

---

##### `automaticFailover`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.automaticFailover"></a>

- *Type:* `string`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `configurationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.configurationEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupConfigurationEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupConfigurationEndpoint)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.description"></a>

- *Type:* `string`

---

##### `globalReplicationGroupInfo`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.globalReplicationGroupInfo"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo)

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `memberClusters`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.memberClusters"></a>

- *Type:* `string`[]

---

##### `memberClustersOutpostArns`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.memberClustersOutpostArns"></a>

- *Type:* `string`[]

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.multiAz"></a>

- *Type:* `string`

---

##### `nodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.nodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheNodeGroup)[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues)

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshottingClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.snapshottingClusterId"></a>

- *Type:* `string`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `userGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroup.property.userGroupIds"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesIncreaseReplicaCountReplicationGroupConfigurationEndpoint <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupConfigurationEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupConfigurationEndpoint.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupConfigurationEndpoint(__scope: Construct, __resources: string[], __input: ElastiCacheIncreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupConfigurationEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupConfigurationEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupConfigurationEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupConfigurationEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupConfigurationEndpoint.property.port"></a>

- *Type:* `number`

---


### ElastiCacheResponsesIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo(__scope: Construct, __resources: string[], __input: ElastiCacheIncreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `globalReplicationGroupMemberRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupMemberRole"></a>

- *Type:* `string`

---


### ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues(__scope: Construct, __resources: string[], __input: ElastiCacheIncreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `authTokenStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues.property.authTokenStatus"></a>

- *Type:* `string`

---

##### `automaticFailoverStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues.property.automaticFailoverStatus"></a>

- *Type:* `string`

---

##### `primaryClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues.property.primaryClusterId"></a>

- *Type:* `string`

---

##### `resharding`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues.property.resharding"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding)

---

##### `userGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues.property.userGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups)

---


### ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding(__scope: Construct, __resources: string[], __input: ElastiCacheIncreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `slotMigration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding.property.slotMigration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration)

---


### ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration(__scope: Construct, __resources: string[], __input: ElastiCacheIncreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `progressPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration.property.progressPercentage"></a>

- *Type:* `number`

---


### ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups(__scope: Construct, __resources: string[], __input: ElastiCacheIncreaseReplicaCountMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage`](#aws-cdk-sdk.elasticache.ElastiCacheIncreaseReplicaCountMessage)

---



#### Properties <a name="Properties"></a>

##### `userGroupIdsToAdd`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userGroupIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToRemove"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesListAllowedNodeTypeModifications <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesListAllowedNodeTypeModifications"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesListAllowedNodeTypeModifications.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesListAllowedNodeTypeModifications(__scope: Construct, __resources: string[], __input: ElastiCacheListAllowedNodeTypeModificationsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesListAllowedNodeTypeModifications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesListAllowedNodeTypeModifications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesListAllowedNodeTypeModifications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheListAllowedNodeTypeModificationsMessage`](#aws-cdk-sdk.elasticache.ElastiCacheListAllowedNodeTypeModificationsMessage)

---



#### Properties <a name="Properties"></a>

##### `scaleDownModifications`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesListAllowedNodeTypeModifications.property.scaleDownModifications"></a>

- *Type:* `string`[]

---

##### `scaleUpModifications`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesListAllowedNodeTypeModifications.property.scaleUpModifications"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesListTagsForResource <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesListTagsForResource.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: ElastiCacheListTagsForResourceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheListTagsForResourceMessage`](#aws-cdk-sdk.elasticache.ElastiCacheListTagsForResourceMessage)

---



#### Properties <a name="Properties"></a>

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesListTagsForResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTag`](#aws-cdk-sdk.elasticache.ElastiCacheTag)[]

---


### ElastiCacheResponsesModifyCacheCluster <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheCluster"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheCluster.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyCacheCluster(__scope: Construct, __resources: string[], __input: ElastiCacheModifyCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheCluster`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheCluster.property.cacheCluster"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster)

---


### ElastiCacheResponsesModifyCacheClusterCacheCluster <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster(__scope: Construct, __resources: string[], __input: ElastiCacheModifyCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenLastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.authTokenLastModifiedDate"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `cacheClusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.cacheClusterCreateTime"></a>

- *Type:* `string`

---

##### `cacheClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `cacheClusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.cacheClusterStatus"></a>

- *Type:* `string`

---

##### `cacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.cacheNodes"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheNode`](#aws-cdk-sdk.elasticache.ElastiCacheCacheNode)[]

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `cacheParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.cacheParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterCacheParameterGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterCacheParameterGroup)

---

##### `cacheSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.cacheSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMembership`](#aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMembership)[]

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `clientDownloadLandingPage`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.clientDownloadLandingPage"></a>

- *Type:* `string`

---

##### `configurationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.configurationEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterConfigurationEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterConfigurationEndpoint)

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterNotificationConfiguration`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterNotificationConfiguration)

---

##### `numCacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.numCacheNodes"></a>

- *Type:* `number`

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues)

---

##### `preferredAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.preferredAvailabilityZone"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `preferredOutpostArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.preferredOutpostArn"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.securityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheSecurityGroupMembership`](#aws-cdk-sdk.elasticache.ElastiCacheSecurityGroupMembership)[]

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheCluster.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---


### ElastiCacheResponsesModifyCacheClusterCacheClusterCacheParameterGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterCacheParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterCacheParameterGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterCacheParameterGroup(__scope: Construct, __resources: string[], __input: ElastiCacheModifyCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterCacheParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterCacheParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterCacheParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheNodeIdsToReboot`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterCacheParameterGroup.property.cacheNodeIdsToReboot"></a>

- *Type:* `string`[]

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterCacheParameterGroup.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `parameterApplyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterCacheParameterGroup.property.parameterApplyStatus"></a>

- *Type:* `string`

---


### ElastiCacheResponsesModifyCacheClusterCacheClusterConfigurationEndpoint <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterConfigurationEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterConfigurationEndpoint.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterConfigurationEndpoint(__scope: Construct, __resources: string[], __input: ElastiCacheModifyCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterConfigurationEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterConfigurationEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterConfigurationEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterConfigurationEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterConfigurationEndpoint.property.port"></a>

- *Type:* `number`

---


### ElastiCacheResponsesModifyCacheClusterCacheClusterNotificationConfiguration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterNotificationConfiguration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterNotificationConfiguration(__scope: Construct, __resources: string[], __input: ElastiCacheModifyCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterNotificationConfiguration.property.topicArn"></a>

- *Type:* `string`

---

##### `topicStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterNotificationConfiguration.property.topicStatus"></a>

- *Type:* `string`

---


### ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: ElastiCacheModifyCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `authTokenStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues.property.authTokenStatus"></a>

- *Type:* `string`

---

##### `cacheNodeIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues.property.cacheNodeIdsToRemove"></a>

- *Type:* `string`[]

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `numCacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues.property.numCacheNodes"></a>

- *Type:* `number`

---


### ElastiCacheResponsesModifyCacheParameterGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheParameterGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyCacheParameterGroup(__scope: Construct, __resources: string[], __input: ElastiCacheModifyCacheParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyCacheParameterGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyCacheParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheParameterGroup.property.cacheParameterGroupName"></a>

- *Type:* `string`

---


### ElastiCacheResponsesModifyCacheSubnetGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyCacheSubnetGroup(__scope: Construct, __resources: string[], __input: ElastiCacheModifyCacheSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyCacheSubnetGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyCacheSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroup.property.cacheSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup)

---


### ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup(__scope: Construct, __resources: string[], __input: ElastiCacheModifyCacheSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyCacheSubnetGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyCacheSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup.property.arn"></a>

- *Type:* `string`

---

##### `cacheSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup.property.cacheSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheSubnet`](#aws-cdk-sdk.elasticache.ElastiCacheSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### ElastiCacheResponsesModifyGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheModifyGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroup.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup)

---


### ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheModifyGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.property.engineVersion"></a>

- *Type:* `string`

---

##### `globalNodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.property.globalNodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup)[]

---

##### `globalReplicationGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

- *Type:* `string`

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.property.members"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---


### ElastiCacheResponsesModifyReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroup.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup)

---


### ElastiCacheResponsesModifyReplicationGroupReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenLastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.authTokenLastModifiedDate"></a>

- *Type:* `string`

---

##### `automaticFailover`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.automaticFailover"></a>

- *Type:* `string`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `configurationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.configurationEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupConfigurationEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupConfigurationEndpoint)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.description"></a>

- *Type:* `string`

---

##### `globalReplicationGroupInfo`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.globalReplicationGroupInfo"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo)

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `memberClusters`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.memberClusters"></a>

- *Type:* `string`[]

---

##### `memberClustersOutpostArns`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.memberClustersOutpostArns"></a>

- *Type:* `string`[]

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.multiAz"></a>

- *Type:* `string`

---

##### `nodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.nodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheNodeGroup)[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues)

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshottingClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.snapshottingClusterId"></a>

- *Type:* `string`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `userGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroup.property.userGroupIds"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesModifyReplicationGroupReplicationGroupConfigurationEndpoint <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupConfigurationEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupConfigurationEndpoint.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupConfigurationEndpoint(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupConfigurationEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupConfigurationEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupConfigurationEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupConfigurationEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupConfigurationEndpoint.property.port"></a>

- *Type:* `number`

---


### ElastiCacheResponsesModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `globalReplicationGroupMemberRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupMemberRole"></a>

- *Type:* `string`

---


### ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `authTokenStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues.property.authTokenStatus"></a>

- *Type:* `string`

---

##### `automaticFailoverStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues.property.automaticFailoverStatus"></a>

- *Type:* `string`

---

##### `primaryClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues.property.primaryClusterId"></a>

- *Type:* `string`

---

##### `resharding`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues.property.resharding"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding)

---

##### `userGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues.property.userGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups)

---


### ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `slotMigration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding.property.slotMigration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration)

---


### ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `progressPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration.property.progressPercentage"></a>

- *Type:* `number`

---


### ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `userGroupIdsToAdd`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userGroupIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToRemove"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesModifyReplicationGroupShardConfiguration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfiguration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfiguration(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupShardConfigurationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfiguration.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup)

---


### ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupShardConfigurationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenLastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.authTokenLastModifiedDate"></a>

- *Type:* `string`

---

##### `automaticFailover`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.automaticFailover"></a>

- *Type:* `string`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `configurationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.configurationEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.description"></a>

- *Type:* `string`

---

##### `globalReplicationGroupInfo`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.globalReplicationGroupInfo"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo)

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `memberClusters`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.memberClusters"></a>

- *Type:* `string`[]

---

##### `memberClustersOutpostArns`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.memberClustersOutpostArns"></a>

- *Type:* `string`[]

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.multiAz"></a>

- *Type:* `string`

---

##### `nodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.nodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheNodeGroup)[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues)

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshottingClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.snapshottingClusterId"></a>

- *Type:* `string`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `userGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup.property.userGroupIds"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupShardConfigurationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint.property.port"></a>

- *Type:* `number`

---


### ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupShardConfigurationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `globalReplicationGroupMemberRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupMemberRole"></a>

- *Type:* `string`

---


### ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupShardConfigurationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage)

---



#### Properties <a name="Properties"></a>

##### `authTokenStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues.property.authTokenStatus"></a>

- *Type:* `string`

---

##### `automaticFailoverStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues.property.automaticFailoverStatus"></a>

- *Type:* `string`

---

##### `primaryClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues.property.primaryClusterId"></a>

- *Type:* `string`

---

##### `resharding`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues.property.resharding"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding)

---

##### `userGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues.property.userGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups)

---


### ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupShardConfigurationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage)

---



#### Properties <a name="Properties"></a>

##### `slotMigration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding.property.slotMigration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration)

---


### ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupShardConfigurationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage)

---



#### Properties <a name="Properties"></a>

##### `progressPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration.property.progressPercentage"></a>

- *Type:* `number`

---


### ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups(__scope: Construct, __resources: string[], __input: ElastiCacheModifyReplicationGroupShardConfigurationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyReplicationGroupShardConfigurationMessage)

---



#### Properties <a name="Properties"></a>

##### `userGroupIdsToAdd`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userGroupIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToRemove"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesModifyUser <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUser"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUser.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyUser(__scope: Construct, __resources: string[], __input: ElastiCacheModifyUserMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyUserMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyUserMessage)

---



#### Properties <a name="Properties"></a>

##### `accessString`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUser.property.accessString"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUser.property.arn"></a>

- *Type:* `string`

---

##### `authentication`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUser.property.authentication"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserAuthentication`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserAuthentication)

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUser.property.engine"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUser.property.status"></a>

- *Type:* `string`

---

##### `userGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUser.property.userGroupIds"></a>

- *Type:* `string`[]

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUser.property.userId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUser.property.userName"></a>

- *Type:* `string`

---


### ElastiCacheResponsesModifyUserAuthentication <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserAuthentication"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserAuthentication.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyUserAuthentication(__scope: Construct, __resources: string[], __input: ElastiCacheModifyUserMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserAuthentication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserAuthentication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserAuthentication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyUserMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyUserMessage)

---



#### Properties <a name="Properties"></a>

##### `passwordCount`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserAuthentication.property.passwordCount"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserAuthentication.property.type"></a>

- *Type:* `string`

---


### ElastiCacheResponsesModifyUserGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyUserGroup(__scope: Construct, __resources: string[], __input: ElastiCacheModifyUserGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyUserGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyUserGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroup.property.arn"></a>

- *Type:* `string`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroup.property.engine"></a>

- *Type:* `string`

---

##### `pendingChanges`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroup.property.pendingChanges"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroupPendingChanges`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroupPendingChanges)

---

##### `replicationGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroup.property.replicationGroups"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroup.property.status"></a>

- *Type:* `string`

---

##### `userGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroup.property.userGroupId"></a>

- *Type:* `string`

---

##### `userIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroup.property.userIds"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesModifyUserGroupPendingChanges <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroupPendingChanges"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroupPendingChanges.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesModifyUserGroupPendingChanges(__scope: Construct, __resources: string[], __input: ElastiCacheModifyUserGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroupPendingChanges.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroupPendingChanges.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroupPendingChanges.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheModifyUserGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheModifyUserGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `userIdsToAdd`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroupPendingChanges.property.userIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesModifyUserGroupPendingChanges.property.userIdsToRemove"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesPurchaseReservedCacheNodesOffering <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOffering"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOffering.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOffering(__scope: Construct, __resources: string[], __input: ElastiCachePurchaseReservedCacheNodesOfferingMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOffering.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOffering.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOffering.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCachePurchaseReservedCacheNodesOfferingMessage`](#aws-cdk-sdk.elasticache.ElastiCachePurchaseReservedCacheNodesOfferingMessage)

---



#### Properties <a name="Properties"></a>

##### `reservedCacheNode`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOffering.property.reservedCacheNode"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode)

---


### ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode(__scope: Construct, __resources: string[], __input: ElastiCachePurchaseReservedCacheNodesOfferingMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCachePurchaseReservedCacheNodesOfferingMessage`](#aws-cdk-sdk.elasticache.ElastiCachePurchaseReservedCacheNodesOfferingMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheNodeCount`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.property.cacheNodeCount"></a>

- *Type:* `number`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.property.duration"></a>

- *Type:* `number`

---

##### `fixedPrice`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.property.fixedPrice"></a>

- *Type:* `number`

---

##### `offeringType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.property.offeringType"></a>

- *Type:* `string`

---

##### `productDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.property.productDescription"></a>

- *Type:* `string`

---

##### `recurringCharges`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.property.recurringCharges"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRecurringCharge`](#aws-cdk-sdk.elasticache.ElastiCacheRecurringCharge)[]

---

##### `reservationArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.property.reservationArn"></a>

- *Type:* `string`

---

##### `reservedCacheNodeId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.property.reservedCacheNodeId"></a>

- *Type:* `string`

---

##### `reservedCacheNodesOfferingId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.property.reservedCacheNodesOfferingId"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.property.state"></a>

- *Type:* `string`

---

##### `usagePrice`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode.property.usagePrice"></a>

- *Type:* `number`

---


### ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroup.property.globalReplicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup)

---


### ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.property.engineVersion"></a>

- *Type:* `string`

---

##### `globalNodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.property.globalNodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalNodeGroup)[]

---

##### `globalReplicationGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

- *Type:* `string`

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.property.members"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember`](#aws-cdk-sdk.elasticache.ElastiCacheGlobalReplicationGroupMember)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---


### ElastiCacheResponsesRebootCacheCluster <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheCluster"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheCluster.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesRebootCacheCluster(__scope: Construct, __resources: string[], __input: ElastiCacheRebootCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheCluster`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheCluster.property.cacheCluster"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster)

---


### ElastiCacheResponsesRebootCacheClusterCacheCluster <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster(__scope: Construct, __resources: string[], __input: ElastiCacheRebootCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenLastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.authTokenLastModifiedDate"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `cacheClusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.cacheClusterCreateTime"></a>

- *Type:* `string`

---

##### `cacheClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.cacheClusterId"></a>

- *Type:* `string`

---

##### `cacheClusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.cacheClusterStatus"></a>

- *Type:* `string`

---

##### `cacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.cacheNodes"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheNode`](#aws-cdk-sdk.elasticache.ElastiCacheCacheNode)[]

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `cacheParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.cacheParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterCacheParameterGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterCacheParameterGroup)

---

##### `cacheSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.cacheSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMembership`](#aws-cdk-sdk.elasticache.ElastiCacheCacheSecurityGroupMembership)[]

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.cacheSubnetGroupName"></a>

- *Type:* `string`

---

##### `clientDownloadLandingPage`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.clientDownloadLandingPage"></a>

- *Type:* `string`

---

##### `configurationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.configurationEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterConfigurationEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterConfigurationEndpoint)

---

##### `engine`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.engine"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.engineVersion"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterNotificationConfiguration`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterNotificationConfiguration)

---

##### `numCacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.numCacheNodes"></a>

- *Type:* `number`

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues)

---

##### `preferredAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.preferredAvailabilityZone"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `preferredOutpostArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.preferredOutpostArn"></a>

- *Type:* `string`

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.securityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheSecurityGroupMembership`](#aws-cdk-sdk.elasticache.ElastiCacheSecurityGroupMembership)[]

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheCluster.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---


### ElastiCacheResponsesRebootCacheClusterCacheClusterCacheParameterGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterCacheParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterCacheParameterGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterCacheParameterGroup(__scope: Construct, __resources: string[], __input: ElastiCacheRebootCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterCacheParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterCacheParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterCacheParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheNodeIdsToReboot`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterCacheParameterGroup.property.cacheNodeIdsToReboot"></a>

- *Type:* `string`[]

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterCacheParameterGroup.property.cacheParameterGroupName"></a>

- *Type:* `string`

---

##### `parameterApplyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterCacheParameterGroup.property.parameterApplyStatus"></a>

- *Type:* `string`

---


### ElastiCacheResponsesRebootCacheClusterCacheClusterConfigurationEndpoint <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterConfigurationEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterConfigurationEndpoint.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterConfigurationEndpoint(__scope: Construct, __resources: string[], __input: ElastiCacheRebootCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterConfigurationEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterConfigurationEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterConfigurationEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterConfigurationEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterConfigurationEndpoint.property.port"></a>

- *Type:* `number`

---


### ElastiCacheResponsesRebootCacheClusterCacheClusterNotificationConfiguration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterNotificationConfiguration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterNotificationConfiguration(__scope: Construct, __resources: string[], __input: ElastiCacheRebootCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterNotificationConfiguration.property.topicArn"></a>

- *Type:* `string`

---

##### `topicStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterNotificationConfiguration.property.topicStatus"></a>

- *Type:* `string`

---


### ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: ElastiCacheRebootCacheClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage`](#aws-cdk-sdk.elasticache.ElastiCacheRebootCacheClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `authTokenStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues.property.authTokenStatus"></a>

- *Type:* `string`

---

##### `cacheNodeIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues.property.cacheNodeIdsToRemove"></a>

- *Type:* `string`[]

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `numCacheNodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues.property.numCacheNodes"></a>

- *Type:* `number`

---


### ElastiCacheResponsesRemoveTagsFromResource <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRemoveTagsFromResource"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRemoveTagsFromResource.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesRemoveTagsFromResource(__scope: Construct, __resources: string[], __input: ElastiCacheRemoveTagsFromResourceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRemoveTagsFromResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRemoveTagsFromResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRemoveTagsFromResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRemoveTagsFromResourceMessage`](#aws-cdk-sdk.elasticache.ElastiCacheRemoveTagsFromResourceMessage)

---



#### Properties <a name="Properties"></a>

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRemoveTagsFromResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTag`](#aws-cdk-sdk.elasticache.ElastiCacheTag)[]

---


### ElastiCacheResponsesResetCacheParameterGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesResetCacheParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesResetCacheParameterGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesResetCacheParameterGroup(__scope: Construct, __resources: string[], __input: ElastiCacheResetCacheParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesResetCacheParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesResetCacheParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesResetCacheParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResetCacheParameterGroupMessage`](#aws-cdk-sdk.elasticache.ElastiCacheResetCacheParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheParameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesResetCacheParameterGroup.property.cacheParameterGroupName"></a>

- *Type:* `string`

---


### ElastiCacheResponsesRevokeCacheSecurityGroupIngress <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngress"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngress.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngress(__scope: Construct, __resources: string[], __input: ElastiCacheRevokeCacheSecurityGroupIngressMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRevokeCacheSecurityGroupIngressMessage`](#aws-cdk-sdk.elasticache.ElastiCacheRevokeCacheSecurityGroupIngressMessage)

---



#### Properties <a name="Properties"></a>

##### `cacheSecurityGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngress.property.cacheSecurityGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup)

---


### ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup(__scope: Construct, __resources: string[], __input: ElastiCacheRevokeCacheSecurityGroupIngressMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheRevokeCacheSecurityGroupIngressMessage`](#aws-cdk-sdk.elasticache.ElastiCacheRevokeCacheSecurityGroupIngressMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup.property.arn"></a>

- *Type:* `string`

---

##### `cacheSecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup.property.cacheSecurityGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup.property.description"></a>

- *Type:* `string`

---

##### `ec2SecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup.property.ec2SecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheEc2SecurityGroup`](#aws-cdk-sdk.elasticache.ElastiCacheEc2SecurityGroup)[]

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup.property.ownerId"></a>

- *Type:* `string`

---


### ElastiCacheResponsesStartMigration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesStartMigration(__scope: Construct, __resources: string[], __input: ElastiCacheStartMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigration.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup)

---


### ElastiCacheResponsesStartMigrationReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesStartMigrationReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheStartMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenLastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.authTokenLastModifiedDate"></a>

- *Type:* `string`

---

##### `automaticFailover`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.automaticFailover"></a>

- *Type:* `string`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `configurationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.configurationEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupConfigurationEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupConfigurationEndpoint)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.description"></a>

- *Type:* `string`

---

##### `globalReplicationGroupInfo`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.globalReplicationGroupInfo"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupGlobalReplicationGroupInfo`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupGlobalReplicationGroupInfo)

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `memberClusters`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.memberClusters"></a>

- *Type:* `string`[]

---

##### `memberClustersOutpostArns`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.memberClustersOutpostArns"></a>

- *Type:* `string`[]

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.multiAz"></a>

- *Type:* `string`

---

##### `nodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.nodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheNodeGroup)[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues)

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshottingClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.snapshottingClusterId"></a>

- *Type:* `string`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `userGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroup.property.userGroupIds"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesStartMigrationReplicationGroupConfigurationEndpoint <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupConfigurationEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupConfigurationEndpoint.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesStartMigrationReplicationGroupConfigurationEndpoint(__scope: Construct, __resources: string[], __input: ElastiCacheStartMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupConfigurationEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupConfigurationEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupConfigurationEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupConfigurationEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupConfigurationEndpoint.property.port"></a>

- *Type:* `number`

---


### ElastiCacheResponsesStartMigrationReplicationGroupGlobalReplicationGroupInfo <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupGlobalReplicationGroupInfo"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupGlobalReplicationGroupInfo.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesStartMigrationReplicationGroupGlobalReplicationGroupInfo(__scope: Construct, __resources: string[], __input: ElastiCacheStartMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupGlobalReplicationGroupInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupGlobalReplicationGroupInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupGlobalReplicationGroupInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `globalReplicationGroupMemberRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupMemberRole"></a>

- *Type:* `string`

---


### ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues(__scope: Construct, __resources: string[], __input: ElastiCacheStartMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `authTokenStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues.property.authTokenStatus"></a>

- *Type:* `string`

---

##### `automaticFailoverStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues.property.automaticFailoverStatus"></a>

- *Type:* `string`

---

##### `primaryClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues.property.primaryClusterId"></a>

- *Type:* `string`

---

##### `resharding`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues.property.resharding"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesResharding`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesResharding)

---

##### `userGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues.property.userGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesUserGroups`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesUserGroups)

---


### ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesResharding <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesResharding"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesResharding.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesResharding(__scope: Construct, __resources: string[], __input: ElastiCacheStartMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesResharding.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesResharding.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesResharding.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `slotMigration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesResharding.property.slotMigration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration)

---


### ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration(__scope: Construct, __resources: string[], __input: ElastiCacheStartMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `progressPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration.property.progressPercentage"></a>

- *Type:* `number`

---


### ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesUserGroups <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesUserGroups"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesUserGroups.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesUserGroups(__scope: Construct, __resources: string[], __input: ElastiCacheStartMigrationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesUserGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesUserGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesUserGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage`](#aws-cdk-sdk.elasticache.ElastiCacheStartMigrationMessage)

---



#### Properties <a name="Properties"></a>

##### `userGroupIdsToAdd`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userGroupIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToRemove"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesTestFailover <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailover"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailover.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesTestFailover(__scope: Construct, __resources: string[], __input: ElastiCacheTestFailoverMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailover.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailover.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailover.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage`](#aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationGroup`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailover.property.replicationGroup"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup)

---


### ElastiCacheResponsesTestFailoverReplicationGroup <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesTestFailoverReplicationGroup(__scope: Construct, __resources: string[], __input: ElastiCacheTestFailoverMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage`](#aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.arn"></a>

- *Type:* `string`

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.atRestEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.authTokenEnabled"></a>

- *Type:* `boolean`

---

##### `authTokenLastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.authTokenLastModifiedDate"></a>

- *Type:* `string`

---

##### `automaticFailover`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.automaticFailover"></a>

- *Type:* `string`

---

##### `cacheNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.cacheNodeType"></a>

- *Type:* `string`

---

##### `clusterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.clusterEnabled"></a>

- *Type:* `boolean`

---

##### `configurationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.configurationEndpoint"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupConfigurationEndpoint`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupConfigurationEndpoint)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.description"></a>

- *Type:* `string`

---

##### `globalReplicationGroupInfo`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.globalReplicationGroupInfo"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupGlobalReplicationGroupInfo`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupGlobalReplicationGroupInfo)

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `memberClusters`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.memberClusters"></a>

- *Type:* `string`[]

---

##### `memberClustersOutpostArns`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.memberClustersOutpostArns"></a>

- *Type:* `string`[]

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.multiAz"></a>

- *Type:* `string`

---

##### `nodeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.nodeGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheNodeGroup`](#aws-cdk-sdk.elasticache.ElastiCacheNodeGroup)[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues)

---

##### `replicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.replicationGroupId"></a>

- *Type:* `string`

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.snapshotRetentionLimit"></a>

- *Type:* `number`

---

##### `snapshottingClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.snapshottingClusterId"></a>

- *Type:* `string`

---

##### `snapshotWindow`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.snapshotWindow"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.status"></a>

- *Type:* `string`

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.transitEncryptionEnabled"></a>

- *Type:* `boolean`

---

##### `userGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroup.property.userGroupIds"></a>

- *Type:* `string`[]

---


### ElastiCacheResponsesTestFailoverReplicationGroupConfigurationEndpoint <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupConfigurationEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupConfigurationEndpoint.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesTestFailoverReplicationGroupConfigurationEndpoint(__scope: Construct, __resources: string[], __input: ElastiCacheTestFailoverMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupConfigurationEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupConfigurationEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupConfigurationEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage`](#aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupConfigurationEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupConfigurationEndpoint.property.port"></a>

- *Type:* `number`

---


### ElastiCacheResponsesTestFailoverReplicationGroupGlobalReplicationGroupInfo <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupGlobalReplicationGroupInfo"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupGlobalReplicationGroupInfo.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesTestFailoverReplicationGroupGlobalReplicationGroupInfo(__scope: Construct, __resources: string[], __input: ElastiCacheTestFailoverMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupGlobalReplicationGroupInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupGlobalReplicationGroupInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupGlobalReplicationGroupInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage`](#aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage)

---



#### Properties <a name="Properties"></a>

##### `globalReplicationGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupId"></a>

- *Type:* `string`

---

##### `globalReplicationGroupMemberRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupGlobalReplicationGroupInfo.property.globalReplicationGroupMemberRole"></a>

- *Type:* `string`

---


### ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues(__scope: Construct, __resources: string[], __input: ElastiCacheTestFailoverMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage`](#aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage)

---



#### Properties <a name="Properties"></a>

##### `authTokenStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues.property.authTokenStatus"></a>

- *Type:* `string`

---

##### `automaticFailoverStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues.property.automaticFailoverStatus"></a>

- *Type:* `string`

---

##### `primaryClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues.property.primaryClusterId"></a>

- *Type:* `string`

---

##### `resharding`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues.property.resharding"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesResharding`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesResharding)

---

##### `userGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues.property.userGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesUserGroups`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesUserGroups)

---


### ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesResharding <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesResharding"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesResharding.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesResharding(__scope: Construct, __resources: string[], __input: ElastiCacheTestFailoverMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesResharding.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesResharding.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesResharding.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage`](#aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage)

---



#### Properties <a name="Properties"></a>

##### `slotMigration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesResharding.property.slotMigration"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration`](#aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration)

---


### ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration(__scope: Construct, __resources: string[], __input: ElastiCacheTestFailoverMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage`](#aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage)

---



#### Properties <a name="Properties"></a>

##### `progressPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration.property.progressPercentage"></a>

- *Type:* `number`

---


### ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesUserGroups <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesUserGroups"></a>

#### Initializer <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesUserGroups.Initializer"></a>

```typescript
import { elasticache } from 'aws-cdk-sdk'

new elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesUserGroups(__scope: Construct, __resources: string[], __input: ElastiCacheTestFailoverMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesUserGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesUserGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesUserGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage`](#aws-cdk-sdk.elasticache.ElastiCacheTestFailoverMessage)

---



#### Properties <a name="Properties"></a>

##### `userGroupIdsToAdd`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToAdd"></a>

- *Type:* `string`[]

---

##### `userGroupIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.elasticache.ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesUserGroups.property.userGroupIdsToRemove"></a>

- *Type:* `string`[]

---



