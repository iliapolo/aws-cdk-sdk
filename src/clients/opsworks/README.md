# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### OpsWorksClient <a name="aws-cdk-sdk.opsworks.OpsWorksClient"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksClient.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `assignInstance` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.assignInstance"></a>

```typescript
public assignInstance(input: OpsWorksAssignInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksAssignInstanceRequest`](#aws-cdk-sdk.opsworks.OpsWorksAssignInstanceRequest)

---

##### `assignVolume` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.assignVolume"></a>

```typescript
public assignVolume(input: OpsWorksAssignVolumeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksAssignVolumeRequest`](#aws-cdk-sdk.opsworks.OpsWorksAssignVolumeRequest)

---

##### `associateElasticIp` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.associateElasticIp"></a>

```typescript
public associateElasticIp(input: OpsWorksAssociateElasticIpRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksAssociateElasticIpRequest`](#aws-cdk-sdk.opsworks.OpsWorksAssociateElasticIpRequest)

---

##### `attachElasticLoadBalancer` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.attachElasticLoadBalancer"></a>

```typescript
public attachElasticLoadBalancer(input: OpsWorksAttachElasticLoadBalancerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksAttachElasticLoadBalancerRequest`](#aws-cdk-sdk.opsworks.OpsWorksAttachElasticLoadBalancerRequest)

---

##### `cloneStack` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.cloneStack"></a>

```typescript
public cloneStack(input: OpsWorksCloneStackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest`](#aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest)

---

##### `createApp` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.createApp"></a>

```typescript
public createApp(input: OpsWorksCreateAppRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest`](#aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest)

---

##### `createDeployment` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.createDeployment"></a>

```typescript
public createDeployment(input: OpsWorksCreateDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCreateDeploymentRequest`](#aws-cdk-sdk.opsworks.OpsWorksCreateDeploymentRequest)

---

##### `createInstance` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.createInstance"></a>

```typescript
public createInstance(input: OpsWorksCreateInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest`](#aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest)

---

##### `createLayer` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.createLayer"></a>

```typescript
public createLayer(input: OpsWorksCreateLayerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest`](#aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest)

---

##### `createStack` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.createStack"></a>

```typescript
public createStack(input: OpsWorksCreateStackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest`](#aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest)

---

##### `createUserProfile` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.createUserProfile"></a>

```typescript
public createUserProfile(input: OpsWorksCreateUserProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCreateUserProfileRequest`](#aws-cdk-sdk.opsworks.OpsWorksCreateUserProfileRequest)

---

##### `deleteApp` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.deleteApp"></a>

```typescript
public deleteApp(input: OpsWorksDeleteAppRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDeleteAppRequest`](#aws-cdk-sdk.opsworks.OpsWorksDeleteAppRequest)

---

##### `deleteInstance` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.deleteInstance"></a>

```typescript
public deleteInstance(input: OpsWorksDeleteInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDeleteInstanceRequest`](#aws-cdk-sdk.opsworks.OpsWorksDeleteInstanceRequest)

---

##### `deleteLayer` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.deleteLayer"></a>

```typescript
public deleteLayer(input: OpsWorksDeleteLayerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDeleteLayerRequest`](#aws-cdk-sdk.opsworks.OpsWorksDeleteLayerRequest)

---

##### `deleteStack` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.deleteStack"></a>

```typescript
public deleteStack(input: OpsWorksDeleteStackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDeleteStackRequest`](#aws-cdk-sdk.opsworks.OpsWorksDeleteStackRequest)

---

##### `deleteUserProfile` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.deleteUserProfile"></a>

```typescript
public deleteUserProfile(input: OpsWorksDeleteUserProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDeleteUserProfileRequest`](#aws-cdk-sdk.opsworks.OpsWorksDeleteUserProfileRequest)

---

##### `deregisterEcsCluster` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.deregisterEcsCluster"></a>

```typescript
public deregisterEcsCluster(input: OpsWorksDeregisterEcsClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDeregisterEcsClusterRequest`](#aws-cdk-sdk.opsworks.OpsWorksDeregisterEcsClusterRequest)

---

##### `deregisterElasticIp` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.deregisterElasticIp"></a>

```typescript
public deregisterElasticIp(input: OpsWorksDeregisterElasticIpRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDeregisterElasticIpRequest`](#aws-cdk-sdk.opsworks.OpsWorksDeregisterElasticIpRequest)

---

##### `deregisterInstance` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.deregisterInstance"></a>

```typescript
public deregisterInstance(input: OpsWorksDeregisterInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDeregisterInstanceRequest`](#aws-cdk-sdk.opsworks.OpsWorksDeregisterInstanceRequest)

---

##### `deregisterRdsDbInstance` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.deregisterRdsDbInstance"></a>

```typescript
public deregisterRdsDbInstance(input: OpsWorksDeregisterRdsDbInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDeregisterRdsDbInstanceRequest`](#aws-cdk-sdk.opsworks.OpsWorksDeregisterRdsDbInstanceRequest)

---

##### `deregisterVolume` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.deregisterVolume"></a>

```typescript
public deregisterVolume(input: OpsWorksDeregisterVolumeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDeregisterVolumeRequest`](#aws-cdk-sdk.opsworks.OpsWorksDeregisterVolumeRequest)

---

##### `describeAgentVersions` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeAgentVersions"></a>

```typescript
public describeAgentVersions(input: OpsWorksDescribeAgentVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeAgentVersionsRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeAgentVersionsRequest)

---

##### `describeApps` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeApps"></a>

```typescript
public describeApps(input: OpsWorksDescribeAppsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeAppsRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeAppsRequest)

---

##### `describeCommands` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeCommands"></a>

```typescript
public describeCommands(input: OpsWorksDescribeCommandsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeCommandsRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeCommandsRequest)

---

##### `describeDeployments` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeDeployments"></a>

```typescript
public describeDeployments(input: OpsWorksDescribeDeploymentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeDeploymentsRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeDeploymentsRequest)

---

##### `describeEcsClusters` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeEcsClusters"></a>

```typescript
public describeEcsClusters(input: OpsWorksDescribeEcsClustersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeEcsClustersRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeEcsClustersRequest)

---

##### `describeElasticIps` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeElasticIps"></a>

```typescript
public describeElasticIps(input: OpsWorksDescribeElasticIpsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeElasticIpsRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeElasticIpsRequest)

---

##### `describeElasticLoadBalancers` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeElasticLoadBalancers"></a>

```typescript
public describeElasticLoadBalancers(input: OpsWorksDescribeElasticLoadBalancersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeElasticLoadBalancersRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeElasticLoadBalancersRequest)

---

##### `describeInstances` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeInstances"></a>

```typescript
public describeInstances(input: OpsWorksDescribeInstancesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeInstancesRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeInstancesRequest)

---

##### `describeLayers` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeLayers"></a>

```typescript
public describeLayers(input: OpsWorksDescribeLayersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeLayersRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeLayersRequest)

---

##### `describeLoadBasedAutoScaling` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeLoadBasedAutoScaling"></a>

```typescript
public describeLoadBasedAutoScaling(input: OpsWorksDescribeLoadBasedAutoScalingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeLoadBasedAutoScalingRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeLoadBasedAutoScalingRequest)

---

##### `describeMyUserProfile` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeMyUserProfile"></a>

```typescript
public describeMyUserProfile()
```

##### `describeOperatingSystems` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeOperatingSystems"></a>

```typescript
public describeOperatingSystems()
```

##### `describePermissions` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describePermissions"></a>

```typescript
public describePermissions(input: OpsWorksDescribePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribePermissionsRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribePermissionsRequest)

---

##### `describeRaidArrays` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeRaidArrays"></a>

```typescript
public describeRaidArrays(input: OpsWorksDescribeRaidArraysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeRaidArraysRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeRaidArraysRequest)

---

##### `describeRdsDbInstances` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeRdsDbInstances"></a>

```typescript
public describeRdsDbInstances(input: OpsWorksDescribeRdsDbInstancesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeRdsDbInstancesRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeRdsDbInstancesRequest)

---

##### `describeServiceErrors` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeServiceErrors"></a>

```typescript
public describeServiceErrors(input: OpsWorksDescribeServiceErrorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeServiceErrorsRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeServiceErrorsRequest)

---

##### `describeStackProvisioningParameters` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeStackProvisioningParameters"></a>

```typescript
public describeStackProvisioningParameters(input: OpsWorksDescribeStackProvisioningParametersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeStackProvisioningParametersRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeStackProvisioningParametersRequest)

---

##### `describeStacks` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeStacks"></a>

```typescript
public describeStacks(input: OpsWorksDescribeStacksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeStacksRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeStacksRequest)

---

##### `describeStackSummary` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeStackSummary"></a>

```typescript
public describeStackSummary(input: OpsWorksDescribeStackSummaryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeStackSummaryRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeStackSummaryRequest)

---

##### `describeTimeBasedAutoScaling` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeTimeBasedAutoScaling"></a>

```typescript
public describeTimeBasedAutoScaling(input: OpsWorksDescribeTimeBasedAutoScalingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeTimeBasedAutoScalingRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeTimeBasedAutoScalingRequest)

---

##### `describeUserProfiles` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeUserProfiles"></a>

```typescript
public describeUserProfiles(input: OpsWorksDescribeUserProfilesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeUserProfilesRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeUserProfilesRequest)

---

##### `describeVolumes` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.describeVolumes"></a>

```typescript
public describeVolumes(input: OpsWorksDescribeVolumesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeVolumesRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeVolumesRequest)

---

##### `detachElasticLoadBalancer` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.detachElasticLoadBalancer"></a>

```typescript
public detachElasticLoadBalancer(input: OpsWorksDetachElasticLoadBalancerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDetachElasticLoadBalancerRequest`](#aws-cdk-sdk.opsworks.OpsWorksDetachElasticLoadBalancerRequest)

---

##### `disassociateElasticIp` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.disassociateElasticIp"></a>

```typescript
public disassociateElasticIp(input: OpsWorksDisassociateElasticIpRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDisassociateElasticIpRequest`](#aws-cdk-sdk.opsworks.OpsWorksDisassociateElasticIpRequest)

---

##### `fetchHostnameSuggestion` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.fetchHostnameSuggestion"></a>

```typescript
public fetchHostnameSuggestion(input: OpsWorksGetHostnameSuggestionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksGetHostnameSuggestionRequest`](#aws-cdk-sdk.opsworks.OpsWorksGetHostnameSuggestionRequest)

---

##### `grantAccess` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.grantAccess"></a>

```typescript
public grantAccess(input: OpsWorksGrantAccessRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksGrantAccessRequest`](#aws-cdk-sdk.opsworks.OpsWorksGrantAccessRequest)

---

##### `listTags` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.listTags"></a>

```typescript
public listTags(input: OpsWorksListTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksListTagsRequest`](#aws-cdk-sdk.opsworks.OpsWorksListTagsRequest)

---

##### `putLoadBasedAutoScaling` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.putLoadBasedAutoScaling"></a>

```typescript
public putLoadBasedAutoScaling(input: OpsWorksSetLoadBasedAutoScalingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksSetLoadBasedAutoScalingRequest`](#aws-cdk-sdk.opsworks.OpsWorksSetLoadBasedAutoScalingRequest)

---

##### `putPermission` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.putPermission"></a>

```typescript
public putPermission(input: OpsWorksSetPermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksSetPermissionRequest`](#aws-cdk-sdk.opsworks.OpsWorksSetPermissionRequest)

---

##### `putTimeBasedAutoScaling` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.putTimeBasedAutoScaling"></a>

```typescript
public putTimeBasedAutoScaling(input: OpsWorksSetTimeBasedAutoScalingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksSetTimeBasedAutoScalingRequest`](#aws-cdk-sdk.opsworks.OpsWorksSetTimeBasedAutoScalingRequest)

---

##### `rebootInstance` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.rebootInstance"></a>

```typescript
public rebootInstance(input: OpsWorksRebootInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRebootInstanceRequest`](#aws-cdk-sdk.opsworks.OpsWorksRebootInstanceRequest)

---

##### `registerEcsCluster` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.registerEcsCluster"></a>

```typescript
public registerEcsCluster(input: OpsWorksRegisterEcsClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRegisterEcsClusterRequest`](#aws-cdk-sdk.opsworks.OpsWorksRegisterEcsClusterRequest)

---

##### `registerElasticIp` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.registerElasticIp"></a>

```typescript
public registerElasticIp(input: OpsWorksRegisterElasticIpRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRegisterElasticIpRequest`](#aws-cdk-sdk.opsworks.OpsWorksRegisterElasticIpRequest)

---

##### `registerInstance` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.registerInstance"></a>

```typescript
public registerInstance(input: OpsWorksRegisterInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRegisterInstanceRequest`](#aws-cdk-sdk.opsworks.OpsWorksRegisterInstanceRequest)

---

##### `registerRdsDbInstance` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.registerRdsDbInstance"></a>

```typescript
public registerRdsDbInstance(input: OpsWorksRegisterRdsDbInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRegisterRdsDbInstanceRequest`](#aws-cdk-sdk.opsworks.OpsWorksRegisterRdsDbInstanceRequest)

---

##### `registerVolume` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.registerVolume"></a>

```typescript
public registerVolume(input: OpsWorksRegisterVolumeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRegisterVolumeRequest`](#aws-cdk-sdk.opsworks.OpsWorksRegisterVolumeRequest)

---

##### `startInstance` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.startInstance"></a>

```typescript
public startInstance(input: OpsWorksStartInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksStartInstanceRequest`](#aws-cdk-sdk.opsworks.OpsWorksStartInstanceRequest)

---

##### `startStack` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.startStack"></a>

```typescript
public startStack(input: OpsWorksStartStackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksStartStackRequest`](#aws-cdk-sdk.opsworks.OpsWorksStartStackRequest)

---

##### `stopInstance` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.stopInstance"></a>

```typescript
public stopInstance(input: OpsWorksStopInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksStopInstanceRequest`](#aws-cdk-sdk.opsworks.OpsWorksStopInstanceRequest)

---

##### `stopStack` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.stopStack"></a>

```typescript
public stopStack(input: OpsWorksStopStackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksStopStackRequest`](#aws-cdk-sdk.opsworks.OpsWorksStopStackRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.tagResource"></a>

```typescript
public tagResource(input: OpsWorksTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksTagResourceRequest`](#aws-cdk-sdk.opsworks.OpsWorksTagResourceRequest)

---

##### `unassignInstance` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.unassignInstance"></a>

```typescript
public unassignInstance(input: OpsWorksUnassignInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksUnassignInstanceRequest`](#aws-cdk-sdk.opsworks.OpsWorksUnassignInstanceRequest)

---

##### `unassignVolume` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.unassignVolume"></a>

```typescript
public unassignVolume(input: OpsWorksUnassignVolumeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksUnassignVolumeRequest`](#aws-cdk-sdk.opsworks.OpsWorksUnassignVolumeRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.untagResource"></a>

```typescript
public untagResource(input: OpsWorksUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksUntagResourceRequest`](#aws-cdk-sdk.opsworks.OpsWorksUntagResourceRequest)

---

##### `updateApp` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.updateApp"></a>

```typescript
public updateApp(input: OpsWorksUpdateAppRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksUpdateAppRequest`](#aws-cdk-sdk.opsworks.OpsWorksUpdateAppRequest)

---

##### `updateElasticIp` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.updateElasticIp"></a>

```typescript
public updateElasticIp(input: OpsWorksUpdateElasticIpRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksUpdateElasticIpRequest`](#aws-cdk-sdk.opsworks.OpsWorksUpdateElasticIpRequest)

---

##### `updateInstance` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.updateInstance"></a>

```typescript
public updateInstance(input: OpsWorksUpdateInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksUpdateInstanceRequest`](#aws-cdk-sdk.opsworks.OpsWorksUpdateInstanceRequest)

---

##### `updateLayer` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.updateLayer"></a>

```typescript
public updateLayer(input: OpsWorksUpdateLayerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest`](#aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest)

---

##### `updateMyUserProfile` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.updateMyUserProfile"></a>

```typescript
public updateMyUserProfile(input: OpsWorksUpdateMyUserProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksUpdateMyUserProfileRequest`](#aws-cdk-sdk.opsworks.OpsWorksUpdateMyUserProfileRequest)

---

##### `updateRdsDbInstance` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.updateRdsDbInstance"></a>

```typescript
public updateRdsDbInstance(input: OpsWorksUpdateRdsDbInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksUpdateRdsDbInstanceRequest`](#aws-cdk-sdk.opsworks.OpsWorksUpdateRdsDbInstanceRequest)

---

##### `updateStack` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.updateStack"></a>

```typescript
public updateStack(input: OpsWorksUpdateStackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest`](#aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest)

---

##### `updateUserProfile` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.updateUserProfile"></a>

```typescript
public updateUserProfile(input: OpsWorksUpdateUserProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksUpdateUserProfileRequest`](#aws-cdk-sdk.opsworks.OpsWorksUpdateUserProfileRequest)

---

##### `updateVolume` <a name="aws-cdk-sdk.opsworks.OpsWorksClient.updateVolume"></a>

```typescript
public updateVolume(input: OpsWorksUpdateVolumeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksUpdateVolumeRequest`](#aws-cdk-sdk.opsworks.OpsWorksUpdateVolumeRequest)

---




## Structs <a name="Structs"></a>

### OpsWorksAgentVersion <a name="aws-cdk-sdk.opsworks.OpsWorksAgentVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksAgentVersion: opsworks.OpsWorksAgentVersion = { ... }
```

##### `configurationManager`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAgentVersion.property.configurationManager"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksStackConfigurationManager`](#aws-cdk-sdk.opsworks.OpsWorksStackConfigurationManager)

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAgentVersion.property.version"></a>

- *Type:* `string`

---

### OpsWorksApp <a name="aws-cdk-sdk.opsworks.OpsWorksApp"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksApp: opsworks.OpsWorksApp = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksApp.property.appId"></a>

- *Type:* `string`

---

##### `appSource`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksApp.property.appSource"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksSource`](#aws-cdk-sdk.opsworks.OpsWorksSource)

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksApp.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksApp.property.createdAt"></a>

- *Type:* `string`

---

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksApp.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDataSource`](#aws-cdk-sdk.opsworks.OpsWorksDataSource)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksApp.property.description"></a>

- *Type:* `string`

---

##### `domains`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksApp.property.domains"></a>

- *Type:* `string`[]

---

##### `enableSsl`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksApp.property.enableSsl"></a>

- *Type:* `boolean`

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksApp.property.environment"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksEnvironmentVariable`](#aws-cdk-sdk.opsworks.OpsWorksEnvironmentVariable)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksApp.property.name"></a>

- *Type:* `string`

---

##### `shortname`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksApp.property.shortname"></a>

- *Type:* `string`

---

##### `sslConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksApp.property.sslConfiguration"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksSslConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksSslConfiguration)

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksApp.property.stackId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksApp.property.type"></a>

- *Type:* `string`

---

### OpsWorksAssignInstanceRequest <a name="aws-cdk-sdk.opsworks.OpsWorksAssignInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksAssignInstanceRequest: opsworks.OpsWorksAssignInstanceRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAssignInstanceRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `layerIds`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAssignInstanceRequest.property.layerIds"></a>

- *Type:* `string`[]

---

### OpsWorksAssignVolumeRequest <a name="aws-cdk-sdk.opsworks.OpsWorksAssignVolumeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksAssignVolumeRequest: opsworks.OpsWorksAssignVolumeRequest = { ... }
```

##### `volumeId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAssignVolumeRequest.property.volumeId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAssignVolumeRequest.property.instanceId"></a>

- *Type:* `string`

---

### OpsWorksAssociateElasticIpRequest <a name="aws-cdk-sdk.opsworks.OpsWorksAssociateElasticIpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksAssociateElasticIpRequest: opsworks.OpsWorksAssociateElasticIpRequest = { ... }
```

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAssociateElasticIpRequest.property.elasticIp"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAssociateElasticIpRequest.property.instanceId"></a>

- *Type:* `string`

---

### OpsWorksAttachElasticLoadBalancerRequest <a name="aws-cdk-sdk.opsworks.OpsWorksAttachElasticLoadBalancerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksAttachElasticLoadBalancerRequest: opsworks.OpsWorksAttachElasticLoadBalancerRequest = { ... }
```

##### `elasticLoadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAttachElasticLoadBalancerRequest.property.elasticLoadBalancerName"></a>

- *Type:* `string`

---

##### `layerId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAttachElasticLoadBalancerRequest.property.layerId"></a>

- *Type:* `string`

---

### OpsWorksAutoScalingThresholds <a name="aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksAutoScalingThresholds: opsworks.OpsWorksAutoScalingThresholds = { ... }
```

##### `alarms`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds.property.alarms"></a>

- *Type:* `string`[]

---

##### `cpuThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds.property.cpuThreshold"></a>

- *Type:* `number`

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds.property.ignoreMetricsTime"></a>

- *Type:* `number`

---

##### `instanceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds.property.instanceCount"></a>

- *Type:* `number`

---

##### `loadThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds.property.loadThreshold"></a>

- *Type:* `number`

---

##### `memoryThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds.property.memoryThreshold"></a>

- *Type:* `number`

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds.property.thresholdsWaitTime"></a>

- *Type:* `number`

---

### OpsWorksBlockDeviceMapping <a name="aws-cdk-sdk.opsworks.OpsWorksBlockDeviceMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksBlockDeviceMapping: opsworks.OpsWorksBlockDeviceMapping = { ... }
```

##### `deviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksBlockDeviceMapping.property.deviceName"></a>

- *Type:* `string`

---

##### `ebs`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksBlockDeviceMapping.property.ebs"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksEbsBlockDevice`](#aws-cdk-sdk.opsworks.OpsWorksEbsBlockDevice)

---

##### `noDevice`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksBlockDeviceMapping.property.noDevice"></a>

- *Type:* `string`

---

##### `virtualName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksBlockDeviceMapping.property.virtualName"></a>

- *Type:* `string`

---

### OpsWorksChefConfiguration <a name="aws-cdk-sdk.opsworks.OpsWorksChefConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksChefConfiguration: opsworks.OpsWorksChefConfiguration = { ... }
```

##### `berkshelfVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksChefConfiguration.property.berkshelfVersion"></a>

- *Type:* `string`

---

##### `manageBerkshelf`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksChefConfiguration.property.manageBerkshelf"></a>

- *Type:* `boolean`

---

### OpsWorksCloneStackRequest <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCloneStackRequest: opsworks.OpsWorksCloneStackRequest = { ... }
```

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `sourceStackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.sourceStackId"></a>

- *Type:* `string`

---

##### `agentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.agentVersion"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `chefConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.chefConfiguration"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksChefConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksChefConfiguration)

---

##### `cloneAppIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.cloneAppIds"></a>

- *Type:* `string`[]

---

##### `clonePermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.clonePermissions"></a>

- *Type:* `boolean`

---

##### `configurationManager`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.configurationManager"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksStackConfigurationManager`](#aws-cdk-sdk.opsworks.OpsWorksStackConfigurationManager)

---

##### `customCookbooksSource`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.customCookbooksSource"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksSource`](#aws-cdk-sdk.opsworks.OpsWorksSource)

---

##### `customJson`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.customJson"></a>

- *Type:* `string`

---

##### `defaultAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.defaultAvailabilityZone"></a>

- *Type:* `string`

---

##### `defaultInstanceProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.defaultInstanceProfileArn"></a>

- *Type:* `string`

---

##### `defaultOs`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.defaultOs"></a>

- *Type:* `string`

---

##### `defaultRootDeviceType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.defaultRootDeviceType"></a>

- *Type:* `string`

---

##### `defaultSshKeyName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.defaultSshKeyName"></a>

- *Type:* `string`

---

##### `defaultSubnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.defaultSubnetId"></a>

- *Type:* `string`

---

##### `hostnameTheme`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.hostnameTheme"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.name"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.region"></a>

- *Type:* `string`

---

##### `useCustomCookbooks`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.useCustomCookbooks"></a>

- *Type:* `boolean`

---

##### `useOpsworksSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.useOpsworksSecurityGroups"></a>

- *Type:* `boolean`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest.property.vpcId"></a>

- *Type:* `string`

---

### OpsWorksCloneStackResult <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCloneStackResult: opsworks.OpsWorksCloneStackResult = { ... }
```

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloneStackResult.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksCloudWatchLogsConfiguration <a name="aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCloudWatchLogsConfiguration: opsworks.OpsWorksCloudWatchLogsConfiguration = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsConfiguration.property.enabled"></a>

- *Type:* `boolean`

---

##### `logStreams`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsConfiguration.property.logStreams"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsLogStream`](#aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsLogStream)[]

---

### OpsWorksCloudWatchLogsLogStream <a name="aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsLogStream"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCloudWatchLogsLogStream: opsworks.OpsWorksCloudWatchLogsLogStream = { ... }
```

##### `batchCount`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsLogStream.property.batchCount"></a>

- *Type:* `number`

---

##### `batchSize`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsLogStream.property.batchSize"></a>

- *Type:* `number`

---

##### `bufferDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsLogStream.property.bufferDuration"></a>

- *Type:* `number`

---

##### `datetimeFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsLogStream.property.datetimeFormat"></a>

- *Type:* `string`

---

##### `encoding`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsLogStream.property.encoding"></a>

- *Type:* `string`

---

##### `file`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsLogStream.property.file"></a>

- *Type:* `string`

---

##### `fileFingerprintLines`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsLogStream.property.fileFingerprintLines"></a>

- *Type:* `string`

---

##### `initialPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsLogStream.property.initialPosition"></a>

- *Type:* `string`

---

##### `logGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsLogStream.property.logGroupName"></a>

- *Type:* `string`

---

##### `multiLineStartPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsLogStream.property.multiLineStartPattern"></a>

- *Type:* `string`

---

##### `timeZone`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsLogStream.property.timeZone"></a>

- *Type:* `string`

---

### OpsWorksCommand <a name="aws-cdk-sdk.opsworks.OpsWorksCommand"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCommand: opsworks.OpsWorksCommand = { ... }
```

##### `acknowledgedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCommand.property.acknowledgedAt"></a>

- *Type:* `string`

---

##### `commandId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCommand.property.commandId"></a>

- *Type:* `string`

---

##### `completedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCommand.property.completedAt"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCommand.property.createdAt"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCommand.property.deploymentId"></a>

- *Type:* `string`

---

##### `exitCode`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCommand.property.exitCode"></a>

- *Type:* `number`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCommand.property.instanceId"></a>

- *Type:* `string`

---

##### `logUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCommand.property.logUrl"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCommand.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCommand.property.type"></a>

- *Type:* `string`

---

### OpsWorksCreateAppRequest <a name="aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCreateAppRequest: opsworks.OpsWorksCreateAppRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest.property.name"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest.property.stackId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest.property.type"></a>

- *Type:* `string`

---

##### `appSource`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest.property.appSource"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksSource`](#aws-cdk-sdk.opsworks.OpsWorksSource)

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDataSource`](#aws-cdk-sdk.opsworks.OpsWorksDataSource)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest.property.description"></a>

- *Type:* `string`

---

##### `domains`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest.property.domains"></a>

- *Type:* `string`[]

---

##### `enableSsl`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest.property.enableSsl"></a>

- *Type:* `boolean`

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest.property.environment"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksEnvironmentVariable`](#aws-cdk-sdk.opsworks.OpsWorksEnvironmentVariable)[]

---

##### `shortname`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest.property.shortname"></a>

- *Type:* `string`

---

##### `sslConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest.property.sslConfiguration"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksSslConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksSslConfiguration)

---

### OpsWorksCreateAppResult <a name="aws-cdk-sdk.opsworks.OpsWorksCreateAppResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCreateAppResult: opsworks.OpsWorksCreateAppResult = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateAppResult.property.appId"></a>

- *Type:* `string`

---

### OpsWorksCreateDeploymentRequest <a name="aws-cdk-sdk.opsworks.OpsWorksCreateDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCreateDeploymentRequest: opsworks.OpsWorksCreateDeploymentRequest = { ... }
```

##### `command`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateDeploymentRequest.property.command"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDeploymentCommand`](#aws-cdk-sdk.opsworks.OpsWorksDeploymentCommand)

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateDeploymentRequest.property.stackId"></a>

- *Type:* `string`

---

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateDeploymentRequest.property.appId"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateDeploymentRequest.property.comment"></a>

- *Type:* `string`

---

##### `customJson`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateDeploymentRequest.property.customJson"></a>

- *Type:* `string`

---

##### `instanceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateDeploymentRequest.property.instanceIds"></a>

- *Type:* `string`[]

---

##### `layerIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateDeploymentRequest.property.layerIds"></a>

- *Type:* `string`[]

---

### OpsWorksCreateDeploymentResult <a name="aws-cdk-sdk.opsworks.OpsWorksCreateDeploymentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCreateDeploymentResult: opsworks.OpsWorksCreateDeploymentResult = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateDeploymentResult.property.deploymentId"></a>

- *Type:* `string`

---

### OpsWorksCreateInstanceRequest <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCreateInstanceRequest: opsworks.OpsWorksCreateInstanceRequest = { ... }
```

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.instanceType"></a>

- *Type:* `string`

---

##### `layerIds`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.layerIds"></a>

- *Type:* `string`[]

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.stackId"></a>

- *Type:* `string`

---

##### `agentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.agentVersion"></a>

- *Type:* `string`

---

##### `amiId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.amiId"></a>

- *Type:* `string`

---

##### `architecture`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.architecture"></a>

- *Type:* `string`

---

##### `autoScalingType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.autoScalingType"></a>

- *Type:* `string`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.availabilityZone"></a>

- *Type:* `string`

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.blockDeviceMappings"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksBlockDeviceMapping`](#aws-cdk-sdk.opsworks.OpsWorksBlockDeviceMapping)[]

---

##### `ebsOptimized`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.ebsOptimized"></a>

- *Type:* `boolean`

---

##### `hostname`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.hostname"></a>

- *Type:* `string`

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.installUpdatesOnBoot"></a>

- *Type:* `boolean`

---

##### `os`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.os"></a>

- *Type:* `string`

---

##### `rootDeviceType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.rootDeviceType"></a>

- *Type:* `string`

---

##### `sshKeyName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.sshKeyName"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.subnetId"></a>

- *Type:* `string`

---

##### `tenancy`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.tenancy"></a>

- *Type:* `string`

---

##### `virtualizationType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest.property.virtualizationType"></a>

- *Type:* `string`

---

### OpsWorksCreateInstanceResult <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCreateInstanceResult: opsworks.OpsWorksCreateInstanceResult = { ... }
```

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateInstanceResult.property.instanceId"></a>

- *Type:* `string`

---

### OpsWorksCreateLayerRequest <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCreateLayerRequest: opsworks.OpsWorksCreateLayerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.name"></a>

- *Type:* `string`

---

##### `shortname`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.shortname"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.stackId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.type"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.autoAssignElasticIps"></a>

- *Type:* `boolean`

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.autoAssignPublicIps"></a>

- *Type:* `boolean`

---

##### `cloudWatchLogsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.cloudWatchLogsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsConfiguration)

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.customInstanceProfileArn"></a>

- *Type:* `string`

---

##### `customJson`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.customJson"></a>

- *Type:* `string`

---

##### `customRecipes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.customRecipes"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRecipes`](#aws-cdk-sdk.opsworks.OpsWorksRecipes)

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.customSecurityGroupIds"></a>

- *Type:* `string`[]

---

##### `enableAutoHealing`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.enableAutoHealing"></a>

- *Type:* `boolean`

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.installUpdatesOnBoot"></a>

- *Type:* `boolean`

---

##### `lifecycleEventConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.lifecycleEventConfiguration"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksLifecycleEventConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksLifecycleEventConfiguration)

---

##### `packages`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.packages"></a>

- *Type:* `string`[]

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.useEbsOptimizedInstances"></a>

- *Type:* `boolean`

---

##### `volumeConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest.property.volumeConfigurations"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksVolumeConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksVolumeConfiguration)[]

---

### OpsWorksCreateLayerResult <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCreateLayerResult: opsworks.OpsWorksCreateLayerResult = { ... }
```

##### `layerId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateLayerResult.property.layerId"></a>

- *Type:* `string`

---

### OpsWorksCreateStackRequest <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCreateStackRequest: opsworks.OpsWorksCreateStackRequest = { ... }
```

##### `defaultInstanceProfileArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.defaultInstanceProfileArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.name"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.region"></a>

- *Type:* `string`

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `agentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.agentVersion"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `chefConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.chefConfiguration"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksChefConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksChefConfiguration)

---

##### `configurationManager`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.configurationManager"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksStackConfigurationManager`](#aws-cdk-sdk.opsworks.OpsWorksStackConfigurationManager)

---

##### `customCookbooksSource`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.customCookbooksSource"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksSource`](#aws-cdk-sdk.opsworks.OpsWorksSource)

---

##### `customJson`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.customJson"></a>

- *Type:* `string`

---

##### `defaultAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.defaultAvailabilityZone"></a>

- *Type:* `string`

---

##### `defaultOs`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.defaultOs"></a>

- *Type:* `string`

---

##### `defaultRootDeviceType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.defaultRootDeviceType"></a>

- *Type:* `string`

---

##### `defaultSshKeyName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.defaultSshKeyName"></a>

- *Type:* `string`

---

##### `defaultSubnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.defaultSubnetId"></a>

- *Type:* `string`

---

##### `hostnameTheme`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.hostnameTheme"></a>

- *Type:* `string`

---

##### `useCustomCookbooks`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.useCustomCookbooks"></a>

- *Type:* `boolean`

---

##### `useOpsworksSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.useOpsworksSecurityGroups"></a>

- *Type:* `boolean`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest.property.vpcId"></a>

- *Type:* `string`

---

### OpsWorksCreateStackResult <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCreateStackResult: opsworks.OpsWorksCreateStackResult = { ... }
```

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateStackResult.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksCreateUserProfileRequest <a name="aws-cdk-sdk.opsworks.OpsWorksCreateUserProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCreateUserProfileRequest: opsworks.OpsWorksCreateUserProfileRequest = { ... }
```

##### `iamUserArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateUserProfileRequest.property.iamUserArn"></a>

- *Type:* `string`

---

##### `allowSelfManagement`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateUserProfileRequest.property.allowSelfManagement"></a>

- *Type:* `boolean`

---

##### `sshPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateUserProfileRequest.property.sshPublicKey"></a>

- *Type:* `string`

---

##### `sshUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateUserProfileRequest.property.sshUsername"></a>

- *Type:* `string`

---

### OpsWorksCreateUserProfileResult <a name="aws-cdk-sdk.opsworks.OpsWorksCreateUserProfileResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksCreateUserProfileResult: opsworks.OpsWorksCreateUserProfileResult = { ... }
```

##### `iamUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksCreateUserProfileResult.property.iamUserArn"></a>

- *Type:* `string`

---

### OpsWorksDataSource <a name="aws-cdk-sdk.opsworks.OpsWorksDataSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDataSource: opsworks.OpsWorksDataSource = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDataSource.property.arn"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDataSource.property.databaseName"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDataSource.property.type"></a>

- *Type:* `string`

---

### OpsWorksDeleteAppRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDeleteAppRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDeleteAppRequest: opsworks.OpsWorksDeleteAppRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeleteAppRequest.property.appId"></a>

- *Type:* `string`

---

### OpsWorksDeleteInstanceRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDeleteInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDeleteInstanceRequest: opsworks.OpsWorksDeleteInstanceRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeleteInstanceRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `deleteElasticIp`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeleteInstanceRequest.property.deleteElasticIp"></a>

- *Type:* `boolean`

---

##### `deleteVolumes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeleteInstanceRequest.property.deleteVolumes"></a>

- *Type:* `boolean`

---

### OpsWorksDeleteLayerRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDeleteLayerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDeleteLayerRequest: opsworks.OpsWorksDeleteLayerRequest = { ... }
```

##### `layerId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeleteLayerRequest.property.layerId"></a>

- *Type:* `string`

---

### OpsWorksDeleteStackRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDeleteStackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDeleteStackRequest: opsworks.OpsWorksDeleteStackRequest = { ... }
```

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeleteStackRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksDeleteUserProfileRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDeleteUserProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDeleteUserProfileRequest: opsworks.OpsWorksDeleteUserProfileRequest = { ... }
```

##### `iamUserArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeleteUserProfileRequest.property.iamUserArn"></a>

- *Type:* `string`

---

### OpsWorksDeployment <a name="aws-cdk-sdk.opsworks.OpsWorksDeployment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDeployment: opsworks.OpsWorksDeployment = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeployment.property.appId"></a>

- *Type:* `string`

---

##### `command`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeployment.property.command"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDeploymentCommand`](#aws-cdk-sdk.opsworks.OpsWorksDeploymentCommand)

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeployment.property.comment"></a>

- *Type:* `string`

---

##### `completedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeployment.property.completedAt"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeployment.property.createdAt"></a>

- *Type:* `string`

---

##### `customJson`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeployment.property.customJson"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeployment.property.deploymentId"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeployment.property.duration"></a>

- *Type:* `number`

---

##### `iamUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeployment.property.iamUserArn"></a>

- *Type:* `string`

---

##### `instanceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeployment.property.instanceIds"></a>

- *Type:* `string`[]

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeployment.property.stackId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeployment.property.status"></a>

- *Type:* `string`

---

### OpsWorksDeploymentCommand <a name="aws-cdk-sdk.opsworks.OpsWorksDeploymentCommand"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDeploymentCommand: opsworks.OpsWorksDeploymentCommand = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeploymentCommand.property.name"></a>

- *Type:* `string`

---

##### `args`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeploymentCommand.property.args"></a>

- *Type:* {[ key: string ]: `string`[]}

---

### OpsWorksDeregisterEcsClusterRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDeregisterEcsClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDeregisterEcsClusterRequest: opsworks.OpsWorksDeregisterEcsClusterRequest = { ... }
```

##### `ecsClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeregisterEcsClusterRequest.property.ecsClusterArn"></a>

- *Type:* `string`

---

### OpsWorksDeregisterElasticIpRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDeregisterElasticIpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDeregisterElasticIpRequest: opsworks.OpsWorksDeregisterElasticIpRequest = { ... }
```

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeregisterElasticIpRequest.property.elasticIp"></a>

- *Type:* `string`

---

### OpsWorksDeregisterInstanceRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDeregisterInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDeregisterInstanceRequest: opsworks.OpsWorksDeregisterInstanceRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeregisterInstanceRequest.property.instanceId"></a>

- *Type:* `string`

---

### OpsWorksDeregisterRdsDbInstanceRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDeregisterRdsDbInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDeregisterRdsDbInstanceRequest: opsworks.OpsWorksDeregisterRdsDbInstanceRequest = { ... }
```

##### `rdsDbInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeregisterRdsDbInstanceRequest.property.rdsDbInstanceArn"></a>

- *Type:* `string`

---

### OpsWorksDeregisterVolumeRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDeregisterVolumeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDeregisterVolumeRequest: opsworks.OpsWorksDeregisterVolumeRequest = { ... }
```

##### `volumeId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDeregisterVolumeRequest.property.volumeId"></a>

- *Type:* `string`

---

### OpsWorksDescribeAgentVersionsRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeAgentVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeAgentVersionsRequest: opsworks.OpsWorksDescribeAgentVersionsRequest = { ... }
```

##### `configurationManager`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeAgentVersionsRequest.property.configurationManager"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksStackConfigurationManager`](#aws-cdk-sdk.opsworks.OpsWorksStackConfigurationManager)

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeAgentVersionsRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksDescribeAgentVersionsResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeAgentVersionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeAgentVersionsResult: opsworks.OpsWorksDescribeAgentVersionsResult = { ... }
```

##### `agentVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeAgentVersionsResult.property.agentVersions"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksAgentVersion`](#aws-cdk-sdk.opsworks.OpsWorksAgentVersion)[]

---

### OpsWorksDescribeAppsRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeAppsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeAppsRequest: opsworks.OpsWorksDescribeAppsRequest = { ... }
```

##### `appIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeAppsRequest.property.appIds"></a>

- *Type:* `string`[]

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeAppsRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksDescribeAppsResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeAppsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeAppsResult: opsworks.OpsWorksDescribeAppsResult = { ... }
```

##### `apps`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeAppsResult.property.apps"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksApp`](#aws-cdk-sdk.opsworks.OpsWorksApp)[]

---

### OpsWorksDescribeCommandsRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeCommandsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeCommandsRequest: opsworks.OpsWorksDescribeCommandsRequest = { ... }
```

##### `commandIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeCommandsRequest.property.commandIds"></a>

- *Type:* `string`[]

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeCommandsRequest.property.deploymentId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeCommandsRequest.property.instanceId"></a>

- *Type:* `string`

---

### OpsWorksDescribeCommandsResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeCommandsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeCommandsResult: opsworks.OpsWorksDescribeCommandsResult = { ... }
```

##### `commands`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeCommandsResult.property.commands"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCommand`](#aws-cdk-sdk.opsworks.OpsWorksCommand)[]

---

### OpsWorksDescribeDeploymentsRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeDeploymentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeDeploymentsRequest: opsworks.OpsWorksDescribeDeploymentsRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeDeploymentsRequest.property.appId"></a>

- *Type:* `string`

---

##### `deploymentIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeDeploymentsRequest.property.deploymentIds"></a>

- *Type:* `string`[]

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeDeploymentsRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksDescribeDeploymentsResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeDeploymentsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeDeploymentsResult: opsworks.OpsWorksDescribeDeploymentsResult = { ... }
```

##### `deployments`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeDeploymentsResult.property.deployments"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDeployment`](#aws-cdk-sdk.opsworks.OpsWorksDeployment)[]

---

### OpsWorksDescribeEcsClustersRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeEcsClustersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeEcsClustersRequest: opsworks.OpsWorksDescribeEcsClustersRequest = { ... }
```

##### `ecsClusterArns`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeEcsClustersRequest.property.ecsClusterArns"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeEcsClustersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeEcsClustersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeEcsClustersRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksDescribeEcsClustersResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeEcsClustersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeEcsClustersResult: opsworks.OpsWorksDescribeEcsClustersResult = { ... }
```

##### `ecsClusters`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeEcsClustersResult.property.ecsClusters"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksEcsCluster`](#aws-cdk-sdk.opsworks.OpsWorksEcsCluster)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeEcsClustersResult.property.nextToken"></a>

- *Type:* `string`

---

### OpsWorksDescribeElasticIpsRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeElasticIpsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeElasticIpsRequest: opsworks.OpsWorksDescribeElasticIpsRequest = { ... }
```

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeElasticIpsRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `ips`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeElasticIpsRequest.property.ips"></a>

- *Type:* `string`[]

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeElasticIpsRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksDescribeElasticIpsResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeElasticIpsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeElasticIpsResult: opsworks.OpsWorksDescribeElasticIpsResult = { ... }
```

##### `elasticIps`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeElasticIpsResult.property.elasticIps"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksElasticIp`](#aws-cdk-sdk.opsworks.OpsWorksElasticIp)[]

---

### OpsWorksDescribeElasticLoadBalancersRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeElasticLoadBalancersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeElasticLoadBalancersRequest: opsworks.OpsWorksDescribeElasticLoadBalancersRequest = { ... }
```

##### `layerIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeElasticLoadBalancersRequest.property.layerIds"></a>

- *Type:* `string`[]

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeElasticLoadBalancersRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksDescribeElasticLoadBalancersResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeElasticLoadBalancersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeElasticLoadBalancersResult: opsworks.OpsWorksDescribeElasticLoadBalancersResult = { ... }
```

##### `elasticLoadBalancers`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeElasticLoadBalancersResult.property.elasticLoadBalancers"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksElasticLoadBalancer`](#aws-cdk-sdk.opsworks.OpsWorksElasticLoadBalancer)[]

---

### OpsWorksDescribeInstancesRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeInstancesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeInstancesRequest: opsworks.OpsWorksDescribeInstancesRequest = { ... }
```

##### `instanceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeInstancesRequest.property.instanceIds"></a>

- *Type:* `string`[]

---

##### `layerId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeInstancesRequest.property.layerId"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeInstancesRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksDescribeInstancesResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeInstancesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeInstancesResult: opsworks.OpsWorksDescribeInstancesResult = { ... }
```

##### `instances`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeInstancesResult.property.instances"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksInstance`](#aws-cdk-sdk.opsworks.OpsWorksInstance)[]

---

### OpsWorksDescribeLayersRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeLayersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeLayersRequest: opsworks.OpsWorksDescribeLayersRequest = { ... }
```

##### `layerIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeLayersRequest.property.layerIds"></a>

- *Type:* `string`[]

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeLayersRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksDescribeLayersResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeLayersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeLayersResult: opsworks.OpsWorksDescribeLayersResult = { ... }
```

##### `layers`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeLayersResult.property.layers"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksLayer`](#aws-cdk-sdk.opsworks.OpsWorksLayer)[]

---

### OpsWorksDescribeLoadBasedAutoScalingRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeLoadBasedAutoScalingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeLoadBasedAutoScalingRequest: opsworks.OpsWorksDescribeLoadBasedAutoScalingRequest = { ... }
```

##### `layerIds`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeLoadBasedAutoScalingRequest.property.layerIds"></a>

- *Type:* `string`[]

---

### OpsWorksDescribeLoadBasedAutoScalingResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeLoadBasedAutoScalingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeLoadBasedAutoScalingResult: opsworks.OpsWorksDescribeLoadBasedAutoScalingResult = { ... }
```

##### `loadBasedAutoScalingConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeLoadBasedAutoScalingResult.property.loadBasedAutoScalingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksLoadBasedAutoScalingConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksLoadBasedAutoScalingConfiguration)[]

---

### OpsWorksDescribeMyUserProfileResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeMyUserProfileResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeMyUserProfileResult: opsworks.OpsWorksDescribeMyUserProfileResult = { ... }
```

##### `userProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeMyUserProfileResult.property.userProfile"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksSelfUserProfile`](#aws-cdk-sdk.opsworks.OpsWorksSelfUserProfile)

---

### OpsWorksDescribeOperatingSystemsResponse <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeOperatingSystemsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeOperatingSystemsResponse: opsworks.OpsWorksDescribeOperatingSystemsResponse = { ... }
```

##### `operatingSystems`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeOperatingSystemsResponse.property.operatingSystems"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksOperatingSystem`](#aws-cdk-sdk.opsworks.OpsWorksOperatingSystem)[]

---

### OpsWorksDescribePermissionsRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribePermissionsRequest: opsworks.OpsWorksDescribePermissionsRequest = { ... }
```

##### `iamUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribePermissionsRequest.property.iamUserArn"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribePermissionsRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksDescribePermissionsResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribePermissionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribePermissionsResult: opsworks.OpsWorksDescribePermissionsResult = { ... }
```

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribePermissionsResult.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksPermission`](#aws-cdk-sdk.opsworks.OpsWorksPermission)[]

---

### OpsWorksDescribeRaidArraysRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeRaidArraysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeRaidArraysRequest: opsworks.OpsWorksDescribeRaidArraysRequest = { ... }
```

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeRaidArraysRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `raidArrayIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeRaidArraysRequest.property.raidArrayIds"></a>

- *Type:* `string`[]

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeRaidArraysRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksDescribeRaidArraysResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeRaidArraysResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeRaidArraysResult: opsworks.OpsWorksDescribeRaidArraysResult = { ... }
```

##### `raidArrays`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeRaidArraysResult.property.raidArrays"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRaidArray`](#aws-cdk-sdk.opsworks.OpsWorksRaidArray)[]

---

### OpsWorksDescribeRdsDbInstancesRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeRdsDbInstancesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeRdsDbInstancesRequest: opsworks.OpsWorksDescribeRdsDbInstancesRequest = { ... }
```

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeRdsDbInstancesRequest.property.stackId"></a>

- *Type:* `string`

---

##### `rdsDbInstanceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeRdsDbInstancesRequest.property.rdsDbInstanceArns"></a>

- *Type:* `string`[]

---

### OpsWorksDescribeRdsDbInstancesResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeRdsDbInstancesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeRdsDbInstancesResult: opsworks.OpsWorksDescribeRdsDbInstancesResult = { ... }
```

##### `rdsDbInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeRdsDbInstancesResult.property.rdsDbInstances"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRdsDbInstance`](#aws-cdk-sdk.opsworks.OpsWorksRdsDbInstance)[]

---

### OpsWorksDescribeServiceErrorsRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeServiceErrorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeServiceErrorsRequest: opsworks.OpsWorksDescribeServiceErrorsRequest = { ... }
```

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeServiceErrorsRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `serviceErrorIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeServiceErrorsRequest.property.serviceErrorIds"></a>

- *Type:* `string`[]

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeServiceErrorsRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksDescribeServiceErrorsResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeServiceErrorsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeServiceErrorsResult: opsworks.OpsWorksDescribeServiceErrorsResult = { ... }
```

##### `serviceErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeServiceErrorsResult.property.serviceErrors"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksServiceError`](#aws-cdk-sdk.opsworks.OpsWorksServiceError)[]

---

### OpsWorksDescribeStackProvisioningParametersRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeStackProvisioningParametersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeStackProvisioningParametersRequest: opsworks.OpsWorksDescribeStackProvisioningParametersRequest = { ... }
```

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeStackProvisioningParametersRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksDescribeStackProvisioningParametersResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeStackProvisioningParametersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeStackProvisioningParametersResult: opsworks.OpsWorksDescribeStackProvisioningParametersResult = { ... }
```

##### `agentInstallerUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeStackProvisioningParametersResult.property.agentInstallerUrl"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeStackProvisioningParametersResult.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### OpsWorksDescribeStacksRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeStacksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeStacksRequest: opsworks.OpsWorksDescribeStacksRequest = { ... }
```

##### `stackIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeStacksRequest.property.stackIds"></a>

- *Type:* `string`[]

---

### OpsWorksDescribeStacksResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeStacksResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeStacksResult: opsworks.OpsWorksDescribeStacksResult = { ... }
```

##### `stacks`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeStacksResult.property.stacks"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksStack`](#aws-cdk-sdk.opsworks.OpsWorksStack)[]

---

### OpsWorksDescribeStackSummaryRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeStackSummaryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeStackSummaryRequest: opsworks.OpsWorksDescribeStackSummaryRequest = { ... }
```

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeStackSummaryRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksDescribeStackSummaryResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeStackSummaryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeStackSummaryResult: opsworks.OpsWorksDescribeStackSummaryResult = { ... }
```

##### `stackSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeStackSummaryResult.property.stackSummary"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksStackSummary`](#aws-cdk-sdk.opsworks.OpsWorksStackSummary)

---

### OpsWorksDescribeTimeBasedAutoScalingRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeTimeBasedAutoScalingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeTimeBasedAutoScalingRequest: opsworks.OpsWorksDescribeTimeBasedAutoScalingRequest = { ... }
```

##### `instanceIds`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeTimeBasedAutoScalingRequest.property.instanceIds"></a>

- *Type:* `string`[]

---

### OpsWorksDescribeTimeBasedAutoScalingResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeTimeBasedAutoScalingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeTimeBasedAutoScalingResult: opsworks.OpsWorksDescribeTimeBasedAutoScalingResult = { ... }
```

##### `timeBasedAutoScalingConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeTimeBasedAutoScalingResult.property.timeBasedAutoScalingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksTimeBasedAutoScalingConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksTimeBasedAutoScalingConfiguration)[]

---

### OpsWorksDescribeUserProfilesRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeUserProfilesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeUserProfilesRequest: opsworks.OpsWorksDescribeUserProfilesRequest = { ... }
```

##### `iamUserArns`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeUserProfilesRequest.property.iamUserArns"></a>

- *Type:* `string`[]

---

### OpsWorksDescribeUserProfilesResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeUserProfilesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeUserProfilesResult: opsworks.OpsWorksDescribeUserProfilesResult = { ... }
```

##### `userProfiles`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeUserProfilesResult.property.userProfiles"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksUserProfile`](#aws-cdk-sdk.opsworks.OpsWorksUserProfile)[]

---

### OpsWorksDescribeVolumesRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeVolumesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeVolumesRequest: opsworks.OpsWorksDescribeVolumesRequest = { ... }
```

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeVolumesRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `raidArrayId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeVolumesRequest.property.raidArrayId"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeVolumesRequest.property.stackId"></a>

- *Type:* `string`

---

##### `volumeIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeVolumesRequest.property.volumeIds"></a>

- *Type:* `string`[]

---

### OpsWorksDescribeVolumesResult <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeVolumesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDescribeVolumesResult: opsworks.OpsWorksDescribeVolumesResult = { ... }
```

##### `volumes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDescribeVolumesResult.property.volumes"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksVolume`](#aws-cdk-sdk.opsworks.OpsWorksVolume)[]

---

### OpsWorksDetachElasticLoadBalancerRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDetachElasticLoadBalancerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDetachElasticLoadBalancerRequest: opsworks.OpsWorksDetachElasticLoadBalancerRequest = { ... }
```

##### `elasticLoadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDetachElasticLoadBalancerRequest.property.elasticLoadBalancerName"></a>

- *Type:* `string`

---

##### `layerId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDetachElasticLoadBalancerRequest.property.layerId"></a>

- *Type:* `string`

---

### OpsWorksDisassociateElasticIpRequest <a name="aws-cdk-sdk.opsworks.OpsWorksDisassociateElasticIpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksDisassociateElasticIpRequest: opsworks.OpsWorksDisassociateElasticIpRequest = { ... }
```

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksDisassociateElasticIpRequest.property.elasticIp"></a>

- *Type:* `string`

---

### OpsWorksEbsBlockDevice <a name="aws-cdk-sdk.opsworks.OpsWorksEbsBlockDevice"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksEbsBlockDevice: opsworks.OpsWorksEbsBlockDevice = { ... }
```

##### `deleteOnTermination`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksEbsBlockDevice.property.deleteOnTermination"></a>

- *Type:* `boolean`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksEbsBlockDevice.property.iops"></a>

- *Type:* `number`

---

##### `snapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksEbsBlockDevice.property.snapshotId"></a>

- *Type:* `string`

---

##### `volumeSize`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksEbsBlockDevice.property.volumeSize"></a>

- *Type:* `number`

---

##### `volumeType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksEbsBlockDevice.property.volumeType"></a>

- *Type:* `string`

---

### OpsWorksEcsCluster <a name="aws-cdk-sdk.opsworks.OpsWorksEcsCluster"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksEcsCluster: opsworks.OpsWorksEcsCluster = { ... }
```

##### `ecsClusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksEcsCluster.property.ecsClusterArn"></a>

- *Type:* `string`

---

##### `ecsClusterName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksEcsCluster.property.ecsClusterName"></a>

- *Type:* `string`

---

##### `registeredAt`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksEcsCluster.property.registeredAt"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksEcsCluster.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksElasticIp <a name="aws-cdk-sdk.opsworks.OpsWorksElasticIp"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksElasticIp: opsworks.OpsWorksElasticIp = { ... }
```

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksElasticIp.property.domain"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksElasticIp.property.instanceId"></a>

- *Type:* `string`

---

##### `ip`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksElasticIp.property.ip"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksElasticIp.property.name"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksElasticIp.property.region"></a>

- *Type:* `string`

---

### OpsWorksElasticLoadBalancer <a name="aws-cdk-sdk.opsworks.OpsWorksElasticLoadBalancer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksElasticLoadBalancer: opsworks.OpsWorksElasticLoadBalancer = { ... }
```

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksElasticLoadBalancer.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `dnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksElasticLoadBalancer.property.dnsName"></a>

- *Type:* `string`

---

##### `ec2InstanceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksElasticLoadBalancer.property.ec2InstanceIds"></a>

- *Type:* `string`[]

---

##### `elasticLoadBalancerName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksElasticLoadBalancer.property.elasticLoadBalancerName"></a>

- *Type:* `string`

---

##### `layerId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksElasticLoadBalancer.property.layerId"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksElasticLoadBalancer.property.region"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksElasticLoadBalancer.property.stackId"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksElasticLoadBalancer.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksElasticLoadBalancer.property.vpcId"></a>

- *Type:* `string`

---

### OpsWorksEnvironmentVariable <a name="aws-cdk-sdk.opsworks.OpsWorksEnvironmentVariable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksEnvironmentVariable: opsworks.OpsWorksEnvironmentVariable = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksEnvironmentVariable.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksEnvironmentVariable.property.value"></a>

- *Type:* `string`

---

##### `secure`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksEnvironmentVariable.property.secure"></a>

- *Type:* `boolean`

---

### OpsWorksGetHostnameSuggestionRequest <a name="aws-cdk-sdk.opsworks.OpsWorksGetHostnameSuggestionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksGetHostnameSuggestionRequest: opsworks.OpsWorksGetHostnameSuggestionRequest = { ... }
```

##### `layerId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksGetHostnameSuggestionRequest.property.layerId"></a>

- *Type:* `string`

---

### OpsWorksGetHostnameSuggestionResult <a name="aws-cdk-sdk.opsworks.OpsWorksGetHostnameSuggestionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksGetHostnameSuggestionResult: opsworks.OpsWorksGetHostnameSuggestionResult = { ... }
```

##### `hostname`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksGetHostnameSuggestionResult.property.hostname"></a>

- *Type:* `string`

---

##### `layerId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksGetHostnameSuggestionResult.property.layerId"></a>

- *Type:* `string`

---

### OpsWorksGrantAccessRequest <a name="aws-cdk-sdk.opsworks.OpsWorksGrantAccessRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksGrantAccessRequest: opsworks.OpsWorksGrantAccessRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksGrantAccessRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `validForInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksGrantAccessRequest.property.validForInMinutes"></a>

- *Type:* `number`

---

### OpsWorksGrantAccessResult <a name="aws-cdk-sdk.opsworks.OpsWorksGrantAccessResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksGrantAccessResult: opsworks.OpsWorksGrantAccessResult = { ... }
```

##### `temporaryCredential`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksGrantAccessResult.property.temporaryCredential"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksTemporaryCredential`](#aws-cdk-sdk.opsworks.OpsWorksTemporaryCredential)

---

### OpsWorksInstance <a name="aws-cdk-sdk.opsworks.OpsWorksInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksInstance: opsworks.OpsWorksInstance = { ... }
```

##### `agentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.agentVersion"></a>

- *Type:* `string`

---

##### `amiId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.amiId"></a>

- *Type:* `string`

---

##### `architecture`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.architecture"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.arn"></a>

- *Type:* `string`

---

##### `autoScalingType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.autoScalingType"></a>

- *Type:* `string`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.blockDeviceMappings"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksBlockDeviceMapping`](#aws-cdk-sdk.opsworks.OpsWorksBlockDeviceMapping)[]

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.createdAt"></a>

- *Type:* `string`

---

##### `ebsOptimized`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.ebsOptimized"></a>

- *Type:* `boolean`

---

##### `ec2InstanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.ec2InstanceId"></a>

- *Type:* `string`

---

##### `ecsClusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.ecsClusterArn"></a>

- *Type:* `string`

---

##### `ecsContainerInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.ecsContainerInstanceArn"></a>

- *Type:* `string`

---

##### `elasticIp`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.elasticIp"></a>

- *Type:* `string`

---

##### `hostname`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.hostname"></a>

- *Type:* `string`

---

##### `infrastructureClass`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.infrastructureClass"></a>

- *Type:* `string`

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.installUpdatesOnBoot"></a>

- *Type:* `boolean`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.instanceId"></a>

- *Type:* `string`

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.instanceProfileArn"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.instanceType"></a>

- *Type:* `string`

---

##### `lastServiceErrorId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.lastServiceErrorId"></a>

- *Type:* `string`

---

##### `layerIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.layerIds"></a>

- *Type:* `string`[]

---

##### `os`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.os"></a>

- *Type:* `string`

---

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.platform"></a>

- *Type:* `string`

---

##### `privateDns`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.privateDns"></a>

- *Type:* `string`

---

##### `privateIp`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.privateIp"></a>

- *Type:* `string`

---

##### `publicDns`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.publicDns"></a>

- *Type:* `string`

---

##### `publicIp`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.publicIp"></a>

- *Type:* `string`

---

##### `registeredBy`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.registeredBy"></a>

- *Type:* `string`

---

##### `reportedAgentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.reportedAgentVersion"></a>

- *Type:* `string`

---

##### `reportedOs`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.reportedOs"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksReportedOs`](#aws-cdk-sdk.opsworks.OpsWorksReportedOs)

---

##### `rootDeviceType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.rootDeviceType"></a>

- *Type:* `string`

---

##### `rootDeviceVolumeId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.rootDeviceVolumeId"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `sshHostDsaKeyFingerprint`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.sshHostDsaKeyFingerprint"></a>

- *Type:* `string`

---

##### `sshHostRsaKeyFingerprint`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.sshHostRsaKeyFingerprint"></a>

- *Type:* `string`

---

##### `sshKeyName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.sshKeyName"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.stackId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.status"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.subnetId"></a>

- *Type:* `string`

---

##### `tenancy`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.tenancy"></a>

- *Type:* `string`

---

##### `virtualizationType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstance.property.virtualizationType"></a>

- *Type:* `string`

---

### OpsWorksInstanceIdentity <a name="aws-cdk-sdk.opsworks.OpsWorksInstanceIdentity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksInstanceIdentity: opsworks.OpsWorksInstanceIdentity = { ... }
```

##### `document`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstanceIdentity.property.document"></a>

- *Type:* `string`

---

##### `signature`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstanceIdentity.property.signature"></a>

- *Type:* `string`

---

### OpsWorksInstancesCount <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksInstancesCount: opsworks.OpsWorksInstancesCount = { ... }
```

##### `assigning`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.assigning"></a>

- *Type:* `number`

---

##### `booting`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.booting"></a>

- *Type:* `number`

---

##### `connectionLost`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.connectionLost"></a>

- *Type:* `number`

---

##### `deregistering`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.deregistering"></a>

- *Type:* `number`

---

##### `online`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.online"></a>

- *Type:* `number`

---

##### `pending`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.pending"></a>

- *Type:* `number`

---

##### `rebooting`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.rebooting"></a>

- *Type:* `number`

---

##### `registered`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.registered"></a>

- *Type:* `number`

---

##### `registering`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.registering"></a>

- *Type:* `number`

---

##### `requested`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.requested"></a>

- *Type:* `number`

---

##### `runningSetup`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.runningSetup"></a>

- *Type:* `number`

---

##### `setupFailed`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.setupFailed"></a>

- *Type:* `number`

---

##### `shuttingDown`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.shuttingDown"></a>

- *Type:* `number`

---

##### `startFailed`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.startFailed"></a>

- *Type:* `number`

---

##### `stopFailed`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.stopFailed"></a>

- *Type:* `number`

---

##### `stopped`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.stopped"></a>

- *Type:* `number`

---

##### `stopping`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.stopping"></a>

- *Type:* `number`

---

##### `terminated`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.terminated"></a>

- *Type:* `number`

---

##### `terminating`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.terminating"></a>

- *Type:* `number`

---

##### `unassigning`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksInstancesCount.property.unassigning"></a>

- *Type:* `number`

---

### OpsWorksLayer <a name="aws-cdk-sdk.opsworks.OpsWorksLayer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksLayer: opsworks.OpsWorksLayer = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.arn"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.autoAssignElasticIps"></a>

- *Type:* `boolean`

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.autoAssignPublicIps"></a>

- *Type:* `boolean`

---

##### `cloudWatchLogsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.cloudWatchLogsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsConfiguration)

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.createdAt"></a>

- *Type:* `string`

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.customInstanceProfileArn"></a>

- *Type:* `string`

---

##### `customJson`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.customJson"></a>

- *Type:* `string`

---

##### `customRecipes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.customRecipes"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRecipes`](#aws-cdk-sdk.opsworks.OpsWorksRecipes)

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.customSecurityGroupIds"></a>

- *Type:* `string`[]

---

##### `defaultRecipes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.defaultRecipes"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRecipes`](#aws-cdk-sdk.opsworks.OpsWorksRecipes)

---

##### `defaultSecurityGroupNames`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.defaultSecurityGroupNames"></a>

- *Type:* `string`[]

---

##### `enableAutoHealing`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.enableAutoHealing"></a>

- *Type:* `boolean`

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.installUpdatesOnBoot"></a>

- *Type:* `boolean`

---

##### `layerId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.layerId"></a>

- *Type:* `string`

---

##### `lifecycleEventConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.lifecycleEventConfiguration"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksLifecycleEventConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksLifecycleEventConfiguration)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.name"></a>

- *Type:* `string`

---

##### `packages`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.packages"></a>

- *Type:* `string`[]

---

##### `shortname`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.shortname"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.stackId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.type"></a>

- *Type:* `string`

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.useEbsOptimizedInstances"></a>

- *Type:* `boolean`

---

##### `volumeConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLayer.property.volumeConfigurations"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksVolumeConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksVolumeConfiguration)[]

---

### OpsWorksLifecycleEventConfiguration <a name="aws-cdk-sdk.opsworks.OpsWorksLifecycleEventConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksLifecycleEventConfiguration: opsworks.OpsWorksLifecycleEventConfiguration = { ... }
```

##### `shutdown`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLifecycleEventConfiguration.property.shutdown"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksShutdownEventConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksShutdownEventConfiguration)

---

### OpsWorksListTagsRequest <a name="aws-cdk-sdk.opsworks.OpsWorksListTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksListTagsRequest: opsworks.OpsWorksListTagsRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksListTagsRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksListTagsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksListTagsRequest.property.nextToken"></a>

- *Type:* `string`

---

### OpsWorksListTagsResult <a name="aws-cdk-sdk.opsworks.OpsWorksListTagsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksListTagsResult: opsworks.OpsWorksListTagsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksListTagsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksListTagsResult.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### OpsWorksLoadBasedAutoScalingConfiguration <a name="aws-cdk-sdk.opsworks.OpsWorksLoadBasedAutoScalingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksLoadBasedAutoScalingConfiguration: opsworks.OpsWorksLoadBasedAutoScalingConfiguration = { ... }
```

##### `downScaling`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLoadBasedAutoScalingConfiguration.property.downScaling"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds`](#aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds)

---

##### `enable`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLoadBasedAutoScalingConfiguration.property.enable"></a>

- *Type:* `boolean`

---

##### `layerId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLoadBasedAutoScalingConfiguration.property.layerId"></a>

- *Type:* `string`

---

##### `upScaling`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksLoadBasedAutoScalingConfiguration.property.upScaling"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds`](#aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds)

---

### OpsWorksOperatingSystem <a name="aws-cdk-sdk.opsworks.OpsWorksOperatingSystem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksOperatingSystem: opsworks.OpsWorksOperatingSystem = { ... }
```

##### `configurationManagers`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksOperatingSystem.property.configurationManagers"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksOperatingSystemConfigurationManager`](#aws-cdk-sdk.opsworks.OpsWorksOperatingSystemConfigurationManager)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksOperatingSystem.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksOperatingSystem.property.name"></a>

- *Type:* `string`

---

##### `reportedName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksOperatingSystem.property.reportedName"></a>

- *Type:* `string`

---

##### `reportedVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksOperatingSystem.property.reportedVersion"></a>

- *Type:* `string`

---

##### `supported`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksOperatingSystem.property.supported"></a>

- *Type:* `boolean`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksOperatingSystem.property.type"></a>

- *Type:* `string`

---

### OpsWorksOperatingSystemConfigurationManager <a name="aws-cdk-sdk.opsworks.OpsWorksOperatingSystemConfigurationManager"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksOperatingSystemConfigurationManager: opsworks.OpsWorksOperatingSystemConfigurationManager = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksOperatingSystemConfigurationManager.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksOperatingSystemConfigurationManager.property.version"></a>

- *Type:* `string`

---

### OpsWorksPermission <a name="aws-cdk-sdk.opsworks.OpsWorksPermission"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksPermission: opsworks.OpsWorksPermission = { ... }
```

##### `allowSsh`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksPermission.property.allowSsh"></a>

- *Type:* `boolean`

---

##### `allowSudo`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksPermission.property.allowSudo"></a>

- *Type:* `boolean`

---

##### `iamUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksPermission.property.iamUserArn"></a>

- *Type:* `string`

---

##### `level`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksPermission.property.level"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksPermission.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksRaidArray <a name="aws-cdk-sdk.opsworks.OpsWorksRaidArray"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksRaidArray: opsworks.OpsWorksRaidArray = { ... }
```

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRaidArray.property.availabilityZone"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRaidArray.property.createdAt"></a>

- *Type:* `string`

---

##### `device`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRaidArray.property.device"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRaidArray.property.instanceId"></a>

- *Type:* `string`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRaidArray.property.iops"></a>

- *Type:* `number`

---

##### `mountPoint`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRaidArray.property.mountPoint"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRaidArray.property.name"></a>

- *Type:* `string`

---

##### `numberOfDisks`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRaidArray.property.numberOfDisks"></a>

- *Type:* `number`

---

##### `raidArrayId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRaidArray.property.raidArrayId"></a>

- *Type:* `string`

---

##### `raidLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRaidArray.property.raidLevel"></a>

- *Type:* `number`

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRaidArray.property.size"></a>

- *Type:* `number`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRaidArray.property.stackId"></a>

- *Type:* `string`

---

##### `volumeType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRaidArray.property.volumeType"></a>

- *Type:* `string`

---

### OpsWorksRdsDbInstance <a name="aws-cdk-sdk.opsworks.OpsWorksRdsDbInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksRdsDbInstance: opsworks.OpsWorksRdsDbInstance = { ... }
```

##### `address`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRdsDbInstance.property.address"></a>

- *Type:* `string`

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRdsDbInstance.property.dbInstanceIdentifier"></a>

- *Type:* `string`

---

##### `dbPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRdsDbInstance.property.dbPassword"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRdsDbInstance.property.dbUser"></a>

- *Type:* `string`

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRdsDbInstance.property.engine"></a>

- *Type:* `string`

---

##### `missingOnRds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRdsDbInstance.property.missingOnRds"></a>

- *Type:* `boolean`

---

##### `rdsDbInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRdsDbInstance.property.rdsDbInstanceArn"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRdsDbInstance.property.region"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRdsDbInstance.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksRebootInstanceRequest <a name="aws-cdk-sdk.opsworks.OpsWorksRebootInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksRebootInstanceRequest: opsworks.OpsWorksRebootInstanceRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRebootInstanceRequest.property.instanceId"></a>

- *Type:* `string`

---

### OpsWorksRecipes <a name="aws-cdk-sdk.opsworks.OpsWorksRecipes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksRecipes: opsworks.OpsWorksRecipes = { ... }
```

##### `configure`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRecipes.property.configure"></a>

- *Type:* `string`[]

---

##### `deploy`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRecipes.property.deploy"></a>

- *Type:* `string`[]

---

##### `setup`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRecipes.property.setup"></a>

- *Type:* `string`[]

---

##### `shutdown`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRecipes.property.shutdown"></a>

- *Type:* `string`[]

---

##### `undeploy`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRecipes.property.undeploy"></a>

- *Type:* `string`[]

---

### OpsWorksRegisterEcsClusterRequest <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterEcsClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksRegisterEcsClusterRequest: opsworks.OpsWorksRegisterEcsClusterRequest = { ... }
```

##### `ecsClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterEcsClusterRequest.property.ecsClusterArn"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterEcsClusterRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksRegisterEcsClusterResult <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterEcsClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksRegisterEcsClusterResult: opsworks.OpsWorksRegisterEcsClusterResult = { ... }
```

##### `ecsClusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterEcsClusterResult.property.ecsClusterArn"></a>

- *Type:* `string`

---

### OpsWorksRegisterElasticIpRequest <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterElasticIpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksRegisterElasticIpRequest: opsworks.OpsWorksRegisterElasticIpRequest = { ... }
```

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterElasticIpRequest.property.elasticIp"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterElasticIpRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksRegisterElasticIpResult <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterElasticIpResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksRegisterElasticIpResult: opsworks.OpsWorksRegisterElasticIpResult = { ... }
```

##### `elasticIp`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterElasticIpResult.property.elasticIp"></a>

- *Type:* `string`

---

### OpsWorksRegisterInstanceRequest <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksRegisterInstanceRequest: opsworks.OpsWorksRegisterInstanceRequest = { ... }
```

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterInstanceRequest.property.stackId"></a>

- *Type:* `string`

---

##### `hostname`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterInstanceRequest.property.hostname"></a>

- *Type:* `string`

---

##### `instanceIdentity`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterInstanceRequest.property.instanceIdentity"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksInstanceIdentity`](#aws-cdk-sdk.opsworks.OpsWorksInstanceIdentity)

---

##### `privateIp`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterInstanceRequest.property.privateIp"></a>

- *Type:* `string`

---

##### `publicIp`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterInstanceRequest.property.publicIp"></a>

- *Type:* `string`

---

##### `rsaPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterInstanceRequest.property.rsaPublicKey"></a>

- *Type:* `string`

---

##### `rsaPublicKeyFingerprint`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterInstanceRequest.property.rsaPublicKeyFingerprint"></a>

- *Type:* `string`

---

### OpsWorksRegisterInstanceResult <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksRegisterInstanceResult: opsworks.OpsWorksRegisterInstanceResult = { ... }
```

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterInstanceResult.property.instanceId"></a>

- *Type:* `string`

---

### OpsWorksRegisterRdsDbInstanceRequest <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterRdsDbInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksRegisterRdsDbInstanceRequest: opsworks.OpsWorksRegisterRdsDbInstanceRequest = { ... }
```

##### `dbPassword`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterRdsDbInstanceRequest.property.dbPassword"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterRdsDbInstanceRequest.property.dbUser"></a>

- *Type:* `string`

---

##### `rdsDbInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterRdsDbInstanceRequest.property.rdsDbInstanceArn"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterRdsDbInstanceRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksRegisterVolumeRequest <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterVolumeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksRegisterVolumeRequest: opsworks.OpsWorksRegisterVolumeRequest = { ... }
```

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterVolumeRequest.property.stackId"></a>

- *Type:* `string`

---

##### `ec2VolumeId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterVolumeRequest.property.ec2VolumeId"></a>

- *Type:* `string`

---

### OpsWorksRegisterVolumeResult <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterVolumeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksRegisterVolumeResult: opsworks.OpsWorksRegisterVolumeResult = { ... }
```

##### `volumeId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksRegisterVolumeResult.property.volumeId"></a>

- *Type:* `string`

---

### OpsWorksReportedOs <a name="aws-cdk-sdk.opsworks.OpsWorksReportedOs"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksReportedOs: opsworks.OpsWorksReportedOs = { ... }
```

##### `family`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksReportedOs.property.family"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksReportedOs.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksReportedOs.property.version"></a>

- *Type:* `string`

---

### OpsWorksSelfUserProfile <a name="aws-cdk-sdk.opsworks.OpsWorksSelfUserProfile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksSelfUserProfile: opsworks.OpsWorksSelfUserProfile = { ... }
```

##### `iamUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSelfUserProfile.property.iamUserArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSelfUserProfile.property.name"></a>

- *Type:* `string`

---

##### `sshPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSelfUserProfile.property.sshPublicKey"></a>

- *Type:* `string`

---

##### `sshUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSelfUserProfile.property.sshUsername"></a>

- *Type:* `string`

---

### OpsWorksServiceError <a name="aws-cdk-sdk.opsworks.OpsWorksServiceError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksServiceError: opsworks.OpsWorksServiceError = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksServiceError.property.createdAt"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksServiceError.property.instanceId"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksServiceError.property.message"></a>

- *Type:* `string`

---

##### `serviceErrorId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksServiceError.property.serviceErrorId"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksServiceError.property.stackId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksServiceError.property.type"></a>

- *Type:* `string`

---

### OpsWorksSetLoadBasedAutoScalingRequest <a name="aws-cdk-sdk.opsworks.OpsWorksSetLoadBasedAutoScalingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksSetLoadBasedAutoScalingRequest: opsworks.OpsWorksSetLoadBasedAutoScalingRequest = { ... }
```

##### `layerId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSetLoadBasedAutoScalingRequest.property.layerId"></a>

- *Type:* `string`

---

##### `downScaling`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSetLoadBasedAutoScalingRequest.property.downScaling"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds`](#aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds)

---

##### `enable`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSetLoadBasedAutoScalingRequest.property.enable"></a>

- *Type:* `boolean`

---

##### `upScaling`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSetLoadBasedAutoScalingRequest.property.upScaling"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds`](#aws-cdk-sdk.opsworks.OpsWorksAutoScalingThresholds)

---

### OpsWorksSetPermissionRequest <a name="aws-cdk-sdk.opsworks.OpsWorksSetPermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksSetPermissionRequest: opsworks.OpsWorksSetPermissionRequest = { ... }
```

##### `iamUserArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSetPermissionRequest.property.iamUserArn"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSetPermissionRequest.property.stackId"></a>

- *Type:* `string`

---

##### `allowSsh`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSetPermissionRequest.property.allowSsh"></a>

- *Type:* `boolean`

---

##### `allowSudo`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSetPermissionRequest.property.allowSudo"></a>

- *Type:* `boolean`

---

##### `level`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSetPermissionRequest.property.level"></a>

- *Type:* `string`

---

### OpsWorksSetTimeBasedAutoScalingRequest <a name="aws-cdk-sdk.opsworks.OpsWorksSetTimeBasedAutoScalingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksSetTimeBasedAutoScalingRequest: opsworks.OpsWorksSetTimeBasedAutoScalingRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSetTimeBasedAutoScalingRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `autoScalingSchedule`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSetTimeBasedAutoScalingRequest.property.autoScalingSchedule"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksWeeklyAutoScalingSchedule`](#aws-cdk-sdk.opsworks.OpsWorksWeeklyAutoScalingSchedule)

---

### OpsWorksShutdownEventConfiguration <a name="aws-cdk-sdk.opsworks.OpsWorksShutdownEventConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksShutdownEventConfiguration: opsworks.OpsWorksShutdownEventConfiguration = { ... }
```

##### `delayUntilElbConnectionsDrained`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksShutdownEventConfiguration.property.delayUntilElbConnectionsDrained"></a>

- *Type:* `boolean`

---

##### `executionTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksShutdownEventConfiguration.property.executionTimeout"></a>

- *Type:* `number`

---

### OpsWorksSource <a name="aws-cdk-sdk.opsworks.OpsWorksSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksSource: opsworks.OpsWorksSource = { ... }
```

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSource.property.password"></a>

- *Type:* `string`

---

##### `revision`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSource.property.revision"></a>

- *Type:* `string`

---

##### `sshKey`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSource.property.sshKey"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSource.property.type"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSource.property.url"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSource.property.username"></a>

- *Type:* `string`

---

### OpsWorksSslConfiguration <a name="aws-cdk-sdk.opsworks.OpsWorksSslConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksSslConfiguration: opsworks.OpsWorksSslConfiguration = { ... }
```

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSslConfiguration.property.certificate"></a>

- *Type:* `string`

---

##### `privateKey`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSslConfiguration.property.privateKey"></a>

- *Type:* `string`

---

##### `chain`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksSslConfiguration.property.chain"></a>

- *Type:* `string`

---

### OpsWorksStack <a name="aws-cdk-sdk.opsworks.OpsWorksStack"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksStack: opsworks.OpsWorksStack = { ... }
```

##### `agentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.agentVersion"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.arn"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `chefConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.chefConfiguration"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksChefConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksChefConfiguration)

---

##### `configurationManager`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.configurationManager"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksStackConfigurationManager`](#aws-cdk-sdk.opsworks.OpsWorksStackConfigurationManager)

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.createdAt"></a>

- *Type:* `string`

---

##### `customCookbooksSource`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.customCookbooksSource"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksSource`](#aws-cdk-sdk.opsworks.OpsWorksSource)

---

##### `customJson`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.customJson"></a>

- *Type:* `string`

---

##### `defaultAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.defaultAvailabilityZone"></a>

- *Type:* `string`

---

##### `defaultInstanceProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.defaultInstanceProfileArn"></a>

- *Type:* `string`

---

##### `defaultOs`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.defaultOs"></a>

- *Type:* `string`

---

##### `defaultRootDeviceType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.defaultRootDeviceType"></a>

- *Type:* `string`

---

##### `defaultSshKeyName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.defaultSshKeyName"></a>

- *Type:* `string`

---

##### `defaultSubnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.defaultSubnetId"></a>

- *Type:* `string`

---

##### `hostnameTheme`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.hostnameTheme"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.name"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.region"></a>

- *Type:* `string`

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.stackId"></a>

- *Type:* `string`

---

##### `useCustomCookbooks`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.useCustomCookbooks"></a>

- *Type:* `boolean`

---

##### `useOpsworksSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.useOpsworksSecurityGroups"></a>

- *Type:* `boolean`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStack.property.vpcId"></a>

- *Type:* `string`

---

### OpsWorksStackConfigurationManager <a name="aws-cdk-sdk.opsworks.OpsWorksStackConfigurationManager"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksStackConfigurationManager: opsworks.OpsWorksStackConfigurationManager = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStackConfigurationManager.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStackConfigurationManager.property.version"></a>

- *Type:* `string`

---

### OpsWorksStackSummary <a name="aws-cdk-sdk.opsworks.OpsWorksStackSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksStackSummary: opsworks.OpsWorksStackSummary = { ... }
```

##### `appsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStackSummary.property.appsCount"></a>

- *Type:* `number`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStackSummary.property.arn"></a>

- *Type:* `string`

---

##### `instancesCount`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStackSummary.property.instancesCount"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksInstancesCount`](#aws-cdk-sdk.opsworks.OpsWorksInstancesCount)

---

##### `layersCount`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStackSummary.property.layersCount"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStackSummary.property.name"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStackSummary.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksStartInstanceRequest <a name="aws-cdk-sdk.opsworks.OpsWorksStartInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksStartInstanceRequest: opsworks.OpsWorksStartInstanceRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStartInstanceRequest.property.instanceId"></a>

- *Type:* `string`

---

### OpsWorksStartStackRequest <a name="aws-cdk-sdk.opsworks.OpsWorksStartStackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksStartStackRequest: opsworks.OpsWorksStartStackRequest = { ... }
```

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStartStackRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksStopInstanceRequest <a name="aws-cdk-sdk.opsworks.OpsWorksStopInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksStopInstanceRequest: opsworks.OpsWorksStopInstanceRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStopInstanceRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStopInstanceRequest.property.force"></a>

- *Type:* `boolean`

---

### OpsWorksStopStackRequest <a name="aws-cdk-sdk.opsworks.OpsWorksStopStackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksStopStackRequest: opsworks.OpsWorksStopStackRequest = { ... }
```

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksStopStackRequest.property.stackId"></a>

- *Type:* `string`

---

### OpsWorksTagResourceRequest <a name="aws-cdk-sdk.opsworks.OpsWorksTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksTagResourceRequest: opsworks.OpsWorksTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### OpsWorksTemporaryCredential <a name="aws-cdk-sdk.opsworks.OpsWorksTemporaryCredential"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksTemporaryCredential: opsworks.OpsWorksTemporaryCredential = { ... }
```

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksTemporaryCredential.property.instanceId"></a>

- *Type:* `string`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksTemporaryCredential.property.password"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksTemporaryCredential.property.username"></a>

- *Type:* `string`

---

##### `validForInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksTemporaryCredential.property.validForInMinutes"></a>

- *Type:* `number`

---

### OpsWorksTimeBasedAutoScalingConfiguration <a name="aws-cdk-sdk.opsworks.OpsWorksTimeBasedAutoScalingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksTimeBasedAutoScalingConfiguration: opsworks.OpsWorksTimeBasedAutoScalingConfiguration = { ... }
```

##### `autoScalingSchedule`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksTimeBasedAutoScalingConfiguration.property.autoScalingSchedule"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksWeeklyAutoScalingSchedule`](#aws-cdk-sdk.opsworks.OpsWorksWeeklyAutoScalingSchedule)

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksTimeBasedAutoScalingConfiguration.property.instanceId"></a>

- *Type:* `string`

---

### OpsWorksUnassignInstanceRequest <a name="aws-cdk-sdk.opsworks.OpsWorksUnassignInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksUnassignInstanceRequest: opsworks.OpsWorksUnassignInstanceRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUnassignInstanceRequest.property.instanceId"></a>

- *Type:* `string`

---

### OpsWorksUnassignVolumeRequest <a name="aws-cdk-sdk.opsworks.OpsWorksUnassignVolumeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksUnassignVolumeRequest: opsworks.OpsWorksUnassignVolumeRequest = { ... }
```

##### `volumeId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUnassignVolumeRequest.property.volumeId"></a>

- *Type:* `string`

---

### OpsWorksUntagResourceRequest <a name="aws-cdk-sdk.opsworks.OpsWorksUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksUntagResourceRequest: opsworks.OpsWorksUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### OpsWorksUpdateAppRequest <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateAppRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksUpdateAppRequest: opsworks.OpsWorksUpdateAppRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateAppRequest.property.appId"></a>

- *Type:* `string`

---

##### `appSource`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateAppRequest.property.appSource"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksSource`](#aws-cdk-sdk.opsworks.OpsWorksSource)

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateAppRequest.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateAppRequest.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDataSource`](#aws-cdk-sdk.opsworks.OpsWorksDataSource)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateAppRequest.property.description"></a>

- *Type:* `string`

---

##### `domains`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateAppRequest.property.domains"></a>

- *Type:* `string`[]

---

##### `enableSsl`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateAppRequest.property.enableSsl"></a>

- *Type:* `boolean`

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateAppRequest.property.environment"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksEnvironmentVariable`](#aws-cdk-sdk.opsworks.OpsWorksEnvironmentVariable)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateAppRequest.property.name"></a>

- *Type:* `string`

---

##### `sslConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateAppRequest.property.sslConfiguration"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksSslConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksSslConfiguration)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateAppRequest.property.type"></a>

- *Type:* `string`

---

### OpsWorksUpdateElasticIpRequest <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateElasticIpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksUpdateElasticIpRequest: opsworks.OpsWorksUpdateElasticIpRequest = { ... }
```

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateElasticIpRequest.property.elasticIp"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateElasticIpRequest.property.name"></a>

- *Type:* `string`

---

### OpsWorksUpdateInstanceRequest <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksUpdateInstanceRequest: opsworks.OpsWorksUpdateInstanceRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateInstanceRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `agentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateInstanceRequest.property.agentVersion"></a>

- *Type:* `string`

---

##### `amiId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateInstanceRequest.property.amiId"></a>

- *Type:* `string`

---

##### `architecture`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateInstanceRequest.property.architecture"></a>

- *Type:* `string`

---

##### `autoScalingType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateInstanceRequest.property.autoScalingType"></a>

- *Type:* `string`

---

##### `ebsOptimized`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateInstanceRequest.property.ebsOptimized"></a>

- *Type:* `boolean`

---

##### `hostname`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateInstanceRequest.property.hostname"></a>

- *Type:* `string`

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateInstanceRequest.property.installUpdatesOnBoot"></a>

- *Type:* `boolean`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateInstanceRequest.property.instanceType"></a>

- *Type:* `string`

---

##### `layerIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateInstanceRequest.property.layerIds"></a>

- *Type:* `string`[]

---

##### `os`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateInstanceRequest.property.os"></a>

- *Type:* `string`

---

##### `sshKeyName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateInstanceRequest.property.sshKeyName"></a>

- *Type:* `string`

---

### OpsWorksUpdateLayerRequest <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksUpdateLayerRequest: opsworks.OpsWorksUpdateLayerRequest = { ... }
```

##### `layerId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.layerId"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.autoAssignElasticIps"></a>

- *Type:* `boolean`

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.autoAssignPublicIps"></a>

- *Type:* `boolean`

---

##### `cloudWatchLogsConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.cloudWatchLogsConfiguration"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksCloudWatchLogsConfiguration)

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.customInstanceProfileArn"></a>

- *Type:* `string`

---

##### `customJson`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.customJson"></a>

- *Type:* `string`

---

##### `customRecipes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.customRecipes"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRecipes`](#aws-cdk-sdk.opsworks.OpsWorksRecipes)

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.customSecurityGroupIds"></a>

- *Type:* `string`[]

---

##### `enableAutoHealing`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.enableAutoHealing"></a>

- *Type:* `boolean`

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.installUpdatesOnBoot"></a>

- *Type:* `boolean`

---

##### `lifecycleEventConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.lifecycleEventConfiguration"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksLifecycleEventConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksLifecycleEventConfiguration)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.name"></a>

- *Type:* `string`

---

##### `packages`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.packages"></a>

- *Type:* `string`[]

---

##### `shortname`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.shortname"></a>

- *Type:* `string`

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.useEbsOptimizedInstances"></a>

- *Type:* `boolean`

---

##### `volumeConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateLayerRequest.property.volumeConfigurations"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksVolumeConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksVolumeConfiguration)[]

---

### OpsWorksUpdateMyUserProfileRequest <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateMyUserProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksUpdateMyUserProfileRequest: opsworks.OpsWorksUpdateMyUserProfileRequest = { ... }
```

##### `sshPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateMyUserProfileRequest.property.sshPublicKey"></a>

- *Type:* `string`

---

### OpsWorksUpdateRdsDbInstanceRequest <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateRdsDbInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksUpdateRdsDbInstanceRequest: opsworks.OpsWorksUpdateRdsDbInstanceRequest = { ... }
```

##### `rdsDbInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateRdsDbInstanceRequest.property.rdsDbInstanceArn"></a>

- *Type:* `string`

---

##### `dbPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateRdsDbInstanceRequest.property.dbPassword"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateRdsDbInstanceRequest.property.dbUser"></a>

- *Type:* `string`

---

### OpsWorksUpdateStackRequest <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksUpdateStackRequest: opsworks.OpsWorksUpdateStackRequest = { ... }
```

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.stackId"></a>

- *Type:* `string`

---

##### `agentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.agentVersion"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `chefConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.chefConfiguration"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksChefConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksChefConfiguration)

---

##### `configurationManager`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.configurationManager"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksStackConfigurationManager`](#aws-cdk-sdk.opsworks.OpsWorksStackConfigurationManager)

---

##### `customCookbooksSource`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.customCookbooksSource"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksSource`](#aws-cdk-sdk.opsworks.OpsWorksSource)

---

##### `customJson`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.customJson"></a>

- *Type:* `string`

---

##### `defaultAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.defaultAvailabilityZone"></a>

- *Type:* `string`

---

##### `defaultInstanceProfileArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.defaultInstanceProfileArn"></a>

- *Type:* `string`

---

##### `defaultOs`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.defaultOs"></a>

- *Type:* `string`

---

##### `defaultRootDeviceType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.defaultRootDeviceType"></a>

- *Type:* `string`

---

##### `defaultSshKeyName`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.defaultSshKeyName"></a>

- *Type:* `string`

---

##### `defaultSubnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.defaultSubnetId"></a>

- *Type:* `string`

---

##### `hostnameTheme`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.hostnameTheme"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.name"></a>

- *Type:* `string`

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `useCustomCookbooks`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.useCustomCookbooks"></a>

- *Type:* `boolean`

---

##### `useOpsworksSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateStackRequest.property.useOpsworksSecurityGroups"></a>

- *Type:* `boolean`

---

### OpsWorksUpdateUserProfileRequest <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateUserProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksUpdateUserProfileRequest: opsworks.OpsWorksUpdateUserProfileRequest = { ... }
```

##### `iamUserArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateUserProfileRequest.property.iamUserArn"></a>

- *Type:* `string`

---

##### `allowSelfManagement`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateUserProfileRequest.property.allowSelfManagement"></a>

- *Type:* `boolean`

---

##### `sshPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateUserProfileRequest.property.sshPublicKey"></a>

- *Type:* `string`

---

##### `sshUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateUserProfileRequest.property.sshUsername"></a>

- *Type:* `string`

---

### OpsWorksUpdateVolumeRequest <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateVolumeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksUpdateVolumeRequest: opsworks.OpsWorksUpdateVolumeRequest = { ... }
```

##### `volumeId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateVolumeRequest.property.volumeId"></a>

- *Type:* `string`

---

##### `mountPoint`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateVolumeRequest.property.mountPoint"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUpdateVolumeRequest.property.name"></a>

- *Type:* `string`

---

### OpsWorksUserProfile <a name="aws-cdk-sdk.opsworks.OpsWorksUserProfile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksUserProfile: opsworks.OpsWorksUserProfile = { ... }
```

##### `allowSelfManagement`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUserProfile.property.allowSelfManagement"></a>

- *Type:* `boolean`

---

##### `iamUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUserProfile.property.iamUserArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUserProfile.property.name"></a>

- *Type:* `string`

---

##### `sshPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUserProfile.property.sshPublicKey"></a>

- *Type:* `string`

---

##### `sshUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksUserProfile.property.sshUsername"></a>

- *Type:* `string`

---

### OpsWorksVolume <a name="aws-cdk-sdk.opsworks.OpsWorksVolume"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksVolume: opsworks.OpsWorksVolume = { ... }
```

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolume.property.availabilityZone"></a>

- *Type:* `string`

---

##### `device`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolume.property.device"></a>

- *Type:* `string`

---

##### `ec2VolumeId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolume.property.ec2VolumeId"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolume.property.encrypted"></a>

- *Type:* `boolean`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolume.property.instanceId"></a>

- *Type:* `string`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolume.property.iops"></a>

- *Type:* `number`

---

##### `mountPoint`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolume.property.mountPoint"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolume.property.name"></a>

- *Type:* `string`

---

##### `raidArrayId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolume.property.raidArrayId"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolume.property.region"></a>

- *Type:* `string`

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolume.property.size"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolume.property.status"></a>

- *Type:* `string`

---

##### `volumeId`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolume.property.volumeId"></a>

- *Type:* `string`

---

##### `volumeType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolume.property.volumeType"></a>

- *Type:* `string`

---

### OpsWorksVolumeConfiguration <a name="aws-cdk-sdk.opsworks.OpsWorksVolumeConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksVolumeConfiguration: opsworks.OpsWorksVolumeConfiguration = { ... }
```

##### `mountPoint`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolumeConfiguration.property.mountPoint"></a>

- *Type:* `string`

---

##### `numberOfDisks`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolumeConfiguration.property.numberOfDisks"></a>

- *Type:* `number`

---

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolumeConfiguration.property.size"></a>

- *Type:* `number`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolumeConfiguration.property.encrypted"></a>

- *Type:* `boolean`

---

##### `iops`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolumeConfiguration.property.iops"></a>

- *Type:* `number`

---

##### `raidLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolumeConfiguration.property.raidLevel"></a>

- *Type:* `number`

---

##### `volumeType`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksVolumeConfiguration.property.volumeType"></a>

- *Type:* `string`

---

### OpsWorksWeeklyAutoScalingSchedule <a name="aws-cdk-sdk.opsworks.OpsWorksWeeklyAutoScalingSchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

const opsWorksWeeklyAutoScalingSchedule: opsworks.OpsWorksWeeklyAutoScalingSchedule = { ... }
```

##### `friday`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksWeeklyAutoScalingSchedule.property.friday"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `monday`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksWeeklyAutoScalingSchedule.property.monday"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `saturday`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksWeeklyAutoScalingSchedule.property.saturday"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `sunday`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksWeeklyAutoScalingSchedule.property.sunday"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `thursday`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksWeeklyAutoScalingSchedule.property.thursday"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tuesday`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksWeeklyAutoScalingSchedule.property.tuesday"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `wednesday`<sup>Optional</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksWeeklyAutoScalingSchedule.property.wednesday"></a>

- *Type:* {[ key: string ]: `string`}

---

## Classes <a name="Classes"></a>

### OpsWorksResponsesCloneStack <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCloneStack"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCloneStack.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesCloneStack(__scope: Construct, __resources: string[], __input: OpsWorksCloneStackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCloneStack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCloneStack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCloneStack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest`](#aws-cdk-sdk.opsworks.OpsWorksCloneStackRequest)

---



#### Properties <a name="Properties"></a>

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCloneStack.property.stackId"></a>

- *Type:* `string`

---


### OpsWorksResponsesCreateApp <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateApp"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateApp.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesCreateApp(__scope: Construct, __resources: string[], __input: OpsWorksCreateAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateApp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateApp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateApp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest`](#aws-cdk-sdk.opsworks.OpsWorksCreateAppRequest)

---



#### Properties <a name="Properties"></a>

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateApp.property.appId"></a>

- *Type:* `string`

---


### OpsWorksResponsesCreateDeployment <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateDeployment.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesCreateDeployment(__scope: Construct, __resources: string[], __input: OpsWorksCreateDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCreateDeploymentRequest`](#aws-cdk-sdk.opsworks.OpsWorksCreateDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateDeployment.property.deploymentId"></a>

- *Type:* `string`

---


### OpsWorksResponsesCreateInstance <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateInstance"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateInstance.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesCreateInstance(__scope: Construct, __resources: string[], __input: OpsWorksCreateInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest`](#aws-cdk-sdk.opsworks.OpsWorksCreateInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateInstance.property.instanceId"></a>

- *Type:* `string`

---


### OpsWorksResponsesCreateLayer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateLayer"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateLayer.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesCreateLayer(__scope: Construct, __resources: string[], __input: OpsWorksCreateLayerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateLayer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateLayer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateLayer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest`](#aws-cdk-sdk.opsworks.OpsWorksCreateLayerRequest)

---



#### Properties <a name="Properties"></a>

##### `layerId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateLayer.property.layerId"></a>

- *Type:* `string`

---


### OpsWorksResponsesCreateStack <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateStack"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateStack.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesCreateStack(__scope: Construct, __resources: string[], __input: OpsWorksCreateStackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateStack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateStack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateStack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest`](#aws-cdk-sdk.opsworks.OpsWorksCreateStackRequest)

---



#### Properties <a name="Properties"></a>

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateStack.property.stackId"></a>

- *Type:* `string`

---


### OpsWorksResponsesCreateUserProfile <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateUserProfile"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateUserProfile.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesCreateUserProfile(__scope: Construct, __resources: string[], __input: OpsWorksCreateUserProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateUserProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateUserProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateUserProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCreateUserProfileRequest`](#aws-cdk-sdk.opsworks.OpsWorksCreateUserProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `iamUserArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesCreateUserProfile.property.iamUserArn"></a>

- *Type:* `string`

---


### OpsWorksResponsesDescribeAgentVersions <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeAgentVersions"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeAgentVersions.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeAgentVersions(__scope: Construct, __resources: string[], __input: OpsWorksDescribeAgentVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeAgentVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeAgentVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeAgentVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeAgentVersionsRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeAgentVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `agentVersions`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeAgentVersions.property.agentVersions"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksAgentVersion`](#aws-cdk-sdk.opsworks.OpsWorksAgentVersion)[]

---


### OpsWorksResponsesDescribeApps <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeApps"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeApps.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeApps(__scope: Construct, __resources: string[], __input: OpsWorksDescribeAppsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeApps.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeApps.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeApps.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeAppsRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeAppsRequest)

---



#### Properties <a name="Properties"></a>

##### `apps`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeApps.property.apps"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksApp`](#aws-cdk-sdk.opsworks.OpsWorksApp)[]

---


### OpsWorksResponsesDescribeCommands <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeCommands"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeCommands.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeCommands(__scope: Construct, __resources: string[], __input: OpsWorksDescribeCommandsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeCommands.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeCommands.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeCommands.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeCommandsRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeCommandsRequest)

---



#### Properties <a name="Properties"></a>

##### `commands`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeCommands.property.commands"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksCommand`](#aws-cdk-sdk.opsworks.OpsWorksCommand)[]

---


### OpsWorksResponsesDescribeDeployments <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeDeployments"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeDeployments.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeDeployments(__scope: Construct, __resources: string[], __input: OpsWorksDescribeDeploymentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeDeployments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeDeployments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeDeployments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeDeploymentsRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeDeploymentsRequest)

---



#### Properties <a name="Properties"></a>

##### `deployments`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeDeployments.property.deployments"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDeployment`](#aws-cdk-sdk.opsworks.OpsWorksDeployment)[]

---


### OpsWorksResponsesDescribeEcsClusters <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeEcsClusters"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeEcsClusters.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeEcsClusters(__scope: Construct, __resources: string[], __input: OpsWorksDescribeEcsClustersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeEcsClusters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeEcsClusters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeEcsClusters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeEcsClustersRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeEcsClustersRequest)

---



#### Properties <a name="Properties"></a>

##### `ecsClusters`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeEcsClusters.property.ecsClusters"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksEcsCluster`](#aws-cdk-sdk.opsworks.OpsWorksEcsCluster)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeEcsClusters.property.nextToken"></a>

- *Type:* `string`

---


### OpsWorksResponsesDescribeElasticIps <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeElasticIps"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeElasticIps.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeElasticIps(__scope: Construct, __resources: string[], __input: OpsWorksDescribeElasticIpsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeElasticIps.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeElasticIps.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeElasticIps.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeElasticIpsRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeElasticIpsRequest)

---



#### Properties <a name="Properties"></a>

##### `elasticIps`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeElasticIps.property.elasticIps"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksElasticIp`](#aws-cdk-sdk.opsworks.OpsWorksElasticIp)[]

---


### OpsWorksResponsesDescribeElasticLoadBalancers <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeElasticLoadBalancers"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeElasticLoadBalancers.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeElasticLoadBalancers(__scope: Construct, __resources: string[], __input: OpsWorksDescribeElasticLoadBalancersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeElasticLoadBalancers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeElasticLoadBalancers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeElasticLoadBalancers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeElasticLoadBalancersRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeElasticLoadBalancersRequest)

---



#### Properties <a name="Properties"></a>

##### `elasticLoadBalancers`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeElasticLoadBalancers.property.elasticLoadBalancers"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksElasticLoadBalancer`](#aws-cdk-sdk.opsworks.OpsWorksElasticLoadBalancer)[]

---


### OpsWorksResponsesDescribeInstances <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeInstances"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeInstances.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeInstances(__scope: Construct, __resources: string[], __input: OpsWorksDescribeInstancesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeInstancesRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeInstancesRequest)

---



#### Properties <a name="Properties"></a>

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeInstances.property.instances"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksInstance`](#aws-cdk-sdk.opsworks.OpsWorksInstance)[]

---


### OpsWorksResponsesDescribeLayers <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeLayers"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeLayers.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeLayers(__scope: Construct, __resources: string[], __input: OpsWorksDescribeLayersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeLayers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeLayers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeLayers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeLayersRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeLayersRequest)

---



#### Properties <a name="Properties"></a>

##### `layers`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeLayers.property.layers"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksLayer`](#aws-cdk-sdk.opsworks.OpsWorksLayer)[]

---


### OpsWorksResponsesDescribeLoadBasedAutoScaling <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeLoadBasedAutoScaling"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeLoadBasedAutoScaling.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeLoadBasedAutoScaling(__scope: Construct, __resources: string[], __input: OpsWorksDescribeLoadBasedAutoScalingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeLoadBasedAutoScaling.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeLoadBasedAutoScaling.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeLoadBasedAutoScaling.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeLoadBasedAutoScalingRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeLoadBasedAutoScalingRequest)

---



#### Properties <a name="Properties"></a>

##### `loadBasedAutoScalingConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeLoadBasedAutoScaling.property.loadBasedAutoScalingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksLoadBasedAutoScalingConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksLoadBasedAutoScalingConfiguration)[]

---


### OpsWorksResponsesDescribeMyUserProfile <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeMyUserProfile"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeMyUserProfile.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeMyUserProfile(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeMyUserProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeMyUserProfile.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `userProfile`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeMyUserProfile.property.userProfile"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeMyUserProfileUserProfile`](#aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeMyUserProfileUserProfile)

---


### OpsWorksResponsesDescribeMyUserProfileUserProfile <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeMyUserProfileUserProfile"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeMyUserProfileUserProfile.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeMyUserProfileUserProfile(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeMyUserProfileUserProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeMyUserProfileUserProfile.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `iamUserArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeMyUserProfileUserProfile.property.iamUserArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeMyUserProfileUserProfile.property.name"></a>

- *Type:* `string`

---

##### `sshPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeMyUserProfileUserProfile.property.sshPublicKey"></a>

- *Type:* `string`

---

##### `sshUsername`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeMyUserProfileUserProfile.property.sshUsername"></a>

- *Type:* `string`

---


### OpsWorksResponsesDescribeOperatingSystems <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeOperatingSystems"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeOperatingSystems.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeOperatingSystems(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeOperatingSystems.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeOperatingSystems.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `operatingSystems`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeOperatingSystems.property.operatingSystems"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksOperatingSystem`](#aws-cdk-sdk.opsworks.OpsWorksOperatingSystem)[]

---


### OpsWorksResponsesDescribePermissions <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribePermissions"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribePermissions.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribePermissions(__scope: Construct, __resources: string[], __input: OpsWorksDescribePermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribePermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribePermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribePermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribePermissionsRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribePermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribePermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksPermission`](#aws-cdk-sdk.opsworks.OpsWorksPermission)[]

---


### OpsWorksResponsesDescribeRaidArrays <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeRaidArrays"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeRaidArrays.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeRaidArrays(__scope: Construct, __resources: string[], __input: OpsWorksDescribeRaidArraysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeRaidArrays.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeRaidArrays.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeRaidArrays.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeRaidArraysRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeRaidArraysRequest)

---



#### Properties <a name="Properties"></a>

##### `raidArrays`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeRaidArrays.property.raidArrays"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRaidArray`](#aws-cdk-sdk.opsworks.OpsWorksRaidArray)[]

---


### OpsWorksResponsesDescribeRdsDbInstances <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeRdsDbInstances"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeRdsDbInstances.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeRdsDbInstances(__scope: Construct, __resources: string[], __input: OpsWorksDescribeRdsDbInstancesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeRdsDbInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeRdsDbInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeRdsDbInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeRdsDbInstancesRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeRdsDbInstancesRequest)

---



#### Properties <a name="Properties"></a>

##### `rdsDbInstances`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeRdsDbInstances.property.rdsDbInstances"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRdsDbInstance`](#aws-cdk-sdk.opsworks.OpsWorksRdsDbInstance)[]

---


### OpsWorksResponsesDescribeServiceErrors <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeServiceErrors"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeServiceErrors.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeServiceErrors(__scope: Construct, __resources: string[], __input: OpsWorksDescribeServiceErrorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeServiceErrors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeServiceErrors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeServiceErrors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeServiceErrorsRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeServiceErrorsRequest)

---



#### Properties <a name="Properties"></a>

##### `serviceErrors`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeServiceErrors.property.serviceErrors"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksServiceError`](#aws-cdk-sdk.opsworks.OpsWorksServiceError)[]

---


### OpsWorksResponsesDescribeStackProvisioningParameters <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackProvisioningParameters"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackProvisioningParameters.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeStackProvisioningParameters(__scope: Construct, __resources: string[], __input: OpsWorksDescribeStackProvisioningParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackProvisioningParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackProvisioningParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackProvisioningParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeStackProvisioningParametersRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeStackProvisioningParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `agentInstallerUrl`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackProvisioningParameters.property.agentInstallerUrl"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackProvisioningParameters.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---


### OpsWorksResponsesDescribeStacks <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStacks"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStacks.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeStacks(__scope: Construct, __resources: string[], __input: OpsWorksDescribeStacksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStacks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStacks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStacks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeStacksRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeStacksRequest)

---



#### Properties <a name="Properties"></a>

##### `stacks`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStacks.property.stacks"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksStack`](#aws-cdk-sdk.opsworks.OpsWorksStack)[]

---


### OpsWorksResponsesDescribeStackSummary <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummary"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummary.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeStackSummary(__scope: Construct, __resources: string[], __input: OpsWorksDescribeStackSummaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeStackSummaryRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeStackSummaryRequest)

---



#### Properties <a name="Properties"></a>

##### `stackSummary`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummary.property.stackSummary"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummary`](#aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummary)

---


### OpsWorksResponsesDescribeStackSummaryStackSummary <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummary"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummary.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeStackSummaryStackSummary(__scope: Construct, __resources: string[], __input: OpsWorksDescribeStackSummaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeStackSummaryRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeStackSummaryRequest)

---



#### Properties <a name="Properties"></a>

##### `appsCount`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummary.property.appsCount"></a>

- *Type:* `number`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummary.property.arn"></a>

- *Type:* `string`

---

##### `instancesCount`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummary.property.instancesCount"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount`](#aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount)

---

##### `layersCount`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummary.property.layersCount"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummary.property.name"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummary.property.stackId"></a>

- *Type:* `string`

---


### OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount(__scope: Construct, __resources: string[], __input: OpsWorksDescribeStackSummaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeStackSummaryRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeStackSummaryRequest)

---



#### Properties <a name="Properties"></a>

##### `assigning`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.assigning"></a>

- *Type:* `number`

---

##### `booting`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.booting"></a>

- *Type:* `number`

---

##### `connectionLost`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.connectionLost"></a>

- *Type:* `number`

---

##### `deregistering`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.deregistering"></a>

- *Type:* `number`

---

##### `online`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.online"></a>

- *Type:* `number`

---

##### `pending`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.pending"></a>

- *Type:* `number`

---

##### `rebooting`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.rebooting"></a>

- *Type:* `number`

---

##### `registered`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.registered"></a>

- *Type:* `number`

---

##### `registering`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.registering"></a>

- *Type:* `number`

---

##### `requested`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.requested"></a>

- *Type:* `number`

---

##### `runningSetup`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.runningSetup"></a>

- *Type:* `number`

---

##### `setupFailed`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.setupFailed"></a>

- *Type:* `number`

---

##### `shuttingDown`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.shuttingDown"></a>

- *Type:* `number`

---

##### `startFailed`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.startFailed"></a>

- *Type:* `number`

---

##### `stopFailed`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.stopFailed"></a>

- *Type:* `number`

---

##### `stopped`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.stopped"></a>

- *Type:* `number`

---

##### `stopping`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.stopping"></a>

- *Type:* `number`

---

##### `terminated`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.terminated"></a>

- *Type:* `number`

---

##### `terminating`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.terminating"></a>

- *Type:* `number`

---

##### `unassigning`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount.property.unassigning"></a>

- *Type:* `number`

---


### OpsWorksResponsesDescribeTimeBasedAutoScaling <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeTimeBasedAutoScaling"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeTimeBasedAutoScaling.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeTimeBasedAutoScaling(__scope: Construct, __resources: string[], __input: OpsWorksDescribeTimeBasedAutoScalingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeTimeBasedAutoScaling.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeTimeBasedAutoScaling.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeTimeBasedAutoScaling.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeTimeBasedAutoScalingRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeTimeBasedAutoScalingRequest)

---



#### Properties <a name="Properties"></a>

##### `timeBasedAutoScalingConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeTimeBasedAutoScaling.property.timeBasedAutoScalingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksTimeBasedAutoScalingConfiguration`](#aws-cdk-sdk.opsworks.OpsWorksTimeBasedAutoScalingConfiguration)[]

---


### OpsWorksResponsesDescribeUserProfiles <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeUserProfiles"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeUserProfiles.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeUserProfiles(__scope: Construct, __resources: string[], __input: OpsWorksDescribeUserProfilesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeUserProfiles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeUserProfiles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeUserProfiles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeUserProfilesRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeUserProfilesRequest)

---



#### Properties <a name="Properties"></a>

##### `userProfiles`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeUserProfiles.property.userProfiles"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksUserProfile`](#aws-cdk-sdk.opsworks.OpsWorksUserProfile)[]

---


### OpsWorksResponsesDescribeVolumes <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeVolumes"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeVolumes.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesDescribeVolumes(__scope: Construct, __resources: string[], __input: OpsWorksDescribeVolumesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeVolumes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeVolumes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeVolumes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksDescribeVolumesRequest`](#aws-cdk-sdk.opsworks.OpsWorksDescribeVolumesRequest)

---



#### Properties <a name="Properties"></a>

##### `volumes`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesDescribeVolumes.property.volumes"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksVolume`](#aws-cdk-sdk.opsworks.OpsWorksVolume)[]

---


### OpsWorksResponsesFetchHostnameSuggestion <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesFetchHostnameSuggestion"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesFetchHostnameSuggestion.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesFetchHostnameSuggestion(__scope: Construct, __resources: string[], __input: OpsWorksGetHostnameSuggestionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesFetchHostnameSuggestion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesFetchHostnameSuggestion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesFetchHostnameSuggestion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksGetHostnameSuggestionRequest`](#aws-cdk-sdk.opsworks.OpsWorksGetHostnameSuggestionRequest)

---



#### Properties <a name="Properties"></a>

##### `hostname`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesFetchHostnameSuggestion.property.hostname"></a>

- *Type:* `string`

---

##### `layerId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesFetchHostnameSuggestion.property.layerId"></a>

- *Type:* `string`

---


### OpsWorksResponsesGrantAccess <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccess"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccess.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesGrantAccess(__scope: Construct, __resources: string[], __input: OpsWorksGrantAccessRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksGrantAccessRequest`](#aws-cdk-sdk.opsworks.OpsWorksGrantAccessRequest)

---



#### Properties <a name="Properties"></a>

##### `temporaryCredential`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccess.property.temporaryCredential"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccessTemporaryCredential`](#aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccessTemporaryCredential)

---


### OpsWorksResponsesGrantAccessTemporaryCredential <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccessTemporaryCredential"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccessTemporaryCredential.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesGrantAccessTemporaryCredential(__scope: Construct, __resources: string[], __input: OpsWorksGrantAccessRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccessTemporaryCredential.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccessTemporaryCredential.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccessTemporaryCredential.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksGrantAccessRequest`](#aws-cdk-sdk.opsworks.OpsWorksGrantAccessRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccessTemporaryCredential.property.instanceId"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccessTemporaryCredential.property.password"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccessTemporaryCredential.property.username"></a>

- *Type:* `string`

---

##### `validForInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesGrantAccessTemporaryCredential.property.validForInMinutes"></a>

- *Type:* `number`

---


### OpsWorksResponsesListTags <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesListTags"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesListTags.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesListTags(__scope: Construct, __resources: string[], __input: OpsWorksListTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesListTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesListTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesListTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksListTagsRequest`](#aws-cdk-sdk.opsworks.OpsWorksListTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesListTags.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesListTags.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### OpsWorksResponsesRegisterEcsCluster <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterEcsCluster"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterEcsCluster.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesRegisterEcsCluster(__scope: Construct, __resources: string[], __input: OpsWorksRegisterEcsClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterEcsCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterEcsCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterEcsCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRegisterEcsClusterRequest`](#aws-cdk-sdk.opsworks.OpsWorksRegisterEcsClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `ecsClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterEcsCluster.property.ecsClusterArn"></a>

- *Type:* `string`

---


### OpsWorksResponsesRegisterElasticIp <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterElasticIp"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterElasticIp.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesRegisterElasticIp(__scope: Construct, __resources: string[], __input: OpsWorksRegisterElasticIpRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterElasticIp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterElasticIp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterElasticIp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRegisterElasticIpRequest`](#aws-cdk-sdk.opsworks.OpsWorksRegisterElasticIpRequest)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterElasticIp.property.elasticIp"></a>

- *Type:* `string`

---


### OpsWorksResponsesRegisterInstance <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterInstance"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterInstance.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesRegisterInstance(__scope: Construct, __resources: string[], __input: OpsWorksRegisterInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRegisterInstanceRequest`](#aws-cdk-sdk.opsworks.OpsWorksRegisterInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterInstance.property.instanceId"></a>

- *Type:* `string`

---


### OpsWorksResponsesRegisterVolume <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterVolume"></a>

#### Initializer <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterVolume.Initializer"></a>

```typescript
import { opsworks } from 'aws-cdk-sdk'

new opsworks.OpsWorksResponsesRegisterVolume(__scope: Construct, __resources: string[], __input: OpsWorksRegisterVolumeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterVolume.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterVolume.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterVolume.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.opsworks.OpsWorksRegisterVolumeRequest`](#aws-cdk-sdk.opsworks.OpsWorksRegisterVolumeRequest)

---



#### Properties <a name="Properties"></a>

##### `volumeId`<sup>Required</sup> <a name="aws-cdk-sdk.opsworks.OpsWorksResponsesRegisterVolume.property.volumeId"></a>

- *Type:* `string`

---



