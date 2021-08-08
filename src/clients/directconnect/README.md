# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DirectConnectClient <a name="aws-cdk-sdk.directconnect.DirectConnectClient"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectClient.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acceptDirectConnectGatewayAssociationProposal` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.acceptDirectConnectGatewayAssociationProposal"></a>

```typescript
public acceptDirectConnectGatewayAssociationProposal(input: DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest`](#aws-cdk-sdk.directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest)

---

##### `allocateConnectionOnInterconnect` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.allocateConnectionOnInterconnect"></a>

```typescript
public allocateConnectionOnInterconnect(input: DirectConnectAllocateConnectionOnInterconnectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAllocateConnectionOnInterconnectRequest`](#aws-cdk-sdk.directconnect.DirectConnectAllocateConnectionOnInterconnectRequest)

---

##### `allocateHostedConnection` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.allocateHostedConnection"></a>

```typescript
public allocateHostedConnection(input: DirectConnectAllocateHostedConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAllocateHostedConnectionRequest`](#aws-cdk-sdk.directconnect.DirectConnectAllocateHostedConnectionRequest)

---

##### `allocatePrivateVirtualInterface` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.allocatePrivateVirtualInterface"></a>

```typescript
public allocatePrivateVirtualInterface(input: DirectConnectAllocatePrivateVirtualInterfaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAllocatePrivateVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectAllocatePrivateVirtualInterfaceRequest)

---

##### `allocatePublicVirtualInterface` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.allocatePublicVirtualInterface"></a>

```typescript
public allocatePublicVirtualInterface(input: DirectConnectAllocatePublicVirtualInterfaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAllocatePublicVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectAllocatePublicVirtualInterfaceRequest)

---

##### `allocateTransitVirtualInterface` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.allocateTransitVirtualInterface"></a>

```typescript
public allocateTransitVirtualInterface(input: DirectConnectAllocateTransitVirtualInterfaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAllocateTransitVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectAllocateTransitVirtualInterfaceRequest)

---

##### `associateConnectionWithLag` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.associateConnectionWithLag"></a>

```typescript
public associateConnectionWithLag(input: DirectConnectAssociateConnectionWithLagRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAssociateConnectionWithLagRequest`](#aws-cdk-sdk.directconnect.DirectConnectAssociateConnectionWithLagRequest)

---

##### `associateHostedConnection` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.associateHostedConnection"></a>

```typescript
public associateHostedConnection(input: DirectConnectAssociateHostedConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAssociateHostedConnectionRequest`](#aws-cdk-sdk.directconnect.DirectConnectAssociateHostedConnectionRequest)

---

##### `associateVirtualInterface` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.associateVirtualInterface"></a>

```typescript
public associateVirtualInterface(input: DirectConnectAssociateVirtualInterfaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAssociateVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectAssociateVirtualInterfaceRequest)

---

##### `confirmConnection` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.confirmConnection"></a>

```typescript
public confirmConnection(input: DirectConnectConfirmConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConfirmConnectionRequest`](#aws-cdk-sdk.directconnect.DirectConnectConfirmConnectionRequest)

---

##### `confirmPrivateVirtualInterface` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.confirmPrivateVirtualInterface"></a>

```typescript
public confirmPrivateVirtualInterface(input: DirectConnectConfirmPrivateVirtualInterfaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConfirmPrivateVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectConfirmPrivateVirtualInterfaceRequest)

---

##### `confirmPublicVirtualInterface` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.confirmPublicVirtualInterface"></a>

```typescript
public confirmPublicVirtualInterface(input: DirectConnectConfirmPublicVirtualInterfaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConfirmPublicVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectConfirmPublicVirtualInterfaceRequest)

---

##### `confirmTransitVirtualInterface` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.confirmTransitVirtualInterface"></a>

```typescript
public confirmTransitVirtualInterface(input: DirectConnectConfirmTransitVirtualInterfaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConfirmTransitVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectConfirmTransitVirtualInterfaceRequest)

---

##### `createBgpPeer` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.createBgpPeer"></a>

```typescript
public createBgpPeer(input: DirectConnectCreateBgpPeerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateBgpPeerRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateBgpPeerRequest)

---

##### `createConnection` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.createConnection"></a>

```typescript
public createConnection(input: DirectConnectCreateConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateConnectionRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateConnectionRequest)

---

##### `createDirectConnectGateway` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.createDirectConnectGateway"></a>

```typescript
public createDirectConnectGateway(input: DirectConnectCreateDirectConnectGatewayRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayRequest)

---

##### `createDirectConnectGatewayAssociation` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.createDirectConnectGatewayAssociation"></a>

```typescript
public createDirectConnectGatewayAssociation(input: DirectConnectCreateDirectConnectGatewayAssociationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationRequest)

---

##### `createDirectConnectGatewayAssociationProposal` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.createDirectConnectGatewayAssociationProposal"></a>

```typescript
public createDirectConnectGatewayAssociationProposal(input: DirectConnectCreateDirectConnectGatewayAssociationProposalRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest)

---

##### `createInterconnect` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.createInterconnect"></a>

```typescript
public createInterconnect(input: DirectConnectCreateInterconnectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateInterconnectRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateInterconnectRequest)

---

##### `createLag` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.createLag"></a>

```typescript
public createLag(input: DirectConnectCreateLagRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateLagRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateLagRequest)

---

##### `createPrivateVirtualInterface` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.createPrivateVirtualInterface"></a>

```typescript
public createPrivateVirtualInterface(input: DirectConnectCreatePrivateVirtualInterfaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreatePrivateVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreatePrivateVirtualInterfaceRequest)

---

##### `createPublicVirtualInterface` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.createPublicVirtualInterface"></a>

```typescript
public createPublicVirtualInterface(input: DirectConnectCreatePublicVirtualInterfaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreatePublicVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreatePublicVirtualInterfaceRequest)

---

##### `createTransitVirtualInterface` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.createTransitVirtualInterface"></a>

```typescript
public createTransitVirtualInterface(input: DirectConnectCreateTransitVirtualInterfaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateTransitVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateTransitVirtualInterfaceRequest)

---

##### `deleteBgpPeer` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.deleteBgpPeer"></a>

```typescript
public deleteBgpPeer(input: DirectConnectDeleteBgpPeerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteBgpPeerRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteBgpPeerRequest)

---

##### `deleteConnection` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.deleteConnection"></a>

```typescript
public deleteConnection(input: DirectConnectDeleteConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteConnectionRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteConnectionRequest)

---

##### `deleteDirectConnectGateway` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.deleteDirectConnectGateway"></a>

```typescript
public deleteDirectConnectGateway(input: DirectConnectDeleteDirectConnectGatewayRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayRequest)

---

##### `deleteDirectConnectGatewayAssociation` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.deleteDirectConnectGatewayAssociation"></a>

```typescript
public deleteDirectConnectGatewayAssociation(input: DirectConnectDeleteDirectConnectGatewayAssociationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationRequest)

---

##### `deleteDirectConnectGatewayAssociationProposal` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.deleteDirectConnectGatewayAssociationProposal"></a>

```typescript
public deleteDirectConnectGatewayAssociationProposal(input: DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest)

---

##### `deleteInterconnect` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.deleteInterconnect"></a>

```typescript
public deleteInterconnect(input: DirectConnectDeleteInterconnectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteInterconnectRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteInterconnectRequest)

---

##### `deleteLag` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.deleteLag"></a>

```typescript
public deleteLag(input: DirectConnectDeleteLagRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteLagRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteLagRequest)

---

##### `deleteVirtualInterface` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.deleteVirtualInterface"></a>

```typescript
public deleteVirtualInterface(input: DirectConnectDeleteVirtualInterfaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteVirtualInterfaceRequest)

---

##### `describeConnectionLoa` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeConnectionLoa"></a>

```typescript
public describeConnectionLoa(input: DirectConnectDescribeConnectionLoaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionLoaRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionLoaRequest)

---

##### `describeConnections` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeConnections"></a>

```typescript
public describeConnections(input: DirectConnectDescribeConnectionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionsRequest)

---

##### `describeConnectionsOnInterconnect` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeConnectionsOnInterconnect"></a>

```typescript
public describeConnectionsOnInterconnect(input: DirectConnectDescribeConnectionsOnInterconnectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionsOnInterconnectRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionsOnInterconnectRequest)

---

##### `describeDirectConnectGatewayAssociationProposals` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeDirectConnectGatewayAssociationProposals"></a>

```typescript
public describeDirectConnectGatewayAssociationProposals(input: DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest)

---

##### `describeDirectConnectGatewayAssociations` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeDirectConnectGatewayAssociations"></a>

```typescript
public describeDirectConnectGatewayAssociations(input: DirectConnectDescribeDirectConnectGatewayAssociationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsRequest)

---

##### `describeDirectConnectGatewayAttachments` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeDirectConnectGatewayAttachments"></a>

```typescript
public describeDirectConnectGatewayAttachments(input: DirectConnectDescribeDirectConnectGatewayAttachmentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAttachmentsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAttachmentsRequest)

---

##### `describeDirectConnectGateways` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeDirectConnectGateways"></a>

```typescript
public describeDirectConnectGateways(input: DirectConnectDescribeDirectConnectGatewaysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewaysRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewaysRequest)

---

##### `describeHostedConnections` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeHostedConnections"></a>

```typescript
public describeHostedConnections(input: DirectConnectDescribeHostedConnectionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeHostedConnectionsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeHostedConnectionsRequest)

---

##### `describeInterconnectLoa` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeInterconnectLoa"></a>

```typescript
public describeInterconnectLoa(input: DirectConnectDescribeInterconnectLoaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectLoaRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectLoaRequest)

---

##### `describeInterconnects` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeInterconnects"></a>

```typescript
public describeInterconnects(input: DirectConnectDescribeInterconnectsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectsRequest)

---

##### `describeLags` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeLags"></a>

```typescript
public describeLags(input: DirectConnectDescribeLagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeLagsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeLagsRequest)

---

##### `describeLoa` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeLoa"></a>

```typescript
public describeLoa(input: DirectConnectDescribeLoaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeLoaRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeLoaRequest)

---

##### `describeLocations` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeLocations"></a>

```typescript
public describeLocations()
```

##### `describeTags` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeTags"></a>

```typescript
public describeTags(input: DirectConnectDescribeTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeTagsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeTagsRequest)

---

##### `describeVirtualGateways` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeVirtualGateways"></a>

```typescript
public describeVirtualGateways()
```

##### `describeVirtualInterfaces` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.describeVirtualInterfaces"></a>

```typescript
public describeVirtualInterfaces(input: DirectConnectDescribeVirtualInterfacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeVirtualInterfacesRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeVirtualInterfacesRequest)

---

##### `disassociateConnectionFromLag` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.disassociateConnectionFromLag"></a>

```typescript
public disassociateConnectionFromLag(input: DirectConnectDisassociateConnectionFromLagRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDisassociateConnectionFromLagRequest`](#aws-cdk-sdk.directconnect.DirectConnectDisassociateConnectionFromLagRequest)

---

##### `listVirtualInterfaceTestHistory` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.listVirtualInterfaceTestHistory"></a>

```typescript
public listVirtualInterfaceTestHistory(input: DirectConnectListVirtualInterfaceTestHistoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectListVirtualInterfaceTestHistoryRequest`](#aws-cdk-sdk.directconnect.DirectConnectListVirtualInterfaceTestHistoryRequest)

---

##### `startBgpFailoverTest` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.startBgpFailoverTest"></a>

```typescript
public startBgpFailoverTest(input: DirectConnectStartBgpFailoverTestRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectStartBgpFailoverTestRequest`](#aws-cdk-sdk.directconnect.DirectConnectStartBgpFailoverTestRequest)

---

##### `stopBgpFailoverTest` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.stopBgpFailoverTest"></a>

```typescript
public stopBgpFailoverTest(input: DirectConnectStopBgpFailoverTestRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectStopBgpFailoverTestRequest`](#aws-cdk-sdk.directconnect.DirectConnectStopBgpFailoverTestRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.tagResource"></a>

```typescript
public tagResource(input: DirectConnectTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTagResourceRequest`](#aws-cdk-sdk.directconnect.DirectConnectTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.untagResource"></a>

```typescript
public untagResource(input: DirectConnectUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectUntagResourceRequest`](#aws-cdk-sdk.directconnect.DirectConnectUntagResourceRequest)

---

##### `updateDirectConnectGatewayAssociation` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.updateDirectConnectGatewayAssociation"></a>

```typescript
public updateDirectConnectGatewayAssociation(input: DirectConnectUpdateDirectConnectGatewayAssociationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectUpdateDirectConnectGatewayAssociationRequest`](#aws-cdk-sdk.directconnect.DirectConnectUpdateDirectConnectGatewayAssociationRequest)

---

##### `updateLag` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.updateLag"></a>

```typescript
public updateLag(input: DirectConnectUpdateLagRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectUpdateLagRequest`](#aws-cdk-sdk.directconnect.DirectConnectUpdateLagRequest)

---

##### `updateVirtualInterfaceAttributes` <a name="aws-cdk-sdk.directconnect.DirectConnectClient.updateVirtualInterfaceAttributes"></a>

```typescript
public updateVirtualInterfaceAttributes(input: DirectConnectUpdateVirtualInterfaceAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectUpdateVirtualInterfaceAttributesRequest`](#aws-cdk-sdk.directconnect.DirectConnectUpdateVirtualInterfaceAttributesRequest)

---




## Structs <a name="Structs"></a>

### DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest <a name="aws-cdk-sdk.directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectAcceptDirectConnectGatewayAssociationProposalRequest: directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest = { ... }
```

##### `associatedGatewayOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest.property.associatedGatewayOwnerAccount"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `proposalId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest.property.proposalId"></a>

- *Type:* `string`

---

##### `overrideAllowedPrefixesToDirectConnectGateway`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest.property.overrideAllowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

### DirectConnectAcceptDirectConnectGatewayAssociationProposalResult <a name="aws-cdk-sdk.directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectAcceptDirectConnectGatewayAssociationProposalResult: directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalResult = { ... }
```

##### `directConnectGatewayAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalResult.property.directConnectGatewayAssociation"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation)

---

### DirectConnectAllocateConnectionOnInterconnectRequest <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateConnectionOnInterconnectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectAllocateConnectionOnInterconnectRequest: directconnect.DirectConnectAllocateConnectionOnInterconnectRequest = { ... }
```

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateConnectionOnInterconnectRequest.property.bandwidth"></a>

- *Type:* `string`

---

##### `connectionName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateConnectionOnInterconnectRequest.property.connectionName"></a>

- *Type:* `string`

---

##### `interconnectId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateConnectionOnInterconnectRequest.property.interconnectId"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateConnectionOnInterconnectRequest.property.ownerAccount"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateConnectionOnInterconnectRequest.property.vlan"></a>

- *Type:* `number`

---

### DirectConnectAllocateHostedConnectionRequest <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateHostedConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectAllocateHostedConnectionRequest: directconnect.DirectConnectAllocateHostedConnectionRequest = { ... }
```

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateHostedConnectionRequest.property.bandwidth"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateHostedConnectionRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateHostedConnectionRequest.property.connectionName"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateHostedConnectionRequest.property.ownerAccount"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateHostedConnectionRequest.property.vlan"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateHostedConnectionRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

### DirectConnectAllocatePrivateVirtualInterfaceRequest <a name="aws-cdk-sdk.directconnect.DirectConnectAllocatePrivateVirtualInterfaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectAllocatePrivateVirtualInterfaceRequest: directconnect.DirectConnectAllocatePrivateVirtualInterfaceRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocatePrivateVirtualInterfaceRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `newPrivateVirtualInterfaceAllocation`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocatePrivateVirtualInterfaceRequest.property.newPrivateVirtualInterfaceAllocation"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterfaceAllocation`](#aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterfaceAllocation)

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocatePrivateVirtualInterfaceRequest.property.ownerAccount"></a>

- *Type:* `string`

---

### DirectConnectAllocatePublicVirtualInterfaceRequest <a name="aws-cdk-sdk.directconnect.DirectConnectAllocatePublicVirtualInterfaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectAllocatePublicVirtualInterfaceRequest: directconnect.DirectConnectAllocatePublicVirtualInterfaceRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocatePublicVirtualInterfaceRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `newPublicVirtualInterfaceAllocation`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocatePublicVirtualInterfaceRequest.property.newPublicVirtualInterfaceAllocation"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterfaceAllocation`](#aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterfaceAllocation)

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocatePublicVirtualInterfaceRequest.property.ownerAccount"></a>

- *Type:* `string`

---

### DirectConnectAllocateTransitVirtualInterfaceRequest <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateTransitVirtualInterfaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectAllocateTransitVirtualInterfaceRequest: directconnect.DirectConnectAllocateTransitVirtualInterfaceRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateTransitVirtualInterfaceRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `newTransitVirtualInterfaceAllocation`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateTransitVirtualInterfaceRequest.property.newTransitVirtualInterfaceAllocation"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterfaceAllocation`](#aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterfaceAllocation)

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateTransitVirtualInterfaceRequest.property.ownerAccount"></a>

- *Type:* `string`

---

### DirectConnectAllocateTransitVirtualInterfaceResult <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateTransitVirtualInterfaceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectAllocateTransitVirtualInterfaceResult: directconnect.DirectConnectAllocateTransitVirtualInterfaceResult = { ... }
```

##### `virtualInterface`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAllocateTransitVirtualInterfaceResult.property.virtualInterface"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectVirtualInterface`](#aws-cdk-sdk.directconnect.DirectConnectVirtualInterface)

---

### DirectConnectAssociateConnectionWithLagRequest <a name="aws-cdk-sdk.directconnect.DirectConnectAssociateConnectionWithLagRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectAssociateConnectionWithLagRequest: directconnect.DirectConnectAssociateConnectionWithLagRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAssociateConnectionWithLagRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `lagId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAssociateConnectionWithLagRequest.property.lagId"></a>

- *Type:* `string`

---

### DirectConnectAssociatedGateway <a name="aws-cdk-sdk.directconnect.DirectConnectAssociatedGateway"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectAssociatedGateway: directconnect.DirectConnectAssociatedGateway = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAssociatedGateway.property.id"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAssociatedGateway.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAssociatedGateway.property.region"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAssociatedGateway.property.type"></a>

- *Type:* `string`

---

### DirectConnectAssociateHostedConnectionRequest <a name="aws-cdk-sdk.directconnect.DirectConnectAssociateHostedConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectAssociateHostedConnectionRequest: directconnect.DirectConnectAssociateHostedConnectionRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAssociateHostedConnectionRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `parentConnectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAssociateHostedConnectionRequest.property.parentConnectionId"></a>

- *Type:* `string`

---

### DirectConnectAssociateVirtualInterfaceRequest <a name="aws-cdk-sdk.directconnect.DirectConnectAssociateVirtualInterfaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectAssociateVirtualInterfaceRequest: directconnect.DirectConnectAssociateVirtualInterfaceRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAssociateVirtualInterfaceRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectAssociateVirtualInterfaceRequest.property.virtualInterfaceId"></a>

- *Type:* `string`

---

### DirectConnectBgpPeer <a name="aws-cdk-sdk.directconnect.DirectConnectBgpPeer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectBgpPeer: directconnect.DirectConnectBgpPeer = { ... }
```

##### `addressFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectBgpPeer.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectBgpPeer.property.amazonAddress"></a>

- *Type:* `string`

---

##### `asn`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectBgpPeer.property.asn"></a>

- *Type:* `number`

---

##### `authKey`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectBgpPeer.property.authKey"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectBgpPeer.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bgpPeerId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectBgpPeer.property.bgpPeerId"></a>

- *Type:* `string`

---

##### `bgpPeerState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectBgpPeer.property.bgpPeerState"></a>

- *Type:* `string`

---

##### `bgpStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectBgpPeer.property.bgpStatus"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectBgpPeer.property.customerAddress"></a>

- *Type:* `string`

---

### DirectConnectConfirmConnectionRequest <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectConfirmConnectionRequest: directconnect.DirectConnectConfirmConnectionRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmConnectionRequest.property.connectionId"></a>

- *Type:* `string`

---

### DirectConnectConfirmConnectionResponse <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmConnectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectConfirmConnectionResponse: directconnect.DirectConnectConfirmConnectionResponse = { ... }
```

##### `connectionState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmConnectionResponse.property.connectionState"></a>

- *Type:* `string`

---

### DirectConnectConfirmPrivateVirtualInterfaceRequest <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmPrivateVirtualInterfaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectConfirmPrivateVirtualInterfaceRequest: directconnect.DirectConnectConfirmPrivateVirtualInterfaceRequest = { ... }
```

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmPrivateVirtualInterfaceRequest.property.virtualInterfaceId"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmPrivateVirtualInterfaceRequest.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `virtualGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmPrivateVirtualInterfaceRequest.property.virtualGatewayId"></a>

- *Type:* `string`

---

### DirectConnectConfirmPrivateVirtualInterfaceResponse <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmPrivateVirtualInterfaceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectConfirmPrivateVirtualInterfaceResponse: directconnect.DirectConnectConfirmPrivateVirtualInterfaceResponse = { ... }
```

##### `virtualInterfaceState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmPrivateVirtualInterfaceResponse.property.virtualInterfaceState"></a>

- *Type:* `string`

---

### DirectConnectConfirmPublicVirtualInterfaceRequest <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmPublicVirtualInterfaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectConfirmPublicVirtualInterfaceRequest: directconnect.DirectConnectConfirmPublicVirtualInterfaceRequest = { ... }
```

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmPublicVirtualInterfaceRequest.property.virtualInterfaceId"></a>

- *Type:* `string`

---

### DirectConnectConfirmPublicVirtualInterfaceResponse <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmPublicVirtualInterfaceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectConfirmPublicVirtualInterfaceResponse: directconnect.DirectConnectConfirmPublicVirtualInterfaceResponse = { ... }
```

##### `virtualInterfaceState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmPublicVirtualInterfaceResponse.property.virtualInterfaceState"></a>

- *Type:* `string`

---

### DirectConnectConfirmTransitVirtualInterfaceRequest <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmTransitVirtualInterfaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectConfirmTransitVirtualInterfaceRequest: directconnect.DirectConnectConfirmTransitVirtualInterfaceRequest = { ... }
```

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmTransitVirtualInterfaceRequest.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmTransitVirtualInterfaceRequest.property.virtualInterfaceId"></a>

- *Type:* `string`

---

### DirectConnectConfirmTransitVirtualInterfaceResponse <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmTransitVirtualInterfaceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectConfirmTransitVirtualInterfaceResponse: directconnect.DirectConnectConfirmTransitVirtualInterfaceResponse = { ... }
```

##### `virtualInterfaceState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConfirmTransitVirtualInterfaceResponse.property.virtualInterfaceState"></a>

- *Type:* `string`

---

### DirectConnectConnection <a name="aws-cdk-sdk.directconnect.DirectConnectConnection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectConnection: directconnect.DirectConnectConnection = { ... }
```

##### `awsDevice`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.awsDevice"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bandwidth`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.bandwidth"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.connectionName"></a>

- *Type:* `string`

---

##### `connectionState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.connectionState"></a>

- *Type:* `string`

---

##### `hasLogicalRedundancy`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.hasLogicalRedundancy"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `lagId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.lagId"></a>

- *Type:* `string`

---

##### `loaIssueTime`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.loaIssueTime"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.location"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.ownerAccount"></a>

- *Type:* `string`

---

##### `partnerName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.partnerName"></a>

- *Type:* `string`

---

##### `providerName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.providerName"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `vlan`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnection.property.vlan"></a>

- *Type:* `number`

---

### DirectConnectConnections <a name="aws-cdk-sdk.directconnect.DirectConnectConnections"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectConnections: directconnect.DirectConnectConnections = { ... }
```

##### `connections`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectConnections.property.connections"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConnection`](#aws-cdk-sdk.directconnect.DirectConnectConnection)[]

---

### DirectConnectCreateBgpPeerRequest <a name="aws-cdk-sdk.directconnect.DirectConnectCreateBgpPeerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectCreateBgpPeerRequest: directconnect.DirectConnectCreateBgpPeerRequest = { ... }
```

##### `newBGPPeer`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateBgpPeerRequest.property.newBGPPeer"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectNewBgpPeer`](#aws-cdk-sdk.directconnect.DirectConnectNewBgpPeer)

---

##### `virtualInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateBgpPeerRequest.property.virtualInterfaceId"></a>

- *Type:* `string`

---

### DirectConnectCreateBgpPeerResponse <a name="aws-cdk-sdk.directconnect.DirectConnectCreateBgpPeerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectCreateBgpPeerResponse: directconnect.DirectConnectCreateBgpPeerResponse = { ... }
```

##### `virtualInterface`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateBgpPeerResponse.property.virtualInterface"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectVirtualInterface`](#aws-cdk-sdk.directconnect.DirectConnectVirtualInterface)

---

### DirectConnectCreateConnectionRequest <a name="aws-cdk-sdk.directconnect.DirectConnectCreateConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectCreateConnectionRequest: directconnect.DirectConnectCreateConnectionRequest = { ... }
```

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateConnectionRequest.property.bandwidth"></a>

- *Type:* `string`

---

##### `connectionName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateConnectionRequest.property.connectionName"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateConnectionRequest.property.location"></a>

- *Type:* `string`

---

##### `lagId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateConnectionRequest.property.lagId"></a>

- *Type:* `string`

---

##### `providerName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateConnectionRequest.property.providerName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateConnectionRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

### DirectConnectCreateDirectConnectGatewayAssociationProposalRequest <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectCreateDirectConnectGatewayAssociationProposalRequest: directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest = { ... }
```

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `directConnectGatewayOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest.property.directConnectGatewayOwnerAccount"></a>

- *Type:* `string`

---

##### `gatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest.property.gatewayId"></a>

- *Type:* `string`

---

##### `addAllowedPrefixesToDirectConnectGateway`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest.property.addAllowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `removeAllowedPrefixesToDirectConnectGateway`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest.property.removeAllowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

### DirectConnectCreateDirectConnectGatewayAssociationProposalResult <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectCreateDirectConnectGatewayAssociationProposalResult: directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalResult = { ... }
```

##### `directConnectGatewayAssociationProposal`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalResult.property.directConnectGatewayAssociationProposal"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal)

---

### DirectConnectCreateDirectConnectGatewayAssociationRequest <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectCreateDirectConnectGatewayAssociationRequest: directconnect.DirectConnectCreateDirectConnectGatewayAssociationRequest = { ... }
```

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationRequest.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `addAllowedPrefixesToDirectConnectGateway`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationRequest.property.addAllowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `gatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationRequest.property.gatewayId"></a>

- *Type:* `string`

---

##### `virtualGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationRequest.property.virtualGatewayId"></a>

- *Type:* `string`

---

### DirectConnectCreateDirectConnectGatewayAssociationResult <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectCreateDirectConnectGatewayAssociationResult: directconnect.DirectConnectCreateDirectConnectGatewayAssociationResult = { ... }
```

##### `directConnectGatewayAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationResult.property.directConnectGatewayAssociation"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation)

---

### DirectConnectCreateDirectConnectGatewayRequest <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectCreateDirectConnectGatewayRequest: directconnect.DirectConnectCreateDirectConnectGatewayRequest = { ... }
```

##### `directConnectGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayRequest.property.directConnectGatewayName"></a>

- *Type:* `string`

---

##### `amazonSideAsn`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayRequest.property.amazonSideAsn"></a>

- *Type:* `number`

---

### DirectConnectCreateDirectConnectGatewayResult <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectCreateDirectConnectGatewayResult: directconnect.DirectConnectCreateDirectConnectGatewayResult = { ... }
```

##### `directConnectGateway`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayResult.property.directConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGateway`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGateway)

---

### DirectConnectCreateInterconnectRequest <a name="aws-cdk-sdk.directconnect.DirectConnectCreateInterconnectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectCreateInterconnectRequest: directconnect.DirectConnectCreateInterconnectRequest = { ... }
```

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateInterconnectRequest.property.bandwidth"></a>

- *Type:* `string`

---

##### `interconnectName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateInterconnectRequest.property.interconnectName"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateInterconnectRequest.property.location"></a>

- *Type:* `string`

---

##### `lagId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateInterconnectRequest.property.lagId"></a>

- *Type:* `string`

---

##### `providerName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateInterconnectRequest.property.providerName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateInterconnectRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

### DirectConnectCreateLagRequest <a name="aws-cdk-sdk.directconnect.DirectConnectCreateLagRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectCreateLagRequest: directconnect.DirectConnectCreateLagRequest = { ... }
```

##### `connectionsBandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateLagRequest.property.connectionsBandwidth"></a>

- *Type:* `string`

---

##### `lagName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateLagRequest.property.lagName"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateLagRequest.property.location"></a>

- *Type:* `string`

---

##### `numberOfConnections`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateLagRequest.property.numberOfConnections"></a>

- *Type:* `number`

---

##### `childConnectionTags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateLagRequest.property.childConnectionTags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `connectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateLagRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `providerName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateLagRequest.property.providerName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateLagRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

### DirectConnectCreatePrivateVirtualInterfaceRequest <a name="aws-cdk-sdk.directconnect.DirectConnectCreatePrivateVirtualInterfaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectCreatePrivateVirtualInterfaceRequest: directconnect.DirectConnectCreatePrivateVirtualInterfaceRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreatePrivateVirtualInterfaceRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `newPrivateVirtualInterface`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreatePrivateVirtualInterfaceRequest.property.newPrivateVirtualInterface"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterface`](#aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterface)

---

### DirectConnectCreatePublicVirtualInterfaceRequest <a name="aws-cdk-sdk.directconnect.DirectConnectCreatePublicVirtualInterfaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectCreatePublicVirtualInterfaceRequest: directconnect.DirectConnectCreatePublicVirtualInterfaceRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreatePublicVirtualInterfaceRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `newPublicVirtualInterface`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreatePublicVirtualInterfaceRequest.property.newPublicVirtualInterface"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterface`](#aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterface)

---

### DirectConnectCreateTransitVirtualInterfaceRequest <a name="aws-cdk-sdk.directconnect.DirectConnectCreateTransitVirtualInterfaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectCreateTransitVirtualInterfaceRequest: directconnect.DirectConnectCreateTransitVirtualInterfaceRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateTransitVirtualInterfaceRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `newTransitVirtualInterface`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateTransitVirtualInterfaceRequest.property.newTransitVirtualInterface"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterface`](#aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterface)

---

### DirectConnectCreateTransitVirtualInterfaceResult <a name="aws-cdk-sdk.directconnect.DirectConnectCreateTransitVirtualInterfaceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectCreateTransitVirtualInterfaceResult: directconnect.DirectConnectCreateTransitVirtualInterfaceResult = { ... }
```

##### `virtualInterface`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectCreateTransitVirtualInterfaceResult.property.virtualInterface"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectVirtualInterface`](#aws-cdk-sdk.directconnect.DirectConnectVirtualInterface)

---

### DirectConnectDeleteBgpPeerRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteBgpPeerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDeleteBgpPeerRequest: directconnect.DirectConnectDeleteBgpPeerRequest = { ... }
```

##### `asn`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteBgpPeerRequest.property.asn"></a>

- *Type:* `number`

---

##### `bgpPeerId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteBgpPeerRequest.property.bgpPeerId"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteBgpPeerRequest.property.customerAddress"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteBgpPeerRequest.property.virtualInterfaceId"></a>

- *Type:* `string`

---

### DirectConnectDeleteBgpPeerResponse <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteBgpPeerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDeleteBgpPeerResponse: directconnect.DirectConnectDeleteBgpPeerResponse = { ... }
```

##### `virtualInterface`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteBgpPeerResponse.property.virtualInterface"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectVirtualInterface`](#aws-cdk-sdk.directconnect.DirectConnectVirtualInterface)

---

### DirectConnectDeleteConnectionRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDeleteConnectionRequest: directconnect.DirectConnectDeleteConnectionRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteConnectionRequest.property.connectionId"></a>

- *Type:* `string`

---

### DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDeleteDirectConnectGatewayAssociationProposalRequest: directconnect.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest = { ... }
```

##### `proposalId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest.property.proposalId"></a>

- *Type:* `string`

---

### DirectConnectDeleteDirectConnectGatewayAssociationProposalResult <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationProposalResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDeleteDirectConnectGatewayAssociationProposalResult: directconnect.DirectConnectDeleteDirectConnectGatewayAssociationProposalResult = { ... }
```

##### `directConnectGatewayAssociationProposal`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationProposalResult.property.directConnectGatewayAssociationProposal"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal)

---

### DirectConnectDeleteDirectConnectGatewayAssociationRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDeleteDirectConnectGatewayAssociationRequest: directconnect.DirectConnectDeleteDirectConnectGatewayAssociationRequest = { ... }
```

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationRequest.property.associationId"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationRequest.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `virtualGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationRequest.property.virtualGatewayId"></a>

- *Type:* `string`

---

### DirectConnectDeleteDirectConnectGatewayAssociationResult <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDeleteDirectConnectGatewayAssociationResult: directconnect.DirectConnectDeleteDirectConnectGatewayAssociationResult = { ... }
```

##### `directConnectGatewayAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationResult.property.directConnectGatewayAssociation"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation)

---

### DirectConnectDeleteDirectConnectGatewayRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDeleteDirectConnectGatewayRequest: directconnect.DirectConnectDeleteDirectConnectGatewayRequest = { ... }
```

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayRequest.property.directConnectGatewayId"></a>

- *Type:* `string`

---

### DirectConnectDeleteDirectConnectGatewayResult <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDeleteDirectConnectGatewayResult: directconnect.DirectConnectDeleteDirectConnectGatewayResult = { ... }
```

##### `directConnectGateway`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayResult.property.directConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGateway`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGateway)

---

### DirectConnectDeleteInterconnectRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteInterconnectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDeleteInterconnectRequest: directconnect.DirectConnectDeleteInterconnectRequest = { ... }
```

##### `interconnectId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteInterconnectRequest.property.interconnectId"></a>

- *Type:* `string`

---

### DirectConnectDeleteInterconnectResponse <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteInterconnectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDeleteInterconnectResponse: directconnect.DirectConnectDeleteInterconnectResponse = { ... }
```

##### `interconnectState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteInterconnectResponse.property.interconnectState"></a>

- *Type:* `string`

---

### DirectConnectDeleteLagRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteLagRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDeleteLagRequest: directconnect.DirectConnectDeleteLagRequest = { ... }
```

##### `lagId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteLagRequest.property.lagId"></a>

- *Type:* `string`

---

### DirectConnectDeleteVirtualInterfaceRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteVirtualInterfaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDeleteVirtualInterfaceRequest: directconnect.DirectConnectDeleteVirtualInterfaceRequest = { ... }
```

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteVirtualInterfaceRequest.property.virtualInterfaceId"></a>

- *Type:* `string`

---

### DirectConnectDeleteVirtualInterfaceResponse <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteVirtualInterfaceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDeleteVirtualInterfaceResponse: directconnect.DirectConnectDeleteVirtualInterfaceResponse = { ... }
```

##### `virtualInterfaceState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDeleteVirtualInterfaceResponse.property.virtualInterfaceState"></a>

- *Type:* `string`

---

### DirectConnectDescribeConnectionLoaRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionLoaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeConnectionLoaRequest: directconnect.DirectConnectDescribeConnectionLoaRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionLoaRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `loaContentType`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionLoaRequest.property.loaContentType"></a>

- *Type:* `string`

---

##### `providerName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionLoaRequest.property.providerName"></a>

- *Type:* `string`

---

### DirectConnectDescribeConnectionLoaResponse <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionLoaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeConnectionLoaResponse: directconnect.DirectConnectDescribeConnectionLoaResponse = { ... }
```

##### `loa`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionLoaResponse.property.loa"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectLoa`](#aws-cdk-sdk.directconnect.DirectConnectLoa)

---

### DirectConnectDescribeConnectionsOnInterconnectRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionsOnInterconnectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeConnectionsOnInterconnectRequest: directconnect.DirectConnectDescribeConnectionsOnInterconnectRequest = { ... }
```

##### `interconnectId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionsOnInterconnectRequest.property.interconnectId"></a>

- *Type:* `string`

---

### DirectConnectDescribeConnectionsRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeConnectionsRequest: directconnect.DirectConnectDescribeConnectionsRequest = { ... }
```

##### `connectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionsRequest.property.connectionId"></a>

- *Type:* `string`

---

### DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeDirectConnectGatewayAssociationProposalsRequest: directconnect.DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest = { ... }
```

##### `associatedGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest.property.associatedGatewayId"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `proposalId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest.property.proposalId"></a>

- *Type:* `string`

---

### DirectConnectDescribeDirectConnectGatewayAssociationProposalsResult <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationProposalsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeDirectConnectGatewayAssociationProposalsResult: directconnect.DirectConnectDescribeDirectConnectGatewayAssociationProposalsResult = { ... }
```

##### `directConnectGatewayAssociationProposals`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationProposalsResult.property.directConnectGatewayAssociationProposals"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationProposalsResult.property.nextToken"></a>

- *Type:* `string`

---

### DirectConnectDescribeDirectConnectGatewayAssociationsRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeDirectConnectGatewayAssociationsRequest: directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsRequest = { ... }
```

##### `associatedGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsRequest.property.associatedGatewayId"></a>

- *Type:* `string`

---

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsRequest.property.associationId"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsRequest.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `virtualGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsRequest.property.virtualGatewayId"></a>

- *Type:* `string`

---

### DirectConnectDescribeDirectConnectGatewayAssociationsResult <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeDirectConnectGatewayAssociationsResult: directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsResult = { ... }
```

##### `directConnectGatewayAssociations`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsResult.property.directConnectGatewayAssociations"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsResult.property.nextToken"></a>

- *Type:* `string`

---

### DirectConnectDescribeDirectConnectGatewayAttachmentsRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAttachmentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeDirectConnectGatewayAttachmentsRequest: directconnect.DirectConnectDescribeDirectConnectGatewayAttachmentsRequest = { ... }
```

##### `directConnectGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAttachmentsRequest.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAttachmentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAttachmentsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAttachmentsRequest.property.virtualInterfaceId"></a>

- *Type:* `string`

---

### DirectConnectDescribeDirectConnectGatewayAttachmentsResult <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAttachmentsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeDirectConnectGatewayAttachmentsResult: directconnect.DirectConnectDescribeDirectConnectGatewayAttachmentsResult = { ... }
```

##### `directConnectGatewayAttachments`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAttachmentsResult.property.directConnectGatewayAttachments"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAttachment`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAttachment)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAttachmentsResult.property.nextToken"></a>

- *Type:* `string`

---

### DirectConnectDescribeDirectConnectGatewaysRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewaysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeDirectConnectGatewaysRequest: directconnect.DirectConnectDescribeDirectConnectGatewaysRequest = { ... }
```

##### `directConnectGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewaysRequest.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewaysRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewaysRequest.property.nextToken"></a>

- *Type:* `string`

---

### DirectConnectDescribeDirectConnectGatewaysResult <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewaysResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeDirectConnectGatewaysResult: directconnect.DirectConnectDescribeDirectConnectGatewaysResult = { ... }
```

##### `directConnectGateways`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewaysResult.property.directConnectGateways"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGateway`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGateway)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewaysResult.property.nextToken"></a>

- *Type:* `string`

---

### DirectConnectDescribeHostedConnectionsRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeHostedConnectionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeHostedConnectionsRequest: directconnect.DirectConnectDescribeHostedConnectionsRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeHostedConnectionsRequest.property.connectionId"></a>

- *Type:* `string`

---

### DirectConnectDescribeInterconnectLoaRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectLoaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeInterconnectLoaRequest: directconnect.DirectConnectDescribeInterconnectLoaRequest = { ... }
```

##### `interconnectId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectLoaRequest.property.interconnectId"></a>

- *Type:* `string`

---

##### `loaContentType`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectLoaRequest.property.loaContentType"></a>

- *Type:* `string`

---

##### `providerName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectLoaRequest.property.providerName"></a>

- *Type:* `string`

---

### DirectConnectDescribeInterconnectLoaResponse <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectLoaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeInterconnectLoaResponse: directconnect.DirectConnectDescribeInterconnectLoaResponse = { ... }
```

##### `loa`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectLoaResponse.property.loa"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectLoa`](#aws-cdk-sdk.directconnect.DirectConnectLoa)

---

### DirectConnectDescribeInterconnectsRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeInterconnectsRequest: directconnect.DirectConnectDescribeInterconnectsRequest = { ... }
```

##### `interconnectId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectsRequest.property.interconnectId"></a>

- *Type:* `string`

---

### DirectConnectDescribeLagsRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeLagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeLagsRequest: directconnect.DirectConnectDescribeLagsRequest = { ... }
```

##### `lagId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeLagsRequest.property.lagId"></a>

- *Type:* `string`

---

### DirectConnectDescribeLoaRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeLoaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeLoaRequest: directconnect.DirectConnectDescribeLoaRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeLoaRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `loaContentType`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeLoaRequest.property.loaContentType"></a>

- *Type:* `string`

---

##### `providerName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeLoaRequest.property.providerName"></a>

- *Type:* `string`

---

### DirectConnectDescribeTagsRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeTagsRequest: directconnect.DirectConnectDescribeTagsRequest = { ... }
```

##### `resourceArns`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeTagsRequest.property.resourceArns"></a>

- *Type:* `string`[]

---

### DirectConnectDescribeTagsResponse <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeTagsResponse: directconnect.DirectConnectDescribeTagsResponse = { ... }
```

##### `resourceTags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeTagsResponse.property.resourceTags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResourceTag`](#aws-cdk-sdk.directconnect.DirectConnectResourceTag)[]

---

### DirectConnectDescribeVirtualInterfacesRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeVirtualInterfacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDescribeVirtualInterfacesRequest: directconnect.DirectConnectDescribeVirtualInterfacesRequest = { ... }
```

##### `connectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeVirtualInterfacesRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDescribeVirtualInterfacesRequest.property.virtualInterfaceId"></a>

- *Type:* `string`

---

### DirectConnectDirectConnectGateway <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGateway"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDirectConnectGateway: directconnect.DirectConnectDirectConnectGateway = { ... }
```

##### `amazonSideAsn`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGateway.property.amazonSideAsn"></a>

- *Type:* `number`

---

##### `directConnectGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGateway.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `directConnectGatewayName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGateway.property.directConnectGatewayName"></a>

- *Type:* `string`

---

##### `directConnectGatewayState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGateway.property.directConnectGatewayState"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGateway.property.ownerAccount"></a>

- *Type:* `string`

---

##### `stateChangeError`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGateway.property.stateChangeError"></a>

- *Type:* `string`

---

### DirectConnectDirectConnectGatewayAssociation <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDirectConnectGatewayAssociation: directconnect.DirectConnectDirectConnectGatewayAssociation = { ... }
```

##### `allowedPrefixesToDirectConnectGateway`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `associatedGateway`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation.property.associatedGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAssociatedGateway`](#aws-cdk-sdk.directconnect.DirectConnectAssociatedGateway)

---

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation.property.associationId"></a>

- *Type:* `string`

---

##### `associationState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation.property.associationState"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `directConnectGatewayOwnerAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation.property.directConnectGatewayOwnerAccount"></a>

- *Type:* `string`

---

##### `stateChangeError`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation.property.stateChangeError"></a>

- *Type:* `string`

---

##### `virtualGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualGatewayOwnerAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation.property.virtualGatewayOwnerAccount"></a>

- *Type:* `string`

---

##### `virtualGatewayRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation.property.virtualGatewayRegion"></a>

- *Type:* `string`

---

### DirectConnectDirectConnectGatewayAssociationProposal <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDirectConnectGatewayAssociationProposal: directconnect.DirectConnectDirectConnectGatewayAssociationProposal = { ... }
```

##### `associatedGateway`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal.property.associatedGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAssociatedGateway`](#aws-cdk-sdk.directconnect.DirectConnectAssociatedGateway)

---

##### `directConnectGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `directConnectGatewayOwnerAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal.property.directConnectGatewayOwnerAccount"></a>

- *Type:* `string`

---

##### `existingAllowedPrefixesToDirectConnectGateway`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal.property.existingAllowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `proposalId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal.property.proposalId"></a>

- *Type:* `string`

---

##### `proposalState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal.property.proposalState"></a>

- *Type:* `string`

---

##### `requestedAllowedPrefixesToDirectConnectGateway`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal.property.requestedAllowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

### DirectConnectDirectConnectGatewayAttachment <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAttachment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDirectConnectGatewayAttachment: directconnect.DirectConnectDirectConnectGatewayAttachment = { ... }
```

##### `attachmentState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAttachment.property.attachmentState"></a>

- *Type:* `string`

---

##### `attachmentType`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAttachment.property.attachmentType"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAttachment.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `stateChangeError`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAttachment.property.stateChangeError"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAttachment.property.virtualInterfaceId"></a>

- *Type:* `string`

---

##### `virtualInterfaceOwnerAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAttachment.property.virtualInterfaceOwnerAccount"></a>

- *Type:* `string`

---

##### `virtualInterfaceRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAttachment.property.virtualInterfaceRegion"></a>

- *Type:* `string`

---

### DirectConnectDisassociateConnectionFromLagRequest <a name="aws-cdk-sdk.directconnect.DirectConnectDisassociateConnectionFromLagRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectDisassociateConnectionFromLagRequest: directconnect.DirectConnectDisassociateConnectionFromLagRequest = { ... }
```

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDisassociateConnectionFromLagRequest.property.connectionId"></a>

- *Type:* `string`

---

##### `lagId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectDisassociateConnectionFromLagRequest.property.lagId"></a>

- *Type:* `string`

---

### DirectConnectInterconnect <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnect"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectInterconnect: directconnect.DirectConnectInterconnect = { ... }
```

##### `awsDevice`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnect.property.awsDevice"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnect.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bandwidth`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnect.property.bandwidth"></a>

- *Type:* `string`

---

##### `hasLogicalRedundancy`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnect.property.hasLogicalRedundancy"></a>

- *Type:* `string`

---

##### `interconnectId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnect.property.interconnectId"></a>

- *Type:* `string`

---

##### `interconnectName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnect.property.interconnectName"></a>

- *Type:* `string`

---

##### `interconnectState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnect.property.interconnectState"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnect.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `lagId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnect.property.lagId"></a>

- *Type:* `string`

---

##### `loaIssueTime`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnect.property.loaIssueTime"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnect.property.location"></a>

- *Type:* `string`

---

##### `providerName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnect.property.providerName"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnect.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnect.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

### DirectConnectInterconnects <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnects"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectInterconnects: directconnect.DirectConnectInterconnects = { ... }
```

##### `interconnects`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectInterconnects.property.interconnects"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectInterconnect`](#aws-cdk-sdk.directconnect.DirectConnectInterconnect)[]

---

### DirectConnectLag <a name="aws-cdk-sdk.directconnect.DirectConnectLag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectLag: directconnect.DirectConnectLag = { ... }
```

##### `allowsHostedConnections`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.allowsHostedConnections"></a>

- *Type:* `boolean`

---

##### `awsDevice`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.awsDevice"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `connections`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.connections"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConnection`](#aws-cdk-sdk.directconnect.DirectConnectConnection)[]

---

##### `connectionsBandwidth`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.connectionsBandwidth"></a>

- *Type:* `string`

---

##### `hasLogicalRedundancy`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.hasLogicalRedundancy"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `lagId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.lagId"></a>

- *Type:* `string`

---

##### `lagName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.lagName"></a>

- *Type:* `string`

---

##### `lagState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.lagState"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.location"></a>

- *Type:* `string`

---

##### `minimumLinks`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.minimumLinks"></a>

- *Type:* `number`

---

##### `numberOfConnections`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.numberOfConnections"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.ownerAccount"></a>

- *Type:* `string`

---

##### `providerName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.providerName"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLag.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

### DirectConnectLags <a name="aws-cdk-sdk.directconnect.DirectConnectLags"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectLags: directconnect.DirectConnectLags = { ... }
```

##### `lags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLags.property.lags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectLag`](#aws-cdk-sdk.directconnect.DirectConnectLag)[]

---

### DirectConnectListVirtualInterfaceTestHistoryRequest <a name="aws-cdk-sdk.directconnect.DirectConnectListVirtualInterfaceTestHistoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectListVirtualInterfaceTestHistoryRequest: directconnect.DirectConnectListVirtualInterfaceTestHistoryRequest = { ... }
```

##### `bgpPeers`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectListVirtualInterfaceTestHistoryRequest.property.bgpPeers"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectListVirtualInterfaceTestHistoryRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectListVirtualInterfaceTestHistoryRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectListVirtualInterfaceTestHistoryRequest.property.status"></a>

- *Type:* `string`

---

##### `testId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectListVirtualInterfaceTestHistoryRequest.property.testId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectListVirtualInterfaceTestHistoryRequest.property.virtualInterfaceId"></a>

- *Type:* `string`

---

### DirectConnectListVirtualInterfaceTestHistoryResponse <a name="aws-cdk-sdk.directconnect.DirectConnectListVirtualInterfaceTestHistoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectListVirtualInterfaceTestHistoryResponse: directconnect.DirectConnectListVirtualInterfaceTestHistoryResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectListVirtualInterfaceTestHistoryResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `virtualInterfaceTestHistory`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectListVirtualInterfaceTestHistoryResponse.property.virtualInterfaceTestHistory"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory`](#aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory)[]

---

### DirectConnectLoa <a name="aws-cdk-sdk.directconnect.DirectConnectLoa"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectLoa: directconnect.DirectConnectLoa = { ... }
```

##### `loaContent`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLoa.property.loaContent"></a>

- *Type:* `any`

---

##### `loaContentType`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLoa.property.loaContentType"></a>

- *Type:* `string`

---

### DirectConnectLocation <a name="aws-cdk-sdk.directconnect.DirectConnectLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectLocation: directconnect.DirectConnectLocation = { ... }
```

##### `availablePortSpeeds`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLocation.property.availablePortSpeeds"></a>

- *Type:* `string`[]

---

##### `availableProviders`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLocation.property.availableProviders"></a>

- *Type:* `string`[]

---

##### `locationCode`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLocation.property.locationCode"></a>

- *Type:* `string`

---

##### `locationName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLocation.property.locationName"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLocation.property.region"></a>

- *Type:* `string`

---

### DirectConnectLocations <a name="aws-cdk-sdk.directconnect.DirectConnectLocations"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectLocations: directconnect.DirectConnectLocations = { ... }
```

##### `locations`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectLocations.property.locations"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectLocation`](#aws-cdk-sdk.directconnect.DirectConnectLocation)[]

---

### DirectConnectNewBgpPeer <a name="aws-cdk-sdk.directconnect.DirectConnectNewBgpPeer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectNewBgpPeer: directconnect.DirectConnectNewBgpPeer = { ... }
```

##### `addressFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewBgpPeer.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewBgpPeer.property.amazonAddress"></a>

- *Type:* `string`

---

##### `asn`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewBgpPeer.property.asn"></a>

- *Type:* `number`

---

##### `authKey`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewBgpPeer.property.authKey"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewBgpPeer.property.customerAddress"></a>

- *Type:* `string`

---

### DirectConnectNewPrivateVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterface"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectNewPrivateVirtualInterface: directconnect.DirectConnectNewPrivateVirtualInterface = { ... }
```

##### `asn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterface.property.asn"></a>

- *Type:* `number`

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterface.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterface.property.vlan"></a>

- *Type:* `number`

---

##### `addressFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterface.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterface.property.amazonAddress"></a>

- *Type:* `string`

---

##### `authKey`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterface.property.authKey"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterface.property.customerAddress"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterface.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `mtu`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterface.property.mtu"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterface.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `virtualGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterface.property.virtualGatewayId"></a>

- *Type:* `string`

---

### DirectConnectNewPrivateVirtualInterfaceAllocation <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterfaceAllocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectNewPrivateVirtualInterfaceAllocation: directconnect.DirectConnectNewPrivateVirtualInterfaceAllocation = { ... }
```

##### `asn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterfaceAllocation.property.asn"></a>

- *Type:* `number`

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterfaceAllocation.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterfaceAllocation.property.vlan"></a>

- *Type:* `number`

---

##### `addressFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterfaceAllocation.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterfaceAllocation.property.amazonAddress"></a>

- *Type:* `string`

---

##### `authKey`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterfaceAllocation.property.authKey"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterfaceAllocation.property.customerAddress"></a>

- *Type:* `string`

---

##### `mtu`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterfaceAllocation.property.mtu"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPrivateVirtualInterfaceAllocation.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

### DirectConnectNewPublicVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterface"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectNewPublicVirtualInterface: directconnect.DirectConnectNewPublicVirtualInterface = { ... }
```

##### `asn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterface.property.asn"></a>

- *Type:* `number`

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterface.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterface.property.vlan"></a>

- *Type:* `number`

---

##### `addressFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterface.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterface.property.amazonAddress"></a>

- *Type:* `string`

---

##### `authKey`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterface.property.authKey"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterface.property.customerAddress"></a>

- *Type:* `string`

---

##### `routeFilterPrefixes`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterface.property.routeFilterPrefixes"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterface.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

### DirectConnectNewPublicVirtualInterfaceAllocation <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterfaceAllocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectNewPublicVirtualInterfaceAllocation: directconnect.DirectConnectNewPublicVirtualInterfaceAllocation = { ... }
```

##### `asn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterfaceAllocation.property.asn"></a>

- *Type:* `number`

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterfaceAllocation.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterfaceAllocation.property.vlan"></a>

- *Type:* `number`

---

##### `addressFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterfaceAllocation.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterfaceAllocation.property.amazonAddress"></a>

- *Type:* `string`

---

##### `authKey`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterfaceAllocation.property.authKey"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterfaceAllocation.property.customerAddress"></a>

- *Type:* `string`

---

##### `routeFilterPrefixes`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterfaceAllocation.property.routeFilterPrefixes"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewPublicVirtualInterfaceAllocation.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

### DirectConnectNewTransitVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterface"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectNewTransitVirtualInterface: directconnect.DirectConnectNewTransitVirtualInterface = { ... }
```

##### `addressFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterface.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterface.property.amazonAddress"></a>

- *Type:* `string`

---

##### `asn`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterface.property.asn"></a>

- *Type:* `number`

---

##### `authKey`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterface.property.authKey"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterface.property.customerAddress"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterface.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `mtu`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterface.property.mtu"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterface.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `virtualInterfaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterface.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `vlan`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterface.property.vlan"></a>

- *Type:* `number`

---

### DirectConnectNewTransitVirtualInterfaceAllocation <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterfaceAllocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectNewTransitVirtualInterfaceAllocation: directconnect.DirectConnectNewTransitVirtualInterfaceAllocation = { ... }
```

##### `addressFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterfaceAllocation.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterfaceAllocation.property.amazonAddress"></a>

- *Type:* `string`

---

##### `asn`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterfaceAllocation.property.asn"></a>

- *Type:* `number`

---

##### `authKey`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterfaceAllocation.property.authKey"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterfaceAllocation.property.customerAddress"></a>

- *Type:* `string`

---

##### `mtu`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterfaceAllocation.property.mtu"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterfaceAllocation.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `virtualInterfaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterfaceAllocation.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `vlan`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectNewTransitVirtualInterfaceAllocation.property.vlan"></a>

- *Type:* `number`

---

### DirectConnectResourceTag <a name="aws-cdk-sdk.directconnect.DirectConnectResourceTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectResourceTag: directconnect.DirectConnectResourceTag = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResourceTag.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResourceTag.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

### DirectConnectRouteFilterPrefix <a name="aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectRouteFilterPrefix: directconnect.DirectConnectRouteFilterPrefix = { ... }
```

##### `cidr`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix.property.cidr"></a>

- *Type:* `string`

---

### DirectConnectStartBgpFailoverTestRequest <a name="aws-cdk-sdk.directconnect.DirectConnectStartBgpFailoverTestRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectStartBgpFailoverTestRequest: directconnect.DirectConnectStartBgpFailoverTestRequest = { ... }
```

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectStartBgpFailoverTestRequest.property.virtualInterfaceId"></a>

- *Type:* `string`

---

##### `bgpPeers`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectStartBgpFailoverTestRequest.property.bgpPeers"></a>

- *Type:* `string`[]

---

##### `testDurationInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectStartBgpFailoverTestRequest.property.testDurationInMinutes"></a>

- *Type:* `number`

---

### DirectConnectStartBgpFailoverTestResponse <a name="aws-cdk-sdk.directconnect.DirectConnectStartBgpFailoverTestResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectStartBgpFailoverTestResponse: directconnect.DirectConnectStartBgpFailoverTestResponse = { ... }
```

##### `virtualInterfaceTest`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectStartBgpFailoverTestResponse.property.virtualInterfaceTest"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory`](#aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory)

---

### DirectConnectStopBgpFailoverTestRequest <a name="aws-cdk-sdk.directconnect.DirectConnectStopBgpFailoverTestRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectStopBgpFailoverTestRequest: directconnect.DirectConnectStopBgpFailoverTestRequest = { ... }
```

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectStopBgpFailoverTestRequest.property.virtualInterfaceId"></a>

- *Type:* `string`

---

### DirectConnectStopBgpFailoverTestResponse <a name="aws-cdk-sdk.directconnect.DirectConnectStopBgpFailoverTestResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectStopBgpFailoverTestResponse: directconnect.DirectConnectStopBgpFailoverTestResponse = { ... }
```

##### `virtualInterfaceTest`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectStopBgpFailoverTestResponse.property.virtualInterfaceTest"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory`](#aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory)

---

### DirectConnectTag <a name="aws-cdk-sdk.directconnect.DirectConnectTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectTag: directconnect.DirectConnectTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectTag.property.value"></a>

- *Type:* `string`

---

### DirectConnectTagResourceRequest <a name="aws-cdk-sdk.directconnect.DirectConnectTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectTagResourceRequest: directconnect.DirectConnectTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

### DirectConnectTagResourceResponse <a name="aws-cdk-sdk.directconnect.DirectConnectTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectTagResourceResponse: directconnect.DirectConnectTagResourceResponse = { ... }
```

### DirectConnectUntagResourceRequest <a name="aws-cdk-sdk.directconnect.DirectConnectUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectUntagResourceRequest: directconnect.DirectConnectUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### DirectConnectUntagResourceResponse <a name="aws-cdk-sdk.directconnect.DirectConnectUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectUntagResourceResponse: directconnect.DirectConnectUntagResourceResponse = { ... }
```

### DirectConnectUpdateDirectConnectGatewayAssociationRequest <a name="aws-cdk-sdk.directconnect.DirectConnectUpdateDirectConnectGatewayAssociationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectUpdateDirectConnectGatewayAssociationRequest: directconnect.DirectConnectUpdateDirectConnectGatewayAssociationRequest = { ... }
```

##### `addAllowedPrefixesToDirectConnectGateway`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectUpdateDirectConnectGatewayAssociationRequest.property.addAllowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectUpdateDirectConnectGatewayAssociationRequest.property.associationId"></a>

- *Type:* `string`

---

##### `removeAllowedPrefixesToDirectConnectGateway`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectUpdateDirectConnectGatewayAssociationRequest.property.removeAllowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

### DirectConnectUpdateDirectConnectGatewayAssociationResult <a name="aws-cdk-sdk.directconnect.DirectConnectUpdateDirectConnectGatewayAssociationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectUpdateDirectConnectGatewayAssociationResult: directconnect.DirectConnectUpdateDirectConnectGatewayAssociationResult = { ... }
```

##### `directConnectGatewayAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectUpdateDirectConnectGatewayAssociationResult.property.directConnectGatewayAssociation"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation)

---

### DirectConnectUpdateLagRequest <a name="aws-cdk-sdk.directconnect.DirectConnectUpdateLagRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectUpdateLagRequest: directconnect.DirectConnectUpdateLagRequest = { ... }
```

##### `lagId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectUpdateLagRequest.property.lagId"></a>

- *Type:* `string`

---

##### `lagName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectUpdateLagRequest.property.lagName"></a>

- *Type:* `string`

---

##### `minimumLinks`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectUpdateLagRequest.property.minimumLinks"></a>

- *Type:* `number`

---

### DirectConnectUpdateVirtualInterfaceAttributesRequest <a name="aws-cdk-sdk.directconnect.DirectConnectUpdateVirtualInterfaceAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectUpdateVirtualInterfaceAttributesRequest: directconnect.DirectConnectUpdateVirtualInterfaceAttributesRequest = { ... }
```

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectUpdateVirtualInterfaceAttributesRequest.property.virtualInterfaceId"></a>

- *Type:* `string`

---

##### `mtu`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectUpdateVirtualInterfaceAttributesRequest.property.mtu"></a>

- *Type:* `number`

---

### DirectConnectVirtualGateway <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualGateway"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectVirtualGateway: directconnect.DirectConnectVirtualGateway = { ... }
```

##### `virtualGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualGateway.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualGatewayState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualGateway.property.virtualGatewayState"></a>

- *Type:* `string`

---

### DirectConnectVirtualGateways <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualGateways"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectVirtualGateways: directconnect.DirectConnectVirtualGateways = { ... }
```

##### `virtualGateways`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualGateways.property.virtualGateways"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectVirtualGateway`](#aws-cdk-sdk.directconnect.DirectConnectVirtualGateway)[]

---

### DirectConnectVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectVirtualInterface: directconnect.DirectConnectVirtualInterface = { ... }
```

##### `addressFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.amazonAddress"></a>

- *Type:* `string`

---

##### `amazonSideAsn`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.amazonSideAsn"></a>

- *Type:* `number`

---

##### `asn`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.asn"></a>

- *Type:* `number`

---

##### `authKey`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.authKey"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bgpPeers`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.bgpPeers"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectBgpPeer`](#aws-cdk-sdk.directconnect.DirectConnectBgpPeer)[]

---

##### `connectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.connectionId"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.customerAddress"></a>

- *Type:* `string`

---

##### `customerRouterConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.customerRouterConfig"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.location"></a>

- *Type:* `string`

---

##### `mtu`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.mtu"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.region"></a>

- *Type:* `string`

---

##### `routeFilterPrefixes`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.routeFilterPrefixes"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `virtualGatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.virtualInterfaceId"></a>

- *Type:* `string`

---

##### `virtualInterfaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `virtualInterfaceState`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.virtualInterfaceState"></a>

- *Type:* `string`

---

##### `virtualInterfaceType`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.virtualInterfaceType"></a>

- *Type:* `string`

---

##### `vlan`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterface.property.vlan"></a>

- *Type:* `number`

---

### DirectConnectVirtualInterfaces <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaces"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectVirtualInterfaces: directconnect.DirectConnectVirtualInterfaces = { ... }
```

##### `virtualInterfaces`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaces.property.virtualInterfaces"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectVirtualInterface`](#aws-cdk-sdk.directconnect.DirectConnectVirtualInterface)[]

---

### DirectConnectVirtualInterfaceTestHistory <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

const directConnectVirtualInterfaceTestHistory: directconnect.DirectConnectVirtualInterfaceTestHistory = { ... }
```

##### `bgpPeers`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory.property.bgpPeers"></a>

- *Type:* `string`[]

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory.property.endTime"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory.property.ownerAccount"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory.property.status"></a>

- *Type:* `string`

---

##### `testDurationInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory.property.testDurationInMinutes"></a>

- *Type:* `number`

---

##### `testId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory.property.testId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory.property.virtualInterfaceId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposal <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposal"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposal.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposal(__scope: Construct, __resources: string[], __input: DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposal.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposal.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposal.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest`](#aws-cdk-sdk.directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest)

---



#### Properties <a name="Properties"></a>

##### `directConnectGatewayAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposal.property.directConnectGatewayAssociation"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation`](#aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation)

---


### DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation(__scope: Construct, __resources: string[], __input: DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest`](#aws-cdk-sdk.directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest)

---



#### Properties <a name="Properties"></a>

##### `allowedPrefixesToDirectConnectGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `associatedGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation.property.associatedGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway`](#aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway)

---

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation.property.associationId"></a>

- *Type:* `string`

---

##### `associationState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation.property.associationState"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `directConnectGatewayOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation.property.directConnectGatewayOwnerAccount"></a>

- *Type:* `string`

---

##### `stateChangeError`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation.property.stateChangeError"></a>

- *Type:* `string`

---

##### `virtualGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualGatewayOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation.property.virtualGatewayOwnerAccount"></a>

- *Type:* `string`

---

##### `virtualGatewayRegion`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation.property.virtualGatewayRegion"></a>

- *Type:* `string`

---


### DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway(__scope: Construct, __resources: string[], __input: DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest`](#aws-cdk-sdk.directconnect.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway.property.id"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway.property.region"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway.property.type"></a>

- *Type:* `string`

---


### DirectConnectResponsesAllocateConnectionOnInterconnect <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect(__scope: Construct, __resources: string[], __input: DirectConnectAllocateConnectionOnInterconnectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAllocateConnectionOnInterconnectRequest`](#aws-cdk-sdk.directconnect.DirectConnectAllocateConnectionOnInterconnectRequest)

---



#### Properties <a name="Properties"></a>

##### `awsDevice`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.awsDevice"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.bandwidth"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.connectionName"></a>

- *Type:* `string`

---

##### `connectionState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.connectionState"></a>

- *Type:* `string`

---

##### `hasLogicalRedundancy`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.hasLogicalRedundancy"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `lagId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.lagId"></a>

- *Type:* `string`

---

##### `loaIssueTime`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.loaIssueTime"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.location"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.ownerAccount"></a>

- *Type:* `string`

---

##### `partnerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.partnerName"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.providerName"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateConnectionOnInterconnect.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesAllocateHostedConnection <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesAllocateHostedConnection(__scope: Construct, __resources: string[], __input: DirectConnectAllocateHostedConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAllocateHostedConnectionRequest`](#aws-cdk-sdk.directconnect.DirectConnectAllocateHostedConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `awsDevice`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.awsDevice"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.bandwidth"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.connectionName"></a>

- *Type:* `string`

---

##### `connectionState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.connectionState"></a>

- *Type:* `string`

---

##### `hasLogicalRedundancy`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.hasLogicalRedundancy"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `lagId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.lagId"></a>

- *Type:* `string`

---

##### `loaIssueTime`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.loaIssueTime"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.location"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.ownerAccount"></a>

- *Type:* `string`

---

##### `partnerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.partnerName"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.providerName"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateHostedConnection.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesAllocatePrivateVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface(__scope: Construct, __resources: string[], __input: DirectConnectAllocatePrivateVirtualInterfaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAllocatePrivateVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectAllocatePrivateVirtualInterfaceRequest)

---



#### Properties <a name="Properties"></a>

##### `addressFamily`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.amazonAddress"></a>

- *Type:* `string`

---

##### `amazonSideAsn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.amazonSideAsn"></a>

- *Type:* `number`

---

##### `asn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.asn"></a>

- *Type:* `number`

---

##### `authKey`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.authKey"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bgpPeers`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.bgpPeers"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectBgpPeer`](#aws-cdk-sdk.directconnect.DirectConnectBgpPeer)[]

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.connectionId"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.customerAddress"></a>

- *Type:* `string`

---

##### `customerRouterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.customerRouterConfig"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.location"></a>

- *Type:* `string`

---

##### `mtu`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.mtu"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.region"></a>

- *Type:* `string`

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.routeFilterPrefixes"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `virtualGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.virtualInterfaceId"></a>

- *Type:* `string`

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `virtualInterfaceState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.virtualInterfaceState"></a>

- *Type:* `string`

---

##### `virtualInterfaceType`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.virtualInterfaceType"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePrivateVirtualInterface.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesAllocatePublicVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesAllocatePublicVirtualInterface(__scope: Construct, __resources: string[], __input: DirectConnectAllocatePublicVirtualInterfaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAllocatePublicVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectAllocatePublicVirtualInterfaceRequest)

---



#### Properties <a name="Properties"></a>

##### `addressFamily`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.amazonAddress"></a>

- *Type:* `string`

---

##### `amazonSideAsn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.amazonSideAsn"></a>

- *Type:* `number`

---

##### `asn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.asn"></a>

- *Type:* `number`

---

##### `authKey`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.authKey"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bgpPeers`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.bgpPeers"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectBgpPeer`](#aws-cdk-sdk.directconnect.DirectConnectBgpPeer)[]

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.connectionId"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.customerAddress"></a>

- *Type:* `string`

---

##### `customerRouterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.customerRouterConfig"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.location"></a>

- *Type:* `string`

---

##### `mtu`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.mtu"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.region"></a>

- *Type:* `string`

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.routeFilterPrefixes"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `virtualGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.virtualInterfaceId"></a>

- *Type:* `string`

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `virtualInterfaceState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.virtualInterfaceState"></a>

- *Type:* `string`

---

##### `virtualInterfaceType`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.virtualInterfaceType"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocatePublicVirtualInterface.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesAllocateTransitVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterface"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterface.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesAllocateTransitVirtualInterface(__scope: Construct, __resources: string[], __input: DirectConnectAllocateTransitVirtualInterfaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAllocateTransitVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectAllocateTransitVirtualInterfaceRequest)

---



#### Properties <a name="Properties"></a>

##### `virtualInterface`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterface.property.virtualInterface"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface`](#aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface)

---


### DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface(__scope: Construct, __resources: string[], __input: DirectConnectAllocateTransitVirtualInterfaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAllocateTransitVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectAllocateTransitVirtualInterfaceRequest)

---



#### Properties <a name="Properties"></a>

##### `addressFamily`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.amazonAddress"></a>

- *Type:* `string`

---

##### `amazonSideAsn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.amazonSideAsn"></a>

- *Type:* `number`

---

##### `asn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.asn"></a>

- *Type:* `number`

---

##### `authKey`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.authKey"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bgpPeers`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.bgpPeers"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectBgpPeer`](#aws-cdk-sdk.directconnect.DirectConnectBgpPeer)[]

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.connectionId"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.customerAddress"></a>

- *Type:* `string`

---

##### `customerRouterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.customerRouterConfig"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.location"></a>

- *Type:* `string`

---

##### `mtu`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.mtu"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.region"></a>

- *Type:* `string`

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.routeFilterPrefixes"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `virtualGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.virtualInterfaceId"></a>

- *Type:* `string`

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `virtualInterfaceState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.virtualInterfaceState"></a>

- *Type:* `string`

---

##### `virtualInterfaceType`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.virtualInterfaceType"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesAssociateConnectionWithLag <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesAssociateConnectionWithLag(__scope: Construct, __resources: string[], __input: DirectConnectAssociateConnectionWithLagRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAssociateConnectionWithLagRequest`](#aws-cdk-sdk.directconnect.DirectConnectAssociateConnectionWithLagRequest)

---



#### Properties <a name="Properties"></a>

##### `awsDevice`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.awsDevice"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.bandwidth"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.connectionName"></a>

- *Type:* `string`

---

##### `connectionState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.connectionState"></a>

- *Type:* `string`

---

##### `hasLogicalRedundancy`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.hasLogicalRedundancy"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `lagId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.lagId"></a>

- *Type:* `string`

---

##### `loaIssueTime`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.loaIssueTime"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.location"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.ownerAccount"></a>

- *Type:* `string`

---

##### `partnerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.partnerName"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.providerName"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateConnectionWithLag.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesAssociateHostedConnection <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesAssociateHostedConnection(__scope: Construct, __resources: string[], __input: DirectConnectAssociateHostedConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAssociateHostedConnectionRequest`](#aws-cdk-sdk.directconnect.DirectConnectAssociateHostedConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `awsDevice`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.awsDevice"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.bandwidth"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.connectionName"></a>

- *Type:* `string`

---

##### `connectionState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.connectionState"></a>

- *Type:* `string`

---

##### `hasLogicalRedundancy`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.hasLogicalRedundancy"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `lagId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.lagId"></a>

- *Type:* `string`

---

##### `loaIssueTime`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.loaIssueTime"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.location"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.ownerAccount"></a>

- *Type:* `string`

---

##### `partnerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.partnerName"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.providerName"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateHostedConnection.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesAssociateVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesAssociateVirtualInterface(__scope: Construct, __resources: string[], __input: DirectConnectAssociateVirtualInterfaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectAssociateVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectAssociateVirtualInterfaceRequest)

---



#### Properties <a name="Properties"></a>

##### `addressFamily`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.amazonAddress"></a>

- *Type:* `string`

---

##### `amazonSideAsn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.amazonSideAsn"></a>

- *Type:* `number`

---

##### `asn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.asn"></a>

- *Type:* `number`

---

##### `authKey`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.authKey"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bgpPeers`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.bgpPeers"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectBgpPeer`](#aws-cdk-sdk.directconnect.DirectConnectBgpPeer)[]

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.connectionId"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.customerAddress"></a>

- *Type:* `string`

---

##### `customerRouterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.customerRouterConfig"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.location"></a>

- *Type:* `string`

---

##### `mtu`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.mtu"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.region"></a>

- *Type:* `string`

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.routeFilterPrefixes"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `virtualGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.virtualInterfaceId"></a>

- *Type:* `string`

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `virtualInterfaceState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.virtualInterfaceState"></a>

- *Type:* `string`

---

##### `virtualInterfaceType`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.virtualInterfaceType"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesAssociateVirtualInterface.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesConfirmConnection <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmConnection"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmConnection.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesConfirmConnection(__scope: Construct, __resources: string[], __input: DirectConnectConfirmConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConfirmConnectionRequest`](#aws-cdk-sdk.directconnect.DirectConnectConfirmConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `connectionState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmConnection.property.connectionState"></a>

- *Type:* `string`

---


### DirectConnectResponsesConfirmPrivateVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmPrivateVirtualInterface"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmPrivateVirtualInterface.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesConfirmPrivateVirtualInterface(__scope: Construct, __resources: string[], __input: DirectConnectConfirmPrivateVirtualInterfaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmPrivateVirtualInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmPrivateVirtualInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmPrivateVirtualInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConfirmPrivateVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectConfirmPrivateVirtualInterfaceRequest)

---



#### Properties <a name="Properties"></a>

##### `virtualInterfaceState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmPrivateVirtualInterface.property.virtualInterfaceState"></a>

- *Type:* `string`

---


### DirectConnectResponsesConfirmPublicVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmPublicVirtualInterface"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmPublicVirtualInterface.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesConfirmPublicVirtualInterface(__scope: Construct, __resources: string[], __input: DirectConnectConfirmPublicVirtualInterfaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmPublicVirtualInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmPublicVirtualInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmPublicVirtualInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConfirmPublicVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectConfirmPublicVirtualInterfaceRequest)

---



#### Properties <a name="Properties"></a>

##### `virtualInterfaceState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmPublicVirtualInterface.property.virtualInterfaceState"></a>

- *Type:* `string`

---


### DirectConnectResponsesConfirmTransitVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmTransitVirtualInterface"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmTransitVirtualInterface.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesConfirmTransitVirtualInterface(__scope: Construct, __resources: string[], __input: DirectConnectConfirmTransitVirtualInterfaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmTransitVirtualInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmTransitVirtualInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmTransitVirtualInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConfirmTransitVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectConfirmTransitVirtualInterfaceRequest)

---



#### Properties <a name="Properties"></a>

##### `virtualInterfaceState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesConfirmTransitVirtualInterface.property.virtualInterfaceState"></a>

- *Type:* `string`

---


### DirectConnectResponsesCreateBgpPeer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeer"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeer.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreateBgpPeer(__scope: Construct, __resources: string[], __input: DirectConnectCreateBgpPeerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateBgpPeerRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateBgpPeerRequest)

---



#### Properties <a name="Properties"></a>

##### `virtualInterface`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeer.property.virtualInterface"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface`](#aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface)

---


### DirectConnectResponsesCreateBgpPeerVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface(__scope: Construct, __resources: string[], __input: DirectConnectCreateBgpPeerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateBgpPeerRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateBgpPeerRequest)

---



#### Properties <a name="Properties"></a>

##### `addressFamily`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.amazonAddress"></a>

- *Type:* `string`

---

##### `amazonSideAsn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.amazonSideAsn"></a>

- *Type:* `number`

---

##### `asn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.asn"></a>

- *Type:* `number`

---

##### `authKey`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.authKey"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bgpPeers`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.bgpPeers"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectBgpPeer`](#aws-cdk-sdk.directconnect.DirectConnectBgpPeer)[]

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.connectionId"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.customerAddress"></a>

- *Type:* `string`

---

##### `customerRouterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.customerRouterConfig"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.location"></a>

- *Type:* `string`

---

##### `mtu`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.mtu"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.region"></a>

- *Type:* `string`

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.routeFilterPrefixes"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `virtualGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.virtualInterfaceId"></a>

- *Type:* `string`

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `virtualInterfaceState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.virtualInterfaceState"></a>

- *Type:* `string`

---

##### `virtualInterfaceType`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.virtualInterfaceType"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateBgpPeerVirtualInterface.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesCreateConnection <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreateConnection(__scope: Construct, __resources: string[], __input: DirectConnectCreateConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateConnectionRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `awsDevice`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.awsDevice"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.bandwidth"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.connectionName"></a>

- *Type:* `string`

---

##### `connectionState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.connectionState"></a>

- *Type:* `string`

---

##### `hasLogicalRedundancy`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.hasLogicalRedundancy"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `lagId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.lagId"></a>

- *Type:* `string`

---

##### `loaIssueTime`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.loaIssueTime"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.location"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.ownerAccount"></a>

- *Type:* `string`

---

##### `partnerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.partnerName"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.providerName"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateConnection.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesCreateDirectConnectGateway <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGateway"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGateway.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreateDirectConnectGateway(__scope: Construct, __resources: string[], __input: DirectConnectCreateDirectConnectGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `directConnectGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGateway.property.directConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway`](#aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway)

---


### DirectConnectResponsesCreateDirectConnectGatewayAssociation <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociation.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociation(__scope: Construct, __resources: string[], __input: DirectConnectCreateDirectConnectGatewayAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `directConnectGatewayAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociation.property.directConnectGatewayAssociation"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation`](#aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation)

---


### DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation(__scope: Construct, __resources: string[], __input: DirectConnectCreateDirectConnectGatewayAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `allowedPrefixesToDirectConnectGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `associatedGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.associatedGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway`](#aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway)

---

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.associationId"></a>

- *Type:* `string`

---

##### `associationState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.associationState"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `directConnectGatewayOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.directConnectGatewayOwnerAccount"></a>

- *Type:* `string`

---

##### `stateChangeError`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.stateChangeError"></a>

- *Type:* `string`

---

##### `virtualGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualGatewayOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.virtualGatewayOwnerAccount"></a>

- *Type:* `string`

---

##### `virtualGatewayRegion`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.virtualGatewayRegion"></a>

- *Type:* `string`

---


### DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway(__scope: Construct, __resources: string[], __input: DirectConnectCreateDirectConnectGatewayAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.property.id"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.property.region"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.property.type"></a>

- *Type:* `string`

---


### DirectConnectResponsesCreateDirectConnectGatewayAssociationProposal <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposal"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposal.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposal(__scope: Construct, __resources: string[], __input: DirectConnectCreateDirectConnectGatewayAssociationProposalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposal.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposal.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposal.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest)

---



#### Properties <a name="Properties"></a>

##### `directConnectGatewayAssociationProposal`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposal.property.directConnectGatewayAssociationProposal"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal`](#aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal)

---


### DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal(__scope: Construct, __resources: string[], __input: DirectConnectCreateDirectConnectGatewayAssociationProposalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest)

---



#### Properties <a name="Properties"></a>

##### `associatedGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.property.associatedGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway`](#aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway)

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `directConnectGatewayOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.property.directConnectGatewayOwnerAccount"></a>

- *Type:* `string`

---

##### `existingAllowedPrefixesToDirectConnectGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.property.existingAllowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `proposalId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.property.proposalId"></a>

- *Type:* `string`

---

##### `proposalState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.property.proposalState"></a>

- *Type:* `string`

---

##### `requestedAllowedPrefixesToDirectConnectGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.property.requestedAllowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---


### DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway(__scope: Construct, __resources: string[], __input: DirectConnectCreateDirectConnectGatewayAssociationProposalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.property.id"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.property.region"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.property.type"></a>

- *Type:* `string`

---


### DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway(__scope: Construct, __resources: string[], __input: DirectConnectCreateDirectConnectGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateDirectConnectGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `amazonSideAsn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway.property.amazonSideAsn"></a>

- *Type:* `number`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `directConnectGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway.property.directConnectGatewayName"></a>

- *Type:* `string`

---

##### `directConnectGatewayState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway.property.directConnectGatewayState"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway.property.ownerAccount"></a>

- *Type:* `string`

---

##### `stateChangeError`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway.property.stateChangeError"></a>

- *Type:* `string`

---


### DirectConnectResponsesCreateInterconnect <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreateInterconnect(__scope: Construct, __resources: string[], __input: DirectConnectCreateInterconnectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateInterconnectRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateInterconnectRequest)

---



#### Properties <a name="Properties"></a>

##### `awsDevice`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.property.awsDevice"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.property.bandwidth"></a>

- *Type:* `string`

---

##### `hasLogicalRedundancy`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.property.hasLogicalRedundancy"></a>

- *Type:* `string`

---

##### `interconnectId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.property.interconnectId"></a>

- *Type:* `string`

---

##### `interconnectName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.property.interconnectName"></a>

- *Type:* `string`

---

##### `interconnectState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.property.interconnectState"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `lagId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.property.lagId"></a>

- *Type:* `string`

---

##### `loaIssueTime`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.property.loaIssueTime"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.property.location"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.property.providerName"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateInterconnect.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---


### DirectConnectResponsesCreateLag <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreateLag(__scope: Construct, __resources: string[], __input: DirectConnectCreateLagRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateLagRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateLagRequest)

---



#### Properties <a name="Properties"></a>

##### `allowsHostedConnections`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.allowsHostedConnections"></a>

- *Type:* `boolean`

---

##### `awsDevice`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.awsDevice"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `connections`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.connections"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConnection`](#aws-cdk-sdk.directconnect.DirectConnectConnection)[]

---

##### `connectionsBandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.connectionsBandwidth"></a>

- *Type:* `string`

---

##### `hasLogicalRedundancy`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.hasLogicalRedundancy"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `lagId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.lagId"></a>

- *Type:* `string`

---

##### `lagName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.lagName"></a>

- *Type:* `string`

---

##### `lagState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.lagState"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.location"></a>

- *Type:* `string`

---

##### `minimumLinks`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.minimumLinks"></a>

- *Type:* `number`

---

##### `numberOfConnections`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.numberOfConnections"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.ownerAccount"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.providerName"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateLag.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---


### DirectConnectResponsesCreatePrivateVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreatePrivateVirtualInterface(__scope: Construct, __resources: string[], __input: DirectConnectCreatePrivateVirtualInterfaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreatePrivateVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreatePrivateVirtualInterfaceRequest)

---



#### Properties <a name="Properties"></a>

##### `addressFamily`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.amazonAddress"></a>

- *Type:* `string`

---

##### `amazonSideAsn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.amazonSideAsn"></a>

- *Type:* `number`

---

##### `asn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.asn"></a>

- *Type:* `number`

---

##### `authKey`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.authKey"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bgpPeers`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.bgpPeers"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectBgpPeer`](#aws-cdk-sdk.directconnect.DirectConnectBgpPeer)[]

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.connectionId"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.customerAddress"></a>

- *Type:* `string`

---

##### `customerRouterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.customerRouterConfig"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.location"></a>

- *Type:* `string`

---

##### `mtu`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.mtu"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.region"></a>

- *Type:* `string`

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.routeFilterPrefixes"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `virtualGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.virtualInterfaceId"></a>

- *Type:* `string`

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `virtualInterfaceState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.virtualInterfaceState"></a>

- *Type:* `string`

---

##### `virtualInterfaceType`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.virtualInterfaceType"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePrivateVirtualInterface.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesCreatePublicVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreatePublicVirtualInterface(__scope: Construct, __resources: string[], __input: DirectConnectCreatePublicVirtualInterfaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreatePublicVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreatePublicVirtualInterfaceRequest)

---



#### Properties <a name="Properties"></a>

##### `addressFamily`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.amazonAddress"></a>

- *Type:* `string`

---

##### `amazonSideAsn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.amazonSideAsn"></a>

- *Type:* `number`

---

##### `asn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.asn"></a>

- *Type:* `number`

---

##### `authKey`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.authKey"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bgpPeers`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.bgpPeers"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectBgpPeer`](#aws-cdk-sdk.directconnect.DirectConnectBgpPeer)[]

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.connectionId"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.customerAddress"></a>

- *Type:* `string`

---

##### `customerRouterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.customerRouterConfig"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.location"></a>

- *Type:* `string`

---

##### `mtu`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.mtu"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.region"></a>

- *Type:* `string`

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.routeFilterPrefixes"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `virtualGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.virtualInterfaceId"></a>

- *Type:* `string`

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `virtualInterfaceState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.virtualInterfaceState"></a>

- *Type:* `string`

---

##### `virtualInterfaceType`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.virtualInterfaceType"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreatePublicVirtualInterface.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesCreateTransitVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterface"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterface.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreateTransitVirtualInterface(__scope: Construct, __resources: string[], __input: DirectConnectCreateTransitVirtualInterfaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateTransitVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateTransitVirtualInterfaceRequest)

---



#### Properties <a name="Properties"></a>

##### `virtualInterface`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterface.property.virtualInterface"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface`](#aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface)

---


### DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface(__scope: Construct, __resources: string[], __input: DirectConnectCreateTransitVirtualInterfaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectCreateTransitVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectCreateTransitVirtualInterfaceRequest)

---



#### Properties <a name="Properties"></a>

##### `addressFamily`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.amazonAddress"></a>

- *Type:* `string`

---

##### `amazonSideAsn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.amazonSideAsn"></a>

- *Type:* `number`

---

##### `asn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.asn"></a>

- *Type:* `number`

---

##### `authKey`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.authKey"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bgpPeers`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.bgpPeers"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectBgpPeer`](#aws-cdk-sdk.directconnect.DirectConnectBgpPeer)[]

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.connectionId"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.customerAddress"></a>

- *Type:* `string`

---

##### `customerRouterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.customerRouterConfig"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.location"></a>

- *Type:* `string`

---

##### `mtu`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.mtu"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.region"></a>

- *Type:* `string`

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.routeFilterPrefixes"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `virtualGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.virtualInterfaceId"></a>

- *Type:* `string`

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `virtualInterfaceState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.virtualInterfaceState"></a>

- *Type:* `string`

---

##### `virtualInterfaceType`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.virtualInterfaceType"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesDeleteBgpPeer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeer"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeer.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDeleteBgpPeer(__scope: Construct, __resources: string[], __input: DirectConnectDeleteBgpPeerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteBgpPeerRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteBgpPeerRequest)

---



#### Properties <a name="Properties"></a>

##### `virtualInterface`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeer.property.virtualInterface"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface`](#aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface)

---


### DirectConnectResponsesDeleteBgpPeerVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface(__scope: Construct, __resources: string[], __input: DirectConnectDeleteBgpPeerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteBgpPeerRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteBgpPeerRequest)

---



#### Properties <a name="Properties"></a>

##### `addressFamily`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.amazonAddress"></a>

- *Type:* `string`

---

##### `amazonSideAsn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.amazonSideAsn"></a>

- *Type:* `number`

---

##### `asn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.asn"></a>

- *Type:* `number`

---

##### `authKey`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.authKey"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bgpPeers`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.bgpPeers"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectBgpPeer`](#aws-cdk-sdk.directconnect.DirectConnectBgpPeer)[]

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.connectionId"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.customerAddress"></a>

- *Type:* `string`

---

##### `customerRouterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.customerRouterConfig"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.location"></a>

- *Type:* `string`

---

##### `mtu`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.mtu"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.region"></a>

- *Type:* `string`

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.routeFilterPrefixes"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `virtualGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.virtualInterfaceId"></a>

- *Type:* `string`

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `virtualInterfaceState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.virtualInterfaceState"></a>

- *Type:* `string`

---

##### `virtualInterfaceType`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.virtualInterfaceType"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteBgpPeerVirtualInterface.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesDeleteConnection <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDeleteConnection(__scope: Construct, __resources: string[], __input: DirectConnectDeleteConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteConnectionRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `awsDevice`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.awsDevice"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.bandwidth"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.connectionName"></a>

- *Type:* `string`

---

##### `connectionState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.connectionState"></a>

- *Type:* `string`

---

##### `hasLogicalRedundancy`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.hasLogicalRedundancy"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `lagId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.lagId"></a>

- *Type:* `string`

---

##### `loaIssueTime`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.loaIssueTime"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.location"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.ownerAccount"></a>

- *Type:* `string`

---

##### `partnerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.partnerName"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.providerName"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteConnection.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesDeleteDirectConnectGateway <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGateway"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGateway.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDeleteDirectConnectGateway(__scope: Construct, __resources: string[], __input: DirectConnectDeleteDirectConnectGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `directConnectGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGateway.property.directConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway`](#aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway)

---


### DirectConnectResponsesDeleteDirectConnectGatewayAssociation <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociation.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociation(__scope: Construct, __resources: string[], __input: DirectConnectDeleteDirectConnectGatewayAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `directConnectGatewayAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociation.property.directConnectGatewayAssociation"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation`](#aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation)

---


### DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation(__scope: Construct, __resources: string[], __input: DirectConnectDeleteDirectConnectGatewayAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `allowedPrefixesToDirectConnectGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `associatedGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.associatedGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway`](#aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway)

---

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.associationId"></a>

- *Type:* `string`

---

##### `associationState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.associationState"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `directConnectGatewayOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.directConnectGatewayOwnerAccount"></a>

- *Type:* `string`

---

##### `stateChangeError`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.stateChangeError"></a>

- *Type:* `string`

---

##### `virtualGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualGatewayOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.virtualGatewayOwnerAccount"></a>

- *Type:* `string`

---

##### `virtualGatewayRegion`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.virtualGatewayRegion"></a>

- *Type:* `string`

---


### DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway(__scope: Construct, __resources: string[], __input: DirectConnectDeleteDirectConnectGatewayAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.property.id"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.property.region"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.property.type"></a>

- *Type:* `string`

---


### DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposal <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposal"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposal.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposal(__scope: Construct, __resources: string[], __input: DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposal.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposal.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposal.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest)

---



#### Properties <a name="Properties"></a>

##### `directConnectGatewayAssociationProposal`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposal.property.directConnectGatewayAssociationProposal"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal`](#aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal)

---


### DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal(__scope: Construct, __resources: string[], __input: DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest)

---



#### Properties <a name="Properties"></a>

##### `associatedGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.property.associatedGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway`](#aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway)

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `directConnectGatewayOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.property.directConnectGatewayOwnerAccount"></a>

- *Type:* `string`

---

##### `existingAllowedPrefixesToDirectConnectGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.property.existingAllowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `proposalId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.property.proposalId"></a>

- *Type:* `string`

---

##### `proposalState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.property.proposalState"></a>

- *Type:* `string`

---

##### `requestedAllowedPrefixesToDirectConnectGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal.property.requestedAllowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---


### DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway(__scope: Construct, __resources: string[], __input: DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.property.id"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.property.region"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway.property.type"></a>

- *Type:* `string`

---


### DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway(__scope: Construct, __resources: string[], __input: DirectConnectDeleteDirectConnectGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteDirectConnectGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `amazonSideAsn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway.property.amazonSideAsn"></a>

- *Type:* `number`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `directConnectGatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway.property.directConnectGatewayName"></a>

- *Type:* `string`

---

##### `directConnectGatewayState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway.property.directConnectGatewayState"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway.property.ownerAccount"></a>

- *Type:* `string`

---

##### `stateChangeError`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway.property.stateChangeError"></a>

- *Type:* `string`

---


### DirectConnectResponsesDeleteInterconnect <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteInterconnect"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteInterconnect.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDeleteInterconnect(__scope: Construct, __resources: string[], __input: DirectConnectDeleteInterconnectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteInterconnect.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteInterconnect.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteInterconnect.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteInterconnectRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteInterconnectRequest)

---



#### Properties <a name="Properties"></a>

##### `interconnectState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteInterconnect.property.interconnectState"></a>

- *Type:* `string`

---


### DirectConnectResponsesDeleteLag <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDeleteLag(__scope: Construct, __resources: string[], __input: DirectConnectDeleteLagRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteLagRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteLagRequest)

---



#### Properties <a name="Properties"></a>

##### `allowsHostedConnections`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.allowsHostedConnections"></a>

- *Type:* `boolean`

---

##### `awsDevice`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.awsDevice"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `connections`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.connections"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConnection`](#aws-cdk-sdk.directconnect.DirectConnectConnection)[]

---

##### `connectionsBandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.connectionsBandwidth"></a>

- *Type:* `string`

---

##### `hasLogicalRedundancy`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.hasLogicalRedundancy"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `lagId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.lagId"></a>

- *Type:* `string`

---

##### `lagName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.lagName"></a>

- *Type:* `string`

---

##### `lagState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.lagState"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.location"></a>

- *Type:* `string`

---

##### `minimumLinks`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.minimumLinks"></a>

- *Type:* `number`

---

##### `numberOfConnections`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.numberOfConnections"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.ownerAccount"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.providerName"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteLag.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---


### DirectConnectResponsesDeleteVirtualInterface <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteVirtualInterface"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteVirtualInterface.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDeleteVirtualInterface(__scope: Construct, __resources: string[], __input: DirectConnectDeleteVirtualInterfaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteVirtualInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteVirtualInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteVirtualInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDeleteVirtualInterfaceRequest`](#aws-cdk-sdk.directconnect.DirectConnectDeleteVirtualInterfaceRequest)

---



#### Properties <a name="Properties"></a>

##### `virtualInterfaceState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDeleteVirtualInterface.property.virtualInterfaceState"></a>

- *Type:* `string`

---


### DirectConnectResponsesDescribeConnectionLoa <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionLoa"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionLoa.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeConnectionLoa(__scope: Construct, __resources: string[], __input: DirectConnectDescribeConnectionLoaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionLoa.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionLoa.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionLoa.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionLoaRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionLoaRequest)

---



#### Properties <a name="Properties"></a>

##### `loa`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionLoa.property.loa"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionLoaLoa`](#aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionLoaLoa)

---


### DirectConnectResponsesDescribeConnectionLoaLoa <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionLoaLoa"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionLoaLoa.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeConnectionLoaLoa(__scope: Construct, __resources: string[], __input: DirectConnectDescribeConnectionLoaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionLoaLoa.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionLoaLoa.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionLoaLoa.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionLoaRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionLoaRequest)

---



#### Properties <a name="Properties"></a>

##### `loaContent`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionLoaLoa.property.loaContent"></a>

- *Type:* `any`

---

##### `loaContentType`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionLoaLoa.property.loaContentType"></a>

- *Type:* `string`

---


### DirectConnectResponsesDescribeConnections <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnections"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnections.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeConnections(__scope: Construct, __resources: string[], __input: DirectConnectDescribeConnectionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnections.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnections.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnections.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionsRequest)

---



#### Properties <a name="Properties"></a>

##### `connections`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnections.property.connections"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConnection`](#aws-cdk-sdk.directconnect.DirectConnectConnection)[]

---


### DirectConnectResponsesDescribeConnectionsOnInterconnect <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionsOnInterconnect"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionsOnInterconnect.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeConnectionsOnInterconnect(__scope: Construct, __resources: string[], __input: DirectConnectDescribeConnectionsOnInterconnectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionsOnInterconnect.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionsOnInterconnect.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionsOnInterconnect.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionsOnInterconnectRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeConnectionsOnInterconnectRequest)

---



#### Properties <a name="Properties"></a>

##### `connections`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeConnectionsOnInterconnect.property.connections"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConnection`](#aws-cdk-sdk.directconnect.DirectConnectConnection)[]

---


### DirectConnectResponsesDescribeDirectConnectGatewayAssociationProposals <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociationProposals"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociationProposals.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociationProposals(__scope: Construct, __resources: string[], __input: DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociationProposals.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociationProposals.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociationProposals.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest)

---



#### Properties <a name="Properties"></a>

##### `directConnectGatewayAssociationProposals`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociationProposals.property.directConnectGatewayAssociationProposals"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociationProposal)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociationProposals.property.nextToken"></a>

- *Type:* `string`

---


### DirectConnectResponsesDescribeDirectConnectGatewayAssociations <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociations"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociations.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociations(__scope: Construct, __resources: string[], __input: DirectConnectDescribeDirectConnectGatewayAssociationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAssociationsRequest)

---



#### Properties <a name="Properties"></a>

##### `directConnectGatewayAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociations.property.directConnectGatewayAssociations"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAssociation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAssociations.property.nextToken"></a>

- *Type:* `string`

---


### DirectConnectResponsesDescribeDirectConnectGatewayAttachments <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAttachments"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAttachments.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAttachments(__scope: Construct, __resources: string[], __input: DirectConnectDescribeDirectConnectGatewayAttachmentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAttachments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAttachments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAttachments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAttachmentsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewayAttachmentsRequest)

---



#### Properties <a name="Properties"></a>

##### `directConnectGatewayAttachments`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAttachments.property.directConnectGatewayAttachments"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAttachment`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGatewayAttachment)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGatewayAttachments.property.nextToken"></a>

- *Type:* `string`

---


### DirectConnectResponsesDescribeDirectConnectGateways <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGateways"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGateways.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeDirectConnectGateways(__scope: Construct, __resources: string[], __input: DirectConnectDescribeDirectConnectGatewaysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGateways.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGateways.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGateways.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewaysRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeDirectConnectGatewaysRequest)

---



#### Properties <a name="Properties"></a>

##### `directConnectGateways`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGateways.property.directConnectGateways"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDirectConnectGateway`](#aws-cdk-sdk.directconnect.DirectConnectDirectConnectGateway)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeDirectConnectGateways.property.nextToken"></a>

- *Type:* `string`

---


### DirectConnectResponsesDescribeHostedConnections <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeHostedConnections"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeHostedConnections.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeHostedConnections(__scope: Construct, __resources: string[], __input: DirectConnectDescribeHostedConnectionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeHostedConnections.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeHostedConnections.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeHostedConnections.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeHostedConnectionsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeHostedConnectionsRequest)

---



#### Properties <a name="Properties"></a>

##### `connections`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeHostedConnections.property.connections"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConnection`](#aws-cdk-sdk.directconnect.DirectConnectConnection)[]

---


### DirectConnectResponsesDescribeInterconnectLoa <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnectLoa"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnectLoa.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeInterconnectLoa(__scope: Construct, __resources: string[], __input: DirectConnectDescribeInterconnectLoaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnectLoa.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnectLoa.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnectLoa.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectLoaRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectLoaRequest)

---



#### Properties <a name="Properties"></a>

##### `loa`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnectLoa.property.loa"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnectLoaLoa`](#aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnectLoaLoa)

---


### DirectConnectResponsesDescribeInterconnectLoaLoa <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnectLoaLoa"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnectLoaLoa.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeInterconnectLoaLoa(__scope: Construct, __resources: string[], __input: DirectConnectDescribeInterconnectLoaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnectLoaLoa.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnectLoaLoa.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnectLoaLoa.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectLoaRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectLoaRequest)

---



#### Properties <a name="Properties"></a>

##### `loaContent`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnectLoaLoa.property.loaContent"></a>

- *Type:* `any`

---

##### `loaContentType`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnectLoaLoa.property.loaContentType"></a>

- *Type:* `string`

---


### DirectConnectResponsesDescribeInterconnects <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnects"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnects.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeInterconnects(__scope: Construct, __resources: string[], __input: DirectConnectDescribeInterconnectsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeInterconnectsRequest)

---



#### Properties <a name="Properties"></a>

##### `interconnects`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeInterconnects.property.interconnects"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectInterconnect`](#aws-cdk-sdk.directconnect.DirectConnectInterconnect)[]

---


### DirectConnectResponsesDescribeLags <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLags"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLags.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeLags(__scope: Construct, __resources: string[], __input: DirectConnectDescribeLagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeLagsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeLagsRequest)

---



#### Properties <a name="Properties"></a>

##### `lags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLags.property.lags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectLag`](#aws-cdk-sdk.directconnect.DirectConnectLag)[]

---


### DirectConnectResponsesDescribeLoa <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLoa"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLoa.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeLoa(__scope: Construct, __resources: string[], __input: DirectConnectDescribeLoaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLoa.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLoa.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLoa.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeLoaRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeLoaRequest)

---



#### Properties <a name="Properties"></a>

##### `loaContent`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLoa.property.loaContent"></a>

- *Type:* `any`

---

##### `loaContentType`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLoa.property.loaContentType"></a>

- *Type:* `string`

---


### DirectConnectResponsesDescribeLocations <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLocations"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLocations.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeLocations(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLocations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLocations.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `locations`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeLocations.property.locations"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectLocation`](#aws-cdk-sdk.directconnect.DirectConnectLocation)[]

---


### DirectConnectResponsesDescribeTags <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeTags"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeTags.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeTags(__scope: Construct, __resources: string[], __input: DirectConnectDescribeTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeTagsRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `resourceTags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeTags.property.resourceTags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResourceTag`](#aws-cdk-sdk.directconnect.DirectConnectResourceTag)[]

---


### DirectConnectResponsesDescribeVirtualGateways <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeVirtualGateways"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeVirtualGateways.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeVirtualGateways(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeVirtualGateways.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeVirtualGateways.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `virtualGateways`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeVirtualGateways.property.virtualGateways"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectVirtualGateway`](#aws-cdk-sdk.directconnect.DirectConnectVirtualGateway)[]

---


### DirectConnectResponsesDescribeVirtualInterfaces <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeVirtualInterfaces"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeVirtualInterfaces.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDescribeVirtualInterfaces(__scope: Construct, __resources: string[], __input: DirectConnectDescribeVirtualInterfacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeVirtualInterfaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeVirtualInterfaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeVirtualInterfaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDescribeVirtualInterfacesRequest`](#aws-cdk-sdk.directconnect.DirectConnectDescribeVirtualInterfacesRequest)

---



#### Properties <a name="Properties"></a>

##### `virtualInterfaces`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDescribeVirtualInterfaces.property.virtualInterfaces"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectVirtualInterface`](#aws-cdk-sdk.directconnect.DirectConnectVirtualInterface)[]

---


### DirectConnectResponsesDisassociateConnectionFromLag <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesDisassociateConnectionFromLag(__scope: Construct, __resources: string[], __input: DirectConnectDisassociateConnectionFromLagRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectDisassociateConnectionFromLagRequest`](#aws-cdk-sdk.directconnect.DirectConnectDisassociateConnectionFromLagRequest)

---



#### Properties <a name="Properties"></a>

##### `awsDevice`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.awsDevice"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.bandwidth"></a>

- *Type:* `string`

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.connectionId"></a>

- *Type:* `string`

---

##### `connectionName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.connectionName"></a>

- *Type:* `string`

---

##### `connectionState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.connectionState"></a>

- *Type:* `string`

---

##### `hasLogicalRedundancy`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.hasLogicalRedundancy"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `lagId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.lagId"></a>

- *Type:* `string`

---

##### `loaIssueTime`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.loaIssueTime"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.location"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.ownerAccount"></a>

- *Type:* `string`

---

##### `partnerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.partnerName"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.providerName"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesDisassociateConnectionFromLag.property.vlan"></a>

- *Type:* `number`

---


### DirectConnectResponsesListVirtualInterfaceTestHistory <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesListVirtualInterfaceTestHistory"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesListVirtualInterfaceTestHistory.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesListVirtualInterfaceTestHistory(__scope: Construct, __resources: string[], __input: DirectConnectListVirtualInterfaceTestHistoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesListVirtualInterfaceTestHistory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesListVirtualInterfaceTestHistory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesListVirtualInterfaceTestHistory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectListVirtualInterfaceTestHistoryRequest`](#aws-cdk-sdk.directconnect.DirectConnectListVirtualInterfaceTestHistoryRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesListVirtualInterfaceTestHistory.property.nextToken"></a>

- *Type:* `string`

---

##### `virtualInterfaceTestHistory`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesListVirtualInterfaceTestHistory.property.virtualInterfaceTestHistory"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory`](#aws-cdk-sdk.directconnect.DirectConnectVirtualInterfaceTestHistory)[]

---


### DirectConnectResponsesStartBgpFailoverTest <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTest"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTest.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesStartBgpFailoverTest(__scope: Construct, __resources: string[], __input: DirectConnectStartBgpFailoverTestRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectStartBgpFailoverTestRequest`](#aws-cdk-sdk.directconnect.DirectConnectStartBgpFailoverTestRequest)

---



#### Properties <a name="Properties"></a>

##### `virtualInterfaceTest`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTest.property.virtualInterfaceTest"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest`](#aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest)

---


### DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest(__scope: Construct, __resources: string[], __input: DirectConnectStartBgpFailoverTestRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectStartBgpFailoverTestRequest`](#aws-cdk-sdk.directconnect.DirectConnectStartBgpFailoverTestRequest)

---



#### Properties <a name="Properties"></a>

##### `bgpPeers`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest.property.bgpPeers"></a>

- *Type:* `string`[]

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest.property.endTime"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest.property.ownerAccount"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest.property.status"></a>

- *Type:* `string`

---

##### `testDurationInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest.property.testDurationInMinutes"></a>

- *Type:* `number`

---

##### `testId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest.property.testId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest.property.virtualInterfaceId"></a>

- *Type:* `string`

---


### DirectConnectResponsesStopBgpFailoverTest <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTest"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTest.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesStopBgpFailoverTest(__scope: Construct, __resources: string[], __input: DirectConnectStopBgpFailoverTestRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectStopBgpFailoverTestRequest`](#aws-cdk-sdk.directconnect.DirectConnectStopBgpFailoverTestRequest)

---



#### Properties <a name="Properties"></a>

##### `virtualInterfaceTest`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTest.property.virtualInterfaceTest"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest`](#aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest)

---


### DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest(__scope: Construct, __resources: string[], __input: DirectConnectStopBgpFailoverTestRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectStopBgpFailoverTestRequest`](#aws-cdk-sdk.directconnect.DirectConnectStopBgpFailoverTestRequest)

---



#### Properties <a name="Properties"></a>

##### `bgpPeers`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest.property.bgpPeers"></a>

- *Type:* `string`[]

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest.property.endTime"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest.property.ownerAccount"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest.property.status"></a>

- *Type:* `string`

---

##### `testDurationInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest.property.testDurationInMinutes"></a>

- *Type:* `number`

---

##### `testId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest.property.testId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest.property.virtualInterfaceId"></a>

- *Type:* `string`

---


### DirectConnectResponsesUpdateDirectConnectGatewayAssociation <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociation.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociation(__scope: Construct, __resources: string[], __input: DirectConnectUpdateDirectConnectGatewayAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectUpdateDirectConnectGatewayAssociationRequest`](#aws-cdk-sdk.directconnect.DirectConnectUpdateDirectConnectGatewayAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `directConnectGatewayAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociation.property.directConnectGatewayAssociation"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation`](#aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation)

---


### DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation(__scope: Construct, __resources: string[], __input: DirectConnectUpdateDirectConnectGatewayAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectUpdateDirectConnectGatewayAssociationRequest`](#aws-cdk-sdk.directconnect.DirectConnectUpdateDirectConnectGatewayAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `allowedPrefixesToDirectConnectGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `associatedGateway`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.associatedGateway"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway`](#aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway)

---

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.associationId"></a>

- *Type:* `string`

---

##### `associationState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.associationState"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `directConnectGatewayOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.directConnectGatewayOwnerAccount"></a>

- *Type:* `string`

---

##### `stateChangeError`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.stateChangeError"></a>

- *Type:* `string`

---

##### `virtualGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualGatewayOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.virtualGatewayOwnerAccount"></a>

- *Type:* `string`

---

##### `virtualGatewayRegion`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation.property.virtualGatewayRegion"></a>

- *Type:* `string`

---


### DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway(__scope: Construct, __resources: string[], __input: DirectConnectUpdateDirectConnectGatewayAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectUpdateDirectConnectGatewayAssociationRequest`](#aws-cdk-sdk.directconnect.DirectConnectUpdateDirectConnectGatewayAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.property.id"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.property.region"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway.property.type"></a>

- *Type:* `string`

---


### DirectConnectResponsesUpdateLag <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesUpdateLag(__scope: Construct, __resources: string[], __input: DirectConnectUpdateLagRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectUpdateLagRequest`](#aws-cdk-sdk.directconnect.DirectConnectUpdateLagRequest)

---



#### Properties <a name="Properties"></a>

##### `allowsHostedConnections`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.allowsHostedConnections"></a>

- *Type:* `boolean`

---

##### `awsDevice`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.awsDevice"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `connections`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.connections"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectConnection`](#aws-cdk-sdk.directconnect.DirectConnectConnection)[]

---

##### `connectionsBandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.connectionsBandwidth"></a>

- *Type:* `string`

---

##### `hasLogicalRedundancy`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.hasLogicalRedundancy"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `lagId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.lagId"></a>

- *Type:* `string`

---

##### `lagName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.lagName"></a>

- *Type:* `string`

---

##### `lagState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.lagState"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.location"></a>

- *Type:* `string`

---

##### `minimumLinks`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.minimumLinks"></a>

- *Type:* `number`

---

##### `numberOfConnections`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.numberOfConnections"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.ownerAccount"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.providerName"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.region"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateLag.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---


### DirectConnectResponsesUpdateVirtualInterfaceAttributes <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.Initializer"></a>

```typescript
import { directconnect } from 'aws-cdk-sdk'

new directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes(__scope: Construct, __resources: string[], __input: DirectConnectUpdateVirtualInterfaceAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectUpdateVirtualInterfaceAttributesRequest`](#aws-cdk-sdk.directconnect.DirectConnectUpdateVirtualInterfaceAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `addressFamily`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.addressFamily"></a>

- *Type:* `string`

---

##### `amazonAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.amazonAddress"></a>

- *Type:* `string`

---

##### `amazonSideAsn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.amazonSideAsn"></a>

- *Type:* `number`

---

##### `asn`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.asn"></a>

- *Type:* `number`

---

##### `authKey`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.authKey"></a>

- *Type:* `string`

---

##### `awsDeviceV2`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.awsDeviceV2"></a>

- *Type:* `string`

---

##### `bgpPeers`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.bgpPeers"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectBgpPeer`](#aws-cdk-sdk.directconnect.DirectConnectBgpPeer)[]

---

##### `connectionId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.connectionId"></a>

- *Type:* `string`

---

##### `customerAddress`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.customerAddress"></a>

- *Type:* `string`

---

##### `customerRouterConfig`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.customerRouterConfig"></a>

- *Type:* `string`

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.directConnectGatewayId"></a>

- *Type:* `string`

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.jumboFrameCapable"></a>

- *Type:* `boolean`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.location"></a>

- *Type:* `string`

---

##### `mtu`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.mtu"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.ownerAccount"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.region"></a>

- *Type:* `string`

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.routeFilterPrefixes"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix`](#aws-cdk-sdk.directconnect.DirectConnectRouteFilterPrefix)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.tags"></a>

- *Type:* [`aws-cdk-sdk.directconnect.DirectConnectTag`](#aws-cdk-sdk.directconnect.DirectConnectTag)[]

---

##### `virtualGatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.virtualGatewayId"></a>

- *Type:* `string`

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.virtualInterfaceId"></a>

- *Type:* `string`

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.virtualInterfaceName"></a>

- *Type:* `string`

---

##### `virtualInterfaceState`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.virtualInterfaceState"></a>

- *Type:* `string`

---

##### `virtualInterfaceType`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.virtualInterfaceType"></a>

- *Type:* `string`

---

##### `vlan`<sup>Required</sup> <a name="aws-cdk-sdk.directconnect.DirectConnectResponsesUpdateVirtualInterfaceAttributes.property.vlan"></a>

- *Type:* `number`

---



