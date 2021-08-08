# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### GlobalAcceleratorClient <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `advertiseByoipCidr` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.advertiseByoipCidr"></a>

```typescript
public advertiseByoipCidr(input: GlobalAcceleratorAdvertiseByoipCidrRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAdvertiseByoipCidrRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAdvertiseByoipCidrRequest)

---

##### `createAccelerator` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.createAccelerator"></a>

```typescript
public createAccelerator(input: GlobalAcceleratorCreateAcceleratorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateAcceleratorRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateAcceleratorRequest)

---

##### `createEndpointGroup` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.createEndpointGroup"></a>

```typescript
public createEndpointGroup(input: GlobalAcceleratorCreateEndpointGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest)

---

##### `createListener` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.createListener"></a>

```typescript
public createListener(input: GlobalAcceleratorCreateListenerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateListenerRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateListenerRequest)

---

##### `deleteAccelerator` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.deleteAccelerator"></a>

```typescript
public deleteAccelerator(input: GlobalAcceleratorDeleteAcceleratorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeleteAcceleratorRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeleteAcceleratorRequest)

---

##### `deleteEndpointGroup` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.deleteEndpointGroup"></a>

```typescript
public deleteEndpointGroup(input: GlobalAcceleratorDeleteEndpointGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeleteEndpointGroupRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeleteEndpointGroupRequest)

---

##### `deleteListener` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.deleteListener"></a>

```typescript
public deleteListener(input: GlobalAcceleratorDeleteListenerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeleteListenerRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeleteListenerRequest)

---

##### `deprovisionByoipCidr` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.deprovisionByoipCidr"></a>

```typescript
public deprovisionByoipCidr(input: GlobalAcceleratorDeprovisionByoipCidrRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeprovisionByoipCidrRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeprovisionByoipCidrRequest)

---

##### `describeAccelerator` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.describeAccelerator"></a>

```typescript
public describeAccelerator(input: GlobalAcceleratorDescribeAcceleratorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorRequest)

---

##### `describeAcceleratorAttributes` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.describeAcceleratorAttributes"></a>

```typescript
public describeAcceleratorAttributes(input: GlobalAcceleratorDescribeAcceleratorAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorAttributesRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorAttributesRequest)

---

##### `describeEndpointGroup` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.describeEndpointGroup"></a>

```typescript
public describeEndpointGroup(input: GlobalAcceleratorDescribeEndpointGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeEndpointGroupRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeEndpointGroupRequest)

---

##### `describeListener` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.describeListener"></a>

```typescript
public describeListener(input: GlobalAcceleratorDescribeListenerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeListenerRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeListenerRequest)

---

##### `listAccelerators` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.listAccelerators"></a>

```typescript
public listAccelerators(input: GlobalAcceleratorListAcceleratorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListAcceleratorsRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListAcceleratorsRequest)

---

##### `listByoipCidrs` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.listByoipCidrs"></a>

```typescript
public listByoipCidrs(input: GlobalAcceleratorListByoipCidrsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListByoipCidrsRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListByoipCidrsRequest)

---

##### `listEndpointGroups` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.listEndpointGroups"></a>

```typescript
public listEndpointGroups(input: GlobalAcceleratorListEndpointGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListEndpointGroupsRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListEndpointGroupsRequest)

---

##### `listListeners` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.listListeners"></a>

```typescript
public listListeners(input: GlobalAcceleratorListListenersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListListenersRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListListenersRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: GlobalAcceleratorListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListTagsForResourceRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListTagsForResourceRequest)

---

##### `provisionByoipCidr` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.provisionByoipCidr"></a>

```typescript
public provisionByoipCidr(input: GlobalAcceleratorProvisionByoipCidrRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorProvisionByoipCidrRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorProvisionByoipCidrRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.tagResource"></a>

```typescript
public tagResource(input: GlobalAcceleratorTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTagResourceRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.untagResource"></a>

```typescript
public untagResource(input: GlobalAcceleratorUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUntagResourceRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUntagResourceRequest)

---

##### `updateAccelerator` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.updateAccelerator"></a>

```typescript
public updateAccelerator(input: GlobalAcceleratorUpdateAcceleratorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorRequest)

---

##### `updateAcceleratorAttributes` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.updateAcceleratorAttributes"></a>

```typescript
public updateAcceleratorAttributes(input: GlobalAcceleratorUpdateAcceleratorAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorAttributesRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorAttributesRequest)

---

##### `updateEndpointGroup` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.updateEndpointGroup"></a>

```typescript
public updateEndpointGroup(input: GlobalAcceleratorUpdateEndpointGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest)

---

##### `updateListener` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.updateListener"></a>

```typescript
public updateListener(input: GlobalAcceleratorUpdateListenerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateListenerRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateListenerRequest)

---

##### `withdrawByoipCidr` <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.withdrawByoipCidr"></a>

```typescript
public withdrawByoipCidr(input: GlobalAcceleratorWithdrawByoipCidrRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorWithdrawByoipCidrRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorWithdrawByoipCidrRequest)

---




## Structs <a name="Structs"></a>

### GlobalAcceleratorAccelerator <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorAccelerator: globalaccelerator.GlobalAcceleratorAccelerator = { ... }
```

##### `acceleratorArn`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator.property.acceleratorArn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator.property.createdTime"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator.property.dnsName"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator.property.enabled"></a>

- *Type:* `boolean`

---

##### `ipAddressType`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator.property.ipAddressType"></a>

- *Type:* `string`

---

##### `ipSets`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator.property.ipSets"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorIpSet`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorIpSet)[]

---

##### `lastModifiedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator.property.lastModifiedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator.property.status"></a>

- *Type:* `string`

---

### GlobalAcceleratorAcceleratorAttributes <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAcceleratorAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorAcceleratorAttributes: globalaccelerator.GlobalAcceleratorAcceleratorAttributes = { ... }
```

##### `flowLogsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAcceleratorAttributes.property.flowLogsEnabled"></a>

- *Type:* `boolean`

---

##### `flowLogsS3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAcceleratorAttributes.property.flowLogsS3Bucket"></a>

- *Type:* `string`

---

##### `flowLogsS3Prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAcceleratorAttributes.property.flowLogsS3Prefix"></a>

- *Type:* `string`

---

### GlobalAcceleratorAdvertiseByoipCidrRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAdvertiseByoipCidrRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorAdvertiseByoipCidrRequest: globalaccelerator.GlobalAcceleratorAdvertiseByoipCidrRequest = { ... }
```

##### `cidr`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAdvertiseByoipCidrRequest.property.cidr"></a>

- *Type:* `string`

---

### GlobalAcceleratorAdvertiseByoipCidrResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAdvertiseByoipCidrResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorAdvertiseByoipCidrResponse: globalaccelerator.GlobalAcceleratorAdvertiseByoipCidrResponse = { ... }
```

##### `byoipCidr`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAdvertiseByoipCidrResponse.property.byoipCidr"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr)

---

### GlobalAcceleratorByoipCidr <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorByoipCidr: globalaccelerator.GlobalAcceleratorByoipCidr = { ... }
```

##### `cidr`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr.property.cidr"></a>

- *Type:* `string`

---

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr.property.events"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidrEvent`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidrEvent)[]

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr.property.state"></a>

- *Type:* `string`

---

### GlobalAcceleratorByoipCidrEvent <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidrEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorByoipCidrEvent: globalaccelerator.GlobalAcceleratorByoipCidrEvent = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidrEvent.property.message"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidrEvent.property.timestamp"></a>

- *Type:* `string`

---

### GlobalAcceleratorCidrAuthorizationContext <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCidrAuthorizationContext"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorCidrAuthorizationContext: globalaccelerator.GlobalAcceleratorCidrAuthorizationContext = { ... }
```

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCidrAuthorizationContext.property.message"></a>

- *Type:* `string`

---

##### `signature`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCidrAuthorizationContext.property.signature"></a>

- *Type:* `string`

---

### GlobalAcceleratorCreateAcceleratorRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateAcceleratorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorCreateAcceleratorRequest: globalaccelerator.GlobalAcceleratorCreateAcceleratorRequest = { ... }
```

##### `idempotencyToken`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateAcceleratorRequest.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateAcceleratorRequest.property.name"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateAcceleratorRequest.property.enabled"></a>

- *Type:* `boolean`

---

##### `ipAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateAcceleratorRequest.property.ipAddresses"></a>

- *Type:* `string`[]

---

##### `ipAddressType`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateAcceleratorRequest.property.ipAddressType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateAcceleratorRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTag`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTag)[]

---

### GlobalAcceleratorCreateAcceleratorResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateAcceleratorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorCreateAcceleratorResponse: globalaccelerator.GlobalAcceleratorCreateAcceleratorResponse = { ... }
```

##### `accelerator`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateAcceleratorResponse.property.accelerator"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator)

---

### GlobalAcceleratorCreateEndpointGroupRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorCreateEndpointGroupRequest: globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest = { ... }
```

##### `endpointGroupRegion`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest.property.endpointGroupRegion"></a>

- *Type:* `string`

---

##### `idempotencyToken`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `listenerArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest.property.listenerArn"></a>

- *Type:* `string`

---

##### `endpointConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest.property.endpointConfigurations"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointConfiguration`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointConfiguration)[]

---

##### `healthCheckIntervalSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest.property.healthCheckIntervalSeconds"></a>

- *Type:* `number`

---

##### `healthCheckPath`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest.property.healthCheckPath"></a>

- *Type:* `string`

---

##### `healthCheckPort`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest.property.healthCheckPort"></a>

- *Type:* `number`

---

##### `healthCheckProtocol`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest.property.healthCheckProtocol"></a>

- *Type:* `string`

---

##### `portOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest.property.portOverrides"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortOverride`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortOverride)[]

---

##### `thresholdCount`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest.property.thresholdCount"></a>

- *Type:* `number`

---

##### `trafficDialPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest.property.trafficDialPercentage"></a>

- *Type:* `number`

---

### GlobalAcceleratorCreateEndpointGroupResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorCreateEndpointGroupResponse: globalaccelerator.GlobalAcceleratorCreateEndpointGroupResponse = { ... }
```

##### `endpointGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupResponse.property.endpointGroup"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup)

---

### GlobalAcceleratorCreateListenerRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateListenerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorCreateListenerRequest: globalaccelerator.GlobalAcceleratorCreateListenerRequest = { ... }
```

##### `acceleratorArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateListenerRequest.property.acceleratorArn"></a>

- *Type:* `string`

---

##### `idempotencyToken`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateListenerRequest.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `portRanges`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateListenerRequest.property.portRanges"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortRange`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortRange)[]

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateListenerRequest.property.protocol"></a>

- *Type:* `string`

---

##### `clientAffinity`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateListenerRequest.property.clientAffinity"></a>

- *Type:* `string`

---

### GlobalAcceleratorCreateListenerResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateListenerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorCreateListenerResponse: globalaccelerator.GlobalAcceleratorCreateListenerResponse = { ... }
```

##### `listener`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateListenerResponse.property.listener"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListener`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListener)

---

### GlobalAcceleratorDeleteAcceleratorRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeleteAcceleratorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorDeleteAcceleratorRequest: globalaccelerator.GlobalAcceleratorDeleteAcceleratorRequest = { ... }
```

##### `acceleratorArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeleteAcceleratorRequest.property.acceleratorArn"></a>

- *Type:* `string`

---

### GlobalAcceleratorDeleteEndpointGroupRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeleteEndpointGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorDeleteEndpointGroupRequest: globalaccelerator.GlobalAcceleratorDeleteEndpointGroupRequest = { ... }
```

##### `endpointGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeleteEndpointGroupRequest.property.endpointGroupArn"></a>

- *Type:* `string`

---

### GlobalAcceleratorDeleteListenerRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeleteListenerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorDeleteListenerRequest: globalaccelerator.GlobalAcceleratorDeleteListenerRequest = { ... }
```

##### `listenerArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeleteListenerRequest.property.listenerArn"></a>

- *Type:* `string`

---

### GlobalAcceleratorDeprovisionByoipCidrRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeprovisionByoipCidrRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorDeprovisionByoipCidrRequest: globalaccelerator.GlobalAcceleratorDeprovisionByoipCidrRequest = { ... }
```

##### `cidr`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeprovisionByoipCidrRequest.property.cidr"></a>

- *Type:* `string`

---

### GlobalAcceleratorDeprovisionByoipCidrResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeprovisionByoipCidrResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorDeprovisionByoipCidrResponse: globalaccelerator.GlobalAcceleratorDeprovisionByoipCidrResponse = { ... }
```

##### `byoipCidr`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeprovisionByoipCidrResponse.property.byoipCidr"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr)

---

### GlobalAcceleratorDescribeAcceleratorAttributesRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorDescribeAcceleratorAttributesRequest: globalaccelerator.GlobalAcceleratorDescribeAcceleratorAttributesRequest = { ... }
```

##### `acceleratorArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorAttributesRequest.property.acceleratorArn"></a>

- *Type:* `string`

---

### GlobalAcceleratorDescribeAcceleratorAttributesResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorDescribeAcceleratorAttributesResponse: globalaccelerator.GlobalAcceleratorDescribeAcceleratorAttributesResponse = { ... }
```

##### `acceleratorAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorAttributesResponse.property.acceleratorAttributes"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAcceleratorAttributes`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAcceleratorAttributes)

---

### GlobalAcceleratorDescribeAcceleratorRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorDescribeAcceleratorRequest: globalaccelerator.GlobalAcceleratorDescribeAcceleratorRequest = { ... }
```

##### `acceleratorArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorRequest.property.acceleratorArn"></a>

- *Type:* `string`

---

### GlobalAcceleratorDescribeAcceleratorResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorDescribeAcceleratorResponse: globalaccelerator.GlobalAcceleratorDescribeAcceleratorResponse = { ... }
```

##### `accelerator`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorResponse.property.accelerator"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator)

---

### GlobalAcceleratorDescribeEndpointGroupRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeEndpointGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorDescribeEndpointGroupRequest: globalaccelerator.GlobalAcceleratorDescribeEndpointGroupRequest = { ... }
```

##### `endpointGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeEndpointGroupRequest.property.endpointGroupArn"></a>

- *Type:* `string`

---

### GlobalAcceleratorDescribeEndpointGroupResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeEndpointGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorDescribeEndpointGroupResponse: globalaccelerator.GlobalAcceleratorDescribeEndpointGroupResponse = { ... }
```

##### `endpointGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeEndpointGroupResponse.property.endpointGroup"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup)

---

### GlobalAcceleratorDescribeListenerRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeListenerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorDescribeListenerRequest: globalaccelerator.GlobalAcceleratorDescribeListenerRequest = { ... }
```

##### `listenerArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeListenerRequest.property.listenerArn"></a>

- *Type:* `string`

---

### GlobalAcceleratorDescribeListenerResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeListenerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorDescribeListenerResponse: globalaccelerator.GlobalAcceleratorDescribeListenerResponse = { ... }
```

##### `listener`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeListenerResponse.property.listener"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListener`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListener)

---

### GlobalAcceleratorEndpointConfiguration <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorEndpointConfiguration: globalaccelerator.GlobalAcceleratorEndpointConfiguration = { ... }
```

##### `clientIpPreservationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointConfiguration.property.clientIpPreservationEnabled"></a>

- *Type:* `boolean`

---

##### `endpointId`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointConfiguration.property.endpointId"></a>

- *Type:* `string`

---

##### `weight`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointConfiguration.property.weight"></a>

- *Type:* `number`

---

### GlobalAcceleratorEndpointDescription <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorEndpointDescription: globalaccelerator.GlobalAcceleratorEndpointDescription = { ... }
```

##### `clientIpPreservationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointDescription.property.clientIpPreservationEnabled"></a>

- *Type:* `boolean`

---

##### `endpointId`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointDescription.property.endpointId"></a>

- *Type:* `string`

---

##### `healthReason`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointDescription.property.healthReason"></a>

- *Type:* `string`

---

##### `healthState`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointDescription.property.healthState"></a>

- *Type:* `string`

---

##### `weight`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointDescription.property.weight"></a>

- *Type:* `number`

---

### GlobalAcceleratorEndpointGroup <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorEndpointGroup: globalaccelerator.GlobalAcceleratorEndpointGroup = { ... }
```

##### `endpointDescriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup.property.endpointDescriptions"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointDescription`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointDescription)[]

---

##### `endpointGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup.property.endpointGroupArn"></a>

- *Type:* `string`

---

##### `endpointGroupRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup.property.endpointGroupRegion"></a>

- *Type:* `string`

---

##### `healthCheckIntervalSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup.property.healthCheckIntervalSeconds"></a>

- *Type:* `number`

---

##### `healthCheckPath`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup.property.healthCheckPath"></a>

- *Type:* `string`

---

##### `healthCheckPort`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup.property.healthCheckPort"></a>

- *Type:* `number`

---

##### `healthCheckProtocol`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup.property.healthCheckProtocol"></a>

- *Type:* `string`

---

##### `portOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup.property.portOverrides"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortOverride`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortOverride)[]

---

##### `thresholdCount`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup.property.thresholdCount"></a>

- *Type:* `number`

---

##### `trafficDialPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup.property.trafficDialPercentage"></a>

- *Type:* `number`

---

### GlobalAcceleratorIpSet <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorIpSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorIpSet: globalaccelerator.GlobalAcceleratorIpSet = { ... }
```

##### `ipAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorIpSet.property.ipAddresses"></a>

- *Type:* `string`[]

---

##### `ipFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorIpSet.property.ipFamily"></a>

- *Type:* `string`

---

### GlobalAcceleratorListAcceleratorsRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListAcceleratorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorListAcceleratorsRequest: globalaccelerator.GlobalAcceleratorListAcceleratorsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListAcceleratorsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListAcceleratorsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlobalAcceleratorListAcceleratorsResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListAcceleratorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorListAcceleratorsResponse: globalaccelerator.GlobalAcceleratorListAcceleratorsResponse = { ... }
```

##### `accelerators`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListAcceleratorsResponse.property.accelerators"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListAcceleratorsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlobalAcceleratorListByoipCidrsRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListByoipCidrsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorListByoipCidrsRequest: globalaccelerator.GlobalAcceleratorListByoipCidrsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListByoipCidrsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListByoipCidrsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlobalAcceleratorListByoipCidrsResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListByoipCidrsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorListByoipCidrsResponse: globalaccelerator.GlobalAcceleratorListByoipCidrsResponse = { ... }
```

##### `byoipCidrs`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListByoipCidrsResponse.property.byoipCidrs"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListByoipCidrsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlobalAcceleratorListEndpointGroupsRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListEndpointGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorListEndpointGroupsRequest: globalaccelerator.GlobalAcceleratorListEndpointGroupsRequest = { ... }
```

##### `listenerArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListEndpointGroupsRequest.property.listenerArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListEndpointGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListEndpointGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlobalAcceleratorListEndpointGroupsResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListEndpointGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorListEndpointGroupsResponse: globalaccelerator.GlobalAcceleratorListEndpointGroupsResponse = { ... }
```

##### `endpointGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListEndpointGroupsResponse.property.endpointGroups"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListEndpointGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlobalAcceleratorListener <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListener"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorListener: globalaccelerator.GlobalAcceleratorListener = { ... }
```

##### `clientAffinity`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListener.property.clientAffinity"></a>

- *Type:* `string`

---

##### `listenerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListener.property.listenerArn"></a>

- *Type:* `string`

---

##### `portRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListener.property.portRanges"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortRange`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortRange)[]

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListener.property.protocol"></a>

- *Type:* `string`

---

### GlobalAcceleratorListListenersRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListListenersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorListListenersRequest: globalaccelerator.GlobalAcceleratorListListenersRequest = { ... }
```

##### `acceleratorArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListListenersRequest.property.acceleratorArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListListenersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListListenersRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlobalAcceleratorListListenersResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListListenersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorListListenersResponse: globalaccelerator.GlobalAcceleratorListListenersResponse = { ... }
```

##### `listeners`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListListenersResponse.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListener`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListener)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListListenersResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlobalAcceleratorListTagsForResourceRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorListTagsForResourceRequest: globalaccelerator.GlobalAcceleratorListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### GlobalAcceleratorListTagsForResourceResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorListTagsForResourceResponse: globalaccelerator.GlobalAcceleratorListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTag`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTag)[]

---

### GlobalAcceleratorPortOverride <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortOverride"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorPortOverride: globalaccelerator.GlobalAcceleratorPortOverride = { ... }
```

##### `endpointPort`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortOverride.property.endpointPort"></a>

- *Type:* `number`

---

##### `listenerPort`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortOverride.property.listenerPort"></a>

- *Type:* `number`

---

### GlobalAcceleratorPortRange <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorPortRange: globalaccelerator.GlobalAcceleratorPortRange = { ... }
```

##### `fromPort`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortRange.property.fromPort"></a>

- *Type:* `number`

---

##### `toPort`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortRange.property.toPort"></a>

- *Type:* `number`

---

### GlobalAcceleratorProvisionByoipCidrRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorProvisionByoipCidrRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorProvisionByoipCidrRequest: globalaccelerator.GlobalAcceleratorProvisionByoipCidrRequest = { ... }
```

##### `cidr`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorProvisionByoipCidrRequest.property.cidr"></a>

- *Type:* `string`

---

##### `cidrAuthorizationContext`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorProvisionByoipCidrRequest.property.cidrAuthorizationContext"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCidrAuthorizationContext`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCidrAuthorizationContext)

---

### GlobalAcceleratorProvisionByoipCidrResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorProvisionByoipCidrResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorProvisionByoipCidrResponse: globalaccelerator.GlobalAcceleratorProvisionByoipCidrResponse = { ... }
```

##### `byoipCidr`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorProvisionByoipCidrResponse.property.byoipCidr"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr)

---

### GlobalAcceleratorTag <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorTag: globalaccelerator.GlobalAcceleratorTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTag.property.value"></a>

- *Type:* `string`

---

### GlobalAcceleratorTagResourceRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorTagResourceRequest: globalaccelerator.GlobalAcceleratorTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTag`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTag)[]

---

### GlobalAcceleratorTagResourceResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorTagResourceResponse: globalaccelerator.GlobalAcceleratorTagResourceResponse = { ... }
```

### GlobalAcceleratorUntagResourceRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorUntagResourceRequest: globalaccelerator.GlobalAcceleratorUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### GlobalAcceleratorUntagResourceResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorUntagResourceResponse: globalaccelerator.GlobalAcceleratorUntagResourceResponse = { ... }
```

### GlobalAcceleratorUpdateAcceleratorAttributesRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorUpdateAcceleratorAttributesRequest: globalaccelerator.GlobalAcceleratorUpdateAcceleratorAttributesRequest = { ... }
```

##### `acceleratorArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorAttributesRequest.property.acceleratorArn"></a>

- *Type:* `string`

---

##### `flowLogsEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorAttributesRequest.property.flowLogsEnabled"></a>

- *Type:* `boolean`

---

##### `flowLogsS3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorAttributesRequest.property.flowLogsS3Bucket"></a>

- *Type:* `string`

---

##### `flowLogsS3Prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorAttributesRequest.property.flowLogsS3Prefix"></a>

- *Type:* `string`

---

### GlobalAcceleratorUpdateAcceleratorAttributesResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorUpdateAcceleratorAttributesResponse: globalaccelerator.GlobalAcceleratorUpdateAcceleratorAttributesResponse = { ... }
```

##### `acceleratorAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorAttributesResponse.property.acceleratorAttributes"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAcceleratorAttributes`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAcceleratorAttributes)

---

### GlobalAcceleratorUpdateAcceleratorRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorUpdateAcceleratorRequest: globalaccelerator.GlobalAcceleratorUpdateAcceleratorRequest = { ... }
```

##### `acceleratorArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorRequest.property.acceleratorArn"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorRequest.property.enabled"></a>

- *Type:* `boolean`

---

##### `ipAddressType`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorRequest.property.ipAddressType"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorRequest.property.name"></a>

- *Type:* `string`

---

### GlobalAcceleratorUpdateAcceleratorResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorUpdateAcceleratorResponse: globalaccelerator.GlobalAcceleratorUpdateAcceleratorResponse = { ... }
```

##### `accelerator`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorResponse.property.accelerator"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator)

---

### GlobalAcceleratorUpdateEndpointGroupRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorUpdateEndpointGroupRequest: globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest = { ... }
```

##### `endpointGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest.property.endpointGroupArn"></a>

- *Type:* `string`

---

##### `endpointConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest.property.endpointConfigurations"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointConfiguration`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointConfiguration)[]

---

##### `healthCheckIntervalSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest.property.healthCheckIntervalSeconds"></a>

- *Type:* `number`

---

##### `healthCheckPath`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest.property.healthCheckPath"></a>

- *Type:* `string`

---

##### `healthCheckPort`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest.property.healthCheckPort"></a>

- *Type:* `number`

---

##### `healthCheckProtocol`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest.property.healthCheckProtocol"></a>

- *Type:* `string`

---

##### `portOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest.property.portOverrides"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortOverride`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortOverride)[]

---

##### `thresholdCount`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest.property.thresholdCount"></a>

- *Type:* `number`

---

##### `trafficDialPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest.property.trafficDialPercentage"></a>

- *Type:* `number`

---

### GlobalAcceleratorUpdateEndpointGroupResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorUpdateEndpointGroupResponse: globalaccelerator.GlobalAcceleratorUpdateEndpointGroupResponse = { ... }
```

##### `endpointGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupResponse.property.endpointGroup"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup)

---

### GlobalAcceleratorUpdateListenerRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateListenerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorUpdateListenerRequest: globalaccelerator.GlobalAcceleratorUpdateListenerRequest = { ... }
```

##### `listenerArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateListenerRequest.property.listenerArn"></a>

- *Type:* `string`

---

##### `clientAffinity`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateListenerRequest.property.clientAffinity"></a>

- *Type:* `string`

---

##### `portRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateListenerRequest.property.portRanges"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortRange`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortRange)[]

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateListenerRequest.property.protocol"></a>

- *Type:* `string`

---

### GlobalAcceleratorUpdateListenerResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateListenerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorUpdateListenerResponse: globalaccelerator.GlobalAcceleratorUpdateListenerResponse = { ... }
```

##### `listener`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateListenerResponse.property.listener"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListener`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListener)

---

### GlobalAcceleratorWithdrawByoipCidrRequest <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorWithdrawByoipCidrRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorWithdrawByoipCidrRequest: globalaccelerator.GlobalAcceleratorWithdrawByoipCidrRequest = { ... }
```

##### `cidr`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorWithdrawByoipCidrRequest.property.cidr"></a>

- *Type:* `string`

---

### GlobalAcceleratorWithdrawByoipCidrResponse <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorWithdrawByoipCidrResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

const globalAcceleratorWithdrawByoipCidrResponse: globalaccelerator.GlobalAcceleratorWithdrawByoipCidrResponse = { ... }
```

##### `byoipCidr`<sup>Optional</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorWithdrawByoipCidrResponse.property.byoipCidr"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr)

---

## Classes <a name="Classes"></a>

### GlobalAcceleratorResponsesAdvertiseByoipCidr <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidr"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidr.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidr(__scope: Construct, __resources: string[], __input: GlobalAcceleratorAdvertiseByoipCidrRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidr.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidr.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidr.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAdvertiseByoipCidrRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAdvertiseByoipCidrRequest)

---



#### Properties <a name="Properties"></a>

##### `byoipCidr`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidr.property.byoipCidr"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidrByoipCidr`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidrByoipCidr)

---


### GlobalAcceleratorResponsesAdvertiseByoipCidrByoipCidr <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidrByoipCidr"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidrByoipCidr.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidrByoipCidr(__scope: Construct, __resources: string[], __input: GlobalAcceleratorAdvertiseByoipCidrRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidrByoipCidr.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidrByoipCidr.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidrByoipCidr.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAdvertiseByoipCidrRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAdvertiseByoipCidrRequest)

---



#### Properties <a name="Properties"></a>

##### `cidr`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidrByoipCidr.property.cidr"></a>

- *Type:* `string`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidrByoipCidr.property.events"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidrEvent`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidrEvent)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesAdvertiseByoipCidrByoipCidr.property.state"></a>

- *Type:* `string`

---


### GlobalAcceleratorResponsesCreateAccelerator <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAccelerator"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAccelerator.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesCreateAccelerator(__scope: Construct, __resources: string[], __input: GlobalAcceleratorCreateAcceleratorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAccelerator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAccelerator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAccelerator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateAcceleratorRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateAcceleratorRequest)

---



#### Properties <a name="Properties"></a>

##### `accelerator`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAccelerator.property.accelerator"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator)

---


### GlobalAcceleratorResponsesCreateAcceleratorAccelerator <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator(__scope: Construct, __resources: string[], __input: GlobalAcceleratorCreateAcceleratorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateAcceleratorRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateAcceleratorRequest)

---



#### Properties <a name="Properties"></a>

##### `acceleratorArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator.property.acceleratorArn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator.property.createdTime"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator.property.dnsName"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator.property.enabled"></a>

- *Type:* `boolean`

---

##### `ipAddressType`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator.property.ipAddressType"></a>

- *Type:* `string`

---

##### `ipSets`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator.property.ipSets"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorIpSet`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorIpSet)[]

---

##### `lastModifiedTime`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator.property.lastModifiedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateAcceleratorAccelerator.property.status"></a>

- *Type:* `string`

---


### GlobalAcceleratorResponsesCreateEndpointGroup <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroup"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroup.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroup(__scope: Construct, __resources: string[], __input: GlobalAcceleratorCreateEndpointGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `endpointGroup`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroup.property.endpointGroup"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup)

---


### GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup(__scope: Construct, __resources: string[], __input: GlobalAcceleratorCreateEndpointGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateEndpointGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `endpointDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup.property.endpointDescriptions"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointDescription`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointDescription)[]

---

##### `endpointGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup.property.endpointGroupArn"></a>

- *Type:* `string`

---

##### `endpointGroupRegion`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup.property.endpointGroupRegion"></a>

- *Type:* `string`

---

##### `healthCheckIntervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup.property.healthCheckIntervalSeconds"></a>

- *Type:* `number`

---

##### `healthCheckPath`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup.property.healthCheckPath"></a>

- *Type:* `string`

---

##### `healthCheckPort`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup.property.healthCheckPort"></a>

- *Type:* `number`

---

##### `healthCheckProtocol`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup.property.healthCheckProtocol"></a>

- *Type:* `string`

---

##### `portOverrides`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup.property.portOverrides"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortOverride`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortOverride)[]

---

##### `thresholdCount`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup.property.thresholdCount"></a>

- *Type:* `number`

---

##### `trafficDialPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup.property.trafficDialPercentage"></a>

- *Type:* `number`

---


### GlobalAcceleratorResponsesCreateListener <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListener"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListener.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesCreateListener(__scope: Construct, __resources: string[], __input: GlobalAcceleratorCreateListenerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListener.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListener.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListener.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateListenerRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateListenerRequest)

---



#### Properties <a name="Properties"></a>

##### `listener`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListener.property.listener"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListenerListener`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListenerListener)

---


### GlobalAcceleratorResponsesCreateListenerListener <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListenerListener"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListenerListener.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesCreateListenerListener(__scope: Construct, __resources: string[], __input: GlobalAcceleratorCreateListenerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListenerListener.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListenerListener.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListenerListener.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateListenerRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorCreateListenerRequest)

---



#### Properties <a name="Properties"></a>

##### `clientAffinity`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListenerListener.property.clientAffinity"></a>

- *Type:* `string`

---

##### `listenerArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListenerListener.property.listenerArn"></a>

- *Type:* `string`

---

##### `portRanges`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListenerListener.property.portRanges"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortRange`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortRange)[]

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesCreateListenerListener.property.protocol"></a>

- *Type:* `string`

---


### GlobalAcceleratorResponsesDeprovisionByoipCidr <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidr"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidr.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidr(__scope: Construct, __resources: string[], __input: GlobalAcceleratorDeprovisionByoipCidrRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidr.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidr.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidr.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeprovisionByoipCidrRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeprovisionByoipCidrRequest)

---



#### Properties <a name="Properties"></a>

##### `byoipCidr`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidr.property.byoipCidr"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidrByoipCidr`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidrByoipCidr)

---


### GlobalAcceleratorResponsesDeprovisionByoipCidrByoipCidr <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidrByoipCidr"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidrByoipCidr.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidrByoipCidr(__scope: Construct, __resources: string[], __input: GlobalAcceleratorDeprovisionByoipCidrRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidrByoipCidr.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidrByoipCidr.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidrByoipCidr.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeprovisionByoipCidrRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDeprovisionByoipCidrRequest)

---



#### Properties <a name="Properties"></a>

##### `cidr`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidrByoipCidr.property.cidr"></a>

- *Type:* `string`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidrByoipCidr.property.events"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidrEvent`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidrEvent)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDeprovisionByoipCidrByoipCidr.property.state"></a>

- *Type:* `string`

---


### GlobalAcceleratorResponsesDescribeAccelerator <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAccelerator"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAccelerator.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesDescribeAccelerator(__scope: Construct, __resources: string[], __input: GlobalAcceleratorDescribeAcceleratorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAccelerator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAccelerator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAccelerator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorRequest)

---



#### Properties <a name="Properties"></a>

##### `accelerator`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAccelerator.property.accelerator"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator)

---


### GlobalAcceleratorResponsesDescribeAcceleratorAccelerator <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator(__scope: Construct, __resources: string[], __input: GlobalAcceleratorDescribeAcceleratorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorRequest)

---



#### Properties <a name="Properties"></a>

##### `acceleratorArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator.property.acceleratorArn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator.property.createdTime"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator.property.dnsName"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator.property.enabled"></a>

- *Type:* `boolean`

---

##### `ipAddressType`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator.property.ipAddressType"></a>

- *Type:* `string`

---

##### `ipSets`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator.property.ipSets"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorIpSet`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorIpSet)[]

---

##### `lastModifiedTime`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator.property.lastModifiedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAccelerator.property.status"></a>

- *Type:* `string`

---


### GlobalAcceleratorResponsesDescribeAcceleratorAttributes <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributes.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributes(__scope: Construct, __resources: string[], __input: GlobalAcceleratorDescribeAcceleratorAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorAttributesRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `acceleratorAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributes.property.acceleratorAttributes"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributesAcceleratorAttributes`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributesAcceleratorAttributes)

---


### GlobalAcceleratorResponsesDescribeAcceleratorAttributesAcceleratorAttributes <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributesAcceleratorAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributesAcceleratorAttributes.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributesAcceleratorAttributes(__scope: Construct, __resources: string[], __input: GlobalAcceleratorDescribeAcceleratorAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributesAcceleratorAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributesAcceleratorAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributesAcceleratorAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorAttributesRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeAcceleratorAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `flowLogsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributesAcceleratorAttributes.property.flowLogsEnabled"></a>

- *Type:* `boolean`

---

##### `flowLogsS3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributesAcceleratorAttributes.property.flowLogsS3Bucket"></a>

- *Type:* `string`

---

##### `flowLogsS3Prefix`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeAcceleratorAttributesAcceleratorAttributes.property.flowLogsS3Prefix"></a>

- *Type:* `string`

---


### GlobalAcceleratorResponsesDescribeEndpointGroup <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroup"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroup.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroup(__scope: Construct, __resources: string[], __input: GlobalAcceleratorDescribeEndpointGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeEndpointGroupRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeEndpointGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `endpointGroup`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroup.property.endpointGroup"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup)

---


### GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup(__scope: Construct, __resources: string[], __input: GlobalAcceleratorDescribeEndpointGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeEndpointGroupRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeEndpointGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `endpointDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup.property.endpointDescriptions"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointDescription`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointDescription)[]

---

##### `endpointGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup.property.endpointGroupArn"></a>

- *Type:* `string`

---

##### `endpointGroupRegion`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup.property.endpointGroupRegion"></a>

- *Type:* `string`

---

##### `healthCheckIntervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup.property.healthCheckIntervalSeconds"></a>

- *Type:* `number`

---

##### `healthCheckPath`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup.property.healthCheckPath"></a>

- *Type:* `string`

---

##### `healthCheckPort`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup.property.healthCheckPort"></a>

- *Type:* `number`

---

##### `healthCheckProtocol`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup.property.healthCheckProtocol"></a>

- *Type:* `string`

---

##### `portOverrides`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup.property.portOverrides"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortOverride`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortOverride)[]

---

##### `thresholdCount`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup.property.thresholdCount"></a>

- *Type:* `number`

---

##### `trafficDialPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup.property.trafficDialPercentage"></a>

- *Type:* `number`

---


### GlobalAcceleratorResponsesDescribeListener <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListener"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListener.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesDescribeListener(__scope: Construct, __resources: string[], __input: GlobalAcceleratorDescribeListenerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListener.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListener.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListener.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeListenerRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeListenerRequest)

---



#### Properties <a name="Properties"></a>

##### `listener`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListener.property.listener"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListenerListener`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListenerListener)

---


### GlobalAcceleratorResponsesDescribeListenerListener <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListenerListener"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListenerListener.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesDescribeListenerListener(__scope: Construct, __resources: string[], __input: GlobalAcceleratorDescribeListenerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListenerListener.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListenerListener.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListenerListener.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeListenerRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorDescribeListenerRequest)

---



#### Properties <a name="Properties"></a>

##### `clientAffinity`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListenerListener.property.clientAffinity"></a>

- *Type:* `string`

---

##### `listenerArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListenerListener.property.listenerArn"></a>

- *Type:* `string`

---

##### `portRanges`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListenerListener.property.portRanges"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortRange`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortRange)[]

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesDescribeListenerListener.property.protocol"></a>

- *Type:* `string`

---


### GlobalAcceleratorResponsesListAccelerators <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListAccelerators"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListAccelerators.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesListAccelerators(__scope: Construct, __resources: string[], __input: GlobalAcceleratorListAcceleratorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListAccelerators.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListAccelerators.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListAccelerators.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListAcceleratorsRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListAcceleratorsRequest)

---



#### Properties <a name="Properties"></a>

##### `accelerators`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListAccelerators.property.accelerators"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorAccelerator)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListAccelerators.property.nextToken"></a>

- *Type:* `string`

---


### GlobalAcceleratorResponsesListByoipCidrs <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListByoipCidrs"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListByoipCidrs.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesListByoipCidrs(__scope: Construct, __resources: string[], __input: GlobalAcceleratorListByoipCidrsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListByoipCidrs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListByoipCidrs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListByoipCidrs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListByoipCidrsRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListByoipCidrsRequest)

---



#### Properties <a name="Properties"></a>

##### `byoipCidrs`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListByoipCidrs.property.byoipCidrs"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidr)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListByoipCidrs.property.nextToken"></a>

- *Type:* `string`

---


### GlobalAcceleratorResponsesListEndpointGroups <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListEndpointGroups"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListEndpointGroups.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesListEndpointGroups(__scope: Construct, __resources: string[], __input: GlobalAcceleratorListEndpointGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListEndpointGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListEndpointGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListEndpointGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListEndpointGroupsRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListEndpointGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `endpointGroups`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListEndpointGroups.property.endpointGroups"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointGroup)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListEndpointGroups.property.nextToken"></a>

- *Type:* `string`

---


### GlobalAcceleratorResponsesListListeners <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListListeners"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListListeners.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesListListeners(__scope: Construct, __resources: string[], __input: GlobalAcceleratorListListenersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListListeners.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListListeners.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListListeners.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListListenersRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListListenersRequest)

---



#### Properties <a name="Properties"></a>

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListListeners.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListener`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListener)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListListeners.property.nextToken"></a>

- *Type:* `string`

---


### GlobalAcceleratorResponsesListTagsForResource <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListTagsForResource.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: GlobalAcceleratorListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListTagsForResourceRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTag`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorTag)[]

---


### GlobalAcceleratorResponsesProvisionByoipCidr <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidr"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidr.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidr(__scope: Construct, __resources: string[], __input: GlobalAcceleratorProvisionByoipCidrRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidr.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidr.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidr.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorProvisionByoipCidrRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorProvisionByoipCidrRequest)

---



#### Properties <a name="Properties"></a>

##### `byoipCidr`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidr.property.byoipCidr"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidrByoipCidr`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidrByoipCidr)

---


### GlobalAcceleratorResponsesProvisionByoipCidrByoipCidr <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidrByoipCidr"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidrByoipCidr.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidrByoipCidr(__scope: Construct, __resources: string[], __input: GlobalAcceleratorProvisionByoipCidrRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidrByoipCidr.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidrByoipCidr.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidrByoipCidr.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorProvisionByoipCidrRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorProvisionByoipCidrRequest)

---



#### Properties <a name="Properties"></a>

##### `cidr`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidrByoipCidr.property.cidr"></a>

- *Type:* `string`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidrByoipCidr.property.events"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidrEvent`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidrEvent)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesProvisionByoipCidrByoipCidr.property.state"></a>

- *Type:* `string`

---


### GlobalAcceleratorResponsesUpdateAccelerator <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAccelerator"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAccelerator.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesUpdateAccelerator(__scope: Construct, __resources: string[], __input: GlobalAcceleratorUpdateAcceleratorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAccelerator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAccelerator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAccelerator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorRequest)

---



#### Properties <a name="Properties"></a>

##### `accelerator`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAccelerator.property.accelerator"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator)

---


### GlobalAcceleratorResponsesUpdateAcceleratorAccelerator <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator(__scope: Construct, __resources: string[], __input: GlobalAcceleratorUpdateAcceleratorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorRequest)

---



#### Properties <a name="Properties"></a>

##### `acceleratorArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator.property.acceleratorArn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator.property.createdTime"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator.property.dnsName"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator.property.enabled"></a>

- *Type:* `boolean`

---

##### `ipAddressType`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator.property.ipAddressType"></a>

- *Type:* `string`

---

##### `ipSets`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator.property.ipSets"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorIpSet`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorIpSet)[]

---

##### `lastModifiedTime`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator.property.lastModifiedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAccelerator.property.status"></a>

- *Type:* `string`

---


### GlobalAcceleratorResponsesUpdateAcceleratorAttributes <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributes.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributes(__scope: Construct, __resources: string[], __input: GlobalAcceleratorUpdateAcceleratorAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorAttributesRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `acceleratorAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributes.property.acceleratorAttributes"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributesAcceleratorAttributes`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributesAcceleratorAttributes)

---


### GlobalAcceleratorResponsesUpdateAcceleratorAttributesAcceleratorAttributes <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributesAcceleratorAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributesAcceleratorAttributes.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributesAcceleratorAttributes(__scope: Construct, __resources: string[], __input: GlobalAcceleratorUpdateAcceleratorAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributesAcceleratorAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributesAcceleratorAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributesAcceleratorAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorAttributesRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateAcceleratorAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `flowLogsEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributesAcceleratorAttributes.property.flowLogsEnabled"></a>

- *Type:* `boolean`

---

##### `flowLogsS3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributesAcceleratorAttributes.property.flowLogsS3Bucket"></a>

- *Type:* `string`

---

##### `flowLogsS3Prefix`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateAcceleratorAttributesAcceleratorAttributes.property.flowLogsS3Prefix"></a>

- *Type:* `string`

---


### GlobalAcceleratorResponsesUpdateEndpointGroup <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroup"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroup.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroup(__scope: Construct, __resources: string[], __input: GlobalAcceleratorUpdateEndpointGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `endpointGroup`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroup.property.endpointGroup"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup)

---


### GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup(__scope: Construct, __resources: string[], __input: GlobalAcceleratorUpdateEndpointGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateEndpointGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `endpointDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup.property.endpointDescriptions"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointDescription`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorEndpointDescription)[]

---

##### `endpointGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup.property.endpointGroupArn"></a>

- *Type:* `string`

---

##### `endpointGroupRegion`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup.property.endpointGroupRegion"></a>

- *Type:* `string`

---

##### `healthCheckIntervalSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup.property.healthCheckIntervalSeconds"></a>

- *Type:* `number`

---

##### `healthCheckPath`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup.property.healthCheckPath"></a>

- *Type:* `string`

---

##### `healthCheckPort`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup.property.healthCheckPort"></a>

- *Type:* `number`

---

##### `healthCheckProtocol`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup.property.healthCheckProtocol"></a>

- *Type:* `string`

---

##### `portOverrides`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup.property.portOverrides"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortOverride`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortOverride)[]

---

##### `thresholdCount`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup.property.thresholdCount"></a>

- *Type:* `number`

---

##### `trafficDialPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup.property.trafficDialPercentage"></a>

- *Type:* `number`

---


### GlobalAcceleratorResponsesUpdateListener <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListener"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListener.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesUpdateListener(__scope: Construct, __resources: string[], __input: GlobalAcceleratorUpdateListenerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListener.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListener.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListener.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateListenerRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateListenerRequest)

---



#### Properties <a name="Properties"></a>

##### `listener`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListener.property.listener"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListenerListener`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListenerListener)

---


### GlobalAcceleratorResponsesUpdateListenerListener <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListenerListener"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListenerListener.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesUpdateListenerListener(__scope: Construct, __resources: string[], __input: GlobalAcceleratorUpdateListenerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListenerListener.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListenerListener.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListenerListener.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateListenerRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorUpdateListenerRequest)

---



#### Properties <a name="Properties"></a>

##### `clientAffinity`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListenerListener.property.clientAffinity"></a>

- *Type:* `string`

---

##### `listenerArn`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListenerListener.property.listenerArn"></a>

- *Type:* `string`

---

##### `portRanges`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListenerListener.property.portRanges"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortRange`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorPortRange)[]

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesUpdateListenerListener.property.protocol"></a>

- *Type:* `string`

---


### GlobalAcceleratorResponsesWithdrawByoipCidr <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidr"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidr.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidr(__scope: Construct, __resources: string[], __input: GlobalAcceleratorWithdrawByoipCidrRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidr.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidr.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidr.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorWithdrawByoipCidrRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorWithdrawByoipCidrRequest)

---



#### Properties <a name="Properties"></a>

##### `byoipCidr`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidr.property.byoipCidr"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidrByoipCidr`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidrByoipCidr)

---


### GlobalAcceleratorResponsesWithdrawByoipCidrByoipCidr <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidrByoipCidr"></a>

#### Initializer <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidrByoipCidr.Initializer"></a>

```typescript
import { globalaccelerator } from 'aws-cdk-sdk'

new globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidrByoipCidr(__scope: Construct, __resources: string[], __input: GlobalAcceleratorWithdrawByoipCidrRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidrByoipCidr.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidrByoipCidr.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidrByoipCidr.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorWithdrawByoipCidrRequest`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorWithdrawByoipCidrRequest)

---



#### Properties <a name="Properties"></a>

##### `cidr`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidrByoipCidr.property.cidr"></a>

- *Type:* `string`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidrByoipCidr.property.events"></a>

- *Type:* [`aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidrEvent`](#aws-cdk-sdk.globalaccelerator.GlobalAcceleratorByoipCidrEvent)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.globalaccelerator.GlobalAcceleratorResponsesWithdrawByoipCidrByoipCidr.property.state"></a>

- *Type:* `string`

---



