import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DirectConnectClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptDirectConnectGatewayAssociationProposal(input: shapes.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest): DirectConnectAcceptDirectConnectGatewayAssociationProposal {
    return new DirectConnectAcceptDirectConnectGatewayAssociationProposal(this, 'AcceptDirectConnectGatewayAssociationProposal', this.__resources, input);
  }

  public allocateConnectionOnInterconnect(input: shapes.DirectConnectAllocateConnectionOnInterconnectRequest): DirectConnectAllocateConnectionOnInterconnect {
    return new DirectConnectAllocateConnectionOnInterconnect(this, 'AllocateConnectionOnInterconnect', this.__resources, input);
  }

  public allocateHostedConnection(input: shapes.DirectConnectAllocateHostedConnectionRequest): DirectConnectAllocateHostedConnection {
    return new DirectConnectAllocateHostedConnection(this, 'AllocateHostedConnection', this.__resources, input);
  }

  public allocatePrivateVirtualInterface(input: shapes.DirectConnectAllocatePrivateVirtualInterfaceRequest): DirectConnectAllocatePrivateVirtualInterface {
    return new DirectConnectAllocatePrivateVirtualInterface(this, 'AllocatePrivateVirtualInterface', this.__resources, input);
  }

  public allocatePublicVirtualInterface(input: shapes.DirectConnectAllocatePublicVirtualInterfaceRequest): DirectConnectAllocatePublicVirtualInterface {
    return new DirectConnectAllocatePublicVirtualInterface(this, 'AllocatePublicVirtualInterface', this.__resources, input);
  }

  public allocateTransitVirtualInterface(input: shapes.DirectConnectAllocateTransitVirtualInterfaceRequest): DirectConnectAllocateTransitVirtualInterface {
    return new DirectConnectAllocateTransitVirtualInterface(this, 'AllocateTransitVirtualInterface', this.__resources, input);
  }

  public associateConnectionWithLag(input: shapes.DirectConnectAssociateConnectionWithLagRequest): DirectConnectAssociateConnectionWithLag {
    return new DirectConnectAssociateConnectionWithLag(this, 'AssociateConnectionWithLag', this.__resources, input);
  }

  public associateHostedConnection(input: shapes.DirectConnectAssociateHostedConnectionRequest): DirectConnectAssociateHostedConnection {
    return new DirectConnectAssociateHostedConnection(this, 'AssociateHostedConnection', this.__resources, input);
  }

  public associateVirtualInterface(input: shapes.DirectConnectAssociateVirtualInterfaceRequest): DirectConnectAssociateVirtualInterface {
    return new DirectConnectAssociateVirtualInterface(this, 'AssociateVirtualInterface', this.__resources, input);
  }

  public confirmConnection(input: shapes.DirectConnectConfirmConnectionRequest): DirectConnectConfirmConnection {
    return new DirectConnectConfirmConnection(this, 'ConfirmConnection', this.__resources, input);
  }

  public confirmPrivateVirtualInterface(input: shapes.DirectConnectConfirmPrivateVirtualInterfaceRequest): DirectConnectConfirmPrivateVirtualInterface {
    return new DirectConnectConfirmPrivateVirtualInterface(this, 'ConfirmPrivateVirtualInterface', this.__resources, input);
  }

  public confirmPublicVirtualInterface(input: shapes.DirectConnectConfirmPublicVirtualInterfaceRequest): DirectConnectConfirmPublicVirtualInterface {
    return new DirectConnectConfirmPublicVirtualInterface(this, 'ConfirmPublicVirtualInterface', this.__resources, input);
  }

  public confirmTransitVirtualInterface(input: shapes.DirectConnectConfirmTransitVirtualInterfaceRequest): DirectConnectConfirmTransitVirtualInterface {
    return new DirectConnectConfirmTransitVirtualInterface(this, 'ConfirmTransitVirtualInterface', this.__resources, input);
  }

  public createBgpPeer(input: shapes.DirectConnectCreateBgpPeerRequest): DirectConnectCreateBgpPeer {
    return new DirectConnectCreateBgpPeer(this, 'CreateBgpPeer', this.__resources, input);
  }

  public createConnection(input: shapes.DirectConnectCreateConnectionRequest): DirectConnectCreateConnection {
    return new DirectConnectCreateConnection(this, 'CreateConnection', this.__resources, input);
  }

  public createDirectConnectGateway(input: shapes.DirectConnectCreateDirectConnectGatewayRequest): DirectConnectCreateDirectConnectGateway {
    return new DirectConnectCreateDirectConnectGateway(this, 'CreateDirectConnectGateway', this.__resources, input);
  }

  public createDirectConnectGatewayAssociation(input: shapes.DirectConnectCreateDirectConnectGatewayAssociationRequest): DirectConnectCreateDirectConnectGatewayAssociation {
    return new DirectConnectCreateDirectConnectGatewayAssociation(this, 'CreateDirectConnectGatewayAssociation', this.__resources, input);
  }

  public createDirectConnectGatewayAssociationProposal(input: shapes.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest): DirectConnectCreateDirectConnectGatewayAssociationProposal {
    return new DirectConnectCreateDirectConnectGatewayAssociationProposal(this, 'CreateDirectConnectGatewayAssociationProposal', this.__resources, input);
  }

  public createInterconnect(input: shapes.DirectConnectCreateInterconnectRequest): DirectConnectCreateInterconnect {
    return new DirectConnectCreateInterconnect(this, 'CreateInterconnect', this.__resources, input);
  }

  public createLag(input: shapes.DirectConnectCreateLagRequest): DirectConnectCreateLag {
    return new DirectConnectCreateLag(this, 'CreateLag', this.__resources, input);
  }

  public createPrivateVirtualInterface(input: shapes.DirectConnectCreatePrivateVirtualInterfaceRequest): DirectConnectCreatePrivateVirtualInterface {
    return new DirectConnectCreatePrivateVirtualInterface(this, 'CreatePrivateVirtualInterface', this.__resources, input);
  }

  public createPublicVirtualInterface(input: shapes.DirectConnectCreatePublicVirtualInterfaceRequest): DirectConnectCreatePublicVirtualInterface {
    return new DirectConnectCreatePublicVirtualInterface(this, 'CreatePublicVirtualInterface', this.__resources, input);
  }

  public createTransitVirtualInterface(input: shapes.DirectConnectCreateTransitVirtualInterfaceRequest): DirectConnectCreateTransitVirtualInterface {
    return new DirectConnectCreateTransitVirtualInterface(this, 'CreateTransitVirtualInterface', this.__resources, input);
  }

  public deleteBgpPeer(input: shapes.DirectConnectDeleteBgpPeerRequest): DirectConnectDeleteBgpPeer {
    return new DirectConnectDeleteBgpPeer(this, 'DeleteBgpPeer', this.__resources, input);
  }

  public deleteConnection(input: shapes.DirectConnectDeleteConnectionRequest): DirectConnectDeleteConnection {
    return new DirectConnectDeleteConnection(this, 'DeleteConnection', this.__resources, input);
  }

  public deleteDirectConnectGateway(input: shapes.DirectConnectDeleteDirectConnectGatewayRequest): DirectConnectDeleteDirectConnectGateway {
    return new DirectConnectDeleteDirectConnectGateway(this, 'DeleteDirectConnectGateway', this.__resources, input);
  }

  public deleteDirectConnectGatewayAssociation(input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationRequest): DirectConnectDeleteDirectConnectGatewayAssociation {
    return new DirectConnectDeleteDirectConnectGatewayAssociation(this, 'DeleteDirectConnectGatewayAssociation', this.__resources, input);
  }

  public deleteDirectConnectGatewayAssociationProposal(input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest): DirectConnectDeleteDirectConnectGatewayAssociationProposal {
    return new DirectConnectDeleteDirectConnectGatewayAssociationProposal(this, 'DeleteDirectConnectGatewayAssociationProposal', this.__resources, input);
  }

  public deleteInterconnect(input: shapes.DirectConnectDeleteInterconnectRequest): DirectConnectDeleteInterconnect {
    return new DirectConnectDeleteInterconnect(this, 'DeleteInterconnect', this.__resources, input);
  }

  public deleteLag(input: shapes.DirectConnectDeleteLagRequest): DirectConnectDeleteLag {
    return new DirectConnectDeleteLag(this, 'DeleteLag', this.__resources, input);
  }

  public deleteVirtualInterface(input: shapes.DirectConnectDeleteVirtualInterfaceRequest): DirectConnectDeleteVirtualInterface {
    return new DirectConnectDeleteVirtualInterface(this, 'DeleteVirtualInterface', this.__resources, input);
  }

  public describeConnectionLoa(input: shapes.DirectConnectDescribeConnectionLoaRequest): DirectConnectDescribeConnectionLoa {
    return new DirectConnectDescribeConnectionLoa(this, 'DescribeConnectionLoa', this.__resources, input);
  }

  public describeConnections(input: shapes.DirectConnectDescribeConnectionsRequest): DirectConnectDescribeConnections {
    return new DirectConnectDescribeConnections(this, 'DescribeConnections', this.__resources, input);
  }

  public describeConnectionsOnInterconnect(input: shapes.DirectConnectDescribeConnectionsOnInterconnectRequest): DirectConnectDescribeConnectionsOnInterconnect {
    return new DirectConnectDescribeConnectionsOnInterconnect(this, 'DescribeConnectionsOnInterconnect', this.__resources, input);
  }

  public describeDirectConnectGatewayAssociationProposals(input: shapes.DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest): DirectConnectDescribeDirectConnectGatewayAssociationProposals {
    return new DirectConnectDescribeDirectConnectGatewayAssociationProposals(this, 'DescribeDirectConnectGatewayAssociationProposals', this.__resources, input);
  }

  public describeDirectConnectGatewayAssociations(input: shapes.DirectConnectDescribeDirectConnectGatewayAssociationsRequest): DirectConnectDescribeDirectConnectGatewayAssociations {
    return new DirectConnectDescribeDirectConnectGatewayAssociations(this, 'DescribeDirectConnectGatewayAssociations', this.__resources, input);
  }

  public describeDirectConnectGatewayAttachments(input: shapes.DirectConnectDescribeDirectConnectGatewayAttachmentsRequest): DirectConnectDescribeDirectConnectGatewayAttachments {
    return new DirectConnectDescribeDirectConnectGatewayAttachments(this, 'DescribeDirectConnectGatewayAttachments', this.__resources, input);
  }

  public describeDirectConnectGateways(input: shapes.DirectConnectDescribeDirectConnectGatewaysRequest): DirectConnectDescribeDirectConnectGateways {
    return new DirectConnectDescribeDirectConnectGateways(this, 'DescribeDirectConnectGateways', this.__resources, input);
  }

  public describeHostedConnections(input: shapes.DirectConnectDescribeHostedConnectionsRequest): DirectConnectDescribeHostedConnections {
    return new DirectConnectDescribeHostedConnections(this, 'DescribeHostedConnections', this.__resources, input);
  }

  public describeInterconnectLoa(input: shapes.DirectConnectDescribeInterconnectLoaRequest): DirectConnectDescribeInterconnectLoa {
    return new DirectConnectDescribeInterconnectLoa(this, 'DescribeInterconnectLoa', this.__resources, input);
  }

  public describeInterconnects(input: shapes.DirectConnectDescribeInterconnectsRequest): DirectConnectDescribeInterconnects {
    return new DirectConnectDescribeInterconnects(this, 'DescribeInterconnects', this.__resources, input);
  }

  public describeLags(input: shapes.DirectConnectDescribeLagsRequest): DirectConnectDescribeLags {
    return new DirectConnectDescribeLags(this, 'DescribeLags', this.__resources, input);
  }

  public describeLoa(input: shapes.DirectConnectDescribeLoaRequest): DirectConnectDescribeLoa {
    return new DirectConnectDescribeLoa(this, 'DescribeLoa', this.__resources, input);
  }

  public describeLocations(): DirectConnectDescribeLocations {
    return new DirectConnectDescribeLocations(this, 'DescribeLocations', this.__resources);
  }

  public describeTags(input: shapes.DirectConnectDescribeTagsRequest): DirectConnectDescribeTags {
    return new DirectConnectDescribeTags(this, 'DescribeTags', this.__resources, input);
  }

  public describeVirtualGateways(): DirectConnectDescribeVirtualGateways {
    return new DirectConnectDescribeVirtualGateways(this, 'DescribeVirtualGateways', this.__resources);
  }

  public describeVirtualInterfaces(input: shapes.DirectConnectDescribeVirtualInterfacesRequest): DirectConnectDescribeVirtualInterfaces {
    return new DirectConnectDescribeVirtualInterfaces(this, 'DescribeVirtualInterfaces', this.__resources, input);
  }

  public disassociateConnectionFromLag(input: shapes.DirectConnectDisassociateConnectionFromLagRequest): DirectConnectDisassociateConnectionFromLag {
    return new DirectConnectDisassociateConnectionFromLag(this, 'DisassociateConnectionFromLag', this.__resources, input);
  }

  public listVirtualInterfaceTestHistory(input: shapes.DirectConnectListVirtualInterfaceTestHistoryRequest): DirectConnectListVirtualInterfaceTestHistory {
    return new DirectConnectListVirtualInterfaceTestHistory(this, 'ListVirtualInterfaceTestHistory', this.__resources, input);
  }

  public startBgpFailoverTest(input: shapes.DirectConnectStartBgpFailoverTestRequest): DirectConnectStartBgpFailoverTest {
    return new DirectConnectStartBgpFailoverTest(this, 'StartBgpFailoverTest', this.__resources, input);
  }

  public stopBgpFailoverTest(input: shapes.DirectConnectStopBgpFailoverTestRequest): DirectConnectStopBgpFailoverTest {
    return new DirectConnectStopBgpFailoverTest(this, 'StopBgpFailoverTest', this.__resources, input);
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

  public updateDirectConnectGatewayAssociation(input: shapes.DirectConnectUpdateDirectConnectGatewayAssociationRequest): DirectConnectUpdateDirectConnectGatewayAssociation {
    return new DirectConnectUpdateDirectConnectGatewayAssociation(this, 'UpdateDirectConnectGatewayAssociation', this.__resources, input);
  }

  public updateLag(input: shapes.DirectConnectUpdateLagRequest): DirectConnectUpdateLag {
    return new DirectConnectUpdateLag(this, 'UpdateLag', this.__resources, input);
  }

  public updateVirtualInterfaceAttributes(input: shapes.DirectConnectUpdateVirtualInterfaceAttributesRequest): DirectConnectUpdateVirtualInterfaceAttributes {
    return new DirectConnectUpdateVirtualInterfaceAttributes(this, 'UpdateVirtualInterfaceAttributes', this.__resources, input);
  }

}

export class DirectConnectAcceptDirectConnectGatewayAssociationProposal extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest) {
    super(scope, id);
  }

  public get directConnectGatewayAssociation(): DirectConnectAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation {
    return new DirectConnectAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation(this, 'DirectConnectGatewayAssociation', this.__resources, this.input);
  }

}

export class DirectConnectAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest) {
    super(scope, id);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          proposalId: this.input.proposalId,
          associatedGatewayOwnerAccount: this.input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.directConnectGatewayId', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          proposalId: this.input.proposalId,
          associatedGatewayOwnerAccount: this.input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.directConnectGatewayOwnerAccount', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          proposalId: this.input.proposalId,
          associatedGatewayOwnerAccount: this.input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associationState', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          proposalId: this.input.proposalId,
          associatedGatewayOwnerAccount: this.input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.stateChangeError', props);
    return resource.getResponseField('directConnectGatewayAssociation.stateChangeError') as unknown as string;
  }

  public get associatedGateway(): DirectConnectAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway {
    return new DirectConnectAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway(this, 'AssociatedGateway', this.__resources, this.input);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          proposalId: this.input.proposalId,
          associatedGatewayOwnerAccount: this.input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associationId', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          proposalId: this.input.proposalId,
          associatedGatewayOwnerAccount: this.input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          proposalId: this.input.proposalId,
          associatedGatewayOwnerAccount: this.input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.virtualGatewayId', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          proposalId: this.input.proposalId,
          associatedGatewayOwnerAccount: this.input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.virtualGatewayRegion', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          proposalId: this.input.proposalId,
          associatedGatewayOwnerAccount: this.input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.virtualGatewayOwnerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayOwnerAccount') as unknown as string;
  }

}

export class DirectConnectAcceptDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationAssociatedGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectAcceptDirectConnectGatewayAssociationProposalRequest) {
    super(scope, id);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          proposalId: this.input.proposalId,
          associatedGatewayOwnerAccount: this.input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associatedGateway.id', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          proposalId: this.input.proposalId,
          associatedGatewayOwnerAccount: this.input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associatedGateway.type', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          proposalId: this.input.proposalId,
          associatedGatewayOwnerAccount: this.input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associatedGateway.ownerAccount', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          proposalId: this.input.proposalId,
          associatedGatewayOwnerAccount: this.input.associatedGatewayOwnerAccount,
          overrideAllowedPrefixesToDirectConnectGateway: this.input.overrideAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AcceptDirectConnectGatewayAssociationProposal.directConnectGatewayAssociation.associatedGateway.region', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.region') as unknown as string;
  }

}

export class DirectConnectAllocateConnectionOnInterconnect extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectAllocateConnectionOnInterconnectRequest) {
    super(scope, id);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.ownerAccount', props);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.connectionId', props);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.connectionName', props);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.connectionState', props);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.region', props);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.location', props);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.bandwidth', props);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.vlan', props);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.partnerName', props);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.loaIssueTime', props);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.lagId', props);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.awsDevice', props);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.jumboFrameCapable', props);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.hasLogicalRedundancy', props);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.tags', props);
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
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          ownerAccount: this.input.ownerAccount,
          interconnectId: this.input.interconnectId,
          vlan: this.input.vlan,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateConnectionOnInterconnect.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

}

export class DirectConnectAllocateHostedConnection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectAllocateHostedConnectionRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.ownerAccount', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.connectionId', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.connectionName', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.connectionState', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.region', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.location', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.bandwidth', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.vlan', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.partnerName', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.loaIssueTime', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.lagId', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.awsDevice', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.jumboFrameCapable', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.hasLogicalRedundancy', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.tags', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          vlan: this.input.vlan,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateHostedConnection.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

}

export class DirectConnectAllocatePrivateVirtualInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectAllocatePrivateVirtualInterfaceRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.ownerAccount', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.virtualInterfaceId', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.location', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.connectionId', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.virtualInterfaceType', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.virtualInterfaceName', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.vlan', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.asn', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.amazonSideAsn', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.authKey', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.amazonAddress', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.customerAddress', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.addressFamily', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.virtualInterfaceState', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.customerRouterConfig', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.mtu', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.jumboFrameCapable', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.virtualGatewayId', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.directConnectGatewayId', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.routeFilterPrefixes', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.bgpPeers', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.region', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPrivateVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPrivateVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterfaceAllocation.vlan,
            asn: this.input.newPrivateVirtualInterfaceAllocation.asn,
            mtu: this.input.newPrivateVirtualInterfaceAllocation.mtu,
            authKey: this.input.newPrivateVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPrivateVirtualInterfaceAllocation.amazonAddress,
            addressFamily: this.input.newPrivateVirtualInterfaceAllocation.addressFamily,
            customerAddress: this.input.newPrivateVirtualInterfaceAllocation.customerAddress,
            tags: this.input.newPrivateVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePrivateVirtualInterface.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectAllocatePublicVirtualInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectAllocatePublicVirtualInterfaceRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.ownerAccount', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.virtualInterfaceId', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.location', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.connectionId', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.virtualInterfaceType', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.virtualInterfaceName', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.vlan', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.asn', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.amazonSideAsn', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.authKey', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.amazonAddress', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.customerAddress', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.addressFamily', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.virtualInterfaceState', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.customerRouterConfig', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.mtu', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.jumboFrameCapable', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.virtualGatewayId', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.directConnectGatewayId', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.routeFilterPrefixes', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.bgpPeers', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.region', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newPublicVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newPublicVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterfaceAllocation.vlan,
            asn: this.input.newPublicVirtualInterfaceAllocation.asn,
            authKey: this.input.newPublicVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newPublicVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newPublicVirtualInterfaceAllocation.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterfaceAllocation.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocatePublicVirtualInterface.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectAllocateTransitVirtualInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectAllocateTransitVirtualInterfaceRequest) {
    super(scope, id);
  }

  public get virtualInterface(): DirectConnectAllocateTransitVirtualInterfaceVirtualInterface {
    return new DirectConnectAllocateTransitVirtualInterfaceVirtualInterface(this, 'VirtualInterface', this.__resources, this.input);
  }

}

export class DirectConnectAllocateTransitVirtualInterfaceVirtualInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectAllocateTransitVirtualInterfaceRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.ownerAccount', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.virtualInterfaceId', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.location', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.connectionId', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.virtualInterfaceType', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.virtualInterfaceName', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.vlan', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.asn', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.amazonSideAsn', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.authKey', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.amazonAddress', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.customerAddress', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.addressFamily', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.virtualInterfaceState', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.customerRouterConfig', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.mtu', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.jumboFrameCapable', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.virtualGatewayId', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.directConnectGatewayId', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.routeFilterPrefixes', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.bgpPeers', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.region', props);
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.awsDeviceV2', props);
    return resource.getResponseField('virtualInterface.awsDeviceV2') as unknown as string;
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
          connectionId: this.input.connectionId,
          ownerAccount: this.input.ownerAccount,
          newTransitVirtualInterfaceAllocation: {
            virtualInterfaceName: this.input.newTransitVirtualInterfaceAllocation.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterfaceAllocation.vlan,
            asn: this.input.newTransitVirtualInterfaceAllocation.asn,
            mtu: this.input.newTransitVirtualInterfaceAllocation.mtu,
            authKey: this.input.newTransitVirtualInterfaceAllocation.authKey,
            amazonAddress: this.input.newTransitVirtualInterfaceAllocation.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterfaceAllocation.customerAddress,
            addressFamily: this.input.newTransitVirtualInterfaceAllocation.addressFamily,
            tags: this.input.newTransitVirtualInterfaceAllocation.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateTransitVirtualInterface.virtualInterface.tags', props);
    return resource.getResponseField('virtualInterface.tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectAssociateConnectionWithLag extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectAssociateConnectionWithLagRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.ownerAccount', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.connectionId', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.connectionName', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.connectionState', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.region', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.location', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.bandwidth', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.vlan', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.partnerName', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.loaIssueTime', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.lagId', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.awsDevice', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.jumboFrameCapable', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.hasLogicalRedundancy', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.tags', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionWithLag.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

}

export class DirectConnectAssociateHostedConnection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectAssociateHostedConnectionRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.ownerAccount', props);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.connectionId', props);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.connectionName', props);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.connectionState', props);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.region', props);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.location', props);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.bandwidth', props);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.vlan', props);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.partnerName', props);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.loaIssueTime', props);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.lagId', props);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.awsDevice', props);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.jumboFrameCapable', props);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.hasLogicalRedundancy', props);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.tags', props);
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
          connectionId: this.input.connectionId,
          parentConnectionId: this.input.parentConnectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateHostedConnection.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

}

export class DirectConnectAssociateVirtualInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectAssociateVirtualInterfaceRequest) {
    super(scope, id);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.ownerAccount', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.virtualInterfaceId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.location', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.connectionId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.virtualInterfaceType', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.virtualInterfaceName', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.vlan', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.asn', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.amazonSideAsn', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.authKey', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.amazonAddress', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.customerAddress', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.addressFamily', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.virtualInterfaceState', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.customerRouterConfig', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.mtu', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.jumboFrameCapable', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.virtualGatewayId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.directConnectGatewayId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.routeFilterPrefixes', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.bgpPeers', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.region', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateVirtualInterface.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectConfirmConnection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectConfirmConnectionRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ConfirmConnection.connectionState', props);
    return resource.getResponseField('connectionState') as unknown as string;
  }

}

export class DirectConnectConfirmPrivateVirtualInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectConfirmPrivateVirtualInterfaceRequest) {
    super(scope, id);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          virtualGatewayId: this.input.virtualGatewayId,
          directConnectGatewayId: this.input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ConfirmPrivateVirtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterfaceState') as unknown as string;
  }

}

export class DirectConnectConfirmPublicVirtualInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectConfirmPublicVirtualInterfaceRequest) {
    super(scope, id);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ConfirmPublicVirtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterfaceState') as unknown as string;
  }

}

export class DirectConnectConfirmTransitVirtualInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectConfirmTransitVirtualInterfaceRequest) {
    super(scope, id);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          directConnectGatewayId: this.input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ConfirmTransitVirtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterfaceState') as unknown as string;
  }

}

export class DirectConnectCreateBgpPeer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreateBgpPeerRequest) {
    super(scope, id);
  }

  public get virtualInterface(): DirectConnectCreateBgpPeerVirtualInterface {
    return new DirectConnectCreateBgpPeerVirtualInterface(this, 'VirtualInterface', this.__resources, this.input);
  }

}

export class DirectConnectCreateBgpPeerVirtualInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreateBgpPeerRequest) {
    super(scope, id);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.ownerAccount', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.virtualInterfaceId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.location', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.connectionId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.virtualInterfaceType', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.virtualInterfaceName', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.vlan', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.asn', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.amazonSideAsn', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.authKey', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.amazonAddress', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.customerAddress', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.addressFamily', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.virtualInterfaceState', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.customerRouterConfig', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.mtu', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.jumboFrameCapable', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.virtualGatewayId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.directConnectGatewayId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.routeFilterPrefixes', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.bgpPeers', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.region', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.awsDeviceV2', props);
    return resource.getResponseField('virtualInterface.awsDeviceV2') as unknown as string;
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          newBGPPeer: {
            asn: this.input.newBGPPeer?.asn,
            authKey: this.input.newBGPPeer?.authKey,
            addressFamily: this.input.newBGPPeer?.addressFamily,
            amazonAddress: this.input.newBGPPeer?.amazonAddress,
            customerAddress: this.input.newBGPPeer?.customerAddress,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBGPPeer.virtualInterface.tags', props);
    return resource.getResponseField('virtualInterface.tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectCreateConnection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreateConnectionRequest) {
    super(scope, id);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.ownerAccount', props);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.connectionId', props);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.connectionName', props);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.connectionState', props);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.region', props);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.location', props);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.bandwidth', props);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.vlan', props);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.partnerName', props);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.loaIssueTime', props);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.lagId', props);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.awsDevice', props);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.jumboFrameCapable', props);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.hasLogicalRedundancy', props);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.tags', props);
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
          location: this.input.location,
          bandwidth: this.input.bandwidth,
          connectionName: this.input.connectionName,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

}

export class DirectConnectCreateDirectConnectGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreateDirectConnectGatewayRequest) {
    super(scope, id);
  }

  public get directConnectGateway(): DirectConnectCreateDirectConnectGatewayDirectConnectGateway {
    return new DirectConnectCreateDirectConnectGatewayDirectConnectGateway(this, 'DirectConnectGateway', this.__resources, this.input);
  }

}

export class DirectConnectCreateDirectConnectGatewayDirectConnectGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreateDirectConnectGatewayRequest) {
    super(scope, id);
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
          directConnectGatewayName: this.input.directConnectGatewayName,
          amazonSideAsn: this.input.amazonSideAsn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGateway.directConnectGateway.directConnectGatewayId', props);
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
          directConnectGatewayName: this.input.directConnectGatewayName,
          amazonSideAsn: this.input.amazonSideAsn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGateway.directConnectGateway.directConnectGatewayName', props);
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
          directConnectGatewayName: this.input.directConnectGatewayName,
          amazonSideAsn: this.input.amazonSideAsn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGateway.directConnectGateway.amazonSideAsn', props);
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
          directConnectGatewayName: this.input.directConnectGatewayName,
          amazonSideAsn: this.input.amazonSideAsn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGateway.directConnectGateway.ownerAccount', props);
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
          directConnectGatewayName: this.input.directConnectGatewayName,
          amazonSideAsn: this.input.amazonSideAsn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGateway.directConnectGateway.directConnectGatewayState', props);
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
          directConnectGatewayName: this.input.directConnectGatewayName,
          amazonSideAsn: this.input.amazonSideAsn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGateway.directConnectGateway.stateChangeError', props);
    return resource.getResponseField('directConnectGateway.stateChangeError') as unknown as string;
  }

}

export class DirectConnectCreateDirectConnectGatewayAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreateDirectConnectGatewayAssociationRequest) {
    super(scope, id);
  }

  public get directConnectGatewayAssociation(): DirectConnectCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation {
    return new DirectConnectCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation(this, 'DirectConnectGatewayAssociation', this.__resources, this.input);
  }

}

export class DirectConnectCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreateDirectConnectGatewayAssociationRequest) {
    super(scope, id);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayId', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayOwnerAccount', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationState', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.stateChangeError', props);
    return resource.getResponseField('directConnectGatewayAssociation.stateChangeError') as unknown as string;
  }

  public get associatedGateway(): DirectConnectCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway {
    return new DirectConnectCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway(this, 'AssociatedGateway', this.__resources, this.input);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationId', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayId', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayRegion', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayOwnerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayOwnerAccount') as unknown as string;
  }

}

export class DirectConnectCreateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreateDirectConnectGatewayAssociationRequest) {
    super(scope, id);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.id', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.type', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.ownerAccount', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.region', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.region') as unknown as string;
  }

}

export class DirectConnectCreateDirectConnectGatewayAssociationProposal extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest) {
    super(scope, id);
  }

  public get directConnectGatewayAssociationProposal(): DirectConnectCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal {
    return new DirectConnectCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal(this, 'DirectConnectGatewayAssociationProposal', this.__resources, this.input);
  }

}

export class DirectConnectCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest) {
    super(scope, id);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.input.directConnectGatewayOwnerAccount,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.proposalId', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.input.directConnectGatewayOwnerAccount,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.directConnectGatewayId', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.input.directConnectGatewayOwnerAccount,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.directConnectGatewayOwnerAccount', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.input.directConnectGatewayOwnerAccount,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.proposalState', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.proposalState') as unknown as string;
  }

  public get associatedGateway(): DirectConnectCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway {
    return new DirectConnectCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway(this, 'AssociatedGateway', this.__resources, this.input);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.input.directConnectGatewayOwnerAccount,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.existingAllowedPrefixesToDirectConnectGateway', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.input.directConnectGatewayOwnerAccount,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.requestedAllowedPrefixesToDirectConnectGateway', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.requestedAllowedPrefixesToDirectConnectGateway') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

}

export class DirectConnectCreateDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreateDirectConnectGatewayAssociationProposalRequest) {
    super(scope, id);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.input.directConnectGatewayOwnerAccount,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.id', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.input.directConnectGatewayOwnerAccount,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.type', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.input.directConnectGatewayOwnerAccount,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.ownerAccount', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          directConnectGatewayOwnerAccount: this.input.directConnectGatewayOwnerAccount,
          gatewayId: this.input.gatewayId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.region', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.associatedGateway.region') as unknown as string;
  }

}

export class DirectConnectCreateInterconnect extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreateInterconnectRequest) {
    super(scope, id);
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
          interconnectName: this.input.interconnectName,
          bandwidth: this.input.bandwidth,
          location: this.input.location,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInterconnect.interconnectId', props);
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
          interconnectName: this.input.interconnectName,
          bandwidth: this.input.bandwidth,
          location: this.input.location,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInterconnect.interconnectName', props);
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
          interconnectName: this.input.interconnectName,
          bandwidth: this.input.bandwidth,
          location: this.input.location,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInterconnect.interconnectState', props);
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
          interconnectName: this.input.interconnectName,
          bandwidth: this.input.bandwidth,
          location: this.input.location,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInterconnect.region', props);
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
          interconnectName: this.input.interconnectName,
          bandwidth: this.input.bandwidth,
          location: this.input.location,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInterconnect.location', props);
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
          interconnectName: this.input.interconnectName,
          bandwidth: this.input.bandwidth,
          location: this.input.location,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInterconnect.bandwidth', props);
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
          interconnectName: this.input.interconnectName,
          bandwidth: this.input.bandwidth,
          location: this.input.location,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInterconnect.loaIssueTime', props);
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
          interconnectName: this.input.interconnectName,
          bandwidth: this.input.bandwidth,
          location: this.input.location,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInterconnect.lagId', props);
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
          interconnectName: this.input.interconnectName,
          bandwidth: this.input.bandwidth,
          location: this.input.location,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInterconnect.awsDevice', props);
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
          interconnectName: this.input.interconnectName,
          bandwidth: this.input.bandwidth,
          location: this.input.location,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInterconnect.jumboFrameCapable', props);
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
          interconnectName: this.input.interconnectName,
          bandwidth: this.input.bandwidth,
          location: this.input.location,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInterconnect.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          interconnectName: this.input.interconnectName,
          bandwidth: this.input.bandwidth,
          location: this.input.location,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInterconnect.hasLogicalRedundancy', props);
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
          interconnectName: this.input.interconnectName,
          bandwidth: this.input.bandwidth,
          location: this.input.location,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInterconnect.tags', props);
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
          interconnectName: this.input.interconnectName,
          bandwidth: this.input.bandwidth,
          location: this.input.location,
          lagId: this.input.lagId,
          tags: this.input.tags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInterconnect.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

}

export class DirectConnectCreateLag extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreateLagRequest) {
    super(scope, id);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.connectionsBandwidth', props);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.numberOfConnections', props);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.lagId', props);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.ownerAccount', props);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.lagName', props);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.lagState', props);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.location', props);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.region', props);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.minimumLinks', props);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.awsDevice', props);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.connections', props);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.allowsHostedConnections', props);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.jumboFrameCapable', props);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.hasLogicalRedundancy', props);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.tags', props);
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
          numberOfConnections: this.input.numberOfConnections,
          location: this.input.location,
          connectionsBandwidth: this.input.connectionsBandwidth,
          lagName: this.input.lagName,
          connectionId: this.input.connectionId,
          tags: this.input.tags,
          childConnectionTags: this.input.childConnectionTags,
          providerName: this.input.providerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLag.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

}

export class DirectConnectCreatePrivateVirtualInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreatePrivateVirtualInterfaceRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.ownerAccount', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.virtualInterfaceId', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.location', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.connectionId', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.virtualInterfaceType', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.virtualInterfaceName', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.vlan', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.asn', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.amazonSideAsn', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.authKey', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.amazonAddress', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.customerAddress', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.addressFamily', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.virtualInterfaceState', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.customerRouterConfig', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.mtu', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.jumboFrameCapable', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.virtualGatewayId', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.directConnectGatewayId', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.routeFilterPrefixes', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.bgpPeers', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.region', props);
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          connectionId: this.input.connectionId,
          newPrivateVirtualInterface: {
            virtualInterfaceName: this.input.newPrivateVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPrivateVirtualInterface.vlan,
            asn: this.input.newPrivateVirtualInterface.asn,
            mtu: this.input.newPrivateVirtualInterface.mtu,
            authKey: this.input.newPrivateVirtualInterface.authKey,
            amazonAddress: this.input.newPrivateVirtualInterface.amazonAddress,
            customerAddress: this.input.newPrivateVirtualInterface.customerAddress,
            addressFamily: this.input.newPrivateVirtualInterface.addressFamily,
            virtualGatewayId: this.input.newPrivateVirtualInterface.virtualGatewayId,
            directConnectGatewayId: this.input.newPrivateVirtualInterface.directConnectGatewayId,
            tags: this.input.newPrivateVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateVirtualInterface.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectCreatePublicVirtualInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreatePublicVirtualInterfaceRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.ownerAccount', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.virtualInterfaceId', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.location', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.connectionId', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.virtualInterfaceType', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.virtualInterfaceName', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.vlan', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.asn', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.amazonSideAsn', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.authKey', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.amazonAddress', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.customerAddress', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.addressFamily', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.virtualInterfaceState', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.customerRouterConfig', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.mtu', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.jumboFrameCapable', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.virtualGatewayId', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.directConnectGatewayId', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.routeFilterPrefixes', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.bgpPeers', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.region', props);
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          connectionId: this.input.connectionId,
          newPublicVirtualInterface: {
            virtualInterfaceName: this.input.newPublicVirtualInterface.virtualInterfaceName,
            vlan: this.input.newPublicVirtualInterface.vlan,
            asn: this.input.newPublicVirtualInterface.asn,
            authKey: this.input.newPublicVirtualInterface.authKey,
            amazonAddress: this.input.newPublicVirtualInterface.amazonAddress,
            customerAddress: this.input.newPublicVirtualInterface.customerAddress,
            addressFamily: this.input.newPublicVirtualInterface.addressFamily,
            routeFilterPrefixes: this.input.newPublicVirtualInterface.routeFilterPrefixes,
            tags: this.input.newPublicVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicVirtualInterface.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectCreateTransitVirtualInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreateTransitVirtualInterfaceRequest) {
    super(scope, id);
  }

  public get virtualInterface(): DirectConnectCreateTransitVirtualInterfaceVirtualInterface {
    return new DirectConnectCreateTransitVirtualInterfaceVirtualInterface(this, 'VirtualInterface', this.__resources, this.input);
  }

}

export class DirectConnectCreateTransitVirtualInterfaceVirtualInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectCreateTransitVirtualInterfaceRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.ownerAccount', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.virtualInterfaceId', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.location', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.connectionId', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.virtualInterfaceType', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.virtualInterfaceName', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.vlan', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.asn', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.amazonSideAsn', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.authKey', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.amazonAddress', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.customerAddress', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.addressFamily', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.virtualInterfaceState', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.customerRouterConfig', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.mtu', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.jumboFrameCapable', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.virtualGatewayId', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.directConnectGatewayId', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.routeFilterPrefixes', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.bgpPeers', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.region', props);
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.awsDeviceV2', props);
    return resource.getResponseField('virtualInterface.awsDeviceV2') as unknown as string;
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
          connectionId: this.input.connectionId,
          newTransitVirtualInterface: {
            virtualInterfaceName: this.input.newTransitVirtualInterface.virtualInterfaceName,
            vlan: this.input.newTransitVirtualInterface.vlan,
            asn: this.input.newTransitVirtualInterface.asn,
            mtu: this.input.newTransitVirtualInterface.mtu,
            authKey: this.input.newTransitVirtualInterface.authKey,
            amazonAddress: this.input.newTransitVirtualInterface.amazonAddress,
            customerAddress: this.input.newTransitVirtualInterface.customerAddress,
            addressFamily: this.input.newTransitVirtualInterface.addressFamily,
            directConnectGatewayId: this.input.newTransitVirtualInterface.directConnectGatewayId,
            tags: this.input.newTransitVirtualInterface.tags,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransitVirtualInterface.virtualInterface.tags', props);
    return resource.getResponseField('virtualInterface.tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectDeleteBgpPeer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDeleteBgpPeerRequest) {
    super(scope, id);
  }

  public get virtualInterface(): DirectConnectDeleteBgpPeerVirtualInterface {
    return new DirectConnectDeleteBgpPeerVirtualInterface(this, 'VirtualInterface', this.__resources, this.input);
  }

}

export class DirectConnectDeleteBgpPeerVirtualInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDeleteBgpPeerRequest) {
    super(scope, id);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.ownerAccount', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.virtualInterfaceId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.location', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.connectionId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.virtualInterfaceType', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.virtualInterfaceName', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.vlan', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.asn', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.amazonSideAsn', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.authKey', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.amazonAddress', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.customerAddress', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.addressFamily', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.virtualInterfaceState', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.customerRouterConfig', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.mtu', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.jumboFrameCapable', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.virtualGatewayId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.directConnectGatewayId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.routeFilterPrefixes', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.bgpPeers', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.region', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.awsDeviceV2', props);
    return resource.getResponseField('virtualInterface.awsDeviceV2') as unknown as string;
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          asn: this.input.asn,
          customerAddress: this.input.customerAddress,
          bgpPeerId: this.input.bgpPeerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBGPPeer.virtualInterface.tags', props);
    return resource.getResponseField('virtualInterface.tags') as unknown as shapes.DirectConnectTag[];
  }

}

export class DirectConnectDeleteConnection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDeleteConnectionRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.ownerAccount', props);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.connectionId', props);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.connectionName', props);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.connectionState', props);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.region', props);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.location', props);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.bandwidth', props);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.vlan', props);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.partnerName', props);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.loaIssueTime', props);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.lagId', props);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.awsDevice', props);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.jumboFrameCapable', props);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.hasLogicalRedundancy', props);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.tags', props);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConnection.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

}

export class DirectConnectDeleteDirectConnectGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDeleteDirectConnectGatewayRequest) {
    super(scope, id);
  }

  public get directConnectGateway(): DirectConnectDeleteDirectConnectGatewayDirectConnectGateway {
    return new DirectConnectDeleteDirectConnectGatewayDirectConnectGateway(this, 'DirectConnectGateway', this.__resources, this.input);
  }

}

export class DirectConnectDeleteDirectConnectGatewayDirectConnectGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDeleteDirectConnectGatewayRequest) {
    super(scope, id);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGateway.directConnectGateway.directConnectGatewayId', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGateway.directConnectGateway.directConnectGatewayName', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGateway.directConnectGateway.amazonSideAsn', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGateway.directConnectGateway.ownerAccount', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGateway.directConnectGateway.directConnectGatewayState', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGateway.directConnectGateway.stateChangeError', props);
    return resource.getResponseField('directConnectGateway.stateChangeError') as unknown as string;
  }

}

export class DirectConnectDeleteDirectConnectGatewayAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationRequest) {
    super(scope, id);
  }

  public get directConnectGatewayAssociation(): DirectConnectDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation {
    return new DirectConnectDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation(this, 'DirectConnectGatewayAssociation', this.__resources, this.input);
  }

}

export class DirectConnectDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationRequest) {
    super(scope, id);
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
          associationId: this.input.associationId,
          directConnectGatewayId: this.input.directConnectGatewayId,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayId', props);
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
          associationId: this.input.associationId,
          directConnectGatewayId: this.input.directConnectGatewayId,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayOwnerAccount', props);
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
          associationId: this.input.associationId,
          directConnectGatewayId: this.input.directConnectGatewayId,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationState', props);
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
          associationId: this.input.associationId,
          directConnectGatewayId: this.input.directConnectGatewayId,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.stateChangeError', props);
    return resource.getResponseField('directConnectGatewayAssociation.stateChangeError') as unknown as string;
  }

  public get associatedGateway(): DirectConnectDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway {
    return new DirectConnectDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway(this, 'AssociatedGateway', this.__resources, this.input);
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
          associationId: this.input.associationId,
          directConnectGatewayId: this.input.directConnectGatewayId,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationId', props);
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
          associationId: this.input.associationId,
          directConnectGatewayId: this.input.directConnectGatewayId,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway', props);
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
          associationId: this.input.associationId,
          directConnectGatewayId: this.input.directConnectGatewayId,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayId', props);
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
          associationId: this.input.associationId,
          directConnectGatewayId: this.input.directConnectGatewayId,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayRegion', props);
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
          associationId: this.input.associationId,
          directConnectGatewayId: this.input.directConnectGatewayId,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayOwnerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayOwnerAccount') as unknown as string;
  }

}

export class DirectConnectDeleteDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationRequest) {
    super(scope, id);
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
          associationId: this.input.associationId,
          directConnectGatewayId: this.input.directConnectGatewayId,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.id', props);
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
          associationId: this.input.associationId,
          directConnectGatewayId: this.input.directConnectGatewayId,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.type', props);
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
          associationId: this.input.associationId,
          directConnectGatewayId: this.input.directConnectGatewayId,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.ownerAccount', props);
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
          associationId: this.input.associationId,
          directConnectGatewayId: this.input.directConnectGatewayId,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.region', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.region') as unknown as string;
  }

}

export class DirectConnectDeleteDirectConnectGatewayAssociationProposal extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest) {
    super(scope, id);
  }

  public get directConnectGatewayAssociationProposal(): DirectConnectDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal {
    return new DirectConnectDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal(this, 'DirectConnectGatewayAssociationProposal', this.__resources, this.input);
  }

}

export class DirectConnectDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposal extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest) {
    super(scope, id);
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
          proposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.proposalId', props);
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
          proposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.directConnectGatewayId', props);
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
          proposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.directConnectGatewayOwnerAccount', props);
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
          proposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.proposalState', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.proposalState') as unknown as string;
  }

  public get associatedGateway(): DirectConnectDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway {
    return new DirectConnectDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway(this, 'AssociatedGateway', this.__resources, this.input);
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
          proposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.existingAllowedPrefixesToDirectConnectGateway', props);
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
          proposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.requestedAllowedPrefixesToDirectConnectGateway', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.requestedAllowedPrefixesToDirectConnectGateway') as unknown as shapes.DirectConnectRouteFilterPrefix[];
  }

}

export class DirectConnectDeleteDirectConnectGatewayAssociationProposalDirectConnectGatewayAssociationProposalAssociatedGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDeleteDirectConnectGatewayAssociationProposalRequest) {
    super(scope, id);
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
          proposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.id', props);
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
          proposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.type', props);
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
          proposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.ownerAccount', props);
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
          proposalId: this.input.proposalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDirectConnectGatewayAssociationProposal.directConnectGatewayAssociationProposal.associatedGateway.region', props);
    return resource.getResponseField('directConnectGatewayAssociationProposal.associatedGateway.region') as unknown as string;
  }

}

export class DirectConnectDeleteInterconnect extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDeleteInterconnectRequest) {
    super(scope, id);
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
          interconnectId: this.input.interconnectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteInterconnect.interconnectState', props);
    return resource.getResponseField('interconnectState') as unknown as string;
  }

}

export class DirectConnectDeleteLag extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDeleteLagRequest) {
    super(scope, id);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.connectionsBandwidth', props);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.numberOfConnections', props);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.lagId', props);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.ownerAccount', props);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.lagName', props);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.lagState', props);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.location', props);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.region', props);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.minimumLinks', props);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.awsDevice', props);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.connections', props);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.allowsHostedConnections', props);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.jumboFrameCapable', props);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.hasLogicalRedundancy', props);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.tags', props);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLag.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

}

export class DirectConnectDeleteVirtualInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDeleteVirtualInterfaceRequest) {
    super(scope, id);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteVirtualInterface.virtualInterfaceState', props);
    return resource.getResponseField('virtualInterfaceState') as unknown as string;
  }

}

export class DirectConnectDescribeConnectionLoa extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeConnectionLoaRequest) {
    super(scope, id);
  }

  public get loa(): DirectConnectDescribeConnectionLoaLoa {
    return new DirectConnectDescribeConnectionLoaLoa(this, 'Loa', this.__resources, this.input);
  }

}

export class DirectConnectDescribeConnectionLoaLoa extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeConnectionLoaRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
          providerName: this.input.providerName,
          loaContentType: this.input.loaContentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConnectionLoa.loa.loaContent', props);
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
          connectionId: this.input.connectionId,
          providerName: this.input.providerName,
          loaContentType: this.input.loaContentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConnectionLoa.loa.loaContentType', props);
    return resource.getResponseField('loa.loaContentType') as unknown as string;
  }

}

export class DirectConnectDescribeConnections extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeConnectionsRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConnections.connections', props);
    return resource.getResponseField('connections') as unknown as shapes.DirectConnectConnection[];
  }

}

export class DirectConnectDescribeConnectionsOnInterconnect extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeConnectionsOnInterconnectRequest) {
    super(scope, id);
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
          interconnectId: this.input.interconnectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConnectionsOnInterconnect.connections', props);
    return resource.getResponseField('connections') as unknown as shapes.DirectConnectConnection[];
  }

}

export class DirectConnectDescribeDirectConnectGatewayAssociationProposals extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeDirectConnectGatewayAssociationProposalsRequest) {
    super(scope, id);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          proposalId: this.input.proposalId,
          associatedGatewayId: this.input.associatedGatewayId,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDirectConnectGatewayAssociationProposals.directConnectGatewayAssociationProposals', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          proposalId: this.input.proposalId,
          associatedGatewayId: this.input.associatedGatewayId,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDirectConnectGatewayAssociationProposals.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DirectConnectDescribeDirectConnectGatewayAssociations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeDirectConnectGatewayAssociationsRequest) {
    super(scope, id);
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
          associationId: this.input.associationId,
          associatedGatewayId: this.input.associatedGatewayId,
          directConnectGatewayId: this.input.directConnectGatewayId,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDirectConnectGatewayAssociations.directConnectGatewayAssociations', props);
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
          associationId: this.input.associationId,
          associatedGatewayId: this.input.associatedGatewayId,
          directConnectGatewayId: this.input.directConnectGatewayId,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          virtualGatewayId: this.input.virtualGatewayId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDirectConnectGatewayAssociations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DirectConnectDescribeDirectConnectGatewayAttachments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeDirectConnectGatewayAttachmentsRequest) {
    super(scope, id);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          virtualInterfaceId: this.input.virtualInterfaceId,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDirectConnectGatewayAttachments.directConnectGatewayAttachments', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          virtualInterfaceId: this.input.virtualInterfaceId,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDirectConnectGatewayAttachments.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DirectConnectDescribeDirectConnectGateways extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeDirectConnectGatewaysRequest) {
    super(scope, id);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDirectConnectGateways.directConnectGateways', props);
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
          directConnectGatewayId: this.input.directConnectGatewayId,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDirectConnectGateways.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DirectConnectDescribeHostedConnections extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeHostedConnectionsRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHostedConnections.connections', props);
    return resource.getResponseField('connections') as unknown as shapes.DirectConnectConnection[];
  }

}

export class DirectConnectDescribeInterconnectLoa extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeInterconnectLoaRequest) {
    super(scope, id);
  }

  public get loa(): DirectConnectDescribeInterconnectLoaLoa {
    return new DirectConnectDescribeInterconnectLoaLoa(this, 'Loa', this.__resources, this.input);
  }

}

export class DirectConnectDescribeInterconnectLoaLoa extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeInterconnectLoaRequest) {
    super(scope, id);
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
          interconnectId: this.input.interconnectId,
          providerName: this.input.providerName,
          loaContentType: this.input.loaContentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInterconnectLoa.loa.loaContent', props);
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
          interconnectId: this.input.interconnectId,
          providerName: this.input.providerName,
          loaContentType: this.input.loaContentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInterconnectLoa.loa.loaContentType', props);
    return resource.getResponseField('loa.loaContentType') as unknown as string;
  }

}

export class DirectConnectDescribeInterconnects extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeInterconnectsRequest) {
    super(scope, id);
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
          interconnectId: this.input.interconnectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInterconnects.interconnects', props);
    return resource.getResponseField('interconnects') as unknown as shapes.DirectConnectInterconnect[];
  }

}

export class DirectConnectDescribeLags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeLagsRequest) {
    super(scope, id);
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
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLags.lags', props);
    return resource.getResponseField('lags') as unknown as shapes.DirectConnectLag[];
  }

}

export class DirectConnectDescribeLoa extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeLoaRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
          providerName: this.input.providerName,
          loaContentType: this.input.loaContentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLoa.loaContent', props);
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
          connectionId: this.input.connectionId,
          providerName: this.input.providerName,
          loaContentType: this.input.loaContentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLoa.loaContentType', props);
    return resource.getResponseField('loaContentType') as unknown as string;
  }

}

export class DirectConnectDescribeLocations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeLocations.locations', props);
    return resource.getResponseField('locations') as unknown as shapes.DirectConnectLocation[];
  }

}

export class DirectConnectDescribeTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeTagsRequest) {
    super(scope, id);
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
          resourceArns: this.input.resourceArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTags.resourceTags', props);
    return resource.getResponseField('resourceTags') as unknown as shapes.DirectConnectResourceTag[];
  }

}

export class DirectConnectDescribeVirtualGateways extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeVirtualGateways.virtualGateways', props);
    return resource.getResponseField('virtualGateways') as unknown as shapes.DirectConnectVirtualGateway[];
  }

}

export class DirectConnectDescribeVirtualInterfaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDescribeVirtualInterfacesRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
          virtualInterfaceId: this.input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeVirtualInterfaces.virtualInterfaces', props);
    return resource.getResponseField('virtualInterfaces') as unknown as shapes.DirectConnectVirtualInterface[];
  }

}

export class DirectConnectDisassociateConnectionFromLag extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectDisassociateConnectionFromLagRequest) {
    super(scope, id);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.ownerAccount', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.connectionId', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.connectionName', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.connectionState', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.region', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.location', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.bandwidth', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.vlan', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.partnerName', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.loaIssueTime', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.lagId', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.awsDevice', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.jumboFrameCapable', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.hasLogicalRedundancy', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.tags', props);
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
          connectionId: this.input.connectionId,
          lagId: this.input.lagId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateConnectionFromLag.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

}

export class DirectConnectListVirtualInterfaceTestHistory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectListVirtualInterfaceTestHistoryRequest) {
    super(scope, id);
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
          testId: this.input.testId,
          virtualInterfaceId: this.input.virtualInterfaceId,
          bgpPeers: this.input.bgpPeers,
          status: this.input.status,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVirtualInterfaceTestHistory.virtualInterfaceTestHistory', props);
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
          testId: this.input.testId,
          virtualInterfaceId: this.input.virtualInterfaceId,
          bgpPeers: this.input.bgpPeers,
          status: this.input.status,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVirtualInterfaceTestHistory.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DirectConnectStartBgpFailoverTest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectStartBgpFailoverTestRequest) {
    super(scope, id);
  }

  public get virtualInterfaceTest(): DirectConnectStartBgpFailoverTestVirtualInterfaceTest {
    return new DirectConnectStartBgpFailoverTestVirtualInterfaceTest(this, 'VirtualInterfaceTest', this.__resources, this.input);
  }

}

export class DirectConnectStartBgpFailoverTestVirtualInterfaceTest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectStartBgpFailoverTestRequest) {
    super(scope, id);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          bgpPeers: this.input.bgpPeers,
          testDurationInMinutes: this.input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartBgpFailoverTest.virtualInterfaceTest.testId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          bgpPeers: this.input.bgpPeers,
          testDurationInMinutes: this.input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartBgpFailoverTest.virtualInterfaceTest.virtualInterfaceId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          bgpPeers: this.input.bgpPeers,
          testDurationInMinutes: this.input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartBgpFailoverTest.virtualInterfaceTest.bgpPeers', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          bgpPeers: this.input.bgpPeers,
          testDurationInMinutes: this.input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartBgpFailoverTest.virtualInterfaceTest.status', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          bgpPeers: this.input.bgpPeers,
          testDurationInMinutes: this.input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartBgpFailoverTest.virtualInterfaceTest.ownerAccount', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          bgpPeers: this.input.bgpPeers,
          testDurationInMinutes: this.input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartBgpFailoverTest.virtualInterfaceTest.testDurationInMinutes', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          bgpPeers: this.input.bgpPeers,
          testDurationInMinutes: this.input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartBgpFailoverTest.virtualInterfaceTest.startTime', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          bgpPeers: this.input.bgpPeers,
          testDurationInMinutes: this.input.testDurationInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartBgpFailoverTest.virtualInterfaceTest.endTime', props);
    return resource.getResponseField('virtualInterfaceTest.endTime') as unknown as string;
  }

}

export class DirectConnectStopBgpFailoverTest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectStopBgpFailoverTestRequest) {
    super(scope, id);
  }

  public get virtualInterfaceTest(): DirectConnectStopBgpFailoverTestVirtualInterfaceTest {
    return new DirectConnectStopBgpFailoverTestVirtualInterfaceTest(this, 'VirtualInterfaceTest', this.__resources, this.input);
  }

}

export class DirectConnectStopBgpFailoverTestVirtualInterfaceTest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectStopBgpFailoverTestRequest) {
    super(scope, id);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopBgpFailoverTest.virtualInterfaceTest.testId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopBgpFailoverTest.virtualInterfaceTest.virtualInterfaceId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopBgpFailoverTest.virtualInterfaceTest.bgpPeers', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopBgpFailoverTest.virtualInterfaceTest.status', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopBgpFailoverTest.virtualInterfaceTest.ownerAccount', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopBgpFailoverTest.virtualInterfaceTest.testDurationInMinutes', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopBgpFailoverTest.virtualInterfaceTest.startTime', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopBgpFailoverTest.virtualInterfaceTest.endTime', props);
    return resource.getResponseField('virtualInterfaceTest.endTime') as unknown as string;
  }

}

export class DirectConnectUpdateDirectConnectGatewayAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectUpdateDirectConnectGatewayAssociationRequest) {
    super(scope, id);
  }

  public get directConnectGatewayAssociation(): DirectConnectUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation {
    return new DirectConnectUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation(this, 'DirectConnectGatewayAssociation', this.__resources, this.input);
  }

}

export class DirectConnectUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectUpdateDirectConnectGatewayAssociationRequest) {
    super(scope, id);
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
          associationId: this.input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayId', props);
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
          associationId: this.input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.directConnectGatewayOwnerAccount', props);
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
          associationId: this.input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationState', props);
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
          associationId: this.input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.stateChangeError', props);
    return resource.getResponseField('directConnectGatewayAssociation.stateChangeError') as unknown as string;
  }

  public get associatedGateway(): DirectConnectUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway {
    return new DirectConnectUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway(this, 'AssociatedGateway', this.__resources, this.input);
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
          associationId: this.input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associationId', props);
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
          associationId: this.input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.allowedPrefixesToDirectConnectGateway', props);
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
          associationId: this.input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayId', props);
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
          associationId: this.input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayRegion', props);
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
          associationId: this.input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.virtualGatewayOwnerAccount', props);
    return resource.getResponseField('directConnectGatewayAssociation.virtualGatewayOwnerAccount') as unknown as string;
  }

}

export class DirectConnectUpdateDirectConnectGatewayAssociationDirectConnectGatewayAssociationAssociatedGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectUpdateDirectConnectGatewayAssociationRequest) {
    super(scope, id);
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
          associationId: this.input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.id', props);
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
          associationId: this.input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.type', props);
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
          associationId: this.input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.ownerAccount', props);
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
          associationId: this.input.associationId,
          addAllowedPrefixesToDirectConnectGateway: this.input.addAllowedPrefixesToDirectConnectGateway,
          removeAllowedPrefixesToDirectConnectGateway: this.input.removeAllowedPrefixesToDirectConnectGateway,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectConnectGatewayAssociation.directConnectGatewayAssociation.associatedGateway.region', props);
    return resource.getResponseField('directConnectGatewayAssociation.associatedGateway.region') as unknown as string;
  }

}

export class DirectConnectUpdateLag extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectUpdateLagRequest) {
    super(scope, id);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.connectionsBandwidth', props);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.numberOfConnections', props);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.lagId', props);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.ownerAccount', props);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.lagName', props);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.lagState', props);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.location', props);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.region', props);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.minimumLinks', props);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.awsDevice', props);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.connections', props);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.allowsHostedConnections', props);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.jumboFrameCapable', props);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.hasLogicalRedundancy', props);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.tags', props);
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
          lagId: this.input.lagId,
          lagName: this.input.lagName,
          minimumLinks: this.input.minimumLinks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLag.providerName', props);
    return resource.getResponseField('providerName') as unknown as string;
  }

}

export class DirectConnectUpdateVirtualInterfaceAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DirectConnectUpdateVirtualInterfaceAttributesRequest) {
    super(scope, id);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.ownerAccount', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.virtualInterfaceId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.location', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.connectionId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.virtualInterfaceType', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.virtualInterfaceName', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.vlan', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.asn', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.amazonSideAsn', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.authKey', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.amazonAddress', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.customerAddress', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.addressFamily', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.virtualInterfaceState', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.customerRouterConfig', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.mtu', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.jumboFrameCapable', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.virtualGatewayId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.directConnectGatewayId', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.routeFilterPrefixes', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.bgpPeers', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.region', props);
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.awsDeviceV2', props);
    return resource.getResponseField('awsDeviceV2') as unknown as string;
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
          virtualInterfaceId: this.input.virtualInterfaceId,
          mtu: this.input.mtu,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVirtualInterfaceAttributes.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DirectConnectTag[];
  }

}

