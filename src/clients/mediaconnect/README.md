# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MediaConnectClient <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addFlowOutputs` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.addFlowOutputs"></a>

```typescript
public addFlowOutputs(input: MediaConnectAddFlowOutputsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectAddFlowOutputsRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectAddFlowOutputsRequest)

---

##### `addFlowSources` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.addFlowSources"></a>

```typescript
public addFlowSources(input: MediaConnectAddFlowSourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectAddFlowSourcesRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectAddFlowSourcesRequest)

---

##### `addFlowVpcInterfaces` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.addFlowVpcInterfaces"></a>

```typescript
public addFlowVpcInterfaces(input: MediaConnectAddFlowVpcInterfacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectAddFlowVpcInterfacesRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectAddFlowVpcInterfacesRequest)

---

##### `createFlow` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.createFlow"></a>

```typescript
public createFlow(input: MediaConnectCreateFlowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest)

---

##### `deleteFlow` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.deleteFlow"></a>

```typescript
public deleteFlow(input: MediaConnectDeleteFlowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDeleteFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDeleteFlowRequest)

---

##### `describeFlow` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.describeFlow"></a>

```typescript
public describeFlow(input: MediaConnectDescribeFlowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest)

---

##### `describeOffering` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.describeOffering"></a>

```typescript
public describeOffering(input: MediaConnectDescribeOfferingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeOfferingRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeOfferingRequest)

---

##### `describeReservation` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.describeReservation"></a>

```typescript
public describeReservation(input: MediaConnectDescribeReservationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeReservationRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeReservationRequest)

---

##### `grantFlowEntitlements` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.grantFlowEntitlements"></a>

```typescript
public grantFlowEntitlements(input: MediaConnectGrantFlowEntitlementsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectGrantFlowEntitlementsRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectGrantFlowEntitlementsRequest)

---

##### `listEntitlements` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.listEntitlements"></a>

```typescript
public listEntitlements(input: MediaConnectListEntitlementsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectListEntitlementsRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectListEntitlementsRequest)

---

##### `listFlows` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.listFlows"></a>

```typescript
public listFlows(input: MediaConnectListFlowsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectListFlowsRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectListFlowsRequest)

---

##### `listOfferings` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.listOfferings"></a>

```typescript
public listOfferings(input: MediaConnectListOfferingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectListOfferingsRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectListOfferingsRequest)

---

##### `listReservations` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.listReservations"></a>

```typescript
public listReservations(input: MediaConnectListReservationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectListReservationsRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectListReservationsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: MediaConnectListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectListTagsForResourceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectListTagsForResourceRequest)

---

##### `purchaseOffering` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.purchaseOffering"></a>

```typescript
public purchaseOffering(input: MediaConnectPurchaseOfferingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectPurchaseOfferingRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectPurchaseOfferingRequest)

---

##### `removeFlowOutput` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.removeFlowOutput"></a>

```typescript
public removeFlowOutput(input: MediaConnectRemoveFlowOutputRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowOutputRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowOutputRequest)

---

##### `removeFlowSource` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.removeFlowSource"></a>

```typescript
public removeFlowSource(input: MediaConnectRemoveFlowSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowSourceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowSourceRequest)

---

##### `removeFlowVpcInterface` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.removeFlowVpcInterface"></a>

```typescript
public removeFlowVpcInterface(input: MediaConnectRemoveFlowVpcInterfaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowVpcInterfaceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowVpcInterfaceRequest)

---

##### `revokeFlowEntitlement` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.revokeFlowEntitlement"></a>

```typescript
public revokeFlowEntitlement(input: MediaConnectRevokeFlowEntitlementRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectRevokeFlowEntitlementRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectRevokeFlowEntitlementRequest)

---

##### `startFlow` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.startFlow"></a>

```typescript
public startFlow(input: MediaConnectStartFlowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectStartFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectStartFlowRequest)

---

##### `stopFlow` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.stopFlow"></a>

```typescript
public stopFlow(input: MediaConnectStopFlowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectStopFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectStopFlowRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.tagResource"></a>

```typescript
public tagResource(input: MediaConnectTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectTagResourceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.untagResource"></a>

```typescript
public untagResource(input: MediaConnectUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUntagResourceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUntagResourceRequest)

---

##### `updateFlow` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.updateFlow"></a>

```typescript
public updateFlow(input: MediaConnectUpdateFlowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest)

---

##### `updateFlowEntitlement` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.updateFlowEntitlement"></a>

```typescript
public updateFlowEntitlement(input: MediaConnectUpdateFlowEntitlementRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementRequest)

---

##### `updateFlowOutput` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.updateFlowOutput"></a>

```typescript
public updateFlowOutput(input: MediaConnectUpdateFlowOutputRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest)

---

##### `updateFlowSource` <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.updateFlowSource"></a>

```typescript
public updateFlowSource(input: MediaConnectUpdateFlowSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest)

---




## Structs <a name="Structs"></a>

### MediaConnectAddFlowOutputsRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowOutputsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectAddFlowOutputsRequest: mediaconnect.MediaConnectAddFlowOutputsRequest = { ... }
```

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowOutputsRequest.property.flowArn"></a>

- *Type:* `string`

---

##### `outputs`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowOutputsRequest.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest)[]

---

### MediaConnectAddFlowOutputsResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowOutputsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectAddFlowOutputsResponse: mediaconnect.MediaConnectAddFlowOutputsResponse = { ... }
```

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowOutputsResponse.property.flowArn"></a>

- *Type:* `string`

---

##### `outputs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowOutputsResponse.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectOutput`](#aws-cdk-sdk.mediaconnect.MediaConnectOutput)[]

---

### MediaConnectAddFlowSourcesRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowSourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectAddFlowSourcesRequest: mediaconnect.MediaConnectAddFlowSourcesRequest = { ... }
```

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowSourcesRequest.property.flowArn"></a>

- *Type:* `string`

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowSourcesRequest.property.sources"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest)[]

---

### MediaConnectAddFlowSourcesResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowSourcesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectAddFlowSourcesResponse: mediaconnect.MediaConnectAddFlowSourcesResponse = { ... }
```

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowSourcesResponse.property.flowArn"></a>

- *Type:* `string`

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowSourcesResponse.property.sources"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectSource`](#aws-cdk-sdk.mediaconnect.MediaConnectSource)[]

---

### MediaConnectAddFlowVpcInterfacesRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowVpcInterfacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectAddFlowVpcInterfacesRequest: mediaconnect.MediaConnectAddFlowVpcInterfacesRequest = { ... }
```

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowVpcInterfacesRequest.property.flowArn"></a>

- *Type:* `string`

---

##### `vpcInterfaces`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowVpcInterfacesRequest.property.vpcInterfaces"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceRequest)[]

---

### MediaConnectAddFlowVpcInterfacesResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowVpcInterfacesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectAddFlowVpcInterfacesResponse: mediaconnect.MediaConnectAddFlowVpcInterfacesResponse = { ... }
```

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowVpcInterfacesResponse.property.flowArn"></a>

- *Type:* `string`

---

##### `vpcInterfaces`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddFlowVpcInterfacesResponse.property.vpcInterfaces"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface`](#aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface)[]

---

### MediaConnectAddOutputRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectAddOutputRequest: mediaconnect.MediaConnectAddOutputRequest = { ... }
```

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest.property.protocol"></a>

- *Type:* `string`

---

##### `cidrAllowList`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest.property.cidrAllowList"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest.property.description"></a>

- *Type:* `string`

---

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest.property.destination"></a>

- *Type:* `string`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectEncryption`](#aws-cdk-sdk.mediaconnect.MediaConnectEncryption)

---

##### `maxLatency`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest.property.maxLatency"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest.property.name"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest.property.port"></a>

- *Type:* `number`

---

##### `remoteId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest.property.remoteId"></a>

- *Type:* `string`

---

##### `smoothingLatency`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest.property.smoothingLatency"></a>

- *Type:* `number`

---

##### `streamId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest.property.streamId"></a>

- *Type:* `string`

---

##### `vpcInterfaceAttachment`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest.property.vpcInterfaceAttachment"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceAttachment`](#aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceAttachment)

---

### MediaConnectCreateFlowRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectCreateFlowRequest: mediaconnect.MediaConnectCreateFlowRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest.property.name"></a>

- *Type:* `string`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest.property.availabilityZone"></a>

- *Type:* `string`

---

##### `entitlements`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest.property.entitlements"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectGrantEntitlementRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectGrantEntitlementRequest)[]

---

##### `outputs`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectAddOutputRequest)[]

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest.property.source"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest)

---

##### `sourceFailoverConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest.property.sourceFailoverConfig"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectFailoverConfig`](#aws-cdk-sdk.mediaconnect.MediaConnectFailoverConfig)

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest.property.sources"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest)[]

---

##### `vpcInterfaces`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest.property.vpcInterfaces"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceRequest)[]

---

### MediaConnectCreateFlowResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectCreateFlowResponse: mediaconnect.MediaConnectCreateFlowResponse = { ... }
```

##### `flow`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowResponse.property.flow"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectFlow`](#aws-cdk-sdk.mediaconnect.MediaConnectFlow)

---

### MediaConnectDeleteFlowRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectDeleteFlowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectDeleteFlowRequest: mediaconnect.MediaConnectDeleteFlowRequest = { ... }
```

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectDeleteFlowRequest.property.flowArn"></a>

- *Type:* `string`

---

### MediaConnectDeleteFlowResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectDeleteFlowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectDeleteFlowResponse: mediaconnect.MediaConnectDeleteFlowResponse = { ... }
```

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectDeleteFlowResponse.property.flowArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectDeleteFlowResponse.property.status"></a>

- *Type:* `string`

---

### MediaConnectDescribeFlowRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectDescribeFlowRequest: mediaconnect.MediaConnectDescribeFlowRequest = { ... }
```

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest.property.flowArn"></a>

- *Type:* `string`

---

### MediaConnectDescribeFlowResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectDescribeFlowResponse: mediaconnect.MediaConnectDescribeFlowResponse = { ... }
```

##### `flow`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowResponse.property.flow"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectFlow`](#aws-cdk-sdk.mediaconnect.MediaConnectFlow)

---

##### `messages`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowResponse.property.messages"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectMessages`](#aws-cdk-sdk.mediaconnect.MediaConnectMessages)

---

### MediaConnectDescribeOfferingRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectDescribeOfferingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectDescribeOfferingRequest: mediaconnect.MediaConnectDescribeOfferingRequest = { ... }
```

##### `offeringArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectDescribeOfferingRequest.property.offeringArn"></a>

- *Type:* `string`

---

### MediaConnectDescribeOfferingResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectDescribeOfferingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectDescribeOfferingResponse: mediaconnect.MediaConnectDescribeOfferingResponse = { ... }
```

##### `offering`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectDescribeOfferingResponse.property.offering"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectOffering`](#aws-cdk-sdk.mediaconnect.MediaConnectOffering)

---

### MediaConnectDescribeReservationRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectDescribeReservationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectDescribeReservationRequest: mediaconnect.MediaConnectDescribeReservationRequest = { ... }
```

##### `reservationArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectDescribeReservationRequest.property.reservationArn"></a>

- *Type:* `string`

---

### MediaConnectDescribeReservationResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectDescribeReservationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectDescribeReservationResponse: mediaconnect.MediaConnectDescribeReservationResponse = { ... }
```

##### `reservation`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectDescribeReservationResponse.property.reservation"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectReservation`](#aws-cdk-sdk.mediaconnect.MediaConnectReservation)

---

### MediaConnectEncryption <a name="aws-cdk-sdk.mediaconnect.MediaConnectEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectEncryption: mediaconnect.MediaConnectEncryption = { ... }
```

##### `algorithm`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEncryption.property.algorithm"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEncryption.property.roleArn"></a>

- *Type:* `string`

---

##### `constantInitializationVector`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEncryption.property.constantInitializationVector"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEncryption.property.deviceId"></a>

- *Type:* `string`

---

##### `keyType`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEncryption.property.keyType"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEncryption.property.region"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEncryption.property.resourceId"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEncryption.property.secretArn"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEncryption.property.url"></a>

- *Type:* `string`

---

### MediaConnectEntitlement <a name="aws-cdk-sdk.mediaconnect.MediaConnectEntitlement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectEntitlement: mediaconnect.MediaConnectEntitlement = { ... }
```

##### `entitlementArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEntitlement.property.entitlementArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEntitlement.property.name"></a>

- *Type:* `string`

---

##### `subscribers`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEntitlement.property.subscribers"></a>

- *Type:* `string`[]

---

##### `dataTransferSubscriberFeePercent`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEntitlement.property.dataTransferSubscriberFeePercent"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEntitlement.property.description"></a>

- *Type:* `string`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEntitlement.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectEncryption`](#aws-cdk-sdk.mediaconnect.MediaConnectEncryption)

---

##### `entitlementStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectEntitlement.property.entitlementStatus"></a>

- *Type:* `string`

---

### MediaConnectFailoverConfig <a name="aws-cdk-sdk.mediaconnect.MediaConnectFailoverConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectFailoverConfig: mediaconnect.MediaConnectFailoverConfig = { ... }
```

##### `recoveryWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectFailoverConfig.property.recoveryWindow"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectFailoverConfig.property.state"></a>

- *Type:* `string`

---

### MediaConnectFlow <a name="aws-cdk-sdk.mediaconnect.MediaConnectFlow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectFlow: mediaconnect.MediaConnectFlow = { ... }
```

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectFlow.property.availabilityZone"></a>

- *Type:* `string`

---

##### `entitlements`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectFlow.property.entitlements"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectEntitlement`](#aws-cdk-sdk.mediaconnect.MediaConnectEntitlement)[]

---

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectFlow.property.flowArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectFlow.property.name"></a>

- *Type:* `string`

---

##### `outputs`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectFlow.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectOutput`](#aws-cdk-sdk.mediaconnect.MediaConnectOutput)[]

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectFlow.property.source"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectSource`](#aws-cdk-sdk.mediaconnect.MediaConnectSource)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectFlow.property.status"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectFlow.property.description"></a>

- *Type:* `string`

---

##### `egressIp`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectFlow.property.egressIp"></a>

- *Type:* `string`

---

##### `sourceFailoverConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectFlow.property.sourceFailoverConfig"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectFailoverConfig`](#aws-cdk-sdk.mediaconnect.MediaConnectFailoverConfig)

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectFlow.property.sources"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectSource`](#aws-cdk-sdk.mediaconnect.MediaConnectSource)[]

---

##### `vpcInterfaces`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectFlow.property.vpcInterfaces"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface`](#aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface)[]

---

### MediaConnectGrantEntitlementRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectGrantEntitlementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectGrantEntitlementRequest: mediaconnect.MediaConnectGrantEntitlementRequest = { ... }
```

##### `subscribers`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectGrantEntitlementRequest.property.subscribers"></a>

- *Type:* `string`[]

---

##### `dataTransferSubscriberFeePercent`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectGrantEntitlementRequest.property.dataTransferSubscriberFeePercent"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectGrantEntitlementRequest.property.description"></a>

- *Type:* `string`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectGrantEntitlementRequest.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectEncryption`](#aws-cdk-sdk.mediaconnect.MediaConnectEncryption)

---

##### `entitlementStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectGrantEntitlementRequest.property.entitlementStatus"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectGrantEntitlementRequest.property.name"></a>

- *Type:* `string`

---

### MediaConnectGrantFlowEntitlementsRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectGrantFlowEntitlementsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectGrantFlowEntitlementsRequest: mediaconnect.MediaConnectGrantFlowEntitlementsRequest = { ... }
```

##### `entitlements`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectGrantFlowEntitlementsRequest.property.entitlements"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectGrantEntitlementRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectGrantEntitlementRequest)[]

---

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectGrantFlowEntitlementsRequest.property.flowArn"></a>

- *Type:* `string`

---

### MediaConnectGrantFlowEntitlementsResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectGrantFlowEntitlementsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectGrantFlowEntitlementsResponse: mediaconnect.MediaConnectGrantFlowEntitlementsResponse = { ... }
```

##### `entitlements`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectGrantFlowEntitlementsResponse.property.entitlements"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectEntitlement`](#aws-cdk-sdk.mediaconnect.MediaConnectEntitlement)[]

---

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectGrantFlowEntitlementsResponse.property.flowArn"></a>

- *Type:* `string`

---

### MediaConnectListedEntitlement <a name="aws-cdk-sdk.mediaconnect.MediaConnectListedEntitlement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectListedEntitlement: mediaconnect.MediaConnectListedEntitlement = { ... }
```

##### `entitlementArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListedEntitlement.property.entitlementArn"></a>

- *Type:* `string`

---

##### `entitlementName`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListedEntitlement.property.entitlementName"></a>

- *Type:* `string`

---

##### `dataTransferSubscriberFeePercent`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListedEntitlement.property.dataTransferSubscriberFeePercent"></a>

- *Type:* `number`

---

### MediaConnectListedFlow <a name="aws-cdk-sdk.mediaconnect.MediaConnectListedFlow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectListedFlow: mediaconnect.MediaConnectListedFlow = { ... }
```

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListedFlow.property.availabilityZone"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListedFlow.property.description"></a>

- *Type:* `string`

---

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListedFlow.property.flowArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListedFlow.property.name"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListedFlow.property.sourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListedFlow.property.status"></a>

- *Type:* `string`

---

### MediaConnectListEntitlementsRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectListEntitlementsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectListEntitlementsRequest: mediaconnect.MediaConnectListEntitlementsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListEntitlementsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListEntitlementsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaConnectListEntitlementsResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectListEntitlementsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectListEntitlementsResponse: mediaconnect.MediaConnectListEntitlementsResponse = { ... }
```

##### `entitlements`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListEntitlementsResponse.property.entitlements"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectListedEntitlement`](#aws-cdk-sdk.mediaconnect.MediaConnectListedEntitlement)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListEntitlementsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MediaConnectListFlowsRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectListFlowsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectListFlowsRequest: mediaconnect.MediaConnectListFlowsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListFlowsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListFlowsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaConnectListFlowsResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectListFlowsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectListFlowsResponse: mediaconnect.MediaConnectListFlowsResponse = { ... }
```

##### `flows`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListFlowsResponse.property.flows"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectListedFlow`](#aws-cdk-sdk.mediaconnect.MediaConnectListedFlow)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListFlowsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MediaConnectListOfferingsRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectListOfferingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectListOfferingsRequest: mediaconnect.MediaConnectListOfferingsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListOfferingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListOfferingsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaConnectListOfferingsResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectListOfferingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectListOfferingsResponse: mediaconnect.MediaConnectListOfferingsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListOfferingsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `offerings`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListOfferingsResponse.property.offerings"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectOffering`](#aws-cdk-sdk.mediaconnect.MediaConnectOffering)[]

---

### MediaConnectListReservationsRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectListReservationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectListReservationsRequest: mediaconnect.MediaConnectListReservationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListReservationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListReservationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaConnectListReservationsResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectListReservationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectListReservationsResponse: mediaconnect.MediaConnectListReservationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListReservationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `reservations`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListReservationsResponse.property.reservations"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectReservation`](#aws-cdk-sdk.mediaconnect.MediaConnectReservation)[]

---

### MediaConnectListTagsForResourceRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectListTagsForResourceRequest: mediaconnect.MediaConnectListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### MediaConnectListTagsForResourceResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectListTagsForResourceResponse: mediaconnect.MediaConnectListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaConnectMessages <a name="aws-cdk-sdk.mediaconnect.MediaConnectMessages"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectMessages: mediaconnect.MediaConnectMessages = { ... }
```

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectMessages.property.errors"></a>

- *Type:* `string`[]

---

### MediaConnectOffering <a name="aws-cdk-sdk.mediaconnect.MediaConnectOffering"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectOffering: mediaconnect.MediaConnectOffering = { ... }
```

##### `currencyCode`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOffering.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOffering.property.duration"></a>

- *Type:* `number`

---

##### `durationUnits`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOffering.property.durationUnits"></a>

- *Type:* `string`

---

##### `offeringArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOffering.property.offeringArn"></a>

- *Type:* `string`

---

##### `offeringDescription`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOffering.property.offeringDescription"></a>

- *Type:* `string`

---

##### `pricePerUnit`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOffering.property.pricePerUnit"></a>

- *Type:* `string`

---

##### `priceUnits`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOffering.property.priceUnits"></a>

- *Type:* `string`

---

##### `resourceSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOffering.property.resourceSpecification"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResourceSpecification`](#aws-cdk-sdk.mediaconnect.MediaConnectResourceSpecification)

---

### MediaConnectOutput <a name="aws-cdk-sdk.mediaconnect.MediaConnectOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectOutput: mediaconnect.MediaConnectOutput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOutput.property.name"></a>

- *Type:* `string`

---

##### `outputArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOutput.property.outputArn"></a>

- *Type:* `string`

---

##### `dataTransferSubscriberFeePercent`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOutput.property.dataTransferSubscriberFeePercent"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOutput.property.description"></a>

- *Type:* `string`

---

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOutput.property.destination"></a>

- *Type:* `string`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOutput.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectEncryption`](#aws-cdk-sdk.mediaconnect.MediaConnectEncryption)

---

##### `entitlementArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOutput.property.entitlementArn"></a>

- *Type:* `string`

---

##### `mediaLiveInputArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOutput.property.mediaLiveInputArn"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOutput.property.port"></a>

- *Type:* `number`

---

##### `transport`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOutput.property.transport"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectTransport`](#aws-cdk-sdk.mediaconnect.MediaConnectTransport)

---

##### `vpcInterfaceAttachment`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectOutput.property.vpcInterfaceAttachment"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceAttachment`](#aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceAttachment)

---

### MediaConnectPurchaseOfferingRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectPurchaseOfferingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectPurchaseOfferingRequest: mediaconnect.MediaConnectPurchaseOfferingRequest = { ... }
```

##### `offeringArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectPurchaseOfferingRequest.property.offeringArn"></a>

- *Type:* `string`

---

##### `reservationName`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectPurchaseOfferingRequest.property.reservationName"></a>

- *Type:* `string`

---

##### `start`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectPurchaseOfferingRequest.property.start"></a>

- *Type:* `string`

---

### MediaConnectPurchaseOfferingResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectPurchaseOfferingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectPurchaseOfferingResponse: mediaconnect.MediaConnectPurchaseOfferingResponse = { ... }
```

##### `reservation`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectPurchaseOfferingResponse.property.reservation"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectReservation`](#aws-cdk-sdk.mediaconnect.MediaConnectReservation)

---

### MediaConnectRemoveFlowOutputRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowOutputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectRemoveFlowOutputRequest: mediaconnect.MediaConnectRemoveFlowOutputRequest = { ... }
```

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowOutputRequest.property.flowArn"></a>

- *Type:* `string`

---

##### `outputArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowOutputRequest.property.outputArn"></a>

- *Type:* `string`

---

### MediaConnectRemoveFlowOutputResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowOutputResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectRemoveFlowOutputResponse: mediaconnect.MediaConnectRemoveFlowOutputResponse = { ... }
```

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowOutputResponse.property.flowArn"></a>

- *Type:* `string`

---

##### `outputArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowOutputResponse.property.outputArn"></a>

- *Type:* `string`

---

### MediaConnectRemoveFlowSourceRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectRemoveFlowSourceRequest: mediaconnect.MediaConnectRemoveFlowSourceRequest = { ... }
```

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowSourceRequest.property.flowArn"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowSourceRequest.property.sourceArn"></a>

- *Type:* `string`

---

### MediaConnectRemoveFlowSourceResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectRemoveFlowSourceResponse: mediaconnect.MediaConnectRemoveFlowSourceResponse = { ... }
```

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowSourceResponse.property.flowArn"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowSourceResponse.property.sourceArn"></a>

- *Type:* `string`

---

### MediaConnectRemoveFlowVpcInterfaceRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowVpcInterfaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectRemoveFlowVpcInterfaceRequest: mediaconnect.MediaConnectRemoveFlowVpcInterfaceRequest = { ... }
```

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowVpcInterfaceRequest.property.flowArn"></a>

- *Type:* `string`

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowVpcInterfaceRequest.property.vpcInterfaceName"></a>

- *Type:* `string`

---

### MediaConnectRemoveFlowVpcInterfaceResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowVpcInterfaceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectRemoveFlowVpcInterfaceResponse: mediaconnect.MediaConnectRemoveFlowVpcInterfaceResponse = { ... }
```

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowVpcInterfaceResponse.property.flowArn"></a>

- *Type:* `string`

---

##### `nonDeletedNetworkInterfaceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowVpcInterfaceResponse.property.nonDeletedNetworkInterfaceIds"></a>

- *Type:* `string`[]

---

##### `vpcInterfaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowVpcInterfaceResponse.property.vpcInterfaceName"></a>

- *Type:* `string`

---

### MediaConnectReservation <a name="aws-cdk-sdk.mediaconnect.MediaConnectReservation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectReservation: mediaconnect.MediaConnectReservation = { ... }
```

##### `currencyCode`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectReservation.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectReservation.property.duration"></a>

- *Type:* `number`

---

##### `durationUnits`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectReservation.property.durationUnits"></a>

- *Type:* `string`

---

##### `end`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectReservation.property.end"></a>

- *Type:* `string`

---

##### `offeringArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectReservation.property.offeringArn"></a>

- *Type:* `string`

---

##### `offeringDescription`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectReservation.property.offeringDescription"></a>

- *Type:* `string`

---

##### `pricePerUnit`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectReservation.property.pricePerUnit"></a>

- *Type:* `string`

---

##### `priceUnits`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectReservation.property.priceUnits"></a>

- *Type:* `string`

---

##### `reservationArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectReservation.property.reservationArn"></a>

- *Type:* `string`

---

##### `reservationName`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectReservation.property.reservationName"></a>

- *Type:* `string`

---

##### `reservationState`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectReservation.property.reservationState"></a>

- *Type:* `string`

---

##### `resourceSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectReservation.property.resourceSpecification"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResourceSpecification`](#aws-cdk-sdk.mediaconnect.MediaConnectResourceSpecification)

---

##### `start`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectReservation.property.start"></a>

- *Type:* `string`

---

### MediaConnectResourceSpecification <a name="aws-cdk-sdk.mediaconnect.MediaConnectResourceSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectResourceSpecification: mediaconnect.MediaConnectResourceSpecification = { ... }
```

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResourceSpecification.property.resourceType"></a>

- *Type:* `string`

---

##### `reservedBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResourceSpecification.property.reservedBitrate"></a>

- *Type:* `number`

---

### MediaConnectRevokeFlowEntitlementRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectRevokeFlowEntitlementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectRevokeFlowEntitlementRequest: mediaconnect.MediaConnectRevokeFlowEntitlementRequest = { ... }
```

##### `entitlementArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRevokeFlowEntitlementRequest.property.entitlementArn"></a>

- *Type:* `string`

---

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRevokeFlowEntitlementRequest.property.flowArn"></a>

- *Type:* `string`

---

### MediaConnectRevokeFlowEntitlementResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectRevokeFlowEntitlementResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectRevokeFlowEntitlementResponse: mediaconnect.MediaConnectRevokeFlowEntitlementResponse = { ... }
```

##### `entitlementArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRevokeFlowEntitlementResponse.property.entitlementArn"></a>

- *Type:* `string`

---

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectRevokeFlowEntitlementResponse.property.flowArn"></a>

- *Type:* `string`

---

### MediaConnectSetSourceRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectSetSourceRequest: mediaconnect.MediaConnectSetSourceRequest = { ... }
```

##### `decryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest.property.decryption"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectEncryption`](#aws-cdk-sdk.mediaconnect.MediaConnectEncryption)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest.property.description"></a>

- *Type:* `string`

---

##### `entitlementArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest.property.entitlementArn"></a>

- *Type:* `string`

---

##### `ingestPort`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest.property.ingestPort"></a>

- *Type:* `number`

---

##### `maxBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest.property.maxBitrate"></a>

- *Type:* `number`

---

##### `maxLatency`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest.property.maxLatency"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest.property.name"></a>

- *Type:* `string`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest.property.protocol"></a>

- *Type:* `string`

---

##### `streamId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest.property.streamId"></a>

- *Type:* `string`

---

##### `vpcInterfaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest.property.vpcInterfaceName"></a>

- *Type:* `string`

---

##### `whitelistCidr`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSetSourceRequest.property.whitelistCidr"></a>

- *Type:* `string`

---

### MediaConnectSource <a name="aws-cdk-sdk.mediaconnect.MediaConnectSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectSource: mediaconnect.MediaConnectSource = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSource.property.name"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSource.property.sourceArn"></a>

- *Type:* `string`

---

##### `dataTransferSubscriberFeePercent`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSource.property.dataTransferSubscriberFeePercent"></a>

- *Type:* `number`

---

##### `decryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSource.property.decryption"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectEncryption`](#aws-cdk-sdk.mediaconnect.MediaConnectEncryption)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSource.property.description"></a>

- *Type:* `string`

---

##### `entitlementArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSource.property.entitlementArn"></a>

- *Type:* `string`

---

##### `ingestIp`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSource.property.ingestIp"></a>

- *Type:* `string`

---

##### `ingestPort`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSource.property.ingestPort"></a>

- *Type:* `number`

---

##### `transport`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSource.property.transport"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectTransport`](#aws-cdk-sdk.mediaconnect.MediaConnectTransport)

---

##### `vpcInterfaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSource.property.vpcInterfaceName"></a>

- *Type:* `string`

---

##### `whitelistCidr`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectSource.property.whitelistCidr"></a>

- *Type:* `string`

---

### MediaConnectStartFlowRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectStartFlowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectStartFlowRequest: mediaconnect.MediaConnectStartFlowRequest = { ... }
```

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectStartFlowRequest.property.flowArn"></a>

- *Type:* `string`

---

### MediaConnectStartFlowResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectStartFlowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectStartFlowResponse: mediaconnect.MediaConnectStartFlowResponse = { ... }
```

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectStartFlowResponse.property.flowArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectStartFlowResponse.property.status"></a>

- *Type:* `string`

---

### MediaConnectStopFlowRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectStopFlowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectStopFlowRequest: mediaconnect.MediaConnectStopFlowRequest = { ... }
```

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectStopFlowRequest.property.flowArn"></a>

- *Type:* `string`

---

### MediaConnectStopFlowResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectStopFlowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectStopFlowResponse: mediaconnect.MediaConnectStopFlowResponse = { ... }
```

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectStopFlowResponse.property.flowArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectStopFlowResponse.property.status"></a>

- *Type:* `string`

---

### MediaConnectTagResourceRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectTagResourceRequest: mediaconnect.MediaConnectTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaConnectTransport <a name="aws-cdk-sdk.mediaconnect.MediaConnectTransport"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectTransport: mediaconnect.MediaConnectTransport = { ... }
```

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectTransport.property.protocol"></a>

- *Type:* `string`

---

##### `cidrAllowList`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectTransport.property.cidrAllowList"></a>

- *Type:* `string`[]

---

##### `maxBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectTransport.property.maxBitrate"></a>

- *Type:* `number`

---

##### `maxLatency`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectTransport.property.maxLatency"></a>

- *Type:* `number`

---

##### `remoteId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectTransport.property.remoteId"></a>

- *Type:* `string`

---

##### `smoothingLatency`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectTransport.property.smoothingLatency"></a>

- *Type:* `number`

---

##### `streamId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectTransport.property.streamId"></a>

- *Type:* `string`

---

### MediaConnectUntagResourceRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectUntagResourceRequest: mediaconnect.MediaConnectUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### MediaConnectUpdateEncryption <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectUpdateEncryption: mediaconnect.MediaConnectUpdateEncryption = { ... }
```

##### `algorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption.property.algorithm"></a>

- *Type:* `string`

---

##### `constantInitializationVector`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption.property.constantInitializationVector"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption.property.deviceId"></a>

- *Type:* `string`

---

##### `keyType`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption.property.keyType"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption.property.region"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption.property.roleArn"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption.property.secretArn"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption.property.url"></a>

- *Type:* `string`

---

### MediaConnectUpdateFailoverConfig <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFailoverConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectUpdateFailoverConfig: mediaconnect.MediaConnectUpdateFailoverConfig = { ... }
```

##### `recoveryWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFailoverConfig.property.recoveryWindow"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFailoverConfig.property.state"></a>

- *Type:* `string`

---

### MediaConnectUpdateFlowEntitlementRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectUpdateFlowEntitlementRequest: mediaconnect.MediaConnectUpdateFlowEntitlementRequest = { ... }
```

##### `entitlementArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementRequest.property.entitlementArn"></a>

- *Type:* `string`

---

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementRequest.property.flowArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementRequest.property.description"></a>

- *Type:* `string`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementRequest.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption)

---

##### `entitlementStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementRequest.property.entitlementStatus"></a>

- *Type:* `string`

---

##### `subscribers`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementRequest.property.subscribers"></a>

- *Type:* `string`[]

---

### MediaConnectUpdateFlowEntitlementResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectUpdateFlowEntitlementResponse: mediaconnect.MediaConnectUpdateFlowEntitlementResponse = { ... }
```

##### `entitlement`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementResponse.property.entitlement"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectEntitlement`](#aws-cdk-sdk.mediaconnect.MediaConnectEntitlement)

---

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementResponse.property.flowArn"></a>

- *Type:* `string`

---

### MediaConnectUpdateFlowOutputRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectUpdateFlowOutputRequest: mediaconnect.MediaConnectUpdateFlowOutputRequest = { ... }
```

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest.property.flowArn"></a>

- *Type:* `string`

---

##### `outputArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest.property.outputArn"></a>

- *Type:* `string`

---

##### `cidrAllowList`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest.property.cidrAllowList"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest.property.description"></a>

- *Type:* `string`

---

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest.property.destination"></a>

- *Type:* `string`

---

##### `encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption)

---

##### `maxLatency`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest.property.maxLatency"></a>

- *Type:* `number`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest.property.port"></a>

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest.property.protocol"></a>

- *Type:* `string`

---

##### `remoteId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest.property.remoteId"></a>

- *Type:* `string`

---

##### `smoothingLatency`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest.property.smoothingLatency"></a>

- *Type:* `number`

---

##### `streamId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest.property.streamId"></a>

- *Type:* `string`

---

##### `vpcInterfaceAttachment`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest.property.vpcInterfaceAttachment"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceAttachment`](#aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceAttachment)

---

### MediaConnectUpdateFlowOutputResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectUpdateFlowOutputResponse: mediaconnect.MediaConnectUpdateFlowOutputResponse = { ... }
```

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputResponse.property.flowArn"></a>

- *Type:* `string`

---

##### `output`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputResponse.property.output"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectOutput`](#aws-cdk-sdk.mediaconnect.MediaConnectOutput)

---

### MediaConnectUpdateFlowRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectUpdateFlowRequest: mediaconnect.MediaConnectUpdateFlowRequest = { ... }
```

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest.property.flowArn"></a>

- *Type:* `string`

---

##### `sourceFailoverConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest.property.sourceFailoverConfig"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFailoverConfig`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFailoverConfig)

---

### MediaConnectUpdateFlowResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectUpdateFlowResponse: mediaconnect.MediaConnectUpdateFlowResponse = { ... }
```

##### `flow`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowResponse.property.flow"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectFlow`](#aws-cdk-sdk.mediaconnect.MediaConnectFlow)

---

### MediaConnectUpdateFlowSourceRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectUpdateFlowSourceRequest: mediaconnect.MediaConnectUpdateFlowSourceRequest = { ... }
```

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest.property.flowArn"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest.property.sourceArn"></a>

- *Type:* `string`

---

##### `decryption`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest.property.decryption"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateEncryption)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest.property.description"></a>

- *Type:* `string`

---

##### `entitlementArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest.property.entitlementArn"></a>

- *Type:* `string`

---

##### `ingestPort`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest.property.ingestPort"></a>

- *Type:* `number`

---

##### `maxBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest.property.maxBitrate"></a>

- *Type:* `number`

---

##### `maxLatency`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest.property.maxLatency"></a>

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest.property.protocol"></a>

- *Type:* `string`

---

##### `streamId`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest.property.streamId"></a>

- *Type:* `string`

---

##### `vpcInterfaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest.property.vpcInterfaceName"></a>

- *Type:* `string`

---

##### `whitelistCidr`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest.property.whitelistCidr"></a>

- *Type:* `string`

---

### MediaConnectUpdateFlowSourceResponse <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectUpdateFlowSourceResponse: mediaconnect.MediaConnectUpdateFlowSourceResponse = { ... }
```

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceResponse.property.flowArn"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceResponse.property.source"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectSource`](#aws-cdk-sdk.mediaconnect.MediaConnectSource)

---

### MediaConnectVpcInterface <a name="aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectVpcInterface: mediaconnect.MediaConnectVpcInterface = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface.property.name"></a>

- *Type:* `string`

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface.property.networkInterfaceIds"></a>

- *Type:* `string`[]

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface.property.roleArn"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface.property.subnetId"></a>

- *Type:* `string`

---

### MediaConnectVpcInterfaceAttachment <a name="aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceAttachment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectVpcInterfaceAttachment: mediaconnect.MediaConnectVpcInterfaceAttachment = { ... }
```

##### `vpcInterfaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceAttachment.property.vpcInterfaceName"></a>

- *Type:* `string`

---

### MediaConnectVpcInterfaceRequest <a name="aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

const mediaConnectVpcInterfaceRequest: mediaconnect.MediaConnectVpcInterfaceRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceRequest.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceRequest.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectVpcInterfaceRequest.property.subnetId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### MediaConnectResponsesAddFlowOutputs <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowOutputs"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowOutputs.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesAddFlowOutputs(__scope: Construct, __resources: string[], __input: MediaConnectAddFlowOutputsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowOutputs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowOutputs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowOutputs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectAddFlowOutputsRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectAddFlowOutputsRequest)

---



#### Properties <a name="Properties"></a>

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowOutputs.property.flowArn"></a>

- *Type:* `string`

---

##### `outputs`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowOutputs.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectOutput`](#aws-cdk-sdk.mediaconnect.MediaConnectOutput)[]

---


### MediaConnectResponsesAddFlowSources <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowSources"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowSources.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesAddFlowSources(__scope: Construct, __resources: string[], __input: MediaConnectAddFlowSourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowSources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowSources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowSources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectAddFlowSourcesRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectAddFlowSourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowSources.property.flowArn"></a>

- *Type:* `string`

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowSources.property.sources"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectSource`](#aws-cdk-sdk.mediaconnect.MediaConnectSource)[]

---


### MediaConnectResponsesAddFlowVpcInterfaces <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowVpcInterfaces"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowVpcInterfaces.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesAddFlowVpcInterfaces(__scope: Construct, __resources: string[], __input: MediaConnectAddFlowVpcInterfacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowVpcInterfaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowVpcInterfaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowVpcInterfaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectAddFlowVpcInterfacesRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectAddFlowVpcInterfacesRequest)

---



#### Properties <a name="Properties"></a>

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowVpcInterfaces.property.flowArn"></a>

- *Type:* `string`

---

##### `vpcInterfaces`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesAddFlowVpcInterfaces.property.vpcInterfaces"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface`](#aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface)[]

---


### MediaConnectResponsesCreateFlow <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlow"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlow.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesCreateFlow(__scope: Construct, __resources: string[], __input: MediaConnectCreateFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `flow`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlow.property.flow"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow)

---


### MediaConnectResponsesCreateFlowFlow <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesCreateFlowFlow(__scope: Construct, __resources: string[], __input: MediaConnectCreateFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.property.availabilityZone"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.property.description"></a>

- *Type:* `string`

---

##### `egressIp`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.property.egressIp"></a>

- *Type:* `string`

---

##### `entitlements`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.property.entitlements"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectEntitlement`](#aws-cdk-sdk.mediaconnect.MediaConnectEntitlement)[]

---

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.property.flowArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.property.name"></a>

- *Type:* `string`

---

##### `outputs`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectOutput`](#aws-cdk-sdk.mediaconnect.MediaConnectOutput)[]

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.property.source"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource)

---

##### `sourceFailoverConfig`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.property.sourceFailoverConfig"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceFailoverConfig`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceFailoverConfig)

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.property.sources"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectSource`](#aws-cdk-sdk.mediaconnect.MediaConnectSource)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.property.status"></a>

- *Type:* `string`

---

##### `vpcInterfaces`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlow.property.vpcInterfaces"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface`](#aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface)[]

---


### MediaConnectResponsesCreateFlowFlowSource <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesCreateFlowFlowSource(__scope: Construct, __resources: string[], __input: MediaConnectCreateFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `dataTransferSubscriberFeePercent`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource.property.dataTransferSubscriberFeePercent"></a>

- *Type:* `number`

---

##### `decryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource.property.decryption"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource.property.description"></a>

- *Type:* `string`

---

##### `entitlementArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource.property.entitlementArn"></a>

- *Type:* `string`

---

##### `ingestIp`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource.property.ingestIp"></a>

- *Type:* `string`

---

##### `ingestPort`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource.property.ingestPort"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource.property.name"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource.property.sourceArn"></a>

- *Type:* `string`

---

##### `transport`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource.property.transport"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceTransport`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceTransport)

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource.property.vpcInterfaceName"></a>

- *Type:* `string`

---

##### `whitelistCidr`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSource.property.whitelistCidr"></a>

- *Type:* `string`

---


### MediaConnectResponsesCreateFlowFlowSourceDecryption <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption(__scope: Construct, __resources: string[], __input: MediaConnectCreateFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithm`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption.property.algorithm"></a>

- *Type:* `string`

---

##### `constantInitializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption.property.constantInitializationVector"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption.property.deviceId"></a>

- *Type:* `string`

---

##### `keyType`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption.property.keyType"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption.property.region"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption.property.roleArn"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption.property.secretArn"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceDecryption.property.url"></a>

- *Type:* `string`

---


### MediaConnectResponsesCreateFlowFlowSourceFailoverConfig <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceFailoverConfig"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceFailoverConfig.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesCreateFlowFlowSourceFailoverConfig(__scope: Construct, __resources: string[], __input: MediaConnectCreateFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceFailoverConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceFailoverConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceFailoverConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `recoveryWindow`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceFailoverConfig.property.recoveryWindow"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceFailoverConfig.property.state"></a>

- *Type:* `string`

---


### MediaConnectResponsesCreateFlowFlowSourceTransport <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceTransport"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceTransport.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesCreateFlowFlowSourceTransport(__scope: Construct, __resources: string[], __input: MediaConnectCreateFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceTransport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceTransport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceTransport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectCreateFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `cidrAllowList`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceTransport.property.cidrAllowList"></a>

- *Type:* `string`[]

---

##### `maxBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceTransport.property.maxBitrate"></a>

- *Type:* `number`

---

##### `maxLatency`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceTransport.property.maxLatency"></a>

- *Type:* `number`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceTransport.property.protocol"></a>

- *Type:* `string`

---

##### `remoteId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceTransport.property.remoteId"></a>

- *Type:* `string`

---

##### `smoothingLatency`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceTransport.property.smoothingLatency"></a>

- *Type:* `number`

---

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesCreateFlowFlowSourceTransport.property.streamId"></a>

- *Type:* `string`

---


### MediaConnectResponsesDeleteFlow <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDeleteFlow"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDeleteFlow.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesDeleteFlow(__scope: Construct, __resources: string[], __input: MediaConnectDeleteFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDeleteFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDeleteFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDeleteFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDeleteFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDeleteFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDeleteFlow.property.flowArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDeleteFlow.property.status"></a>

- *Type:* `string`

---


### MediaConnectResponsesDescribeFlow <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlow"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlow.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesDescribeFlow(__scope: Construct, __resources: string[], __input: MediaConnectDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `flow`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlow.property.flow"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow)

---

##### `messages`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlow.property.messages"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowMessages`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowMessages)

---


### MediaConnectResponsesDescribeFlowFlow <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesDescribeFlowFlow(__scope: Construct, __resources: string[], __input: MediaConnectDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.property.availabilityZone"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.property.description"></a>

- *Type:* `string`

---

##### `egressIp`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.property.egressIp"></a>

- *Type:* `string`

---

##### `entitlements`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.property.entitlements"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectEntitlement`](#aws-cdk-sdk.mediaconnect.MediaConnectEntitlement)[]

---

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.property.flowArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.property.name"></a>

- *Type:* `string`

---

##### `outputs`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectOutput`](#aws-cdk-sdk.mediaconnect.MediaConnectOutput)[]

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.property.source"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource)

---

##### `sourceFailoverConfig`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.property.sourceFailoverConfig"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceFailoverConfig`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceFailoverConfig)

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.property.sources"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectSource`](#aws-cdk-sdk.mediaconnect.MediaConnectSource)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.property.status"></a>

- *Type:* `string`

---

##### `vpcInterfaces`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlow.property.vpcInterfaces"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface`](#aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface)[]

---


### MediaConnectResponsesDescribeFlowFlowSource <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesDescribeFlowFlowSource(__scope: Construct, __resources: string[], __input: MediaConnectDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `dataTransferSubscriberFeePercent`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource.property.dataTransferSubscriberFeePercent"></a>

- *Type:* `number`

---

##### `decryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource.property.decryption"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource.property.description"></a>

- *Type:* `string`

---

##### `entitlementArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource.property.entitlementArn"></a>

- *Type:* `string`

---

##### `ingestIp`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource.property.ingestIp"></a>

- *Type:* `string`

---

##### `ingestPort`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource.property.ingestPort"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource.property.name"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource.property.sourceArn"></a>

- *Type:* `string`

---

##### `transport`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource.property.transport"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceTransport`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceTransport)

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource.property.vpcInterfaceName"></a>

- *Type:* `string`

---

##### `whitelistCidr`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSource.property.whitelistCidr"></a>

- *Type:* `string`

---


### MediaConnectResponsesDescribeFlowFlowSourceDecryption <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption(__scope: Construct, __resources: string[], __input: MediaConnectDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithm`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption.property.algorithm"></a>

- *Type:* `string`

---

##### `constantInitializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption.property.constantInitializationVector"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption.property.deviceId"></a>

- *Type:* `string`

---

##### `keyType`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption.property.keyType"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption.property.region"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption.property.roleArn"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption.property.secretArn"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceDecryption.property.url"></a>

- *Type:* `string`

---


### MediaConnectResponsesDescribeFlowFlowSourceFailoverConfig <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceFailoverConfig"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceFailoverConfig.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceFailoverConfig(__scope: Construct, __resources: string[], __input: MediaConnectDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceFailoverConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceFailoverConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceFailoverConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `recoveryWindow`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceFailoverConfig.property.recoveryWindow"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceFailoverConfig.property.state"></a>

- *Type:* `string`

---


### MediaConnectResponsesDescribeFlowFlowSourceTransport <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceTransport"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceTransport.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceTransport(__scope: Construct, __resources: string[], __input: MediaConnectDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceTransport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceTransport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceTransport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `cidrAllowList`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceTransport.property.cidrAllowList"></a>

- *Type:* `string`[]

---

##### `maxBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceTransport.property.maxBitrate"></a>

- *Type:* `number`

---

##### `maxLatency`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceTransport.property.maxLatency"></a>

- *Type:* `number`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceTransport.property.protocol"></a>

- *Type:* `string`

---

##### `remoteId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceTransport.property.remoteId"></a>

- *Type:* `string`

---

##### `smoothingLatency`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceTransport.property.smoothingLatency"></a>

- *Type:* `number`

---

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowFlowSourceTransport.property.streamId"></a>

- *Type:* `string`

---


### MediaConnectResponsesDescribeFlowMessages <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowMessages"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowMessages.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesDescribeFlowMessages(__scope: Construct, __resources: string[], __input: MediaConnectDescribeFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowMessages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowMessages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowMessages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeFlowMessages.property.errors"></a>

- *Type:* `string`[]

---


### MediaConnectResponsesDescribeOffering <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOffering"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOffering.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesDescribeOffering(__scope: Construct, __resources: string[], __input: MediaConnectDescribeOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOffering.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOffering.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOffering.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeOfferingRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `offering`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOffering.property.offering"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOffering`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOffering)

---


### MediaConnectResponsesDescribeOfferingOffering <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOffering"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOffering.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesDescribeOfferingOffering(__scope: Construct, __resources: string[], __input: MediaConnectDescribeOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOffering.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOffering.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOffering.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeOfferingRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `currencyCode`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOffering.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOffering.property.duration"></a>

- *Type:* `number`

---

##### `durationUnits`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOffering.property.durationUnits"></a>

- *Type:* `string`

---

##### `offeringArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOffering.property.offeringArn"></a>

- *Type:* `string`

---

##### `offeringDescription`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOffering.property.offeringDescription"></a>

- *Type:* `string`

---

##### `pricePerUnit`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOffering.property.pricePerUnit"></a>

- *Type:* `string`

---

##### `priceUnits`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOffering.property.priceUnits"></a>

- *Type:* `string`

---

##### `resourceSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOffering.property.resourceSpecification"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOfferingResourceSpecification`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOfferingResourceSpecification)

---


### MediaConnectResponsesDescribeOfferingOfferingResourceSpecification <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOfferingResourceSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOfferingResourceSpecification.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesDescribeOfferingOfferingResourceSpecification(__scope: Construct, __resources: string[], __input: MediaConnectDescribeOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOfferingResourceSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOfferingResourceSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOfferingResourceSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeOfferingRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `reservedBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOfferingResourceSpecification.property.reservedBitrate"></a>

- *Type:* `number`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeOfferingOfferingResourceSpecification.property.resourceType"></a>

- *Type:* `string`

---


### MediaConnectResponsesDescribeReservation <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservation"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservation.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesDescribeReservation(__scope: Construct, __resources: string[], __input: MediaConnectDescribeReservationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeReservationRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeReservationRequest)

---



#### Properties <a name="Properties"></a>

##### `reservation`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservation.property.reservation"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation)

---


### MediaConnectResponsesDescribeReservationReservation <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesDescribeReservationReservation(__scope: Construct, __resources: string[], __input: MediaConnectDescribeReservationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeReservationRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeReservationRequest)

---



#### Properties <a name="Properties"></a>

##### `currencyCode`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.property.duration"></a>

- *Type:* `number`

---

##### `durationUnits`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.property.durationUnits"></a>

- *Type:* `string`

---

##### `end`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.property.end"></a>

- *Type:* `string`

---

##### `offeringArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.property.offeringArn"></a>

- *Type:* `string`

---

##### `offeringDescription`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.property.offeringDescription"></a>

- *Type:* `string`

---

##### `pricePerUnit`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.property.pricePerUnit"></a>

- *Type:* `string`

---

##### `priceUnits`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.property.priceUnits"></a>

- *Type:* `string`

---

##### `reservationArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.property.reservationArn"></a>

- *Type:* `string`

---

##### `reservationName`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.property.reservationName"></a>

- *Type:* `string`

---

##### `reservationState`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.property.reservationState"></a>

- *Type:* `string`

---

##### `resourceSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.property.resourceSpecification"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservationResourceSpecification`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservationResourceSpecification)

---

##### `start`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservation.property.start"></a>

- *Type:* `string`

---


### MediaConnectResponsesDescribeReservationReservationResourceSpecification <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservationResourceSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservationResourceSpecification.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesDescribeReservationReservationResourceSpecification(__scope: Construct, __resources: string[], __input: MediaConnectDescribeReservationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservationResourceSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservationResourceSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservationResourceSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectDescribeReservationRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectDescribeReservationRequest)

---



#### Properties <a name="Properties"></a>

##### `reservedBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservationResourceSpecification.property.reservedBitrate"></a>

- *Type:* `number`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesDescribeReservationReservationResourceSpecification.property.resourceType"></a>

- *Type:* `string`

---


### MediaConnectResponsesGrantFlowEntitlements <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesGrantFlowEntitlements"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesGrantFlowEntitlements.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesGrantFlowEntitlements(__scope: Construct, __resources: string[], __input: MediaConnectGrantFlowEntitlementsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesGrantFlowEntitlements.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesGrantFlowEntitlements.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesGrantFlowEntitlements.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectGrantFlowEntitlementsRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectGrantFlowEntitlementsRequest)

---



#### Properties <a name="Properties"></a>

##### `entitlements`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesGrantFlowEntitlements.property.entitlements"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectEntitlement`](#aws-cdk-sdk.mediaconnect.MediaConnectEntitlement)[]

---

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesGrantFlowEntitlements.property.flowArn"></a>

- *Type:* `string`

---


### MediaConnectResponsesListEntitlements <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListEntitlements"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListEntitlements.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesListEntitlements(__scope: Construct, __resources: string[], __input: MediaConnectListEntitlementsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListEntitlements.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListEntitlements.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListEntitlements.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectListEntitlementsRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectListEntitlementsRequest)

---



#### Properties <a name="Properties"></a>

##### `entitlements`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListEntitlements.property.entitlements"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectListedEntitlement`](#aws-cdk-sdk.mediaconnect.MediaConnectListedEntitlement)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListEntitlements.property.nextToken"></a>

- *Type:* `string`

---


### MediaConnectResponsesListFlows <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListFlows"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListFlows.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesListFlows(__scope: Construct, __resources: string[], __input: MediaConnectListFlowsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListFlows.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListFlows.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListFlows.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectListFlowsRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectListFlowsRequest)

---



#### Properties <a name="Properties"></a>

##### `flows`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListFlows.property.flows"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectListedFlow`](#aws-cdk-sdk.mediaconnect.MediaConnectListedFlow)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListFlows.property.nextToken"></a>

- *Type:* `string`

---


### MediaConnectResponsesListOfferings <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListOfferings"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListOfferings.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesListOfferings(__scope: Construct, __resources: string[], __input: MediaConnectListOfferingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListOfferings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListOfferings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListOfferings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectListOfferingsRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectListOfferingsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListOfferings.property.nextToken"></a>

- *Type:* `string`

---

##### `offerings`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListOfferings.property.offerings"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectOffering`](#aws-cdk-sdk.mediaconnect.MediaConnectOffering)[]

---


### MediaConnectResponsesListReservations <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListReservations"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListReservations.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesListReservations(__scope: Construct, __resources: string[], __input: MediaConnectListReservationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListReservations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListReservations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListReservations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectListReservationsRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectListReservationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListReservations.property.nextToken"></a>

- *Type:* `string`

---

##### `reservations`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListReservations.property.reservations"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectReservation`](#aws-cdk-sdk.mediaconnect.MediaConnectReservation)[]

---


### MediaConnectResponsesListTagsForResource <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListTagsForResource.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: MediaConnectListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectListTagsForResourceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaConnectResponsesPurchaseOffering <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOffering"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOffering.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesPurchaseOffering(__scope: Construct, __resources: string[], __input: MediaConnectPurchaseOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOffering.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOffering.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOffering.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectPurchaseOfferingRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectPurchaseOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `reservation`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOffering.property.reservation"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation)

---


### MediaConnectResponsesPurchaseOfferingReservation <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesPurchaseOfferingReservation(__scope: Construct, __resources: string[], __input: MediaConnectPurchaseOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectPurchaseOfferingRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectPurchaseOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `currencyCode`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.property.duration"></a>

- *Type:* `number`

---

##### `durationUnits`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.property.durationUnits"></a>

- *Type:* `string`

---

##### `end`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.property.end"></a>

- *Type:* `string`

---

##### `offeringArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.property.offeringArn"></a>

- *Type:* `string`

---

##### `offeringDescription`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.property.offeringDescription"></a>

- *Type:* `string`

---

##### `pricePerUnit`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.property.pricePerUnit"></a>

- *Type:* `string`

---

##### `priceUnits`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.property.priceUnits"></a>

- *Type:* `string`

---

##### `reservationArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.property.reservationArn"></a>

- *Type:* `string`

---

##### `reservationName`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.property.reservationName"></a>

- *Type:* `string`

---

##### `reservationState`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.property.reservationState"></a>

- *Type:* `string`

---

##### `resourceSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.property.resourceSpecification"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservationResourceSpecification`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservationResourceSpecification)

---

##### `start`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservation.property.start"></a>

- *Type:* `string`

---


### MediaConnectResponsesPurchaseOfferingReservationResourceSpecification <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservationResourceSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservationResourceSpecification.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesPurchaseOfferingReservationResourceSpecification(__scope: Construct, __resources: string[], __input: MediaConnectPurchaseOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservationResourceSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservationResourceSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservationResourceSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectPurchaseOfferingRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectPurchaseOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `reservedBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservationResourceSpecification.property.reservedBitrate"></a>

- *Type:* `number`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesPurchaseOfferingReservationResourceSpecification.property.resourceType"></a>

- *Type:* `string`

---


### MediaConnectResponsesRemoveFlowOutput <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowOutput"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowOutput.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesRemoveFlowOutput(__scope: Construct, __resources: string[], __input: MediaConnectRemoveFlowOutputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowOutput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowOutput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowOutput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowOutputRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowOutputRequest)

---



#### Properties <a name="Properties"></a>

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowOutput.property.flowArn"></a>

- *Type:* `string`

---

##### `outputArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowOutput.property.outputArn"></a>

- *Type:* `string`

---


### MediaConnectResponsesRemoveFlowSource <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowSource"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowSource.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesRemoveFlowSource(__scope: Construct, __resources: string[], __input: MediaConnectRemoveFlowSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowSourceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowSource.property.flowArn"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowSource.property.sourceArn"></a>

- *Type:* `string`

---


### MediaConnectResponsesRemoveFlowVpcInterface <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowVpcInterface"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowVpcInterface.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesRemoveFlowVpcInterface(__scope: Construct, __resources: string[], __input: MediaConnectRemoveFlowVpcInterfaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowVpcInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowVpcInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowVpcInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowVpcInterfaceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectRemoveFlowVpcInterfaceRequest)

---



#### Properties <a name="Properties"></a>

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowVpcInterface.property.flowArn"></a>

- *Type:* `string`

---

##### `nonDeletedNetworkInterfaceIds`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowVpcInterface.property.nonDeletedNetworkInterfaceIds"></a>

- *Type:* `string`[]

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRemoveFlowVpcInterface.property.vpcInterfaceName"></a>

- *Type:* `string`

---


### MediaConnectResponsesRevokeFlowEntitlement <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRevokeFlowEntitlement"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRevokeFlowEntitlement.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesRevokeFlowEntitlement(__scope: Construct, __resources: string[], __input: MediaConnectRevokeFlowEntitlementRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRevokeFlowEntitlement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRevokeFlowEntitlement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRevokeFlowEntitlement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectRevokeFlowEntitlementRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectRevokeFlowEntitlementRequest)

---



#### Properties <a name="Properties"></a>

##### `entitlementArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRevokeFlowEntitlement.property.entitlementArn"></a>

- *Type:* `string`

---

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesRevokeFlowEntitlement.property.flowArn"></a>

- *Type:* `string`

---


### MediaConnectResponsesStartFlow <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesStartFlow"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesStartFlow.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesStartFlow(__scope: Construct, __resources: string[], __input: MediaConnectStartFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesStartFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesStartFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesStartFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectStartFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectStartFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesStartFlow.property.flowArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesStartFlow.property.status"></a>

- *Type:* `string`

---


### MediaConnectResponsesStopFlow <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesStopFlow"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesStopFlow.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesStopFlow(__scope: Construct, __resources: string[], __input: MediaConnectStopFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesStopFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesStopFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesStopFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectStopFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectStopFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesStopFlow.property.flowArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesStopFlow.property.status"></a>

- *Type:* `string`

---


### MediaConnectResponsesUpdateFlow <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlow"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlow.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlow(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `flow`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlow.property.flow"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow)

---


### MediaConnectResponsesUpdateFlowEntitlement <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlement"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlement.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowEntitlement(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowEntitlementRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementRequest)

---



#### Properties <a name="Properties"></a>

##### `entitlement`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlement.property.entitlement"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlement`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlement)

---

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlement.property.flowArn"></a>

- *Type:* `string`

---


### MediaConnectResponsesUpdateFlowEntitlementEntitlement <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlement"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlement.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlement(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowEntitlementRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlement.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlement.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlement.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementRequest)

---



#### Properties <a name="Properties"></a>

##### `dataTransferSubscriberFeePercent`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlement.property.dataTransferSubscriberFeePercent"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlement.property.description"></a>

- *Type:* `string`

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlement.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption)

---

##### `entitlementArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlement.property.entitlementArn"></a>

- *Type:* `string`

---

##### `entitlementStatus`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlement.property.entitlementStatus"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlement.property.name"></a>

- *Type:* `string`

---

##### `subscribers`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlement.property.subscribers"></a>

- *Type:* `string`[]

---


### MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowEntitlementRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowEntitlementRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithm`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption.property.algorithm"></a>

- *Type:* `string`

---

##### `constantInitializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption.property.constantInitializationVector"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption.property.deviceId"></a>

- *Type:* `string`

---

##### `keyType`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption.property.keyType"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption.property.region"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption.property.roleArn"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption.property.secretArn"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption.property.url"></a>

- *Type:* `string`

---


### MediaConnectResponsesUpdateFlowFlow <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowFlow(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.property.availabilityZone"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.property.description"></a>

- *Type:* `string`

---

##### `egressIp`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.property.egressIp"></a>

- *Type:* `string`

---

##### `entitlements`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.property.entitlements"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectEntitlement`](#aws-cdk-sdk.mediaconnect.MediaConnectEntitlement)[]

---

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.property.flowArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.property.name"></a>

- *Type:* `string`

---

##### `outputs`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectOutput`](#aws-cdk-sdk.mediaconnect.MediaConnectOutput)[]

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.property.source"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource)

---

##### `sourceFailoverConfig`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.property.sourceFailoverConfig"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceFailoverConfig`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceFailoverConfig)

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.property.sources"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectSource`](#aws-cdk-sdk.mediaconnect.MediaConnectSource)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.property.status"></a>

- *Type:* `string`

---

##### `vpcInterfaces`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlow.property.vpcInterfaces"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface`](#aws-cdk-sdk.mediaconnect.MediaConnectVpcInterface)[]

---


### MediaConnectResponsesUpdateFlowFlowSource <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowFlowSource(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `dataTransferSubscriberFeePercent`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource.property.dataTransferSubscriberFeePercent"></a>

- *Type:* `number`

---

##### `decryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource.property.decryption"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource.property.description"></a>

- *Type:* `string`

---

##### `entitlementArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource.property.entitlementArn"></a>

- *Type:* `string`

---

##### `ingestIp`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource.property.ingestIp"></a>

- *Type:* `string`

---

##### `ingestPort`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource.property.ingestPort"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource.property.name"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource.property.sourceArn"></a>

- *Type:* `string`

---

##### `transport`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource.property.transport"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceTransport`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceTransport)

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource.property.vpcInterfaceName"></a>

- *Type:* `string`

---

##### `whitelistCidr`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSource.property.whitelistCidr"></a>

- *Type:* `string`

---


### MediaConnectResponsesUpdateFlowFlowSourceDecryption <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithm`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption.property.algorithm"></a>

- *Type:* `string`

---

##### `constantInitializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption.property.constantInitializationVector"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption.property.deviceId"></a>

- *Type:* `string`

---

##### `keyType`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption.property.keyType"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption.property.region"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption.property.roleArn"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption.property.secretArn"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceDecryption.property.url"></a>

- *Type:* `string`

---


### MediaConnectResponsesUpdateFlowFlowSourceFailoverConfig <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceFailoverConfig"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceFailoverConfig.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceFailoverConfig(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceFailoverConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceFailoverConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceFailoverConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `recoveryWindow`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceFailoverConfig.property.recoveryWindow"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceFailoverConfig.property.state"></a>

- *Type:* `string`

---


### MediaConnectResponsesUpdateFlowFlowSourceTransport <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceTransport"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceTransport.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceTransport(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceTransport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceTransport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceTransport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowRequest)

---



#### Properties <a name="Properties"></a>

##### `cidrAllowList`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceTransport.property.cidrAllowList"></a>

- *Type:* `string`[]

---

##### `maxBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceTransport.property.maxBitrate"></a>

- *Type:* `number`

---

##### `maxLatency`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceTransport.property.maxLatency"></a>

- *Type:* `number`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceTransport.property.protocol"></a>

- *Type:* `string`

---

##### `remoteId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceTransport.property.remoteId"></a>

- *Type:* `string`

---

##### `smoothingLatency`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceTransport.property.smoothingLatency"></a>

- *Type:* `number`

---

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowFlowSourceTransport.property.streamId"></a>

- *Type:* `string`

---


### MediaConnectResponsesUpdateFlowOutput <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutput"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutput.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowOutput(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowOutputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest)

---



#### Properties <a name="Properties"></a>

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutput.property.flowArn"></a>

- *Type:* `string`

---

##### `output`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutput.property.output"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput)

---


### MediaConnectResponsesUpdateFlowOutputOutput <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowOutputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest)

---



#### Properties <a name="Properties"></a>

##### `dataTransferSubscriberFeePercent`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput.property.dataTransferSubscriberFeePercent"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput.property.description"></a>

- *Type:* `string`

---

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput.property.destination"></a>

- *Type:* `string`

---

##### `encryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput.property.encryption"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption)

---

##### `entitlementArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput.property.entitlementArn"></a>

- *Type:* `string`

---

##### `mediaLiveInputArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput.property.mediaLiveInputArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput.property.name"></a>

- *Type:* `string`

---

##### `outputArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput.property.outputArn"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput.property.port"></a>

- *Type:* `number`

---

##### `transport`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput.property.transport"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputTransport`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputTransport)

---

##### `vpcInterfaceAttachment`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutput.property.vpcInterfaceAttachment"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputVpcInterfaceAttachment`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputVpcInterfaceAttachment)

---


### MediaConnectResponsesUpdateFlowOutputOutputEncryption <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowOutputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithm`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption.property.algorithm"></a>

- *Type:* `string`

---

##### `constantInitializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption.property.constantInitializationVector"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption.property.deviceId"></a>

- *Type:* `string`

---

##### `keyType`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption.property.keyType"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption.property.region"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption.property.roleArn"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption.property.secretArn"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputEncryption.property.url"></a>

- *Type:* `string`

---


### MediaConnectResponsesUpdateFlowOutputOutputTransport <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputTransport"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputTransport.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputTransport(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowOutputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputTransport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputTransport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputTransport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest)

---



#### Properties <a name="Properties"></a>

##### `cidrAllowList`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputTransport.property.cidrAllowList"></a>

- *Type:* `string`[]

---

##### `maxBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputTransport.property.maxBitrate"></a>

- *Type:* `number`

---

##### `maxLatency`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputTransport.property.maxLatency"></a>

- *Type:* `number`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputTransport.property.protocol"></a>

- *Type:* `string`

---

##### `remoteId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputTransport.property.remoteId"></a>

- *Type:* `string`

---

##### `smoothingLatency`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputTransport.property.smoothingLatency"></a>

- *Type:* `number`

---

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputTransport.property.streamId"></a>

- *Type:* `string`

---


### MediaConnectResponsesUpdateFlowOutputOutputVpcInterfaceAttachment <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputVpcInterfaceAttachment"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputVpcInterfaceAttachment.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputVpcInterfaceAttachment(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowOutputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputVpcInterfaceAttachment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputVpcInterfaceAttachment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputVpcInterfaceAttachment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowOutputRequest)

---



#### Properties <a name="Properties"></a>

##### `vpcInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowOutputOutputVpcInterfaceAttachment.property.vpcInterfaceName"></a>

- *Type:* `string`

---


### MediaConnectResponsesUpdateFlowSource <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSource"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSource.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowSource(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `flowArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSource.property.flowArn"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSource.property.source"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource)

---


### MediaConnectResponsesUpdateFlowSourceSource <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowSourceSource(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `dataTransferSubscriberFeePercent`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource.property.dataTransferSubscriberFeePercent"></a>

- *Type:* `number`

---

##### `decryption`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource.property.decryption"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource.property.description"></a>

- *Type:* `string`

---

##### `entitlementArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource.property.entitlementArn"></a>

- *Type:* `string`

---

##### `ingestIp`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource.property.ingestIp"></a>

- *Type:* `string`

---

##### `ingestPort`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource.property.ingestPort"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource.property.name"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource.property.sourceArn"></a>

- *Type:* `string`

---

##### `transport`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource.property.transport"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceTransport`](#aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceTransport)

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource.property.vpcInterfaceName"></a>

- *Type:* `string`

---

##### `whitelistCidr`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSource.property.whitelistCidr"></a>

- *Type:* `string`

---


### MediaConnectResponsesUpdateFlowSourceSourceDecryption <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `algorithm`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption.property.algorithm"></a>

- *Type:* `string`

---

##### `constantInitializationVector`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption.property.constantInitializationVector"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption.property.deviceId"></a>

- *Type:* `string`

---

##### `keyType`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption.property.keyType"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption.property.region"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption.property.resourceId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption.property.roleArn"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption.property.secretArn"></a>

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceDecryption.property.url"></a>

- *Type:* `string`

---


### MediaConnectResponsesUpdateFlowSourceSourceTransport <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceTransport"></a>

#### Initializer <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceTransport.Initializer"></a>

```typescript
import { mediaconnect } from 'aws-cdk-sdk'

new mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceTransport(__scope: Construct, __resources: string[], __input: MediaConnectUpdateFlowSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceTransport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceTransport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceTransport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest`](#aws-cdk-sdk.mediaconnect.MediaConnectUpdateFlowSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `cidrAllowList`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceTransport.property.cidrAllowList"></a>

- *Type:* `string`[]

---

##### `maxBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceTransport.property.maxBitrate"></a>

- *Type:* `number`

---

##### `maxLatency`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceTransport.property.maxLatency"></a>

- *Type:* `number`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceTransport.property.protocol"></a>

- *Type:* `string`

---

##### `remoteId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceTransport.property.remoteId"></a>

- *Type:* `string`

---

##### `smoothingLatency`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceTransport.property.smoothingLatency"></a>

- *Type:* `number`

---

##### `streamId`<sup>Required</sup> <a name="aws-cdk-sdk.mediaconnect.MediaConnectResponsesUpdateFlowSourceSourceTransport.property.streamId"></a>

- *Type:* `string`

---



