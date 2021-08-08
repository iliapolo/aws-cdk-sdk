# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AppMeshClient <a name="aws-cdk-sdk.appmesh.AppMeshClient"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshClient.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createGatewayRoute` <a name="aws-cdk-sdk.appmesh.AppMeshClient.createGatewayRoute"></a>

```typescript
public createGatewayRoute(input: AppMeshCreateGatewayRouteInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---

##### `createMesh` <a name="aws-cdk-sdk.appmesh.AppMeshClient.createMesh"></a>

```typescript
public createMesh(input: AppMeshCreateMeshInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateMeshInput`](#aws-cdk-sdk.appmesh.AppMeshCreateMeshInput)

---

##### `createRoute` <a name="aws-cdk-sdk.appmesh.AppMeshClient.createRoute"></a>

```typescript
public createRoute(input: AppMeshCreateRouteInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---

##### `createVirtualGateway` <a name="aws-cdk-sdk.appmesh.AppMeshClient.createVirtualGateway"></a>

```typescript
public createVirtualGateway(input: AppMeshCreateVirtualGatewayInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---

##### `createVirtualNode` <a name="aws-cdk-sdk.appmesh.AppMeshClient.createVirtualNode"></a>

```typescript
public createVirtualNode(input: AppMeshCreateVirtualNodeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---

##### `createVirtualRouter` <a name="aws-cdk-sdk.appmesh.AppMeshClient.createVirtualRouter"></a>

```typescript
public createVirtualRouter(input: AppMeshCreateVirtualRouterInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput)

---

##### `createVirtualService` <a name="aws-cdk-sdk.appmesh.AppMeshClient.createVirtualService"></a>

```typescript
public createVirtualService(input: AppMeshCreateVirtualServiceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput)

---

##### `deleteGatewayRoute` <a name="aws-cdk-sdk.appmesh.AppMeshClient.deleteGatewayRoute"></a>

```typescript
public deleteGatewayRoute(input: AppMeshDeleteGatewayRouteInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---

##### `deleteMesh` <a name="aws-cdk-sdk.appmesh.AppMeshClient.deleteMesh"></a>

```typescript
public deleteMesh(input: AppMeshDeleteMeshInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput)

---

##### `deleteRoute` <a name="aws-cdk-sdk.appmesh.AppMeshClient.deleteRoute"></a>

```typescript
public deleteRoute(input: AppMeshDeleteRouteInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---

##### `deleteVirtualGateway` <a name="aws-cdk-sdk.appmesh.AppMeshClient.deleteVirtualGateway"></a>

```typescript
public deleteVirtualGateway(input: AppMeshDeleteVirtualGatewayInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---

##### `deleteVirtualNode` <a name="aws-cdk-sdk.appmesh.AppMeshClient.deleteVirtualNode"></a>

```typescript
public deleteVirtualNode(input: AppMeshDeleteVirtualNodeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---

##### `deleteVirtualRouter` <a name="aws-cdk-sdk.appmesh.AppMeshClient.deleteVirtualRouter"></a>

```typescript
public deleteVirtualRouter(input: AppMeshDeleteVirtualRouterInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput)

---

##### `deleteVirtualService` <a name="aws-cdk-sdk.appmesh.AppMeshClient.deleteVirtualService"></a>

```typescript
public deleteVirtualService(input: AppMeshDeleteVirtualServiceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput)

---

##### `describeGatewayRoute` <a name="aws-cdk-sdk.appmesh.AppMeshClient.describeGatewayRoute"></a>

```typescript
public describeGatewayRoute(input: AppMeshDescribeGatewayRouteInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---

##### `describeMesh` <a name="aws-cdk-sdk.appmesh.AppMeshClient.describeMesh"></a>

```typescript
public describeMesh(input: AppMeshDescribeMeshInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput)

---

##### `describeRoute` <a name="aws-cdk-sdk.appmesh.AppMeshClient.describeRoute"></a>

```typescript
public describeRoute(input: AppMeshDescribeRouteInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---

##### `describeVirtualGateway` <a name="aws-cdk-sdk.appmesh.AppMeshClient.describeVirtualGateway"></a>

```typescript
public describeVirtualGateway(input: AppMeshDescribeVirtualGatewayInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---

##### `describeVirtualNode` <a name="aws-cdk-sdk.appmesh.AppMeshClient.describeVirtualNode"></a>

```typescript
public describeVirtualNode(input: AppMeshDescribeVirtualNodeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---

##### `describeVirtualRouter` <a name="aws-cdk-sdk.appmesh.AppMeshClient.describeVirtualRouter"></a>

```typescript
public describeVirtualRouter(input: AppMeshDescribeVirtualRouterInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput)

---

##### `describeVirtualService` <a name="aws-cdk-sdk.appmesh.AppMeshClient.describeVirtualService"></a>

```typescript
public describeVirtualService(input: AppMeshDescribeVirtualServiceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput)

---

##### `listGatewayRoutes` <a name="aws-cdk-sdk.appmesh.AppMeshClient.listGatewayRoutes"></a>

```typescript
public listGatewayRoutes(input: AppMeshListGatewayRoutesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListGatewayRoutesInput`](#aws-cdk-sdk.appmesh.AppMeshListGatewayRoutesInput)

---

##### `listMeshes` <a name="aws-cdk-sdk.appmesh.AppMeshClient.listMeshes"></a>

```typescript
public listMeshes(input: AppMeshListMeshesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListMeshesInput`](#aws-cdk-sdk.appmesh.AppMeshListMeshesInput)

---

##### `listRoutes` <a name="aws-cdk-sdk.appmesh.AppMeshClient.listRoutes"></a>

```typescript
public listRoutes(input: AppMeshListRoutesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListRoutesInput`](#aws-cdk-sdk.appmesh.AppMeshListRoutesInput)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.appmesh.AppMeshClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: AppMeshListTagsForResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListTagsForResourceInput`](#aws-cdk-sdk.appmesh.AppMeshListTagsForResourceInput)

---

##### `listVirtualGateways` <a name="aws-cdk-sdk.appmesh.AppMeshClient.listVirtualGateways"></a>

```typescript
public listVirtualGateways(input: AppMeshListVirtualGatewaysInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListVirtualGatewaysInput`](#aws-cdk-sdk.appmesh.AppMeshListVirtualGatewaysInput)

---

##### `listVirtualNodes` <a name="aws-cdk-sdk.appmesh.AppMeshClient.listVirtualNodes"></a>

```typescript
public listVirtualNodes(input: AppMeshListVirtualNodesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListVirtualNodesInput`](#aws-cdk-sdk.appmesh.AppMeshListVirtualNodesInput)

---

##### `listVirtualRouters` <a name="aws-cdk-sdk.appmesh.AppMeshClient.listVirtualRouters"></a>

```typescript
public listVirtualRouters(input: AppMeshListVirtualRoutersInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListVirtualRoutersInput`](#aws-cdk-sdk.appmesh.AppMeshListVirtualRoutersInput)

---

##### `listVirtualServices` <a name="aws-cdk-sdk.appmesh.AppMeshClient.listVirtualServices"></a>

```typescript
public listVirtualServices(input: AppMeshListVirtualServicesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListVirtualServicesInput`](#aws-cdk-sdk.appmesh.AppMeshListVirtualServicesInput)

---

##### `tagResource` <a name="aws-cdk-sdk.appmesh.AppMeshClient.tagResource"></a>

```typescript
public tagResource(input: AppMeshTagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTagResourceInput`](#aws-cdk-sdk.appmesh.AppMeshTagResourceInput)

---

##### `untagResource` <a name="aws-cdk-sdk.appmesh.AppMeshClient.untagResource"></a>

```typescript
public untagResource(input: AppMeshUntagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUntagResourceInput`](#aws-cdk-sdk.appmesh.AppMeshUntagResourceInput)

---

##### `updateGatewayRoute` <a name="aws-cdk-sdk.appmesh.AppMeshClient.updateGatewayRoute"></a>

```typescript
public updateGatewayRoute(input: AppMeshUpdateGatewayRouteInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---

##### `updateMesh` <a name="aws-cdk-sdk.appmesh.AppMeshClient.updateMesh"></a>

```typescript
public updateMesh(input: AppMeshUpdateMeshInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput)

---

##### `updateRoute` <a name="aws-cdk-sdk.appmesh.AppMeshClient.updateRoute"></a>

```typescript
public updateRoute(input: AppMeshUpdateRouteInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---

##### `updateVirtualGateway` <a name="aws-cdk-sdk.appmesh.AppMeshClient.updateVirtualGateway"></a>

```typescript
public updateVirtualGateway(input: AppMeshUpdateVirtualGatewayInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---

##### `updateVirtualNode` <a name="aws-cdk-sdk.appmesh.AppMeshClient.updateVirtualNode"></a>

```typescript
public updateVirtualNode(input: AppMeshUpdateVirtualNodeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---

##### `updateVirtualRouter` <a name="aws-cdk-sdk.appmesh.AppMeshClient.updateVirtualRouter"></a>

```typescript
public updateVirtualRouter(input: AppMeshUpdateVirtualRouterInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput)

---

##### `updateVirtualService` <a name="aws-cdk-sdk.appmesh.AppMeshClient.updateVirtualService"></a>

```typescript
public updateVirtualService(input: AppMeshUpdateVirtualServiceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput)

---




## Structs <a name="Structs"></a>

### AppMeshAccessLog <a name="aws-cdk-sdk.appmesh.AppMeshAccessLog"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshAccessLog: appmesh.AppMeshAccessLog = { ... }
```

##### `file`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshAccessLog.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshFileAccessLog`](#aws-cdk-sdk.appmesh.AppMeshFileAccessLog)

---

### AppMeshAwsCloudMapInstanceAttribute <a name="aws-cdk-sdk.appmesh.AppMeshAwsCloudMapInstanceAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshAwsCloudMapInstanceAttribute: appmesh.AppMeshAwsCloudMapInstanceAttribute = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshAwsCloudMapInstanceAttribute.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshAwsCloudMapInstanceAttribute.property.value"></a>

- *Type:* `string`

---

### AppMeshAwsCloudMapServiceDiscovery <a name="aws-cdk-sdk.appmesh.AppMeshAwsCloudMapServiceDiscovery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshAwsCloudMapServiceDiscovery: appmesh.AppMeshAwsCloudMapServiceDiscovery = { ... }
```

##### `namespaceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshAwsCloudMapServiceDiscovery.property.namespaceName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshAwsCloudMapServiceDiscovery.property.serviceName"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshAwsCloudMapServiceDiscovery.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshAwsCloudMapInstanceAttribute`](#aws-cdk-sdk.appmesh.AppMeshAwsCloudMapInstanceAttribute)[]

---

### AppMeshBackend <a name="aws-cdk-sdk.appmesh.AppMeshBackend"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshBackend: appmesh.AppMeshBackend = { ... }
```

##### `virtualService`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshBackend.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualServiceBackend`](#aws-cdk-sdk.appmesh.AppMeshVirtualServiceBackend)

---

### AppMeshBackendDefaults <a name="aws-cdk-sdk.appmesh.AppMeshBackendDefaults"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshBackendDefaults: appmesh.AppMeshBackendDefaults = { ... }
```

##### `clientPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshBackendDefaults.property.clientPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshClientPolicy`](#aws-cdk-sdk.appmesh.AppMeshClientPolicy)

---

### AppMeshClientPolicy <a name="aws-cdk-sdk.appmesh.AppMeshClientPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshClientPolicy: appmesh.AppMeshClientPolicy = { ... }
```

##### `tls`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClientPolicy.property.tls"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshClientPolicyTls`](#aws-cdk-sdk.appmesh.AppMeshClientPolicyTls)

---

### AppMeshClientPolicyTls <a name="aws-cdk-sdk.appmesh.AppMeshClientPolicyTls"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshClientPolicyTls: appmesh.AppMeshClientPolicyTls = { ... }
```

##### `validation`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClientPolicyTls.property.validation"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTlsValidationContext`](#aws-cdk-sdk.appmesh.AppMeshTlsValidationContext)

---

##### `enforce`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClientPolicyTls.property.enforce"></a>

- *Type:* `boolean`

---

##### `ports`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshClientPolicyTls.property.ports"></a>

- *Type:* `number`[]

---

### AppMeshCreateGatewayRouteInput <a name="aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshCreateGatewayRouteInput: appmesh.AppMeshCreateGatewayRouteInput = { ... }
```

##### `gatewayRouteName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput.property.gatewayRouteName"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput.property.meshName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGatewayRouteSpec`](#aws-cdk-sdk.appmesh.AppMeshGatewayRouteSpec)

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput.property.virtualGatewayName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput.property.clientToken"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput.property.meshOwner"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTagRef`](#aws-cdk-sdk.appmesh.AppMeshTagRef)[]

---

### AppMeshCreateGatewayRouteOutput <a name="aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshCreateGatewayRouteOutput: appmesh.AppMeshCreateGatewayRouteOutput = { ... }
```

##### `gatewayRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteOutput.property.gatewayRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGatewayRouteData`](#aws-cdk-sdk.appmesh.AppMeshGatewayRouteData)

---

### AppMeshCreateMeshInput <a name="aws-cdk-sdk.appmesh.AppMeshCreateMeshInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshCreateMeshInput: appmesh.AppMeshCreateMeshInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateMeshInput.property.meshName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateMeshInput.property.clientToken"></a>

- *Type:* `string`

---

##### `spec`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateMeshInput.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshMeshSpec`](#aws-cdk-sdk.appmesh.AppMeshMeshSpec)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateMeshInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTagRef`](#aws-cdk-sdk.appmesh.AppMeshTagRef)[]

---

### AppMeshCreateMeshOutput <a name="aws-cdk-sdk.appmesh.AppMeshCreateMeshOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshCreateMeshOutput: appmesh.AppMeshCreateMeshOutput = { ... }
```

##### `mesh`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateMeshOutput.property.mesh"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshMeshData`](#aws-cdk-sdk.appmesh.AppMeshMeshData)

---

### AppMeshCreateRouteInput <a name="aws-cdk-sdk.appmesh.AppMeshCreateRouteInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshCreateRouteInput: appmesh.AppMeshCreateRouteInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateRouteInput.property.meshName"></a>

- *Type:* `string`

---

##### `routeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateRouteInput.property.routeName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateRouteInput.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshRouteSpec`](#aws-cdk-sdk.appmesh.AppMeshRouteSpec)

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateRouteInput.property.virtualRouterName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateRouteInput.property.clientToken"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateRouteInput.property.meshOwner"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateRouteInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTagRef`](#aws-cdk-sdk.appmesh.AppMeshTagRef)[]

---

### AppMeshCreateRouteOutput <a name="aws-cdk-sdk.appmesh.AppMeshCreateRouteOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshCreateRouteOutput: appmesh.AppMeshCreateRouteOutput = { ... }
```

##### `route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateRouteOutput.property.route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshRouteData`](#aws-cdk-sdk.appmesh.AppMeshRouteData)

---

### AppMeshCreateVirtualGatewayInput <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshCreateVirtualGatewayInput: appmesh.AppMeshCreateVirtualGatewayInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput.property.meshName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewaySpec`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewaySpec)

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput.property.virtualGatewayName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput.property.clientToken"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput.property.meshOwner"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTagRef`](#aws-cdk-sdk.appmesh.AppMeshTagRef)[]

---

### AppMeshCreateVirtualGatewayOutput <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshCreateVirtualGatewayOutput: appmesh.AppMeshCreateVirtualGatewayOutput = { ... }
```

##### `virtualGateway`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayOutput.property.virtualGateway"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayData`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayData)

---

### AppMeshCreateVirtualNodeInput <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshCreateVirtualNodeInput: appmesh.AppMeshCreateVirtualNodeInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput.property.meshName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeSpec`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeSpec)

---

##### `virtualNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput.property.virtualNodeName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput.property.clientToken"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput.property.meshOwner"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTagRef`](#aws-cdk-sdk.appmesh.AppMeshTagRef)[]

---

### AppMeshCreateVirtualNodeOutput <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshCreateVirtualNodeOutput: appmesh.AppMeshCreateVirtualNodeOutput = { ... }
```

##### `virtualNode`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeOutput.property.virtualNode"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeData`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeData)

---

### AppMeshCreateVirtualRouterInput <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshCreateVirtualRouterInput: appmesh.AppMeshCreateVirtualRouterInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput.property.meshName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterSpec`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterSpec)

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput.property.virtualRouterName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput.property.clientToken"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput.property.meshOwner"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTagRef`](#aws-cdk-sdk.appmesh.AppMeshTagRef)[]

---

### AppMeshCreateVirtualRouterOutput <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshCreateVirtualRouterOutput: appmesh.AppMeshCreateVirtualRouterOutput = { ... }
```

##### `virtualRouter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterOutput.property.virtualRouter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterData`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterData)

---

### AppMeshCreateVirtualServiceInput <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshCreateVirtualServiceInput: appmesh.AppMeshCreateVirtualServiceInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput.property.meshName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualServiceSpec`](#aws-cdk-sdk.appmesh.AppMeshVirtualServiceSpec)

---

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput.property.virtualServiceName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput.property.clientToken"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput.property.meshOwner"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTagRef`](#aws-cdk-sdk.appmesh.AppMeshTagRef)[]

---

### AppMeshCreateVirtualServiceOutput <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshCreateVirtualServiceOutput: appmesh.AppMeshCreateVirtualServiceOutput = { ... }
```

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceOutput.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualServiceData`](#aws-cdk-sdk.appmesh.AppMeshVirtualServiceData)

---

### AppMeshDeleteGatewayRouteInput <a name="aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDeleteGatewayRouteInput: appmesh.AppMeshDeleteGatewayRouteInput = { ... }
```

##### `gatewayRouteName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput.property.gatewayRouteName"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput.property.meshName"></a>

- *Type:* `string`

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput.property.virtualGatewayName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshDeleteGatewayRouteOutput <a name="aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDeleteGatewayRouteOutput: appmesh.AppMeshDeleteGatewayRouteOutput = { ... }
```

##### `gatewayRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteOutput.property.gatewayRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGatewayRouteData`](#aws-cdk-sdk.appmesh.AppMeshGatewayRouteData)

---

### AppMeshDeleteMeshInput <a name="aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDeleteMeshInput: appmesh.AppMeshDeleteMeshInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput.property.meshName"></a>

- *Type:* `string`

---

### AppMeshDeleteMeshOutput <a name="aws-cdk-sdk.appmesh.AppMeshDeleteMeshOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDeleteMeshOutput: appmesh.AppMeshDeleteMeshOutput = { ... }
```

##### `mesh`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteMeshOutput.property.mesh"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshMeshData`](#aws-cdk-sdk.appmesh.AppMeshMeshData)

---

### AppMeshDeleteRouteInput <a name="aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDeleteRouteInput: appmesh.AppMeshDeleteRouteInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput.property.meshName"></a>

- *Type:* `string`

---

##### `routeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput.property.routeName"></a>

- *Type:* `string`

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput.property.virtualRouterName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshDeleteRouteOutput <a name="aws-cdk-sdk.appmesh.AppMeshDeleteRouteOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDeleteRouteOutput: appmesh.AppMeshDeleteRouteOutput = { ... }
```

##### `route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteRouteOutput.property.route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshRouteData`](#aws-cdk-sdk.appmesh.AppMeshRouteData)

---

### AppMeshDeleteVirtualGatewayInput <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDeleteVirtualGatewayInput: appmesh.AppMeshDeleteVirtualGatewayInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput.property.meshName"></a>

- *Type:* `string`

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput.property.virtualGatewayName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshDeleteVirtualGatewayOutput <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDeleteVirtualGatewayOutput: appmesh.AppMeshDeleteVirtualGatewayOutput = { ... }
```

##### `virtualGateway`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayOutput.property.virtualGateway"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayData`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayData)

---

### AppMeshDeleteVirtualNodeInput <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDeleteVirtualNodeInput: appmesh.AppMeshDeleteVirtualNodeInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput.property.meshName"></a>

- *Type:* `string`

---

##### `virtualNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput.property.virtualNodeName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshDeleteVirtualNodeOutput <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDeleteVirtualNodeOutput: appmesh.AppMeshDeleteVirtualNodeOutput = { ... }
```

##### `virtualNode`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeOutput.property.virtualNode"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeData`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeData)

---

### AppMeshDeleteVirtualRouterInput <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDeleteVirtualRouterInput: appmesh.AppMeshDeleteVirtualRouterInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput.property.meshName"></a>

- *Type:* `string`

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput.property.virtualRouterName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshDeleteVirtualRouterOutput <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDeleteVirtualRouterOutput: appmesh.AppMeshDeleteVirtualRouterOutput = { ... }
```

##### `virtualRouter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterOutput.property.virtualRouter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterData`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterData)

---

### AppMeshDeleteVirtualServiceInput <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDeleteVirtualServiceInput: appmesh.AppMeshDeleteVirtualServiceInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput.property.meshName"></a>

- *Type:* `string`

---

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput.property.virtualServiceName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshDeleteVirtualServiceOutput <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDeleteVirtualServiceOutput: appmesh.AppMeshDeleteVirtualServiceOutput = { ... }
```

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceOutput.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualServiceData`](#aws-cdk-sdk.appmesh.AppMeshVirtualServiceData)

---

### AppMeshDescribeGatewayRouteInput <a name="aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDescribeGatewayRouteInput: appmesh.AppMeshDescribeGatewayRouteInput = { ... }
```

##### `gatewayRouteName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput.property.gatewayRouteName"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput.property.meshName"></a>

- *Type:* `string`

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput.property.virtualGatewayName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshDescribeGatewayRouteOutput <a name="aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDescribeGatewayRouteOutput: appmesh.AppMeshDescribeGatewayRouteOutput = { ... }
```

##### `gatewayRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteOutput.property.gatewayRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGatewayRouteData`](#aws-cdk-sdk.appmesh.AppMeshGatewayRouteData)

---

### AppMeshDescribeMeshInput <a name="aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDescribeMeshInput: appmesh.AppMeshDescribeMeshInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput.property.meshName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshDescribeMeshOutput <a name="aws-cdk-sdk.appmesh.AppMeshDescribeMeshOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDescribeMeshOutput: appmesh.AppMeshDescribeMeshOutput = { ... }
```

##### `mesh`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeMeshOutput.property.mesh"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshMeshData`](#aws-cdk-sdk.appmesh.AppMeshMeshData)

---

### AppMeshDescribeRouteInput <a name="aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDescribeRouteInput: appmesh.AppMeshDescribeRouteInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput.property.meshName"></a>

- *Type:* `string`

---

##### `routeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput.property.routeName"></a>

- *Type:* `string`

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput.property.virtualRouterName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshDescribeRouteOutput <a name="aws-cdk-sdk.appmesh.AppMeshDescribeRouteOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDescribeRouteOutput: appmesh.AppMeshDescribeRouteOutput = { ... }
```

##### `route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeRouteOutput.property.route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshRouteData`](#aws-cdk-sdk.appmesh.AppMeshRouteData)

---

### AppMeshDescribeVirtualGatewayInput <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDescribeVirtualGatewayInput: appmesh.AppMeshDescribeVirtualGatewayInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput.property.meshName"></a>

- *Type:* `string`

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput.property.virtualGatewayName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshDescribeVirtualGatewayOutput <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDescribeVirtualGatewayOutput: appmesh.AppMeshDescribeVirtualGatewayOutput = { ... }
```

##### `virtualGateway`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayOutput.property.virtualGateway"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayData`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayData)

---

### AppMeshDescribeVirtualNodeInput <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDescribeVirtualNodeInput: appmesh.AppMeshDescribeVirtualNodeInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput.property.meshName"></a>

- *Type:* `string`

---

##### `virtualNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput.property.virtualNodeName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshDescribeVirtualNodeOutput <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDescribeVirtualNodeOutput: appmesh.AppMeshDescribeVirtualNodeOutput = { ... }
```

##### `virtualNode`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeOutput.property.virtualNode"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeData`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeData)

---

### AppMeshDescribeVirtualRouterInput <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDescribeVirtualRouterInput: appmesh.AppMeshDescribeVirtualRouterInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput.property.meshName"></a>

- *Type:* `string`

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput.property.virtualRouterName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshDescribeVirtualRouterOutput <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDescribeVirtualRouterOutput: appmesh.AppMeshDescribeVirtualRouterOutput = { ... }
```

##### `virtualRouter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterOutput.property.virtualRouter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterData`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterData)

---

### AppMeshDescribeVirtualServiceInput <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDescribeVirtualServiceInput: appmesh.AppMeshDescribeVirtualServiceInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput.property.meshName"></a>

- *Type:* `string`

---

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput.property.virtualServiceName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshDescribeVirtualServiceOutput <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDescribeVirtualServiceOutput: appmesh.AppMeshDescribeVirtualServiceOutput = { ... }
```

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceOutput.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualServiceData`](#aws-cdk-sdk.appmesh.AppMeshVirtualServiceData)

---

### AppMeshDnsServiceDiscovery <a name="aws-cdk-sdk.appmesh.AppMeshDnsServiceDiscovery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDnsServiceDiscovery: appmesh.AppMeshDnsServiceDiscovery = { ... }
```

##### `hostname`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDnsServiceDiscovery.property.hostname"></a>

- *Type:* `string`

---

### AppMeshDuration <a name="aws-cdk-sdk.appmesh.AppMeshDuration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshDuration: appmesh.AppMeshDuration = { ... }
```

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDuration.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshDuration.property.value"></a>

- *Type:* `number`

---

### AppMeshEgressFilter <a name="aws-cdk-sdk.appmesh.AppMeshEgressFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshEgressFilter: appmesh.AppMeshEgressFilter = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshEgressFilter.property.type"></a>

- *Type:* `string`

---

### AppMeshFileAccessLog <a name="aws-cdk-sdk.appmesh.AppMeshFileAccessLog"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshFileAccessLog: appmesh.AppMeshFileAccessLog = { ... }
```

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshFileAccessLog.property.path"></a>

- *Type:* `string`

---

### AppMeshGatewayRouteData <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGatewayRouteData: appmesh.AppMeshGatewayRouteData = { ... }
```

##### `gatewayRouteName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteData.property.gatewayRouteName"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteData.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteData.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResourceMetadata`](#aws-cdk-sdk.appmesh.AppMeshResourceMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteData.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGatewayRouteSpec`](#aws-cdk-sdk.appmesh.AppMeshGatewayRouteSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteData.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGatewayRouteStatus`](#aws-cdk-sdk.appmesh.AppMeshGatewayRouteStatus)

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteData.property.virtualGatewayName"></a>

- *Type:* `string`

---

### AppMeshGatewayRouteRef <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteRef"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGatewayRouteRef: appmesh.AppMeshGatewayRouteRef = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteRef.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteRef.property.createdAt"></a>

- *Type:* `string`

---

##### `gatewayRouteName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteRef.property.gatewayRouteName"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteRef.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteRef.property.meshName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteRef.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteRef.property.resourceOwner"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteRef.property.version"></a>

- *Type:* `number`

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteRef.property.virtualGatewayName"></a>

- *Type:* `string`

---

### AppMeshGatewayRouteSpec <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteSpec"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGatewayRouteSpec: appmesh.AppMeshGatewayRouteSpec = { ... }
```

##### `grpcRoute`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteSpec.property.grpcRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGrpcGatewayRoute`](#aws-cdk-sdk.appmesh.AppMeshGrpcGatewayRoute)

---

##### `http2Route`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteSpec.property.http2Route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpGatewayRoute`](#aws-cdk-sdk.appmesh.AppMeshHttpGatewayRoute)

---

##### `httpRoute`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteSpec.property.httpRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpGatewayRoute`](#aws-cdk-sdk.appmesh.AppMeshHttpGatewayRoute)

---

### AppMeshGatewayRouteStatus <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGatewayRouteStatus: appmesh.AppMeshGatewayRouteStatus = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteStatus.property.status"></a>

- *Type:* `string`

---

### AppMeshGatewayRouteTarget <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGatewayRouteTarget: appmesh.AppMeshGatewayRouteTarget = { ... }
```

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteTarget.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGatewayRouteVirtualService`](#aws-cdk-sdk.appmesh.AppMeshGatewayRouteVirtualService)

---

### AppMeshGatewayRouteVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteVirtualService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGatewayRouteVirtualService: appmesh.AppMeshGatewayRouteVirtualService = { ... }
```

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGatewayRouteVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---

### AppMeshGrpcGatewayRoute <a name="aws-cdk-sdk.appmesh.AppMeshGrpcGatewayRoute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGrpcGatewayRoute: appmesh.AppMeshGrpcGatewayRoute = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcGatewayRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGrpcGatewayRouteAction`](#aws-cdk-sdk.appmesh.AppMeshGrpcGatewayRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcGatewayRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGrpcGatewayRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshGrpcGatewayRouteMatch)

---

### AppMeshGrpcGatewayRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshGrpcGatewayRouteAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGrpcGatewayRouteAction: appmesh.AppMeshGrpcGatewayRouteAction = { ... }
```

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcGatewayRouteAction.property.target"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGatewayRouteTarget`](#aws-cdk-sdk.appmesh.AppMeshGatewayRouteTarget)

---

### AppMeshGrpcGatewayRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshGrpcGatewayRouteMatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGrpcGatewayRouteMatch: appmesh.AppMeshGrpcGatewayRouteMatch = { ... }
```

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcGatewayRouteMatch.property.serviceName"></a>

- *Type:* `string`

---

### AppMeshGrpcRetryPolicy <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRetryPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGrpcRetryPolicy: appmesh.AppMeshGrpcRetryPolicy = { ... }
```

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRetryPolicy.property.maxRetries"></a>

- *Type:* `number`

---

##### `perRetryTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRetryPolicy.property.perRetryTimeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDuration`](#aws-cdk-sdk.appmesh.AppMeshDuration)

---

##### `grpcRetryEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRetryPolicy.property.grpcRetryEvents"></a>

- *Type:* `string`[]

---

##### `httpRetryEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRetryPolicy.property.httpRetryEvents"></a>

- *Type:* `string`[]

---

##### `tcpRetryEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRetryPolicy.property.tcpRetryEvents"></a>

- *Type:* `string`[]

---

### AppMeshGrpcRoute <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRoute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGrpcRoute: appmesh.AppMeshGrpcRoute = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGrpcRouteAction`](#aws-cdk-sdk.appmesh.AppMeshGrpcRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGrpcRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshGrpcRouteMatch)

---

##### `retryPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRoute.property.retryPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGrpcRetryPolicy`](#aws-cdk-sdk.appmesh.AppMeshGrpcRetryPolicy)

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRoute.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGrpcTimeout`](#aws-cdk-sdk.appmesh.AppMeshGrpcTimeout)

---

### AppMeshGrpcRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGrpcRouteAction: appmesh.AppMeshGrpcRouteAction = { ... }
```

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---

### AppMeshGrpcRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteMatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGrpcRouteMatch: appmesh.AppMeshGrpcRouteMatch = { ... }
```

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteMatch.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadata`](#aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadata)[]

---

##### `methodName`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteMatch.property.methodName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteMatch.property.serviceName"></a>

- *Type:* `string`

---

### AppMeshGrpcRouteMetadata <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGrpcRouteMetadata: appmesh.AppMeshGrpcRouteMetadata = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadata.property.name"></a>

- *Type:* `string`

---

##### `invert`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadata.property.invert"></a>

- *Type:* `boolean`

---

##### `match`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadata.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadataMatchMethod`](#aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadataMatchMethod)

---

### AppMeshGrpcRouteMetadataMatchMethod <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadataMatchMethod"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGrpcRouteMetadataMatchMethod: appmesh.AppMeshGrpcRouteMetadataMatchMethod = { ... }
```

##### `exact`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadataMatchMethod.property.exact"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadataMatchMethod.property.prefix"></a>

- *Type:* `string`

---

##### `range`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadataMatchMethod.property.range"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshMatchRange`](#aws-cdk-sdk.appmesh.AppMeshMatchRange)

---

##### `regex`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadataMatchMethod.property.regex"></a>

- *Type:* `string`

---

##### `suffix`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadataMatchMethod.property.suffix"></a>

- *Type:* `string`

---

### AppMeshGrpcTimeout <a name="aws-cdk-sdk.appmesh.AppMeshGrpcTimeout"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshGrpcTimeout: appmesh.AppMeshGrpcTimeout = { ... }
```

##### `idle`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDuration`](#aws-cdk-sdk.appmesh.AppMeshDuration)

---

##### `perRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshGrpcTimeout.property.perRequest"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDuration`](#aws-cdk-sdk.appmesh.AppMeshDuration)

---

### AppMeshHeaderMatchMethod <a name="aws-cdk-sdk.appmesh.AppMeshHeaderMatchMethod"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshHeaderMatchMethod: appmesh.AppMeshHeaderMatchMethod = { ... }
```

##### `exact`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHeaderMatchMethod.property.exact"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHeaderMatchMethod.property.prefix"></a>

- *Type:* `string`

---

##### `range`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHeaderMatchMethod.property.range"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshMatchRange`](#aws-cdk-sdk.appmesh.AppMeshMatchRange)

---

##### `regex`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHeaderMatchMethod.property.regex"></a>

- *Type:* `string`

---

##### `suffix`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHeaderMatchMethod.property.suffix"></a>

- *Type:* `string`

---

### AppMeshHealthCheckPolicy <a name="aws-cdk-sdk.appmesh.AppMeshHealthCheckPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshHealthCheckPolicy: appmesh.AppMeshHealthCheckPolicy = { ... }
```

##### `healthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHealthCheckPolicy.property.healthyThreshold"></a>

- *Type:* `number`

---

##### `intervalMillis`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHealthCheckPolicy.property.intervalMillis"></a>

- *Type:* `number`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHealthCheckPolicy.property.protocol"></a>

- *Type:* `string`

---

##### `timeoutMillis`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHealthCheckPolicy.property.timeoutMillis"></a>

- *Type:* `number`

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHealthCheckPolicy.property.unhealthyThreshold"></a>

- *Type:* `number`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHealthCheckPolicy.property.path"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHealthCheckPolicy.property.port"></a>

- *Type:* `number`

---

### AppMeshHttpGatewayRoute <a name="aws-cdk-sdk.appmesh.AppMeshHttpGatewayRoute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshHttpGatewayRoute: appmesh.AppMeshHttpGatewayRoute = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpGatewayRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpGatewayRouteAction`](#aws-cdk-sdk.appmesh.AppMeshHttpGatewayRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpGatewayRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpGatewayRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshHttpGatewayRouteMatch)

---

### AppMeshHttpGatewayRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshHttpGatewayRouteAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshHttpGatewayRouteAction: appmesh.AppMeshHttpGatewayRouteAction = { ... }
```

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpGatewayRouteAction.property.target"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGatewayRouteTarget`](#aws-cdk-sdk.appmesh.AppMeshGatewayRouteTarget)

---

### AppMeshHttpGatewayRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshHttpGatewayRouteMatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshHttpGatewayRouteMatch: appmesh.AppMeshHttpGatewayRouteMatch = { ... }
```

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpGatewayRouteMatch.property.prefix"></a>

- *Type:* `string`

---

### AppMeshHttpRetryPolicy <a name="aws-cdk-sdk.appmesh.AppMeshHttpRetryPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshHttpRetryPolicy: appmesh.AppMeshHttpRetryPolicy = { ... }
```

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRetryPolicy.property.maxRetries"></a>

- *Type:* `number`

---

##### `perRetryTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRetryPolicy.property.perRetryTimeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDuration`](#aws-cdk-sdk.appmesh.AppMeshDuration)

---

##### `httpRetryEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRetryPolicy.property.httpRetryEvents"></a>

- *Type:* `string`[]

---

##### `tcpRetryEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRetryPolicy.property.tcpRetryEvents"></a>

- *Type:* `string`[]

---

### AppMeshHttpRoute <a name="aws-cdk-sdk.appmesh.AppMeshHttpRoute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshHttpRoute: appmesh.AppMeshHttpRoute = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpRouteAction`](#aws-cdk-sdk.appmesh.AppMeshHttpRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshHttpRouteMatch)

---

##### `retryPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRoute.property.retryPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpRetryPolicy`](#aws-cdk-sdk.appmesh.AppMeshHttpRetryPolicy)

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRoute.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpTimeout`](#aws-cdk-sdk.appmesh.AppMeshHttpTimeout)

---

### AppMeshHttpRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshHttpRouteAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshHttpRouteAction: appmesh.AppMeshHttpRouteAction = { ... }
```

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---

### AppMeshHttpRouteHeader <a name="aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshHttpRouteHeader: appmesh.AppMeshHttpRouteHeader = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader.property.name"></a>

- *Type:* `string`

---

##### `invert`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader.property.invert"></a>

- *Type:* `boolean`

---

##### `match`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHeaderMatchMethod`](#aws-cdk-sdk.appmesh.AppMeshHeaderMatchMethod)

---

### AppMeshHttpRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshHttpRouteMatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshHttpRouteMatch: appmesh.AppMeshHttpRouteMatch = { ... }
```

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRouteMatch.property.prefix"></a>

- *Type:* `string`

---

##### `headers`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRouteMatch.property.headers"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader`](#aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader)[]

---

##### `method`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRouteMatch.property.method"></a>

- *Type:* `string`

---

##### `scheme`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpRouteMatch.property.scheme"></a>

- *Type:* `string`

---

### AppMeshHttpTimeout <a name="aws-cdk-sdk.appmesh.AppMeshHttpTimeout"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshHttpTimeout: appmesh.AppMeshHttpTimeout = { ... }
```

##### `idle`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDuration`](#aws-cdk-sdk.appmesh.AppMeshDuration)

---

##### `perRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshHttpTimeout.property.perRequest"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDuration`](#aws-cdk-sdk.appmesh.AppMeshDuration)

---

### AppMeshListener <a name="aws-cdk-sdk.appmesh.AppMeshListener"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListener: appmesh.AppMeshListener = { ... }
```

##### `portMapping`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListener.property.portMapping"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshPortMapping`](#aws-cdk-sdk.appmesh.AppMeshPortMapping)

---

##### `connectionPool`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListener.property.connectionPool"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeConnectionPool`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeConnectionPool)

---

##### `healthCheck`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListener.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHealthCheckPolicy`](#aws-cdk-sdk.appmesh.AppMeshHealthCheckPolicy)

---

##### `outlierDetection`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListener.property.outlierDetection"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshOutlierDetection`](#aws-cdk-sdk.appmesh.AppMeshOutlierDetection)

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListener.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListenerTimeout`](#aws-cdk-sdk.appmesh.AppMeshListenerTimeout)

---

##### `tls`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListener.property.tls"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListenerTls`](#aws-cdk-sdk.appmesh.AppMeshListenerTls)

---

### AppMeshListenerTimeout <a name="aws-cdk-sdk.appmesh.AppMeshListenerTimeout"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListenerTimeout: appmesh.AppMeshListenerTimeout = { ... }
```

##### `grpc`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListenerTimeout.property.grpc"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGrpcTimeout`](#aws-cdk-sdk.appmesh.AppMeshGrpcTimeout)

---

##### `http`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListenerTimeout.property.http"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpTimeout`](#aws-cdk-sdk.appmesh.AppMeshHttpTimeout)

---

##### `http2`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListenerTimeout.property.http2"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpTimeout`](#aws-cdk-sdk.appmesh.AppMeshHttpTimeout)

---

##### `tcp`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListenerTimeout.property.tcp"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTcpTimeout`](#aws-cdk-sdk.appmesh.AppMeshTcpTimeout)

---

### AppMeshListenerTls <a name="aws-cdk-sdk.appmesh.AppMeshListenerTls"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListenerTls: appmesh.AppMeshListenerTls = { ... }
```

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListenerTls.property.certificate"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListenerTlsCertificate`](#aws-cdk-sdk.appmesh.AppMeshListenerTlsCertificate)

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListenerTls.property.mode"></a>

- *Type:* `string`

---

### AppMeshListenerTlsAcmCertificate <a name="aws-cdk-sdk.appmesh.AppMeshListenerTlsAcmCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListenerTlsAcmCertificate: appmesh.AppMeshListenerTlsAcmCertificate = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListenerTlsAcmCertificate.property.certificateArn"></a>

- *Type:* `string`

---

### AppMeshListenerTlsCertificate <a name="aws-cdk-sdk.appmesh.AppMeshListenerTlsCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListenerTlsCertificate: appmesh.AppMeshListenerTlsCertificate = { ... }
```

##### `acm`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListenerTlsCertificate.property.acm"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListenerTlsAcmCertificate`](#aws-cdk-sdk.appmesh.AppMeshListenerTlsAcmCertificate)

---

##### `file`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListenerTlsCertificate.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListenerTlsFileCertificate`](#aws-cdk-sdk.appmesh.AppMeshListenerTlsFileCertificate)

---

### AppMeshListenerTlsFileCertificate <a name="aws-cdk-sdk.appmesh.AppMeshListenerTlsFileCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListenerTlsFileCertificate: appmesh.AppMeshListenerTlsFileCertificate = { ... }
```

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListenerTlsFileCertificate.property.certificateChain"></a>

- *Type:* `string`

---

##### `privateKey`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListenerTlsFileCertificate.property.privateKey"></a>

- *Type:* `string`

---

### AppMeshListGatewayRoutesInput <a name="aws-cdk-sdk.appmesh.AppMeshListGatewayRoutesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListGatewayRoutesInput: appmesh.AppMeshListGatewayRoutesInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListGatewayRoutesInput.property.meshName"></a>

- *Type:* `string`

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListGatewayRoutesInput.property.virtualGatewayName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListGatewayRoutesInput.property.limit"></a>

- *Type:* `number`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListGatewayRoutesInput.property.meshOwner"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListGatewayRoutesInput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshListGatewayRoutesOutput <a name="aws-cdk-sdk.appmesh.AppMeshListGatewayRoutesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListGatewayRoutesOutput: appmesh.AppMeshListGatewayRoutesOutput = { ... }
```

##### `gatewayRoutes`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListGatewayRoutesOutput.property.gatewayRoutes"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGatewayRouteRef`](#aws-cdk-sdk.appmesh.AppMeshGatewayRouteRef)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListGatewayRoutesOutput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshListMeshesInput <a name="aws-cdk-sdk.appmesh.AppMeshListMeshesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListMeshesInput: appmesh.AppMeshListMeshesInput = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListMeshesInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListMeshesInput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshListMeshesOutput <a name="aws-cdk-sdk.appmesh.AppMeshListMeshesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListMeshesOutput: appmesh.AppMeshListMeshesOutput = { ... }
```

##### `meshes`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListMeshesOutput.property.meshes"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshMeshRef`](#aws-cdk-sdk.appmesh.AppMeshMeshRef)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListMeshesOutput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshListRoutesInput <a name="aws-cdk-sdk.appmesh.AppMeshListRoutesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListRoutesInput: appmesh.AppMeshListRoutesInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListRoutesInput.property.meshName"></a>

- *Type:* `string`

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListRoutesInput.property.virtualRouterName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListRoutesInput.property.limit"></a>

- *Type:* `number`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListRoutesInput.property.meshOwner"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListRoutesInput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshListRoutesOutput <a name="aws-cdk-sdk.appmesh.AppMeshListRoutesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListRoutesOutput: appmesh.AppMeshListRoutesOutput = { ... }
```

##### `routes`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListRoutesOutput.property.routes"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshRouteRef`](#aws-cdk-sdk.appmesh.AppMeshRouteRef)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListRoutesOutput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshListTagsForResourceInput <a name="aws-cdk-sdk.appmesh.AppMeshListTagsForResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListTagsForResourceInput: appmesh.AppMeshListTagsForResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListTagsForResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListTagsForResourceInput.property.limit"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListTagsForResourceInput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshListTagsForResourceOutput <a name="aws-cdk-sdk.appmesh.AppMeshListTagsForResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListTagsForResourceOutput: appmesh.AppMeshListTagsForResourceOutput = { ... }
```

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListTagsForResourceOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTagRef`](#aws-cdk-sdk.appmesh.AppMeshTagRef)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListTagsForResourceOutput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshListVirtualGatewaysInput <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualGatewaysInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListVirtualGatewaysInput: appmesh.AppMeshListVirtualGatewaysInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualGatewaysInput.property.meshName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualGatewaysInput.property.limit"></a>

- *Type:* `number`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualGatewaysInput.property.meshOwner"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualGatewaysInput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshListVirtualGatewaysOutput <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualGatewaysOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListVirtualGatewaysOutput: appmesh.AppMeshListVirtualGatewaysOutput = { ... }
```

##### `virtualGateways`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualGatewaysOutput.property.virtualGateways"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayRef`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayRef)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualGatewaysOutput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshListVirtualNodesInput <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualNodesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListVirtualNodesInput: appmesh.AppMeshListVirtualNodesInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualNodesInput.property.meshName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualNodesInput.property.limit"></a>

- *Type:* `number`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualNodesInput.property.meshOwner"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualNodesInput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshListVirtualNodesOutput <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualNodesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListVirtualNodesOutput: appmesh.AppMeshListVirtualNodesOutput = { ... }
```

##### `virtualNodes`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualNodesOutput.property.virtualNodes"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeRef`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeRef)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualNodesOutput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshListVirtualRoutersInput <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualRoutersInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListVirtualRoutersInput: appmesh.AppMeshListVirtualRoutersInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualRoutersInput.property.meshName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualRoutersInput.property.limit"></a>

- *Type:* `number`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualRoutersInput.property.meshOwner"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualRoutersInput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshListVirtualRoutersOutput <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualRoutersOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListVirtualRoutersOutput: appmesh.AppMeshListVirtualRoutersOutput = { ... }
```

##### `virtualRouters`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualRoutersOutput.property.virtualRouters"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterRef`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterRef)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualRoutersOutput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshListVirtualServicesInput <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualServicesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListVirtualServicesInput: appmesh.AppMeshListVirtualServicesInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualServicesInput.property.meshName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualServicesInput.property.limit"></a>

- *Type:* `number`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualServicesInput.property.meshOwner"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualServicesInput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshListVirtualServicesOutput <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualServicesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshListVirtualServicesOutput: appmesh.AppMeshListVirtualServicesOutput = { ... }
```

##### `virtualServices`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualServicesOutput.property.virtualServices"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualServiceRef`](#aws-cdk-sdk.appmesh.AppMeshVirtualServiceRef)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshListVirtualServicesOutput.property.nextToken"></a>

- *Type:* `string`

---

### AppMeshLogging <a name="aws-cdk-sdk.appmesh.AppMeshLogging"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshLogging: appmesh.AppMeshLogging = { ... }
```

##### `accessLog`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshLogging.property.accessLog"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshAccessLog`](#aws-cdk-sdk.appmesh.AppMeshAccessLog)

---

### AppMeshMatchRange <a name="aws-cdk-sdk.appmesh.AppMeshMatchRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshMatchRange: appmesh.AppMeshMatchRange = { ... }
```

##### `end`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshMatchRange.property.end"></a>

- *Type:* `number`

---

##### `start`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshMatchRange.property.start"></a>

- *Type:* `number`

---

### AppMeshMeshData <a name="aws-cdk-sdk.appmesh.AppMeshMeshData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshMeshData: appmesh.AppMeshMeshData = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshMeshData.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshMeshData.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResourceMetadata`](#aws-cdk-sdk.appmesh.AppMeshResourceMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshMeshData.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshMeshSpec`](#aws-cdk-sdk.appmesh.AppMeshMeshSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshMeshData.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshMeshStatus`](#aws-cdk-sdk.appmesh.AppMeshMeshStatus)

---

### AppMeshMeshRef <a name="aws-cdk-sdk.appmesh.AppMeshMeshRef"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshMeshRef: appmesh.AppMeshMeshRef = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshMeshRef.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshMeshRef.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshMeshRef.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshMeshRef.property.meshName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshMeshRef.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshMeshRef.property.resourceOwner"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshMeshRef.property.version"></a>

- *Type:* `number`

---

### AppMeshMeshSpec <a name="aws-cdk-sdk.appmesh.AppMeshMeshSpec"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshMeshSpec: appmesh.AppMeshMeshSpec = { ... }
```

##### `egressFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshMeshSpec.property.egressFilter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshEgressFilter`](#aws-cdk-sdk.appmesh.AppMeshEgressFilter)

---

### AppMeshMeshStatus <a name="aws-cdk-sdk.appmesh.AppMeshMeshStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshMeshStatus: appmesh.AppMeshMeshStatus = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshMeshStatus.property.status"></a>

- *Type:* `string`

---

### AppMeshOutlierDetection <a name="aws-cdk-sdk.appmesh.AppMeshOutlierDetection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshOutlierDetection: appmesh.AppMeshOutlierDetection = { ... }
```

##### `baseEjectionDuration`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshOutlierDetection.property.baseEjectionDuration"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDuration`](#aws-cdk-sdk.appmesh.AppMeshDuration)

---

##### `interval`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshOutlierDetection.property.interval"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDuration`](#aws-cdk-sdk.appmesh.AppMeshDuration)

---

##### `maxEjectionPercent`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshOutlierDetection.property.maxEjectionPercent"></a>

- *Type:* `number`

---

##### `maxServerErrors`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshOutlierDetection.property.maxServerErrors"></a>

- *Type:* `number`

---

### AppMeshPortMapping <a name="aws-cdk-sdk.appmesh.AppMeshPortMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshPortMapping: appmesh.AppMeshPortMapping = { ... }
```

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshPortMapping.property.port"></a>

- *Type:* `number`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshPortMapping.property.protocol"></a>

- *Type:* `string`

---

### AppMeshResourceMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResourceMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshResourceMetadata: appmesh.AppMeshResourceMetadata = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResourceMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResourceMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResourceMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResourceMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResourceMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResourceMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResourceMetadata.property.version"></a>

- *Type:* `number`

---

### AppMeshRouteData <a name="aws-cdk-sdk.appmesh.AppMeshRouteData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshRouteData: appmesh.AppMeshRouteData = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteData.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteData.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResourceMetadata`](#aws-cdk-sdk.appmesh.AppMeshResourceMetadata)

---

##### `routeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteData.property.routeName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteData.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshRouteSpec`](#aws-cdk-sdk.appmesh.AppMeshRouteSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteData.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshRouteStatus`](#aws-cdk-sdk.appmesh.AppMeshRouteStatus)

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteData.property.virtualRouterName"></a>

- *Type:* `string`

---

### AppMeshRouteRef <a name="aws-cdk-sdk.appmesh.AppMeshRouteRef"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshRouteRef: appmesh.AppMeshRouteRef = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteRef.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteRef.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteRef.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteRef.property.meshName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteRef.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteRef.property.resourceOwner"></a>

- *Type:* `string`

---

##### `routeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteRef.property.routeName"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteRef.property.version"></a>

- *Type:* `number`

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteRef.property.virtualRouterName"></a>

- *Type:* `string`

---

### AppMeshRouteSpec <a name="aws-cdk-sdk.appmesh.AppMeshRouteSpec"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshRouteSpec: appmesh.AppMeshRouteSpec = { ... }
```

##### `grpcRoute`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteSpec.property.grpcRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGrpcRoute`](#aws-cdk-sdk.appmesh.AppMeshGrpcRoute)

---

##### `http2Route`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteSpec.property.http2Route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpRoute`](#aws-cdk-sdk.appmesh.AppMeshHttpRoute)

---

##### `httpRoute`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteSpec.property.httpRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpRoute`](#aws-cdk-sdk.appmesh.AppMeshHttpRoute)

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteSpec.property.priority"></a>

- *Type:* `number`

---

##### `tcpRoute`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteSpec.property.tcpRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTcpRoute`](#aws-cdk-sdk.appmesh.AppMeshTcpRoute)

---

### AppMeshRouteStatus <a name="aws-cdk-sdk.appmesh.AppMeshRouteStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshRouteStatus: appmesh.AppMeshRouteStatus = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshRouteStatus.property.status"></a>

- *Type:* `string`

---

### AppMeshServiceDiscovery <a name="aws-cdk-sdk.appmesh.AppMeshServiceDiscovery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshServiceDiscovery: appmesh.AppMeshServiceDiscovery = { ... }
```

##### `awsCloudMap`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshServiceDiscovery.property.awsCloudMap"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshAwsCloudMapServiceDiscovery`](#aws-cdk-sdk.appmesh.AppMeshAwsCloudMapServiceDiscovery)

---

##### `dns`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshServiceDiscovery.property.dns"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDnsServiceDiscovery`](#aws-cdk-sdk.appmesh.AppMeshDnsServiceDiscovery)

---

### AppMeshTagRef <a name="aws-cdk-sdk.appmesh.AppMeshTagRef"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshTagRef: appmesh.AppMeshTagRef = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshTagRef.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshTagRef.property.value"></a>

- *Type:* `string`

---

### AppMeshTagResourceInput <a name="aws-cdk-sdk.appmesh.AppMeshTagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshTagResourceInput: appmesh.AppMeshTagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshTagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshTagResourceInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTagRef`](#aws-cdk-sdk.appmesh.AppMeshTagRef)[]

---

### AppMeshTagResourceOutput <a name="aws-cdk-sdk.appmesh.AppMeshTagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshTagResourceOutput: appmesh.AppMeshTagResourceOutput = { ... }
```

### AppMeshTcpRoute <a name="aws-cdk-sdk.appmesh.AppMeshTcpRoute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshTcpRoute: appmesh.AppMeshTcpRoute = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshTcpRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTcpRouteAction`](#aws-cdk-sdk.appmesh.AppMeshTcpRouteAction)

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshTcpRoute.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTcpTimeout`](#aws-cdk-sdk.appmesh.AppMeshTcpTimeout)

---

### AppMeshTcpRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshTcpRouteAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshTcpRouteAction: appmesh.AppMeshTcpRouteAction = { ... }
```

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshTcpRouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---

### AppMeshTcpTimeout <a name="aws-cdk-sdk.appmesh.AppMeshTcpTimeout"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshTcpTimeout: appmesh.AppMeshTcpTimeout = { ... }
```

##### `idle`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshTcpTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDuration`](#aws-cdk-sdk.appmesh.AppMeshDuration)

---

### AppMeshTlsValidationContext <a name="aws-cdk-sdk.appmesh.AppMeshTlsValidationContext"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshTlsValidationContext: appmesh.AppMeshTlsValidationContext = { ... }
```

##### `trust`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshTlsValidationContext.property.trust"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTlsValidationContextTrust`](#aws-cdk-sdk.appmesh.AppMeshTlsValidationContextTrust)

---

### AppMeshTlsValidationContextAcmTrust <a name="aws-cdk-sdk.appmesh.AppMeshTlsValidationContextAcmTrust"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshTlsValidationContextAcmTrust: appmesh.AppMeshTlsValidationContextAcmTrust = { ... }
```

##### `certificateAuthorityArns`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshTlsValidationContextAcmTrust.property.certificateAuthorityArns"></a>

- *Type:* `string`[]

---

### AppMeshTlsValidationContextFileTrust <a name="aws-cdk-sdk.appmesh.AppMeshTlsValidationContextFileTrust"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshTlsValidationContextFileTrust: appmesh.AppMeshTlsValidationContextFileTrust = { ... }
```

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshTlsValidationContextFileTrust.property.certificateChain"></a>

- *Type:* `string`

---

### AppMeshTlsValidationContextTrust <a name="aws-cdk-sdk.appmesh.AppMeshTlsValidationContextTrust"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshTlsValidationContextTrust: appmesh.AppMeshTlsValidationContextTrust = { ... }
```

##### `acm`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshTlsValidationContextTrust.property.acm"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTlsValidationContextAcmTrust`](#aws-cdk-sdk.appmesh.AppMeshTlsValidationContextAcmTrust)

---

##### `file`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshTlsValidationContextTrust.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTlsValidationContextFileTrust`](#aws-cdk-sdk.appmesh.AppMeshTlsValidationContextFileTrust)

---

### AppMeshUntagResourceInput <a name="aws-cdk-sdk.appmesh.AppMeshUntagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUntagResourceInput: appmesh.AppMeshUntagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUntagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUntagResourceInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### AppMeshUntagResourceOutput <a name="aws-cdk-sdk.appmesh.AppMeshUntagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUntagResourceOutput: appmesh.AppMeshUntagResourceOutput = { ... }
```

### AppMeshUpdateGatewayRouteInput <a name="aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUpdateGatewayRouteInput: appmesh.AppMeshUpdateGatewayRouteInput = { ... }
```

##### `gatewayRouteName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput.property.gatewayRouteName"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput.property.meshName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGatewayRouteSpec`](#aws-cdk-sdk.appmesh.AppMeshGatewayRouteSpec)

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput.property.virtualGatewayName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput.property.clientToken"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshUpdateGatewayRouteOutput <a name="aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUpdateGatewayRouteOutput: appmesh.AppMeshUpdateGatewayRouteOutput = { ... }
```

##### `gatewayRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteOutput.property.gatewayRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGatewayRouteData`](#aws-cdk-sdk.appmesh.AppMeshGatewayRouteData)

---

### AppMeshUpdateMeshInput <a name="aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUpdateMeshInput: appmesh.AppMeshUpdateMeshInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput.property.meshName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput.property.clientToken"></a>

- *Type:* `string`

---

##### `spec`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshMeshSpec`](#aws-cdk-sdk.appmesh.AppMeshMeshSpec)

---

### AppMeshUpdateMeshOutput <a name="aws-cdk-sdk.appmesh.AppMeshUpdateMeshOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUpdateMeshOutput: appmesh.AppMeshUpdateMeshOutput = { ... }
```

##### `mesh`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateMeshOutput.property.mesh"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshMeshData`](#aws-cdk-sdk.appmesh.AppMeshMeshData)

---

### AppMeshUpdateRouteInput <a name="aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUpdateRouteInput: appmesh.AppMeshUpdateRouteInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput.property.meshName"></a>

- *Type:* `string`

---

##### `routeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput.property.routeName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshRouteSpec`](#aws-cdk-sdk.appmesh.AppMeshRouteSpec)

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput.property.virtualRouterName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput.property.clientToken"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshUpdateRouteOutput <a name="aws-cdk-sdk.appmesh.AppMeshUpdateRouteOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUpdateRouteOutput: appmesh.AppMeshUpdateRouteOutput = { ... }
```

##### `route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateRouteOutput.property.route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshRouteData`](#aws-cdk-sdk.appmesh.AppMeshRouteData)

---

### AppMeshUpdateVirtualGatewayInput <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUpdateVirtualGatewayInput: appmesh.AppMeshUpdateVirtualGatewayInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput.property.meshName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewaySpec`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewaySpec)

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput.property.virtualGatewayName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput.property.clientToken"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshUpdateVirtualGatewayOutput <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUpdateVirtualGatewayOutput: appmesh.AppMeshUpdateVirtualGatewayOutput = { ... }
```

##### `virtualGateway`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayOutput.property.virtualGateway"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayData`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayData)

---

### AppMeshUpdateVirtualNodeInput <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUpdateVirtualNodeInput: appmesh.AppMeshUpdateVirtualNodeInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput.property.meshName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeSpec`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeSpec)

---

##### `virtualNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput.property.virtualNodeName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput.property.clientToken"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshUpdateVirtualNodeOutput <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUpdateVirtualNodeOutput: appmesh.AppMeshUpdateVirtualNodeOutput = { ... }
```

##### `virtualNode`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeOutput.property.virtualNode"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeData`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeData)

---

### AppMeshUpdateVirtualRouterInput <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUpdateVirtualRouterInput: appmesh.AppMeshUpdateVirtualRouterInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput.property.meshName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterSpec`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterSpec)

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput.property.virtualRouterName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput.property.clientToken"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshUpdateVirtualRouterOutput <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUpdateVirtualRouterOutput: appmesh.AppMeshUpdateVirtualRouterOutput = { ... }
```

##### `virtualRouter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterOutput.property.virtualRouter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterData`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterData)

---

### AppMeshUpdateVirtualServiceInput <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUpdateVirtualServiceInput: appmesh.AppMeshUpdateVirtualServiceInput = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput.property.meshName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualServiceSpec`](#aws-cdk-sdk.appmesh.AppMeshVirtualServiceSpec)

---

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput.property.virtualServiceName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput.property.clientToken"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput.property.meshOwner"></a>

- *Type:* `string`

---

### AppMeshUpdateVirtualServiceOutput <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshUpdateVirtualServiceOutput: appmesh.AppMeshUpdateVirtualServiceOutput = { ... }
```

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceOutput.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualServiceData`](#aws-cdk-sdk.appmesh.AppMeshVirtualServiceData)

---

### AppMeshVirtualGatewayAccessLog <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayAccessLog"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayAccessLog: appmesh.AppMeshVirtualGatewayAccessLog = { ... }
```

##### `file`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayAccessLog.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayFileAccessLog`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayFileAccessLog)

---

### AppMeshVirtualGatewayBackendDefaults <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayBackendDefaults"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayBackendDefaults: appmesh.AppMeshVirtualGatewayBackendDefaults = { ... }
```

##### `clientPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayBackendDefaults.property.clientPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayClientPolicy`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayClientPolicy)

---

### AppMeshVirtualGatewayClientPolicy <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayClientPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayClientPolicy: appmesh.AppMeshVirtualGatewayClientPolicy = { ... }
```

##### `tls`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayClientPolicy.property.tls"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayClientPolicyTls`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayClientPolicyTls)

---

### AppMeshVirtualGatewayClientPolicyTls <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayClientPolicyTls"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayClientPolicyTls: appmesh.AppMeshVirtualGatewayClientPolicyTls = { ... }
```

##### `validation`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayClientPolicyTls.property.validation"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContext`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContext)

---

##### `enforce`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayClientPolicyTls.property.enforce"></a>

- *Type:* `boolean`

---

##### `ports`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayClientPolicyTls.property.ports"></a>

- *Type:* `number`[]

---

### AppMeshVirtualGatewayConnectionPool <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayConnectionPool"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayConnectionPool: appmesh.AppMeshVirtualGatewayConnectionPool = { ... }
```

##### `grpc`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayConnectionPool.property.grpc"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayGrpcConnectionPool`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayGrpcConnectionPool)

---

##### `http`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayConnectionPool.property.http"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHttpConnectionPool`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHttpConnectionPool)

---

##### `http2`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayConnectionPool.property.http2"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHttp2ConnectionPool`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHttp2ConnectionPool)

---

### AppMeshVirtualGatewayData <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayData: appmesh.AppMeshVirtualGatewayData = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayData.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayData.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResourceMetadata`](#aws-cdk-sdk.appmesh.AppMeshResourceMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayData.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewaySpec`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewaySpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayData.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayStatus`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayStatus)

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayData.property.virtualGatewayName"></a>

- *Type:* `string`

---

### AppMeshVirtualGatewayFileAccessLog <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayFileAccessLog"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayFileAccessLog: appmesh.AppMeshVirtualGatewayFileAccessLog = { ... }
```

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayFileAccessLog.property.path"></a>

- *Type:* `string`

---

### AppMeshVirtualGatewayGrpcConnectionPool <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayGrpcConnectionPool"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayGrpcConnectionPool: appmesh.AppMeshVirtualGatewayGrpcConnectionPool = { ... }
```

##### `maxRequests`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayGrpcConnectionPool.property.maxRequests"></a>

- *Type:* `number`

---

### AppMeshVirtualGatewayHealthCheckPolicy <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHealthCheckPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayHealthCheckPolicy: appmesh.AppMeshVirtualGatewayHealthCheckPolicy = { ... }
```

##### `healthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHealthCheckPolicy.property.healthyThreshold"></a>

- *Type:* `number`

---

##### `intervalMillis`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHealthCheckPolicy.property.intervalMillis"></a>

- *Type:* `number`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHealthCheckPolicy.property.protocol"></a>

- *Type:* `string`

---

##### `timeoutMillis`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHealthCheckPolicy.property.timeoutMillis"></a>

- *Type:* `number`

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHealthCheckPolicy.property.unhealthyThreshold"></a>

- *Type:* `number`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHealthCheckPolicy.property.path"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHealthCheckPolicy.property.port"></a>

- *Type:* `number`

---

### AppMeshVirtualGatewayHttp2ConnectionPool <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHttp2ConnectionPool"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayHttp2ConnectionPool: appmesh.AppMeshVirtualGatewayHttp2ConnectionPool = { ... }
```

##### `maxRequests`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHttp2ConnectionPool.property.maxRequests"></a>

- *Type:* `number`

---

### AppMeshVirtualGatewayHttpConnectionPool <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHttpConnectionPool"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayHttpConnectionPool: appmesh.AppMeshVirtualGatewayHttpConnectionPool = { ... }
```

##### `maxConnections`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHttpConnectionPool.property.maxConnections"></a>

- *Type:* `number`

---

##### `maxPendingRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHttpConnectionPool.property.maxPendingRequests"></a>

- *Type:* `number`

---

### AppMeshVirtualGatewayListener <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListener"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayListener: appmesh.AppMeshVirtualGatewayListener = { ... }
```

##### `portMapping`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListener.property.portMapping"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayPortMapping`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayPortMapping)

---

##### `connectionPool`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListener.property.connectionPool"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayConnectionPool`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayConnectionPool)

---

##### `healthCheck`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListener.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHealthCheckPolicy`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayHealthCheckPolicy)

---

##### `tls`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListener.property.tls"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTls`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTls)

---

### AppMeshVirtualGatewayListenerTls <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTls"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayListenerTls: appmesh.AppMeshVirtualGatewayListenerTls = { ... }
```

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTls.property.certificate"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTlsCertificate`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTlsCertificate)

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTls.property.mode"></a>

- *Type:* `string`

---

### AppMeshVirtualGatewayListenerTlsAcmCertificate <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTlsAcmCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayListenerTlsAcmCertificate: appmesh.AppMeshVirtualGatewayListenerTlsAcmCertificate = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTlsAcmCertificate.property.certificateArn"></a>

- *Type:* `string`

---

### AppMeshVirtualGatewayListenerTlsCertificate <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTlsCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayListenerTlsCertificate: appmesh.AppMeshVirtualGatewayListenerTlsCertificate = { ... }
```

##### `acm`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTlsCertificate.property.acm"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTlsAcmCertificate`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTlsAcmCertificate)

---

##### `file`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTlsCertificate.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTlsFileCertificate`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTlsFileCertificate)

---

### AppMeshVirtualGatewayListenerTlsFileCertificate <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTlsFileCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayListenerTlsFileCertificate: appmesh.AppMeshVirtualGatewayListenerTlsFileCertificate = { ... }
```

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTlsFileCertificate.property.certificateChain"></a>

- *Type:* `string`

---

##### `privateKey`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListenerTlsFileCertificate.property.privateKey"></a>

- *Type:* `string`

---

### AppMeshVirtualGatewayLogging <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayLogging"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayLogging: appmesh.AppMeshVirtualGatewayLogging = { ... }
```

##### `accessLog`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayLogging.property.accessLog"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayAccessLog`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayAccessLog)

---

### AppMeshVirtualGatewayPortMapping <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayPortMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayPortMapping: appmesh.AppMeshVirtualGatewayPortMapping = { ... }
```

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayPortMapping.property.port"></a>

- *Type:* `number`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayPortMapping.property.protocol"></a>

- *Type:* `string`

---

### AppMeshVirtualGatewayRef <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayRef"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayRef: appmesh.AppMeshVirtualGatewayRef = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayRef.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayRef.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayRef.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayRef.property.meshName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayRef.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayRef.property.resourceOwner"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayRef.property.version"></a>

- *Type:* `number`

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayRef.property.virtualGatewayName"></a>

- *Type:* `string`

---

### AppMeshVirtualGatewaySpec <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewaySpec"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewaySpec: appmesh.AppMeshVirtualGatewaySpec = { ... }
```

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewaySpec.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListener`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListener)[]

---

##### `backendDefaults`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewaySpec.property.backendDefaults"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayBackendDefaults`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayBackendDefaults)

---

##### `logging`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewaySpec.property.logging"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayLogging`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayLogging)

---

### AppMeshVirtualGatewayStatus <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayStatus: appmesh.AppMeshVirtualGatewayStatus = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayStatus.property.status"></a>

- *Type:* `string`

---

### AppMeshVirtualGatewayTlsValidationContext <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContext"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayTlsValidationContext: appmesh.AppMeshVirtualGatewayTlsValidationContext = { ... }
```

##### `trust`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContext.property.trust"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContextTrust`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContextTrust)

---

### AppMeshVirtualGatewayTlsValidationContextAcmTrust <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContextAcmTrust"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayTlsValidationContextAcmTrust: appmesh.AppMeshVirtualGatewayTlsValidationContextAcmTrust = { ... }
```

##### `certificateAuthorityArns`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContextAcmTrust.property.certificateAuthorityArns"></a>

- *Type:* `string`[]

---

### AppMeshVirtualGatewayTlsValidationContextFileTrust <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContextFileTrust"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayTlsValidationContextFileTrust: appmesh.AppMeshVirtualGatewayTlsValidationContextFileTrust = { ... }
```

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContextFileTrust.property.certificateChain"></a>

- *Type:* `string`

---

### AppMeshVirtualGatewayTlsValidationContextTrust <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContextTrust"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualGatewayTlsValidationContextTrust: appmesh.AppMeshVirtualGatewayTlsValidationContextTrust = { ... }
```

##### `acm`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContextTrust.property.acm"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContextAcmTrust`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContextAcmTrust)

---

##### `file`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContextTrust.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContextFileTrust`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayTlsValidationContextFileTrust)

---

### AppMeshVirtualNodeConnectionPool <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeConnectionPool"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualNodeConnectionPool: appmesh.AppMeshVirtualNodeConnectionPool = { ... }
```

##### `grpc`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeConnectionPool.property.grpc"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeGrpcConnectionPool`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeGrpcConnectionPool)

---

##### `http`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeConnectionPool.property.http"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeHttpConnectionPool`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeHttpConnectionPool)

---

##### `http2`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeConnectionPool.property.http2"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeHttp2ConnectionPool`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeHttp2ConnectionPool)

---

##### `tcp`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeConnectionPool.property.tcp"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeTcpConnectionPool`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeTcpConnectionPool)

---

### AppMeshVirtualNodeData <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualNodeData: appmesh.AppMeshVirtualNodeData = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeData.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeData.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResourceMetadata`](#aws-cdk-sdk.appmesh.AppMeshResourceMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeData.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeSpec`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeData.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeStatus`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeStatus)

---

##### `virtualNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeData.property.virtualNodeName"></a>

- *Type:* `string`

---

### AppMeshVirtualNodeGrpcConnectionPool <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeGrpcConnectionPool"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualNodeGrpcConnectionPool: appmesh.AppMeshVirtualNodeGrpcConnectionPool = { ... }
```

##### `maxRequests`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeGrpcConnectionPool.property.maxRequests"></a>

- *Type:* `number`

---

### AppMeshVirtualNodeHttp2ConnectionPool <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeHttp2ConnectionPool"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualNodeHttp2ConnectionPool: appmesh.AppMeshVirtualNodeHttp2ConnectionPool = { ... }
```

##### `maxRequests`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeHttp2ConnectionPool.property.maxRequests"></a>

- *Type:* `number`

---

### AppMeshVirtualNodeHttpConnectionPool <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeHttpConnectionPool"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualNodeHttpConnectionPool: appmesh.AppMeshVirtualNodeHttpConnectionPool = { ... }
```

##### `maxConnections`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeHttpConnectionPool.property.maxConnections"></a>

- *Type:* `number`

---

##### `maxPendingRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeHttpConnectionPool.property.maxPendingRequests"></a>

- *Type:* `number`

---

### AppMeshVirtualNodeRef <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeRef"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualNodeRef: appmesh.AppMeshVirtualNodeRef = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeRef.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeRef.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeRef.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeRef.property.meshName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeRef.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeRef.property.resourceOwner"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeRef.property.version"></a>

- *Type:* `number`

---

##### `virtualNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeRef.property.virtualNodeName"></a>

- *Type:* `string`

---

### AppMeshVirtualNodeServiceProvider <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeServiceProvider"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualNodeServiceProvider: appmesh.AppMeshVirtualNodeServiceProvider = { ... }
```

##### `virtualNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeServiceProvider.property.virtualNodeName"></a>

- *Type:* `string`

---

### AppMeshVirtualNodeSpec <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeSpec"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualNodeSpec: appmesh.AppMeshVirtualNodeSpec = { ... }
```

##### `backendDefaults`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeSpec.property.backendDefaults"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshBackendDefaults`](#aws-cdk-sdk.appmesh.AppMeshBackendDefaults)

---

##### `backends`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeSpec.property.backends"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshBackend`](#aws-cdk-sdk.appmesh.AppMeshBackend)[]

---

##### `listeners`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeSpec.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListener`](#aws-cdk-sdk.appmesh.AppMeshListener)[]

---

##### `logging`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeSpec.property.logging"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshLogging`](#aws-cdk-sdk.appmesh.AppMeshLogging)

---

##### `serviceDiscovery`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeSpec.property.serviceDiscovery"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshServiceDiscovery`](#aws-cdk-sdk.appmesh.AppMeshServiceDiscovery)

---

### AppMeshVirtualNodeStatus <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualNodeStatus: appmesh.AppMeshVirtualNodeStatus = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeStatus.property.status"></a>

- *Type:* `string`

---

### AppMeshVirtualNodeTcpConnectionPool <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeTcpConnectionPool"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualNodeTcpConnectionPool: appmesh.AppMeshVirtualNodeTcpConnectionPool = { ... }
```

##### `maxConnections`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualNodeTcpConnectionPool.property.maxConnections"></a>

- *Type:* `number`

---

### AppMeshVirtualRouterData <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualRouterData: appmesh.AppMeshVirtualRouterData = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterData.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterData.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResourceMetadata`](#aws-cdk-sdk.appmesh.AppMeshResourceMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterData.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterSpec`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterData.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterStatus`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterStatus)

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterData.property.virtualRouterName"></a>

- *Type:* `string`

---

### AppMeshVirtualRouterListener <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterListener"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualRouterListener: appmesh.AppMeshVirtualRouterListener = { ... }
```

##### `portMapping`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterListener.property.portMapping"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshPortMapping`](#aws-cdk-sdk.appmesh.AppMeshPortMapping)

---

### AppMeshVirtualRouterRef <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterRef"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualRouterRef: appmesh.AppMeshVirtualRouterRef = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterRef.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterRef.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterRef.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterRef.property.meshName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterRef.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterRef.property.resourceOwner"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterRef.property.version"></a>

- *Type:* `number`

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterRef.property.virtualRouterName"></a>

- *Type:* `string`

---

### AppMeshVirtualRouterServiceProvider <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterServiceProvider"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualRouterServiceProvider: appmesh.AppMeshVirtualRouterServiceProvider = { ... }
```

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterServiceProvider.property.virtualRouterName"></a>

- *Type:* `string`

---

### AppMeshVirtualRouterSpec <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterSpec"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualRouterSpec: appmesh.AppMeshVirtualRouterSpec = { ... }
```

##### `listeners`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterSpec.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterListener`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterListener)[]

---

### AppMeshVirtualRouterStatus <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualRouterStatus: appmesh.AppMeshVirtualRouterStatus = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualRouterStatus.property.status"></a>

- *Type:* `string`

---

### AppMeshVirtualServiceBackend <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceBackend"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualServiceBackend: appmesh.AppMeshVirtualServiceBackend = { ... }
```

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceBackend.property.virtualServiceName"></a>

- *Type:* `string`

---

##### `clientPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceBackend.property.clientPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshClientPolicy`](#aws-cdk-sdk.appmesh.AppMeshClientPolicy)

---

### AppMeshVirtualServiceData <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualServiceData: appmesh.AppMeshVirtualServiceData = { ... }
```

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceData.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceData.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResourceMetadata`](#aws-cdk-sdk.appmesh.AppMeshResourceMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceData.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualServiceSpec`](#aws-cdk-sdk.appmesh.AppMeshVirtualServiceSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceData.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualServiceStatus`](#aws-cdk-sdk.appmesh.AppMeshVirtualServiceStatus)

---

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceData.property.virtualServiceName"></a>

- *Type:* `string`

---

### AppMeshVirtualServiceProvider <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceProvider"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualServiceProvider: appmesh.AppMeshVirtualServiceProvider = { ... }
```

##### `virtualNode`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceProvider.property.virtualNode"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeServiceProvider`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeServiceProvider)

---

##### `virtualRouter`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceProvider.property.virtualRouter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterServiceProvider`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterServiceProvider)

---

### AppMeshVirtualServiceRef <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceRef"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualServiceRef: appmesh.AppMeshVirtualServiceRef = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceRef.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceRef.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceRef.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceRef.property.meshName"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceRef.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceRef.property.resourceOwner"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceRef.property.version"></a>

- *Type:* `number`

---

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceRef.property.virtualServiceName"></a>

- *Type:* `string`

---

### AppMeshVirtualServiceSpec <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceSpec"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualServiceSpec: appmesh.AppMeshVirtualServiceSpec = { ... }
```

##### `provider`<sup>Optional</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceSpec.property.provider"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualServiceProvider`](#aws-cdk-sdk.appmesh.AppMeshVirtualServiceProvider)

---

### AppMeshVirtualServiceStatus <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshVirtualServiceStatus: appmesh.AppMeshVirtualServiceStatus = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshVirtualServiceStatus.property.status"></a>

- *Type:* `string`

---

### AppMeshWeightedTarget <a name="aws-cdk-sdk.appmesh.AppMeshWeightedTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

const appMeshWeightedTarget: appmesh.AppMeshWeightedTarget = { ... }
```

##### `virtualNode`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshWeightedTarget.property.virtualNode"></a>

- *Type:* `string`

---

##### `weight`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshWeightedTarget.property.weight"></a>

- *Type:* `number`

---

## Classes <a name="Classes"></a>

### AppMeshResponsesCreateGatewayRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRoute(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRoute.property.gatewayRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRoute)

---


### AppMeshResponsesCreateGatewayRouteGatewayRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRoute(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayRouteName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRoute.property.gatewayRouteName"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRoute.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRoute.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRoute.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRoute.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteStatus)

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRoute.property.virtualGatewayName"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpec(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `grpcRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpec.property.grpcRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRoute)

---

##### `http2Route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpec.property.http2Route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2Route`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2Route)

---

##### `httpRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpec.property.httpRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRoute)

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRoute(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteMatch)

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteAction(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteAction.property.target"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget)

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService)

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecGrpcRouteMatch.property.serviceName"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2Route <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2Route"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2Route.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2Route(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2Route.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2Route.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2Route.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2Route.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2Route.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteMatch)

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteAction(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteAction.property.target"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget)

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService)

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteMatch(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttp2RouteMatch.property.prefix"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRoute(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteMatch)

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteAction(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteAction.property.target"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTarget`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTarget)

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTarget <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTarget"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTarget.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTarget(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTarget.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService)

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteSpecHttpRouteMatch.property.prefix"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateGatewayRouteGatewayRouteStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteStatus(__scope: Construct, __resources: string[], __input: AppMeshCreateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateGatewayRouteGatewayRouteStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateMesh <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMesh"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMesh.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateMesh(__scope: Construct, __resources: string[], __input: AppMeshCreateMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMesh.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMesh.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMesh.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateMeshInput`](#aws-cdk-sdk.appmesh.AppMeshCreateMeshInput)

---



#### Properties <a name="Properties"></a>

##### `mesh`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMesh.property.mesh"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMesh`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMesh)

---


### AppMeshResponsesCreateMeshMesh <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMesh"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMesh.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateMeshMesh(__scope: Construct, __resources: string[], __input: AppMeshCreateMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMesh.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMesh.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMesh.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateMeshInput`](#aws-cdk-sdk.appmesh.AppMeshCreateMeshInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMesh.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMesh.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMesh.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMesh.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshStatus)

---


### AppMeshResponsesCreateMeshMeshMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateMeshMeshMetadata(__scope: Construct, __resources: string[], __input: AppMeshCreateMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateMeshInput`](#aws-cdk-sdk.appmesh.AppMeshCreateMeshInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateMeshMeshSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateMeshMeshSpec(__scope: Construct, __resources: string[], __input: AppMeshCreateMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateMeshInput`](#aws-cdk-sdk.appmesh.AppMeshCreateMeshInput)

---



#### Properties <a name="Properties"></a>

##### `egressFilter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpec.property.egressFilter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpecEgressFilter`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpecEgressFilter)

---


### AppMeshResponsesCreateMeshMeshSpecEgressFilter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpecEgressFilter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpecEgressFilter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateMeshMeshSpecEgressFilter(__scope: Construct, __resources: string[], __input: AppMeshCreateMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpecEgressFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpecEgressFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpecEgressFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateMeshInput`](#aws-cdk-sdk.appmesh.AppMeshCreateMeshInput)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshSpecEgressFilter.property.type"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateMeshMeshStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateMeshMeshStatus(__scope: Construct, __resources: string[], __input: AppMeshCreateMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateMeshInput`](#aws-cdk-sdk.appmesh.AppMeshCreateMeshInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateMeshMeshStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRoute(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRoute.property.route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRoute)

---


### AppMeshResponsesCreateRouteRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRoute(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRoute.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRoute.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteMetadata)

---

##### `routeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRoute.property.routeName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRoute.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRoute.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteStatus)

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRoute.property.virtualRouterName"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateRouteRouteMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteMetadata(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateRouteRouteSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpec(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `grpcRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpec.property.grpcRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRoute)

---

##### `http2Route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpec.property.http2Route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2Route`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2Route)

---

##### `httpRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpec.property.httpRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRoute)

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpec.property.priority"></a>

- *Type:* `number`

---

##### `tcpRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpec.property.tcpRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRoute)

---


### AppMeshResponsesCreateRouteRouteSpecGrpcRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRoute(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteMatch)

---

##### `retryPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRoute.property.retryPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicy)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRoute.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeout)

---


### AppMeshResponsesCreateRouteRouteSpecGrpcRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteAction(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesCreateRouteRouteSpecGrpcRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteMatch.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadata`](#aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadata)[]

---

##### `methodName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteMatch.property.methodName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteMatch.property.serviceName"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicy(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `grpcRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicy.property.grpcRetryEvents"></a>

- *Type:* `string`[]

---

##### `httpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicy.property.httpRetryEvents"></a>

- *Type:* `string`[]

---

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicy.property.maxRetries"></a>

- *Type:* `number`

---

##### `perRetryTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicy.property.perRetryTimeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout)

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicy.property.tcpRetryEvents"></a>

- *Type:* `string`[]

---


### AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutIdle)

---

##### `perRequest`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeout.property.perRequest"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutPerRequest`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutPerRequest)

---


### AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutPerRequest <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutPerRequest"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutPerRequest.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutPerRequest(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutPerRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutPerRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutPerRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutPerRequest.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecGrpcRouteTimeoutPerRequest.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateRouteRouteSpecHttp2Route <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2Route"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2Route.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2Route(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2Route.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2Route.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2Route.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2Route.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2Route.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteMatch)

---

##### `retryPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2Route.property.retryPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicy)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2Route.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeout)

---


### AppMeshResponsesCreateRouteRouteSpecHttp2RouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteAction(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesCreateRouteRouteSpecHttp2RouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteMatch(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `headers`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteMatch.property.headers"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader`](#aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader)[]

---

##### `method`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteMatch.property.method"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteMatch.property.prefix"></a>

- *Type:* `string`

---

##### `scheme`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteMatch.property.scheme"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicy(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `httpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicy.property.httpRetryEvents"></a>

- *Type:* `string`[]

---

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicy.property.maxRetries"></a>

- *Type:* `number`

---

##### `perRetryTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicy.property.perRetryTimeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout)

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicy.property.tcpRetryEvents"></a>

- *Type:* `string`[]

---


### AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutIdle)

---

##### `perRequest`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeout.property.perRequest"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutPerRequest`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutPerRequest)

---


### AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutPerRequest <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutPerRequest"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutPerRequest.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutPerRequest(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutPerRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutPerRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutPerRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutPerRequest.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttp2RouteTimeoutPerRequest.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateRouteRouteSpecHttpRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRoute(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteMatch)

---

##### `retryPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRoute.property.retryPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicy)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRoute.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeout)

---


### AppMeshResponsesCreateRouteRouteSpecHttpRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteAction(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesCreateRouteRouteSpecHttpRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `headers`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteMatch.property.headers"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader`](#aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader)[]

---

##### `method`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteMatch.property.method"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteMatch.property.prefix"></a>

- *Type:* `string`

---

##### `scheme`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteMatch.property.scheme"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicy(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `httpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicy.property.httpRetryEvents"></a>

- *Type:* `string`[]

---

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicy.property.maxRetries"></a>

- *Type:* `number`

---

##### `perRetryTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicy.property.perRetryTimeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout)

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicy.property.tcpRetryEvents"></a>

- *Type:* `string`[]

---


### AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutIdle)

---

##### `perRequest`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeout.property.perRequest"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutPerRequest`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutPerRequest)

---


### AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutPerRequest <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutPerRequest"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutPerRequest.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutPerRequest(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutPerRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutPerRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutPerRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutPerRequest.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecHttpRouteTimeoutPerRequest.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateRouteRouteSpecTcpRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRoute(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteAction)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRoute.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeout)

---


### AppMeshResponsesCreateRouteRouteSpecTcpRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteAction(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeoutIdle)

---


### AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteSpecTcpRouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateRouteRouteStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateRouteRouteStatus(__scope: Construct, __resources: string[], __input: AppMeshCreateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshCreateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateRouteRouteStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualGateway <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGateway"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGateway.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualGateway(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `virtualGateway`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGateway.property.virtualGateway"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGateway`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGateway)

---


### AppMeshResponsesCreateVirtualGatewayVirtualGateway <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGateway"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGateway.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGateway(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGateway.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGateway.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGateway.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGateway.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayStatus)

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGateway.property.virtualGatewayName"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpec(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `backendDefaults`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpec.property.backendDefaults"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaults`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaults)

---

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpec.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListener`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListener)[]

---

##### `logging`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpec.property.logging"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLogging`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLogging)

---


### AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaults <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaults"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaults.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaults(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `clientPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaults.property.clientPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy)

---


### AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `tls`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.property.tls"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls)

---


### AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `enforce`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.enforce"></a>

- *Type:* `boolean`

---

##### `ports`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.ports"></a>

- *Type:* `number`[]

---

##### `validation`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.validation"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation)

---


### AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `trust`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.trust"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust)

---


### AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `acm`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.acm"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm)

---

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile)

---


### AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `certificateAuthorityArns`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.property.certificateAuthorityArns"></a>

- *Type:* `string`[]

---


### AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.property.certificateChain"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLogging <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLogging"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLogging.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLogging(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `accessLog`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLogging.property.accessLog"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLog`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLog)

---


### AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLog <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLog"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLog.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLog(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLog.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLog.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLog.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLog.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile)

---


### AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.property.path"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualGatewayVirtualGatewayStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayStatus(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualGatewayVirtualGatewayStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualNode <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNode"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNode.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNode(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `virtualNode`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNode.property.virtualNode"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNode`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNode)

---


### AppMeshResponsesCreateVirtualNodeVirtualNode <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNode"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNode.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNode(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNode.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNode.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNode.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNode.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeStatus)

---

##### `virtualNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNode.property.virtualNodeName"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpec(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `backendDefaults`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpec.property.backendDefaults"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaults`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaults)

---

##### `backends`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpec.property.backends"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshBackend`](#aws-cdk-sdk.appmesh.AppMeshBackend)[]

---

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpec.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListener`](#aws-cdk-sdk.appmesh.AppMeshListener)[]

---

##### `logging`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpec.property.logging"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLogging`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLogging)

---

##### `serviceDiscovery`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpec.property.serviceDiscovery"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscovery`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscovery)

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaults <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaults"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaults.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaults(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `clientPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaults.property.clientPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy)

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `tls`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.property.tls"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls)

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `enforce`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.property.enforce"></a>

- *Type:* `boolean`

---

##### `ports`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.property.ports"></a>

- *Type:* `number`[]

---

##### `validation`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.property.validation"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation)

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `trust`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.property.trust"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust)

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `acm`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.property.acm"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm)

---

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile)

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `certificateAuthorityArns`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.property.certificateAuthorityArns"></a>

- *Type:* `string`[]

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.property.certificateChain"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLogging <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLogging"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLogging.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLogging(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `accessLog`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLogging.property.accessLog"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLog`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLog)

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLog <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLog"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLog.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLog(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLog.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLog.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLog.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLog.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLogFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLogFile)

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLogFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLogFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLogFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLogFile(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLogFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLogFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLogFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecLoggingAccessLogFile.property.path"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscovery <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscovery"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscovery.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscovery(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscovery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscovery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscovery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `awsCloudMap`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscovery.property.awsCloudMap"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap)

---

##### `dns`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscovery.property.dns"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryDns`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryDns)

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshAwsCloudMapInstanceAttribute`](#aws-cdk-sdk.appmesh.AppMeshAwsCloudMapInstanceAttribute)[]

---

##### `namespaceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.property.namespaceName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.property.serviceName"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryDns <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryDns"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryDns.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryDns(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryDns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryDns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryDns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `hostname`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeSpecServiceDiscoveryDns.property.hostname"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualNodeVirtualNodeStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeStatus(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualNodeVirtualNodeStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualRouter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualRouter(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `virtualRouter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouter.property.virtualRouter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouter`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouter)

---


### AppMeshResponsesCreateVirtualRouterVirtualRouter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouter(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouter.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouter.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouter.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouter.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterStatus)

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouter.property.virtualRouterName"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateVirtualRouterVirtualRouterSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterSpec(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterSpec.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterListener`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterListener)[]

---


### AppMeshResponsesCreateVirtualRouterVirtualRouterStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterStatus(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualRouterVirtualRouterStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualService(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualService.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualService)

---


### AppMeshResponsesCreateVirtualServiceVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualServiceVirtualService(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualService.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualService.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualService.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualService.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceStatus)

---

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesCreateVirtualServiceVirtualServiceSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpec(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `provider`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpec.property.provider"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProvider`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProvider)

---


### AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProvider <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProvider"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProvider.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProvider(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualNode`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProvider.property.virtualNode"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualNode`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualNode)

---

##### `virtualRouter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProvider.property.virtualRouter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualRouter`](#aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualRouter)

---


### AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualNode <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualNode"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualNode.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualNode(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualNode.property.virtualNodeName"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualRouter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualRouter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualRouter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualRouter(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualRouter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualRouter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualRouter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceSpecProviderVirtualRouter.property.virtualRouterName"></a>

- *Type:* `string`

---


### AppMeshResponsesCreateVirtualServiceVirtualServiceStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceStatus(__scope: Construct, __resources: string[], __input: AppMeshCreateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshCreateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesCreateVirtualServiceVirtualServiceStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteGatewayRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRoute(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRoute.property.gatewayRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRoute)

---


### AppMeshResponsesDeleteGatewayRouteGatewayRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRoute(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayRouteName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRoute.property.gatewayRouteName"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRoute.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRoute.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRoute.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRoute.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteStatus)

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRoute.property.virtualGatewayName"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpec(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `grpcRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpec.property.grpcRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRoute)

---

##### `http2Route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpec.property.http2Route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2Route`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2Route)

---

##### `httpRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpec.property.httpRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRoute)

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRoute(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteMatch)

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteAction(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteAction.property.target"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTarget`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTarget)

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTarget <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTarget"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTarget(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService)

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecGrpcRouteMatch.property.serviceName"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2Route <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2Route"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2Route.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2Route(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2Route.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2Route.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2Route.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2Route.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2Route.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteMatch)

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteAction(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteAction.property.target"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTarget`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTarget)

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTarget <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTarget"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTarget(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService)

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteMatch(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttp2RouteMatch.property.prefix"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRoute(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteMatch)

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteAction(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteAction.property.target"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTarget`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTarget)

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTarget <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTarget"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTarget.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTarget(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTarget.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService)

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteSpecHttpRouteMatch.property.prefix"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteGatewayRouteGatewayRouteStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteStatus(__scope: Construct, __resources: string[], __input: AppMeshDeleteGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteGatewayRouteGatewayRouteStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteMesh <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMesh"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMesh.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteMesh(__scope: Construct, __resources: string[], __input: AppMeshDeleteMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMesh.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMesh.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMesh.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput)

---



#### Properties <a name="Properties"></a>

##### `mesh`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMesh.property.mesh"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMesh`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMesh)

---


### AppMeshResponsesDeleteMeshMesh <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMesh"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMesh.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteMeshMesh(__scope: Construct, __resources: string[], __input: AppMeshDeleteMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMesh.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMesh.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMesh.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMesh.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMesh.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMesh.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMesh.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshStatus)

---


### AppMeshResponsesDeleteMeshMeshMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteMeshMeshMetadata(__scope: Construct, __resources: string[], __input: AppMeshDeleteMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteMeshMeshSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteMeshMeshSpec(__scope: Construct, __resources: string[], __input: AppMeshDeleteMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput)

---



#### Properties <a name="Properties"></a>

##### `egressFilter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpec.property.egressFilter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpecEgressFilter`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpecEgressFilter)

---


### AppMeshResponsesDeleteMeshMeshSpecEgressFilter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpecEgressFilter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpecEgressFilter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteMeshMeshSpecEgressFilter(__scope: Construct, __resources: string[], __input: AppMeshDeleteMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpecEgressFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpecEgressFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpecEgressFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshSpecEgressFilter.property.type"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteMeshMeshStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteMeshMeshStatus(__scope: Construct, __resources: string[], __input: AppMeshDeleteMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteMeshInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteMeshMeshStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRoute(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRoute.property.route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRoute)

---


### AppMeshResponsesDeleteRouteRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRoute(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRoute.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRoute.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteMetadata)

---

##### `routeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRoute.property.routeName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRoute.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRoute.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteStatus)

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRoute.property.virtualRouterName"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteRouteRouteMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteMetadata(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteRouteRouteSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpec(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `grpcRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpec.property.grpcRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRoute)

---

##### `http2Route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpec.property.http2Route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2Route`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2Route)

---

##### `httpRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpec.property.httpRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRoute)

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpec.property.priority"></a>

- *Type:* `number`

---

##### `tcpRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpec.property.tcpRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRoute)

---


### AppMeshResponsesDeleteRouteRouteSpecGrpcRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRoute(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteMatch)

---

##### `retryPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRoute.property.retryPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicy)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRoute.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeout)

---


### AppMeshResponsesDeleteRouteRouteSpecGrpcRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteAction(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesDeleteRouteRouteSpecGrpcRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteMatch.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadata`](#aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadata)[]

---

##### `methodName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteMatch.property.methodName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteMatch.property.serviceName"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicy(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `grpcRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicy.property.grpcRetryEvents"></a>

- *Type:* `string`[]

---

##### `httpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicy.property.httpRetryEvents"></a>

- *Type:* `string`[]

---

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicy.property.maxRetries"></a>

- *Type:* `number`

---

##### `perRetryTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicy.property.perRetryTimeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout)

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicy.property.tcpRetryEvents"></a>

- *Type:* `string`[]

---


### AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutIdle)

---

##### `perRequest`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeout.property.perRequest"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutPerRequest`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutPerRequest)

---


### AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutPerRequest <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutPerRequest"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutPerRequest.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutPerRequest(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutPerRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutPerRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutPerRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutPerRequest.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecGrpcRouteTimeoutPerRequest.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteRouteRouteSpecHttp2Route <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2Route"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2Route.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2Route(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2Route.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2Route.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2Route.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2Route.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2Route.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteMatch)

---

##### `retryPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2Route.property.retryPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicy)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2Route.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeout)

---


### AppMeshResponsesDeleteRouteRouteSpecHttp2RouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteAction(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesDeleteRouteRouteSpecHttp2RouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteMatch(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `headers`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteMatch.property.headers"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader`](#aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader)[]

---

##### `method`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteMatch.property.method"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteMatch.property.prefix"></a>

- *Type:* `string`

---

##### `scheme`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteMatch.property.scheme"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicy(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `httpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicy.property.httpRetryEvents"></a>

- *Type:* `string`[]

---

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicy.property.maxRetries"></a>

- *Type:* `number`

---

##### `perRetryTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicy.property.perRetryTimeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout)

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicy.property.tcpRetryEvents"></a>

- *Type:* `string`[]

---


### AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutIdle)

---

##### `perRequest`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeout.property.perRequest"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutPerRequest`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutPerRequest)

---


### AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutPerRequest <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutPerRequest"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutPerRequest.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutPerRequest(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutPerRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutPerRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutPerRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutPerRequest.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttp2RouteTimeoutPerRequest.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteRouteRouteSpecHttpRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRoute(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteMatch)

---

##### `retryPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRoute.property.retryPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicy)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRoute.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeout)

---


### AppMeshResponsesDeleteRouteRouteSpecHttpRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteAction(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesDeleteRouteRouteSpecHttpRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `headers`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteMatch.property.headers"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader`](#aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader)[]

---

##### `method`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteMatch.property.method"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteMatch.property.prefix"></a>

- *Type:* `string`

---

##### `scheme`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteMatch.property.scheme"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicy(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `httpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicy.property.httpRetryEvents"></a>

- *Type:* `string`[]

---

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicy.property.maxRetries"></a>

- *Type:* `number`

---

##### `perRetryTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicy.property.perRetryTimeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout)

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicy.property.tcpRetryEvents"></a>

- *Type:* `string`[]

---


### AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutIdle)

---

##### `perRequest`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeout.property.perRequest"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutPerRequest`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutPerRequest)

---


### AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutPerRequest <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutPerRequest"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutPerRequest.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutPerRequest(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutPerRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutPerRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutPerRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutPerRequest.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecHttpRouteTimeoutPerRequest.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteRouteRouteSpecTcpRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRoute(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteAction)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRoute.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeout)

---


### AppMeshResponsesDeleteRouteRouteSpecTcpRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteAction(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeoutIdle)

---


### AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteSpecTcpRouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteRouteRouteStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteRouteRouteStatus(__scope: Construct, __resources: string[], __input: AppMeshDeleteRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteRouteInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteRouteRouteStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualGateway <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGateway"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGateway.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualGateway(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `virtualGateway`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGateway.property.virtualGateway"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGateway`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGateway)

---


### AppMeshResponsesDeleteVirtualGatewayVirtualGateway <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGateway"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGateway.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGateway(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGateway.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGateway.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGateway.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGateway.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayStatus)

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGateway.property.virtualGatewayName"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpec(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `backendDefaults`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpec.property.backendDefaults"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaults`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaults)

---

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpec.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListener`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListener)[]

---

##### `logging`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpec.property.logging"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLogging`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLogging)

---


### AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaults <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaults"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaults.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaults(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `clientPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaults.property.clientPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy)

---


### AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `tls`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.property.tls"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls)

---


### AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `enforce`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.enforce"></a>

- *Type:* `boolean`

---

##### `ports`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.ports"></a>

- *Type:* `number`[]

---

##### `validation`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.validation"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation)

---


### AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `trust`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.trust"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust)

---


### AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `acm`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.acm"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm)

---

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile)

---


### AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `certificateAuthorityArns`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.property.certificateAuthorityArns"></a>

- *Type:* `string`[]

---


### AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.property.certificateChain"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLogging <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLogging"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLogging.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLogging(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `accessLog`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLogging.property.accessLog"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLog`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLog)

---


### AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLog <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLog"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLog.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLog(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLog.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLog.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLog.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLog.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile)

---


### AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.property.path"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualGatewayVirtualGatewayStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayStatus(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualGatewayVirtualGatewayStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualNode <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNode"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNode.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNode(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `virtualNode`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNode.property.virtualNode"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNode`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNode)

---


### AppMeshResponsesDeleteVirtualNodeVirtualNode <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNode"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNode.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNode(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNode.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNode.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNode.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNode.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeStatus)

---

##### `virtualNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNode.property.virtualNodeName"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpec(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `backendDefaults`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpec.property.backendDefaults"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaults`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaults)

---

##### `backends`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpec.property.backends"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshBackend`](#aws-cdk-sdk.appmesh.AppMeshBackend)[]

---

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpec.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListener`](#aws-cdk-sdk.appmesh.AppMeshListener)[]

---

##### `logging`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpec.property.logging"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLogging`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLogging)

---

##### `serviceDiscovery`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpec.property.serviceDiscovery"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscovery`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscovery)

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaults <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaults"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaults.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaults(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `clientPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaults.property.clientPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy)

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `tls`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.property.tls"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls)

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `enforce`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.property.enforce"></a>

- *Type:* `boolean`

---

##### `ports`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.property.ports"></a>

- *Type:* `number`[]

---

##### `validation`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.property.validation"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation)

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `trust`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.property.trust"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust)

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `acm`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.property.acm"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm)

---

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile)

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `certificateAuthorityArns`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.property.certificateAuthorityArns"></a>

- *Type:* `string`[]

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.property.certificateChain"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLogging <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLogging"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLogging.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLogging(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `accessLog`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLogging.property.accessLog"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLog`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLog)

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLog <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLog"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLog.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLog(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLog.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLog.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLog.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLog.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLogFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLogFile)

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLogFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLogFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLogFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLogFile(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLogFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLogFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLogFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecLoggingAccessLogFile.property.path"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscovery <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscovery"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscovery.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscovery(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscovery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscovery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscovery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `awsCloudMap`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscovery.property.awsCloudMap"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap)

---

##### `dns`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscovery.property.dns"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryDns`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryDns)

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshAwsCloudMapInstanceAttribute`](#aws-cdk-sdk.appmesh.AppMeshAwsCloudMapInstanceAttribute)[]

---

##### `namespaceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.property.namespaceName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.property.serviceName"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryDns <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryDns"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryDns.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryDns(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryDns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryDns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryDns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `hostname`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeSpecServiceDiscoveryDns.property.hostname"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualNodeVirtualNodeStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeStatus(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualNodeVirtualNodeStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualRouter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualRouter(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `virtualRouter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouter.property.virtualRouter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouter`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouter)

---


### AppMeshResponsesDeleteVirtualRouterVirtualRouter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouter(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouter.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouter.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouter.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouter.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterStatus)

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouter.property.virtualRouterName"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteVirtualRouterVirtualRouterSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterSpec(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterSpec.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterListener`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterListener)[]

---


### AppMeshResponsesDeleteVirtualRouterVirtualRouterStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterStatus(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualRouterVirtualRouterStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualService(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualService.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualService)

---


### AppMeshResponsesDeleteVirtualServiceVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualServiceVirtualService(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualService.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualService.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualService.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualService.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceStatus)

---

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesDeleteVirtualServiceVirtualServiceSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpec(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `provider`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpec.property.provider"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProvider`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProvider)

---


### AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProvider <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProvider"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProvider.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProvider(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualNode`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProvider.property.virtualNode"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualNode`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualNode)

---

##### `virtualRouter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProvider.property.virtualRouter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualRouter`](#aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualRouter)

---


### AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualNode <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualNode"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualNode.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualNode(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualNode.property.virtualNodeName"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualRouter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualRouter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualRouter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualRouter(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualRouter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualRouter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualRouter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceSpecProviderVirtualRouter.property.virtualRouterName"></a>

- *Type:* `string`

---


### AppMeshResponsesDeleteVirtualServiceVirtualServiceStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceStatus(__scope: Construct, __resources: string[], __input: AppMeshDeleteVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDeleteVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDeleteVirtualServiceVirtualServiceStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeGatewayRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRoute(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRoute.property.gatewayRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRoute)

---


### AppMeshResponsesDescribeGatewayRouteGatewayRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRoute(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayRouteName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRoute.property.gatewayRouteName"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRoute.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRoute.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRoute.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRoute.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteStatus)

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRoute.property.virtualGatewayName"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpec(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `grpcRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpec.property.grpcRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRoute)

---

##### `http2Route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpec.property.http2Route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2Route`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2Route)

---

##### `httpRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpec.property.httpRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRoute)

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRoute(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteMatch)

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteAction(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteAction.property.target"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTarget`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTarget)

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTarget <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTarget"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTarget(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService)

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecGrpcRouteMatch.property.serviceName"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2Route <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2Route"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2Route.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2Route(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2Route.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2Route.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2Route.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2Route.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2Route.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteMatch)

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteAction(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteAction.property.target"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTarget`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTarget)

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTarget <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTarget"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTarget(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService)

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteMatch(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttp2RouteMatch.property.prefix"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRoute(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteMatch)

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteAction(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteAction.property.target"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTarget`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTarget)

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTarget <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTarget"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTarget.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTarget(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTarget.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService)

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteSpecHttpRouteMatch.property.prefix"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeGatewayRouteGatewayRouteStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteStatus(__scope: Construct, __resources: string[], __input: AppMeshDescribeGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeGatewayRouteGatewayRouteStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeMesh <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMesh"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMesh.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeMesh(__scope: Construct, __resources: string[], __input: AppMeshDescribeMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMesh.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMesh.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMesh.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput)

---



#### Properties <a name="Properties"></a>

##### `mesh`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMesh.property.mesh"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMesh`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMesh)

---


### AppMeshResponsesDescribeMeshMesh <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMesh"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMesh.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeMeshMesh(__scope: Construct, __resources: string[], __input: AppMeshDescribeMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMesh.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMesh.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMesh.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMesh.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMesh.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMesh.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMesh.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshStatus)

---


### AppMeshResponsesDescribeMeshMeshMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeMeshMeshMetadata(__scope: Construct, __resources: string[], __input: AppMeshDescribeMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeMeshMeshSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeMeshMeshSpec(__scope: Construct, __resources: string[], __input: AppMeshDescribeMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput)

---



#### Properties <a name="Properties"></a>

##### `egressFilter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpec.property.egressFilter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpecEgressFilter`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpecEgressFilter)

---


### AppMeshResponsesDescribeMeshMeshSpecEgressFilter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpecEgressFilter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpecEgressFilter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeMeshMeshSpecEgressFilter(__scope: Construct, __resources: string[], __input: AppMeshDescribeMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpecEgressFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpecEgressFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpecEgressFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshSpecEgressFilter.property.type"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeMeshMeshStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeMeshMeshStatus(__scope: Construct, __resources: string[], __input: AppMeshDescribeMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeMeshInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeMeshMeshStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRoute(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRoute.property.route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRoute)

---


### AppMeshResponsesDescribeRouteRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRoute(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRoute.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRoute.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteMetadata)

---

##### `routeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRoute.property.routeName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRoute.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRoute.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteStatus)

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRoute.property.virtualRouterName"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeRouteRouteMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteMetadata(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeRouteRouteSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpec(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `grpcRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpec.property.grpcRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRoute)

---

##### `http2Route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpec.property.http2Route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2Route`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2Route)

---

##### `httpRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpec.property.httpRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRoute)

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpec.property.priority"></a>

- *Type:* `number`

---

##### `tcpRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpec.property.tcpRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRoute)

---


### AppMeshResponsesDescribeRouteRouteSpecGrpcRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRoute(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteMatch)

---

##### `retryPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRoute.property.retryPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicy)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRoute.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeout)

---


### AppMeshResponsesDescribeRouteRouteSpecGrpcRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteAction(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesDescribeRouteRouteSpecGrpcRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteMatch.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadata`](#aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadata)[]

---

##### `methodName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteMatch.property.methodName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteMatch.property.serviceName"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicy(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `grpcRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicy.property.grpcRetryEvents"></a>

- *Type:* `string`[]

---

##### `httpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicy.property.httpRetryEvents"></a>

- *Type:* `string`[]

---

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicy.property.maxRetries"></a>

- *Type:* `number`

---

##### `perRetryTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicy.property.perRetryTimeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout)

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicy.property.tcpRetryEvents"></a>

- *Type:* `string`[]

---


### AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutIdle)

---

##### `perRequest`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeout.property.perRequest"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutPerRequest`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutPerRequest)

---


### AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutPerRequest <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutPerRequest"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutPerRequest.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutPerRequest(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutPerRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutPerRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutPerRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutPerRequest.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecGrpcRouteTimeoutPerRequest.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeRouteRouteSpecHttp2Route <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2Route"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2Route.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2Route(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2Route.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2Route.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2Route.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2Route.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2Route.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteMatch)

---

##### `retryPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2Route.property.retryPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicy)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2Route.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeout)

---


### AppMeshResponsesDescribeRouteRouteSpecHttp2RouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteAction(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesDescribeRouteRouteSpecHttp2RouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteMatch(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `headers`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteMatch.property.headers"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader`](#aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader)[]

---

##### `method`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteMatch.property.method"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteMatch.property.prefix"></a>

- *Type:* `string`

---

##### `scheme`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteMatch.property.scheme"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicy(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `httpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicy.property.httpRetryEvents"></a>

- *Type:* `string`[]

---

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicy.property.maxRetries"></a>

- *Type:* `number`

---

##### `perRetryTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicy.property.perRetryTimeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout)

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicy.property.tcpRetryEvents"></a>

- *Type:* `string`[]

---


### AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutIdle)

---

##### `perRequest`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeout.property.perRequest"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutPerRequest`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutPerRequest)

---


### AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutPerRequest <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutPerRequest"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutPerRequest.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutPerRequest(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutPerRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutPerRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutPerRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutPerRequest.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttp2RouteTimeoutPerRequest.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeRouteRouteSpecHttpRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRoute(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteMatch)

---

##### `retryPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRoute.property.retryPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicy)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRoute.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeout)

---


### AppMeshResponsesDescribeRouteRouteSpecHttpRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteAction(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesDescribeRouteRouteSpecHttpRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `headers`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteMatch.property.headers"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader`](#aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader)[]

---

##### `method`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteMatch.property.method"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteMatch.property.prefix"></a>

- *Type:* `string`

---

##### `scheme`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteMatch.property.scheme"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicy(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `httpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicy.property.httpRetryEvents"></a>

- *Type:* `string`[]

---

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicy.property.maxRetries"></a>

- *Type:* `number`

---

##### `perRetryTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicy.property.perRetryTimeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout)

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicy.property.tcpRetryEvents"></a>

- *Type:* `string`[]

---


### AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutIdle)

---

##### `perRequest`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeout.property.perRequest"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutPerRequest`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutPerRequest)

---


### AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutPerRequest <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutPerRequest"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutPerRequest.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutPerRequest(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutPerRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutPerRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutPerRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutPerRequest.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecHttpRouteTimeoutPerRequest.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeRouteRouteSpecTcpRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRoute(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteAction)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRoute.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeout)

---


### AppMeshResponsesDescribeRouteRouteSpecTcpRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteAction(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeoutIdle)

---


### AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteSpecTcpRouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeRouteRouteStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeRouteRouteStatus(__scope: Construct, __resources: string[], __input: AppMeshDescribeRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeRouteInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeRouteRouteStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualGateway <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGateway"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGateway.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualGateway(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `virtualGateway`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGateway.property.virtualGateway"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGateway`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGateway)

---


### AppMeshResponsesDescribeVirtualGatewayVirtualGateway <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGateway"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGateway.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGateway(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGateway.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGateway.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGateway.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGateway.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayStatus)

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGateway.property.virtualGatewayName"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpec(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `backendDefaults`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpec.property.backendDefaults"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaults`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaults)

---

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpec.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListener`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListener)[]

---

##### `logging`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpec.property.logging"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLogging`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLogging)

---


### AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaults <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaults"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaults.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaults(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `clientPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaults.property.clientPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy)

---


### AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `tls`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.property.tls"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls)

---


### AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `enforce`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.enforce"></a>

- *Type:* `boolean`

---

##### `ports`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.ports"></a>

- *Type:* `number`[]

---

##### `validation`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.validation"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation)

---


### AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `trust`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.trust"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust)

---


### AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `acm`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.acm"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm)

---

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile)

---


### AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `certificateAuthorityArns`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.property.certificateAuthorityArns"></a>

- *Type:* `string`[]

---


### AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.property.certificateChain"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLogging <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLogging"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLogging.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLogging(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `accessLog`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLogging.property.accessLog"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLog`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLog)

---


### AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLog <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLog"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLog.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLog(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLog.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLog.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLog.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLog.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile)

---


### AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.property.path"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualGatewayVirtualGatewayStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayStatus(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualGatewayVirtualGatewayStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualNode <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNode"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNode.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNode(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `virtualNode`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNode.property.virtualNode"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNode`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNode)

---


### AppMeshResponsesDescribeVirtualNodeVirtualNode <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNode"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNode.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNode(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNode.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNode.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNode.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNode.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeStatus)

---

##### `virtualNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNode.property.virtualNodeName"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpec(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `backendDefaults`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpec.property.backendDefaults"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaults`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaults)

---

##### `backends`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpec.property.backends"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshBackend`](#aws-cdk-sdk.appmesh.AppMeshBackend)[]

---

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpec.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListener`](#aws-cdk-sdk.appmesh.AppMeshListener)[]

---

##### `logging`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpec.property.logging"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLogging`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLogging)

---

##### `serviceDiscovery`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpec.property.serviceDiscovery"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscovery`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscovery)

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaults <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaults"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaults.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaults(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `clientPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaults.property.clientPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy)

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `tls`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.property.tls"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls)

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `enforce`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.property.enforce"></a>

- *Type:* `boolean`

---

##### `ports`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.property.ports"></a>

- *Type:* `number`[]

---

##### `validation`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.property.validation"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation)

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `trust`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.property.trust"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust)

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `acm`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.property.acm"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm)

---

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile)

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `certificateAuthorityArns`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.property.certificateAuthorityArns"></a>

- *Type:* `string`[]

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.property.certificateChain"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLogging <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLogging"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLogging.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLogging(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `accessLog`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLogging.property.accessLog"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLog`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLog)

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLog <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLog"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLog.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLog(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLog.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLog.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLog.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLog.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLogFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLogFile)

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLogFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLogFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLogFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLogFile(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLogFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLogFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLogFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecLoggingAccessLogFile.property.path"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscovery <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscovery"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscovery.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscovery(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscovery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscovery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscovery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `awsCloudMap`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscovery.property.awsCloudMap"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap)

---

##### `dns`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscovery.property.dns"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryDns`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryDns)

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshAwsCloudMapInstanceAttribute`](#aws-cdk-sdk.appmesh.AppMeshAwsCloudMapInstanceAttribute)[]

---

##### `namespaceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.property.namespaceName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.property.serviceName"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryDns <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryDns"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryDns.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryDns(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryDns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryDns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryDns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `hostname`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeSpecServiceDiscoveryDns.property.hostname"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualNodeVirtualNodeStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeStatus(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualNodeVirtualNodeStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualRouter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualRouter(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `virtualRouter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouter.property.virtualRouter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouter`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouter)

---


### AppMeshResponsesDescribeVirtualRouterVirtualRouter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouter(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouter.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouter.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouter.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouter.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterStatus)

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouter.property.virtualRouterName"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeVirtualRouterVirtualRouterSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterSpec(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterSpec.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterListener`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterListener)[]

---


### AppMeshResponsesDescribeVirtualRouterVirtualRouterStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterStatus(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualRouterVirtualRouterStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualService(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualService.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualService)

---


### AppMeshResponsesDescribeVirtualServiceVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualServiceVirtualService(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualService.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualService.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualService.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualService.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceStatus)

---

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesDescribeVirtualServiceVirtualServiceSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpec(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `provider`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpec.property.provider"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProvider`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProvider)

---


### AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProvider <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProvider"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProvider.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProvider(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualNode`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProvider.property.virtualNode"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualNode`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualNode)

---

##### `virtualRouter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProvider.property.virtualRouter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualRouter`](#aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualRouter)

---


### AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualNode <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualNode"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualNode.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualNode(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualNode.property.virtualNodeName"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualRouter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualRouter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualRouter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualRouter(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualRouter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualRouter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualRouter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceSpecProviderVirtualRouter.property.virtualRouterName"></a>

- *Type:* `string`

---


### AppMeshResponsesDescribeVirtualServiceVirtualServiceStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceStatus(__scope: Construct, __resources: string[], __input: AppMeshDescribeVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshDescribeVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesDescribeVirtualServiceVirtualServiceStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesListGatewayRoutes <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListGatewayRoutes"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListGatewayRoutes.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesListGatewayRoutes(__scope: Construct, __resources: string[], __input: AppMeshListGatewayRoutesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListGatewayRoutes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListGatewayRoutes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListGatewayRoutes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListGatewayRoutesInput`](#aws-cdk-sdk.appmesh.AppMeshListGatewayRoutesInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayRoutes`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListGatewayRoutes.property.gatewayRoutes"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGatewayRouteRef`](#aws-cdk-sdk.appmesh.AppMeshGatewayRouteRef)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListGatewayRoutes.property.nextToken"></a>

- *Type:* `string`

---


### AppMeshResponsesListMeshes <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListMeshes"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListMeshes.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesListMeshes(__scope: Construct, __resources: string[], __input: AppMeshListMeshesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListMeshes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListMeshes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListMeshes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListMeshesInput`](#aws-cdk-sdk.appmesh.AppMeshListMeshesInput)

---



#### Properties <a name="Properties"></a>

##### `meshes`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListMeshes.property.meshes"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshMeshRef`](#aws-cdk-sdk.appmesh.AppMeshMeshRef)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListMeshes.property.nextToken"></a>

- *Type:* `string`

---


### AppMeshResponsesListRoutes <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListRoutes"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListRoutes.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesListRoutes(__scope: Construct, __resources: string[], __input: AppMeshListRoutesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListRoutes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListRoutes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListRoutes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListRoutesInput`](#aws-cdk-sdk.appmesh.AppMeshListRoutesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListRoutes.property.nextToken"></a>

- *Type:* `string`

---

##### `routes`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListRoutes.property.routes"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshRouteRef`](#aws-cdk-sdk.appmesh.AppMeshRouteRef)[]

---


### AppMeshResponsesListTagsForResource <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListTagsForResource.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: AppMeshListTagsForResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListTagsForResourceInput`](#aws-cdk-sdk.appmesh.AppMeshListTagsForResourceInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshTagRef`](#aws-cdk-sdk.appmesh.AppMeshTagRef)[]

---


### AppMeshResponsesListVirtualGateways <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualGateways"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualGateways.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesListVirtualGateways(__scope: Construct, __resources: string[], __input: AppMeshListVirtualGatewaysInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualGateways.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualGateways.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualGateways.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListVirtualGatewaysInput`](#aws-cdk-sdk.appmesh.AppMeshListVirtualGatewaysInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualGateways.property.nextToken"></a>

- *Type:* `string`

---

##### `virtualGateways`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualGateways.property.virtualGateways"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayRef`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayRef)[]

---


### AppMeshResponsesListVirtualNodes <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualNodes"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualNodes.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesListVirtualNodes(__scope: Construct, __resources: string[], __input: AppMeshListVirtualNodesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualNodes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualNodes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualNodes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListVirtualNodesInput`](#aws-cdk-sdk.appmesh.AppMeshListVirtualNodesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualNodes.property.nextToken"></a>

- *Type:* `string`

---

##### `virtualNodes`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualNodes.property.virtualNodes"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualNodeRef`](#aws-cdk-sdk.appmesh.AppMeshVirtualNodeRef)[]

---


### AppMeshResponsesListVirtualRouters <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualRouters"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualRouters.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesListVirtualRouters(__scope: Construct, __resources: string[], __input: AppMeshListVirtualRoutersInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualRouters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualRouters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualRouters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListVirtualRoutersInput`](#aws-cdk-sdk.appmesh.AppMeshListVirtualRoutersInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualRouters.property.nextToken"></a>

- *Type:* `string`

---

##### `virtualRouters`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualRouters.property.virtualRouters"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterRef`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterRef)[]

---


### AppMeshResponsesListVirtualServices <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualServices"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualServices.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesListVirtualServices(__scope: Construct, __resources: string[], __input: AppMeshListVirtualServicesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualServices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualServices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualServices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListVirtualServicesInput`](#aws-cdk-sdk.appmesh.AppMeshListVirtualServicesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualServices.property.nextToken"></a>

- *Type:* `string`

---

##### `virtualServices`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesListVirtualServices.property.virtualServices"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualServiceRef`](#aws-cdk-sdk.appmesh.AppMeshVirtualServiceRef)[]

---


### AppMeshResponsesUpdateGatewayRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRoute(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRoute.property.gatewayRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRoute)

---


### AppMeshResponsesUpdateGatewayRouteGatewayRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRoute(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayRouteName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRoute.property.gatewayRouteName"></a>

- *Type:* `string`

---

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRoute.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRoute.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRoute.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRoute.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteStatus)

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRoute.property.virtualGatewayName"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpec(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `grpcRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpec.property.grpcRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRoute)

---

##### `http2Route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpec.property.http2Route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2Route`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2Route)

---

##### `httpRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpec.property.httpRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRoute)

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRoute(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteMatch)

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteAction(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteAction.property.target"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget)

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTarget.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService)

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteActionTargetVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecGrpcRouteMatch.property.serviceName"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2Route <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2Route"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2Route.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2Route(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2Route.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2Route.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2Route.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2Route.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2Route.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteMatch)

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteAction(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteAction.property.target"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget)

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTarget.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService)

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteActionTargetVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteMatch(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttp2RouteMatch.property.prefix"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRoute(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteMatch)

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteAction(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteAction.property.target"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTarget`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTarget)

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTarget <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTarget"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTarget.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTarget(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTarget.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService)

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteActionTargetVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteSpecHttpRouteMatch.property.prefix"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateGatewayRouteGatewayRouteStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteStatus(__scope: Construct, __resources: string[], __input: AppMeshUpdateGatewayRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateGatewayRouteInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateGatewayRouteGatewayRouteStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateMesh <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMesh"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMesh.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateMesh(__scope: Construct, __resources: string[], __input: AppMeshUpdateMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMesh.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMesh.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMesh.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput)

---



#### Properties <a name="Properties"></a>

##### `mesh`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMesh.property.mesh"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMesh`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMesh)

---


### AppMeshResponsesUpdateMeshMesh <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMesh"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMesh.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateMeshMesh(__scope: Construct, __resources: string[], __input: AppMeshUpdateMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMesh.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMesh.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMesh.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMesh.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMesh.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMesh.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMesh.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshStatus)

---


### AppMeshResponsesUpdateMeshMeshMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateMeshMeshMetadata(__scope: Construct, __resources: string[], __input: AppMeshUpdateMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateMeshMeshSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateMeshMeshSpec(__scope: Construct, __resources: string[], __input: AppMeshUpdateMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput)

---



#### Properties <a name="Properties"></a>

##### `egressFilter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpec.property.egressFilter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpecEgressFilter`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpecEgressFilter)

---


### AppMeshResponsesUpdateMeshMeshSpecEgressFilter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpecEgressFilter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpecEgressFilter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateMeshMeshSpecEgressFilter(__scope: Construct, __resources: string[], __input: AppMeshUpdateMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpecEgressFilter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpecEgressFilter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpecEgressFilter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshSpecEgressFilter.property.type"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateMeshMeshStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateMeshMeshStatus(__scope: Construct, __resources: string[], __input: AppMeshUpdateMeshInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateMeshInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateMeshMeshStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRoute(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRoute.property.route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRoute)

---


### AppMeshResponsesUpdateRouteRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRoute(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRoute.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRoute.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteMetadata)

---

##### `routeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRoute.property.routeName"></a>

- *Type:* `string`

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRoute.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRoute.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteStatus)

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRoute.property.virtualRouterName"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateRouteRouteMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteMetadata(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateRouteRouteSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpec(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `grpcRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpec.property.grpcRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRoute)

---

##### `http2Route`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpec.property.http2Route"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2Route`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2Route)

---

##### `httpRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpec.property.httpRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRoute)

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpec.property.priority"></a>

- *Type:* `number`

---

##### `tcpRoute`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpec.property.tcpRoute"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRoute`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRoute)

---


### AppMeshResponsesUpdateRouteRouteSpecGrpcRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRoute(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteMatch)

---

##### `retryPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRoute.property.retryPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicy)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRoute.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeout)

---


### AppMeshResponsesUpdateRouteRouteSpecGrpcRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteAction(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesUpdateRouteRouteSpecGrpcRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteMatch.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadata`](#aws-cdk-sdk.appmesh.AppMeshGrpcRouteMetadata)[]

---

##### `methodName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteMatch.property.methodName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteMatch.property.serviceName"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicy(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `grpcRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicy.property.grpcRetryEvents"></a>

- *Type:* `string`[]

---

##### `httpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicy.property.httpRetryEvents"></a>

- *Type:* `string`[]

---

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicy.property.maxRetries"></a>

- *Type:* `number`

---

##### `perRetryTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicy.property.perRetryTimeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout)

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicy.property.tcpRetryEvents"></a>

- *Type:* `string`[]

---


### AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutIdle)

---

##### `perRequest`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeout.property.perRequest"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutPerRequest`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutPerRequest)

---


### AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutPerRequest <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutPerRequest"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutPerRequest.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutPerRequest(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutPerRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutPerRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutPerRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutPerRequest.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecGrpcRouteTimeoutPerRequest.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateRouteRouteSpecHttp2Route <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2Route"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2Route.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2Route(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2Route.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2Route.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2Route.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2Route.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2Route.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteMatch)

---

##### `retryPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2Route.property.retryPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicy)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2Route.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeout)

---


### AppMeshResponsesUpdateRouteRouteSpecHttp2RouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteAction(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesUpdateRouteRouteSpecHttp2RouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteMatch(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `headers`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteMatch.property.headers"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader`](#aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader)[]

---

##### `method`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteMatch.property.method"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteMatch.property.prefix"></a>

- *Type:* `string`

---

##### `scheme`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteMatch.property.scheme"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicy(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `httpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicy.property.httpRetryEvents"></a>

- *Type:* `string`[]

---

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicy.property.maxRetries"></a>

- *Type:* `number`

---

##### `perRetryTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicy.property.perRetryTimeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout)

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicy.property.tcpRetryEvents"></a>

- *Type:* `string`[]

---


### AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutIdle)

---

##### `perRequest`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeout.property.perRequest"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutPerRequest`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutPerRequest)

---


### AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutPerRequest <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutPerRequest"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutPerRequest.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutPerRequest(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutPerRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutPerRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutPerRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutPerRequest.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttp2RouteTimeoutPerRequest.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateRouteRouteSpecHttpRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRoute(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteAction)

---

##### `match`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRoute.property.match"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteMatch`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteMatch)

---

##### `retryPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRoute.property.retryPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicy)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRoute.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeout)

---


### AppMeshResponsesUpdateRouteRouteSpecHttpRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteAction(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesUpdateRouteRouteSpecHttpRouteMatch <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteMatch.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteMatch(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteMatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteMatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteMatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `headers`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteMatch.property.headers"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader`](#aws-cdk-sdk.appmesh.AppMeshHttpRouteHeader)[]

---

##### `method`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteMatch.property.method"></a>

- *Type:* `string`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteMatch.property.prefix"></a>

- *Type:* `string`

---

##### `scheme`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteMatch.property.scheme"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicy(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `httpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicy.property.httpRetryEvents"></a>

- *Type:* `string`[]

---

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicy.property.maxRetries"></a>

- *Type:* `number`

---

##### `perRetryTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicy.property.perRetryTimeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout)

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicy.property.tcpRetryEvents"></a>

- *Type:* `string`[]

---


### AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutIdle)

---

##### `perRequest`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeout.property.perRequest"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutPerRequest`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutPerRequest)

---


### AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutPerRequest <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutPerRequest"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutPerRequest.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutPerRequest(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutPerRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutPerRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutPerRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutPerRequest.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecHttpRouteTimeoutPerRequest.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateRouteRouteSpecTcpRoute <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRoute"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRoute.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRoute(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRoute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRoute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRoute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRoute.property.action"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteAction`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteAction)

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRoute.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeout`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeout)

---


### AppMeshResponsesUpdateRouteRouteSpecTcpRouteAction <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteAction"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteAction.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteAction(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `weightedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteAction.property.weightedTargets"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshWeightedTarget`](#aws-cdk-sdk.appmesh.AppMeshWeightedTarget)[]

---


### AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeout <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeout"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeout.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeout(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `idle`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeout.property.idle"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeoutIdle`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeoutIdle)

---


### AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeoutIdle <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeoutIdle"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeoutIdle.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeoutIdle(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeoutIdle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeoutIdle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeoutIdle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeoutIdle.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteSpecTcpRouteTimeoutIdle.property.value"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateRouteRouteStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateRouteRouteStatus(__scope: Construct, __resources: string[], __input: AppMeshUpdateRouteInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateRouteInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateRouteRouteStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualGateway <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGateway"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGateway.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualGateway(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `virtualGateway`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGateway.property.virtualGateway"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGateway`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGateway)

---


### AppMeshResponsesUpdateVirtualGatewayVirtualGateway <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGateway"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGateway.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGateway(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGateway.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGateway.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGateway.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGateway.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayStatus)

---

##### `virtualGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGateway.property.virtualGatewayName"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpec(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `backendDefaults`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpec.property.backendDefaults"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaults`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaults)

---

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpec.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListener`](#aws-cdk-sdk.appmesh.AppMeshVirtualGatewayListener)[]

---

##### `logging`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpec.property.logging"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLogging`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLogging)

---


### AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaults <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaults"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaults.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaults(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `clientPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaults.property.clientPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy)

---


### AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `tls`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicy.property.tls"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls)

---


### AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `enforce`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.enforce"></a>

- *Type:* `boolean`

---

##### `ports`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.ports"></a>

- *Type:* `number`[]

---

##### `validation`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.validation"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation)

---


### AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `trust`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.trust"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust)

---


### AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `acm`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.acm"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm)

---

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile)

---


### AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `certificateAuthorityArns`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.property.certificateAuthorityArns"></a>

- *Type:* `string`[]

---


### AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.property.certificateChain"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLogging <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLogging"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLogging.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLogging(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `accessLog`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLogging.property.accessLog"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLog`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLog)

---


### AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLog <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLog"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLog.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLog(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLog.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLog.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLog.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLog.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile)

---


### AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewaySpecLoggingAccessLogFile.property.path"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualGatewayVirtualGatewayStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayStatus(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualGatewayVirtualGatewayStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualNode <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNode"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNode.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNode(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `virtualNode`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNode.property.virtualNode"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNode`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNode)

---


### AppMeshResponsesUpdateVirtualNodeVirtualNode <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNode"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNode.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNode(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNode.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNode.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNode.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNode.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeStatus)

---

##### `virtualNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNode.property.virtualNodeName"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpec(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `backendDefaults`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpec.property.backendDefaults"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaults`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaults)

---

##### `backends`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpec.property.backends"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshBackend`](#aws-cdk-sdk.appmesh.AppMeshBackend)[]

---

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpec.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshListener`](#aws-cdk-sdk.appmesh.AppMeshListener)[]

---

##### `logging`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpec.property.logging"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLogging`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLogging)

---

##### `serviceDiscovery`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpec.property.serviceDiscovery"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscovery`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscovery)

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaults <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaults"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaults.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaults(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `clientPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaults.property.clientPolicy"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy)

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `tls`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicy.property.tls"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls)

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `enforce`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.property.enforce"></a>

- *Type:* `boolean`

---

##### `ports`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.property.ports"></a>

- *Type:* `number`[]

---

##### `validation`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTls.property.validation"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation)

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `trust`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation.property.trust"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust)

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `acm`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.property.acm"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm)

---

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile)

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `certificateAuthorityArns`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm.property.certificateAuthorityArns"></a>

- *Type:* `string`[]

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile.property.certificateChain"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLogging <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLogging"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLogging.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLogging(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `accessLog`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLogging.property.accessLog"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLog`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLog)

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLog <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLog"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLog.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLog(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLog.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLog.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLog.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `file`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLog.property.file"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLogFile`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLogFile)

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLogFile <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLogFile"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLogFile.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLogFile(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLogFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLogFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLogFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecLoggingAccessLogFile.property.path"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscovery <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscovery"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscovery.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscovery(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscovery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscovery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscovery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `awsCloudMap`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscovery.property.awsCloudMap"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap)

---

##### `dns`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscovery.property.dns"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryDns`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryDns)

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshAwsCloudMapInstanceAttribute`](#aws-cdk-sdk.appmesh.AppMeshAwsCloudMapInstanceAttribute)[]

---

##### `namespaceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.property.namespaceName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryAwsCloudMap.property.serviceName"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryDns <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryDns"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryDns.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryDns(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryDns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryDns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryDns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `hostname`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeSpecServiceDiscoveryDns.property.hostname"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualNodeVirtualNodeStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeStatus(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualNodeInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualNodeVirtualNodeStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualRouter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualRouter(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `virtualRouter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouter.property.virtualRouter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouter`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouter)

---


### AppMeshResponsesUpdateVirtualRouterVirtualRouter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouter(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouter.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouter.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouter.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouter.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterStatus)

---

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouter.property.virtualRouterName"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateVirtualRouterVirtualRouterSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterSpec(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterSpec.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshVirtualRouterListener`](#aws-cdk-sdk.appmesh.AppMeshVirtualRouterListener)[]

---


### AppMeshResponsesUpdateVirtualRouterVirtualRouterStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterStatus(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualRouterInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualRouterInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualRouterVirtualRouterStatus.property.status"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualService(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualService`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualService.property.virtualService"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualService`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualService)

---


### AppMeshResponsesUpdateVirtualServiceVirtualService <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualService"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualService.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualServiceVirtualService(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `meshName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualService.property.meshName"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualService.property.metadata"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata)

---

##### `spec`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualService.property.spec"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpec`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpec)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualService.property.status"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceStatus`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceStatus)

---

##### `virtualServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualService.property.virtualServiceName"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `meshOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata.property.meshOwner"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata.property.resourceOwner"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata.property.uid"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceMetadata.property.version"></a>

- *Type:* `number`

---


### AppMeshResponsesUpdateVirtualServiceVirtualServiceSpec <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpec"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpec.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpec(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpec.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpec.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpec.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `provider`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpec.property.provider"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProvider`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProvider)

---


### AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProvider <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProvider"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProvider.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProvider(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualNode`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProvider.property.virtualNode"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualNode`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualNode)

---

##### `virtualRouter`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProvider.property.virtualRouter"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualRouter`](#aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualRouter)

---


### AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualNode <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualNode"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualNode.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualNode(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualNode.property.virtualNodeName"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualRouter <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualRouter"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualRouter.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualRouter(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualRouter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualRouter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualRouter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `virtualRouterName`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceSpecProviderVirtualRouter.property.virtualRouterName"></a>

- *Type:* `string`

---


### AppMeshResponsesUpdateVirtualServiceVirtualServiceStatus <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceStatus"></a>

#### Initializer <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceStatus.Initializer"></a>

```typescript
import { appmesh } from 'aws-cdk-sdk'

new appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceStatus(__scope: Construct, __resources: string[], __input: AppMeshUpdateVirtualServiceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput`](#aws-cdk-sdk.appmesh.AppMeshUpdateVirtualServiceInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.appmesh.AppMeshResponsesUpdateVirtualServiceVirtualServiceStatus.property.status"></a>

- *Type:* `string`

---



