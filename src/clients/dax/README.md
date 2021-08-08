# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DaxClient <a name="aws-cdk-sdk.dax.DaxClient"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DaxClient.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DaxClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createCluster` <a name="aws-cdk-sdk.dax.DaxClient.createCluster"></a>

```typescript
public createCluster(input: DaxCreateClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCreateClusterRequest`](#aws-cdk-sdk.dax.DaxCreateClusterRequest)

---

##### `createParameterGroup` <a name="aws-cdk-sdk.dax.DaxClient.createParameterGroup"></a>

```typescript
public createParameterGroup(input: DaxCreateParameterGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCreateParameterGroupRequest`](#aws-cdk-sdk.dax.DaxCreateParameterGroupRequest)

---

##### `createSubnetGroup` <a name="aws-cdk-sdk.dax.DaxClient.createSubnetGroup"></a>

```typescript
public createSubnetGroup(input: DaxCreateSubnetGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCreateSubnetGroupRequest`](#aws-cdk-sdk.dax.DaxCreateSubnetGroupRequest)

---

##### `decreaseReplicationFactor` <a name="aws-cdk-sdk.dax.DaxClient.decreaseReplicationFactor"></a>

```typescript
public decreaseReplicationFactor(input: DaxDecreaseReplicationFactorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest`](#aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest)

---

##### `deleteCluster` <a name="aws-cdk-sdk.dax.DaxClient.deleteCluster"></a>

```typescript
public deleteCluster(input: DaxDeleteClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDeleteClusterRequest`](#aws-cdk-sdk.dax.DaxDeleteClusterRequest)

---

##### `deleteParameterGroup` <a name="aws-cdk-sdk.dax.DaxClient.deleteParameterGroup"></a>

```typescript
public deleteParameterGroup(input: DaxDeleteParameterGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDeleteParameterGroupRequest`](#aws-cdk-sdk.dax.DaxDeleteParameterGroupRequest)

---

##### `deleteSubnetGroup` <a name="aws-cdk-sdk.dax.DaxClient.deleteSubnetGroup"></a>

```typescript
public deleteSubnetGroup(input: DaxDeleteSubnetGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDeleteSubnetGroupRequest`](#aws-cdk-sdk.dax.DaxDeleteSubnetGroupRequest)

---

##### `describeClusters` <a name="aws-cdk-sdk.dax.DaxClient.describeClusters"></a>

```typescript
public describeClusters(input: DaxDescribeClustersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDescribeClustersRequest`](#aws-cdk-sdk.dax.DaxDescribeClustersRequest)

---

##### `describeDefaultParameters` <a name="aws-cdk-sdk.dax.DaxClient.describeDefaultParameters"></a>

```typescript
public describeDefaultParameters(input: DaxDescribeDefaultParametersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDescribeDefaultParametersRequest`](#aws-cdk-sdk.dax.DaxDescribeDefaultParametersRequest)

---

##### `describeEvents` <a name="aws-cdk-sdk.dax.DaxClient.describeEvents"></a>

```typescript
public describeEvents(input: DaxDescribeEventsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDescribeEventsRequest`](#aws-cdk-sdk.dax.DaxDescribeEventsRequest)

---

##### `describeParameterGroups` <a name="aws-cdk-sdk.dax.DaxClient.describeParameterGroups"></a>

```typescript
public describeParameterGroups(input: DaxDescribeParameterGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDescribeParameterGroupsRequest`](#aws-cdk-sdk.dax.DaxDescribeParameterGroupsRequest)

---

##### `describeParameters` <a name="aws-cdk-sdk.dax.DaxClient.describeParameters"></a>

```typescript
public describeParameters(input: DaxDescribeParametersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDescribeParametersRequest`](#aws-cdk-sdk.dax.DaxDescribeParametersRequest)

---

##### `describeSubnetGroups` <a name="aws-cdk-sdk.dax.DaxClient.describeSubnetGroups"></a>

```typescript
public describeSubnetGroups(input: DaxDescribeSubnetGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDescribeSubnetGroupsRequest`](#aws-cdk-sdk.dax.DaxDescribeSubnetGroupsRequest)

---

##### `increaseReplicationFactor` <a name="aws-cdk-sdk.dax.DaxClient.increaseReplicationFactor"></a>

```typescript
public increaseReplicationFactor(input: DaxIncreaseReplicationFactorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest`](#aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest)

---

##### `listTags` <a name="aws-cdk-sdk.dax.DaxClient.listTags"></a>

```typescript
public listTags(input: DaxListTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxListTagsRequest`](#aws-cdk-sdk.dax.DaxListTagsRequest)

---

##### `rebootNode` <a name="aws-cdk-sdk.dax.DaxClient.rebootNode"></a>

```typescript
public rebootNode(input: DaxRebootNodeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxRebootNodeRequest`](#aws-cdk-sdk.dax.DaxRebootNodeRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.dax.DaxClient.tagResource"></a>

```typescript
public tagResource(input: DaxTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxTagResourceRequest`](#aws-cdk-sdk.dax.DaxTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.dax.DaxClient.untagResource"></a>

```typescript
public untagResource(input: DaxUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxUntagResourceRequest`](#aws-cdk-sdk.dax.DaxUntagResourceRequest)

---

##### `updateCluster` <a name="aws-cdk-sdk.dax.DaxClient.updateCluster"></a>

```typescript
public updateCluster(input: DaxUpdateClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxUpdateClusterRequest`](#aws-cdk-sdk.dax.DaxUpdateClusterRequest)

---

##### `updateParameterGroup` <a name="aws-cdk-sdk.dax.DaxClient.updateParameterGroup"></a>

```typescript
public updateParameterGroup(input: DaxUpdateParameterGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxUpdateParameterGroupRequest`](#aws-cdk-sdk.dax.DaxUpdateParameterGroupRequest)

---

##### `updateSubnetGroup` <a name="aws-cdk-sdk.dax.DaxClient.updateSubnetGroup"></a>

```typescript
public updateSubnetGroup(input: DaxUpdateSubnetGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxUpdateSubnetGroupRequest`](#aws-cdk-sdk.dax.DaxUpdateSubnetGroupRequest)

---




## Structs <a name="Structs"></a>

### DaxCluster <a name="aws-cdk-sdk.dax.DaxCluster"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxCluster: dax.DaxCluster = { ... }
```

##### `activeNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.activeNodes"></a>

- *Type:* `number`

---

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterDiscoveryEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.clusterDiscoveryEndpoint"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxEndpoint`](#aws-cdk-sdk.dax.DaxEndpoint)

---

##### `clusterName`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.clusterName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.description"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `nodeIdsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.nodeIdsToRemove"></a>

- *Type:* `string`[]

---

##### `nodes`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.nodes"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxNode`](#aws-cdk-sdk.dax.DaxNode)[]

---

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxNotificationConfiguration`](#aws-cdk-sdk.dax.DaxNotificationConfiguration)

---

##### `parameterGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.parameterGroup"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxParameterGroupStatus`](#aws-cdk-sdk.dax.DaxParameterGroupStatus)

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.securityGroups"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxSecurityGroupMembership`](#aws-cdk-sdk.dax.DaxSecurityGroupMembership)[]

---

##### `sseDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxsseDescription`](#aws-cdk-sdk.dax.DaxsseDescription)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.status"></a>

- *Type:* `string`

---

##### `subnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.subnetGroup"></a>

- *Type:* `string`

---

##### `totalNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCluster.property.totalNodes"></a>

- *Type:* `number`

---

### DaxCreateClusterRequest <a name="aws-cdk-sdk.dax.DaxCreateClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxCreateClusterRequest: dax.DaxCreateClusterRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxCreateClusterRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxCreateClusterRequest.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxCreateClusterRequest.property.nodeType"></a>

- *Type:* `string`

---

##### `replicationFactor`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxCreateClusterRequest.property.replicationFactor"></a>

- *Type:* `number`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCreateClusterRequest.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCreateClusterRequest.property.description"></a>

- *Type:* `string`

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCreateClusterRequest.property.notificationTopicArn"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCreateClusterRequest.property.parameterGroupName"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCreateClusterRequest.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCreateClusterRequest.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `sseSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCreateClusterRequest.property.sseSpecification"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxsseSpecification`](#aws-cdk-sdk.dax.DaxsseSpecification)

---

##### `subnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCreateClusterRequest.property.subnetGroupName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCreateClusterRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxTag`](#aws-cdk-sdk.dax.DaxTag)[]

---

### DaxCreateClusterResponse <a name="aws-cdk-sdk.dax.DaxCreateClusterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxCreateClusterResponse: dax.DaxCreateClusterResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCreateClusterResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCluster`](#aws-cdk-sdk.dax.DaxCluster)

---

### DaxCreateParameterGroupRequest <a name="aws-cdk-sdk.dax.DaxCreateParameterGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxCreateParameterGroupRequest: dax.DaxCreateParameterGroupRequest = { ... }
```

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxCreateParameterGroupRequest.property.parameterGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCreateParameterGroupRequest.property.description"></a>

- *Type:* `string`

---

### DaxCreateParameterGroupResponse <a name="aws-cdk-sdk.dax.DaxCreateParameterGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxCreateParameterGroupResponse: dax.DaxCreateParameterGroupResponse = { ... }
```

##### `parameterGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCreateParameterGroupResponse.property.parameterGroup"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxParameterGroup`](#aws-cdk-sdk.dax.DaxParameterGroup)

---

### DaxCreateSubnetGroupRequest <a name="aws-cdk-sdk.dax.DaxCreateSubnetGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxCreateSubnetGroupRequest: dax.DaxCreateSubnetGroupRequest = { ... }
```

##### `subnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxCreateSubnetGroupRequest.property.subnetGroupName"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxCreateSubnetGroupRequest.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCreateSubnetGroupRequest.property.description"></a>

- *Type:* `string`

---

### DaxCreateSubnetGroupResponse <a name="aws-cdk-sdk.dax.DaxCreateSubnetGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxCreateSubnetGroupResponse: dax.DaxCreateSubnetGroupResponse = { ... }
```

##### `subnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxCreateSubnetGroupResponse.property.subnetGroup"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxSubnetGroup`](#aws-cdk-sdk.dax.DaxSubnetGroup)

---

### DaxDecreaseReplicationFactorRequest <a name="aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDecreaseReplicationFactorRequest: dax.DaxDecreaseReplicationFactorRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `newReplicationFactor`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest.property.newReplicationFactor"></a>

- *Type:* `number`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `nodeIdsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest.property.nodeIdsToRemove"></a>

- *Type:* `string`[]

---

### DaxDecreaseReplicationFactorResponse <a name="aws-cdk-sdk.dax.DaxDecreaseReplicationFactorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDecreaseReplicationFactorResponse: dax.DaxDecreaseReplicationFactorResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDecreaseReplicationFactorResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCluster`](#aws-cdk-sdk.dax.DaxCluster)

---

### DaxDeleteClusterRequest <a name="aws-cdk-sdk.dax.DaxDeleteClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDeleteClusterRequest: dax.DaxDeleteClusterRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxDeleteClusterRequest.property.clusterName"></a>

- *Type:* `string`

---

### DaxDeleteClusterResponse <a name="aws-cdk-sdk.dax.DaxDeleteClusterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDeleteClusterResponse: dax.DaxDeleteClusterResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDeleteClusterResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCluster`](#aws-cdk-sdk.dax.DaxCluster)

---

### DaxDeleteParameterGroupRequest <a name="aws-cdk-sdk.dax.DaxDeleteParameterGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDeleteParameterGroupRequest: dax.DaxDeleteParameterGroupRequest = { ... }
```

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxDeleteParameterGroupRequest.property.parameterGroupName"></a>

- *Type:* `string`

---

### DaxDeleteParameterGroupResponse <a name="aws-cdk-sdk.dax.DaxDeleteParameterGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDeleteParameterGroupResponse: dax.DaxDeleteParameterGroupResponse = { ... }
```

##### `deletionMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDeleteParameterGroupResponse.property.deletionMessage"></a>

- *Type:* `string`

---

### DaxDeleteSubnetGroupRequest <a name="aws-cdk-sdk.dax.DaxDeleteSubnetGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDeleteSubnetGroupRequest: dax.DaxDeleteSubnetGroupRequest = { ... }
```

##### `subnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxDeleteSubnetGroupRequest.property.subnetGroupName"></a>

- *Type:* `string`

---

### DaxDeleteSubnetGroupResponse <a name="aws-cdk-sdk.dax.DaxDeleteSubnetGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDeleteSubnetGroupResponse: dax.DaxDeleteSubnetGroupResponse = { ... }
```

##### `deletionMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDeleteSubnetGroupResponse.property.deletionMessage"></a>

- *Type:* `string`

---

### DaxDescribeClustersRequest <a name="aws-cdk-sdk.dax.DaxDescribeClustersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDescribeClustersRequest: dax.DaxDescribeClustersRequest = { ... }
```

##### `clusterNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeClustersRequest.property.clusterNames"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeClustersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeClustersRequest.property.nextToken"></a>

- *Type:* `string`

---

### DaxDescribeClustersResponse <a name="aws-cdk-sdk.dax.DaxDescribeClustersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDescribeClustersResponse: dax.DaxDescribeClustersResponse = { ... }
```

##### `clusters`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeClustersResponse.property.clusters"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCluster`](#aws-cdk-sdk.dax.DaxCluster)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeClustersResponse.property.nextToken"></a>

- *Type:* `string`

---

### DaxDescribeDefaultParametersRequest <a name="aws-cdk-sdk.dax.DaxDescribeDefaultParametersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDescribeDefaultParametersRequest: dax.DaxDescribeDefaultParametersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeDefaultParametersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeDefaultParametersRequest.property.nextToken"></a>

- *Type:* `string`

---

### DaxDescribeDefaultParametersResponse <a name="aws-cdk-sdk.dax.DaxDescribeDefaultParametersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDescribeDefaultParametersResponse: dax.DaxDescribeDefaultParametersResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeDefaultParametersResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeDefaultParametersResponse.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxParameter`](#aws-cdk-sdk.dax.DaxParameter)[]

---

### DaxDescribeEventsRequest <a name="aws-cdk-sdk.dax.DaxDescribeEventsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDescribeEventsRequest: dax.DaxDescribeEventsRequest = { ... }
```

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeEventsRequest.property.duration"></a>

- *Type:* `number`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeEventsRequest.property.endTime"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeEventsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeEventsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeEventsRequest.property.sourceName"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeEventsRequest.property.sourceType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeEventsRequest.property.startTime"></a>

- *Type:* `string`

---

### DaxDescribeEventsResponse <a name="aws-cdk-sdk.dax.DaxDescribeEventsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDescribeEventsResponse: dax.DaxDescribeEventsResponse = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeEventsResponse.property.events"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxEvent`](#aws-cdk-sdk.dax.DaxEvent)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeEventsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DaxDescribeParameterGroupsRequest <a name="aws-cdk-sdk.dax.DaxDescribeParameterGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDescribeParameterGroupsRequest: dax.DaxDescribeParameterGroupsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeParameterGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeParameterGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `parameterGroupNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeParameterGroupsRequest.property.parameterGroupNames"></a>

- *Type:* `string`[]

---

### DaxDescribeParameterGroupsResponse <a name="aws-cdk-sdk.dax.DaxDescribeParameterGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDescribeParameterGroupsResponse: dax.DaxDescribeParameterGroupsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeParameterGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `parameterGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeParameterGroupsResponse.property.parameterGroups"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxParameterGroup`](#aws-cdk-sdk.dax.DaxParameterGroup)[]

---

### DaxDescribeParametersRequest <a name="aws-cdk-sdk.dax.DaxDescribeParametersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDescribeParametersRequest: dax.DaxDescribeParametersRequest = { ... }
```

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxDescribeParametersRequest.property.parameterGroupName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeParametersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeParametersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeParametersRequest.property.source"></a>

- *Type:* `string`

---

### DaxDescribeParametersResponse <a name="aws-cdk-sdk.dax.DaxDescribeParametersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDescribeParametersResponse: dax.DaxDescribeParametersResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeParametersResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeParametersResponse.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxParameter`](#aws-cdk-sdk.dax.DaxParameter)[]

---

### DaxDescribeSubnetGroupsRequest <a name="aws-cdk-sdk.dax.DaxDescribeSubnetGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDescribeSubnetGroupsRequest: dax.DaxDescribeSubnetGroupsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeSubnetGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeSubnetGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `subnetGroupNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeSubnetGroupsRequest.property.subnetGroupNames"></a>

- *Type:* `string`[]

---

### DaxDescribeSubnetGroupsResponse <a name="aws-cdk-sdk.dax.DaxDescribeSubnetGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxDescribeSubnetGroupsResponse: dax.DaxDescribeSubnetGroupsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeSubnetGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `subnetGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxDescribeSubnetGroupsResponse.property.subnetGroups"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxSubnetGroup`](#aws-cdk-sdk.dax.DaxSubnetGroup)[]

---

### DaxEndpoint <a name="aws-cdk-sdk.dax.DaxEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxEndpoint: dax.DaxEndpoint = { ... }
```

##### `address`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxEndpoint.property.port"></a>

- *Type:* `number`

---

### DaxEvent <a name="aws-cdk-sdk.dax.DaxEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxEvent: dax.DaxEvent = { ... }
```

##### `date`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxEvent.property.date"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxEvent.property.message"></a>

- *Type:* `string`

---

##### `sourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxEvent.property.sourceName"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxEvent.property.sourceType"></a>

- *Type:* `string`

---

### DaxIncreaseReplicationFactorRequest <a name="aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxIncreaseReplicationFactorRequest: dax.DaxIncreaseReplicationFactorRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `newReplicationFactor`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest.property.newReplicationFactor"></a>

- *Type:* `number`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest.property.availabilityZones"></a>

- *Type:* `string`[]

---

### DaxIncreaseReplicationFactorResponse <a name="aws-cdk-sdk.dax.DaxIncreaseReplicationFactorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxIncreaseReplicationFactorResponse: dax.DaxIncreaseReplicationFactorResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxIncreaseReplicationFactorResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCluster`](#aws-cdk-sdk.dax.DaxCluster)

---

### DaxListTagsRequest <a name="aws-cdk-sdk.dax.DaxListTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxListTagsRequest: dax.DaxListTagsRequest = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxListTagsRequest.property.resourceName"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxListTagsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DaxListTagsResponse <a name="aws-cdk-sdk.dax.DaxListTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxListTagsResponse: dax.DaxListTagsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxListTagsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxListTagsResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxTag`](#aws-cdk-sdk.dax.DaxTag)[]

---

### DaxNode <a name="aws-cdk-sdk.dax.DaxNode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxNode: dax.DaxNode = { ... }
```

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxNode.property.availabilityZone"></a>

- *Type:* `string`

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxNode.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxEndpoint`](#aws-cdk-sdk.dax.DaxEndpoint)

---

##### `nodeCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxNode.property.nodeCreateTime"></a>

- *Type:* `string`

---

##### `nodeId`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxNode.property.nodeId"></a>

- *Type:* `string`

---

##### `nodeStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxNode.property.nodeStatus"></a>

- *Type:* `string`

---

##### `parameterGroupStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxNode.property.parameterGroupStatus"></a>

- *Type:* `string`

---

### DaxNodeTypeSpecificValue <a name="aws-cdk-sdk.dax.DaxNodeTypeSpecificValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxNodeTypeSpecificValue: dax.DaxNodeTypeSpecificValue = { ... }
```

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxNodeTypeSpecificValue.property.nodeType"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxNodeTypeSpecificValue.property.value"></a>

- *Type:* `string`

---

### DaxNotificationConfiguration <a name="aws-cdk-sdk.dax.DaxNotificationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxNotificationConfiguration: dax.DaxNotificationConfiguration = { ... }
```

##### `topicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxNotificationConfiguration.property.topicArn"></a>

- *Type:* `string`

---

##### `topicStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxNotificationConfiguration.property.topicStatus"></a>

- *Type:* `string`

---

### DaxParameter <a name="aws-cdk-sdk.dax.DaxParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxParameter: dax.DaxParameter = { ... }
```

##### `allowedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameter.property.allowedValues"></a>

- *Type:* `string`

---

##### `changeType`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameter.property.changeType"></a>

- *Type:* `string`

---

##### `dataType`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameter.property.dataType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameter.property.description"></a>

- *Type:* `string`

---

##### `isModifiable`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameter.property.isModifiable"></a>

- *Type:* `string`

---

##### `nodeTypeSpecificValues`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameter.property.nodeTypeSpecificValues"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxNodeTypeSpecificValue`](#aws-cdk-sdk.dax.DaxNodeTypeSpecificValue)[]

---

##### `parameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameter.property.parameterName"></a>

- *Type:* `string`

---

##### `parameterType`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameter.property.parameterType"></a>

- *Type:* `string`

---

##### `parameterValue`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameter.property.parameterValue"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameter.property.source"></a>

- *Type:* `string`

---

### DaxParameterGroup <a name="aws-cdk-sdk.dax.DaxParameterGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxParameterGroup: dax.DaxParameterGroup = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameterGroup.property.description"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameterGroup.property.parameterGroupName"></a>

- *Type:* `string`

---

### DaxParameterGroupStatus <a name="aws-cdk-sdk.dax.DaxParameterGroupStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxParameterGroupStatus: dax.DaxParameterGroupStatus = { ... }
```

##### `nodeIdsToReboot`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameterGroupStatus.property.nodeIdsToReboot"></a>

- *Type:* `string`[]

---

##### `parameterApplyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameterGroupStatus.property.parameterApplyStatus"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameterGroupStatus.property.parameterGroupName"></a>

- *Type:* `string`

---

### DaxParameterNameValue <a name="aws-cdk-sdk.dax.DaxParameterNameValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxParameterNameValue: dax.DaxParameterNameValue = { ... }
```

##### `parameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameterNameValue.property.parameterName"></a>

- *Type:* `string`

---

##### `parameterValue`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxParameterNameValue.property.parameterValue"></a>

- *Type:* `string`

---

### DaxRebootNodeRequest <a name="aws-cdk-sdk.dax.DaxRebootNodeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxRebootNodeRequest: dax.DaxRebootNodeRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxRebootNodeRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `nodeId`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxRebootNodeRequest.property.nodeId"></a>

- *Type:* `string`

---

### DaxRebootNodeResponse <a name="aws-cdk-sdk.dax.DaxRebootNodeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxRebootNodeResponse: dax.DaxRebootNodeResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxRebootNodeResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCluster`](#aws-cdk-sdk.dax.DaxCluster)

---

### DaxSecurityGroupMembership <a name="aws-cdk-sdk.dax.DaxSecurityGroupMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxSecurityGroupMembership: dax.DaxSecurityGroupMembership = { ... }
```

##### `securityGroupIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxSecurityGroupMembership.property.securityGroupIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxSecurityGroupMembership.property.status"></a>

- *Type:* `string`

---

### DaxsseDescription <a name="aws-cdk-sdk.dax.DaxsseDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxsseDescription: dax.DaxsseDescription = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxsseDescription.property.status"></a>

- *Type:* `string`

---

### DaxsseSpecification <a name="aws-cdk-sdk.dax.DaxsseSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxsseSpecification: dax.DaxsseSpecification = { ... }
```

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxsseSpecification.property.enabled"></a>

- *Type:* `boolean`

---

### DaxSubnet <a name="aws-cdk-sdk.dax.DaxSubnet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxSubnet: dax.DaxSubnet = { ... }
```

##### `subnetAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxSubnet.property.subnetAvailabilityZone"></a>

- *Type:* `string`

---

##### `subnetIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxSubnet.property.subnetIdentifier"></a>

- *Type:* `string`

---

### DaxSubnetGroup <a name="aws-cdk-sdk.dax.DaxSubnetGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxSubnetGroup: dax.DaxSubnetGroup = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxSubnetGroup.property.description"></a>

- *Type:* `string`

---

##### `subnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxSubnetGroup.property.subnetGroupName"></a>

- *Type:* `string`

---

##### `subnets`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxSubnet`](#aws-cdk-sdk.dax.DaxSubnet)[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---

### DaxTag <a name="aws-cdk-sdk.dax.DaxTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxTag: dax.DaxTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxTag.property.value"></a>

- *Type:* `string`

---

### DaxTagResourceRequest <a name="aws-cdk-sdk.dax.DaxTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxTagResourceRequest: dax.DaxTagResourceRequest = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxTagResourceRequest.property.resourceName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxTag`](#aws-cdk-sdk.dax.DaxTag)[]

---

### DaxTagResourceResponse <a name="aws-cdk-sdk.dax.DaxTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxTagResourceResponse: dax.DaxTagResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxTagResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxTag`](#aws-cdk-sdk.dax.DaxTag)[]

---

### DaxUntagResourceRequest <a name="aws-cdk-sdk.dax.DaxUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxUntagResourceRequest: dax.DaxUntagResourceRequest = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxUntagResourceRequest.property.resourceName"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### DaxUntagResourceResponse <a name="aws-cdk-sdk.dax.DaxUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxUntagResourceResponse: dax.DaxUntagResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxUntagResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxTag`](#aws-cdk-sdk.dax.DaxTag)[]

---

### DaxUpdateClusterRequest <a name="aws-cdk-sdk.dax.DaxUpdateClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxUpdateClusterRequest: dax.DaxUpdateClusterRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxUpdateClusterRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxUpdateClusterRequest.property.description"></a>

- *Type:* `string`

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxUpdateClusterRequest.property.notificationTopicArn"></a>

- *Type:* `string`

---

##### `notificationTopicStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxUpdateClusterRequest.property.notificationTopicStatus"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxUpdateClusterRequest.property.parameterGroupName"></a>

- *Type:* `string`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxUpdateClusterRequest.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxUpdateClusterRequest.property.securityGroupIds"></a>

- *Type:* `string`[]

---

### DaxUpdateClusterResponse <a name="aws-cdk-sdk.dax.DaxUpdateClusterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxUpdateClusterResponse: dax.DaxUpdateClusterResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxUpdateClusterResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCluster`](#aws-cdk-sdk.dax.DaxCluster)

---

### DaxUpdateParameterGroupRequest <a name="aws-cdk-sdk.dax.DaxUpdateParameterGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxUpdateParameterGroupRequest: dax.DaxUpdateParameterGroupRequest = { ... }
```

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxUpdateParameterGroupRequest.property.parameterGroupName"></a>

- *Type:* `string`

---

##### `parameterNameValues`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxUpdateParameterGroupRequest.property.parameterNameValues"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxParameterNameValue`](#aws-cdk-sdk.dax.DaxParameterNameValue)[]

---

### DaxUpdateParameterGroupResponse <a name="aws-cdk-sdk.dax.DaxUpdateParameterGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxUpdateParameterGroupResponse: dax.DaxUpdateParameterGroupResponse = { ... }
```

##### `parameterGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxUpdateParameterGroupResponse.property.parameterGroup"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxParameterGroup`](#aws-cdk-sdk.dax.DaxParameterGroup)

---

### DaxUpdateSubnetGroupRequest <a name="aws-cdk-sdk.dax.DaxUpdateSubnetGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxUpdateSubnetGroupRequest: dax.DaxUpdateSubnetGroupRequest = { ... }
```

##### `subnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DaxUpdateSubnetGroupRequest.property.subnetGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxUpdateSubnetGroupRequest.property.description"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxUpdateSubnetGroupRequest.property.subnetIds"></a>

- *Type:* `string`[]

---

### DaxUpdateSubnetGroupResponse <a name="aws-cdk-sdk.dax.DaxUpdateSubnetGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

const daxUpdateSubnetGroupResponse: dax.DaxUpdateSubnetGroupResponse = { ... }
```

##### `subnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.dax.DaxUpdateSubnetGroupResponse.property.subnetGroup"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxSubnetGroup`](#aws-cdk-sdk.dax.DaxSubnetGroup)

---

## Classes <a name="Classes"></a>

### DAXResponsesCreateCluster <a name="aws-cdk-sdk.dax.DAXResponsesCreateCluster"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesCreateCluster.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesCreateCluster(__scope: Construct, __resources: string[], __input: DaxCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCreateClusterRequest`](#aws-cdk-sdk.dax.DaxCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster`](#aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster)

---


### DAXResponsesCreateClusterCluster <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesCreateClusterCluster(__scope: Construct, __resources: string[], __input: DaxCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCreateClusterRequest`](#aws-cdk-sdk.dax.DaxCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `activeNodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.activeNodes"></a>

- *Type:* `number`

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterDiscoveryEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.clusterDiscoveryEndpoint"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterClusterDiscoveryEndpoint`](#aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterClusterDiscoveryEndpoint)

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.clusterName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.description"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `nodeIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.nodeIdsToRemove"></a>

- *Type:* `string`[]

---

##### `nodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.nodes"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxNode`](#aws-cdk-sdk.dax.DaxNode)[]

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterNotificationConfiguration`](#aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterNotificationConfiguration)

---

##### `parameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.parameterGroup"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterParameterGroup`](#aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterParameterGroup)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.securityGroups"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxSecurityGroupMembership`](#aws-cdk-sdk.dax.DaxSecurityGroupMembership)[]

---

##### `sseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterSseDescription`](#aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterSseDescription)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.status"></a>

- *Type:* `string`

---

##### `subnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.subnetGroup"></a>

- *Type:* `string`

---

##### `totalNodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterCluster.property.totalNodes"></a>

- *Type:* `number`

---


### DAXResponsesCreateClusterClusterClusterDiscoveryEndpoint <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterClusterDiscoveryEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterClusterDiscoveryEndpoint.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesCreateClusterClusterClusterDiscoveryEndpoint(__scope: Construct, __resources: string[], __input: DaxCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterClusterDiscoveryEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterClusterDiscoveryEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterClusterDiscoveryEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCreateClusterRequest`](#aws-cdk-sdk.dax.DaxCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterClusterDiscoveryEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterClusterDiscoveryEndpoint.property.port"></a>

- *Type:* `number`

---


### DAXResponsesCreateClusterClusterNotificationConfiguration <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterNotificationConfiguration.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesCreateClusterClusterNotificationConfiguration(__scope: Construct, __resources: string[], __input: DaxCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCreateClusterRequest`](#aws-cdk-sdk.dax.DaxCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterNotificationConfiguration.property.topicArn"></a>

- *Type:* `string`

---

##### `topicStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterNotificationConfiguration.property.topicStatus"></a>

- *Type:* `string`

---


### DAXResponsesCreateClusterClusterParameterGroup <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterParameterGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesCreateClusterClusterParameterGroup(__scope: Construct, __resources: string[], __input: DaxCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCreateClusterRequest`](#aws-cdk-sdk.dax.DaxCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `nodeIdsToReboot`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterParameterGroup.property.nodeIdsToReboot"></a>

- *Type:* `string`[]

---

##### `parameterApplyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterParameterGroup.property.parameterApplyStatus"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterParameterGroup.property.parameterGroupName"></a>

- *Type:* `string`

---


### DAXResponsesCreateClusterClusterSseDescription <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterSseDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterSseDescription.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesCreateClusterClusterSseDescription(__scope: Construct, __resources: string[], __input: DaxCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterSseDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterSseDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterSseDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCreateClusterRequest`](#aws-cdk-sdk.dax.DaxCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateClusterClusterSseDescription.property.status"></a>

- *Type:* `string`

---


### DAXResponsesCreateParameterGroup <a name="aws-cdk-sdk.dax.DAXResponsesCreateParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesCreateParameterGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesCreateParameterGroup(__scope: Construct, __resources: string[], __input: DaxCreateParameterGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCreateParameterGroupRequest`](#aws-cdk-sdk.dax.DaxCreateParameterGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `parameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateParameterGroup.property.parameterGroup"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesCreateParameterGroupParameterGroup`](#aws-cdk-sdk.dax.DAXResponsesCreateParameterGroupParameterGroup)

---


### DAXResponsesCreateParameterGroupParameterGroup <a name="aws-cdk-sdk.dax.DAXResponsesCreateParameterGroupParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesCreateParameterGroupParameterGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesCreateParameterGroupParameterGroup(__scope: Construct, __resources: string[], __input: DaxCreateParameterGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateParameterGroupParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateParameterGroupParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateParameterGroupParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCreateParameterGroupRequest`](#aws-cdk-sdk.dax.DaxCreateParameterGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateParameterGroupParameterGroup.property.description"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateParameterGroupParameterGroup.property.parameterGroupName"></a>

- *Type:* `string`

---


### DAXResponsesCreateSubnetGroup <a name="aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesCreateSubnetGroup(__scope: Construct, __resources: string[], __input: DaxCreateSubnetGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCreateSubnetGroupRequest`](#aws-cdk-sdk.dax.DaxCreateSubnetGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `subnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroup.property.subnetGroup"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroupSubnetGroup`](#aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroupSubnetGroup)

---


### DAXResponsesCreateSubnetGroupSubnetGroup <a name="aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroupSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroupSubnetGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesCreateSubnetGroupSubnetGroup(__scope: Construct, __resources: string[], __input: DaxCreateSubnetGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroupSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroupSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroupSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCreateSubnetGroupRequest`](#aws-cdk-sdk.dax.DaxCreateSubnetGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroupSubnetGroup.property.description"></a>

- *Type:* `string`

---

##### `subnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroupSubnetGroup.property.subnetGroupName"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroupSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxSubnet`](#aws-cdk-sdk.dax.DaxSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesCreateSubnetGroupSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### DAXResponsesDecreaseReplicationFactor <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactor"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactor.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDecreaseReplicationFactor(__scope: Construct, __resources: string[], __input: DaxDecreaseReplicationFactorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactor.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactor.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactor.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest`](#aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactor.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster`](#aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster)

---


### DAXResponsesDecreaseReplicationFactorCluster <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDecreaseReplicationFactorCluster(__scope: Construct, __resources: string[], __input: DaxDecreaseReplicationFactorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest`](#aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest)

---



#### Properties <a name="Properties"></a>

##### `activeNodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.activeNodes"></a>

- *Type:* `number`

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterDiscoveryEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.clusterDiscoveryEndpoint"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterClusterDiscoveryEndpoint`](#aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterClusterDiscoveryEndpoint)

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.clusterName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.description"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `nodeIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.nodeIdsToRemove"></a>

- *Type:* `string`[]

---

##### `nodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.nodes"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxNode`](#aws-cdk-sdk.dax.DaxNode)[]

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterNotificationConfiguration`](#aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterNotificationConfiguration)

---

##### `parameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.parameterGroup"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterParameterGroup`](#aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterParameterGroup)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.securityGroups"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxSecurityGroupMembership`](#aws-cdk-sdk.dax.DaxSecurityGroupMembership)[]

---

##### `sseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterSseDescription`](#aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterSseDescription)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.status"></a>

- *Type:* `string`

---

##### `subnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.subnetGroup"></a>

- *Type:* `string`

---

##### `totalNodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorCluster.property.totalNodes"></a>

- *Type:* `number`

---


### DAXResponsesDecreaseReplicationFactorClusterClusterDiscoveryEndpoint <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterClusterDiscoveryEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterClusterDiscoveryEndpoint.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDecreaseReplicationFactorClusterClusterDiscoveryEndpoint(__scope: Construct, __resources: string[], __input: DaxDecreaseReplicationFactorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterClusterDiscoveryEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterClusterDiscoveryEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterClusterDiscoveryEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest`](#aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterClusterDiscoveryEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterClusterDiscoveryEndpoint.property.port"></a>

- *Type:* `number`

---


### DAXResponsesDecreaseReplicationFactorClusterNotificationConfiguration <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterNotificationConfiguration.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDecreaseReplicationFactorClusterNotificationConfiguration(__scope: Construct, __resources: string[], __input: DaxDecreaseReplicationFactorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest`](#aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest)

---



#### Properties <a name="Properties"></a>

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterNotificationConfiguration.property.topicArn"></a>

- *Type:* `string`

---

##### `topicStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterNotificationConfiguration.property.topicStatus"></a>

- *Type:* `string`

---


### DAXResponsesDecreaseReplicationFactorClusterParameterGroup <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterParameterGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDecreaseReplicationFactorClusterParameterGroup(__scope: Construct, __resources: string[], __input: DaxDecreaseReplicationFactorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest`](#aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest)

---



#### Properties <a name="Properties"></a>

##### `nodeIdsToReboot`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterParameterGroup.property.nodeIdsToReboot"></a>

- *Type:* `string`[]

---

##### `parameterApplyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterParameterGroup.property.parameterApplyStatus"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterParameterGroup.property.parameterGroupName"></a>

- *Type:* `string`

---


### DAXResponsesDecreaseReplicationFactorClusterSseDescription <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterSseDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterSseDescription.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDecreaseReplicationFactorClusterSseDescription(__scope: Construct, __resources: string[], __input: DaxDecreaseReplicationFactorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterSseDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterSseDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterSseDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest`](#aws-cdk-sdk.dax.DaxDecreaseReplicationFactorRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDecreaseReplicationFactorClusterSseDescription.property.status"></a>

- *Type:* `string`

---


### DAXResponsesDeleteCluster <a name="aws-cdk-sdk.dax.DAXResponsesDeleteCluster"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDeleteCluster.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDeleteCluster(__scope: Construct, __resources: string[], __input: DaxDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDeleteClusterRequest`](#aws-cdk-sdk.dax.DaxDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster`](#aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster)

---


### DAXResponsesDeleteClusterCluster <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDeleteClusterCluster(__scope: Construct, __resources: string[], __input: DaxDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDeleteClusterRequest`](#aws-cdk-sdk.dax.DaxDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `activeNodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.activeNodes"></a>

- *Type:* `number`

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterDiscoveryEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.clusterDiscoveryEndpoint"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterClusterDiscoveryEndpoint`](#aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterClusterDiscoveryEndpoint)

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.clusterName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.description"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `nodeIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.nodeIdsToRemove"></a>

- *Type:* `string`[]

---

##### `nodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.nodes"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxNode`](#aws-cdk-sdk.dax.DaxNode)[]

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterNotificationConfiguration`](#aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterNotificationConfiguration)

---

##### `parameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.parameterGroup"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterParameterGroup`](#aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterParameterGroup)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.securityGroups"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxSecurityGroupMembership`](#aws-cdk-sdk.dax.DaxSecurityGroupMembership)[]

---

##### `sseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterSseDescription`](#aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterSseDescription)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.status"></a>

- *Type:* `string`

---

##### `subnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.subnetGroup"></a>

- *Type:* `string`

---

##### `totalNodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterCluster.property.totalNodes"></a>

- *Type:* `number`

---


### DAXResponsesDeleteClusterClusterClusterDiscoveryEndpoint <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterClusterDiscoveryEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterClusterDiscoveryEndpoint.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDeleteClusterClusterClusterDiscoveryEndpoint(__scope: Construct, __resources: string[], __input: DaxDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterClusterDiscoveryEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterClusterDiscoveryEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterClusterDiscoveryEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDeleteClusterRequest`](#aws-cdk-sdk.dax.DaxDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterClusterDiscoveryEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterClusterDiscoveryEndpoint.property.port"></a>

- *Type:* `number`

---


### DAXResponsesDeleteClusterClusterNotificationConfiguration <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterNotificationConfiguration.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDeleteClusterClusterNotificationConfiguration(__scope: Construct, __resources: string[], __input: DaxDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDeleteClusterRequest`](#aws-cdk-sdk.dax.DaxDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterNotificationConfiguration.property.topicArn"></a>

- *Type:* `string`

---

##### `topicStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterNotificationConfiguration.property.topicStatus"></a>

- *Type:* `string`

---


### DAXResponsesDeleteClusterClusterParameterGroup <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterParameterGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDeleteClusterClusterParameterGroup(__scope: Construct, __resources: string[], __input: DaxDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDeleteClusterRequest`](#aws-cdk-sdk.dax.DaxDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `nodeIdsToReboot`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterParameterGroup.property.nodeIdsToReboot"></a>

- *Type:* `string`[]

---

##### `parameterApplyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterParameterGroup.property.parameterApplyStatus"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterParameterGroup.property.parameterGroupName"></a>

- *Type:* `string`

---


### DAXResponsesDeleteClusterClusterSseDescription <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterSseDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterSseDescription.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDeleteClusterClusterSseDescription(__scope: Construct, __resources: string[], __input: DaxDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterSseDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterSseDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterSseDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDeleteClusterRequest`](#aws-cdk-sdk.dax.DaxDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteClusterClusterSseDescription.property.status"></a>

- *Type:* `string`

---


### DAXResponsesDeleteParameterGroup <a name="aws-cdk-sdk.dax.DAXResponsesDeleteParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDeleteParameterGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDeleteParameterGroup(__scope: Construct, __resources: string[], __input: DaxDeleteParameterGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDeleteParameterGroupRequest`](#aws-cdk-sdk.dax.DaxDeleteParameterGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `deletionMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteParameterGroup.property.deletionMessage"></a>

- *Type:* `string`

---


### DAXResponsesDeleteSubnetGroup <a name="aws-cdk-sdk.dax.DAXResponsesDeleteSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDeleteSubnetGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDeleteSubnetGroup(__scope: Construct, __resources: string[], __input: DaxDeleteSubnetGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDeleteSubnetGroupRequest`](#aws-cdk-sdk.dax.DaxDeleteSubnetGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `deletionMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDeleteSubnetGroup.property.deletionMessage"></a>

- *Type:* `string`

---


### DAXResponsesDescribeClusters <a name="aws-cdk-sdk.dax.DAXResponsesDescribeClusters"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDescribeClusters.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDescribeClusters(__scope: Construct, __resources: string[], __input: DaxDescribeClustersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeClusters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeClusters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeClusters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDescribeClustersRequest`](#aws-cdk-sdk.dax.DaxDescribeClustersRequest)

---



#### Properties <a name="Properties"></a>

##### `clusters`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeClusters.property.clusters"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxCluster`](#aws-cdk-sdk.dax.DaxCluster)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeClusters.property.nextToken"></a>

- *Type:* `string`

---


### DAXResponsesDescribeDefaultParameters <a name="aws-cdk-sdk.dax.DAXResponsesDescribeDefaultParameters"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDescribeDefaultParameters.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDescribeDefaultParameters(__scope: Construct, __resources: string[], __input: DaxDescribeDefaultParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeDefaultParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeDefaultParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeDefaultParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDescribeDefaultParametersRequest`](#aws-cdk-sdk.dax.DaxDescribeDefaultParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeDefaultParameters.property.nextToken"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeDefaultParameters.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxParameter`](#aws-cdk-sdk.dax.DaxParameter)[]

---


### DAXResponsesDescribeEvents <a name="aws-cdk-sdk.dax.DAXResponsesDescribeEvents"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDescribeEvents.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDescribeEvents(__scope: Construct, __resources: string[], __input: DaxDescribeEventsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDescribeEventsRequest`](#aws-cdk-sdk.dax.DaxDescribeEventsRequest)

---



#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeEvents.property.events"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxEvent`](#aws-cdk-sdk.dax.DaxEvent)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeEvents.property.nextToken"></a>

- *Type:* `string`

---


### DAXResponsesDescribeParameterGroups <a name="aws-cdk-sdk.dax.DAXResponsesDescribeParameterGroups"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDescribeParameterGroups.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDescribeParameterGroups(__scope: Construct, __resources: string[], __input: DaxDescribeParameterGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeParameterGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeParameterGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeParameterGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDescribeParameterGroupsRequest`](#aws-cdk-sdk.dax.DaxDescribeParameterGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeParameterGroups.property.nextToken"></a>

- *Type:* `string`

---

##### `parameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeParameterGroups.property.parameterGroups"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxParameterGroup`](#aws-cdk-sdk.dax.DaxParameterGroup)[]

---


### DAXResponsesDescribeParameters <a name="aws-cdk-sdk.dax.DAXResponsesDescribeParameters"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDescribeParameters.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDescribeParameters(__scope: Construct, __resources: string[], __input: DaxDescribeParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDescribeParametersRequest`](#aws-cdk-sdk.dax.DaxDescribeParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeParameters.property.nextToken"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeParameters.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxParameter`](#aws-cdk-sdk.dax.DaxParameter)[]

---


### DAXResponsesDescribeSubnetGroups <a name="aws-cdk-sdk.dax.DAXResponsesDescribeSubnetGroups"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesDescribeSubnetGroups.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesDescribeSubnetGroups(__scope: Construct, __resources: string[], __input: DaxDescribeSubnetGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeSubnetGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeSubnetGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeSubnetGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxDescribeSubnetGroupsRequest`](#aws-cdk-sdk.dax.DaxDescribeSubnetGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeSubnetGroups.property.nextToken"></a>

- *Type:* `string`

---

##### `subnetGroups`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesDescribeSubnetGroups.property.subnetGroups"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxSubnetGroup`](#aws-cdk-sdk.dax.DaxSubnetGroup)[]

---


### DAXResponsesIncreaseReplicationFactor <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactor"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactor.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesIncreaseReplicationFactor(__scope: Construct, __resources: string[], __input: DaxIncreaseReplicationFactorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactor.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactor.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactor.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest`](#aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactor.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster`](#aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster)

---


### DAXResponsesIncreaseReplicationFactorCluster <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesIncreaseReplicationFactorCluster(__scope: Construct, __resources: string[], __input: DaxIncreaseReplicationFactorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest`](#aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest)

---



#### Properties <a name="Properties"></a>

##### `activeNodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.activeNodes"></a>

- *Type:* `number`

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterDiscoveryEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.clusterDiscoveryEndpoint"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterClusterDiscoveryEndpoint`](#aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterClusterDiscoveryEndpoint)

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.clusterName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.description"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `nodeIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.nodeIdsToRemove"></a>

- *Type:* `string`[]

---

##### `nodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.nodes"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxNode`](#aws-cdk-sdk.dax.DaxNode)[]

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterNotificationConfiguration`](#aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterNotificationConfiguration)

---

##### `parameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.parameterGroup"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterParameterGroup`](#aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterParameterGroup)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.securityGroups"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxSecurityGroupMembership`](#aws-cdk-sdk.dax.DaxSecurityGroupMembership)[]

---

##### `sseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterSseDescription`](#aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterSseDescription)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.status"></a>

- *Type:* `string`

---

##### `subnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.subnetGroup"></a>

- *Type:* `string`

---

##### `totalNodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorCluster.property.totalNodes"></a>

- *Type:* `number`

---


### DAXResponsesIncreaseReplicationFactorClusterClusterDiscoveryEndpoint <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterClusterDiscoveryEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterClusterDiscoveryEndpoint.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesIncreaseReplicationFactorClusterClusterDiscoveryEndpoint(__scope: Construct, __resources: string[], __input: DaxIncreaseReplicationFactorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterClusterDiscoveryEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterClusterDiscoveryEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterClusterDiscoveryEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest`](#aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterClusterDiscoveryEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterClusterDiscoveryEndpoint.property.port"></a>

- *Type:* `number`

---


### DAXResponsesIncreaseReplicationFactorClusterNotificationConfiguration <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterNotificationConfiguration.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesIncreaseReplicationFactorClusterNotificationConfiguration(__scope: Construct, __resources: string[], __input: DaxIncreaseReplicationFactorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest`](#aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest)

---



#### Properties <a name="Properties"></a>

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterNotificationConfiguration.property.topicArn"></a>

- *Type:* `string`

---

##### `topicStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterNotificationConfiguration.property.topicStatus"></a>

- *Type:* `string`

---


### DAXResponsesIncreaseReplicationFactorClusterParameterGroup <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterParameterGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesIncreaseReplicationFactorClusterParameterGroup(__scope: Construct, __resources: string[], __input: DaxIncreaseReplicationFactorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest`](#aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest)

---



#### Properties <a name="Properties"></a>

##### `nodeIdsToReboot`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterParameterGroup.property.nodeIdsToReboot"></a>

- *Type:* `string`[]

---

##### `parameterApplyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterParameterGroup.property.parameterApplyStatus"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterParameterGroup.property.parameterGroupName"></a>

- *Type:* `string`

---


### DAXResponsesIncreaseReplicationFactorClusterSseDescription <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterSseDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterSseDescription.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesIncreaseReplicationFactorClusterSseDescription(__scope: Construct, __resources: string[], __input: DaxIncreaseReplicationFactorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterSseDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterSseDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterSseDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest`](#aws-cdk-sdk.dax.DaxIncreaseReplicationFactorRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesIncreaseReplicationFactorClusterSseDescription.property.status"></a>

- *Type:* `string`

---


### DAXResponsesListTags <a name="aws-cdk-sdk.dax.DAXResponsesListTags"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesListTags.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesListTags(__scope: Construct, __resources: string[], __input: DaxListTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesListTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesListTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesListTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxListTagsRequest`](#aws-cdk-sdk.dax.DaxListTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesListTags.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesListTags.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxTag`](#aws-cdk-sdk.dax.DaxTag)[]

---


### DAXResponsesRebootNode <a name="aws-cdk-sdk.dax.DAXResponsesRebootNode"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesRebootNode.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesRebootNode(__scope: Construct, __resources: string[], __input: DaxRebootNodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxRebootNodeRequest`](#aws-cdk-sdk.dax.DaxRebootNodeRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNode.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster`](#aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster)

---


### DAXResponsesRebootNodeCluster <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesRebootNodeCluster(__scope: Construct, __resources: string[], __input: DaxRebootNodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxRebootNodeRequest`](#aws-cdk-sdk.dax.DaxRebootNodeRequest)

---



#### Properties <a name="Properties"></a>

##### `activeNodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.activeNodes"></a>

- *Type:* `number`

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterDiscoveryEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.clusterDiscoveryEndpoint"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterClusterDiscoveryEndpoint`](#aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterClusterDiscoveryEndpoint)

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.clusterName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.description"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `nodeIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.nodeIdsToRemove"></a>

- *Type:* `string`[]

---

##### `nodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.nodes"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxNode`](#aws-cdk-sdk.dax.DaxNode)[]

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterNotificationConfiguration`](#aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterNotificationConfiguration)

---

##### `parameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.parameterGroup"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterParameterGroup`](#aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterParameterGroup)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.securityGroups"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxSecurityGroupMembership`](#aws-cdk-sdk.dax.DaxSecurityGroupMembership)[]

---

##### `sseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterSseDescription`](#aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterSseDescription)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.status"></a>

- *Type:* `string`

---

##### `subnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.subnetGroup"></a>

- *Type:* `string`

---

##### `totalNodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeCluster.property.totalNodes"></a>

- *Type:* `number`

---


### DAXResponsesRebootNodeClusterClusterDiscoveryEndpoint <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterClusterDiscoveryEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterClusterDiscoveryEndpoint.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesRebootNodeClusterClusterDiscoveryEndpoint(__scope: Construct, __resources: string[], __input: DaxRebootNodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterClusterDiscoveryEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterClusterDiscoveryEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterClusterDiscoveryEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxRebootNodeRequest`](#aws-cdk-sdk.dax.DaxRebootNodeRequest)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterClusterDiscoveryEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterClusterDiscoveryEndpoint.property.port"></a>

- *Type:* `number`

---


### DAXResponsesRebootNodeClusterNotificationConfiguration <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterNotificationConfiguration.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesRebootNodeClusterNotificationConfiguration(__scope: Construct, __resources: string[], __input: DaxRebootNodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxRebootNodeRequest`](#aws-cdk-sdk.dax.DaxRebootNodeRequest)

---



#### Properties <a name="Properties"></a>

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterNotificationConfiguration.property.topicArn"></a>

- *Type:* `string`

---

##### `topicStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterNotificationConfiguration.property.topicStatus"></a>

- *Type:* `string`

---


### DAXResponsesRebootNodeClusterParameterGroup <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterParameterGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesRebootNodeClusterParameterGroup(__scope: Construct, __resources: string[], __input: DaxRebootNodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxRebootNodeRequest`](#aws-cdk-sdk.dax.DaxRebootNodeRequest)

---



#### Properties <a name="Properties"></a>

##### `nodeIdsToReboot`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterParameterGroup.property.nodeIdsToReboot"></a>

- *Type:* `string`[]

---

##### `parameterApplyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterParameterGroup.property.parameterApplyStatus"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterParameterGroup.property.parameterGroupName"></a>

- *Type:* `string`

---


### DAXResponsesRebootNodeClusterSseDescription <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterSseDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterSseDescription.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesRebootNodeClusterSseDescription(__scope: Construct, __resources: string[], __input: DaxRebootNodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterSseDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterSseDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterSseDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxRebootNodeRequest`](#aws-cdk-sdk.dax.DaxRebootNodeRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesRebootNodeClusterSseDescription.property.status"></a>

- *Type:* `string`

---


### DAXResponsesTagResource <a name="aws-cdk-sdk.dax.DAXResponsesTagResource"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesTagResource.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesTagResource(__scope: Construct, __resources: string[], __input: DaxTagResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesTagResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesTagResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesTagResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxTagResourceRequest`](#aws-cdk-sdk.dax.DaxTagResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesTagResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxTag`](#aws-cdk-sdk.dax.DaxTag)[]

---


### DAXResponsesUntagResource <a name="aws-cdk-sdk.dax.DAXResponsesUntagResource"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesUntagResource.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesUntagResource(__scope: Construct, __resources: string[], __input: DaxUntagResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUntagResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUntagResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUntagResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxUntagResourceRequest`](#aws-cdk-sdk.dax.DaxUntagResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUntagResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxTag`](#aws-cdk-sdk.dax.DaxTag)[]

---


### DAXResponsesUpdateCluster <a name="aws-cdk-sdk.dax.DAXResponsesUpdateCluster"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesUpdateCluster.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesUpdateCluster(__scope: Construct, __resources: string[], __input: DaxUpdateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxUpdateClusterRequest`](#aws-cdk-sdk.dax.DaxUpdateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster`](#aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster)

---


### DAXResponsesUpdateClusterCluster <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesUpdateClusterCluster(__scope: Construct, __resources: string[], __input: DaxUpdateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxUpdateClusterRequest`](#aws-cdk-sdk.dax.DaxUpdateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `activeNodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.activeNodes"></a>

- *Type:* `number`

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterDiscoveryEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.clusterDiscoveryEndpoint"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterClusterDiscoveryEndpoint`](#aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterClusterDiscoveryEndpoint)

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.clusterName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.description"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.iamRoleArn"></a>

- *Type:* `string`

---

##### `nodeIdsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.nodeIdsToRemove"></a>

- *Type:* `string`[]

---

##### `nodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.nodes"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxNode`](#aws-cdk-sdk.dax.DaxNode)[]

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `notificationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.notificationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterNotificationConfiguration`](#aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterNotificationConfiguration)

---

##### `parameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.parameterGroup"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterParameterGroup`](#aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterParameterGroup)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.securityGroups"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxSecurityGroupMembership`](#aws-cdk-sdk.dax.DaxSecurityGroupMembership)[]

---

##### `sseDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.sseDescription"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterSseDescription`](#aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterSseDescription)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.status"></a>

- *Type:* `string`

---

##### `subnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.subnetGroup"></a>

- *Type:* `string`

---

##### `totalNodes`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterCluster.property.totalNodes"></a>

- *Type:* `number`

---


### DAXResponsesUpdateClusterClusterClusterDiscoveryEndpoint <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterClusterDiscoveryEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterClusterDiscoveryEndpoint.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesUpdateClusterClusterClusterDiscoveryEndpoint(__scope: Construct, __resources: string[], __input: DaxUpdateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterClusterDiscoveryEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterClusterDiscoveryEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterClusterDiscoveryEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxUpdateClusterRequest`](#aws-cdk-sdk.dax.DaxUpdateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterClusterDiscoveryEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterClusterDiscoveryEndpoint.property.port"></a>

- *Type:* `number`

---


### DAXResponsesUpdateClusterClusterNotificationConfiguration <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterNotificationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterNotificationConfiguration.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesUpdateClusterClusterNotificationConfiguration(__scope: Construct, __resources: string[], __input: DaxUpdateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterNotificationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterNotificationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterNotificationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxUpdateClusterRequest`](#aws-cdk-sdk.dax.DaxUpdateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterNotificationConfiguration.property.topicArn"></a>

- *Type:* `string`

---

##### `topicStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterNotificationConfiguration.property.topicStatus"></a>

- *Type:* `string`

---


### DAXResponsesUpdateClusterClusterParameterGroup <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterParameterGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesUpdateClusterClusterParameterGroup(__scope: Construct, __resources: string[], __input: DaxUpdateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxUpdateClusterRequest`](#aws-cdk-sdk.dax.DaxUpdateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `nodeIdsToReboot`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterParameterGroup.property.nodeIdsToReboot"></a>

- *Type:* `string`[]

---

##### `parameterApplyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterParameterGroup.property.parameterApplyStatus"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterParameterGroup.property.parameterGroupName"></a>

- *Type:* `string`

---


### DAXResponsesUpdateClusterClusterSseDescription <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterSseDescription"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterSseDescription.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesUpdateClusterClusterSseDescription(__scope: Construct, __resources: string[], __input: DaxUpdateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterSseDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterSseDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterSseDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxUpdateClusterRequest`](#aws-cdk-sdk.dax.DaxUpdateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateClusterClusterSseDescription.property.status"></a>

- *Type:* `string`

---


### DAXResponsesUpdateParameterGroup <a name="aws-cdk-sdk.dax.DAXResponsesUpdateParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesUpdateParameterGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesUpdateParameterGroup(__scope: Construct, __resources: string[], __input: DaxUpdateParameterGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxUpdateParameterGroupRequest`](#aws-cdk-sdk.dax.DaxUpdateParameterGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `parameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateParameterGroup.property.parameterGroup"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesUpdateParameterGroupParameterGroup`](#aws-cdk-sdk.dax.DAXResponsesUpdateParameterGroupParameterGroup)

---


### DAXResponsesUpdateParameterGroupParameterGroup <a name="aws-cdk-sdk.dax.DAXResponsesUpdateParameterGroupParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesUpdateParameterGroupParameterGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesUpdateParameterGroupParameterGroup(__scope: Construct, __resources: string[], __input: DaxUpdateParameterGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateParameterGroupParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateParameterGroupParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateParameterGroupParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxUpdateParameterGroupRequest`](#aws-cdk-sdk.dax.DaxUpdateParameterGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateParameterGroupParameterGroup.property.description"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateParameterGroupParameterGroup.property.parameterGroupName"></a>

- *Type:* `string`

---


### DAXResponsesUpdateSubnetGroup <a name="aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesUpdateSubnetGroup(__scope: Construct, __resources: string[], __input: DaxUpdateSubnetGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxUpdateSubnetGroupRequest`](#aws-cdk-sdk.dax.DaxUpdateSubnetGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `subnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroup.property.subnetGroup"></a>

- *Type:* [`aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroupSubnetGroup`](#aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroupSubnetGroup)

---


### DAXResponsesUpdateSubnetGroupSubnetGroup <a name="aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroupSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroupSubnetGroup.Initializer"></a>

```typescript
import { dax } from 'aws-cdk-sdk'

new dax.DAXResponsesUpdateSubnetGroupSubnetGroup(__scope: Construct, __resources: string[], __input: DaxUpdateSubnetGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroupSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroupSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroupSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxUpdateSubnetGroupRequest`](#aws-cdk-sdk.dax.DaxUpdateSubnetGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroupSubnetGroup.property.description"></a>

- *Type:* `string`

---

##### `subnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroupSubnetGroup.property.subnetGroupName"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroupSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.dax.DaxSubnet`](#aws-cdk-sdk.dax.DaxSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.dax.DAXResponsesUpdateSubnetGroupSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---



