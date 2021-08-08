# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### EksClient <a name="aws-cdk-sdk.eks.EksClient"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EksClient.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EksClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createCluster` <a name="aws-cdk-sdk.eks.EksClient.createCluster"></a>

```typescript
public createCluster(input: EksCreateClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateClusterRequest`](#aws-cdk-sdk.eks.EksCreateClusterRequest)

---

##### `createFargateProfile` <a name="aws-cdk-sdk.eks.EksClient.createFargateProfile"></a>

```typescript
public createFargateProfile(input: EksCreateFargateProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateFargateProfileRequest`](#aws-cdk-sdk.eks.EksCreateFargateProfileRequest)

---

##### `createNodegroup` <a name="aws-cdk-sdk.eks.EksClient.createNodegroup"></a>

```typescript
public createNodegroup(input: EksCreateNodegroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateNodegroupRequest`](#aws-cdk-sdk.eks.EksCreateNodegroupRequest)

---

##### `deleteCluster` <a name="aws-cdk-sdk.eks.EksClient.deleteCluster"></a>

```typescript
public deleteCluster(input: EksDeleteClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteClusterRequest`](#aws-cdk-sdk.eks.EksDeleteClusterRequest)

---

##### `deleteFargateProfile` <a name="aws-cdk-sdk.eks.EksClient.deleteFargateProfile"></a>

```typescript
public deleteFargateProfile(input: EksDeleteFargateProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteFargateProfileRequest`](#aws-cdk-sdk.eks.EksDeleteFargateProfileRequest)

---

##### `deleteNodegroup` <a name="aws-cdk-sdk.eks.EksClient.deleteNodegroup"></a>

```typescript
public deleteNodegroup(input: EksDeleteNodegroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteNodegroupRequest`](#aws-cdk-sdk.eks.EksDeleteNodegroupRequest)

---

##### `describeCluster` <a name="aws-cdk-sdk.eks.EksClient.describeCluster"></a>

```typescript
public describeCluster(input: EksDescribeClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeClusterRequest`](#aws-cdk-sdk.eks.EksDescribeClusterRequest)

---

##### `describeFargateProfile` <a name="aws-cdk-sdk.eks.EksClient.describeFargateProfile"></a>

```typescript
public describeFargateProfile(input: EksDescribeFargateProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeFargateProfileRequest`](#aws-cdk-sdk.eks.EksDescribeFargateProfileRequest)

---

##### `describeNodegroup` <a name="aws-cdk-sdk.eks.EksClient.describeNodegroup"></a>

```typescript
public describeNodegroup(input: EksDescribeNodegroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeNodegroupRequest`](#aws-cdk-sdk.eks.EksDescribeNodegroupRequest)

---

##### `describeUpdate` <a name="aws-cdk-sdk.eks.EksClient.describeUpdate"></a>

```typescript
public describeUpdate(input: EksDescribeUpdateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeUpdateRequest`](#aws-cdk-sdk.eks.EksDescribeUpdateRequest)

---

##### `listClusters` <a name="aws-cdk-sdk.eks.EksClient.listClusters"></a>

```typescript
public listClusters(input: EksListClustersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksListClustersRequest`](#aws-cdk-sdk.eks.EksListClustersRequest)

---

##### `listFargateProfiles` <a name="aws-cdk-sdk.eks.EksClient.listFargateProfiles"></a>

```typescript
public listFargateProfiles(input: EksListFargateProfilesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksListFargateProfilesRequest`](#aws-cdk-sdk.eks.EksListFargateProfilesRequest)

---

##### `listNodegroups` <a name="aws-cdk-sdk.eks.EksClient.listNodegroups"></a>

```typescript
public listNodegroups(input: EksListNodegroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksListNodegroupsRequest`](#aws-cdk-sdk.eks.EksListNodegroupsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.eks.EksClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: EksListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksListTagsForResourceRequest`](#aws-cdk-sdk.eks.EksListTagsForResourceRequest)

---

##### `listUpdates` <a name="aws-cdk-sdk.eks.EksClient.listUpdates"></a>

```typescript
public listUpdates(input: EksListUpdatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksListUpdatesRequest`](#aws-cdk-sdk.eks.EksListUpdatesRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.eks.EksClient.tagResource"></a>

```typescript
public tagResource(input: EksTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksTagResourceRequest`](#aws-cdk-sdk.eks.EksTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.eks.EksClient.untagResource"></a>

```typescript
public untagResource(input: EksUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUntagResourceRequest`](#aws-cdk-sdk.eks.EksUntagResourceRequest)

---

##### `updateClusterConfig` <a name="aws-cdk-sdk.eks.EksClient.updateClusterConfig"></a>

```typescript
public updateClusterConfig(input: EksUpdateClusterConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateClusterConfigRequest`](#aws-cdk-sdk.eks.EksUpdateClusterConfigRequest)

---

##### `updateClusterVersion` <a name="aws-cdk-sdk.eks.EksClient.updateClusterVersion"></a>

```typescript
public updateClusterVersion(input: EksUpdateClusterVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateClusterVersionRequest`](#aws-cdk-sdk.eks.EksUpdateClusterVersionRequest)

---

##### `updateNodegroupConfig` <a name="aws-cdk-sdk.eks.EksClient.updateNodegroupConfig"></a>

```typescript
public updateNodegroupConfig(input: EksUpdateNodegroupConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateNodegroupConfigRequest`](#aws-cdk-sdk.eks.EksUpdateNodegroupConfigRequest)

---

##### `updateNodegroupVersion` <a name="aws-cdk-sdk.eks.EksClient.updateNodegroupVersion"></a>

```typescript
public updateNodegroupVersion(input: EksUpdateNodegroupVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateNodegroupVersionRequest`](#aws-cdk-sdk.eks.EksUpdateNodegroupVersionRequest)

---




## Structs <a name="Structs"></a>

### EksAutoScalingGroup <a name="aws-cdk-sdk.eks.EksAutoScalingGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksAutoScalingGroup: eks.EksAutoScalingGroup = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksAutoScalingGroup.property.name"></a>

- *Type:* `string`

---

### EksCertificate <a name="aws-cdk-sdk.eks.EksCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksCertificate: eks.EksCertificate = { ... }
```

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCertificate.property.data"></a>

- *Type:* `string`

---

### EksCluster <a name="aws-cdk-sdk.eks.EksCluster"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksCluster: eks.EksCluster = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.arn"></a>

- *Type:* `string`

---

##### `certificateAuthority`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.certificateAuthority"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCertificate`](#aws-cdk-sdk.eks.EksCertificate)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.createdAt"></a>

- *Type:* `string`

---

##### `encryptionConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.encryptionConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EksEncryptionConfig`](#aws-cdk-sdk.eks.EksEncryptionConfig)[]

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `identity`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.identity"></a>

- *Type:* [`aws-cdk-sdk.eks.EksIdentity`](#aws-cdk-sdk.eks.EksIdentity)

---

##### `kubernetesNetworkConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.kubernetesNetworkConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EksKubernetesNetworkConfigResponse`](#aws-cdk-sdk.eks.EksKubernetesNetworkConfigResponse)

---

##### `logging`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.logging"></a>

- *Type:* [`aws-cdk-sdk.eks.EksLogging`](#aws-cdk-sdk.eks.EksLogging)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.name"></a>

- *Type:* `string`

---

##### `platformVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.platformVersion"></a>

- *Type:* `string`

---

##### `resourcesVpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.resourcesVpcConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EksVpcConfigResponse`](#aws-cdk-sdk.eks.EksVpcConfigResponse)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCluster.property.version"></a>

- *Type:* `string`

---

### EksCreateClusterRequest <a name="aws-cdk-sdk.eks.EksCreateClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksCreateClusterRequest: eks.EksCreateClusterRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksCreateClusterRequest.property.name"></a>

- *Type:* `string`

---

##### `resourcesVpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksCreateClusterRequest.property.resourcesVpcConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EksVpcConfigRequest`](#aws-cdk-sdk.eks.EksVpcConfigRequest)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksCreateClusterRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateClusterRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `encryptionConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateClusterRequest.property.encryptionConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EksEncryptionConfig`](#aws-cdk-sdk.eks.EksEncryptionConfig)[]

---

##### `kubernetesNetworkConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateClusterRequest.property.kubernetesNetworkConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EksKubernetesNetworkConfigRequest`](#aws-cdk-sdk.eks.EksKubernetesNetworkConfigRequest)

---

##### `logging`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateClusterRequest.property.logging"></a>

- *Type:* [`aws-cdk-sdk.eks.EksLogging`](#aws-cdk-sdk.eks.EksLogging)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateClusterRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateClusterRequest.property.version"></a>

- *Type:* `string`

---

### EksCreateClusterResponse <a name="aws-cdk-sdk.eks.EksCreateClusterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksCreateClusterResponse: eks.EksCreateClusterResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateClusterResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCluster`](#aws-cdk-sdk.eks.EksCluster)

---

### EksCreateFargateProfileRequest <a name="aws-cdk-sdk.eks.EksCreateFargateProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksCreateFargateProfileRequest: eks.EksCreateFargateProfileRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksCreateFargateProfileRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `fargateProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksCreateFargateProfileRequest.property.fargateProfileName"></a>

- *Type:* `string`

---

##### `podExecutionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksCreateFargateProfileRequest.property.podExecutionRoleArn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateFargateProfileRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `selectors`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateFargateProfileRequest.property.selectors"></a>

- *Type:* [`aws-cdk-sdk.eks.EksFargateProfileSelector`](#aws-cdk-sdk.eks.EksFargateProfileSelector)[]

---

##### `subnets`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateFargateProfileRequest.property.subnets"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateFargateProfileRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### EksCreateFargateProfileResponse <a name="aws-cdk-sdk.eks.EksCreateFargateProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksCreateFargateProfileResponse: eks.EksCreateFargateProfileResponse = { ... }
```

##### `fargateProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateFargateProfileResponse.property.fargateProfile"></a>

- *Type:* [`aws-cdk-sdk.eks.EksFargateProfile`](#aws-cdk-sdk.eks.EksFargateProfile)

---

### EksCreateNodegroupRequest <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksCreateNodegroupRequest: eks.EksCreateNodegroupRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `nodegroupName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest.property.nodegroupName"></a>

- *Type:* `string`

---

##### `nodeRole`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest.property.nodeRole"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest.property.subnets"></a>

- *Type:* `string`[]

---

##### `amiType`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest.property.amiType"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `diskSize`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest.property.diskSize"></a>

- *Type:* `number`

---

##### `instanceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest.property.instanceTypes"></a>

- *Type:* `string`[]

---

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest.property.labels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `launchTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest.property.launchTemplate"></a>

- *Type:* [`aws-cdk-sdk.eks.EksLaunchTemplateSpecification`](#aws-cdk-sdk.eks.EksLaunchTemplateSpecification)

---

##### `releaseVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest.property.releaseVersion"></a>

- *Type:* `string`

---

##### `remoteAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest.property.remoteAccess"></a>

- *Type:* [`aws-cdk-sdk.eks.EksRemoteAccessConfig`](#aws-cdk-sdk.eks.EksRemoteAccessConfig)

---

##### `scalingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest.property.scalingConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EksNodegroupScalingConfig`](#aws-cdk-sdk.eks.EksNodegroupScalingConfig)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupRequest.property.version"></a>

- *Type:* `string`

---

### EksCreateNodegroupResponse <a name="aws-cdk-sdk.eks.EksCreateNodegroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksCreateNodegroupResponse: eks.EksCreateNodegroupResponse = { ... }
```

##### `nodegroup`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksCreateNodegroupResponse.property.nodegroup"></a>

- *Type:* [`aws-cdk-sdk.eks.EksNodegroup`](#aws-cdk-sdk.eks.EksNodegroup)

---

### EksDeleteClusterRequest <a name="aws-cdk-sdk.eks.EksDeleteClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksDeleteClusterRequest: eks.EksDeleteClusterRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksDeleteClusterRequest.property.name"></a>

- *Type:* `string`

---

### EksDeleteClusterResponse <a name="aws-cdk-sdk.eks.EksDeleteClusterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksDeleteClusterResponse: eks.EksDeleteClusterResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksDeleteClusterResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCluster`](#aws-cdk-sdk.eks.EksCluster)

---

### EksDeleteFargateProfileRequest <a name="aws-cdk-sdk.eks.EksDeleteFargateProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksDeleteFargateProfileRequest: eks.EksDeleteFargateProfileRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksDeleteFargateProfileRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `fargateProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksDeleteFargateProfileRequest.property.fargateProfileName"></a>

- *Type:* `string`

---

### EksDeleteFargateProfileResponse <a name="aws-cdk-sdk.eks.EksDeleteFargateProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksDeleteFargateProfileResponse: eks.EksDeleteFargateProfileResponse = { ... }
```

##### `fargateProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksDeleteFargateProfileResponse.property.fargateProfile"></a>

- *Type:* [`aws-cdk-sdk.eks.EksFargateProfile`](#aws-cdk-sdk.eks.EksFargateProfile)

---

### EksDeleteNodegroupRequest <a name="aws-cdk-sdk.eks.EksDeleteNodegroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksDeleteNodegroupRequest: eks.EksDeleteNodegroupRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksDeleteNodegroupRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `nodegroupName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksDeleteNodegroupRequest.property.nodegroupName"></a>

- *Type:* `string`

---

### EksDeleteNodegroupResponse <a name="aws-cdk-sdk.eks.EksDeleteNodegroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksDeleteNodegroupResponse: eks.EksDeleteNodegroupResponse = { ... }
```

##### `nodegroup`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksDeleteNodegroupResponse.property.nodegroup"></a>

- *Type:* [`aws-cdk-sdk.eks.EksNodegroup`](#aws-cdk-sdk.eks.EksNodegroup)

---

### EksDescribeClusterRequest <a name="aws-cdk-sdk.eks.EksDescribeClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksDescribeClusterRequest: eks.EksDescribeClusterRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksDescribeClusterRequest.property.name"></a>

- *Type:* `string`

---

### EksDescribeClusterResponse <a name="aws-cdk-sdk.eks.EksDescribeClusterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksDescribeClusterResponse: eks.EksDescribeClusterResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksDescribeClusterResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCluster`](#aws-cdk-sdk.eks.EksCluster)

---

### EksDescribeFargateProfileRequest <a name="aws-cdk-sdk.eks.EksDescribeFargateProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksDescribeFargateProfileRequest: eks.EksDescribeFargateProfileRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksDescribeFargateProfileRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `fargateProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksDescribeFargateProfileRequest.property.fargateProfileName"></a>

- *Type:* `string`

---

### EksDescribeFargateProfileResponse <a name="aws-cdk-sdk.eks.EksDescribeFargateProfileResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksDescribeFargateProfileResponse: eks.EksDescribeFargateProfileResponse = { ... }
```

##### `fargateProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksDescribeFargateProfileResponse.property.fargateProfile"></a>

- *Type:* [`aws-cdk-sdk.eks.EksFargateProfile`](#aws-cdk-sdk.eks.EksFargateProfile)

---

### EksDescribeNodegroupRequest <a name="aws-cdk-sdk.eks.EksDescribeNodegroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksDescribeNodegroupRequest: eks.EksDescribeNodegroupRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksDescribeNodegroupRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `nodegroupName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksDescribeNodegroupRequest.property.nodegroupName"></a>

- *Type:* `string`

---

### EksDescribeNodegroupResponse <a name="aws-cdk-sdk.eks.EksDescribeNodegroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksDescribeNodegroupResponse: eks.EksDescribeNodegroupResponse = { ... }
```

##### `nodegroup`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksDescribeNodegroupResponse.property.nodegroup"></a>

- *Type:* [`aws-cdk-sdk.eks.EksNodegroup`](#aws-cdk-sdk.eks.EksNodegroup)

---

### EksDescribeUpdateRequest <a name="aws-cdk-sdk.eks.EksDescribeUpdateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksDescribeUpdateRequest: eks.EksDescribeUpdateRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksDescribeUpdateRequest.property.name"></a>

- *Type:* `string`

---

##### `updateId`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksDescribeUpdateRequest.property.updateId"></a>

- *Type:* `string`

---

##### `nodegroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksDescribeUpdateRequest.property.nodegroupName"></a>

- *Type:* `string`

---

### EksDescribeUpdateResponse <a name="aws-cdk-sdk.eks.EksDescribeUpdateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksDescribeUpdateResponse: eks.EksDescribeUpdateResponse = { ... }
```

##### `update`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksDescribeUpdateResponse.property.update"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdate`](#aws-cdk-sdk.eks.EksUpdate)

---

### EksEncryptionConfig <a name="aws-cdk-sdk.eks.EksEncryptionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksEncryptionConfig: eks.EksEncryptionConfig = { ... }
```

##### `provider`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksEncryptionConfig.property.provider"></a>

- *Type:* [`aws-cdk-sdk.eks.EksProvider`](#aws-cdk-sdk.eks.EksProvider)

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksEncryptionConfig.property.resources"></a>

- *Type:* `string`[]

---

### EksErrorDetail <a name="aws-cdk-sdk.eks.EksErrorDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksErrorDetail: eks.EksErrorDetail = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksErrorDetail.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksErrorDetail.property.errorMessage"></a>

- *Type:* `string`

---

##### `resourceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksErrorDetail.property.resourceIds"></a>

- *Type:* `string`[]

---

### EksFargateProfile <a name="aws-cdk-sdk.eks.EksFargateProfile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksFargateProfile: eks.EksFargateProfile = { ... }
```

##### `clusterName`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksFargateProfile.property.clusterName"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksFargateProfile.property.createdAt"></a>

- *Type:* `string`

---

##### `fargateProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksFargateProfile.property.fargateProfileArn"></a>

- *Type:* `string`

---

##### `fargateProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksFargateProfile.property.fargateProfileName"></a>

- *Type:* `string`

---

##### `podExecutionRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksFargateProfile.property.podExecutionRoleArn"></a>

- *Type:* `string`

---

##### `selectors`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksFargateProfile.property.selectors"></a>

- *Type:* [`aws-cdk-sdk.eks.EksFargateProfileSelector`](#aws-cdk-sdk.eks.EksFargateProfileSelector)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksFargateProfile.property.status"></a>

- *Type:* `string`

---

##### `subnets`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksFargateProfile.property.subnets"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksFargateProfile.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### EksFargateProfileSelector <a name="aws-cdk-sdk.eks.EksFargateProfileSelector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksFargateProfileSelector: eks.EksFargateProfileSelector = { ... }
```

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksFargateProfileSelector.property.labels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksFargateProfileSelector.property.namespace"></a>

- *Type:* `string`

---

### EksIdentity <a name="aws-cdk-sdk.eks.EksIdentity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksIdentity: eks.EksIdentity = { ... }
```

##### `oidc`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksIdentity.property.oidc"></a>

- *Type:* [`aws-cdk-sdk.eks.Eksoidc`](#aws-cdk-sdk.eks.Eksoidc)

---

### EksIssue <a name="aws-cdk-sdk.eks.EksIssue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksIssue: eks.EksIssue = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksIssue.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksIssue.property.message"></a>

- *Type:* `string`

---

##### `resourceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksIssue.property.resourceIds"></a>

- *Type:* `string`[]

---

### EksKubernetesNetworkConfigRequest <a name="aws-cdk-sdk.eks.EksKubernetesNetworkConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksKubernetesNetworkConfigRequest: eks.EksKubernetesNetworkConfigRequest = { ... }
```

##### `serviceIpv4Cidr`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksKubernetesNetworkConfigRequest.property.serviceIpv4Cidr"></a>

- *Type:* `string`

---

### EksKubernetesNetworkConfigResponse <a name="aws-cdk-sdk.eks.EksKubernetesNetworkConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksKubernetesNetworkConfigResponse: eks.EksKubernetesNetworkConfigResponse = { ... }
```

##### `serviceIpv4Cidr`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksKubernetesNetworkConfigResponse.property.serviceIpv4Cidr"></a>

- *Type:* `string`

---

### EksLaunchTemplateSpecification <a name="aws-cdk-sdk.eks.EksLaunchTemplateSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksLaunchTemplateSpecification: eks.EksLaunchTemplateSpecification = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksLaunchTemplateSpecification.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksLaunchTemplateSpecification.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksLaunchTemplateSpecification.property.version"></a>

- *Type:* `string`

---

### EksListClustersRequest <a name="aws-cdk-sdk.eks.EksListClustersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksListClustersRequest: eks.EksListClustersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListClustersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListClustersRequest.property.nextToken"></a>

- *Type:* `string`

---

### EksListClustersResponse <a name="aws-cdk-sdk.eks.EksListClustersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksListClustersResponse: eks.EksListClustersResponse = { ... }
```

##### `clusters`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListClustersResponse.property.clusters"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListClustersResponse.property.nextToken"></a>

- *Type:* `string`

---

### EksListFargateProfilesRequest <a name="aws-cdk-sdk.eks.EksListFargateProfilesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksListFargateProfilesRequest: eks.EksListFargateProfilesRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksListFargateProfilesRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListFargateProfilesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListFargateProfilesRequest.property.nextToken"></a>

- *Type:* `string`

---

### EksListFargateProfilesResponse <a name="aws-cdk-sdk.eks.EksListFargateProfilesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksListFargateProfilesResponse: eks.EksListFargateProfilesResponse = { ... }
```

##### `fargateProfileNames`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListFargateProfilesResponse.property.fargateProfileNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListFargateProfilesResponse.property.nextToken"></a>

- *Type:* `string`

---

### EksListNodegroupsRequest <a name="aws-cdk-sdk.eks.EksListNodegroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksListNodegroupsRequest: eks.EksListNodegroupsRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksListNodegroupsRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListNodegroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListNodegroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### EksListNodegroupsResponse <a name="aws-cdk-sdk.eks.EksListNodegroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksListNodegroupsResponse: eks.EksListNodegroupsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListNodegroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `nodegroups`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListNodegroupsResponse.property.nodegroups"></a>

- *Type:* `string`[]

---

### EksListTagsForResourceRequest <a name="aws-cdk-sdk.eks.EksListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksListTagsForResourceRequest: eks.EksListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### EksListTagsForResourceResponse <a name="aws-cdk-sdk.eks.EksListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksListTagsForResourceResponse: eks.EksListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### EksListUpdatesRequest <a name="aws-cdk-sdk.eks.EksListUpdatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksListUpdatesRequest: eks.EksListUpdatesRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksListUpdatesRequest.property.name"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListUpdatesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListUpdatesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `nodegroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListUpdatesRequest.property.nodegroupName"></a>

- *Type:* `string`

---

### EksListUpdatesResponse <a name="aws-cdk-sdk.eks.EksListUpdatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksListUpdatesResponse: eks.EksListUpdatesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListUpdatesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `updateIds`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksListUpdatesResponse.property.updateIds"></a>

- *Type:* `string`[]

---

### EksLogging <a name="aws-cdk-sdk.eks.EksLogging"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksLogging: eks.EksLogging = { ... }
```

##### `clusterLogging`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksLogging.property.clusterLogging"></a>

- *Type:* [`aws-cdk-sdk.eks.EksLogSetup`](#aws-cdk-sdk.eks.EksLogSetup)[]

---

### EksLogSetup <a name="aws-cdk-sdk.eks.EksLogSetup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksLogSetup: eks.EksLogSetup = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksLogSetup.property.enabled"></a>

- *Type:* `boolean`

---

##### `types`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksLogSetup.property.types"></a>

- *Type:* `string`[]

---

### EksNodegroup <a name="aws-cdk-sdk.eks.EksNodegroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksNodegroup: eks.EksNodegroup = { ... }
```

##### `amiType`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.amiType"></a>

- *Type:* `string`

---

##### `clusterName`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.clusterName"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.createdAt"></a>

- *Type:* `string`

---

##### `diskSize`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.diskSize"></a>

- *Type:* `number`

---

##### `health`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.health"></a>

- *Type:* [`aws-cdk-sdk.eks.EksNodegroupHealth`](#aws-cdk-sdk.eks.EksNodegroupHealth)

---

##### `instanceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.instanceTypes"></a>

- *Type:* `string`[]

---

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.labels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `launchTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.launchTemplate"></a>

- *Type:* [`aws-cdk-sdk.eks.EksLaunchTemplateSpecification`](#aws-cdk-sdk.eks.EksLaunchTemplateSpecification)

---

##### `modifiedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.modifiedAt"></a>

- *Type:* `string`

---

##### `nodegroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.nodegroupArn"></a>

- *Type:* `string`

---

##### `nodegroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.nodegroupName"></a>

- *Type:* `string`

---

##### `nodeRole`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.nodeRole"></a>

- *Type:* `string`

---

##### `releaseVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.releaseVersion"></a>

- *Type:* `string`

---

##### `remoteAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.remoteAccess"></a>

- *Type:* [`aws-cdk-sdk.eks.EksRemoteAccessConfig`](#aws-cdk-sdk.eks.EksRemoteAccessConfig)

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.resources"></a>

- *Type:* [`aws-cdk-sdk.eks.EksNodegroupResources`](#aws-cdk-sdk.eks.EksNodegroupResources)

---

##### `scalingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.scalingConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EksNodegroupScalingConfig`](#aws-cdk-sdk.eks.EksNodegroupScalingConfig)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.status"></a>

- *Type:* `string`

---

##### `subnets`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.subnets"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroup.property.version"></a>

- *Type:* `string`

---

### EksNodegroupHealth <a name="aws-cdk-sdk.eks.EksNodegroupHealth"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksNodegroupHealth: eks.EksNodegroupHealth = { ... }
```

##### `issues`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroupHealth.property.issues"></a>

- *Type:* [`aws-cdk-sdk.eks.EksIssue`](#aws-cdk-sdk.eks.EksIssue)[]

---

### EksNodegroupResources <a name="aws-cdk-sdk.eks.EksNodegroupResources"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksNodegroupResources: eks.EksNodegroupResources = { ... }
```

##### `autoScalingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroupResources.property.autoScalingGroups"></a>

- *Type:* [`aws-cdk-sdk.eks.EksAutoScalingGroup`](#aws-cdk-sdk.eks.EksAutoScalingGroup)[]

---

##### `remoteAccessSecurityGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroupResources.property.remoteAccessSecurityGroup"></a>

- *Type:* `string`

---

### EksNodegroupScalingConfig <a name="aws-cdk-sdk.eks.EksNodegroupScalingConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksNodegroupScalingConfig: eks.EksNodegroupScalingConfig = { ... }
```

##### `desiredSize`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroupScalingConfig.property.desiredSize"></a>

- *Type:* `number`

---

##### `maxSize`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroupScalingConfig.property.maxSize"></a>

- *Type:* `number`

---

##### `minSize`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksNodegroupScalingConfig.property.minSize"></a>

- *Type:* `number`

---

### Eksoidc <a name="aws-cdk-sdk.eks.Eksoidc"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksoidc: eks.Eksoidc = { ... }
```

##### `issuer`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.Eksoidc.property.issuer"></a>

- *Type:* `string`

---

### EksProvider <a name="aws-cdk-sdk.eks.EksProvider"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksProvider: eks.EksProvider = { ... }
```

##### `keyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksProvider.property.keyArn"></a>

- *Type:* `string`

---

### EksRemoteAccessConfig <a name="aws-cdk-sdk.eks.EksRemoteAccessConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksRemoteAccessConfig: eks.EksRemoteAccessConfig = { ... }
```

##### `ec2SshKey`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksRemoteAccessConfig.property.ec2SshKey"></a>

- *Type:* `string`

---

##### `sourceSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksRemoteAccessConfig.property.sourceSecurityGroups"></a>

- *Type:* `string`[]

---

### EksTagResourceRequest <a name="aws-cdk-sdk.eks.EksTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksTagResourceRequest: eks.EksTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### EksTagResourceResponse <a name="aws-cdk-sdk.eks.EksTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksTagResourceResponse: eks.EksTagResourceResponse = { ... }
```

### EksUntagResourceRequest <a name="aws-cdk-sdk.eks.EksUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksUntagResourceRequest: eks.EksUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### EksUntagResourceResponse <a name="aws-cdk-sdk.eks.EksUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksUntagResourceResponse: eks.EksUntagResourceResponse = { ... }
```

### EksUpdate <a name="aws-cdk-sdk.eks.EksUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksUpdate: eks.EksUpdate = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdate.property.createdAt"></a>

- *Type:* `string`

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdate.property.errors"></a>

- *Type:* [`aws-cdk-sdk.eks.EksErrorDetail`](#aws-cdk-sdk.eks.EksErrorDetail)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdate.property.id"></a>

- *Type:* `string`

---

##### `params`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdate.property.params"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateParam`](#aws-cdk-sdk.eks.EksUpdateParam)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdate.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdate.property.type"></a>

- *Type:* `string`

---

### EksUpdateClusterConfigRequest <a name="aws-cdk-sdk.eks.EksUpdateClusterConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksUpdateClusterConfigRequest: eks.EksUpdateClusterConfigRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksUpdateClusterConfigRequest.property.name"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateClusterConfigRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `logging`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateClusterConfigRequest.property.logging"></a>

- *Type:* [`aws-cdk-sdk.eks.EksLogging`](#aws-cdk-sdk.eks.EksLogging)

---

##### `resourcesVpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateClusterConfigRequest.property.resourcesVpcConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EksVpcConfigRequest`](#aws-cdk-sdk.eks.EksVpcConfigRequest)

---

### EksUpdateClusterConfigResponse <a name="aws-cdk-sdk.eks.EksUpdateClusterConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksUpdateClusterConfigResponse: eks.EksUpdateClusterConfigResponse = { ... }
```

##### `update`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateClusterConfigResponse.property.update"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdate`](#aws-cdk-sdk.eks.EksUpdate)

---

### EksUpdateClusterVersionRequest <a name="aws-cdk-sdk.eks.EksUpdateClusterVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksUpdateClusterVersionRequest: eks.EksUpdateClusterVersionRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksUpdateClusterVersionRequest.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksUpdateClusterVersionRequest.property.version"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateClusterVersionRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

### EksUpdateClusterVersionResponse <a name="aws-cdk-sdk.eks.EksUpdateClusterVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksUpdateClusterVersionResponse: eks.EksUpdateClusterVersionResponse = { ... }
```

##### `update`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateClusterVersionResponse.property.update"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdate`](#aws-cdk-sdk.eks.EksUpdate)

---

### EksUpdateLabelsPayload <a name="aws-cdk-sdk.eks.EksUpdateLabelsPayload"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksUpdateLabelsPayload: eks.EksUpdateLabelsPayload = { ... }
```

##### `addOrUpdateLabels`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateLabelsPayload.property.addOrUpdateLabels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `removeLabels`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateLabelsPayload.property.removeLabels"></a>

- *Type:* `string`[]

---

### EksUpdateNodegroupConfigRequest <a name="aws-cdk-sdk.eks.EksUpdateNodegroupConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksUpdateNodegroupConfigRequest: eks.EksUpdateNodegroupConfigRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksUpdateNodegroupConfigRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `nodegroupName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksUpdateNodegroupConfigRequest.property.nodegroupName"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateNodegroupConfigRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateNodegroupConfigRequest.property.labels"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateLabelsPayload`](#aws-cdk-sdk.eks.EksUpdateLabelsPayload)

---

##### `scalingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateNodegroupConfigRequest.property.scalingConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EksNodegroupScalingConfig`](#aws-cdk-sdk.eks.EksNodegroupScalingConfig)

---

### EksUpdateNodegroupConfigResponse <a name="aws-cdk-sdk.eks.EksUpdateNodegroupConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksUpdateNodegroupConfigResponse: eks.EksUpdateNodegroupConfigResponse = { ... }
```

##### `update`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateNodegroupConfigResponse.property.update"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdate`](#aws-cdk-sdk.eks.EksUpdate)

---

### EksUpdateNodegroupVersionRequest <a name="aws-cdk-sdk.eks.EksUpdateNodegroupVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksUpdateNodegroupVersionRequest: eks.EksUpdateNodegroupVersionRequest = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksUpdateNodegroupVersionRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `nodegroupName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EksUpdateNodegroupVersionRequest.property.nodegroupName"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateNodegroupVersionRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateNodegroupVersionRequest.property.force"></a>

- *Type:* `boolean`

---

##### `launchTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateNodegroupVersionRequest.property.launchTemplate"></a>

- *Type:* [`aws-cdk-sdk.eks.EksLaunchTemplateSpecification`](#aws-cdk-sdk.eks.EksLaunchTemplateSpecification)

---

##### `releaseVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateNodegroupVersionRequest.property.releaseVersion"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateNodegroupVersionRequest.property.version"></a>

- *Type:* `string`

---

### EksUpdateNodegroupVersionResponse <a name="aws-cdk-sdk.eks.EksUpdateNodegroupVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksUpdateNodegroupVersionResponse: eks.EksUpdateNodegroupVersionResponse = { ... }
```

##### `update`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateNodegroupVersionResponse.property.update"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdate`](#aws-cdk-sdk.eks.EksUpdate)

---

### EksUpdateParam <a name="aws-cdk-sdk.eks.EksUpdateParam"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksUpdateParam: eks.EksUpdateParam = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateParam.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksUpdateParam.property.value"></a>

- *Type:* `string`

---

### EksVpcConfigRequest <a name="aws-cdk-sdk.eks.EksVpcConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksVpcConfigRequest: eks.EksVpcConfigRequest = { ... }
```

##### `endpointPrivateAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksVpcConfigRequest.property.endpointPrivateAccess"></a>

- *Type:* `boolean`

---

##### `endpointPublicAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksVpcConfigRequest.property.endpointPublicAccess"></a>

- *Type:* `boolean`

---

##### `publicAccessCidrs`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksVpcConfigRequest.property.publicAccessCidrs"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksVpcConfigRequest.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksVpcConfigRequest.property.subnetIds"></a>

- *Type:* `string`[]

---

### EksVpcConfigResponse <a name="aws-cdk-sdk.eks.EksVpcConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

const eksVpcConfigResponse: eks.EksVpcConfigResponse = { ... }
```

##### `clusterSecurityGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksVpcConfigResponse.property.clusterSecurityGroupId"></a>

- *Type:* `string`

---

##### `endpointPrivateAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksVpcConfigResponse.property.endpointPrivateAccess"></a>

- *Type:* `boolean`

---

##### `endpointPublicAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksVpcConfigResponse.property.endpointPublicAccess"></a>

- *Type:* `boolean`

---

##### `publicAccessCidrs`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksVpcConfigResponse.property.publicAccessCidrs"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksVpcConfigResponse.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksVpcConfigResponse.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.eks.EksVpcConfigResponse.property.vpcId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### EKSResponsesCreateCluster <a name="aws-cdk-sdk.eks.EKSResponsesCreateCluster"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateCluster.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateCluster(__scope: Construct, __resources: string[], __input: EksCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateClusterRequest`](#aws-cdk-sdk.eks.EksCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster`](#aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster)

---


### EKSResponsesCreateClusterCluster <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateClusterCluster(__scope: Construct, __resources: string[], __input: EksCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateClusterRequest`](#aws-cdk-sdk.eks.EksCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.arn"></a>

- *Type:* `string`

---

##### `certificateAuthority`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.certificateAuthority"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterCertificateAuthority`](#aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterCertificateAuthority)

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.createdAt"></a>

- *Type:* `string`

---

##### `encryptionConfig`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.encryptionConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EksEncryptionConfig`](#aws-cdk-sdk.eks.EksEncryptionConfig)[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `identity`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.identity"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentity`](#aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentity)

---

##### `kubernetesNetworkConfig`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.kubernetesNetworkConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterKubernetesNetworkConfig`](#aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterKubernetesNetworkConfig)

---

##### `logging`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.logging"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterLogging`](#aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterLogging)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.name"></a>

- *Type:* `string`

---

##### `platformVersion`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.platformVersion"></a>

- *Type:* `string`

---

##### `resourcesVpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.resourcesVpcConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterResourcesVpcConfig`](#aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterResourcesVpcConfig)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterCluster.property.version"></a>

- *Type:* `string`

---


### EKSResponsesCreateClusterClusterCertificateAuthority <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterCertificateAuthority"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterCertificateAuthority.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateClusterClusterCertificateAuthority(__scope: Construct, __resources: string[], __input: EksCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterCertificateAuthority.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterCertificateAuthority.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterCertificateAuthority.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateClusterRequest`](#aws-cdk-sdk.eks.EksCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterCertificateAuthority.property.data"></a>

- *Type:* `string`

---


### EKSResponsesCreateClusterClusterIdentity <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentity"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentity.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateClusterClusterIdentity(__scope: Construct, __resources: string[], __input: EksCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateClusterRequest`](#aws-cdk-sdk.eks.EksCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `oidc`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentity.property.oidc"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentityOidc`](#aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentityOidc)

---


### EKSResponsesCreateClusterClusterIdentityOidc <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentityOidc"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentityOidc.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateClusterClusterIdentityOidc(__scope: Construct, __resources: string[], __input: EksCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentityOidc.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentityOidc.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentityOidc.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateClusterRequest`](#aws-cdk-sdk.eks.EksCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `issuer`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterIdentityOidc.property.issuer"></a>

- *Type:* `string`

---


### EKSResponsesCreateClusterClusterKubernetesNetworkConfig <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterKubernetesNetworkConfig"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterKubernetesNetworkConfig.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateClusterClusterKubernetesNetworkConfig(__scope: Construct, __resources: string[], __input: EksCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterKubernetesNetworkConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterKubernetesNetworkConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterKubernetesNetworkConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateClusterRequest`](#aws-cdk-sdk.eks.EksCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `serviceIpv4Cidr`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterKubernetesNetworkConfig.property.serviceIpv4Cidr"></a>

- *Type:* `string`

---


### EKSResponsesCreateClusterClusterLogging <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterLogging"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterLogging.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateClusterClusterLogging(__scope: Construct, __resources: string[], __input: EksCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateClusterRequest`](#aws-cdk-sdk.eks.EksCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterLogging`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterLogging.property.clusterLogging"></a>

- *Type:* [`aws-cdk-sdk.eks.EksLogSetup`](#aws-cdk-sdk.eks.EksLogSetup)[]

---


### EKSResponsesCreateClusterClusterResourcesVpcConfig <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterResourcesVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterResourcesVpcConfig.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateClusterClusterResourcesVpcConfig(__scope: Construct, __resources: string[], __input: EksCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterResourcesVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterResourcesVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterResourcesVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateClusterRequest`](#aws-cdk-sdk.eks.EksCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterSecurityGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterResourcesVpcConfig.property.clusterSecurityGroupId"></a>

- *Type:* `string`

---

##### `endpointPrivateAccess`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterResourcesVpcConfig.property.endpointPrivateAccess"></a>

- *Type:* `boolean`

---

##### `endpointPublicAccess`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterResourcesVpcConfig.property.endpointPublicAccess"></a>

- *Type:* `boolean`

---

##### `publicAccessCidrs`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterResourcesVpcConfig.property.publicAccessCidrs"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterResourcesVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterResourcesVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateClusterClusterResourcesVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### EKSResponsesCreateFargateProfile <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfile"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfile.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateFargateProfile(__scope: Construct, __resources: string[], __input: EksCreateFargateProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateFargateProfileRequest`](#aws-cdk-sdk.eks.EksCreateFargateProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `fargateProfile`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfile.property.fargateProfile"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile`](#aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile)

---


### EKSResponsesCreateFargateProfileFargateProfile <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateFargateProfileFargateProfile(__scope: Construct, __resources: string[], __input: EksCreateFargateProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateFargateProfileRequest`](#aws-cdk-sdk.eks.EksCreateFargateProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile.property.clusterName"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile.property.createdAt"></a>

- *Type:* `string`

---

##### `fargateProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile.property.fargateProfileArn"></a>

- *Type:* `string`

---

##### `fargateProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile.property.fargateProfileName"></a>

- *Type:* `string`

---

##### `podExecutionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile.property.podExecutionRoleArn"></a>

- *Type:* `string`

---

##### `selectors`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile.property.selectors"></a>

- *Type:* [`aws-cdk-sdk.eks.EksFargateProfileSelector`](#aws-cdk-sdk.eks.EksFargateProfileSelector)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile.property.status"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile.property.subnets"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateFargateProfileFargateProfile.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### EKSResponsesCreateNodegroup <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroup"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroup.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateNodegroup(__scope: Construct, __resources: string[], __input: EksCreateNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateNodegroupRequest`](#aws-cdk-sdk.eks.EksCreateNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `nodegroup`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroup.property.nodegroup"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup`](#aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup)

---


### EKSResponsesCreateNodegroupNodegroup <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateNodegroupNodegroup(__scope: Construct, __resources: string[], __input: EksCreateNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateNodegroupRequest`](#aws-cdk-sdk.eks.EksCreateNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `amiType`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.amiType"></a>

- *Type:* `string`

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.clusterName"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.createdAt"></a>

- *Type:* `string`

---

##### `diskSize`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.diskSize"></a>

- *Type:* `number`

---

##### `health`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.health"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupHealth`](#aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupHealth)

---

##### `instanceTypes`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.instanceTypes"></a>

- *Type:* `string`[]

---

##### `labels`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.labels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `launchTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.launchTemplate"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupLaunchTemplate`](#aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupLaunchTemplate)

---

##### `modifiedAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.modifiedAt"></a>

- *Type:* `string`

---

##### `nodegroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.nodegroupArn"></a>

- *Type:* `string`

---

##### `nodegroupName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.nodegroupName"></a>

- *Type:* `string`

---

##### `nodeRole`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.nodeRole"></a>

- *Type:* `string`

---

##### `releaseVersion`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.releaseVersion"></a>

- *Type:* `string`

---

##### `remoteAccess`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.remoteAccess"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupRemoteAccess`](#aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupRemoteAccess)

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.resources"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupResources`](#aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupResources)

---

##### `scalingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.scalingConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupScalingConfig`](#aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupScalingConfig)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.status"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.subnets"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroup.property.version"></a>

- *Type:* `string`

---


### EKSResponsesCreateNodegroupNodegroupHealth <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupHealth"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupHealth.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateNodegroupNodegroupHealth(__scope: Construct, __resources: string[], __input: EksCreateNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupHealth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupHealth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupHealth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateNodegroupRequest`](#aws-cdk-sdk.eks.EksCreateNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `issues`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupHealth.property.issues"></a>

- *Type:* [`aws-cdk-sdk.eks.EksIssue`](#aws-cdk-sdk.eks.EksIssue)[]

---


### EKSResponsesCreateNodegroupNodegroupLaunchTemplate <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupLaunchTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupLaunchTemplate.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateNodegroupNodegroupLaunchTemplate(__scope: Construct, __resources: string[], __input: EksCreateNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupLaunchTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupLaunchTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupLaunchTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateNodegroupRequest`](#aws-cdk-sdk.eks.EksCreateNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupLaunchTemplate.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupLaunchTemplate.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupLaunchTemplate.property.version"></a>

- *Type:* `string`

---


### EKSResponsesCreateNodegroupNodegroupRemoteAccess <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupRemoteAccess"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupRemoteAccess.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateNodegroupNodegroupRemoteAccess(__scope: Construct, __resources: string[], __input: EksCreateNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupRemoteAccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupRemoteAccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupRemoteAccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateNodegroupRequest`](#aws-cdk-sdk.eks.EksCreateNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `ec2SshKey`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupRemoteAccess.property.ec2SshKey"></a>

- *Type:* `string`

---

##### `sourceSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupRemoteAccess.property.sourceSecurityGroups"></a>

- *Type:* `string`[]

---


### EKSResponsesCreateNodegroupNodegroupResources <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupResources"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupResources.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateNodegroupNodegroupResources(__scope: Construct, __resources: string[], __input: EksCreateNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateNodegroupRequest`](#aws-cdk-sdk.eks.EksCreateNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupResources.property.autoScalingGroups"></a>

- *Type:* [`aws-cdk-sdk.eks.EksAutoScalingGroup`](#aws-cdk-sdk.eks.EksAutoScalingGroup)[]

---

##### `remoteAccessSecurityGroup`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupResources.property.remoteAccessSecurityGroup"></a>

- *Type:* `string`

---


### EKSResponsesCreateNodegroupNodegroupScalingConfig <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupScalingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupScalingConfig.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesCreateNodegroupNodegroupScalingConfig(__scope: Construct, __resources: string[], __input: EksCreateNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupScalingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupScalingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupScalingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksCreateNodegroupRequest`](#aws-cdk-sdk.eks.EksCreateNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `desiredSize`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupScalingConfig.property.desiredSize"></a>

- *Type:* `number`

---

##### `maxSize`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupScalingConfig.property.maxSize"></a>

- *Type:* `number`

---

##### `minSize`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesCreateNodegroupNodegroupScalingConfig.property.minSize"></a>

- *Type:* `number`

---


### EKSResponsesDeleteCluster <a name="aws-cdk-sdk.eks.EKSResponsesDeleteCluster"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteCluster.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteCluster(__scope: Construct, __resources: string[], __input: EksDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteClusterRequest`](#aws-cdk-sdk.eks.EksDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster`](#aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster)

---


### EKSResponsesDeleteClusterCluster <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteClusterCluster(__scope: Construct, __resources: string[], __input: EksDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteClusterRequest`](#aws-cdk-sdk.eks.EksDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.arn"></a>

- *Type:* `string`

---

##### `certificateAuthority`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.certificateAuthority"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterCertificateAuthority`](#aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterCertificateAuthority)

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.createdAt"></a>

- *Type:* `string`

---

##### `encryptionConfig`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.encryptionConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EksEncryptionConfig`](#aws-cdk-sdk.eks.EksEncryptionConfig)[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `identity`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.identity"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentity`](#aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentity)

---

##### `kubernetesNetworkConfig`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.kubernetesNetworkConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterKubernetesNetworkConfig`](#aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterKubernetesNetworkConfig)

---

##### `logging`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.logging"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterLogging`](#aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterLogging)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.name"></a>

- *Type:* `string`

---

##### `platformVersion`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.platformVersion"></a>

- *Type:* `string`

---

##### `resourcesVpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.resourcesVpcConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterResourcesVpcConfig`](#aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterResourcesVpcConfig)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterCluster.property.version"></a>

- *Type:* `string`

---


### EKSResponsesDeleteClusterClusterCertificateAuthority <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterCertificateAuthority"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterCertificateAuthority.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteClusterClusterCertificateAuthority(__scope: Construct, __resources: string[], __input: EksDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterCertificateAuthority.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterCertificateAuthority.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterCertificateAuthority.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteClusterRequest`](#aws-cdk-sdk.eks.EksDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterCertificateAuthority.property.data"></a>

- *Type:* `string`

---


### EKSResponsesDeleteClusterClusterIdentity <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentity"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentity.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteClusterClusterIdentity(__scope: Construct, __resources: string[], __input: EksDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteClusterRequest`](#aws-cdk-sdk.eks.EksDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `oidc`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentity.property.oidc"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentityOidc`](#aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentityOidc)

---


### EKSResponsesDeleteClusterClusterIdentityOidc <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentityOidc"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentityOidc.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteClusterClusterIdentityOidc(__scope: Construct, __resources: string[], __input: EksDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentityOidc.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentityOidc.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentityOidc.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteClusterRequest`](#aws-cdk-sdk.eks.EksDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `issuer`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterIdentityOidc.property.issuer"></a>

- *Type:* `string`

---


### EKSResponsesDeleteClusterClusterKubernetesNetworkConfig <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterKubernetesNetworkConfig"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterKubernetesNetworkConfig.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteClusterClusterKubernetesNetworkConfig(__scope: Construct, __resources: string[], __input: EksDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterKubernetesNetworkConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterKubernetesNetworkConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterKubernetesNetworkConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteClusterRequest`](#aws-cdk-sdk.eks.EksDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `serviceIpv4Cidr`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterKubernetesNetworkConfig.property.serviceIpv4Cidr"></a>

- *Type:* `string`

---


### EKSResponsesDeleteClusterClusterLogging <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterLogging"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterLogging.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteClusterClusterLogging(__scope: Construct, __resources: string[], __input: EksDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteClusterRequest`](#aws-cdk-sdk.eks.EksDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterLogging`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterLogging.property.clusterLogging"></a>

- *Type:* [`aws-cdk-sdk.eks.EksLogSetup`](#aws-cdk-sdk.eks.EksLogSetup)[]

---


### EKSResponsesDeleteClusterClusterResourcesVpcConfig <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterResourcesVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterResourcesVpcConfig.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteClusterClusterResourcesVpcConfig(__scope: Construct, __resources: string[], __input: EksDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterResourcesVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterResourcesVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterResourcesVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteClusterRequest`](#aws-cdk-sdk.eks.EksDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterSecurityGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterResourcesVpcConfig.property.clusterSecurityGroupId"></a>

- *Type:* `string`

---

##### `endpointPrivateAccess`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterResourcesVpcConfig.property.endpointPrivateAccess"></a>

- *Type:* `boolean`

---

##### `endpointPublicAccess`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterResourcesVpcConfig.property.endpointPublicAccess"></a>

- *Type:* `boolean`

---

##### `publicAccessCidrs`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterResourcesVpcConfig.property.publicAccessCidrs"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterResourcesVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterResourcesVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteClusterClusterResourcesVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### EKSResponsesDeleteFargateProfile <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfile"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfile.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteFargateProfile(__scope: Construct, __resources: string[], __input: EksDeleteFargateProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteFargateProfileRequest`](#aws-cdk-sdk.eks.EksDeleteFargateProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `fargateProfile`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfile.property.fargateProfile"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile`](#aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile)

---


### EKSResponsesDeleteFargateProfileFargateProfile <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteFargateProfileFargateProfile(__scope: Construct, __resources: string[], __input: EksDeleteFargateProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteFargateProfileRequest`](#aws-cdk-sdk.eks.EksDeleteFargateProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile.property.clusterName"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile.property.createdAt"></a>

- *Type:* `string`

---

##### `fargateProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile.property.fargateProfileArn"></a>

- *Type:* `string`

---

##### `fargateProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile.property.fargateProfileName"></a>

- *Type:* `string`

---

##### `podExecutionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile.property.podExecutionRoleArn"></a>

- *Type:* `string`

---

##### `selectors`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile.property.selectors"></a>

- *Type:* [`aws-cdk-sdk.eks.EksFargateProfileSelector`](#aws-cdk-sdk.eks.EksFargateProfileSelector)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile.property.status"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile.property.subnets"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteFargateProfileFargateProfile.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### EKSResponsesDeleteNodegroup <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroup"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroup.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteNodegroup(__scope: Construct, __resources: string[], __input: EksDeleteNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteNodegroupRequest`](#aws-cdk-sdk.eks.EksDeleteNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `nodegroup`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroup.property.nodegroup"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup`](#aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup)

---


### EKSResponsesDeleteNodegroupNodegroup <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteNodegroupNodegroup(__scope: Construct, __resources: string[], __input: EksDeleteNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteNodegroupRequest`](#aws-cdk-sdk.eks.EksDeleteNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `amiType`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.amiType"></a>

- *Type:* `string`

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.clusterName"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.createdAt"></a>

- *Type:* `string`

---

##### `diskSize`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.diskSize"></a>

- *Type:* `number`

---

##### `health`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.health"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupHealth`](#aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupHealth)

---

##### `instanceTypes`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.instanceTypes"></a>

- *Type:* `string`[]

---

##### `labels`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.labels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `launchTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.launchTemplate"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupLaunchTemplate`](#aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupLaunchTemplate)

---

##### `modifiedAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.modifiedAt"></a>

- *Type:* `string`

---

##### `nodegroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.nodegroupArn"></a>

- *Type:* `string`

---

##### `nodegroupName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.nodegroupName"></a>

- *Type:* `string`

---

##### `nodeRole`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.nodeRole"></a>

- *Type:* `string`

---

##### `releaseVersion`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.releaseVersion"></a>

- *Type:* `string`

---

##### `remoteAccess`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.remoteAccess"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupRemoteAccess`](#aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupRemoteAccess)

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.resources"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupResources`](#aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupResources)

---

##### `scalingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.scalingConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupScalingConfig`](#aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupScalingConfig)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.status"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.subnets"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroup.property.version"></a>

- *Type:* `string`

---


### EKSResponsesDeleteNodegroupNodegroupHealth <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupHealth"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupHealth.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteNodegroupNodegroupHealth(__scope: Construct, __resources: string[], __input: EksDeleteNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupHealth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupHealth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupHealth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteNodegroupRequest`](#aws-cdk-sdk.eks.EksDeleteNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `issues`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupHealth.property.issues"></a>

- *Type:* [`aws-cdk-sdk.eks.EksIssue`](#aws-cdk-sdk.eks.EksIssue)[]

---


### EKSResponsesDeleteNodegroupNodegroupLaunchTemplate <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupLaunchTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupLaunchTemplate.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteNodegroupNodegroupLaunchTemplate(__scope: Construct, __resources: string[], __input: EksDeleteNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupLaunchTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupLaunchTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupLaunchTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteNodegroupRequest`](#aws-cdk-sdk.eks.EksDeleteNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupLaunchTemplate.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupLaunchTemplate.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupLaunchTemplate.property.version"></a>

- *Type:* `string`

---


### EKSResponsesDeleteNodegroupNodegroupRemoteAccess <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupRemoteAccess"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupRemoteAccess.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteNodegroupNodegroupRemoteAccess(__scope: Construct, __resources: string[], __input: EksDeleteNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupRemoteAccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupRemoteAccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupRemoteAccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteNodegroupRequest`](#aws-cdk-sdk.eks.EksDeleteNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `ec2SshKey`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupRemoteAccess.property.ec2SshKey"></a>

- *Type:* `string`

---

##### `sourceSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupRemoteAccess.property.sourceSecurityGroups"></a>

- *Type:* `string`[]

---


### EKSResponsesDeleteNodegroupNodegroupResources <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupResources"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupResources.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteNodegroupNodegroupResources(__scope: Construct, __resources: string[], __input: EksDeleteNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteNodegroupRequest`](#aws-cdk-sdk.eks.EksDeleteNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupResources.property.autoScalingGroups"></a>

- *Type:* [`aws-cdk-sdk.eks.EksAutoScalingGroup`](#aws-cdk-sdk.eks.EksAutoScalingGroup)[]

---

##### `remoteAccessSecurityGroup`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupResources.property.remoteAccessSecurityGroup"></a>

- *Type:* `string`

---


### EKSResponsesDeleteNodegroupNodegroupScalingConfig <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupScalingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupScalingConfig.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDeleteNodegroupNodegroupScalingConfig(__scope: Construct, __resources: string[], __input: EksDeleteNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupScalingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupScalingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupScalingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDeleteNodegroupRequest`](#aws-cdk-sdk.eks.EksDeleteNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `desiredSize`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupScalingConfig.property.desiredSize"></a>

- *Type:* `number`

---

##### `maxSize`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupScalingConfig.property.maxSize"></a>

- *Type:* `number`

---

##### `minSize`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDeleteNodegroupNodegroupScalingConfig.property.minSize"></a>

- *Type:* `number`

---


### EKSResponsesDescribeCluster <a name="aws-cdk-sdk.eks.EKSResponsesDescribeCluster"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeCluster.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeCluster(__scope: Construct, __resources: string[], __input: EksDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeClusterRequest`](#aws-cdk-sdk.eks.EksDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster`](#aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster)

---


### EKSResponsesDescribeClusterCluster <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeClusterCluster(__scope: Construct, __resources: string[], __input: EksDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeClusterRequest`](#aws-cdk-sdk.eks.EksDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.arn"></a>

- *Type:* `string`

---

##### `certificateAuthority`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.certificateAuthority"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterCertificateAuthority`](#aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterCertificateAuthority)

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.createdAt"></a>

- *Type:* `string`

---

##### `encryptionConfig`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.encryptionConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EksEncryptionConfig`](#aws-cdk-sdk.eks.EksEncryptionConfig)[]

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.endpoint"></a>

- *Type:* `string`

---

##### `identity`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.identity"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentity`](#aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentity)

---

##### `kubernetesNetworkConfig`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.kubernetesNetworkConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterKubernetesNetworkConfig`](#aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterKubernetesNetworkConfig)

---

##### `logging`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.logging"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterLogging`](#aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterLogging)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.name"></a>

- *Type:* `string`

---

##### `platformVersion`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.platformVersion"></a>

- *Type:* `string`

---

##### `resourcesVpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.resourcesVpcConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterResourcesVpcConfig`](#aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterResourcesVpcConfig)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.roleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterCluster.property.version"></a>

- *Type:* `string`

---


### EKSResponsesDescribeClusterClusterCertificateAuthority <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterCertificateAuthority"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterCertificateAuthority.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeClusterClusterCertificateAuthority(__scope: Construct, __resources: string[], __input: EksDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterCertificateAuthority.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterCertificateAuthority.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterCertificateAuthority.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeClusterRequest`](#aws-cdk-sdk.eks.EksDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterCertificateAuthority.property.data"></a>

- *Type:* `string`

---


### EKSResponsesDescribeClusterClusterIdentity <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentity"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentity.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeClusterClusterIdentity(__scope: Construct, __resources: string[], __input: EksDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeClusterRequest`](#aws-cdk-sdk.eks.EksDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `oidc`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentity.property.oidc"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentityOidc`](#aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentityOidc)

---


### EKSResponsesDescribeClusterClusterIdentityOidc <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentityOidc"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentityOidc.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeClusterClusterIdentityOidc(__scope: Construct, __resources: string[], __input: EksDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentityOidc.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentityOidc.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentityOidc.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeClusterRequest`](#aws-cdk-sdk.eks.EksDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `issuer`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterIdentityOidc.property.issuer"></a>

- *Type:* `string`

---


### EKSResponsesDescribeClusterClusterKubernetesNetworkConfig <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterKubernetesNetworkConfig"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterKubernetesNetworkConfig.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeClusterClusterKubernetesNetworkConfig(__scope: Construct, __resources: string[], __input: EksDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterKubernetesNetworkConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterKubernetesNetworkConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterKubernetesNetworkConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeClusterRequest`](#aws-cdk-sdk.eks.EksDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `serviceIpv4Cidr`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterKubernetesNetworkConfig.property.serviceIpv4Cidr"></a>

- *Type:* `string`

---


### EKSResponsesDescribeClusterClusterLogging <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterLogging"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterLogging.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeClusterClusterLogging(__scope: Construct, __resources: string[], __input: EksDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeClusterRequest`](#aws-cdk-sdk.eks.EksDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterLogging`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterLogging.property.clusterLogging"></a>

- *Type:* [`aws-cdk-sdk.eks.EksLogSetup`](#aws-cdk-sdk.eks.EksLogSetup)[]

---


### EKSResponsesDescribeClusterClusterResourcesVpcConfig <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterResourcesVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterResourcesVpcConfig.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeClusterClusterResourcesVpcConfig(__scope: Construct, __resources: string[], __input: EksDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterResourcesVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterResourcesVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterResourcesVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeClusterRequest`](#aws-cdk-sdk.eks.EksDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterSecurityGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterResourcesVpcConfig.property.clusterSecurityGroupId"></a>

- *Type:* `string`

---

##### `endpointPrivateAccess`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterResourcesVpcConfig.property.endpointPrivateAccess"></a>

- *Type:* `boolean`

---

##### `endpointPublicAccess`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterResourcesVpcConfig.property.endpointPublicAccess"></a>

- *Type:* `boolean`

---

##### `publicAccessCidrs`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterResourcesVpcConfig.property.publicAccessCidrs"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterResourcesVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterResourcesVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeClusterClusterResourcesVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### EKSResponsesDescribeFargateProfile <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfile"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfile.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeFargateProfile(__scope: Construct, __resources: string[], __input: EksDescribeFargateProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeFargateProfileRequest`](#aws-cdk-sdk.eks.EksDescribeFargateProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `fargateProfile`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfile.property.fargateProfile"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile`](#aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile)

---


### EKSResponsesDescribeFargateProfileFargateProfile <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeFargateProfileFargateProfile(__scope: Construct, __resources: string[], __input: EksDescribeFargateProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeFargateProfileRequest`](#aws-cdk-sdk.eks.EksDescribeFargateProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile.property.clusterName"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile.property.createdAt"></a>

- *Type:* `string`

---

##### `fargateProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile.property.fargateProfileArn"></a>

- *Type:* `string`

---

##### `fargateProfileName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile.property.fargateProfileName"></a>

- *Type:* `string`

---

##### `podExecutionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile.property.podExecutionRoleArn"></a>

- *Type:* `string`

---

##### `selectors`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile.property.selectors"></a>

- *Type:* [`aws-cdk-sdk.eks.EksFargateProfileSelector`](#aws-cdk-sdk.eks.EksFargateProfileSelector)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile.property.status"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile.property.subnets"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeFargateProfileFargateProfile.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### EKSResponsesDescribeNodegroup <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroup"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroup.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeNodegroup(__scope: Construct, __resources: string[], __input: EksDescribeNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeNodegroupRequest`](#aws-cdk-sdk.eks.EksDescribeNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `nodegroup`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroup.property.nodegroup"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup`](#aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup)

---


### EKSResponsesDescribeNodegroupNodegroup <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeNodegroupNodegroup(__scope: Construct, __resources: string[], __input: EksDescribeNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeNodegroupRequest`](#aws-cdk-sdk.eks.EksDescribeNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `amiType`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.amiType"></a>

- *Type:* `string`

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.clusterName"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.createdAt"></a>

- *Type:* `string`

---

##### `diskSize`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.diskSize"></a>

- *Type:* `number`

---

##### `health`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.health"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupHealth`](#aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupHealth)

---

##### `instanceTypes`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.instanceTypes"></a>

- *Type:* `string`[]

---

##### `labels`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.labels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `launchTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.launchTemplate"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupLaunchTemplate`](#aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupLaunchTemplate)

---

##### `modifiedAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.modifiedAt"></a>

- *Type:* `string`

---

##### `nodegroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.nodegroupArn"></a>

- *Type:* `string`

---

##### `nodegroupName`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.nodegroupName"></a>

- *Type:* `string`

---

##### `nodeRole`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.nodeRole"></a>

- *Type:* `string`

---

##### `releaseVersion`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.releaseVersion"></a>

- *Type:* `string`

---

##### `remoteAccess`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.remoteAccess"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupRemoteAccess`](#aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupRemoteAccess)

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.resources"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupResources`](#aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupResources)

---

##### `scalingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.scalingConfig"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupScalingConfig`](#aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupScalingConfig)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.status"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.subnets"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroup.property.version"></a>

- *Type:* `string`

---


### EKSResponsesDescribeNodegroupNodegroupHealth <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupHealth"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupHealth.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeNodegroupNodegroupHealth(__scope: Construct, __resources: string[], __input: EksDescribeNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupHealth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupHealth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupHealth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeNodegroupRequest`](#aws-cdk-sdk.eks.EksDescribeNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `issues`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupHealth.property.issues"></a>

- *Type:* [`aws-cdk-sdk.eks.EksIssue`](#aws-cdk-sdk.eks.EksIssue)[]

---


### EKSResponsesDescribeNodegroupNodegroupLaunchTemplate <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupLaunchTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupLaunchTemplate.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeNodegroupNodegroupLaunchTemplate(__scope: Construct, __resources: string[], __input: EksDescribeNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupLaunchTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupLaunchTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupLaunchTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeNodegroupRequest`](#aws-cdk-sdk.eks.EksDescribeNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupLaunchTemplate.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupLaunchTemplate.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupLaunchTemplate.property.version"></a>

- *Type:* `string`

---


### EKSResponsesDescribeNodegroupNodegroupRemoteAccess <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupRemoteAccess"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupRemoteAccess.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeNodegroupNodegroupRemoteAccess(__scope: Construct, __resources: string[], __input: EksDescribeNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupRemoteAccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupRemoteAccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupRemoteAccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeNodegroupRequest`](#aws-cdk-sdk.eks.EksDescribeNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `ec2SshKey`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupRemoteAccess.property.ec2SshKey"></a>

- *Type:* `string`

---

##### `sourceSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupRemoteAccess.property.sourceSecurityGroups"></a>

- *Type:* `string`[]

---


### EKSResponsesDescribeNodegroupNodegroupResources <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupResources"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupResources.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeNodegroupNodegroupResources(__scope: Construct, __resources: string[], __input: EksDescribeNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeNodegroupRequest`](#aws-cdk-sdk.eks.EksDescribeNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupResources.property.autoScalingGroups"></a>

- *Type:* [`aws-cdk-sdk.eks.EksAutoScalingGroup`](#aws-cdk-sdk.eks.EksAutoScalingGroup)[]

---

##### `remoteAccessSecurityGroup`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupResources.property.remoteAccessSecurityGroup"></a>

- *Type:* `string`

---


### EKSResponsesDescribeNodegroupNodegroupScalingConfig <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupScalingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupScalingConfig.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeNodegroupNodegroupScalingConfig(__scope: Construct, __resources: string[], __input: EksDescribeNodegroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupScalingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupScalingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupScalingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeNodegroupRequest`](#aws-cdk-sdk.eks.EksDescribeNodegroupRequest)

---



#### Properties <a name="Properties"></a>

##### `desiredSize`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupScalingConfig.property.desiredSize"></a>

- *Type:* `number`

---

##### `maxSize`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupScalingConfig.property.maxSize"></a>

- *Type:* `number`

---

##### `minSize`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeNodegroupNodegroupScalingConfig.property.minSize"></a>

- *Type:* `number`

---


### EKSResponsesDescribeUpdate <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdate"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdate.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeUpdate(__scope: Construct, __resources: string[], __input: EksDescribeUpdateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeUpdateRequest`](#aws-cdk-sdk.eks.EksDescribeUpdateRequest)

---



#### Properties <a name="Properties"></a>

##### `update`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdate.property.update"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesDescribeUpdateUpdate`](#aws-cdk-sdk.eks.EKSResponsesDescribeUpdateUpdate)

---


### EKSResponsesDescribeUpdateUpdate <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdateUpdate"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdateUpdate.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesDescribeUpdateUpdate(__scope: Construct, __resources: string[], __input: EksDescribeUpdateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdateUpdate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdateUpdate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdateUpdate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksDescribeUpdateRequest`](#aws-cdk-sdk.eks.EksDescribeUpdateRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdateUpdate.property.createdAt"></a>

- *Type:* `string`

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdateUpdate.property.errors"></a>

- *Type:* [`aws-cdk-sdk.eks.EksErrorDetail`](#aws-cdk-sdk.eks.EksErrorDetail)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdateUpdate.property.id"></a>

- *Type:* `string`

---

##### `params`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdateUpdate.property.params"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateParam`](#aws-cdk-sdk.eks.EksUpdateParam)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdateUpdate.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesDescribeUpdateUpdate.property.type"></a>

- *Type:* `string`

---


### EKSResponsesListClusters <a name="aws-cdk-sdk.eks.EKSResponsesListClusters"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesListClusters.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesListClusters(__scope: Construct, __resources: string[], __input: EksListClustersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListClusters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListClusters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListClusters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksListClustersRequest`](#aws-cdk-sdk.eks.EksListClustersRequest)

---



#### Properties <a name="Properties"></a>

##### `clusters`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListClusters.property.clusters"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListClusters.property.nextToken"></a>

- *Type:* `string`

---


### EKSResponsesListFargateProfiles <a name="aws-cdk-sdk.eks.EKSResponsesListFargateProfiles"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesListFargateProfiles.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesListFargateProfiles(__scope: Construct, __resources: string[], __input: EksListFargateProfilesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListFargateProfiles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListFargateProfiles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListFargateProfiles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksListFargateProfilesRequest`](#aws-cdk-sdk.eks.EksListFargateProfilesRequest)

---



#### Properties <a name="Properties"></a>

##### `fargateProfileNames`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListFargateProfiles.property.fargateProfileNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListFargateProfiles.property.nextToken"></a>

- *Type:* `string`

---


### EKSResponsesListNodegroups <a name="aws-cdk-sdk.eks.EKSResponsesListNodegroups"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesListNodegroups.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesListNodegroups(__scope: Construct, __resources: string[], __input: EksListNodegroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListNodegroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListNodegroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListNodegroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksListNodegroupsRequest`](#aws-cdk-sdk.eks.EksListNodegroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListNodegroups.property.nextToken"></a>

- *Type:* `string`

---

##### `nodegroups`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListNodegroups.property.nodegroups"></a>

- *Type:* `string`[]

---


### EKSResponsesListTagsForResource <a name="aws-cdk-sdk.eks.EKSResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesListTagsForResource.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: EksListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksListTagsForResourceRequest`](#aws-cdk-sdk.eks.EksListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### EKSResponsesListUpdates <a name="aws-cdk-sdk.eks.EKSResponsesListUpdates"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesListUpdates.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesListUpdates(__scope: Construct, __resources: string[], __input: EksListUpdatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListUpdates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListUpdates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListUpdates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksListUpdatesRequest`](#aws-cdk-sdk.eks.EksListUpdatesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListUpdates.property.nextToken"></a>

- *Type:* `string`

---

##### `updateIds`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesListUpdates.property.updateIds"></a>

- *Type:* `string`[]

---


### EKSResponsesUpdateClusterConfig <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfig"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfig.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesUpdateClusterConfig(__scope: Construct, __resources: string[], __input: EksUpdateClusterConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateClusterConfigRequest`](#aws-cdk-sdk.eks.EksUpdateClusterConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `update`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfig.property.update"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfigUpdate`](#aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfigUpdate)

---


### EKSResponsesUpdateClusterConfigUpdate <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfigUpdate"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfigUpdate.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesUpdateClusterConfigUpdate(__scope: Construct, __resources: string[], __input: EksUpdateClusterConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfigUpdate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfigUpdate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfigUpdate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateClusterConfigRequest`](#aws-cdk-sdk.eks.EksUpdateClusterConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfigUpdate.property.createdAt"></a>

- *Type:* `string`

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfigUpdate.property.errors"></a>

- *Type:* [`aws-cdk-sdk.eks.EksErrorDetail`](#aws-cdk-sdk.eks.EksErrorDetail)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfigUpdate.property.id"></a>

- *Type:* `string`

---

##### `params`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfigUpdate.property.params"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateParam`](#aws-cdk-sdk.eks.EksUpdateParam)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfigUpdate.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterConfigUpdate.property.type"></a>

- *Type:* `string`

---


### EKSResponsesUpdateClusterVersion <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersion"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersion.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesUpdateClusterVersion(__scope: Construct, __resources: string[], __input: EksUpdateClusterVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateClusterVersionRequest`](#aws-cdk-sdk.eks.EksUpdateClusterVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `update`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersion.property.update"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersionUpdate`](#aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersionUpdate)

---


### EKSResponsesUpdateClusterVersionUpdate <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersionUpdate"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersionUpdate.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesUpdateClusterVersionUpdate(__scope: Construct, __resources: string[], __input: EksUpdateClusterVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersionUpdate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersionUpdate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersionUpdate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateClusterVersionRequest`](#aws-cdk-sdk.eks.EksUpdateClusterVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersionUpdate.property.createdAt"></a>

- *Type:* `string`

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersionUpdate.property.errors"></a>

- *Type:* [`aws-cdk-sdk.eks.EksErrorDetail`](#aws-cdk-sdk.eks.EksErrorDetail)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersionUpdate.property.id"></a>

- *Type:* `string`

---

##### `params`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersionUpdate.property.params"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateParam`](#aws-cdk-sdk.eks.EksUpdateParam)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersionUpdate.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateClusterVersionUpdate.property.type"></a>

- *Type:* `string`

---


### EKSResponsesUpdateNodegroupConfig <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfig"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfig.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesUpdateNodegroupConfig(__scope: Construct, __resources: string[], __input: EksUpdateNodegroupConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateNodegroupConfigRequest`](#aws-cdk-sdk.eks.EksUpdateNodegroupConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `update`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfig.property.update"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfigUpdate`](#aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfigUpdate)

---


### EKSResponsesUpdateNodegroupConfigUpdate <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfigUpdate"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfigUpdate.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesUpdateNodegroupConfigUpdate(__scope: Construct, __resources: string[], __input: EksUpdateNodegroupConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfigUpdate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfigUpdate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfigUpdate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateNodegroupConfigRequest`](#aws-cdk-sdk.eks.EksUpdateNodegroupConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfigUpdate.property.createdAt"></a>

- *Type:* `string`

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfigUpdate.property.errors"></a>

- *Type:* [`aws-cdk-sdk.eks.EksErrorDetail`](#aws-cdk-sdk.eks.EksErrorDetail)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfigUpdate.property.id"></a>

- *Type:* `string`

---

##### `params`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfigUpdate.property.params"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateParam`](#aws-cdk-sdk.eks.EksUpdateParam)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfigUpdate.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupConfigUpdate.property.type"></a>

- *Type:* `string`

---


### EKSResponsesUpdateNodegroupVersion <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersion"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersion.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesUpdateNodegroupVersion(__scope: Construct, __resources: string[], __input: EksUpdateNodegroupVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateNodegroupVersionRequest`](#aws-cdk-sdk.eks.EksUpdateNodegroupVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `update`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersion.property.update"></a>

- *Type:* [`aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersionUpdate`](#aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersionUpdate)

---


### EKSResponsesUpdateNodegroupVersionUpdate <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersionUpdate"></a>

#### Initializer <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersionUpdate.Initializer"></a>

```typescript
import { eks } from 'aws-cdk-sdk'

new eks.EKSResponsesUpdateNodegroupVersionUpdate(__scope: Construct, __resources: string[], __input: EksUpdateNodegroupVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersionUpdate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersionUpdate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersionUpdate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateNodegroupVersionRequest`](#aws-cdk-sdk.eks.EksUpdateNodegroupVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersionUpdate.property.createdAt"></a>

- *Type:* `string`

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersionUpdate.property.errors"></a>

- *Type:* [`aws-cdk-sdk.eks.EksErrorDetail`](#aws-cdk-sdk.eks.EksErrorDetail)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersionUpdate.property.id"></a>

- *Type:* `string`

---

##### `params`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersionUpdate.property.params"></a>

- *Type:* [`aws-cdk-sdk.eks.EksUpdateParam`](#aws-cdk-sdk.eks.EksUpdateParam)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersionUpdate.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.eks.EKSResponsesUpdateNodegroupVersionUpdate.property.type"></a>

- *Type:* `string`

---



