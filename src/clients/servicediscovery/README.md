# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ServiceDiscoveryClient <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createHttpNamespace` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.createHttpNamespace"></a>

```typescript
public createHttpNamespace(input: ServiceDiscoveryCreateHttpNamespaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateHttpNamespaceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateHttpNamespaceRequest)

---

##### `createPrivateDnsNamespace` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.createPrivateDnsNamespace"></a>

```typescript
public createPrivateDnsNamespace(input: ServiceDiscoveryCreatePrivateDnsNamespaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePrivateDnsNamespaceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePrivateDnsNamespaceRequest)

---

##### `createPublicDnsNamespace` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.createPublicDnsNamespace"></a>

```typescript
public createPublicDnsNamespace(input: ServiceDiscoveryCreatePublicDnsNamespaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePublicDnsNamespaceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePublicDnsNamespaceRequest)

---

##### `createService` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.createService"></a>

```typescript
public createService(input: ServiceDiscoveryCreateServiceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest)

---

##### `deleteNamespace` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.deleteNamespace"></a>

```typescript
public deleteNamespace(input: ServiceDiscoveryDeleteNamespaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeleteNamespaceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeleteNamespaceRequest)

---

##### `deleteService` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.deleteService"></a>

```typescript
public deleteService(input: ServiceDiscoveryDeleteServiceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeleteServiceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeleteServiceRequest)

---

##### `deregisterInstance` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.deregisterInstance"></a>

```typescript
public deregisterInstance(input: ServiceDiscoveryDeregisterInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeregisterInstanceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeregisterInstanceRequest)

---

##### `discoverInstances` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.discoverInstances"></a>

```typescript
public discoverInstances(input: ServiceDiscoveryDiscoverInstancesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDiscoverInstancesRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDiscoverInstancesRequest)

---

##### `fetchInstance` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.fetchInstance"></a>

```typescript
public fetchInstance(input: ServiceDiscoveryGetInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstanceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstanceRequest)

---

##### `fetchInstancesHealthStatus` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.fetchInstancesHealthStatus"></a>

```typescript
public fetchInstancesHealthStatus(input: ServiceDiscoveryGetInstancesHealthStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstancesHealthStatusRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstancesHealthStatusRequest)

---

##### `fetchNamespace` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.fetchNamespace"></a>

```typescript
public fetchNamespace(input: ServiceDiscoveryGetNamespaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceRequest)

---

##### `fetchOperation` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.fetchOperation"></a>

```typescript
public fetchOperation(input: ServiceDiscoveryGetOperationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetOperationRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetOperationRequest)

---

##### `fetchService` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.fetchService"></a>

```typescript
public fetchService(input: ServiceDiscoveryGetServiceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceRequest)

---

##### `listInstances` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.listInstances"></a>

```typescript
public listInstances(input: ServiceDiscoveryListInstancesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryListInstancesRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryListInstancesRequest)

---

##### `listNamespaces` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.listNamespaces"></a>

```typescript
public listNamespaces(input: ServiceDiscoveryListNamespacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryListNamespacesRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryListNamespacesRequest)

---

##### `listOperations` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.listOperations"></a>

```typescript
public listOperations(input: ServiceDiscoveryListOperationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryListOperationsRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryListOperationsRequest)

---

##### `listServices` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.listServices"></a>

```typescript
public listServices(input: ServiceDiscoveryListServicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryListServicesRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryListServicesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: ServiceDiscoveryListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryListTagsForResourceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryListTagsForResourceRequest)

---

##### `registerInstance` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.registerInstance"></a>

```typescript
public registerInstance(input: ServiceDiscoveryRegisterInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryRegisterInstanceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryRegisterInstanceRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.tagResource"></a>

```typescript
public tagResource(input: ServiceDiscoveryTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryTagResourceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.untagResource"></a>

```typescript
public untagResource(input: ServiceDiscoveryUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryUntagResourceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryUntagResourceRequest)

---

##### `updateInstanceCustomHealthStatus` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.updateInstanceCustomHealthStatus"></a>

```typescript
public updateInstanceCustomHealthStatus(input: ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest)

---

##### `updateService` <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.updateService"></a>

```typescript
public updateService(input: ServiceDiscoveryUpdateServiceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryUpdateServiceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryUpdateServiceRequest)

---




## Structs <a name="Structs"></a>

### ServiceDiscoveryCreateHttpNamespaceRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateHttpNamespaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryCreateHttpNamespaceRequest: servicediscovery.ServiceDiscoveryCreateHttpNamespaceRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateHttpNamespaceRequest.property.name"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateHttpNamespaceRequest.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateHttpNamespaceRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateHttpNamespaceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag)[]

---

### ServiceDiscoveryCreateHttpNamespaceResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateHttpNamespaceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryCreateHttpNamespaceResponse: servicediscovery.ServiceDiscoveryCreateHttpNamespaceResponse = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateHttpNamespaceResponse.property.operationId"></a>

- *Type:* `string`

---

### ServiceDiscoveryCreatePrivateDnsNamespaceRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePrivateDnsNamespaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryCreatePrivateDnsNamespaceRequest: servicediscovery.ServiceDiscoveryCreatePrivateDnsNamespaceRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePrivateDnsNamespaceRequest.property.name"></a>

- *Type:* `string`

---

##### `vpc`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePrivateDnsNamespaceRequest.property.vpc"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePrivateDnsNamespaceRequest.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePrivateDnsNamespaceRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePrivateDnsNamespaceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag)[]

---

### ServiceDiscoveryCreatePrivateDnsNamespaceResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePrivateDnsNamespaceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryCreatePrivateDnsNamespaceResponse: servicediscovery.ServiceDiscoveryCreatePrivateDnsNamespaceResponse = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePrivateDnsNamespaceResponse.property.operationId"></a>

- *Type:* `string`

---

### ServiceDiscoveryCreatePublicDnsNamespaceRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePublicDnsNamespaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryCreatePublicDnsNamespaceRequest: servicediscovery.ServiceDiscoveryCreatePublicDnsNamespaceRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePublicDnsNamespaceRequest.property.name"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePublicDnsNamespaceRequest.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePublicDnsNamespaceRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePublicDnsNamespaceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag)[]

---

### ServiceDiscoveryCreatePublicDnsNamespaceResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePublicDnsNamespaceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryCreatePublicDnsNamespaceResponse: servicediscovery.ServiceDiscoveryCreatePublicDnsNamespaceResponse = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePublicDnsNamespaceResponse.property.operationId"></a>

- *Type:* `string`

---

### ServiceDiscoveryCreateServiceRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryCreateServiceRequest: servicediscovery.ServiceDiscoveryCreateServiceRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest.property.name"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest.property.description"></a>

- *Type:* `string`

---

##### `dnsConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest.property.dnsConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsConfig)

---

##### `healthCheckConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest.property.healthCheckConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckConfig)

---

##### `healthCheckCustomConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest.property.healthCheckCustomConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckCustomConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckCustomConfig)

---

##### `namespaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest.property.namespaceId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag)[]

---

### ServiceDiscoveryCreateServiceResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryCreateServiceResponse: servicediscovery.ServiceDiscoveryCreateServiceResponse = { ... }
```

##### `service`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceResponse.property.service"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryService`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryService)

---

### ServiceDiscoveryDeleteNamespaceRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeleteNamespaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryDeleteNamespaceRequest: servicediscovery.ServiceDiscoveryDeleteNamespaceRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeleteNamespaceRequest.property.id"></a>

- *Type:* `string`

---

### ServiceDiscoveryDeleteNamespaceResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeleteNamespaceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryDeleteNamespaceResponse: servicediscovery.ServiceDiscoveryDeleteNamespaceResponse = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeleteNamespaceResponse.property.operationId"></a>

- *Type:* `string`

---

### ServiceDiscoveryDeleteServiceRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeleteServiceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryDeleteServiceRequest: servicediscovery.ServiceDiscoveryDeleteServiceRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeleteServiceRequest.property.id"></a>

- *Type:* `string`

---

### ServiceDiscoveryDeleteServiceResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeleteServiceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryDeleteServiceResponse: servicediscovery.ServiceDiscoveryDeleteServiceResponse = { ... }
```

### ServiceDiscoveryDeregisterInstanceRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeregisterInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryDeregisterInstanceRequest: servicediscovery.ServiceDiscoveryDeregisterInstanceRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeregisterInstanceRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `serviceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeregisterInstanceRequest.property.serviceId"></a>

- *Type:* `string`

---

### ServiceDiscoveryDeregisterInstanceResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeregisterInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryDeregisterInstanceResponse: servicediscovery.ServiceDiscoveryDeregisterInstanceResponse = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeregisterInstanceResponse.property.operationId"></a>

- *Type:* `string`

---

### ServiceDiscoveryDiscoverInstancesRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDiscoverInstancesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryDiscoverInstancesRequest: servicediscovery.ServiceDiscoveryDiscoverInstancesRequest = { ... }
```

##### `namespaceName`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDiscoverInstancesRequest.property.namespaceName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDiscoverInstancesRequest.property.serviceName"></a>

- *Type:* `string`

---

##### `healthStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDiscoverInstancesRequest.property.healthStatus"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDiscoverInstancesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `optionalParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDiscoverInstancesRequest.property.optionalParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `queryParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDiscoverInstancesRequest.property.queryParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### ServiceDiscoveryDiscoverInstancesResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDiscoverInstancesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryDiscoverInstancesResponse: servicediscovery.ServiceDiscoveryDiscoverInstancesResponse = { ... }
```

##### `instances`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDiscoverInstancesResponse.property.instances"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryHttpInstanceSummary`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryHttpInstanceSummary)[]

---

### ServiceDiscoveryDnsConfig <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryDnsConfig: servicediscovery.ServiceDiscoveryDnsConfig = { ... }
```

##### `dnsRecords`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsConfig.property.dnsRecords"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsRecord`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsRecord)[]

---

##### `namespaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsConfig.property.namespaceId"></a>

- *Type:* `string`

---

##### `routingPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsConfig.property.routingPolicy"></a>

- *Type:* `string`

---

### ServiceDiscoveryDnsConfigChange <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsConfigChange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryDnsConfigChange: servicediscovery.ServiceDiscoveryDnsConfigChange = { ... }
```

##### `dnsRecords`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsConfigChange.property.dnsRecords"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsRecord`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsRecord)[]

---

### ServiceDiscoveryDnsProperties <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryDnsProperties: servicediscovery.ServiceDiscoveryDnsProperties = { ... }
```

##### `hostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsProperties.property.hostedZoneId"></a>

- *Type:* `string`

---

### ServiceDiscoveryDnsRecord <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryDnsRecord: servicediscovery.ServiceDiscoveryDnsRecord = { ... }
```

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsRecord.property.ttl"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsRecord.property.type"></a>

- *Type:* `string`

---

### ServiceDiscoveryGetInstanceRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryGetInstanceRequest: servicediscovery.ServiceDiscoveryGetInstanceRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstanceRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `serviceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstanceRequest.property.serviceId"></a>

- *Type:* `string`

---

### ServiceDiscoveryGetInstanceResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryGetInstanceResponse: servicediscovery.ServiceDiscoveryGetInstanceResponse = { ... }
```

##### `instance`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstanceResponse.property.instance"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryInstance`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryInstance)

---

### ServiceDiscoveryGetInstancesHealthStatusRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstancesHealthStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryGetInstancesHealthStatusRequest: servicediscovery.ServiceDiscoveryGetInstancesHealthStatusRequest = { ... }
```

##### `serviceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstancesHealthStatusRequest.property.serviceId"></a>

- *Type:* `string`

---

##### `instances`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstancesHealthStatusRequest.property.instances"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstancesHealthStatusRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstancesHealthStatusRequest.property.nextToken"></a>

- *Type:* `string`

---

### ServiceDiscoveryGetInstancesHealthStatusResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstancesHealthStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryGetInstancesHealthStatusResponse: servicediscovery.ServiceDiscoveryGetInstancesHealthStatusResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstancesHealthStatusResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstancesHealthStatusResponse.property.status"></a>

- *Type:* {[ key: string ]: `string`}

---

### ServiceDiscoveryGetNamespaceRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryGetNamespaceRequest: servicediscovery.ServiceDiscoveryGetNamespaceRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceRequest.property.id"></a>

- *Type:* `string`

---

### ServiceDiscoveryGetNamespaceResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryGetNamespaceResponse: servicediscovery.ServiceDiscoveryGetNamespaceResponse = { ... }
```

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceResponse.property.namespace"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespace`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespace)

---

### ServiceDiscoveryGetOperationRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetOperationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryGetOperationRequest: servicediscovery.ServiceDiscoveryGetOperationRequest = { ... }
```

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetOperationRequest.property.operationId"></a>

- *Type:* `string`

---

### ServiceDiscoveryGetOperationResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetOperationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryGetOperationResponse: servicediscovery.ServiceDiscoveryGetOperationResponse = { ... }
```

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetOperationResponse.property.operation"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperation`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperation)

---

### ServiceDiscoveryGetServiceRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryGetServiceRequest: servicediscovery.ServiceDiscoveryGetServiceRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceRequest.property.id"></a>

- *Type:* `string`

---

### ServiceDiscoveryGetServiceResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryGetServiceResponse: servicediscovery.ServiceDiscoveryGetServiceResponse = { ... }
```

##### `service`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceResponse.property.service"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryService`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryService)

---

### ServiceDiscoveryHealthCheckConfig <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryHealthCheckConfig: servicediscovery.ServiceDiscoveryHealthCheckConfig = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckConfig.property.type"></a>

- *Type:* `string`

---

##### `failureThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckConfig.property.failureThreshold"></a>

- *Type:* `number`

---

##### `resourcePath`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckConfig.property.resourcePath"></a>

- *Type:* `string`

---

### ServiceDiscoveryHealthCheckCustomConfig <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckCustomConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryHealthCheckCustomConfig: servicediscovery.ServiceDiscoveryHealthCheckCustomConfig = { ... }
```

##### `failureThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckCustomConfig.property.failureThreshold"></a>

- *Type:* `number`

---

### ServiceDiscoveryHttpInstanceSummary <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryHttpInstanceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryHttpInstanceSummary: servicediscovery.ServiceDiscoveryHttpInstanceSummary = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryHttpInstanceSummary.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `healthStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryHttpInstanceSummary.property.healthStatus"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryHttpInstanceSummary.property.instanceId"></a>

- *Type:* `string`

---

##### `namespaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryHttpInstanceSummary.property.namespaceName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryHttpInstanceSummary.property.serviceName"></a>

- *Type:* `string`

---

### ServiceDiscoveryHttpProperties <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryHttpProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryHttpProperties: servicediscovery.ServiceDiscoveryHttpProperties = { ... }
```

##### `httpName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryHttpProperties.property.httpName"></a>

- *Type:* `string`

---

### ServiceDiscoveryInstance <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryInstance: servicediscovery.ServiceDiscoveryInstance = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryInstance.property.id"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryInstance.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryInstance.property.creatorRequestId"></a>

- *Type:* `string`

---

### ServiceDiscoveryInstanceSummary <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryInstanceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryInstanceSummary: servicediscovery.ServiceDiscoveryInstanceSummary = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryInstanceSummary.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryInstanceSummary.property.id"></a>

- *Type:* `string`

---

### ServiceDiscoveryListInstancesRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListInstancesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryListInstancesRequest: servicediscovery.ServiceDiscoveryListInstancesRequest = { ... }
```

##### `serviceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListInstancesRequest.property.serviceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListInstancesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListInstancesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ServiceDiscoveryListInstancesResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListInstancesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryListInstancesResponse: servicediscovery.ServiceDiscoveryListInstancesResponse = { ... }
```

##### `instances`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListInstancesResponse.property.instances"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryInstanceSummary`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryInstanceSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListInstancesResponse.property.nextToken"></a>

- *Type:* `string`

---

### ServiceDiscoveryListNamespacesRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListNamespacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryListNamespacesRequest: servicediscovery.ServiceDiscoveryListNamespacesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListNamespacesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceFilter`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListNamespacesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListNamespacesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ServiceDiscoveryListNamespacesResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListNamespacesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryListNamespacesResponse: servicediscovery.ServiceDiscoveryListNamespacesResponse = { ... }
```

##### `namespaces`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListNamespacesResponse.property.namespaces"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceSummary`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListNamespacesResponse.property.nextToken"></a>

- *Type:* `string`

---

### ServiceDiscoveryListOperationsRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListOperationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryListOperationsRequest: servicediscovery.ServiceDiscoveryListOperationsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListOperationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperationFilter`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperationFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListOperationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListOperationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ServiceDiscoveryListOperationsResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListOperationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryListOperationsResponse: servicediscovery.ServiceDiscoveryListOperationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListOperationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListOperationsResponse.property.operations"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperationSummary`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperationSummary)[]

---

### ServiceDiscoveryListServicesRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListServicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryListServicesRequest: servicediscovery.ServiceDiscoveryListServicesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListServicesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceFilter`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListServicesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListServicesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ServiceDiscoveryListServicesResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListServicesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryListServicesResponse: servicediscovery.ServiceDiscoveryListServicesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListServicesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `services`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListServicesResponse.property.services"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceSummary`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceSummary)[]

---

### ServiceDiscoveryListTagsForResourceRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryListTagsForResourceRequest: servicediscovery.ServiceDiscoveryListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### ServiceDiscoveryListTagsForResourceResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryListTagsForResourceResponse: servicediscovery.ServiceDiscoveryListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag)[]

---

### ServiceDiscoveryNamespace <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespace"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryNamespace: servicediscovery.ServiceDiscoveryNamespace = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespace.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespace.property.createDate"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespace.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespace.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespace.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespace.property.name"></a>

- *Type:* `string`

---

##### `properties`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespace.property.properties"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceProperties`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceProperties)

---

##### `serviceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespace.property.serviceCount"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespace.property.type"></a>

- *Type:* `string`

---

### ServiceDiscoveryNamespaceFilter <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryNamespaceFilter: servicediscovery.ServiceDiscoveryNamespaceFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceFilter.property.values"></a>

- *Type:* `string`[]

---

##### `condition`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceFilter.property.condition"></a>

- *Type:* `string`

---

### ServiceDiscoveryNamespaceProperties <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryNamespaceProperties: servicediscovery.ServiceDiscoveryNamespaceProperties = { ... }
```

##### `dnsProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceProperties.property.dnsProperties"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsProperties`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsProperties)

---

##### `httpProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceProperties.property.httpProperties"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryHttpProperties`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryHttpProperties)

---

### ServiceDiscoveryNamespaceSummary <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryNamespaceSummary: servicediscovery.ServiceDiscoveryNamespaceSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceSummary.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceSummary.property.createDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceSummary.property.name"></a>

- *Type:* `string`

---

##### `properties`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceSummary.property.properties"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceProperties`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceProperties)

---

##### `serviceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceSummary.property.serviceCount"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceSummary.property.type"></a>

- *Type:* `string`

---

### ServiceDiscoveryOperation <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryOperation: servicediscovery.ServiceDiscoveryOperation = { ... }
```

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperation.property.createDate"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperation.property.errorMessage"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperation.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperation.property.status"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperation.property.targets"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperation.property.type"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperation.property.updateDate"></a>

- *Type:* `string`

---

### ServiceDiscoveryOperationFilter <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperationFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryOperationFilter: servicediscovery.ServiceDiscoveryOperationFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperationFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperationFilter.property.values"></a>

- *Type:* `string`[]

---

##### `condition`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperationFilter.property.condition"></a>

- *Type:* `string`

---

### ServiceDiscoveryOperationSummary <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryOperationSummary: servicediscovery.ServiceDiscoveryOperationSummary = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperationSummary.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperationSummary.property.status"></a>

- *Type:* `string`

---

### ServiceDiscoveryRegisterInstanceRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryRegisterInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryRegisterInstanceRequest: servicediscovery.ServiceDiscoveryRegisterInstanceRequest = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryRegisterInstanceRequest.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryRegisterInstanceRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `serviceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryRegisterInstanceRequest.property.serviceId"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryRegisterInstanceRequest.property.creatorRequestId"></a>

- *Type:* `string`

---

### ServiceDiscoveryRegisterInstanceResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryRegisterInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryRegisterInstanceResponse: servicediscovery.ServiceDiscoveryRegisterInstanceResponse = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryRegisterInstanceResponse.property.operationId"></a>

- *Type:* `string`

---

### ServiceDiscoveryService <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryService: servicediscovery.ServiceDiscoveryService = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryService.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryService.property.createDate"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryService.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryService.property.description"></a>

- *Type:* `string`

---

##### `dnsConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryService.property.dnsConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsConfig)

---

##### `healthCheckConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryService.property.healthCheckConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckConfig)

---

##### `healthCheckCustomConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryService.property.healthCheckCustomConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckCustomConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckCustomConfig)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryService.property.id"></a>

- *Type:* `string`

---

##### `instanceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryService.property.instanceCount"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryService.property.name"></a>

- *Type:* `string`

---

##### `namespaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryService.property.namespaceId"></a>

- *Type:* `string`

---

### ServiceDiscoveryServiceChange <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceChange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryServiceChange: servicediscovery.ServiceDiscoveryServiceChange = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceChange.property.description"></a>

- *Type:* `string`

---

##### `dnsConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceChange.property.dnsConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsConfigChange`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsConfigChange)

---

##### `healthCheckConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceChange.property.healthCheckConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckConfig)

---

### ServiceDiscoveryServiceFilter <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryServiceFilter: servicediscovery.ServiceDiscoveryServiceFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceFilter.property.values"></a>

- *Type:* `string`[]

---

##### `condition`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceFilter.property.condition"></a>

- *Type:* `string`

---

### ServiceDiscoveryServiceSummary <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryServiceSummary: servicediscovery.ServiceDiscoveryServiceSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceSummary.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceSummary.property.createDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceSummary.property.description"></a>

- *Type:* `string`

---

##### `dnsConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceSummary.property.dnsConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsConfig)

---

##### `healthCheckConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceSummary.property.healthCheckConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckConfig)

---

##### `healthCheckCustomConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceSummary.property.healthCheckCustomConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckCustomConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryHealthCheckCustomConfig)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceSummary.property.id"></a>

- *Type:* `string`

---

##### `instanceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceSummary.property.instanceCount"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceSummary.property.name"></a>

- *Type:* `string`

---

### ServiceDiscoveryTag <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryTag: servicediscovery.ServiceDiscoveryTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag.property.value"></a>

- *Type:* `string`

---

### ServiceDiscoveryTagResourceRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryTagResourceRequest: servicediscovery.ServiceDiscoveryTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag)[]

---

### ServiceDiscoveryTagResourceResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryTagResourceResponse: servicediscovery.ServiceDiscoveryTagResourceResponse = { ... }
```

### ServiceDiscoveryUntagResourceRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryUntagResourceRequest: servicediscovery.ServiceDiscoveryUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### ServiceDiscoveryUntagResourceResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryUntagResourceResponse: servicediscovery.ServiceDiscoveryUntagResourceResponse = { ... }
```

### ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryUpdateInstanceCustomHealthStatusRequest: servicediscovery.ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `serviceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest.property.serviceId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest.property.status"></a>

- *Type:* `string`

---

### ServiceDiscoveryUpdateServiceRequest <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryUpdateServiceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryUpdateServiceRequest: servicediscovery.ServiceDiscoveryUpdateServiceRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryUpdateServiceRequest.property.id"></a>

- *Type:* `string`

---

##### `service`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryUpdateServiceRequest.property.service"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceChange`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceChange)

---

### ServiceDiscoveryUpdateServiceResponse <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryUpdateServiceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

const serviceDiscoveryUpdateServiceResponse: servicediscovery.ServiceDiscoveryUpdateServiceResponse = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryUpdateServiceResponse.property.operationId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### ServiceDiscoveryResponsesCreateHttpNamespace <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateHttpNamespace"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateHttpNamespace.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesCreateHttpNamespace(__scope: Construct, __resources: string[], __input: ServiceDiscoveryCreateHttpNamespaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateHttpNamespace.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateHttpNamespace.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateHttpNamespace.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateHttpNamespaceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateHttpNamespaceRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateHttpNamespace.property.operationId"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesCreatePrivateDnsNamespace <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreatePrivateDnsNamespace"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreatePrivateDnsNamespace.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesCreatePrivateDnsNamespace(__scope: Construct, __resources: string[], __input: ServiceDiscoveryCreatePrivateDnsNamespaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreatePrivateDnsNamespace.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreatePrivateDnsNamespace.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreatePrivateDnsNamespace.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePrivateDnsNamespaceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePrivateDnsNamespaceRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreatePrivateDnsNamespace.property.operationId"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesCreatePublicDnsNamespace <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreatePublicDnsNamespace"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreatePublicDnsNamespace.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesCreatePublicDnsNamespace(__scope: Construct, __resources: string[], __input: ServiceDiscoveryCreatePublicDnsNamespaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreatePublicDnsNamespace.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreatePublicDnsNamespace.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreatePublicDnsNamespace.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePublicDnsNamespaceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreatePublicDnsNamespaceRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreatePublicDnsNamespace.property.operationId"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesCreateService <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateService"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateService.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesCreateService(__scope: Construct, __resources: string[], __input: ServiceDiscoveryCreateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `service`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateService.property.service"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService)

---


### ServiceDiscoveryResponsesCreateServiceService <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesCreateServiceService(__scope: Construct, __resources: string[], __input: ServiceDiscoveryCreateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService.property.createDate"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService.property.description"></a>

- *Type:* `string`

---

##### `dnsConfig`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService.property.dnsConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceDnsConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceDnsConfig)

---

##### `healthCheckConfig`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService.property.healthCheckConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckConfig)

---

##### `healthCheckCustomConfig`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService.property.healthCheckCustomConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckCustomConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckCustomConfig)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService.property.id"></a>

- *Type:* `string`

---

##### `instanceCount`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService.property.instanceCount"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService.property.name"></a>

- *Type:* `string`

---

##### `namespaceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceService.property.namespaceId"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesCreateServiceServiceDnsConfig <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceDnsConfig"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceDnsConfig.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceDnsConfig(__scope: Construct, __resources: string[], __input: ServiceDiscoveryCreateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceDnsConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceDnsConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceDnsConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `dnsRecords`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceDnsConfig.property.dnsRecords"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsRecord`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsRecord)[]

---

##### `namespaceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceDnsConfig.property.namespaceId"></a>

- *Type:* `string`

---

##### `routingPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceDnsConfig.property.routingPolicy"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesCreateServiceServiceHealthCheckConfig <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckConfig"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckConfig.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckConfig(__scope: Construct, __resources: string[], __input: ServiceDiscoveryCreateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `failureThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckConfig.property.failureThreshold"></a>

- *Type:* `number`

---

##### `resourcePath`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckConfig.property.resourcePath"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckConfig.property.type"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesCreateServiceServiceHealthCheckCustomConfig <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckCustomConfig"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckCustomConfig.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckCustomConfig(__scope: Construct, __resources: string[], __input: ServiceDiscoveryCreateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckCustomConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckCustomConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckCustomConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryCreateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `failureThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesCreateServiceServiceHealthCheckCustomConfig.property.failureThreshold"></a>

- *Type:* `number`

---


### ServiceDiscoveryResponsesDeleteNamespace <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDeleteNamespace"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDeleteNamespace.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesDeleteNamespace(__scope: Construct, __resources: string[], __input: ServiceDiscoveryDeleteNamespaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDeleteNamespace.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDeleteNamespace.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDeleteNamespace.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeleteNamespaceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeleteNamespaceRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDeleteNamespace.property.operationId"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesDeregisterInstance <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDeregisterInstance"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDeregisterInstance.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesDeregisterInstance(__scope: Construct, __resources: string[], __input: ServiceDiscoveryDeregisterInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDeregisterInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDeregisterInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDeregisterInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeregisterInstanceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDeregisterInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDeregisterInstance.property.operationId"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesDiscoverInstances <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDiscoverInstances"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDiscoverInstances.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesDiscoverInstances(__scope: Construct, __resources: string[], __input: ServiceDiscoveryDiscoverInstancesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDiscoverInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDiscoverInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDiscoverInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDiscoverInstancesRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDiscoverInstancesRequest)

---



#### Properties <a name="Properties"></a>

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesDiscoverInstances.property.instances"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryHttpInstanceSummary`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryHttpInstanceSummary)[]

---


### ServiceDiscoveryResponsesFetchInstance <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstance"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstance.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesFetchInstance(__scope: Construct, __resources: string[], __input: ServiceDiscoveryGetInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstanceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `instance`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstance.property.instance"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstanceInstance`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstanceInstance)

---


### ServiceDiscoveryResponsesFetchInstanceInstance <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstanceInstance"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstanceInstance.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesFetchInstanceInstance(__scope: Construct, __resources: string[], __input: ServiceDiscoveryGetInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstanceInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstanceInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstanceInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstanceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstanceInstance.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstanceInstance.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstanceInstance.property.id"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesFetchInstancesHealthStatus <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstancesHealthStatus"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstancesHealthStatus.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesFetchInstancesHealthStatus(__scope: Construct, __resources: string[], __input: ServiceDiscoveryGetInstancesHealthStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstancesHealthStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstancesHealthStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstancesHealthStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstancesHealthStatusRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetInstancesHealthStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstancesHealthStatus.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchInstancesHealthStatus.property.status"></a>

- *Type:* {[ key: string ]: `string`}

---


### ServiceDiscoveryResponsesFetchNamespace <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespace"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespace.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesFetchNamespace(__scope: Construct, __resources: string[], __input: ServiceDiscoveryGetNamespaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespace.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespace.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespace.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceRequest)

---



#### Properties <a name="Properties"></a>

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespace.property.namespace"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace)

---


### ServiceDiscoveryResponsesFetchNamespaceNamespace <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace(__scope: Construct, __resources: string[], __input: ServiceDiscoveryGetNamespaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace.property.createDate"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace.property.name"></a>

- *Type:* `string`

---

##### `properties`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace.property.properties"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespaceProperties`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespaceProperties)

---

##### `serviceCount`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace.property.serviceCount"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespace.property.type"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesFetchNamespaceNamespaceProperties <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespaceProperties"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespaceProperties.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespaceProperties(__scope: Construct, __resources: string[], __input: ServiceDiscoveryGetNamespaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespaceProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespaceProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespaceProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceRequest)

---



#### Properties <a name="Properties"></a>

##### `dnsProperties`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespaceProperties.property.dnsProperties"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsProperties`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsProperties)

---

##### `httpProperties`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespaceProperties.property.httpProperties"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesHttpProperties`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesHttpProperties)

---


### ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsProperties <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsProperties"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsProperties.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsProperties(__scope: Construct, __resources: string[], __input: ServiceDiscoveryGetNamespaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceRequest)

---



#### Properties <a name="Properties"></a>

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsProperties.property.hostedZoneId"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesHttpProperties <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesHttpProperties"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesHttpProperties.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesHttpProperties(__scope: Construct, __resources: string[], __input: ServiceDiscoveryGetNamespaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesHttpProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesHttpProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesHttpProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetNamespaceRequest)

---



#### Properties <a name="Properties"></a>

##### `httpName`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesHttpProperties.property.httpName"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesFetchOperation <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperation"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperation.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesFetchOperation(__scope: Construct, __resources: string[], __input: ServiceDiscoveryGetOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetOperationRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperation.property.operation"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation)

---


### ServiceDiscoveryResponsesFetchOperationOperation <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation(__scope: Construct, __resources: string[], __input: ServiceDiscoveryGetOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetOperationRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation.property.createDate"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation.property.errorMessage"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation.property.status"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation.property.targets"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation.property.type"></a>

- *Type:* `string`

---

##### `updateDate`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchOperationOperation.property.updateDate"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesFetchService <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchService"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchService.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesFetchService(__scope: Construct, __resources: string[], __input: ServiceDiscoveryGetServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `service`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchService.property.service"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService)

---


### ServiceDiscoveryResponsesFetchServiceService <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesFetchServiceService(__scope: Construct, __resources: string[], __input: ServiceDiscoveryGetServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService.property.arn"></a>

- *Type:* `string`

---

##### `createDate`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService.property.createDate"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService.property.description"></a>

- *Type:* `string`

---

##### `dnsConfig`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService.property.dnsConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceDnsConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceDnsConfig)

---

##### `healthCheckConfig`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService.property.healthCheckConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckConfig)

---

##### `healthCheckCustomConfig`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService.property.healthCheckCustomConfig"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckCustomConfig`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckCustomConfig)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService.property.id"></a>

- *Type:* `string`

---

##### `instanceCount`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService.property.instanceCount"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService.property.name"></a>

- *Type:* `string`

---

##### `namespaceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceService.property.namespaceId"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesFetchServiceServiceDnsConfig <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceDnsConfig"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceDnsConfig.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceDnsConfig(__scope: Construct, __resources: string[], __input: ServiceDiscoveryGetServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceDnsConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceDnsConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceDnsConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `dnsRecords`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceDnsConfig.property.dnsRecords"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsRecord`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryDnsRecord)[]

---

##### `namespaceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceDnsConfig.property.namespaceId"></a>

- *Type:* `string`

---

##### `routingPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceDnsConfig.property.routingPolicy"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesFetchServiceServiceHealthCheckConfig <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckConfig"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckConfig.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckConfig(__scope: Construct, __resources: string[], __input: ServiceDiscoveryGetServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `failureThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckConfig.property.failureThreshold"></a>

- *Type:* `number`

---

##### `resourcePath`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckConfig.property.resourcePath"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckConfig.property.type"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesFetchServiceServiceHealthCheckCustomConfig <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckCustomConfig"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckCustomConfig.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckCustomConfig(__scope: Construct, __resources: string[], __input: ServiceDiscoveryGetServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckCustomConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckCustomConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckCustomConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryGetServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `failureThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesFetchServiceServiceHealthCheckCustomConfig.property.failureThreshold"></a>

- *Type:* `number`

---


### ServiceDiscoveryResponsesListInstances <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListInstances"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListInstances.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesListInstances(__scope: Construct, __resources: string[], __input: ServiceDiscoveryListInstancesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryListInstancesRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryListInstancesRequest)

---



#### Properties <a name="Properties"></a>

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListInstances.property.instances"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryInstanceSummary`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryInstanceSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListInstances.property.nextToken"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesListNamespaces <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListNamespaces"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListNamespaces.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesListNamespaces(__scope: Construct, __resources: string[], __input: ServiceDiscoveryListNamespacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListNamespaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListNamespaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListNamespaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryListNamespacesRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryListNamespacesRequest)

---



#### Properties <a name="Properties"></a>

##### `namespaces`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListNamespaces.property.namespaces"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceSummary`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryNamespaceSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListNamespaces.property.nextToken"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesListOperations <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListOperations"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListOperations.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesListOperations(__scope: Construct, __resources: string[], __input: ServiceDiscoveryListOperationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListOperations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListOperations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListOperations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryListOperationsRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryListOperationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListOperations.property.nextToken"></a>

- *Type:* `string`

---

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListOperations.property.operations"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperationSummary`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryOperationSummary)[]

---


### ServiceDiscoveryResponsesListServices <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListServices"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListServices.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesListServices(__scope: Construct, __resources: string[], __input: ServiceDiscoveryListServicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListServices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListServices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListServices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryListServicesRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryListServicesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListServices.property.nextToken"></a>

- *Type:* `string`

---

##### `services`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListServices.property.services"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceSummary`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryServiceSummary)[]

---


### ServiceDiscoveryResponsesListTagsForResource <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListTagsForResource.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: ServiceDiscoveryListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryListTagsForResourceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryTag)[]

---


### ServiceDiscoveryResponsesRegisterInstance <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesRegisterInstance"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesRegisterInstance.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesRegisterInstance(__scope: Construct, __resources: string[], __input: ServiceDiscoveryRegisterInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesRegisterInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesRegisterInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesRegisterInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryRegisterInstanceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryRegisterInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesRegisterInstance.property.operationId"></a>

- *Type:* `string`

---


### ServiceDiscoveryResponsesUpdateService <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesUpdateService"></a>

#### Initializer <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesUpdateService.Initializer"></a>

```typescript
import { servicediscovery } from 'aws-cdk-sdk'

new servicediscovery.ServiceDiscoveryResponsesUpdateService(__scope: Construct, __resources: string[], __input: ServiceDiscoveryUpdateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesUpdateService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesUpdateService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesUpdateService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicediscovery.ServiceDiscoveryUpdateServiceRequest`](#aws-cdk-sdk.servicediscovery.ServiceDiscoveryUpdateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.servicediscovery.ServiceDiscoveryResponsesUpdateService.property.operationId"></a>

- *Type:* `string`

---



