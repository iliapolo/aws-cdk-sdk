import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DirectConnectClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptDirectConnectGatewayAssociationProposal(input: shapes.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest): DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposal {
    return new DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposal(this, this.__resources, input);
  }

  public allocateConnectionOnInterconnect(input: shapes.DirectConnectAllocateConnectionOnInterconnectRequest): DirectConnectResponsesAllocateConnectionOnInterconnect {
    return new DirectConnectResponsesAllocateConnectionOnInterconnect(this, this.__resources, input);
  }

  public allocateHostedConnection(input: shapes.DirectConnectAllocateHostedConnectionRequest): DirectConnectResponsesAllocateHostedConnection {
    return new DirectConnectResponsesAllocateHostedConnection(this, this.__resources, input);
  }

  public allocatePrivateVirtualInterface(input: shapes.DirectConnectAllocatePrivateVirtualInterfaceRequest): DirectConnectResponsesAllocatePrivateVirtualInterface {
    return new DirectConnectResponsesAllocatePrivateVirtualInterface(this, this.__resources, input);
  }

  public allocatePublicVirtualInterface(input: shapes.DirectConnectAllocatePublicVirtualInterfaceRequest): DirectConnectResponsesAllocatePublicVirtualInterface {
    return new DirectConnectResponsesAllocatePublicVirtualInterface(this, this.__resources, input);
  }

  public allocateTransitVirtualInterface(input: shapes.DirectConnectAllocateTransitVirtualInterfaceRequest): DirectConnectResponsesAllocateTransitVirtualInterface {
    return new DirectConnectResponsesAllocateTransitVirtualInterface(this, this.__resources, input);
  }

  public associateConnectionWithLag(input: shapes.DirectConnectAssociateConnectionWithLagRequest): DirectConnectResponsesAssociateConnectionWithLag {
    return new DirectConnectResponsesAssociateConnectionWithLag(this, this.__resources, input);
  }

  public associateHostedConnection(input: shapes.DirectConnectAssociateHostedConnectionRequest): DirectConnectResponsesAssociateHostedConnection {
    return new DirectConnectResponsesAssociateHostedConnection(this, this.__resources, input);
  }

  public associateMacSecKey(input: shapes.DirectConnectAssociateMacSecKeyRequest): DirectConnectResponsesAssociateMacSecKey {
    return new DirectConnectResponsesAssociateMacSecKey(this, this.__resources, input);
  }

  public associateVirtualInterface(input: shapes.DirectConnectAssociateVirtualInterfaceRequest): DirectConnectResponsesAssociateVirtualInterface {
    return new DirectConnectResponsesAssociateVirtualInterface(this, this.__resources, input);
  }

  public confirmConnection(input: shapes.DirectConnectConfirmConnectionRequest): DirectConnectResponsesConfirmConnection {
    return new DirectConnectResponsesConfirmConnection(this, this.__resources, input);
  }

  public confirmPrivateVirtualInterface(input: shapes.DirectConnectConfirmPrivateVirtualInterfaceRequest): DirectConnectResponsesConfirmPrivateVirtualInterface {
    return new DirectConnectResponsesConfirmPrivateVirtualInterface(this, this.__resources, input);
  }

  public confirmPublicVirtualInterface(input: shapes.DirectConnectConfirmPublicVirtualInterfaceRequest): DirectConnectResponsesConfirmPublicVirtualInterface {
    return new DirectConnectResponsesConfirmPublicVirtualInterface(this, this.__resources, input);
  }

  public confirmTransitVirtualInterface(input: shapes.DirectConnectConfirmTransitVirtualInterfaceRequest): DirectConnectResponsesConfirmTransitVirtualInterface {
    return new DirectConnectResponsesConfirmTransitVirtualInterface(this, this.__resources, input);
  }

  public createBgpPeer(input: shapes.DirectConnectCreateBgpPeerRequest): DirectConnectResponsesCreateBgpPeer {
    return new DirectConnectResponsesCreateBgpPeer(this, this.__resources, input);
  }

  public createConnection(input: shapes.DirectConnectCreateConnectionRequest): DirectConnectResponsesCreateConnection {
    return new DirectConnectResponsesCreateConnection(this, this.__resources, input);
  }

  public createDirectConnectGateway(input: shapes.DirectConnectCreateDirectConnectGatewayRequest): DirectConnectResponsesCreateDirectConnectGateway {
    return new DirectConnectResponsesCreateDirectConnectGateway(this, this.__resources, input);
  }

  public createDirectConnectGatewayAssociation(input: shapes.DirectConnectCreateDirectConnectGatewayAssociationRequest): DirectConnectResponsesCreateDirectConnectGatewayAssociation {
    return new DirectConnectResponsesCreateDirectConnectGatewayAssociation(this, this.__resources, input);
  }

  public createDirectConnectGatewayAssociationProposal(input: shapes.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest): DirectConnectResponsesCreateDirectConnectGatewayAssociationProposal {
    return new DirectConnectResponsesCreateDirectConnectGatewayAssociationProposal(this, this.__resources, input);
  }

  public createInterconnect(input: shapes.DirectConnectCreateInterconnectRequest): DirectConnectResponsesCreateInterconnect {
    return new DirectConnectResponsesCreateInterconnect(this, this.__resources, input);
  }

  public createLag(input: shapes.DirectConnectCreateLagRequest): DirectConnectResponsesCreateLag {
    return new DirectConnectResponsesCreateLag(this, this.__resources, input);
  }

  public createPrivateVirtualInterface(input: shapes.DirectConnectCreatePrivateVirtualInterfaceRequest): DirectConnectResponsesCreatePrivateVirtualInterface {
    return new DirectConnectResponsesCreatePrivateVirtualInterface(this, this.__resources, input);
  }

  public createPublicVirtualInterface(input: shapes.DirectConnectCreatePublicVirtualInterfaceRequest): DirectConnectResponsesCreatePublicVirtualInterface {
    return new DirectConnectResponsesCreatePublicVirtualInterface(this, this.__resources, input);
  }

  public createTransitVirtualInterface(input: shapes.DirectConnectCreateTransitVirtualInterfaceRequest): DirectConnectResponsesCreateTransitVirtualInterface {
    return new DirectConnectResponsesCreateTransitVirtualInterface(this, this.__resources, input);
  }

  public deleteBgpPeer(input: shapes.DirectConnectDeleteBgpPeerRequest): DirectConnectResponsesDeleteBgpPeer {
    return new DirectConnectResponsesDeleteBgpPeer(this, this.__resources, input);
  }

  public deleteConnection(input: shapes.DirectConnectDeleteConnectionRequest): DirectConnectResponsesDeleteConnection {
    return new DirectConnectResponsesDeleteConnection(this, this.__resources, input);
  }

  public deleteDirectConnectGateway(input: shapes.DirectConnectDeleteDirectConnectGatewayRequest): DirectConnectResponsesDeleteDirectConnectGateway {
    return new DirectConnectResponsesDeleteDirectConnectGateway(this, this.__resources, input);
  }

  public deleteDirectConnectGatewayAssociation(input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationRequest): DirectConnectResponsesDeleteDirectConnectGatewayAssociation {
    return new DirectConnectResponsesDeleteDirectConnectGatewayAssociation(this, this.__resources, input);
  }

  public deleteDirectConnectGatewayAssociationProposal(input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest): DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposal {
    return new DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposal(this, this.__resources, input);
  }

  public deleteInterconnect(input: shapes.DirectConnectDeleteInterconnectRequest): DirectConnectResponsesDeleteInterconnect {
    return new DirectConnectResponsesDeleteInterconnect(this, this.__resources, input);
  }

  public deleteLag(input: shapes.DirectConnectDeleteLagRequest): DirectConnectResponsesDeleteLag {
    return new DirectConnectResponsesDeleteLag(this, this.__resources, input);
  }

  public deleteVirtualInterface(input: shapes.DirectConnectDeleteVirtualInterfaceRequest): DirectConnectResponsesDeleteVirtualInterface {
    return new DirectConnectResponsesDeleteVirtualInterface(this, this.__resources, input);
  }

  public describeConnectionLoa(input: shapes.DirectConnectDescribeConnectionLoaRequest): DirectConnectResponsesDescribeConnectionLoa {
    return new DirectConnectResponsesDescribeConnectionLoa(this, this.__resources, input);
  }

  public describeConnections(input: shapes.DirectConnectDescribeConnectionsRequest): DirectConnectResponsesDescribeConnections {
    return new DirectConnectResponsesDescribeConnections(this, this.__resources, input);
  }

  public describeConnectionsOnInterconnect(input: shapes.DirectConnectDescribeConnectionsOnInterconnectRequest): DirectConnectResponsesDescribeConnectionsOnInterconnect {
    return new DirectConnectResponsesDescribeConnectionsOnInterconnect(this, this.__resources, input);
  }

  public describeDirectConnectGatewayAssociationProposals(input: shapes.DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest): DirectConnectResponsesDescribeDirectConnectGatewayAssociationProposals {
    return new DirectConnectResponsesDescribeDirectConnectGatewayAssociationProposals(this, this.__resources, input);
  }

  public describeDirectConnectGatewayAssociations(input: shapes.DirectConnectDescribeDirectConnectGatewayAssociationsRequest): DirectConnectResponsesDescribeDirectConnectGatewayAssociations {
    return new DirectConnectResponsesDescribeDirectConnectGatewayAssociations(this, this.__resources, input);
  }

  public describeDirectConnectGatewayAttachments(input: shapes.DirectConnectDescribeDirectConnectGatewayAttachmentsRequest): DirectConnectResponsesDescribeDirectConnectGatewayAttachments {
    return new DirectConnectResponsesDescribeDirectConnectGatewayAttachments(this, this.__resources, input);
  }

  public describeDirectConnectGateways(input: shapes.DirectConnectDescribeDirectConnectGatewaysRequest): DirectConnectResponsesDescribeDirectConnectGateways {
    return new DirectConnectResponsesDescribeDirectConnectGateways(this, this.__resources, input);
  }

  public describeHostedConnections(input: shapes.DirectConnectDescribeHostedConnectionsRequest): DirectConnectResponsesDescribeHostedConnections {
    return new DirectConnectResponsesDescribeHostedConnections(this, this.__resources, input);
  }

  public describeInterconnectLoa(input: shapes.DirectConnectDescribeInterconnectLoaRequest): DirectConnectResponsesDescribeInterconnectLoa {
    return new DirectConnectResponsesDescribeInterconnectLoa(this, this.__resources, input);
  }

  public describeInterconnects(input: shapes.DirectConnectDescribeInterconnectsRequest): DirectConnectResponsesDescribeInterconnects {
    return new DirectConnectResponsesDescribeInterconnects(this, this.__resources, input);
  }

  public describeLags(input: shapes.DirectConnectDescribeLagsRequest): DirectConnectResponsesDescribeLags {
    return new DirectConnectResponsesDescribeLags(this, this.__resources, input);
  }

  public describeLoa(input: shapes.DirectConnectDescribeLoaRequest): DirectConnectResponsesDescribeLoa {
    return new DirectConnectResponsesDescribeLoa(this, this.__resources, input);
  }

  public describeLocations(): DirectConnectResponsesDescribeLocations {
    return new DirectConnectResponsesDescribeLocations(this, this.__resources);
  }

  public describeTags(input: shapes.DirectConnectDescribeTagsRequest): DirectConnectResponsesDescribeTags {
    return new DirectConnectResponsesDescribeTags(this, this.__resources, input);
  }

  public describeVirtualGateways(): DirectConnectResponsesDescribeVirtualGateways {
    return new DirectConnectResponsesDescribeVirtualGateways(this, this.__resources);
  }

  public describeVirtualInterfaces(input: shapes.DirectConnectDescribeVirtualInterfacesRequest): DirectConnectResponsesDescribeVirtualInterfaces {
    return new DirectConnectResponsesDescribeVirtualInterfaces(this, this.__resources, input);
  }

  public disassociateConnectionFromLag(input: shapes.DirectConnectDisassociateConnectionFromLagRequest): DirectConnectResponsesDisassociateConnectionFromLag {
    return new DirectConnectResponsesDisassociateConnectionFromLag(this, this.__resources, input);
  }

  public disassociateMacSecKey(input: shapes.DirectConnectDisassociateMacSecKeyRequest): DirectConnectResponsesDisassociateMacSecKey {
    return new DirectConnectResponsesDisassociateMacSecKey(this, this.__resources, input);
  }

  public listVirtualInterfaceTestHistory(input: shapes.DirectConnectListVirtualInterfaceTestHistoryRequest): DirectConnectResponsesListVirtualInterfaceTestHistory {
    return new DirectConnectResponsesListVirtualInterfaceTestHistory(this, this.__resources, input);
  }

  public startBgpFailoverTest(input: shapes.DirectConnectStartBgpFailoverTestRequest): DirectConnectResponsesStartBgpFailoverTest {
    return new DirectConnectResponsesStartBgpFailoverTest(this, this.__resources, input);
  }

  public stopBgpFailoverTest(input: shapes.DirectConnectStopBgpFailoverTestRequest): DirectConnectResponsesStopBgpFailoverTest {
    return new DirectConnectResponsesStopBgpFailoverTest(this, this.__resources, input);
  }

  public tagResource(input: shapes.DirectConnectTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.DirectConnectUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateConnection(input: shapes.DirectConnectUpdateConnectionRequest): DirectConnectResponsesUpdateConnection {
    return new DirectConnectResponsesUpdateConnection(this, this.__resources, input);
  }

  public updateDirectConnectGatewayAssociation(input: shapes.DirectConnectUpdateDirectConnectGatewayAssociationRequest): DirectConnectResponsesUpdateDirectConnectGatewayAssociation {
    return new DirectConnectResponsesUpdateDirectConnectGatewayAssociation(this, this.__resources, input);
  }

  public updateLag(input: shapes.DirectConnectUpdateLagRequest): DirectConnectResponsesUpdateLag {
    return new DirectConnectResponsesUpdateLag(this, this.__resources, input);
  }

  public updateVirtualInterfaceAttributes(input: shapes.DirectConnectUpdateVirtualInterfaceAttributesRequest): DirectConnectResponsesUpdateVirtualInterfaceAttributes {
    return new DirectConnectResponsesUpdateVirtualInterfaceAttributes(this, this.__resources, input);
  }

}

export class DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposal {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest) {
  }

  public get directConnectGatewayAssociation(): DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation {
    return new DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest) {
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.directConnectGatewayId'),
        outputPath: 'directConnectGatewayAssociation.directConnectGatewayId',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          proposalId: this.__input.proposalId,
          associatedGatewayOwnerAccount: this.__input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.__input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.directConnectGatewayId', props);
    return resource.getResponseField('directConnectGatewayAssociation.directConnectGatewayId') as unknown as string;
  }

  public get directConnectGatewayOwnerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.directConnectGatewayOwnerAccount'),
        outputPath: 'directConnectGatewayAssociation.directConnectGatewayOwnerAccount',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          proposalId: this.__input.proposalId,
          associatedGatewayOwnerAccount: this.__input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.__input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.directConnectGatewayOwnerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.directConnectGatewayOwnerAccount') as unknown as string;
  }

  public get associationState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associationState'),
        outputPath: 'directConnectGatewayAssociation.associationState',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          proposalId: this.__input.proposalId,
          associatedGatewayOwnerAccount: this.__input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.__input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associationState', props);
    return resource.getResponseField('directConnectGatewayAssociation.associationState') as unknown as string;
  }

  public get stateChangeError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.stateChangeError'),
        outputPath: 'directConnectGatewayAssociation.stateChangeError',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          proposalId: this.__input.proposalId,
          associatedGatewayOwnerAccount: this.__input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.__input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.stateChangeError', props);
    return resource.getResponseField('directConnectGatewayAssociation.stateChangeError') as unknown as string;
  }

  public get associatedGateway(): DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway {
    return new DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway(this.__scope, this.__resources, this.__input);
  }

  public get associationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associationId'),
        outputPath: 'directConnectGatewayAssociation.associationId',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          proposalId: this.__input.proposalId,
          associatedGatewayOwnerAccount: this.__input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.__input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associationId', props);
    return resource.getResponseField('directConnectGatewayAssociation.associationId') as unknown as string;
  }

  public get allowedPrefixesToDirectConnectGateway(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway'),
        outputPath: 'directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          proposalId: this.__input.proposalId,
          associatedGatewayOwnerAccount: this.__input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.__input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway', props);
    return resource.getResponseField('directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get virtualGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.virtualGatewayId'),
        outputPath: 'directConnectGatewayAssociation.virtualGatewayId',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          proposalId: this.__input.proposalId,
          associatedGatewayOwnerAccount: this.__input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.__input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.virtualGatewayId', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayId') as unknown as string;
  }

  public get virtualGatewayRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.virtualGatewayRegion'),
        outputPath: 'directConnectGatewayAssociation.virtualGatewayRegion',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          proposalId: this.__input.proposalId,
          associatedGatewayOwnerAccount: this.__input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.__input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.virtualGatewayRegion', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayRegion') as unknown as string;
  }

  public get virtualGatewayOwnerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.virtualGatewayOwnerAccount'),
        outputPath: 'directConnectGatewayAssociation.virtualGatewayOwnerAccount',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          proposalId: this.__input.proposalId,
          associatedGatewayOwnerAccount: this.__input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.__input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.virtualGatewayOwnerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayOwnerAccount') as unknown as string;
  }

}

export class DirectConnectResponsesAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associatedGateway.id'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.id',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          proposalId: this.__input.proposalId,
          associatedGatewayOwnerAccount: this.__input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.__input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associatedGateway.id', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associatedGateway.type'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.type',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          proposalId: this.__input.proposalId,
          associatedGatewayOwnerAccount: this.__input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.__input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associatedGateway.type', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.type') as unknown as string;
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associatedGateway.ownerAccount'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.ownerAccount',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          proposalId: this.__input.proposalId,
          associatedGatewayOwnerAccount: this.__input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.__input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associatedGateway.ownerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.ownerAccount') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associatedGateway.region'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.region',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          proposalId: this.__input.proposalId,
          associatedGatewayOwnerAccount: this.__input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.__input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associatedGateway.region', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.region') as unknown as string;
  }

}

export class DirectConnectResponsesAllocateConnectionOnInterconnect {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectAllocateConnectionOnInterconnectRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get connectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.connectionName'),
        outputPath: 'connectionName',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.connectionName', props);
    return resource.getResponseField('connectionName') as unknown as string;
  }

  public get connectionState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.connectionState'),
        outputPath: 'connectionState',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.connectionState', props);
    return resource.getResponseField('connectionState') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.region'),
        outputPath: 'region',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.location'),
        outputPath: 'location',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get bandwidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.bandwidth'),
        outputPath: 'bandwidth',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.bandwidth', props);
    return resource.getResponseField('bandwidth') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.vlan'),
        outputPath: 'vlan',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.vlan', props);
    return resource.getResponseField('vlan') as unknown as number;
  }

  public get partnerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.partnerName'),
        outputPath: 'partnerName',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.partnerName', props);
    return resource.getResponseField('partnerName') as unknown as string;
  }

  public get loaIssueTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.loaIssueTime'),
        outputPath: 'loaIssueTime',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.loaIssueTime', props);
    return resource.getResponseField('loaIssueTime') as unknown as string;
  }

  public get lagId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.lagId'),
        outputPath: 'lagId',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.lagId', props);
    return resource.getResponseField('lagId') as unknown as string;
  }

  public get awsDevice(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.awsDevice'),
        outputPath: 'awsDevice',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.awsDevice', props);
    return resource.getResponseField('awsDevice') as unknown as string;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get hasLogicalRedundancy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.hasLogicalRedundancy'),
        outputPath: 'hasLogicalRedundancy',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.hasLogicalRedundancy', props);
    return resource.getResponseField('hasLogicalRedundancy') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.tags'),
        outputPath: 'tags',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.providerName'),
        outputPath: 'providerName',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

  public get macSecCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.macSecCapable'),
        outputPath: 'macSecCapable',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.macSecCapable', props);
    return resource.getResponseField('macSecCapable') as unknown as boolean;
  }

  public get portEncryptionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.portEncryptionStatus'),
        outputPath: 'portEncryptionStatus',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.portEncryptionStatus', props);
    return resource.getResponseField('portEncryptionStatus') as unknown as string;
  }

  public get encryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.encryptionMode'),
        outputPath: 'encryptionMode',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.encryptionMode', props);
    return resource.getResponseField('encryptionMode') as unknown as string;
  }

  public get macSecKeys(): shapes.DirectConnectMacSecKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateConnectionOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateConnectionOnInterconnect.macSecKeys'),
        outputPath: 'macSecKeys',
        parameters: {
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          ownerAccount: this.__input.ownerAccount,
          interconnectId: this.__input.interconnectId,
          vlan: this.__input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateConnectionOnInterconnect.macSecKeys', props);
    return resource.getResponseField('macSecKeys') as unknown as shapes.DirectConnectMacSecKey[];
  }

}

export class DirectConnectResponsesAllocateHostedConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectAllocateHostedConnectionRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get connectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.connectionName'),
        outputPath: 'connectionName',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.connectionName', props);
    return resource.getResponseField('connectionName') as unknown as string;
  }

  public get connectionState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.connectionState'),
        outputPath: 'connectionState',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.connectionState', props);
    return resource.getResponseField('connectionState') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.region'),
        outputPath: 'region',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.location'),
        outputPath: 'location',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get bandwidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.bandwidth'),
        outputPath: 'bandwidth',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.bandwidth', props);
    return resource.getResponseField('bandwidth') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.vlan'),
        outputPath: 'vlan',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.vlan', props);
    return resource.getResponseField('vlan') as unknown as number;
  }

  public get partnerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.partnerName'),
        outputPath: 'partnerName',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.partnerName', props);
    return resource.getResponseField('partnerName') as unknown as string;
  }

  public get loaIssueTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.loaIssueTime'),
        outputPath: 'loaIssueTime',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.loaIssueTime', props);
    return resource.getResponseField('loaIssueTime') as unknown as string;
  }

  public get lagId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.lagId'),
        outputPath: 'lagId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.lagId', props);
    return resource.getResponseField('lagId') as unknown as string;
  }

  public get awsDevice(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.awsDevice'),
        outputPath: 'awsDevice',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.awsDevice', props);
    return resource.getResponseField('awsDevice') as unknown as string;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get hasLogicalRedundancy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.hasLogicalRedundancy'),
        outputPath: 'hasLogicalRedundancy',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.hasLogicalRedundancy', props);
    return resource.getResponseField('hasLogicalRedundancy') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.tags'),
        outputPath: 'tags',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.providerName'),
        outputPath: 'providerName',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

  public get macSecCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.macSecCapable'),
        outputPath: 'macSecCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.macSecCapable', props);
    return resource.getResponseField('macSecCapable') as unknown as boolean;
  }

  public get portEncryptionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.portEncryptionStatus'),
        outputPath: 'portEncryptionStatus',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.portEncryptionStatus', props);
    return resource.getResponseField('portEncryptionStatus') as unknown as string;
  }

  public get encryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.encryptionMode'),
        outputPath: 'encryptionMode',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.encryptionMode', props);
    return resource.getResponseField('encryptionMode') as unknown as string;
  }

  public get macSecKeys(): shapes.DirectConnectMacSecKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateHostedConnection.macSecKeys'),
        outputPath: 'macSecKeys',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          vlan: this.__input.vlan,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateHostedConnection.macSecKeys', props);
    return resource.getResponseField('macSecKeys') as unknown as shapes.DirectConnectMacSecKey[];
  }

}

export class DirectConnectResponsesAllocatePrivateVirtualInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectAllocatePrivateVirtualInterfaceRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get virtualInterfaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.virtualInterfaceId'),
        outputPath: 'virtualInterfaceId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.virtualInterfaceId', props);
    return resource.getResponseField('virtualInterfaceId') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.location'),
        outputPath: 'location',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get virtualInterfaceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.virtualInterfaceType'),
        outputPath: 'virtualInterfaceType',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.virtualInterfaceType', props);
    return resource.getResponseField('virtualInterfaceType') as unknown as string;
  }

  public get virtualInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.virtualInterfaceName'),
        outputPath: 'virtualInterfaceName',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.virtualInterfaceName', props);
    return resource.getResponseField('virtualInterfaceName') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.vlan'),
        outputPath: 'vlan',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.vlan', props);
    return resource.getResponseField('vlan') as unknown as number;
  }

  public get asn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.asn'),
        outputPath: 'asn',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.asn', props);
    return resource.getResponseField('asn') as unknown as number;
  }

  public get amazonSideAsn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.amazonSideAsn'),
        outputPath: 'amazonSideAsn',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.amazonSideAsn', props);
    return resource.getResponseField('amazonSideAsn') as unknown as number;
  }

  public get authKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.authKey'),
        outputPath: 'authKey',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.authKey', props);
    return resource.getResponseField('authKey') as unknown as string;
  }

  public get amazonAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.amazonAddress'),
        outputPath: 'amazonAddress',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.amazonAddress', props);
    return resource.getResponseField('amazonAddress') as unknown as string;
  }

  public get customerAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.customerAddress'),
        outputPath: 'customerAddress',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.customerAddress', props);
    return resource.getResponseField('customerAddress') as unknown as string;
  }

  public get addressFamily(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.addressFamily'),
        outputPath: 'addressFamily',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.addressFamily', props);
    return resource.getResponseField('addressFamily') as unknown as string;
  }

  public get virtualInterfaceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.virtualInterfaceState'),
        outputPath: 'virtualInterfaceState',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterfaceState') as unknown as string;
  }

  public get customerRouterConfig(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.customerRouterConfig'),
        outputPath: 'customerRouterConfig',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.customerRouterConfig', props);
    return resource.getResponseField('customerRouterConfig') as unknown as string;
  }

  public get mtu(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.mtu'),
        outputPath: 'mtu',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.mtu', props);
    return resource.getResponseField('mtu') as unknown as number;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get virtualGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.virtualGatewayId'),
        outputPath: 'virtualGatewayId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.virtualGatewayId', props);
    return resource.getResponseField('virtualGatewayId') as unknown as string;
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.directConnectGatewayId'),
        outputPath: 'directConnectGatewayId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.directConnectGatewayId', props);
    return resource.getResponseField('directConnectGatewayId') as unknown as string;
  }

  public get routeFilterPrefixes(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.routeFilterPrefixes'),
        outputPath: 'routeFilterPrefixes',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.routeFilterPrefixes', props);
    return resource.getResponseField('routeFilterPrefixes') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get bgpPeers(): shapes.DirectConnectBgpPeer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.bgpPeers'),
        outputPath: 'bgpPeers',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.bgpPeers', props);
    return resource.getResponseField('bgpPeers') as unknown as shapes.DirectConnectBgpPeer[];
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.region'),
        outputPath: 'region',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePrivateVirtualInterface.tags'),
        outputPath: 'tags',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.__input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.__input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.__input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.__input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePrivateVirtualInterface.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectResponsesAllocatePublicVirtualInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectAllocatePublicVirtualInterfaceRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get virtualInterfaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.virtualInterfaceId'),
        outputPath: 'virtualInterfaceId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.virtualInterfaceId', props);
    return resource.getResponseField('virtualInterfaceId') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.location'),
        outputPath: 'location',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get virtualInterfaceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.virtualInterfaceType'),
        outputPath: 'virtualInterfaceType',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.virtualInterfaceType', props);
    return resource.getResponseField('virtualInterfaceType') as unknown as string;
  }

  public get virtualInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.virtualInterfaceName'),
        outputPath: 'virtualInterfaceName',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.virtualInterfaceName', props);
    return resource.getResponseField('virtualInterfaceName') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.vlan'),
        outputPath: 'vlan',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.vlan', props);
    return resource.getResponseField('vlan') as unknown as number;
  }

  public get asn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.asn'),
        outputPath: 'asn',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.asn', props);
    return resource.getResponseField('asn') as unknown as number;
  }

  public get amazonSideAsn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.amazonSideAsn'),
        outputPath: 'amazonSideAsn',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.amazonSideAsn', props);
    return resource.getResponseField('amazonSideAsn') as unknown as number;
  }

  public get authKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.authKey'),
        outputPath: 'authKey',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.authKey', props);
    return resource.getResponseField('authKey') as unknown as string;
  }

  public get amazonAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.amazonAddress'),
        outputPath: 'amazonAddress',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.amazonAddress', props);
    return resource.getResponseField('amazonAddress') as unknown as string;
  }

  public get customerAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.customerAddress'),
        outputPath: 'customerAddress',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.customerAddress', props);
    return resource.getResponseField('customerAddress') as unknown as string;
  }

  public get addressFamily(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.addressFamily'),
        outputPath: 'addressFamily',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.addressFamily', props);
    return resource.getResponseField('addressFamily') as unknown as string;
  }

  public get virtualInterfaceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.virtualInterfaceState'),
        outputPath: 'virtualInterfaceState',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterfaceState') as unknown as string;
  }

  public get customerRouterConfig(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.customerRouterConfig'),
        outputPath: 'customerRouterConfig',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.customerRouterConfig', props);
    return resource.getResponseField('customerRouterConfig') as unknown as string;
  }

  public get mtu(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.mtu'),
        outputPath: 'mtu',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.mtu', props);
    return resource.getResponseField('mtu') as unknown as number;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get virtualGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.virtualGatewayId'),
        outputPath: 'virtualGatewayId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.virtualGatewayId', props);
    return resource.getResponseField('virtualGatewayId') as unknown as string;
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.directConnectGatewayId'),
        outputPath: 'directConnectGatewayId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.directConnectGatewayId', props);
    return resource.getResponseField('directConnectGatewayId') as unknown as string;
  }

  public get routeFilterPrefixes(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.routeFilterPrefixes'),
        outputPath: 'routeFilterPrefixes',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.routeFilterPrefixes', props);
    return resource.getResponseField('routeFilterPrefixes') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get bgpPeers(): shapes.DirectConnectBgpPeer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.bgpPeers'),
        outputPath: 'bgpPeers',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.bgpPeers', props);
    return resource.getResponseField('bgpPeers') as unknown as shapes.DirectConnectBgpPeer[];
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.region'),
        outputPath: 'region',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocatePublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocatePublicVirtualInterface.tags'),
        outputPath: 'tags',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.__input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.__input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocatePublicVirtualInterface.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectResponsesAllocateTransitVirtualInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectAllocateTransitVirtualInterfaceRequest) {
  }

  public get virtualInterface(): DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface {
    return new DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesAllocateTransitVirtualInterfaceVirtualInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectAllocateTransitVirtualInterfaceRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.ownerAccount'),
        outputPath: 'virtualInterface.ownerAccount',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.ownerAccount', props);
    return resource.getResponseField('virtualInterface.ownerAccount') as unknown as string;
  }

  public get virtualInterfaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.virtualInterfaceId'),
        outputPath: 'virtualInterface.virtualInterfaceId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.virtualInterfaceId', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceId') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.location'),
        outputPath: 'virtualInterface.location',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.location', props);
    return resource.getResponseField('virtualInterface.location') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.connectionId'),
        outputPath: 'virtualInterface.connectionId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.connectionId', props);
    return resource.getResponseField('virtualInterface.connectionId') as unknown as string;
  }

  public get virtualInterfaceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.virtualInterfaceType'),
        outputPath: 'virtualInterface.virtualInterfaceType',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.virtualInterfaceType', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceType') as unknown as string;
  }

  public get virtualInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.virtualInterfaceName'),
        outputPath: 'virtualInterface.virtualInterfaceName',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.virtualInterfaceName', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceName') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.vlan'),
        outputPath: 'virtualInterface.vlan',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.vlan', props);
    return resource.getResponseField('virtualInterface.vlan') as unknown as number;
  }

  public get asn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.asn'),
        outputPath: 'virtualInterface.asn',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.asn', props);
    return resource.getResponseField('virtualInterface.asn') as unknown as number;
  }

  public get amazonSideAsn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.amazonSideAsn'),
        outputPath: 'virtualInterface.amazonSideAsn',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.amazonSideAsn', props);
    return resource.getResponseField('virtualInterface.amazonSideAsn') as unknown as number;
  }

  public get authKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.authKey'),
        outputPath: 'virtualInterface.authKey',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.authKey', props);
    return resource.getResponseField('virtualInterface.authKey') as unknown as string;
  }

  public get amazonAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.amazonAddress'),
        outputPath: 'virtualInterface.amazonAddress',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.amazonAddress', props);
    return resource.getResponseField('virtualInterface.amazonAddress') as unknown as string;
  }

  public get customerAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.customerAddress'),
        outputPath: 'virtualInterface.customerAddress',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.customerAddress', props);
    return resource.getResponseField('virtualInterface.customerAddress') as unknown as string;
  }

  public get addressFamily(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.addressFamily'),
        outputPath: 'virtualInterface.addressFamily',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.addressFamily', props);
    return resource.getResponseField('virtualInterface.addressFamily') as unknown as string;
  }

  public get virtualInterfaceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.virtualInterfaceState'),
        outputPath: 'virtualInterface.virtualInterfaceState',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceState') as unknown as string;
  }

  public get customerRouterConfig(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.customerRouterConfig'),
        outputPath: 'virtualInterface.customerRouterConfig',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.customerRouterConfig', props);
    return resource.getResponseField('virtualInterface.customerRouterConfig') as unknown as string;
  }

  public get mtu(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.mtu'),
        outputPath: 'virtualInterface.mtu',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.mtu', props);
    return resource.getResponseField('virtualInterface.mtu') as unknown as number;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.jumboFrameCapable'),
        outputPath: 'virtualInterface.jumboFrameCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.jumboFrameCapable', props);
    return resource.getResponseField('virtualInterface.jumboFrameCapable') as unknown as boolean;
  }

  public get virtualGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.virtualGatewayId'),
        outputPath: 'virtualInterface.virtualGatewayId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.virtualGatewayId', props);
    return resource.getResponseField('virtualInterface.virtualGatewayId') as unknown as string;
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.directConnectGatewayId'),
        outputPath: 'virtualInterface.directConnectGatewayId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.directConnectGatewayId', props);
    return resource.getResponseField('virtualInterface.directConnectGatewayId') as unknown as string;
  }

  public get routeFilterPrefixes(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.routeFilterPrefixes'),
        outputPath: 'virtualInterface.routeFilterPrefixes',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.routeFilterPrefixes', props);
    return resource.getResponseField('virtualInterface.routeFilterPrefixes') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get bgpPeers(): shapes.DirectConnectBgpPeer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.bgpPeers'),
        outputPath: 'virtualInterface.bgpPeers',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.bgpPeers', props);
    return resource.getResponseField('virtualInterface.bgpPeers') as unknown as shapes.DirectConnectBgpPeer[];
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.region'),
        outputPath: 'virtualInterface.region',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.region', props);
    return resource.getResponseField('virtualInterface.region') as unknown as string;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.awsDeviceV2'),
        outputPath: 'virtualInterface.awsDeviceV2',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.awsDeviceV2', props);
    return resource.getResponseField('virtualInterface.awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.awsLogicalDeviceId'),
        outputPath: 'virtualInterface.awsLogicalDeviceId',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.awsLogicalDeviceId', props);
    return resource.getResponseField('virtualInterface.awsLogicalDeviceId') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AllocateTransitVirtualInterface.virtualInterface.tags'),
        outputPath: 'virtualInterface.tags',
        parameters: {
          connectionId: this.__input.connectionId,
          ownerAccount: this.__input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.__input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.__input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.__input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.__input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.__input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.__input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateTransitVirtualInterface.virtualInterface.tags', props);
    return resource.getResponseField('virtualInterface.tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectResponsesAssociateConnectionWithLag {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectAssociateConnectionWithLagRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get connectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.connectionName'),
        outputPath: 'connectionName',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.connectionName', props);
    return resource.getResponseField('connectionName') as unknown as string;
  }

  public get connectionState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.connectionState'),
        outputPath: 'connectionState',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.connectionState', props);
    return resource.getResponseField('connectionState') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.region'),
        outputPath: 'region',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.location'),
        outputPath: 'location',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get bandwidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.bandwidth'),
        outputPath: 'bandwidth',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.bandwidth', props);
    return resource.getResponseField('bandwidth') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.vlan'),
        outputPath: 'vlan',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.vlan', props);
    return resource.getResponseField('vlan') as unknown as number;
  }

  public get partnerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.partnerName'),
        outputPath: 'partnerName',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.partnerName', props);
    return resource.getResponseField('partnerName') as unknown as string;
  }

  public get loaIssueTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.loaIssueTime'),
        outputPath: 'loaIssueTime',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.loaIssueTime', props);
    return resource.getResponseField('loaIssueTime') as unknown as string;
  }

  public get lagId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.lagId'),
        outputPath: 'lagId',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.lagId', props);
    return resource.getResponseField('lagId') as unknown as string;
  }

  public get awsDevice(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.awsDevice'),
        outputPath: 'awsDevice',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.awsDevice', props);
    return resource.getResponseField('awsDevice') as unknown as string;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get hasLogicalRedundancy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.hasLogicalRedundancy'),
        outputPath: 'hasLogicalRedundancy',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.hasLogicalRedundancy', props);
    return resource.getResponseField('hasLogicalRedundancy') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.tags'),
        outputPath: 'tags',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.providerName'),
        outputPath: 'providerName',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

  public get macSecCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.macSecCapable'),
        outputPath: 'macSecCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.macSecCapable', props);
    return resource.getResponseField('macSecCapable') as unknown as boolean;
  }

  public get portEncryptionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.portEncryptionStatus'),
        outputPath: 'portEncryptionStatus',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.portEncryptionStatus', props);
    return resource.getResponseField('portEncryptionStatus') as unknown as string;
  }

  public get encryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.encryptionMode'),
        outputPath: 'encryptionMode',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.encryptionMode', props);
    return resource.getResponseField('encryptionMode') as unknown as string;
  }

  public get macSecKeys(): shapes.DirectConnectMacSecKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionWithLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateConnectionWithLag.macSecKeys'),
        outputPath: 'macSecKeys',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionWithLag.macSecKeys', props);
    return resource.getResponseField('macSecKeys') as unknown as shapes.DirectConnectMacSecKey[];
  }

}

export class DirectConnectResponsesAssociateHostedConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectAssociateHostedConnectionRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get connectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.connectionName'),
        outputPath: 'connectionName',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.connectionName', props);
    return resource.getResponseField('connectionName') as unknown as string;
  }

  public get connectionState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.connectionState'),
        outputPath: 'connectionState',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.connectionState', props);
    return resource.getResponseField('connectionState') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.region'),
        outputPath: 'region',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.location'),
        outputPath: 'location',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get bandwidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.bandwidth'),
        outputPath: 'bandwidth',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.bandwidth', props);
    return resource.getResponseField('bandwidth') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.vlan'),
        outputPath: 'vlan',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.vlan', props);
    return resource.getResponseField('vlan') as unknown as number;
  }

  public get partnerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.partnerName'),
        outputPath: 'partnerName',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.partnerName', props);
    return resource.getResponseField('partnerName') as unknown as string;
  }

  public get loaIssueTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.loaIssueTime'),
        outputPath: 'loaIssueTime',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.loaIssueTime', props);
    return resource.getResponseField('loaIssueTime') as unknown as string;
  }

  public get lagId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.lagId'),
        outputPath: 'lagId',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.lagId', props);
    return resource.getResponseField('lagId') as unknown as string;
  }

  public get awsDevice(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.awsDevice'),
        outputPath: 'awsDevice',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.awsDevice', props);
    return resource.getResponseField('awsDevice') as unknown as string;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get hasLogicalRedundancy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.hasLogicalRedundancy'),
        outputPath: 'hasLogicalRedundancy',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.hasLogicalRedundancy', props);
    return resource.getResponseField('hasLogicalRedundancy') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.tags'),
        outputPath: 'tags',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.providerName'),
        outputPath: 'providerName',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

  public get macSecCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.macSecCapable'),
        outputPath: 'macSecCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.macSecCapable', props);
    return resource.getResponseField('macSecCapable') as unknown as boolean;
  }

  public get portEncryptionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.portEncryptionStatus'),
        outputPath: 'portEncryptionStatus',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.portEncryptionStatus', props);
    return resource.getResponseField('portEncryptionStatus') as unknown as string;
  }

  public get encryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.encryptionMode'),
        outputPath: 'encryptionMode',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.encryptionMode', props);
    return resource.getResponseField('encryptionMode') as unknown as string;
  }

  public get macSecKeys(): shapes.DirectConnectMacSecKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateHostedConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateHostedConnection.macSecKeys'),
        outputPath: 'macSecKeys',
        parameters: {
          connectionId: this.__input.connectionId,
          parentConnectionId: this.__input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateHostedConnection.macSecKeys', props);
    return resource.getResponseField('macSecKeys') as unknown as shapes.DirectConnectMacSecKey[];
  }

}

export class DirectConnectResponsesAssociateMacSecKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectAssociateMacSecKeyRequest) {
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateMacSecKey',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateMacSecKey.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          connectionId: this.__input.connectionId,
          secretARN: this.__input.secretARN,
          ckn: this.__input.ckn,
          cak: this.__input.cak,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateMacSecKey.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get macSecKeys(): shapes.DirectConnectMacSecKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateMacSecKey',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateMacSecKey.macSecKeys'),
        outputPath: 'macSecKeys',
        parameters: {
          connectionId: this.__input.connectionId,
          secretARN: this.__input.secretARN,
          ckn: this.__input.ckn,
          cak: this.__input.cak,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateMacSecKey.macSecKeys', props);
    return resource.getResponseField('macSecKeys') as unknown as shapes.DirectConnectMacSecKey[];
  }

}

export class DirectConnectResponsesAssociateVirtualInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectAssociateVirtualInterfaceRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get virtualInterfaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.virtualInterfaceId'),
        outputPath: 'virtualInterfaceId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.virtualInterfaceId', props);
    return resource.getResponseField('virtualInterfaceId') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.location'),
        outputPath: 'location',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get virtualInterfaceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.virtualInterfaceType'),
        outputPath: 'virtualInterfaceType',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.virtualInterfaceType', props);
    return resource.getResponseField('virtualInterfaceType') as unknown as string;
  }

  public get virtualInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.virtualInterfaceName'),
        outputPath: 'virtualInterfaceName',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.virtualInterfaceName', props);
    return resource.getResponseField('virtualInterfaceName') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.vlan'),
        outputPath: 'vlan',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.vlan', props);
    return resource.getResponseField('vlan') as unknown as number;
  }

  public get asn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.asn'),
        outputPath: 'asn',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.asn', props);
    return resource.getResponseField('asn') as unknown as number;
  }

  public get amazonSideAsn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.amazonSideAsn'),
        outputPath: 'amazonSideAsn',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.amazonSideAsn', props);
    return resource.getResponseField('amazonSideAsn') as unknown as number;
  }

  public get authKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.authKey'),
        outputPath: 'authKey',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.authKey', props);
    return resource.getResponseField('authKey') as unknown as string;
  }

  public get amazonAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.amazonAddress'),
        outputPath: 'amazonAddress',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.amazonAddress', props);
    return resource.getResponseField('amazonAddress') as unknown as string;
  }

  public get customerAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.customerAddress'),
        outputPath: 'customerAddress',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.customerAddress', props);
    return resource.getResponseField('customerAddress') as unknown as string;
  }

  public get addressFamily(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.addressFamily'),
        outputPath: 'addressFamily',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.addressFamily', props);
    return resource.getResponseField('addressFamily') as unknown as string;
  }

  public get virtualInterfaceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.virtualInterfaceState'),
        outputPath: 'virtualInterfaceState',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterfaceState') as unknown as string;
  }

  public get customerRouterConfig(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.customerRouterConfig'),
        outputPath: 'customerRouterConfig',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.customerRouterConfig', props);
    return resource.getResponseField('customerRouterConfig') as unknown as string;
  }

  public get mtu(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.mtu'),
        outputPath: 'mtu',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.mtu', props);
    return resource.getResponseField('mtu') as unknown as number;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get virtualGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.virtualGatewayId'),
        outputPath: 'virtualGatewayId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.virtualGatewayId', props);
    return resource.getResponseField('virtualGatewayId') as unknown as string;
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.directConnectGatewayId'),
        outputPath: 'directConnectGatewayId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.directConnectGatewayId', props);
    return resource.getResponseField('directConnectGatewayId') as unknown as string;
  }

  public get routeFilterPrefixes(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.routeFilterPrefixes'),
        outputPath: 'routeFilterPrefixes',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.routeFilterPrefixes', props);
    return resource.getResponseField('routeFilterPrefixes') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get bgpPeers(): shapes.DirectConnectBgpPeer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.bgpPeers'),
        outputPath: 'bgpPeers',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.bgpPeers', props);
    return resource.getResponseField('bgpPeers') as unknown as shapes.DirectConnectBgpPeer[];
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.region'),
        outputPath: 'region',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.AssociateVirtualInterface.tags'),
        outputPath: 'tags',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateVirtualInterface.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectResponsesConfirmConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectConfirmConnectionRequest) {
  }

  public get connectionState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'confirmConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.ConfirmConnection.connectionState'),
        outputPath: 'connectionState',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ConfirmConnection.connectionState', props);
    return resource.getResponseField('connectionState') as unknown as string;
  }

}

export class DirectConnectResponsesConfirmPrivateVirtualInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectConfirmPrivateVirtualInterfaceRequest) {
  }

  public get virtualInterfaceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'confirmPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.ConfirmPrivateVirtualInterface.virtualInterfaceState'),
        outputPath: 'virtualInterfaceState',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          virtualGatewayId: this.__input.virtualGatewayId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ConfirmPrivateVirtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterfaceState') as unknown as string;
  }

}

export class DirectConnectResponsesConfirmPublicVirtualInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectConfirmPublicVirtualInterfaceRequest) {
  }

  public get virtualInterfaceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'confirmPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.ConfirmPublicVirtualInterface.virtualInterfaceState'),
        outputPath: 'virtualInterfaceState',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ConfirmPublicVirtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterfaceState') as unknown as string;
  }

}

export class DirectConnectResponsesConfirmTransitVirtualInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectConfirmTransitVirtualInterfaceRequest) {
  }

  public get virtualInterfaceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'confirmTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.ConfirmTransitVirtualInterface.virtualInterfaceState'),
        outputPath: 'virtualInterfaceState',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ConfirmTransitVirtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterfaceState') as unknown as string;
  }

}

export class DirectConnectResponsesCreateBgpPeer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreateBgpPeerRequest) {
  }

  public get virtualInterface(): DirectConnectResponsesCreateBgpPeerVirtualInterface {
    return new DirectConnectResponsesCreateBgpPeerVirtualInterface(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesCreateBgpPeerVirtualInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreateBgpPeerRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.ownerAccount'),
        outputPath: 'virtualInterface.ownerAccount',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.ownerAccount', props);
    return resource.getResponseField('virtualInterface.ownerAccount') as unknown as string;
  }

  public get virtualInterfaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.virtualInterfaceId'),
        outputPath: 'virtualInterface.virtualInterfaceId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.virtualInterfaceId', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceId') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.location'),
        outputPath: 'virtualInterface.location',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.location', props);
    return resource.getResponseField('virtualInterface.location') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.connectionId'),
        outputPath: 'virtualInterface.connectionId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.connectionId', props);
    return resource.getResponseField('virtualInterface.connectionId') as unknown as string;
  }

  public get virtualInterfaceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.virtualInterfaceType'),
        outputPath: 'virtualInterface.virtualInterfaceType',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.virtualInterfaceType', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceType') as unknown as string;
  }

  public get virtualInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.virtualInterfaceName'),
        outputPath: 'virtualInterface.virtualInterfaceName',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.virtualInterfaceName', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceName') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.vlan'),
        outputPath: 'virtualInterface.vlan',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.vlan', props);
    return resource.getResponseField('virtualInterface.vlan') as unknown as number;
  }

  public get asn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.asn'),
        outputPath: 'virtualInterface.asn',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.asn', props);
    return resource.getResponseField('virtualInterface.asn') as unknown as number;
  }

  public get amazonSideAsn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.amazonSideAsn'),
        outputPath: 'virtualInterface.amazonSideAsn',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.amazonSideAsn', props);
    return resource.getResponseField('virtualInterface.amazonSideAsn') as unknown as number;
  }

  public get authKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.authKey'),
        outputPath: 'virtualInterface.authKey',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.authKey', props);
    return resource.getResponseField('virtualInterface.authKey') as unknown as string;
  }

  public get amazonAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.amazonAddress'),
        outputPath: 'virtualInterface.amazonAddress',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.amazonAddress', props);
    return resource.getResponseField('virtualInterface.amazonAddress') as unknown as string;
  }

  public get customerAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.customerAddress'),
        outputPath: 'virtualInterface.customerAddress',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.customerAddress', props);
    return resource.getResponseField('virtualInterface.customerAddress') as unknown as string;
  }

  public get addressFamily(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.addressFamily'),
        outputPath: 'virtualInterface.addressFamily',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.addressFamily', props);
    return resource.getResponseField('virtualInterface.addressFamily') as unknown as string;
  }

  public get virtualInterfaceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.virtualInterfaceState'),
        outputPath: 'virtualInterface.virtualInterfaceState',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceState') as unknown as string;
  }

  public get customerRouterConfig(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.customerRouterConfig'),
        outputPath: 'virtualInterface.customerRouterConfig',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.customerRouterConfig', props);
    return resource.getResponseField('virtualInterface.customerRouterConfig') as unknown as string;
  }

  public get mtu(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.mtu'),
        outputPath: 'virtualInterface.mtu',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.mtu', props);
    return resource.getResponseField('virtualInterface.mtu') as unknown as number;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.jumboFrameCapable'),
        outputPath: 'virtualInterface.jumboFrameCapable',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.jumboFrameCapable', props);
    return resource.getResponseField('virtualInterface.jumboFrameCapable') as unknown as boolean;
  }

  public get virtualGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.virtualGatewayId'),
        outputPath: 'virtualInterface.virtualGatewayId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.virtualGatewayId', props);
    return resource.getResponseField('virtualInterface.virtualGatewayId') as unknown as string;
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.directConnectGatewayId'),
        outputPath: 'virtualInterface.directConnectGatewayId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.directConnectGatewayId', props);
    return resource.getResponseField('virtualInterface.directConnectGatewayId') as unknown as string;
  }

  public get routeFilterPrefixes(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.routeFilterPrefixes'),
        outputPath: 'virtualInterface.routeFilterPrefixes',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.routeFilterPrefixes', props);
    return resource.getResponseField('virtualInterface.routeFilterPrefixes') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get bgpPeers(): shapes.DirectConnectBgpPeer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.bgpPeers'),
        outputPath: 'virtualInterface.bgpPeers',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.bgpPeers', props);
    return resource.getResponseField('virtualInterface.bgpPeers') as unknown as shapes.DirectConnectBgpPeer[];
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.region'),
        outputPath: 'virtualInterface.region',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.region', props);
    return resource.getResponseField('virtualInterface.region') as unknown as string;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.awsDeviceV2'),
        outputPath: 'virtualInterface.awsDeviceV2',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.awsDeviceV2', props);
    return resource.getResponseField('virtualInterface.awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.awsLogicalDeviceId'),
        outputPath: 'virtualInterface.awsLogicalDeviceId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.awsLogicalDeviceId', props);
    return resource.getResponseField('virtualInterface.awsLogicalDeviceId') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateBGPPeer.virtualInterface.tags'),
        outputPath: 'virtualInterface.tags',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.__input.newBGPPeer?.asn,
            authKey: this.__input.newBGPPeer?.authKey,
            addressFamily: this.__input.newBGPPeer?.addressFamily,
            amazonAddress: this.__input.newBGPPeer?.amazonAddress,
            customerAddress: this.__input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBGPPeer.virtualInterface.tags', props);
    return resource.getResponseField('virtualInterface.tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectResponsesCreateConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreateConnectionRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get connectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.connectionName'),
        outputPath: 'connectionName',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.connectionName', props);
    return resource.getResponseField('connectionName') as unknown as string;
  }

  public get connectionState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.connectionState'),
        outputPath: 'connectionState',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.connectionState', props);
    return resource.getResponseField('connectionState') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.region'),
        outputPath: 'region',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.location'),
        outputPath: 'location',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get bandwidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.bandwidth'),
        outputPath: 'bandwidth',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.bandwidth', props);
    return resource.getResponseField('bandwidth') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.vlan'),
        outputPath: 'vlan',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.vlan', props);
    return resource.getResponseField('vlan') as unknown as number;
  }

  public get partnerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.partnerName'),
        outputPath: 'partnerName',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.partnerName', props);
    return resource.getResponseField('partnerName') as unknown as string;
  }

  public get loaIssueTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.loaIssueTime'),
        outputPath: 'loaIssueTime',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.loaIssueTime', props);
    return resource.getResponseField('loaIssueTime') as unknown as string;
  }

  public get lagId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.lagId'),
        outputPath: 'lagId',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.lagId', props);
    return resource.getResponseField('lagId') as unknown as string;
  }

  public get awsDevice(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.awsDevice'),
        outputPath: 'awsDevice',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.awsDevice', props);
    return resource.getResponseField('awsDevice') as unknown as string;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get hasLogicalRedundancy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.hasLogicalRedundancy'),
        outputPath: 'hasLogicalRedundancy',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.hasLogicalRedundancy', props);
    return resource.getResponseField('hasLogicalRedundancy') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.tags'),
        outputPath: 'tags',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.providerName'),
        outputPath: 'providerName',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

  public get macSecCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.macSecCapable'),
        outputPath: 'macSecCapable',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.macSecCapable', props);
    return resource.getResponseField('macSecCapable') as unknown as boolean;
  }

  public get portEncryptionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.portEncryptionStatus'),
        outputPath: 'portEncryptionStatus',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.portEncryptionStatus', props);
    return resource.getResponseField('portEncryptionStatus') as unknown as string;
  }

  public get encryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.encryptionMode'),
        outputPath: 'encryptionMode',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.encryptionMode', props);
    return resource.getResponseField('encryptionMode') as unknown as string;
  }

  public get macSecKeys(): shapes.DirectConnectMacSecKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateConnection.macSecKeys'),
        outputPath: 'macSecKeys',
        parameters: {
          location: this.__input.location,
          bandwidth: this.__input.bandwidth,
          connectionName: this.__input.connectionName,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.macSecKeys', props);
    return resource.getResponseField('macSecKeys') as unknown as shapes.DirectConnectMacSecKey[];
  }

}

export class DirectConnectResponsesCreateDirectConnectGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreateDirectConnectGatewayRequest) {
  }

  public get directConnectGateway(): DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway {
    return new DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesCreateDirectConnectGatewayDirectConnectGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreateDirectConnectGatewayRequest) {
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGateway',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGateway.directConnectGateway.directConnectGatewayId'),
        outputPath: 'directConnectGateway.directConnectGatewayId',
        parameters: {
          directConnectGatewayName: this.__input.directConnectGatewayName,
          amazonSideAsn: this.__input.amazonSideAsn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGateway.directConnectGateway.directConnectGatewayId', props);
    return resource.getResponseField('directConnectGateway.directConnectGatewayId') as unknown as string;
  }

  public get directConnectGatewayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGateway',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGateway.directConnectGateway.directConnectGatewayName'),
        outputPath: 'directConnectGateway.directConnectGatewayName',
        parameters: {
          directConnectGatewayName: this.__input.directConnectGatewayName,
          amazonSideAsn: this.__input.amazonSideAsn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGateway.directConnectGateway.directConnectGatewayName', props);
    return resource.getResponseField('directConnectGateway.directConnectGatewayName') as unknown as string;
  }

  public get amazonSideAsn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGateway',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGateway.directConnectGateway.amazonSideAsn'),
        outputPath: 'directConnectGateway.amazonSideAsn',
        parameters: {
          directConnectGatewayName: this.__input.directConnectGatewayName,
          amazonSideAsn: this.__input.amazonSideAsn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGateway.directConnectGateway.amazonSideAsn', props);
    return resource.getResponseField('directConnectGateway.amazonSideAsn') as unknown as number;
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGateway',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGateway.directConnectGateway.ownerAccount'),
        outputPath: 'directConnectGateway.ownerAccount',
        parameters: {
          directConnectGatewayName: this.__input.directConnectGatewayName,
          amazonSideAsn: this.__input.amazonSideAsn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGateway.directConnectGateway.ownerAccount', props);
    return resource.getResponseField('directConnectGateway.ownerAccount') as unknown as string;
  }

  public get directConnectGatewayState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGateway',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGateway.directConnectGateway.directConnectGatewayState'),
        outputPath: 'directConnectGateway.directConnectGatewayState',
        parameters: {
          directConnectGatewayName: this.__input.directConnectGatewayName,
          amazonSideAsn: this.__input.amazonSideAsn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGateway.directConnectGateway.directConnectGatewayState', props);
    return resource.getResponseField('directConnectGateway.directConnectGatewayState') as unknown as string;
  }

  public get stateChangeError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGateway',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGateway.directConnectGateway.stateChangeError'),
        outputPath: 'directConnectGateway.stateChangeError',
        parameters: {
          directConnectGatewayName: this.__input.directConnectGatewayName,
          amazonSideAsn: this.__input.amazonSideAsn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGateway.directConnectGateway.stateChangeError', props);
    return resource.getResponseField('directConnectGateway.stateChangeError') as unknown as string;
  }

}

export class DirectConnectResponsesCreateDirectConnectGatewayAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreateDirectConnectGatewayAssociationRequest) {
  }

  public get directConnectGatewayAssociation(): DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation {
    return new DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreateDirectConnectGatewayAssociationRequest) {
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayId'),
        outputPath: 'directConnectGatewayAssociation.directConnectGatewayId',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayId', props);
    return resource.getResponseField('directConnectGatewayAssociation.directConnectGatewayId') as unknown as string;
  }

  public get directConnectGatewayOwnerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayOwnerAccount'),
        outputPath: 'directConnectGatewayAssociation.directConnectGatewayOwnerAccount',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayOwnerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.directConnectGatewayOwnerAccount') as unknown as string;
  }

  public get associationState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationState'),
        outputPath: 'directConnectGatewayAssociation.associationState',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationState', props);
    return resource.getResponseField('directConnectGatewayAssociation.associationState') as unknown as string;
  }

  public get stateChangeError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.stateChangeError'),
        outputPath: 'directConnectGatewayAssociation.stateChangeError',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.stateChangeError', props);
    return resource.getResponseField('directConnectGatewayAssociation.stateChangeError') as unknown as string;
  }

  public get associatedGateway(): DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway {
    return new DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway(this.__scope, this.__resources, this.__input);
  }

  public get associationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationId'),
        outputPath: 'directConnectGatewayAssociation.associationId',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationId', props);
    return resource.getResponseField('directConnectGatewayAssociation.associationId') as unknown as string;
  }

  public get allowedPrefixesToDirectConnectGateway(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway'),
        outputPath: 'directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway', props);
    return resource.getResponseField('directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get virtualGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayId'),
        outputPath: 'directConnectGatewayAssociation.virtualGatewayId',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayId', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayId') as unknown as string;
  }

  public get virtualGatewayRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayRegion'),
        outputPath: 'directConnectGatewayAssociation.virtualGatewayRegion',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayRegion', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayRegion') as unknown as string;
  }

  public get virtualGatewayOwnerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayOwnerAccount'),
        outputPath: 'directConnectGatewayAssociation.virtualGatewayOwnerAccount',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayOwnerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayOwnerAccount') as unknown as string;
  }

}

export class DirectConnectResponsesCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreateDirectConnectGatewayAssociationRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.id'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.id',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.id', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.type'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.type',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.type', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.type') as unknown as string;
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.ownerAccount'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.ownerAccount',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.ownerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.ownerAccount') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.region'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.region',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.region', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.region') as unknown as string;
  }

}

export class DirectConnectResponsesCreateDirectConnectGatewayAssociationProposal {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest) {
  }

  public get directConnectGatewayAssociationProposal(): DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal {
    return new DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest) {
  }

  public get proposalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.proposalId'),
        outputPath: 'directConnectGatewayAssociationProposal.proposalId',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.__input.directConnectGatewayOwnerAccount,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.proposalId', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.proposalId') as unknown as string;
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.directConnectGatewayId'),
        outputPath: 'directConnectGatewayAssociationProposal.directConnectGatewayId',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.__input.directConnectGatewayOwnerAccount,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.directConnectGatewayId', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.directConnectGatewayId') as unknown as string;
  }

  public get directConnectGatewayOwnerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.directConnectGatewayOwnerAccount'),
        outputPath: 'directConnectGatewayAssociationProposal.directConnectGatewayOwnerAccount',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.__input.directConnectGatewayOwnerAccount,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.directConnectGatewayOwnerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.directConnectGatewayOwnerAccount') as unknown as string;
  }

  public get proposalState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.proposalState'),
        outputPath: 'directConnectGatewayAssociationProposal.proposalState',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.__input.directConnectGatewayOwnerAccount,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.proposalState', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.proposalState') as unknown as string;
  }

  public get associatedGateway(): DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway {
    return new DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway(this.__scope, this.__resources, this.__input);
  }

  public get existingAllowedPrefixesToDirectConnectGateway(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.existingAllowedPrefixesToDirectConnectGateway'),
        outputPath: 'directConnectGatewayAssociationProposal.existingAllowedPrefixesToDirectConnectGateway',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.__input.directConnectGatewayOwnerAccount,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.existingAllowedPrefixesToDirectConnectGateway', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.existingAllowedPrefixesToDirectConnectGateway') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get requestedAllowedPrefixesToDirectConnectGateway(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.requestedAllowedPrefixesToDirectConnectGateway'),
        outputPath: 'directConnectGatewayAssociationProposal.requestedAllowedPrefixesToDirectConnectGateway',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.__input.directConnectGatewayOwnerAccount,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.requestedAllowedPrefixesToDirectConnectGateway', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.requestedAllowedPrefixesToDirectConnectGateway') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

}

export class DirectConnectResponsesCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.id'),
        outputPath: 'directConnectGatewayAssociationProposal.associatedGateway.id',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.__input.directConnectGatewayOwnerAccount,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.id', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.associatedGateway.id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.type'),
        outputPath: 'directConnectGatewayAssociationProposal.associatedGateway.type',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.__input.directConnectGatewayOwnerAccount,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.type', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.associatedGateway.type') as unknown as string;
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.ownerAccount'),
        outputPath: 'directConnectGatewayAssociationProposal.associatedGateway.ownerAccount',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.__input.directConnectGatewayOwnerAccount,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.ownerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.associatedGateway.ownerAccount') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.region'),
        outputPath: 'directConnectGatewayAssociationProposal.associatedGateway.region',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.__input.directConnectGatewayOwnerAccount,
          gatewayId: this.__input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.region', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.associatedGateway.region') as unknown as string;
  }

}

export class DirectConnectResponsesCreateInterconnect {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreateInterconnectRequest) {
  }

  public get interconnectId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateInterconnect.interconnectId'),
        outputPath: 'interconnectId',
        parameters: {
          interconnectName: this.__input.interconnectName,
          bandwidth: this.__input.bandwidth,
          location: this.__input.location,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInterconnect.interconnectId', props);
    return resource.getResponseField('interconnectId') as unknown as string;
  }

  public get interconnectName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateInterconnect.interconnectName'),
        outputPath: 'interconnectName',
        parameters: {
          interconnectName: this.__input.interconnectName,
          bandwidth: this.__input.bandwidth,
          location: this.__input.location,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInterconnect.interconnectName', props);
    return resource.getResponseField('interconnectName') as unknown as string;
  }

  public get interconnectState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateInterconnect.interconnectState'),
        outputPath: 'interconnectState',
        parameters: {
          interconnectName: this.__input.interconnectName,
          bandwidth: this.__input.bandwidth,
          location: this.__input.location,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInterconnect.interconnectState', props);
    return resource.getResponseField('interconnectState') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateInterconnect.region'),
        outputPath: 'region',
        parameters: {
          interconnectName: this.__input.interconnectName,
          bandwidth: this.__input.bandwidth,
          location: this.__input.location,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInterconnect.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateInterconnect.location'),
        outputPath: 'location',
        parameters: {
          interconnectName: this.__input.interconnectName,
          bandwidth: this.__input.bandwidth,
          location: this.__input.location,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInterconnect.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get bandwidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateInterconnect.bandwidth'),
        outputPath: 'bandwidth',
        parameters: {
          interconnectName: this.__input.interconnectName,
          bandwidth: this.__input.bandwidth,
          location: this.__input.location,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInterconnect.bandwidth', props);
    return resource.getResponseField('bandwidth') as unknown as string;
  }

  public get loaIssueTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateInterconnect.loaIssueTime'),
        outputPath: 'loaIssueTime',
        parameters: {
          interconnectName: this.__input.interconnectName,
          bandwidth: this.__input.bandwidth,
          location: this.__input.location,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInterconnect.loaIssueTime', props);
    return resource.getResponseField('loaIssueTime') as unknown as string;
  }

  public get lagId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateInterconnect.lagId'),
        outputPath: 'lagId',
        parameters: {
          interconnectName: this.__input.interconnectName,
          bandwidth: this.__input.bandwidth,
          location: this.__input.location,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInterconnect.lagId', props);
    return resource.getResponseField('lagId') as unknown as string;
  }

  public get awsDevice(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateInterconnect.awsDevice'),
        outputPath: 'awsDevice',
        parameters: {
          interconnectName: this.__input.interconnectName,
          bandwidth: this.__input.bandwidth,
          location: this.__input.location,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInterconnect.awsDevice', props);
    return resource.getResponseField('awsDevice') as unknown as string;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateInterconnect.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          interconnectName: this.__input.interconnectName,
          bandwidth: this.__input.bandwidth,
          location: this.__input.location,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInterconnect.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateInterconnect.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          interconnectName: this.__input.interconnectName,
          bandwidth: this.__input.bandwidth,
          location: this.__input.location,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInterconnect.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateInterconnect.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          interconnectName: this.__input.interconnectName,
          bandwidth: this.__input.bandwidth,
          location: this.__input.location,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInterconnect.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get hasLogicalRedundancy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateInterconnect.hasLogicalRedundancy'),
        outputPath: 'hasLogicalRedundancy',
        parameters: {
          interconnectName: this.__input.interconnectName,
          bandwidth: this.__input.bandwidth,
          location: this.__input.location,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInterconnect.hasLogicalRedundancy', props);
    return resource.getResponseField('hasLogicalRedundancy') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateInterconnect.tags'),
        outputPath: 'tags',
        parameters: {
          interconnectName: this.__input.interconnectName,
          bandwidth: this.__input.bandwidth,
          location: this.__input.location,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInterconnect.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateInterconnect.providerName'),
        outputPath: 'providerName',
        parameters: {
          interconnectName: this.__input.interconnectName,
          bandwidth: this.__input.bandwidth,
          location: this.__input.location,
          lagId: this.__input.lagId,
          tags: this.__input.tags,
          providerName: this.__input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInterconnect.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

}

export class DirectConnectResponsesCreateLag {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreateLagRequest) {
  }

  public get connectionsBandwidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.connectionsBandwidth'),
        outputPath: 'connectionsBandwidth',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.connectionsBandwidth', props);
    return resource.getResponseField('connectionsBandwidth') as unknown as string;
  }

  public get numberOfConnections(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.numberOfConnections'),
        outputPath: 'numberOfConnections',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.numberOfConnections', props);
    return resource.getResponseField('numberOfConnections') as unknown as number;
  }

  public get lagId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.lagId'),
        outputPath: 'lagId',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.lagId', props);
    return resource.getResponseField('lagId') as unknown as string;
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get lagName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.lagName'),
        outputPath: 'lagName',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.lagName', props);
    return resource.getResponseField('lagName') as unknown as string;
  }

  public get lagState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.lagState'),
        outputPath: 'lagState',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.lagState', props);
    return resource.getResponseField('lagState') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.location'),
        outputPath: 'location',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.region'),
        outputPath: 'region',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get minimumLinks(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.minimumLinks'),
        outputPath: 'minimumLinks',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.minimumLinks', props);
    return resource.getResponseField('minimumLinks') as unknown as number;
  }

  public get awsDevice(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.awsDevice'),
        outputPath: 'awsDevice',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.awsDevice', props);
    return resource.getResponseField('awsDevice') as unknown as string;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get connections(): shapes.DirectConnectConnection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.connections'),
        outputPath: 'connections',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.connections', props);
    return resource.getResponseField('connections') as unknown as shapes.DirectConnectConnection[];
  }

  public get allowsHostedConnections(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.allowsHostedConnections'),
        outputPath: 'allowsHostedConnections',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.allowsHostedConnections', props);
    return resource.getResponseField('allowsHostedConnections') as unknown as boolean;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get hasLogicalRedundancy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.hasLogicalRedundancy'),
        outputPath: 'hasLogicalRedundancy',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.hasLogicalRedundancy', props);
    return resource.getResponseField('hasLogicalRedundancy') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.tags'),
        outputPath: 'tags',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.providerName'),
        outputPath: 'providerName',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

  public get macSecCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.macSecCapable'),
        outputPath: 'macSecCapable',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.macSecCapable', props);
    return resource.getResponseField('macSecCapable') as unknown as boolean;
  }

  public get encryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.encryptionMode'),
        outputPath: 'encryptionMode',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.encryptionMode', props);
    return resource.getResponseField('encryptionMode') as unknown as string;
  }

  public get macSecKeys(): shapes.DirectConnectMacSecKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateLag.macSecKeys'),
        outputPath: 'macSecKeys',
        parameters: {
          numberOfConnections: this.__input.numberOfConnections,
          location: this.__input.location,
          connectionsBandwidth: this.__input.connectionsBandwidth,
          lagName: this.__input.lagName,
          connectionId: this.__input.connectionId,
          tags: this.__input.tags,
          childConnectionTags: this.__input.childConnectionTags,
          providerName: this.__input.providerName,
          requestMACSec: this.__input.requestMACSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLag.macSecKeys', props);
    return resource.getResponseField('macSecKeys') as unknown as shapes.DirectConnectMacSecKey[];
  }

}

export class DirectConnectResponsesCreatePrivateVirtualInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreatePrivateVirtualInterfaceRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get virtualInterfaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.virtualInterfaceId'),
        outputPath: 'virtualInterfaceId',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.virtualInterfaceId', props);
    return resource.getResponseField('virtualInterfaceId') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.location'),
        outputPath: 'location',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get virtualInterfaceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.virtualInterfaceType'),
        outputPath: 'virtualInterfaceType',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.virtualInterfaceType', props);
    return resource.getResponseField('virtualInterfaceType') as unknown as string;
  }

  public get virtualInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.virtualInterfaceName'),
        outputPath: 'virtualInterfaceName',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.virtualInterfaceName', props);
    return resource.getResponseField('virtualInterfaceName') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.vlan'),
        outputPath: 'vlan',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.vlan', props);
    return resource.getResponseField('vlan') as unknown as number;
  }

  public get asn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.asn'),
        outputPath: 'asn',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.asn', props);
    return resource.getResponseField('asn') as unknown as number;
  }

  public get amazonSideAsn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.amazonSideAsn'),
        outputPath: 'amazonSideAsn',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.amazonSideAsn', props);
    return resource.getResponseField('amazonSideAsn') as unknown as number;
  }

  public get authKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.authKey'),
        outputPath: 'authKey',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.authKey', props);
    return resource.getResponseField('authKey') as unknown as string;
  }

  public get amazonAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.amazonAddress'),
        outputPath: 'amazonAddress',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.amazonAddress', props);
    return resource.getResponseField('amazonAddress') as unknown as string;
  }

  public get customerAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.customerAddress'),
        outputPath: 'customerAddress',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.customerAddress', props);
    return resource.getResponseField('customerAddress') as unknown as string;
  }

  public get addressFamily(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.addressFamily'),
        outputPath: 'addressFamily',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.addressFamily', props);
    return resource.getResponseField('addressFamily') as unknown as string;
  }

  public get virtualInterfaceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.virtualInterfaceState'),
        outputPath: 'virtualInterfaceState',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterfaceState') as unknown as string;
  }

  public get customerRouterConfig(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.customerRouterConfig'),
        outputPath: 'customerRouterConfig',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.customerRouterConfig', props);
    return resource.getResponseField('customerRouterConfig') as unknown as string;
  }

  public get mtu(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.mtu'),
        outputPath: 'mtu',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.mtu', props);
    return resource.getResponseField('mtu') as unknown as number;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get virtualGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.virtualGatewayId'),
        outputPath: 'virtualGatewayId',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.virtualGatewayId', props);
    return resource.getResponseField('virtualGatewayId') as unknown as string;
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.directConnectGatewayId'),
        outputPath: 'directConnectGatewayId',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.directConnectGatewayId', props);
    return resource.getResponseField('directConnectGatewayId') as unknown as string;
  }

  public get routeFilterPrefixes(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.routeFilterPrefixes'),
        outputPath: 'routeFilterPrefixes',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.routeFilterPrefixes', props);
    return resource.getResponseField('routeFilterPrefixes') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get bgpPeers(): shapes.DirectConnectBgpPeer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.bgpPeers'),
        outputPath: 'bgpPeers',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.bgpPeers', props);
    return resource.getResponseField('bgpPeers') as unknown as shapes.DirectConnectBgpPeer[];
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.region'),
        outputPath: 'region',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePrivateVirtualInterface.tags'),
        outputPath: 'tags',
        parameters: {
          connectionId: this.__input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.__input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPrivateVirtualInterface.vlan,
            asn: this.__input.newPrivateVirtualInterface.asn,
            mtu: this.__input.newPrivateVirtualInterface.mtu,
            authKey: this.__input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.__input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.__input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.__input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.__input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.__input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateVirtualInterface.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectResponsesCreatePublicVirtualInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreatePublicVirtualInterfaceRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get virtualInterfaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.virtualInterfaceId'),
        outputPath: 'virtualInterfaceId',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.virtualInterfaceId', props);
    return resource.getResponseField('virtualInterfaceId') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.location'),
        outputPath: 'location',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get virtualInterfaceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.virtualInterfaceType'),
        outputPath: 'virtualInterfaceType',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.virtualInterfaceType', props);
    return resource.getResponseField('virtualInterfaceType') as unknown as string;
  }

  public get virtualInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.virtualInterfaceName'),
        outputPath: 'virtualInterfaceName',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.virtualInterfaceName', props);
    return resource.getResponseField('virtualInterfaceName') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.vlan'),
        outputPath: 'vlan',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.vlan', props);
    return resource.getResponseField('vlan') as unknown as number;
  }

  public get asn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.asn'),
        outputPath: 'asn',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.asn', props);
    return resource.getResponseField('asn') as unknown as number;
  }

  public get amazonSideAsn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.amazonSideAsn'),
        outputPath: 'amazonSideAsn',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.amazonSideAsn', props);
    return resource.getResponseField('amazonSideAsn') as unknown as number;
  }

  public get authKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.authKey'),
        outputPath: 'authKey',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.authKey', props);
    return resource.getResponseField('authKey') as unknown as string;
  }

  public get amazonAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.amazonAddress'),
        outputPath: 'amazonAddress',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.amazonAddress', props);
    return resource.getResponseField('amazonAddress') as unknown as string;
  }

  public get customerAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.customerAddress'),
        outputPath: 'customerAddress',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.customerAddress', props);
    return resource.getResponseField('customerAddress') as unknown as string;
  }

  public get addressFamily(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.addressFamily'),
        outputPath: 'addressFamily',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.addressFamily', props);
    return resource.getResponseField('addressFamily') as unknown as string;
  }

  public get virtualInterfaceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.virtualInterfaceState'),
        outputPath: 'virtualInterfaceState',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterfaceState') as unknown as string;
  }

  public get customerRouterConfig(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.customerRouterConfig'),
        outputPath: 'customerRouterConfig',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.customerRouterConfig', props);
    return resource.getResponseField('customerRouterConfig') as unknown as string;
  }

  public get mtu(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.mtu'),
        outputPath: 'mtu',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.mtu', props);
    return resource.getResponseField('mtu') as unknown as number;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get virtualGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.virtualGatewayId'),
        outputPath: 'virtualGatewayId',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.virtualGatewayId', props);
    return resource.getResponseField('virtualGatewayId') as unknown as string;
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.directConnectGatewayId'),
        outputPath: 'directConnectGatewayId',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.directConnectGatewayId', props);
    return resource.getResponseField('directConnectGatewayId') as unknown as string;
  }

  public get routeFilterPrefixes(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.routeFilterPrefixes'),
        outputPath: 'routeFilterPrefixes',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.routeFilterPrefixes', props);
    return resource.getResponseField('routeFilterPrefixes') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get bgpPeers(): shapes.DirectConnectBgpPeer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.bgpPeers'),
        outputPath: 'bgpPeers',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.bgpPeers', props);
    return resource.getResponseField('bgpPeers') as unknown as shapes.DirectConnectBgpPeer[];
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.region'),
        outputPath: 'region',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreatePublicVirtualInterface.tags'),
        outputPath: 'tags',
        parameters: {
          connectionId: this.__input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.__input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newPublicVirtualInterface.vlan,
            asn: this.__input.newPublicVirtualInterface.asn,
            authKey: this.__input.newPublicVirtualInterface.authKey,
            amazonAddress: this.__input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.__input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.__input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.__input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.__input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicVirtualInterface.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectResponsesCreateTransitVirtualInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreateTransitVirtualInterfaceRequest) {
  }

  public get virtualInterface(): DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface {
    return new DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesCreateTransitVirtualInterfaceVirtualInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectCreateTransitVirtualInterfaceRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.ownerAccount'),
        outputPath: 'virtualInterface.ownerAccount',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.ownerAccount', props);
    return resource.getResponseField('virtualInterface.ownerAccount') as unknown as string;
  }

  public get virtualInterfaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.virtualInterfaceId'),
        outputPath: 'virtualInterface.virtualInterfaceId',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.virtualInterfaceId', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceId') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.location'),
        outputPath: 'virtualInterface.location',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.location', props);
    return resource.getResponseField('virtualInterface.location') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.connectionId'),
        outputPath: 'virtualInterface.connectionId',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.connectionId', props);
    return resource.getResponseField('virtualInterface.connectionId') as unknown as string;
  }

  public get virtualInterfaceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.virtualInterfaceType'),
        outputPath: 'virtualInterface.virtualInterfaceType',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.virtualInterfaceType', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceType') as unknown as string;
  }

  public get virtualInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.virtualInterfaceName'),
        outputPath: 'virtualInterface.virtualInterfaceName',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.virtualInterfaceName', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceName') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.vlan'),
        outputPath: 'virtualInterface.vlan',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.vlan', props);
    return resource.getResponseField('virtualInterface.vlan') as unknown as number;
  }

  public get asn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.asn'),
        outputPath: 'virtualInterface.asn',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.asn', props);
    return resource.getResponseField('virtualInterface.asn') as unknown as number;
  }

  public get amazonSideAsn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.amazonSideAsn'),
        outputPath: 'virtualInterface.amazonSideAsn',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.amazonSideAsn', props);
    return resource.getResponseField('virtualInterface.amazonSideAsn') as unknown as number;
  }

  public get authKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.authKey'),
        outputPath: 'virtualInterface.authKey',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.authKey', props);
    return resource.getResponseField('virtualInterface.authKey') as unknown as string;
  }

  public get amazonAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.amazonAddress'),
        outputPath: 'virtualInterface.amazonAddress',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.amazonAddress', props);
    return resource.getResponseField('virtualInterface.amazonAddress') as unknown as string;
  }

  public get customerAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.customerAddress'),
        outputPath: 'virtualInterface.customerAddress',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.customerAddress', props);
    return resource.getResponseField('virtualInterface.customerAddress') as unknown as string;
  }

  public get addressFamily(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.addressFamily'),
        outputPath: 'virtualInterface.addressFamily',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.addressFamily', props);
    return resource.getResponseField('virtualInterface.addressFamily') as unknown as string;
  }

  public get virtualInterfaceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.virtualInterfaceState'),
        outputPath: 'virtualInterface.virtualInterfaceState',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceState') as unknown as string;
  }

  public get customerRouterConfig(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.customerRouterConfig'),
        outputPath: 'virtualInterface.customerRouterConfig',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.customerRouterConfig', props);
    return resource.getResponseField('virtualInterface.customerRouterConfig') as unknown as string;
  }

  public get mtu(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.mtu'),
        outputPath: 'virtualInterface.mtu',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.mtu', props);
    return resource.getResponseField('virtualInterface.mtu') as unknown as number;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.jumboFrameCapable'),
        outputPath: 'virtualInterface.jumboFrameCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.jumboFrameCapable', props);
    return resource.getResponseField('virtualInterface.jumboFrameCapable') as unknown as boolean;
  }

  public get virtualGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.virtualGatewayId'),
        outputPath: 'virtualInterface.virtualGatewayId',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.virtualGatewayId', props);
    return resource.getResponseField('virtualInterface.virtualGatewayId') as unknown as string;
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.directConnectGatewayId'),
        outputPath: 'virtualInterface.directConnectGatewayId',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.directConnectGatewayId', props);
    return resource.getResponseField('virtualInterface.directConnectGatewayId') as unknown as string;
  }

  public get routeFilterPrefixes(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.routeFilterPrefixes'),
        outputPath: 'virtualInterface.routeFilterPrefixes',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.routeFilterPrefixes', props);
    return resource.getResponseField('virtualInterface.routeFilterPrefixes') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get bgpPeers(): shapes.DirectConnectBgpPeer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.bgpPeers'),
        outputPath: 'virtualInterface.bgpPeers',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.bgpPeers', props);
    return resource.getResponseField('virtualInterface.bgpPeers') as unknown as shapes.DirectConnectBgpPeer[];
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.region'),
        outputPath: 'virtualInterface.region',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.region', props);
    return resource.getResponseField('virtualInterface.region') as unknown as string;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.awsDeviceV2'),
        outputPath: 'virtualInterface.awsDeviceV2',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.awsDeviceV2', props);
    return resource.getResponseField('virtualInterface.awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.awsLogicalDeviceId'),
        outputPath: 'virtualInterface.awsLogicalDeviceId',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.awsLogicalDeviceId', props);
    return resource.getResponseField('virtualInterface.awsLogicalDeviceId') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransitVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.CreateTransitVirtualInterface.virtualInterface.tags'),
        outputPath: 'virtualInterface.tags',
        parameters: {
          connectionId: this.__input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.__input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.__input.newTransitVirtualInterface.vlan,
            asn: this.__input.newTransitVirtualInterface.asn,
            mtu: this.__input.newTransitVirtualInterface.mtu,
            authKey: this.__input.newTransitVirtualInterface.authKey,
            amazonAddress: this.__input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.__input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.__input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.__input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.__input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransitVirtualInterface.virtualInterface.tags', props);
    return resource.getResponseField('virtualInterface.tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectResponsesDeleteBgpPeer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDeleteBgpPeerRequest) {
  }

  public get virtualInterface(): DirectConnectResponsesDeleteBgpPeerVirtualInterface {
    return new DirectConnectResponsesDeleteBgpPeerVirtualInterface(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesDeleteBgpPeerVirtualInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDeleteBgpPeerRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.ownerAccount'),
        outputPath: 'virtualInterface.ownerAccount',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.ownerAccount', props);
    return resource.getResponseField('virtualInterface.ownerAccount') as unknown as string;
  }

  public get virtualInterfaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.virtualInterfaceId'),
        outputPath: 'virtualInterface.virtualInterfaceId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.virtualInterfaceId', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceId') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.location'),
        outputPath: 'virtualInterface.location',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.location', props);
    return resource.getResponseField('virtualInterface.location') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.connectionId'),
        outputPath: 'virtualInterface.connectionId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.connectionId', props);
    return resource.getResponseField('virtualInterface.connectionId') as unknown as string;
  }

  public get virtualInterfaceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.virtualInterfaceType'),
        outputPath: 'virtualInterface.virtualInterfaceType',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.virtualInterfaceType', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceType') as unknown as string;
  }

  public get virtualInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.virtualInterfaceName'),
        outputPath: 'virtualInterface.virtualInterfaceName',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.virtualInterfaceName', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceName') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.vlan'),
        outputPath: 'virtualInterface.vlan',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.vlan', props);
    return resource.getResponseField('virtualInterface.vlan') as unknown as number;
  }

  public get asn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.asn'),
        outputPath: 'virtualInterface.asn',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.asn', props);
    return resource.getResponseField('virtualInterface.asn') as unknown as number;
  }

  public get amazonSideAsn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.amazonSideAsn'),
        outputPath: 'virtualInterface.amazonSideAsn',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.amazonSideAsn', props);
    return resource.getResponseField('virtualInterface.amazonSideAsn') as unknown as number;
  }

  public get authKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.authKey'),
        outputPath: 'virtualInterface.authKey',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.authKey', props);
    return resource.getResponseField('virtualInterface.authKey') as unknown as string;
  }

  public get amazonAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.amazonAddress'),
        outputPath: 'virtualInterface.amazonAddress',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.amazonAddress', props);
    return resource.getResponseField('virtualInterface.amazonAddress') as unknown as string;
  }

  public get customerAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.customerAddress'),
        outputPath: 'virtualInterface.customerAddress',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.customerAddress', props);
    return resource.getResponseField('virtualInterface.customerAddress') as unknown as string;
  }

  public get addressFamily(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.addressFamily'),
        outputPath: 'virtualInterface.addressFamily',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.addressFamily', props);
    return resource.getResponseField('virtualInterface.addressFamily') as unknown as string;
  }

  public get virtualInterfaceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.virtualInterfaceState'),
        outputPath: 'virtualInterface.virtualInterfaceState',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterface.virtualInterfaceState') as unknown as string;
  }

  public get customerRouterConfig(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.customerRouterConfig'),
        outputPath: 'virtualInterface.customerRouterConfig',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.customerRouterConfig', props);
    return resource.getResponseField('virtualInterface.customerRouterConfig') as unknown as string;
  }

  public get mtu(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.mtu'),
        outputPath: 'virtualInterface.mtu',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.mtu', props);
    return resource.getResponseField('virtualInterface.mtu') as unknown as number;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.jumboFrameCapable'),
        outputPath: 'virtualInterface.jumboFrameCapable',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.jumboFrameCapable', props);
    return resource.getResponseField('virtualInterface.jumboFrameCapable') as unknown as boolean;
  }

  public get virtualGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.virtualGatewayId'),
        outputPath: 'virtualInterface.virtualGatewayId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.virtualGatewayId', props);
    return resource.getResponseField('virtualInterface.virtualGatewayId') as unknown as string;
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.directConnectGatewayId'),
        outputPath: 'virtualInterface.directConnectGatewayId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.directConnectGatewayId', props);
    return resource.getResponseField('virtualInterface.directConnectGatewayId') as unknown as string;
  }

  public get routeFilterPrefixes(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.routeFilterPrefixes'),
        outputPath: 'virtualInterface.routeFilterPrefixes',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.routeFilterPrefixes', props);
    return resource.getResponseField('virtualInterface.routeFilterPrefixes') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get bgpPeers(): shapes.DirectConnectBgpPeer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.bgpPeers'),
        outputPath: 'virtualInterface.bgpPeers',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.bgpPeers', props);
    return resource.getResponseField('virtualInterface.bgpPeers') as unknown as shapes.DirectConnectBgpPeer[];
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.region'),
        outputPath: 'virtualInterface.region',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.region', props);
    return resource.getResponseField('virtualInterface.region') as unknown as string;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.awsDeviceV2'),
        outputPath: 'virtualInterface.awsDeviceV2',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.awsDeviceV2', props);
    return resource.getResponseField('virtualInterface.awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.awsLogicalDeviceId'),
        outputPath: 'virtualInterface.awsLogicalDeviceId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.awsLogicalDeviceId', props);
    return resource.getResponseField('virtualInterface.awsLogicalDeviceId') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBgpPeer',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteBGPPeer.virtualInterface.tags'),
        outputPath: 'virtualInterface.tags',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          asn: this.__input.asn,
          customerAddress: this.__input.customerAddress,
          bgpPeerId: this.__input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBGPPeer.virtualInterface.tags', props);
    return resource.getResponseField('virtualInterface.tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectResponsesDeleteConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDeleteConnectionRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get connectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.connectionName'),
        outputPath: 'connectionName',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.connectionName', props);
    return resource.getResponseField('connectionName') as unknown as string;
  }

  public get connectionState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.connectionState'),
        outputPath: 'connectionState',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.connectionState', props);
    return resource.getResponseField('connectionState') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.region'),
        outputPath: 'region',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.location'),
        outputPath: 'location',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get bandwidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.bandwidth'),
        outputPath: 'bandwidth',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.bandwidth', props);
    return resource.getResponseField('bandwidth') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.vlan'),
        outputPath: 'vlan',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.vlan', props);
    return resource.getResponseField('vlan') as unknown as number;
  }

  public get partnerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.partnerName'),
        outputPath: 'partnerName',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.partnerName', props);
    return resource.getResponseField('partnerName') as unknown as string;
  }

  public get loaIssueTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.loaIssueTime'),
        outputPath: 'loaIssueTime',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.loaIssueTime', props);
    return resource.getResponseField('loaIssueTime') as unknown as string;
  }

  public get lagId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.lagId'),
        outputPath: 'lagId',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.lagId', props);
    return resource.getResponseField('lagId') as unknown as string;
  }

  public get awsDevice(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.awsDevice'),
        outputPath: 'awsDevice',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.awsDevice', props);
    return resource.getResponseField('awsDevice') as unknown as string;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get hasLogicalRedundancy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.hasLogicalRedundancy'),
        outputPath: 'hasLogicalRedundancy',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.hasLogicalRedundancy', props);
    return resource.getResponseField('hasLogicalRedundancy') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.tags'),
        outputPath: 'tags',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.providerName'),
        outputPath: 'providerName',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

  public get macSecCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.macSecCapable'),
        outputPath: 'macSecCapable',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.macSecCapable', props);
    return resource.getResponseField('macSecCapable') as unknown as boolean;
  }

  public get portEncryptionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.portEncryptionStatus'),
        outputPath: 'portEncryptionStatus',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.portEncryptionStatus', props);
    return resource.getResponseField('portEncryptionStatus') as unknown as string;
  }

  public get encryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.encryptionMode'),
        outputPath: 'encryptionMode',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.encryptionMode', props);
    return resource.getResponseField('encryptionMode') as unknown as string;
  }

  public get macSecKeys(): shapes.DirectConnectMacSecKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteConnection.macSecKeys'),
        outputPath: 'macSecKeys',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.macSecKeys', props);
    return resource.getResponseField('macSecKeys') as unknown as shapes.DirectConnectMacSecKey[];
  }

}

export class DirectConnectResponsesDeleteDirectConnectGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDeleteDirectConnectGatewayRequest) {
  }

  public get directConnectGateway(): DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway {
    return new DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesDeleteDirectConnectGatewayDirectConnectGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDeleteDirectConnectGatewayRequest) {
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGateway',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGateway.directConnectGateway.directConnectGatewayId'),
        outputPath: 'directConnectGateway.directConnectGatewayId',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGateway.directConnectGateway.directConnectGatewayId', props);
    return resource.getResponseField('directConnectGateway.directConnectGatewayId') as unknown as string;
  }

  public get directConnectGatewayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGateway',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGateway.directConnectGateway.directConnectGatewayName'),
        outputPath: 'directConnectGateway.directConnectGatewayName',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGateway.directConnectGateway.directConnectGatewayName', props);
    return resource.getResponseField('directConnectGateway.directConnectGatewayName') as unknown as string;
  }

  public get amazonSideAsn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGateway',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGateway.directConnectGateway.amazonSideAsn'),
        outputPath: 'directConnectGateway.amazonSideAsn',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGateway.directConnectGateway.amazonSideAsn', props);
    return resource.getResponseField('directConnectGateway.amazonSideAsn') as unknown as number;
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGateway',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGateway.directConnectGateway.ownerAccount'),
        outputPath: 'directConnectGateway.ownerAccount',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGateway.directConnectGateway.ownerAccount', props);
    return resource.getResponseField('directConnectGateway.ownerAccount') as unknown as string;
  }

  public get directConnectGatewayState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGateway',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGateway.directConnectGateway.directConnectGatewayState'),
        outputPath: 'directConnectGateway.directConnectGatewayState',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGateway.directConnectGateway.directConnectGatewayState', props);
    return resource.getResponseField('directConnectGateway.directConnectGatewayState') as unknown as string;
  }

  public get stateChangeError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGateway',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGateway.directConnectGateway.stateChangeError'),
        outputPath: 'directConnectGateway.stateChangeError',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGateway.directConnectGateway.stateChangeError', props);
    return resource.getResponseField('directConnectGateway.stateChangeError') as unknown as string;
  }

}

export class DirectConnectResponsesDeleteDirectConnectGatewayAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationRequest) {
  }

  public get directConnectGatewayAssociation(): DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation {
    return new DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationRequest) {
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayId'),
        outputPath: 'directConnectGatewayAssociation.directConnectGatewayId',
        parameters: {
          associationId: this.__input.associationId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayId', props);
    return resource.getResponseField('directConnectGatewayAssociation.directConnectGatewayId') as unknown as string;
  }

  public get directConnectGatewayOwnerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayOwnerAccount'),
        outputPath: 'directConnectGatewayAssociation.directConnectGatewayOwnerAccount',
        parameters: {
          associationId: this.__input.associationId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayOwnerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.directConnectGatewayOwnerAccount') as unknown as string;
  }

  public get associationState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationState'),
        outputPath: 'directConnectGatewayAssociation.associationState',
        parameters: {
          associationId: this.__input.associationId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationState', props);
    return resource.getResponseField('directConnectGatewayAssociation.associationState') as unknown as string;
  }

  public get stateChangeError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.stateChangeError'),
        outputPath: 'directConnectGatewayAssociation.stateChangeError',
        parameters: {
          associationId: this.__input.associationId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.stateChangeError', props);
    return resource.getResponseField('directConnectGatewayAssociation.stateChangeError') as unknown as string;
  }

  public get associatedGateway(): DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway {
    return new DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway(this.__scope, this.__resources, this.__input);
  }

  public get associationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationId'),
        outputPath: 'directConnectGatewayAssociation.associationId',
        parameters: {
          associationId: this.__input.associationId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationId', props);
    return resource.getResponseField('directConnectGatewayAssociation.associationId') as unknown as string;
  }

  public get allowedPrefixesToDirectConnectGateway(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway'),
        outputPath: 'directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway',
        parameters: {
          associationId: this.__input.associationId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway', props);
    return resource.getResponseField('directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get virtualGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayId'),
        outputPath: 'directConnectGatewayAssociation.virtualGatewayId',
        parameters: {
          associationId: this.__input.associationId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayId', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayId') as unknown as string;
  }

  public get virtualGatewayRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayRegion'),
        outputPath: 'directConnectGatewayAssociation.virtualGatewayRegion',
        parameters: {
          associationId: this.__input.associationId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayRegion', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayRegion') as unknown as string;
  }

  public get virtualGatewayOwnerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayOwnerAccount'),
        outputPath: 'directConnectGatewayAssociation.virtualGatewayOwnerAccount',
        parameters: {
          associationId: this.__input.associationId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayOwnerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayOwnerAccount') as unknown as string;
  }

}

export class DirectConnectResponsesDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.id'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.id',
        parameters: {
          associationId: this.__input.associationId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.id', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.type'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.type',
        parameters: {
          associationId: this.__input.associationId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.type', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.type') as unknown as string;
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.ownerAccount'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.ownerAccount',
        parameters: {
          associationId: this.__input.associationId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.ownerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.ownerAccount') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.region'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.region',
        parameters: {
          associationId: this.__input.associationId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.region', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.region') as unknown as string;
  }

}

export class DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposal {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest) {
  }

  public get directConnectGatewayAssociationProposal(): DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal {
    return new DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest) {
  }

  public get proposalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.proposalId'),
        outputPath: 'directConnectGatewayAssociationProposal.proposalId',
        parameters: {
          proposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.proposalId', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.proposalId') as unknown as string;
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.directConnectGatewayId'),
        outputPath: 'directConnectGatewayAssociationProposal.directConnectGatewayId',
        parameters: {
          proposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.directConnectGatewayId', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.directConnectGatewayId') as unknown as string;
  }

  public get directConnectGatewayOwnerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.directConnectGatewayOwnerAccount'),
        outputPath: 'directConnectGatewayAssociationProposal.directConnectGatewayOwnerAccount',
        parameters: {
          proposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.directConnectGatewayOwnerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.directConnectGatewayOwnerAccount') as unknown as string;
  }

  public get proposalState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.proposalState'),
        outputPath: 'directConnectGatewayAssociationProposal.proposalState',
        parameters: {
          proposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.proposalState', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.proposalState') as unknown as string;
  }

  public get associatedGateway(): DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway {
    return new DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway(this.__scope, this.__resources, this.__input);
  }

  public get existingAllowedPrefixesToDirectConnectGateway(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.existingAllowedPrefixesToDirectConnectGateway'),
        outputPath: 'directConnectGatewayAssociationProposal.existingAllowedPrefixesToDirectConnectGateway',
        parameters: {
          proposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.existingAllowedPrefixesToDirectConnectGateway', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.existingAllowedPrefixesToDirectConnectGateway') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get requestedAllowedPrefixesToDirectConnectGateway(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.requestedAllowedPrefixesToDirectConnectGateway'),
        outputPath: 'directConnectGatewayAssociationProposal.requestedAllowedPrefixesToDirectConnectGateway',
        parameters: {
          proposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.requestedAllowedPrefixesToDirectConnectGateway', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.requestedAllowedPrefixesToDirectConnectGateway') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

}

export class DirectConnectResponsesDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.id'),
        outputPath: 'directConnectGatewayAssociationProposal.associatedGateway.id',
        parameters: {
          proposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.id', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.associatedGateway.id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.type'),
        outputPath: 'directConnectGatewayAssociationProposal.associatedGateway.type',
        parameters: {
          proposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.type', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.associatedGateway.type') as unknown as string;
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.ownerAccount'),
        outputPath: 'directConnectGatewayAssociationProposal.associatedGateway.ownerAccount',
        parameters: {
          proposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.ownerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.associatedGateway.ownerAccount') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectConnectGatewayAssociationProposal',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.region'),
        outputPath: 'directConnectGatewayAssociationProposal.associatedGateway.region',
        parameters: {
          proposalId: this.__input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.region', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.associatedGateway.region') as unknown as string;
  }

}

export class DirectConnectResponsesDeleteInterconnect {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDeleteInterconnectRequest) {
  }

  public get interconnectState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteInterconnect.interconnectState'),
        outputPath: 'interconnectState',
        parameters: {
          interconnectId: this.__input.interconnectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteInterconnect.interconnectState', props);
    return resource.getResponseField('interconnectState') as unknown as string;
  }

}

export class DirectConnectResponsesDeleteLag {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDeleteLagRequest) {
  }

  public get connectionsBandwidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.connectionsBandwidth'),
        outputPath: 'connectionsBandwidth',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.connectionsBandwidth', props);
    return resource.getResponseField('connectionsBandwidth') as unknown as string;
  }

  public get numberOfConnections(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.numberOfConnections'),
        outputPath: 'numberOfConnections',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.numberOfConnections', props);
    return resource.getResponseField('numberOfConnections') as unknown as number;
  }

  public get lagId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.lagId'),
        outputPath: 'lagId',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.lagId', props);
    return resource.getResponseField('lagId') as unknown as string;
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get lagName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.lagName'),
        outputPath: 'lagName',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.lagName', props);
    return resource.getResponseField('lagName') as unknown as string;
  }

  public get lagState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.lagState'),
        outputPath: 'lagState',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.lagState', props);
    return resource.getResponseField('lagState') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.location'),
        outputPath: 'location',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.region'),
        outputPath: 'region',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get minimumLinks(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.minimumLinks'),
        outputPath: 'minimumLinks',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.minimumLinks', props);
    return resource.getResponseField('minimumLinks') as unknown as number;
  }

  public get awsDevice(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.awsDevice'),
        outputPath: 'awsDevice',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.awsDevice', props);
    return resource.getResponseField('awsDevice') as unknown as string;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get connections(): shapes.DirectConnectConnection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.connections'),
        outputPath: 'connections',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.connections', props);
    return resource.getResponseField('connections') as unknown as shapes.DirectConnectConnection[];
  }

  public get allowsHostedConnections(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.allowsHostedConnections'),
        outputPath: 'allowsHostedConnections',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.allowsHostedConnections', props);
    return resource.getResponseField('allowsHostedConnections') as unknown as boolean;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get hasLogicalRedundancy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.hasLogicalRedundancy'),
        outputPath: 'hasLogicalRedundancy',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.hasLogicalRedundancy', props);
    return resource.getResponseField('hasLogicalRedundancy') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.tags'),
        outputPath: 'tags',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.providerName'),
        outputPath: 'providerName',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

  public get macSecCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.macSecCapable'),
        outputPath: 'macSecCapable',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.macSecCapable', props);
    return resource.getResponseField('macSecCapable') as unknown as boolean;
  }

  public get encryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.encryptionMode'),
        outputPath: 'encryptionMode',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.encryptionMode', props);
    return resource.getResponseField('encryptionMode') as unknown as string;
  }

  public get macSecKeys(): shapes.DirectConnectMacSecKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteLag.macSecKeys'),
        outputPath: 'macSecKeys',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLag.macSecKeys', props);
    return resource.getResponseField('macSecKeys') as unknown as shapes.DirectConnectMacSecKey[];
  }

}

export class DirectConnectResponsesDeleteVirtualInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDeleteVirtualInterfaceRequest) {
  }

  public get virtualInterfaceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVirtualInterface',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DeleteVirtualInterface.virtualInterfaceState'),
        outputPath: 'virtualInterfaceState',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteVirtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterfaceState') as unknown as string;
  }

}

export class DirectConnectResponsesDescribeConnectionLoa {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeConnectionLoaRequest) {
  }

  public get loa(): DirectConnectResponsesDescribeConnectionLoaLoa {
    return new DirectConnectResponsesDescribeConnectionLoaLoa(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesDescribeConnectionLoaLoa {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeConnectionLoaRequest) {
  }

  public get loaContent(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectionLoa',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeConnectionLoa.loa.loaContent'),
        outputPath: 'loa.loaContent',
        parameters: {
          connectionId: this.__input.connectionId,
          providerName: this.__input.providerName,
          loaContentType: this.__input.loaContentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConnectionLoa.loa.loaContent', props);
    return resource.getResponseField('loa.loaContent') as unknown as any;
  }

  public get loaContentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectionLoa',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeConnectionLoa.loa.loaContentType'),
        outputPath: 'loa.loaContentType',
        parameters: {
          connectionId: this.__input.connectionId,
          providerName: this.__input.providerName,
          loaContentType: this.__input.loaContentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConnectionLoa.loa.loaContentType', props);
    return resource.getResponseField('loa.loaContentType') as unknown as string;
  }

}

export class DirectConnectResponsesDescribeConnections {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeConnectionsRequest) {
  }

  public get connections(): shapes.DirectConnectConnection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnections',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeConnections.connections'),
        outputPath: 'connections',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConnections.connections', props);
    return resource.getResponseField('connections') as unknown as shapes.DirectConnectConnection[];
  }

}

export class DirectConnectResponsesDescribeConnectionsOnInterconnect {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeConnectionsOnInterconnectRequest) {
  }

  public get connections(): shapes.DirectConnectConnection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectionsOnInterconnect',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeConnectionsOnInterconnect.connections'),
        outputPath: 'connections',
        parameters: {
          interconnectId: this.__input.interconnectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConnectionsOnInterconnect.connections', props);
    return resource.getResponseField('connections') as unknown as shapes.DirectConnectConnection[];
  }

}

export class DirectConnectResponsesDescribeDirectConnectGatewayAssociationProposals {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest) {
  }

  public get directConnectGatewayAssociationProposals(): shapes.DirectConnectDirectConnectGatewayAssociationProposal[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDirectConnectGatewayAssociationProposals',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeDirectConnectGatewayAssociationProposals.directConnectGatewayAssociationProposals'),
        outputPath: 'directConnectGatewayAssociationProposals',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          proposalId: this.__input.proposalId,
          associatedGatewayId: this.__input.associatedGatewayId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDirectConnectGatewayAssociationProposals.directConnectGatewayAssociationProposals', props);
    return resource.getResponseField('directConnectGatewayAssociationProposals') as unknown as shapes.DirectConnectDirectConnectGatewayAssociationProposal[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDirectConnectGatewayAssociationProposals',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeDirectConnectGatewayAssociationProposals.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          proposalId: this.__input.proposalId,
          associatedGatewayId: this.__input.associatedGatewayId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDirectConnectGatewayAssociationProposals.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DirectConnectResponsesDescribeDirectConnectGatewayAssociations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeDirectConnectGatewayAssociationsRequest) {
  }

  public get directConnectGatewayAssociations(): shapes.DirectConnectDirectConnectGatewayAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDirectConnectGatewayAssociations',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeDirectConnectGatewayAssociations.directConnectGatewayAssociations'),
        outputPath: 'directConnectGatewayAssociations',
        parameters: {
          associationId: this.__input.associationId,
          associatedGatewayId: this.__input.associatedGatewayId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDirectConnectGatewayAssociations.directConnectGatewayAssociations', props);
    return resource.getResponseField('directConnectGatewayAssociations') as unknown as shapes.DirectConnectDirectConnectGatewayAssociation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDirectConnectGatewayAssociations',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeDirectConnectGatewayAssociations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          associationId: this.__input.associationId,
          associatedGatewayId: this.__input.associatedGatewayId,
          directConnectGatewayId: this.__input.directConnectGatewayId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          virtualGatewayId: this.__input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDirectConnectGatewayAssociations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DirectConnectResponsesDescribeDirectConnectGatewayAttachments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeDirectConnectGatewayAttachmentsRequest) {
  }

  public get directConnectGatewayAttachments(): shapes.DirectConnectDirectConnectGatewayAttachment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDirectConnectGatewayAttachments',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeDirectConnectGatewayAttachments.directConnectGatewayAttachments'),
        outputPath: 'directConnectGatewayAttachments',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          virtualInterfaceId: this.__input.virtualInterfaceId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDirectConnectGatewayAttachments.directConnectGatewayAttachments', props);
    return resource.getResponseField('directConnectGatewayAttachments') as unknown as shapes.DirectConnectDirectConnectGatewayAttachment[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDirectConnectGatewayAttachments',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeDirectConnectGatewayAttachments.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          virtualInterfaceId: this.__input.virtualInterfaceId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDirectConnectGatewayAttachments.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DirectConnectResponsesDescribeDirectConnectGateways {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeDirectConnectGatewaysRequest) {
  }

  public get directConnectGateways(): shapes.DirectConnectDirectConnectGateway[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDirectConnectGateways',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeDirectConnectGateways.directConnectGateways'),
        outputPath: 'directConnectGateways',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDirectConnectGateways.directConnectGateways', props);
    return resource.getResponseField('directConnectGateways') as unknown as shapes.DirectConnectDirectConnectGateway[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDirectConnectGateways',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeDirectConnectGateways.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          directConnectGatewayId: this.__input.directConnectGatewayId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDirectConnectGateways.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DirectConnectResponsesDescribeHostedConnections {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeHostedConnectionsRequest) {
  }

  public get connections(): shapes.DirectConnectConnection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHostedConnections',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeHostedConnections.connections'),
        outputPath: 'connections',
        parameters: {
          connectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHostedConnections.connections', props);
    return resource.getResponseField('connections') as unknown as shapes.DirectConnectConnection[];
  }

}

export class DirectConnectResponsesDescribeInterconnectLoa {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeInterconnectLoaRequest) {
  }

  public get loa(): DirectConnectResponsesDescribeInterconnectLoaLoa {
    return new DirectConnectResponsesDescribeInterconnectLoaLoa(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesDescribeInterconnectLoaLoa {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeInterconnectLoaRequest) {
  }

  public get loaContent(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInterconnectLoa',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeInterconnectLoa.loa.loaContent'),
        outputPath: 'loa.loaContent',
        parameters: {
          interconnectId: this.__input.interconnectId,
          providerName: this.__input.providerName,
          loaContentType: this.__input.loaContentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInterconnectLoa.loa.loaContent', props);
    return resource.getResponseField('loa.loaContent') as unknown as any;
  }

  public get loaContentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInterconnectLoa',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeInterconnectLoa.loa.loaContentType'),
        outputPath: 'loa.loaContentType',
        parameters: {
          interconnectId: this.__input.interconnectId,
          providerName: this.__input.providerName,
          loaContentType: this.__input.loaContentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInterconnectLoa.loa.loaContentType', props);
    return resource.getResponseField('loa.loaContentType') as unknown as string;
  }

}

export class DirectConnectResponsesDescribeInterconnects {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeInterconnectsRequest) {
  }

  public get interconnects(): shapes.DirectConnectInterconnect[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInterconnects',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeInterconnects.interconnects'),
        outputPath: 'interconnects',
        parameters: {
          interconnectId: this.__input.interconnectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInterconnects.interconnects', props);
    return resource.getResponseField('interconnects') as unknown as shapes.DirectConnectInterconnect[];
  }

}

export class DirectConnectResponsesDescribeLags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeLagsRequest) {
  }

  public get lags(): shapes.DirectConnectLag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLags',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeLags.lags'),
        outputPath: 'lags',
        parameters: {
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLags.lags', props);
    return resource.getResponseField('lags') as unknown as shapes.DirectConnectLag[];
  }

}

export class DirectConnectResponsesDescribeLoa {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeLoaRequest) {
  }

  public get loaContent(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoa',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeLoa.loaContent'),
        outputPath: 'loaContent',
        parameters: {
          connectionId: this.__input.connectionId,
          providerName: this.__input.providerName,
          loaContentType: this.__input.loaContentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoa.loaContent', props);
    return resource.getResponseField('loaContent') as unknown as any;
  }

  public get loaContentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoa',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeLoa.loaContentType'),
        outputPath: 'loaContentType',
        parameters: {
          connectionId: this.__input.connectionId,
          providerName: this.__input.providerName,
          loaContentType: this.__input.loaContentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoa.loaContentType', props);
    return resource.getResponseField('loaContentType') as unknown as string;
  }

}

export class DirectConnectResponsesDescribeLocations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get locations(): shapes.DirectConnectLocation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocations',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeLocations.locations'),
        outputPath: 'locations',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocations.locations', props);
    return resource.getResponseField('locations') as unknown as shapes.DirectConnectLocation[];
  }

}

export class DirectConnectResponsesDescribeTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeTagsRequest) {
  }

  public get resourceTags(): shapes.DirectConnectResourceTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTags',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeTags.resourceTags'),
        outputPath: 'resourceTags',
        parameters: {
          resourceArns: this.__input.resourceArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTags.resourceTags', props);
    return resource.getResponseField('resourceTags') as unknown as shapes.DirectConnectResourceTag[];
  }

}

export class DirectConnectResponsesDescribeVirtualGateways {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get virtualGateways(): shapes.DirectConnectVirtualGateway[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVirtualGateways',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeVirtualGateways.virtualGateways'),
        outputPath: 'virtualGateways',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVirtualGateways.virtualGateways', props);
    return resource.getResponseField('virtualGateways') as unknown as shapes.DirectConnectVirtualGateway[];
  }

}

export class DirectConnectResponsesDescribeVirtualInterfaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDescribeVirtualInterfacesRequest) {
  }

  public get virtualInterfaces(): shapes.DirectConnectVirtualInterface[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVirtualInterfaces',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DescribeVirtualInterfaces.virtualInterfaces'),
        outputPath: 'virtualInterfaces',
        parameters: {
          connectionId: this.__input.connectionId,
          virtualInterfaceId: this.__input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVirtualInterfaces.virtualInterfaces', props);
    return resource.getResponseField('virtualInterfaces') as unknown as shapes.DirectConnectVirtualInterface[];
  }

}

export class DirectConnectResponsesDisassociateConnectionFromLag {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDisassociateConnectionFromLagRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get connectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.connectionName'),
        outputPath: 'connectionName',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.connectionName', props);
    return resource.getResponseField('connectionName') as unknown as string;
  }

  public get connectionState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.connectionState'),
        outputPath: 'connectionState',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.connectionState', props);
    return resource.getResponseField('connectionState') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.region'),
        outputPath: 'region',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.location'),
        outputPath: 'location',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get bandwidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.bandwidth'),
        outputPath: 'bandwidth',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.bandwidth', props);
    return resource.getResponseField('bandwidth') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.vlan'),
        outputPath: 'vlan',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.vlan', props);
    return resource.getResponseField('vlan') as unknown as number;
  }

  public get partnerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.partnerName'),
        outputPath: 'partnerName',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.partnerName', props);
    return resource.getResponseField('partnerName') as unknown as string;
  }

  public get loaIssueTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.loaIssueTime'),
        outputPath: 'loaIssueTime',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.loaIssueTime', props);
    return resource.getResponseField('loaIssueTime') as unknown as string;
  }

  public get lagId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.lagId'),
        outputPath: 'lagId',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.lagId', props);
    return resource.getResponseField('lagId') as unknown as string;
  }

  public get awsDevice(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.awsDevice'),
        outputPath: 'awsDevice',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.awsDevice', props);
    return resource.getResponseField('awsDevice') as unknown as string;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get hasLogicalRedundancy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.hasLogicalRedundancy'),
        outputPath: 'hasLogicalRedundancy',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.hasLogicalRedundancy', props);
    return resource.getResponseField('hasLogicalRedundancy') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.tags'),
        outputPath: 'tags',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.providerName'),
        outputPath: 'providerName',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

  public get macSecCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.macSecCapable'),
        outputPath: 'macSecCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.macSecCapable', props);
    return resource.getResponseField('macSecCapable') as unknown as boolean;
  }

  public get portEncryptionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.portEncryptionStatus'),
        outputPath: 'portEncryptionStatus',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.portEncryptionStatus', props);
    return resource.getResponseField('portEncryptionStatus') as unknown as string;
  }

  public get encryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.encryptionMode'),
        outputPath: 'encryptionMode',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.encryptionMode', props);
    return resource.getResponseField('encryptionMode') as unknown as string;
  }

  public get macSecKeys(): shapes.DirectConnectMacSecKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionFromLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateConnectionFromLag.macSecKeys'),
        outputPath: 'macSecKeys',
        parameters: {
          connectionId: this.__input.connectionId,
          lagId: this.__input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateConnectionFromLag.macSecKeys', props);
    return resource.getResponseField('macSecKeys') as unknown as shapes.DirectConnectMacSecKey[];
  }

}

export class DirectConnectResponsesDisassociateMacSecKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectDisassociateMacSecKeyRequest) {
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateMacSecKey',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateMacSecKey.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          connectionId: this.__input.connectionId,
          secretARN: this.__input.secretARN,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateMacSecKey.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get macSecKeys(): shapes.DirectConnectMacSecKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateMacSecKey',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.DisassociateMacSecKey.macSecKeys'),
        outputPath: 'macSecKeys',
        parameters: {
          connectionId: this.__input.connectionId,
          secretARN: this.__input.secretARN,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateMacSecKey.macSecKeys', props);
    return resource.getResponseField('macSecKeys') as unknown as shapes.DirectConnectMacSecKey[];
  }

}

export class DirectConnectResponsesListVirtualInterfaceTestHistory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectListVirtualInterfaceTestHistoryRequest) {
  }

  public get virtualInterfaceTestHistory(): shapes.DirectConnectVirtualInterfaceTestHistory[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVirtualInterfaceTestHistory',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.ListVirtualInterfaceTestHistory.virtualInterfaceTestHistory'),
        outputPath: 'virtualInterfaceTestHistory',
        parameters: {
          testId: this.__input.testId,
          virtualInterfaceId: this.__input.virtualInterfaceId,
          bgpPeers: this.__input.bgpPeers,
          status: this.__input.status,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVirtualInterfaceTestHistory.virtualInterfaceTestHistory', props);
    return resource.getResponseField('virtualInterfaceTestHistory') as unknown as shapes.DirectConnectVirtualInterfaceTestHistory[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVirtualInterfaceTestHistory',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.ListVirtualInterfaceTestHistory.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          testId: this.__input.testId,
          virtualInterfaceId: this.__input.virtualInterfaceId,
          bgpPeers: this.__input.bgpPeers,
          status: this.__input.status,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVirtualInterfaceTestHistory.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DirectConnectResponsesStartBgpFailoverTest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectStartBgpFailoverTestRequest) {
  }

  public get virtualInterfaceTest(): DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest {
    return new DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesStartBgpFailoverTestVirtualInterfaceTest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectStartBgpFailoverTestRequest) {
  }

  public get testId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StartBgpFailoverTest.virtualInterfaceTest.testId'),
        outputPath: 'virtualInterfaceTest.testId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          bgpPeers: this.__input.bgpPeers,
          testDurationInMinutes: this.__input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartBgpFailoverTest.virtualInterfaceTest.testId', props);
    return resource.getResponseField('virtualInterfaceTest.testId') as unknown as string;
  }

  public get virtualInterfaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StartBgpFailoverTest.virtualInterfaceTest.virtualInterfaceId'),
        outputPath: 'virtualInterfaceTest.virtualInterfaceId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          bgpPeers: this.__input.bgpPeers,
          testDurationInMinutes: this.__input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartBgpFailoverTest.virtualInterfaceTest.virtualInterfaceId', props);
    return resource.getResponseField('virtualInterfaceTest.virtualInterfaceId') as unknown as string;
  }

  public get bgpPeers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StartBgpFailoverTest.virtualInterfaceTest.bgpPeers'),
        outputPath: 'virtualInterfaceTest.bgpPeers',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          bgpPeers: this.__input.bgpPeers,
          testDurationInMinutes: this.__input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartBgpFailoverTest.virtualInterfaceTest.bgpPeers', props);
    return resource.getResponseField('virtualInterfaceTest.bgpPeers') as unknown as string[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StartBgpFailoverTest.virtualInterfaceTest.status'),
        outputPath: 'virtualInterfaceTest.status',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          bgpPeers: this.__input.bgpPeers,
          testDurationInMinutes: this.__input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartBgpFailoverTest.virtualInterfaceTest.status', props);
    return resource.getResponseField('virtualInterfaceTest.status') as unknown as string;
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StartBgpFailoverTest.virtualInterfaceTest.ownerAccount'),
        outputPath: 'virtualInterfaceTest.ownerAccount',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          bgpPeers: this.__input.bgpPeers,
          testDurationInMinutes: this.__input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartBgpFailoverTest.virtualInterfaceTest.ownerAccount', props);
    return resource.getResponseField('virtualInterfaceTest.ownerAccount') as unknown as string;
  }

  public get testDurationInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StartBgpFailoverTest.virtualInterfaceTest.testDurationInMinutes'),
        outputPath: 'virtualInterfaceTest.testDurationInMinutes',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          bgpPeers: this.__input.bgpPeers,
          testDurationInMinutes: this.__input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartBgpFailoverTest.virtualInterfaceTest.testDurationInMinutes', props);
    return resource.getResponseField('virtualInterfaceTest.testDurationInMinutes') as unknown as number;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StartBgpFailoverTest.virtualInterfaceTest.startTime'),
        outputPath: 'virtualInterfaceTest.startTime',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          bgpPeers: this.__input.bgpPeers,
          testDurationInMinutes: this.__input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartBgpFailoverTest.virtualInterfaceTest.startTime', props);
    return resource.getResponseField('virtualInterfaceTest.startTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StartBgpFailoverTest.virtualInterfaceTest.endTime'),
        outputPath: 'virtualInterfaceTest.endTime',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          bgpPeers: this.__input.bgpPeers,
          testDurationInMinutes: this.__input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartBgpFailoverTest.virtualInterfaceTest.endTime', props);
    return resource.getResponseField('virtualInterfaceTest.endTime') as unknown as string;
  }

}

export class DirectConnectResponsesStopBgpFailoverTest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectStopBgpFailoverTestRequest) {
  }

  public get virtualInterfaceTest(): DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest {
    return new DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesStopBgpFailoverTestVirtualInterfaceTest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectStopBgpFailoverTestRequest) {
  }

  public get testId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StopBgpFailoverTest.virtualInterfaceTest.testId'),
        outputPath: 'virtualInterfaceTest.testId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopBgpFailoverTest.virtualInterfaceTest.testId', props);
    return resource.getResponseField('virtualInterfaceTest.testId') as unknown as string;
  }

  public get virtualInterfaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StopBgpFailoverTest.virtualInterfaceTest.virtualInterfaceId'),
        outputPath: 'virtualInterfaceTest.virtualInterfaceId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopBgpFailoverTest.virtualInterfaceTest.virtualInterfaceId', props);
    return resource.getResponseField('virtualInterfaceTest.virtualInterfaceId') as unknown as string;
  }

  public get bgpPeers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StopBgpFailoverTest.virtualInterfaceTest.bgpPeers'),
        outputPath: 'virtualInterfaceTest.bgpPeers',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopBgpFailoverTest.virtualInterfaceTest.bgpPeers', props);
    return resource.getResponseField('virtualInterfaceTest.bgpPeers') as unknown as string[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StopBgpFailoverTest.virtualInterfaceTest.status'),
        outputPath: 'virtualInterfaceTest.status',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopBgpFailoverTest.virtualInterfaceTest.status', props);
    return resource.getResponseField('virtualInterfaceTest.status') as unknown as string;
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StopBgpFailoverTest.virtualInterfaceTest.ownerAccount'),
        outputPath: 'virtualInterfaceTest.ownerAccount',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopBgpFailoverTest.virtualInterfaceTest.ownerAccount', props);
    return resource.getResponseField('virtualInterfaceTest.ownerAccount') as unknown as string;
  }

  public get testDurationInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StopBgpFailoverTest.virtualInterfaceTest.testDurationInMinutes'),
        outputPath: 'virtualInterfaceTest.testDurationInMinutes',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopBgpFailoverTest.virtualInterfaceTest.testDurationInMinutes', props);
    return resource.getResponseField('virtualInterfaceTest.testDurationInMinutes') as unknown as number;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StopBgpFailoverTest.virtualInterfaceTest.startTime'),
        outputPath: 'virtualInterfaceTest.startTime',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopBgpFailoverTest.virtualInterfaceTest.startTime', props);
    return resource.getResponseField('virtualInterfaceTest.startTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopBgpFailoverTest',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.StopBgpFailoverTest.virtualInterfaceTest.endTime'),
        outputPath: 'virtualInterfaceTest.endTime',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopBgpFailoverTest.virtualInterfaceTest.endTime', props);
    return resource.getResponseField('virtualInterfaceTest.endTime') as unknown as string;
  }

}

export class DirectConnectResponsesUpdateConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectUpdateConnectionRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get connectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.connectionName'),
        outputPath: 'connectionName',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.connectionName', props);
    return resource.getResponseField('connectionName') as unknown as string;
  }

  public get connectionState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.connectionState'),
        outputPath: 'connectionState',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.connectionState', props);
    return resource.getResponseField('connectionState') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.region'),
        outputPath: 'region',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.location'),
        outputPath: 'location',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get bandwidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.bandwidth'),
        outputPath: 'bandwidth',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.bandwidth', props);
    return resource.getResponseField('bandwidth') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.vlan'),
        outputPath: 'vlan',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.vlan', props);
    return resource.getResponseField('vlan') as unknown as number;
  }

  public get partnerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.partnerName'),
        outputPath: 'partnerName',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.partnerName', props);
    return resource.getResponseField('partnerName') as unknown as string;
  }

  public get loaIssueTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.loaIssueTime'),
        outputPath: 'loaIssueTime',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.loaIssueTime', props);
    return resource.getResponseField('loaIssueTime') as unknown as string;
  }

  public get lagId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.lagId'),
        outputPath: 'lagId',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.lagId', props);
    return resource.getResponseField('lagId') as unknown as string;
  }

  public get awsDevice(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.awsDevice'),
        outputPath: 'awsDevice',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.awsDevice', props);
    return resource.getResponseField('awsDevice') as unknown as string;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get hasLogicalRedundancy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.hasLogicalRedundancy'),
        outputPath: 'hasLogicalRedundancy',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.hasLogicalRedundancy', props);
    return resource.getResponseField('hasLogicalRedundancy') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.tags'),
        outputPath: 'tags',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.providerName'),
        outputPath: 'providerName',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

  public get macSecCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.macSecCapable'),
        outputPath: 'macSecCapable',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.macSecCapable', props);
    return resource.getResponseField('macSecCapable') as unknown as boolean;
  }

  public get portEncryptionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.portEncryptionStatus'),
        outputPath: 'portEncryptionStatus',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.portEncryptionStatus', props);
    return resource.getResponseField('portEncryptionStatus') as unknown as string;
  }

  public get encryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.encryptionMode'),
        outputPath: 'encryptionMode',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.encryptionMode', props);
    return resource.getResponseField('encryptionMode') as unknown as string;
  }

  public get macSecKeys(): shapes.DirectConnectMacSecKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateConnection.macSecKeys'),
        outputPath: 'macSecKeys',
        parameters: {
          connectionId: this.__input.connectionId,
          connectionName: this.__input.connectionName,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConnection.macSecKeys', props);
    return resource.getResponseField('macSecKeys') as unknown as shapes.DirectConnectMacSecKey[];
  }

}

export class DirectConnectResponsesUpdateDirectConnectGatewayAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectUpdateDirectConnectGatewayAssociationRequest) {
  }

  public get directConnectGatewayAssociation(): DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation {
    return new DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectUpdateDirectConnectGatewayAssociationRequest) {
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayId'),
        outputPath: 'directConnectGatewayAssociation.directConnectGatewayId',
        parameters: {
          associationId: this.__input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayId', props);
    return resource.getResponseField('directConnectGatewayAssociation.directConnectGatewayId') as unknown as string;
  }

  public get directConnectGatewayOwnerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayOwnerAccount'),
        outputPath: 'directConnectGatewayAssociation.directConnectGatewayOwnerAccount',
        parameters: {
          associationId: this.__input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayOwnerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.directConnectGatewayOwnerAccount') as unknown as string;
  }

  public get associationState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationState'),
        outputPath: 'directConnectGatewayAssociation.associationState',
        parameters: {
          associationId: this.__input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationState', props);
    return resource.getResponseField('directConnectGatewayAssociation.associationState') as unknown as string;
  }

  public get stateChangeError(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.stateChangeError'),
        outputPath: 'directConnectGatewayAssociation.stateChangeError',
        parameters: {
          associationId: this.__input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.stateChangeError', props);
    return resource.getResponseField('directConnectGatewayAssociation.stateChangeError') as unknown as string;
  }

  public get associatedGateway(): DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway {
    return new DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway(this.__scope, this.__resources, this.__input);
  }

  public get associationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationId'),
        outputPath: 'directConnectGatewayAssociation.associationId',
        parameters: {
          associationId: this.__input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationId', props);
    return resource.getResponseField('directConnectGatewayAssociation.associationId') as unknown as string;
  }

  public get allowedPrefixesToDirectConnectGateway(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway'),
        outputPath: 'directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway',
        parameters: {
          associationId: this.__input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway', props);
    return resource.getResponseField('directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get virtualGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayId'),
        outputPath: 'directConnectGatewayAssociation.virtualGatewayId',
        parameters: {
          associationId: this.__input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayId', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayId') as unknown as string;
  }

  public get virtualGatewayRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayRegion'),
        outputPath: 'directConnectGatewayAssociation.virtualGatewayRegion',
        parameters: {
          associationId: this.__input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayRegion', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayRegion') as unknown as string;
  }

  public get virtualGatewayOwnerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayOwnerAccount'),
        outputPath: 'directConnectGatewayAssociation.virtualGatewayOwnerAccount',
        parameters: {
          associationId: this.__input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayOwnerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayOwnerAccount') as unknown as string;
  }

}

export class DirectConnectResponsesUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectUpdateDirectConnectGatewayAssociationRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.id'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.id',
        parameters: {
          associationId: this.__input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.id', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.type'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.type',
        parameters: {
          associationId: this.__input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.type', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.type') as unknown as string;
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.ownerAccount'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.ownerAccount',
        parameters: {
          associationId: this.__input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.ownerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.ownerAccount') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectConnectGatewayAssociation',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.region'),
        outputPath: 'directConnectGatewayAssociation.associatedGateway.region',
        parameters: {
          associationId: this.__input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.__input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.__input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.region', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.region') as unknown as string;
  }

}

export class DirectConnectResponsesUpdateLag {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectUpdateLagRequest) {
  }

  public get connectionsBandwidth(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.connectionsBandwidth'),
        outputPath: 'connectionsBandwidth',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.connectionsBandwidth', props);
    return resource.getResponseField('connectionsBandwidth') as unknown as string;
  }

  public get numberOfConnections(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.numberOfConnections'),
        outputPath: 'numberOfConnections',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.numberOfConnections', props);
    return resource.getResponseField('numberOfConnections') as unknown as number;
  }

  public get lagId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.lagId'),
        outputPath: 'lagId',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.lagId', props);
    return resource.getResponseField('lagId') as unknown as string;
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get lagName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.lagName'),
        outputPath: 'lagName',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.lagName', props);
    return resource.getResponseField('lagName') as unknown as string;
  }

  public get lagState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.lagState'),
        outputPath: 'lagState',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.lagState', props);
    return resource.getResponseField('lagState') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.location'),
        outputPath: 'location',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.region'),
        outputPath: 'region',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get minimumLinks(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.minimumLinks'),
        outputPath: 'minimumLinks',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.minimumLinks', props);
    return resource.getResponseField('minimumLinks') as unknown as number;
  }

  public get awsDevice(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.awsDevice'),
        outputPath: 'awsDevice',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.awsDevice', props);
    return resource.getResponseField('awsDevice') as unknown as string;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get connections(): shapes.DirectConnectConnection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.connections'),
        outputPath: 'connections',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.connections', props);
    return resource.getResponseField('connections') as unknown as shapes.DirectConnectConnection[];
  }

  public get allowsHostedConnections(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.allowsHostedConnections'),
        outputPath: 'allowsHostedConnections',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.allowsHostedConnections', props);
    return resource.getResponseField('allowsHostedConnections') as unknown as boolean;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get hasLogicalRedundancy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.hasLogicalRedundancy'),
        outputPath: 'hasLogicalRedundancy',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.hasLogicalRedundancy', props);
    return resource.getResponseField('hasLogicalRedundancy') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.tags'),
        outputPath: 'tags',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.providerName'),
        outputPath: 'providerName',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

  public get macSecCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.macSecCapable'),
        outputPath: 'macSecCapable',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.macSecCapable', props);
    return resource.getResponseField('macSecCapable') as unknown as boolean;
  }

  public get encryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.encryptionMode'),
        outputPath: 'encryptionMode',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.encryptionMode', props);
    return resource.getResponseField('encryptionMode') as unknown as string;
  }

  public get macSecKeys(): shapes.DirectConnectMacSecKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLag',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateLag.macSecKeys'),
        outputPath: 'macSecKeys',
        parameters: {
          lagId: this.__input.lagId,
          lagName: this.__input.lagName,
          minimumLinks: this.__input.minimumLinks,
          encryptionMode: this.__input.encryptionMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLag.macSecKeys', props);
    return resource.getResponseField('macSecKeys') as unknown as shapes.DirectConnectMacSecKey[];
  }

}

export class DirectConnectResponsesUpdateVirtualInterfaceAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DirectConnectUpdateVirtualInterfaceAttributesRequest) {
  }

  public get ownerAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.ownerAccount'),
        outputPath: 'ownerAccount',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.ownerAccount', props);
    return resource.getResponseField('ownerAccount') as unknown as string;
  }

  public get virtualInterfaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.virtualInterfaceId'),
        outputPath: 'virtualInterfaceId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.virtualInterfaceId', props);
    return resource.getResponseField('virtualInterfaceId') as unknown as string;
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.location'),
        outputPath: 'location',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get connectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.connectionId'),
        outputPath: 'connectionId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.connectionId', props);
    return resource.getResponseField('connectionId') as unknown as string;
  }

  public get virtualInterfaceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.virtualInterfaceType'),
        outputPath: 'virtualInterfaceType',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.virtualInterfaceType', props);
    return resource.getResponseField('virtualInterfaceType') as unknown as string;
  }

  public get virtualInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.virtualInterfaceName'),
        outputPath: 'virtualInterfaceName',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.virtualInterfaceName', props);
    return resource.getResponseField('virtualInterfaceName') as unknown as string;
  }

  public get vlan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.vlan'),
        outputPath: 'vlan',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.vlan', props);
    return resource.getResponseField('vlan') as unknown as number;
  }

  public get asn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.asn'),
        outputPath: 'asn',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.asn', props);
    return resource.getResponseField('asn') as unknown as number;
  }

  public get amazonSideAsn(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.amazonSideAsn'),
        outputPath: 'amazonSideAsn',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.amazonSideAsn', props);
    return resource.getResponseField('amazonSideAsn') as unknown as number;
  }

  public get authKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.authKey'),
        outputPath: 'authKey',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.authKey', props);
    return resource.getResponseField('authKey') as unknown as string;
  }

  public get amazonAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.amazonAddress'),
        outputPath: 'amazonAddress',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.amazonAddress', props);
    return resource.getResponseField('amazonAddress') as unknown as string;
  }

  public get customerAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.customerAddress'),
        outputPath: 'customerAddress',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.customerAddress', props);
    return resource.getResponseField('customerAddress') as unknown as string;
  }

  public get addressFamily(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.addressFamily'),
        outputPath: 'addressFamily',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.addressFamily', props);
    return resource.getResponseField('addressFamily') as unknown as string;
  }

  public get virtualInterfaceState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.virtualInterfaceState'),
        outputPath: 'virtualInterfaceState',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterfaceState') as unknown as string;
  }

  public get customerRouterConfig(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.customerRouterConfig'),
        outputPath: 'customerRouterConfig',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.customerRouterConfig', props);
    return resource.getResponseField('customerRouterConfig') as unknown as string;
  }

  public get mtu(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.mtu'),
        outputPath: 'mtu',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.mtu', props);
    return resource.getResponseField('mtu') as unknown as number;
  }

  public get jumboFrameCapable(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.jumboFrameCapable'),
        outputPath: 'jumboFrameCapable',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.jumboFrameCapable', props);
    return resource.getResponseField('jumboFrameCapable') as unknown as boolean;
  }

  public get virtualGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.virtualGatewayId'),
        outputPath: 'virtualGatewayId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.virtualGatewayId', props);
    return resource.getResponseField('virtualGatewayId') as unknown as string;
  }

  public get directConnectGatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.directConnectGatewayId'),
        outputPath: 'directConnectGatewayId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.directConnectGatewayId', props);
    return resource.getResponseField('directConnectGatewayId') as unknown as string;
  }

  public get routeFilterPrefixes(): shapes.DirectConnectRouteFilterPrefix[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.routeFilterPrefixes'),
        outputPath: 'routeFilterPrefixes',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.routeFilterPrefixes', props);
    return resource.getResponseField('routeFilterPrefixes') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

  public get bgpPeers(): shapes.DirectConnectBgpPeer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.bgpPeers'),
        outputPath: 'bgpPeers',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.bgpPeers', props);
    return resource.getResponseField('bgpPeers') as unknown as shapes.DirectConnectBgpPeer[];
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.region'),
        outputPath: 'region',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.region', props);
    return resource.getResponseField('region') as unknown as string;
  }

  public get awsDeviceV2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.awsDeviceV2'),
        outputPath: 'awsDeviceV2',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
  }

  public get awsLogicalDeviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.awsLogicalDeviceId'),
        outputPath: 'awsLogicalDeviceId',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.awsLogicalDeviceId', props);
    return resource.getResponseField('awsLogicalDeviceId') as unknown as string;
  }

  public get tags(): shapes.DirectConnectTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVirtualInterfaceAttributes',
        service: 'DirectConnect',
        physicalResourceId: cr.PhysicalResourceId.of('DirectConnect.UpdateVirtualInterfaceAttributes.tags'),
        outputPath: 'tags',
        parameters: {
          virtualInterfaceId: this.__input.virtualInterfaceId,
          mtu: this.__input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVirtualInterfaceAttributes.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

}

