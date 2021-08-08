import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class RamClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptResourceShareInvitation(input: shapes.RamAcceptResourceShareInvitationRequest): RAMResponsesAcceptResourceShareInvitation {
    return new RAMResponsesAcceptResourceShareInvitation(this, this.__resources, input);
  }

  public associateResourceShare(input: shapes.RamAssociateResourceShareRequest): RAMResponsesAssociateResourceShare {
    return new RAMResponsesAssociateResourceShare(this, this.__resources, input);
  }

  public associateResourceSharePermission(input: shapes.RamAssociateResourceSharePermissionRequest): RAMResponsesAssociateResourceSharePermission {
    return new RAMResponsesAssociateResourceSharePermission(this, this.__resources, input);
  }

  public createResourceShare(input: shapes.RamCreateResourceShareRequest): RAMResponsesCreateResourceShare {
    return new RAMResponsesCreateResourceShare(this, this.__resources, input);
  }

  public deleteResourceShare(input: shapes.RamDeleteResourceShareRequest): RAMResponsesDeleteResourceShare {
    return new RAMResponsesDeleteResourceShare(this, this.__resources, input);
  }

  public disassociateResourceShare(input: shapes.RamDisassociateResourceShareRequest): RAMResponsesDisassociateResourceShare {
    return new RAMResponsesDisassociateResourceShare(this, this.__resources, input);
  }

  public disassociateResourceSharePermission(input: shapes.RamDisassociateResourceSharePermissionRequest): RAMResponsesDisassociateResourceSharePermission {
    return new RAMResponsesDisassociateResourceSharePermission(this, this.__resources, input);
  }

  public enableSharingWithAwsOrganization(): RAMResponsesEnableSharingWithAwsOrganization {
    return new RAMResponsesEnableSharingWithAwsOrganization(this, this.__resources);
  }

  public fetchPermission(input: shapes.RamGetPermissionRequest): RAMResponsesFetchPermission {
    return new RAMResponsesFetchPermission(this, this.__resources, input);
  }

  public fetchResourcePolicies(input: shapes.RamGetResourcePoliciesRequest): RAMResponsesFetchResourcePolicies {
    return new RAMResponsesFetchResourcePolicies(this, this.__resources, input);
  }

  public fetchResourceShareAssociations(input: shapes.RamGetResourceShareAssociationsRequest): RAMResponsesFetchResourceShareAssociations {
    return new RAMResponsesFetchResourceShareAssociations(this, this.__resources, input);
  }

  public fetchResourceShareInvitations(input: shapes.RamGetResourceShareInvitationsRequest): RAMResponsesFetchResourceShareInvitations {
    return new RAMResponsesFetchResourceShareInvitations(this, this.__resources, input);
  }

  public fetchResourceShares(input: shapes.RamGetResourceSharesRequest): RAMResponsesFetchResourceShares {
    return new RAMResponsesFetchResourceShares(this, this.__resources, input);
  }

  public listPendingInvitationResources(input: shapes.RamListPendingInvitationResourcesRequest): RAMResponsesListPendingInvitationResources {
    return new RAMResponsesListPendingInvitationResources(this, this.__resources, input);
  }

  public listPermissions(input: shapes.RamListPermissionsRequest): RAMResponsesListPermissions {
    return new RAMResponsesListPermissions(this, this.__resources, input);
  }

  public listPrincipals(input: shapes.RamListPrincipalsRequest): RAMResponsesListPrincipals {
    return new RAMResponsesListPrincipals(this, this.__resources, input);
  }

  public listResourceSharePermissions(input: shapes.RamListResourceSharePermissionsRequest): RAMResponsesListResourceSharePermissions {
    return new RAMResponsesListResourceSharePermissions(this, this.__resources, input);
  }

  public listResourceTypes(input: shapes.RamListResourceTypesRequest): RAMResponsesListResourceTypes {
    return new RAMResponsesListResourceTypes(this, this.__resources, input);
  }

  public listResources(input: shapes.RamListResourcesRequest): RAMResponsesListResources {
    return new RAMResponsesListResources(this, this.__resources, input);
  }

  public promoteResourceShareCreatedFromPolicy(input: shapes.RamPromoteResourceShareCreatedFromPolicyRequest): RAMResponsesPromoteResourceShareCreatedFromPolicy {
    return new RAMResponsesPromoteResourceShareCreatedFromPolicy(this, this.__resources, input);
  }

  public rejectResourceShareInvitation(input: shapes.RamRejectResourceShareInvitationRequest): RAMResponsesRejectResourceShareInvitation {
    return new RAMResponsesRejectResourceShareInvitation(this, this.__resources, input);
  }

  public tagResource(input: shapes.RamTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.TagResource'),
        parameters: {
          resourceShareArn: input.resourceShareArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.RamUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.UntagResource'),
        parameters: {
          resourceShareArn: input.resourceShareArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateResourceShare(input: shapes.RamUpdateResourceShareRequest): RAMResponsesUpdateResourceShare {
    return new RAMResponsesUpdateResourceShare(this, this.__resources, input);
  }

}

export class RAMResponsesAcceptResourceShareInvitation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamAcceptResourceShareInvitationRequest) {
  }

  public get resourceShareInvitation(): RAMResponsesAcceptResourceShareInvitationResourceShareInvitation {
    return new RAMResponsesAcceptResourceShareInvitationResourceShareInvitation(this.__scope, this.__resources, this.__input);
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.AcceptResourceShareInvitation.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptResourceShareInvitation.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMResponsesAcceptResourceShareInvitationResourceShareInvitation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamAcceptResourceShareInvitationRequest) {
  }

  public get resourceShareInvitationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.AcceptResourceShareInvitation.resourceShareInvitation.resourceShareInvitationArn'),
        outputPath: 'resourceShareInvitation.resourceShareInvitationArn',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptResourceShareInvitation.resourceShareInvitation.resourceShareInvitationArn', props);
    return resource.getResponseField('resourceShareInvitation.resourceShareInvitationArn') as unknown as string;
  }

  public get resourceShareName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.AcceptResourceShareInvitation.resourceShareInvitation.resourceShareName'),
        outputPath: 'resourceShareInvitation.resourceShareName',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptResourceShareInvitation.resourceShareInvitation.resourceShareName', props);
    return resource.getResponseField('resourceShareInvitation.resourceShareName') as unknown as string;
  }

  public get resourceShareArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.AcceptResourceShareInvitation.resourceShareInvitation.resourceShareArn'),
        outputPath: 'resourceShareInvitation.resourceShareArn',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptResourceShareInvitation.resourceShareInvitation.resourceShareArn', props);
    return resource.getResponseField('resourceShareInvitation.resourceShareArn') as unknown as string;
  }

  public get senderAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.AcceptResourceShareInvitation.resourceShareInvitation.senderAccountId'),
        outputPath: 'resourceShareInvitation.senderAccountId',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptResourceShareInvitation.resourceShareInvitation.senderAccountId', props);
    return resource.getResponseField('resourceShareInvitation.senderAccountId') as unknown as string;
  }

  public get receiverAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.AcceptResourceShareInvitation.resourceShareInvitation.receiverAccountId'),
        outputPath: 'resourceShareInvitation.receiverAccountId',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptResourceShareInvitation.resourceShareInvitation.receiverAccountId', props);
    return resource.getResponseField('resourceShareInvitation.receiverAccountId') as unknown as string;
  }

  public get invitationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.AcceptResourceShareInvitation.resourceShareInvitation.invitationTimestamp'),
        outputPath: 'resourceShareInvitation.invitationTimestamp',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptResourceShareInvitation.resourceShareInvitation.invitationTimestamp', props);
    return resource.getResponseField('resourceShareInvitation.invitationTimestamp') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.AcceptResourceShareInvitation.resourceShareInvitation.status'),
        outputPath: 'resourceShareInvitation.status',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptResourceShareInvitation.resourceShareInvitation.status', props);
    return resource.getResponseField('resourceShareInvitation.status') as unknown as string;
  }

  public get resourceShareAssociations(): shapes.RamResourceShareAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.AcceptResourceShareInvitation.resourceShareInvitation.resourceShareAssociations'),
        outputPath: 'resourceShareInvitation.resourceShareAssociations',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptResourceShareInvitation.resourceShareInvitation.resourceShareAssociations', props);
    return resource.getResponseField('resourceShareInvitation.resourceShareAssociations') as unknown as shapes.RamResourceShareAssociation[];
  }

  public get receiverArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.AcceptResourceShareInvitation.resourceShareInvitation.receiverArn'),
        outputPath: 'resourceShareInvitation.receiverArn',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptResourceShareInvitation.resourceShareInvitation.receiverArn', props);
    return resource.getResponseField('resourceShareInvitation.receiverArn') as unknown as string;
  }

}

export class RAMResponsesAssociateResourceShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamAssociateResourceShareRequest) {
  }

  public get resourceShareAssociations(): shapes.RamResourceShareAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.AssociateResourceShare.resourceShareAssociations'),
        outputPath: 'resourceShareAssociations',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          resourceArns: this.__input.resourceArns,
          principals: this.__input.principals,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResourceShare.resourceShareAssociations', props);
    return resource.getResponseField('resourceShareAssociations') as unknown as shapes.RamResourceShareAssociation[];
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.AssociateResourceShare.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          resourceArns: this.__input.resourceArns,
          principals: this.__input.principals,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResourceShare.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMResponsesAssociateResourceSharePermission {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamAssociateResourceSharePermissionRequest) {
  }

  public get returnValue(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResourceSharePermission',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.AssociateResourceSharePermission.returnValue'),
        outputPath: 'returnValue',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          permissionArn: this.__input.permissionArn,
          replace: this.__input.replace,
          clientToken: this.__input.clientToken,
          permissionVersion: this.__input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResourceSharePermission.returnValue', props);
    return resource.getResponseField('returnValue') as unknown as boolean;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResourceSharePermission',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.AssociateResourceSharePermission.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          permissionArn: this.__input.permissionArn,
          replace: this.__input.replace,
          clientToken: this.__input.clientToken,
          permissionVersion: this.__input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResourceSharePermission.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMResponsesCreateResourceShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamCreateResourceShareRequest) {
  }

  public get resourceShare(): RAMResponsesCreateResourceShareResourceShare {
    return new RAMResponsesCreateResourceShareResourceShare(this.__scope, this.__resources, this.__input);
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.CreateResourceShare.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          name: this.__input.name,
          resourceArns: this.__input.resourceArns,
          principals: this.__input.principals,
          tags: this.__input.tags,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
          permissionArns: this.__input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceShare.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMResponsesCreateResourceShareResourceShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamCreateResourceShareRequest) {
  }

  public get resourceShareArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.CreateResourceShare.resourceShare.resourceShareArn'),
        outputPath: 'resourceShare.resourceShareArn',
        parameters: {
          name: this.__input.name,
          resourceArns: this.__input.resourceArns,
          principals: this.__input.principals,
          tags: this.__input.tags,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
          permissionArns: this.__input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceShare.resourceShare.resourceShareArn', props);
    return resource.getResponseField('resourceShare.resourceShareArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.CreateResourceShare.resourceShare.name'),
        outputPath: 'resourceShare.name',
        parameters: {
          name: this.__input.name,
          resourceArns: this.__input.resourceArns,
          principals: this.__input.principals,
          tags: this.__input.tags,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
          permissionArns: this.__input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceShare.resourceShare.name', props);
    return resource.getResponseField('resourceShare.name') as unknown as string;
  }

  public get owningAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.CreateResourceShare.resourceShare.owningAccountId'),
        outputPath: 'resourceShare.owningAccountId',
        parameters: {
          name: this.__input.name,
          resourceArns: this.__input.resourceArns,
          principals: this.__input.principals,
          tags: this.__input.tags,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
          permissionArns: this.__input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceShare.resourceShare.owningAccountId', props);
    return resource.getResponseField('resourceShare.owningAccountId') as unknown as string;
  }

  public get allowExternalPrincipals(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.CreateResourceShare.resourceShare.allowExternalPrincipals'),
        outputPath: 'resourceShare.allowExternalPrincipals',
        parameters: {
          name: this.__input.name,
          resourceArns: this.__input.resourceArns,
          principals: this.__input.principals,
          tags: this.__input.tags,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
          permissionArns: this.__input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceShare.resourceShare.allowExternalPrincipals', props);
    return resource.getResponseField('resourceShare.allowExternalPrincipals') as unknown as boolean;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.CreateResourceShare.resourceShare.status'),
        outputPath: 'resourceShare.status',
        parameters: {
          name: this.__input.name,
          resourceArns: this.__input.resourceArns,
          principals: this.__input.principals,
          tags: this.__input.tags,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
          permissionArns: this.__input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceShare.resourceShare.status', props);
    return resource.getResponseField('resourceShare.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.CreateResourceShare.resourceShare.statusMessage'),
        outputPath: 'resourceShare.statusMessage',
        parameters: {
          name: this.__input.name,
          resourceArns: this.__input.resourceArns,
          principals: this.__input.principals,
          tags: this.__input.tags,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
          permissionArns: this.__input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceShare.resourceShare.statusMessage', props);
    return resource.getResponseField('resourceShare.statusMessage') as unknown as string;
  }

  public get tags(): shapes.RamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.CreateResourceShare.resourceShare.tags'),
        outputPath: 'resourceShare.tags',
        parameters: {
          name: this.__input.name,
          resourceArns: this.__input.resourceArns,
          principals: this.__input.principals,
          tags: this.__input.tags,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
          permissionArns: this.__input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceShare.resourceShare.tags', props);
    return resource.getResponseField('resourceShare.tags') as unknown as shapes.RamTag[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.CreateResourceShare.resourceShare.creationTime'),
        outputPath: 'resourceShare.creationTime',
        parameters: {
          name: this.__input.name,
          resourceArns: this.__input.resourceArns,
          principals: this.__input.principals,
          tags: this.__input.tags,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
          permissionArns: this.__input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceShare.resourceShare.creationTime', props);
    return resource.getResponseField('resourceShare.creationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.CreateResourceShare.resourceShare.lastUpdatedTime'),
        outputPath: 'resourceShare.lastUpdatedTime',
        parameters: {
          name: this.__input.name,
          resourceArns: this.__input.resourceArns,
          principals: this.__input.principals,
          tags: this.__input.tags,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
          permissionArns: this.__input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceShare.resourceShare.lastUpdatedTime', props);
    return resource.getResponseField('resourceShare.lastUpdatedTime') as unknown as string;
  }

  public get featureSet(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.CreateResourceShare.resourceShare.featureSet'),
        outputPath: 'resourceShare.featureSet',
        parameters: {
          name: this.__input.name,
          resourceArns: this.__input.resourceArns,
          principals: this.__input.principals,
          tags: this.__input.tags,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
          permissionArns: this.__input.permissionArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateResourceShare.resourceShare.featureSet', props);
    return resource.getResponseField('resourceShare.featureSet') as unknown as string;
  }

}

export class RAMResponsesDeleteResourceShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamDeleteResourceShareRequest) {
  }

  public get returnValue(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.DeleteResourceShare.returnValue'),
        outputPath: 'returnValue',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResourceShare.returnValue', props);
    return resource.getResponseField('returnValue') as unknown as boolean;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.DeleteResourceShare.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResourceShare.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMResponsesDisassociateResourceShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamDisassociateResourceShareRequest) {
  }

  public get resourceShareAssociations(): shapes.RamResourceShareAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.DisassociateResourceShare.resourceShareAssociations'),
        outputPath: 'resourceShareAssociations',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          resourceArns: this.__input.resourceArns,
          principals: this.__input.principals,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResourceShare.resourceShareAssociations', props);
    return resource.getResponseField('resourceShareAssociations') as unknown as shapes.RamResourceShareAssociation[];
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.DisassociateResourceShare.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          resourceArns: this.__input.resourceArns,
          principals: this.__input.principals,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResourceShare.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMResponsesDisassociateResourceSharePermission {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamDisassociateResourceSharePermissionRequest) {
  }

  public get returnValue(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResourceSharePermission',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.DisassociateResourceSharePermission.returnValue'),
        outputPath: 'returnValue',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          permissionArn: this.__input.permissionArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResourceSharePermission.returnValue', props);
    return resource.getResponseField('returnValue') as unknown as boolean;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResourceSharePermission',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.DisassociateResourceSharePermission.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          permissionArn: this.__input.permissionArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResourceSharePermission.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMResponsesEnableSharingWithAwsOrganization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get returnValue(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableSharingWithAwsOrganization',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.EnableSharingWithAwsOrganization.returnValue'),
        outputPath: 'returnValue',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableSharingWithAwsOrganization.returnValue', props);
    return resource.getResponseField('returnValue') as unknown as boolean;
  }

}

export class RAMResponsesFetchPermission {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamGetPermissionRequest) {
  }

  public get permission(): RAMResponsesFetchPermissionPermission {
    return new RAMResponsesFetchPermissionPermission(this.__scope, this.__resources, this.__input);
  }

}

export class RAMResponsesFetchPermissionPermission {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamGetPermissionRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPermission',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetPermission.permission.arn'),
        outputPath: 'permission.arn',
        parameters: {
          permissionArn: this.__input.permissionArn,
          permissionVersion: this.__input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPermission.permission.arn', props);
    return resource.getResponseField('permission.arn') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPermission',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetPermission.permission.version'),
        outputPath: 'permission.version',
        parameters: {
          permissionArn: this.__input.permissionArn,
          permissionVersion: this.__input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPermission.permission.version', props);
    return resource.getResponseField('permission.version') as unknown as string;
  }

  public get defaultVersion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPermission',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetPermission.permission.defaultVersion'),
        outputPath: 'permission.defaultVersion',
        parameters: {
          permissionArn: this.__input.permissionArn,
          permissionVersion: this.__input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPermission.permission.defaultVersion', props);
    return resource.getResponseField('permission.defaultVersion') as unknown as boolean;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPermission',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetPermission.permission.name'),
        outputPath: 'permission.name',
        parameters: {
          permissionArn: this.__input.permissionArn,
          permissionVersion: this.__input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPermission.permission.name', props);
    return resource.getResponseField('permission.name') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPermission',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetPermission.permission.resourceType'),
        outputPath: 'permission.resourceType',
        parameters: {
          permissionArn: this.__input.permissionArn,
          permissionVersion: this.__input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPermission.permission.resourceType', props);
    return resource.getResponseField('permission.resourceType') as unknown as string;
  }

  public get permission(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPermission',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetPermission.permission.permission'),
        outputPath: 'permission.permission',
        parameters: {
          permissionArn: this.__input.permissionArn,
          permissionVersion: this.__input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPermission.permission.permission', props);
    return resource.getResponseField('permission.permission') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPermission',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetPermission.permission.creationTime'),
        outputPath: 'permission.creationTime',
        parameters: {
          permissionArn: this.__input.permissionArn,
          permissionVersion: this.__input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPermission.permission.creationTime', props);
    return resource.getResponseField('permission.creationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPermission',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetPermission.permission.lastUpdatedTime'),
        outputPath: 'permission.lastUpdatedTime',
        parameters: {
          permissionArn: this.__input.permissionArn,
          permissionVersion: this.__input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPermission.permission.lastUpdatedTime', props);
    return resource.getResponseField('permission.lastUpdatedTime') as unknown as string;
  }

  public get isResourceTypeDefault(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPermission',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetPermission.permission.isResourceTypeDefault'),
        outputPath: 'permission.isResourceTypeDefault',
        parameters: {
          permissionArn: this.__input.permissionArn,
          permissionVersion: this.__input.permissionVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPermission.permission.isResourceTypeDefault', props);
    return resource.getResponseField('permission.isResourceTypeDefault') as unknown as boolean;
  }

}

export class RAMResponsesFetchResourcePolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamGetResourcePoliciesRequest) {
  }

  public get policies(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicies',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetResourcePolicies.policies'),
        outputPath: 'policies',
        parameters: {
          resourceArns: this.__input.resourceArns,
          principal: this.__input.principal,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourcePolicies.policies', props);
    return resource.getResponseField('policies') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicies',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetResourcePolicies.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          resourceArns: this.__input.resourceArns,
          principal: this.__input.principal,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourcePolicies.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMResponsesFetchResourceShareAssociations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamGetResourceShareAssociationsRequest) {
  }

  public get resourceShareAssociations(): shapes.RamResourceShareAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceShareAssociations',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetResourceShareAssociations.resourceShareAssociations'),
        outputPath: 'resourceShareAssociations',
        parameters: {
          associationType: this.__input.associationType,
          resourceShareArns: this.__input.resourceShareArns,
          resourceArn: this.__input.resourceArn,
          principal: this.__input.principal,
          associationStatus: this.__input.associationStatus,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceShareAssociations.resourceShareAssociations', props);
    return resource.getResponseField('resourceShareAssociations') as unknown as shapes.RamResourceShareAssociation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceShareAssociations',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetResourceShareAssociations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          associationType: this.__input.associationType,
          resourceShareArns: this.__input.resourceShareArns,
          resourceArn: this.__input.resourceArn,
          principal: this.__input.principal,
          associationStatus: this.__input.associationStatus,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceShareAssociations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMResponsesFetchResourceShareInvitations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamGetResourceShareInvitationsRequest) {
  }

  public get resourceShareInvitations(): shapes.RamResourceShareInvitation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceShareInvitations',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetResourceShareInvitations.resourceShareInvitations'),
        outputPath: 'resourceShareInvitations',
        parameters: {
          resourceShareInvitationArns: this.__input.resourceShareInvitationArns,
          resourceShareArns: this.__input.resourceShareArns,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceShareInvitations.resourceShareInvitations', props);
    return resource.getResponseField('resourceShareInvitations') as unknown as shapes.RamResourceShareInvitation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceShareInvitations',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetResourceShareInvitations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          resourceShareInvitationArns: this.__input.resourceShareInvitationArns,
          resourceShareArns: this.__input.resourceShareArns,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceShareInvitations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMResponsesFetchResourceShares {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamGetResourceSharesRequest) {
  }

  public get resourceShares(): shapes.RamResourceShare[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceShares',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetResourceShares.resourceShares'),
        outputPath: 'resourceShares',
        parameters: {
          resourceShareArns: this.__input.resourceShareArns,
          resourceShareStatus: this.__input.resourceShareStatus,
          resourceOwner: this.__input.resourceOwner,
          name: this.__input.name,
          tagFilters: this.__input.tagFilters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          permissionArn: this.__input.permissionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceShares.resourceShares', props);
    return resource.getResponseField('resourceShares') as unknown as shapes.RamResourceShare[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourceShares',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.GetResourceShares.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          resourceShareArns: this.__input.resourceShareArns,
          resourceShareStatus: this.__input.resourceShareStatus,
          resourceOwner: this.__input.resourceOwner,
          name: this.__input.name,
          tagFilters: this.__input.tagFilters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          permissionArn: this.__input.permissionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourceShares.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMResponsesListPendingInvitationResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamListPendingInvitationResourcesRequest) {
  }

  public get resources(): shapes.RamResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPendingInvitationResources',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.ListPendingInvitationResources.resources'),
        outputPath: 'resources',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPendingInvitationResources.resources', props);
    return resource.getResponseField('resources') as unknown as shapes.RamResource[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPendingInvitationResources',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.ListPendingInvitationResources.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPendingInvitationResources.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMResponsesListPermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamListPermissionsRequest) {
  }

  public get permissions(): shapes.RamResourceSharePermissionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPermissions',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.ListPermissions.permissions'),
        outputPath: 'permissions',
        parameters: {
          resourceType: this.__input.resourceType,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPermissions.permissions', props);
    return resource.getResponseField('permissions') as unknown as shapes.RamResourceSharePermissionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPermissions',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.ListPermissions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          resourceType: this.__input.resourceType,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPermissions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMResponsesListPrincipals {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamListPrincipalsRequest) {
  }

  public get principals(): shapes.RamPrincipal[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPrincipals',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.ListPrincipals.principals'),
        outputPath: 'principals',
        parameters: {
          resourceOwner: this.__input.resourceOwner,
          resourceArn: this.__input.resourceArn,
          principals: this.__input.principals,
          resourceType: this.__input.resourceType,
          resourceShareArns: this.__input.resourceShareArns,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPrincipals.principals', props);
    return resource.getResponseField('principals') as unknown as shapes.RamPrincipal[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPrincipals',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.ListPrincipals.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          resourceOwner: this.__input.resourceOwner,
          resourceArn: this.__input.resourceArn,
          principals: this.__input.principals,
          resourceType: this.__input.resourceType,
          resourceShareArns: this.__input.resourceShareArns,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPrincipals.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMResponsesListResourceSharePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamListResourceSharePermissionsRequest) {
  }

  public get permissions(): shapes.RamResourceSharePermissionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceSharePermissions',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.ListResourceSharePermissions.permissions'),
        outputPath: 'permissions',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceSharePermissions.permissions', props);
    return resource.getResponseField('permissions') as unknown as shapes.RamResourceSharePermissionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceSharePermissions',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.ListResourceSharePermissions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceSharePermissions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMResponsesListResourceTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamListResourceTypesRequest) {
  }

  public get resourceTypes(): shapes.RamServiceNameAndResourceType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceTypes',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.ListResourceTypes.resourceTypes'),
        outputPath: 'resourceTypes',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceTypes.resourceTypes', props);
    return resource.getResponseField('resourceTypes') as unknown as shapes.RamServiceNameAndResourceType[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceTypes',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.ListResourceTypes.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceTypes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMResponsesListResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamListResourcesRequest) {
  }

  public get resources(): shapes.RamResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResources',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.ListResources.resources'),
        outputPath: 'resources',
        parameters: {
          resourceOwner: this.__input.resourceOwner,
          principal: this.__input.principal,
          resourceType: this.__input.resourceType,
          resourceArns: this.__input.resourceArns,
          resourceShareArns: this.__input.resourceShareArns,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResources.resources', props);
    return resource.getResponseField('resources') as unknown as shapes.RamResource[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResources',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.ListResources.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          resourceOwner: this.__input.resourceOwner,
          principal: this.__input.principal,
          resourceType: this.__input.resourceType,
          resourceArns: this.__input.resourceArns,
          resourceShareArns: this.__input.resourceShareArns,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResources.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RAMResponsesPromoteResourceShareCreatedFromPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamPromoteResourceShareCreatedFromPolicyRequest) {
  }

  public get returnValue(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'promoteResourceShareCreatedFromPolicy',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.PromoteResourceShareCreatedFromPolicy.returnValue'),
        outputPath: 'returnValue',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PromoteResourceShareCreatedFromPolicy.returnValue', props);
    return resource.getResponseField('returnValue') as unknown as boolean;
  }

}

export class RAMResponsesRejectResourceShareInvitation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamRejectResourceShareInvitationRequest) {
  }

  public get resourceShareInvitation(): RAMResponsesRejectResourceShareInvitationResourceShareInvitation {
    return new RAMResponsesRejectResourceShareInvitationResourceShareInvitation(this.__scope, this.__resources, this.__input);
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.RejectResourceShareInvitation.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectResourceShareInvitation.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMResponsesRejectResourceShareInvitationResourceShareInvitation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamRejectResourceShareInvitationRequest) {
  }

  public get resourceShareInvitationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.RejectResourceShareInvitation.resourceShareInvitation.resourceShareInvitationArn'),
        outputPath: 'resourceShareInvitation.resourceShareInvitationArn',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectResourceShareInvitation.resourceShareInvitation.resourceShareInvitationArn', props);
    return resource.getResponseField('resourceShareInvitation.resourceShareInvitationArn') as unknown as string;
  }

  public get resourceShareName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.RejectResourceShareInvitation.resourceShareInvitation.resourceShareName'),
        outputPath: 'resourceShareInvitation.resourceShareName',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectResourceShareInvitation.resourceShareInvitation.resourceShareName', props);
    return resource.getResponseField('resourceShareInvitation.resourceShareName') as unknown as string;
  }

  public get resourceShareArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.RejectResourceShareInvitation.resourceShareInvitation.resourceShareArn'),
        outputPath: 'resourceShareInvitation.resourceShareArn',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectResourceShareInvitation.resourceShareInvitation.resourceShareArn', props);
    return resource.getResponseField('resourceShareInvitation.resourceShareArn') as unknown as string;
  }

  public get senderAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.RejectResourceShareInvitation.resourceShareInvitation.senderAccountId'),
        outputPath: 'resourceShareInvitation.senderAccountId',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectResourceShareInvitation.resourceShareInvitation.senderAccountId', props);
    return resource.getResponseField('resourceShareInvitation.senderAccountId') as unknown as string;
  }

  public get receiverAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.RejectResourceShareInvitation.resourceShareInvitation.receiverAccountId'),
        outputPath: 'resourceShareInvitation.receiverAccountId',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectResourceShareInvitation.resourceShareInvitation.receiverAccountId', props);
    return resource.getResponseField('resourceShareInvitation.receiverAccountId') as unknown as string;
  }

  public get invitationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.RejectResourceShareInvitation.resourceShareInvitation.invitationTimestamp'),
        outputPath: 'resourceShareInvitation.invitationTimestamp',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectResourceShareInvitation.resourceShareInvitation.invitationTimestamp', props);
    return resource.getResponseField('resourceShareInvitation.invitationTimestamp') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.RejectResourceShareInvitation.resourceShareInvitation.status'),
        outputPath: 'resourceShareInvitation.status',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectResourceShareInvitation.resourceShareInvitation.status', props);
    return resource.getResponseField('resourceShareInvitation.status') as unknown as string;
  }

  public get resourceShareAssociations(): shapes.RamResourceShareAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.RejectResourceShareInvitation.resourceShareInvitation.resourceShareAssociations'),
        outputPath: 'resourceShareInvitation.resourceShareAssociations',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectResourceShareInvitation.resourceShareInvitation.resourceShareAssociations', props);
    return resource.getResponseField('resourceShareInvitation.resourceShareAssociations') as unknown as shapes.RamResourceShareAssociation[];
  }

  public get receiverArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectResourceShareInvitation',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.RejectResourceShareInvitation.resourceShareInvitation.receiverArn'),
        outputPath: 'resourceShareInvitation.receiverArn',
        parameters: {
          resourceShareInvitationArn: this.__input.resourceShareInvitationArn,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectResourceShareInvitation.resourceShareInvitation.receiverArn', props);
    return resource.getResponseField('resourceShareInvitation.receiverArn') as unknown as string;
  }

}

export class RAMResponsesUpdateResourceShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamUpdateResourceShareRequest) {
  }

  public get resourceShare(): RAMResponsesUpdateResourceShareResourceShare {
    return new RAMResponsesUpdateResourceShareResourceShare(this.__scope, this.__resources, this.__input);
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.UpdateResourceShare.clientToken'),
        outputPath: 'clientToken',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          name: this.__input.name,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceShare.clientToken', props);
    return resource.getResponseField('clientToken') as unknown as string;
  }

}

export class RAMResponsesUpdateResourceShareResourceShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RamUpdateResourceShareRequest) {
  }

  public get resourceShareArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.UpdateResourceShare.resourceShare.resourceShareArn'),
        outputPath: 'resourceShare.resourceShareArn',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          name: this.__input.name,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceShare.resourceShare.resourceShareArn', props);
    return resource.getResponseField('resourceShare.resourceShareArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.UpdateResourceShare.resourceShare.name'),
        outputPath: 'resourceShare.name',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          name: this.__input.name,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceShare.resourceShare.name', props);
    return resource.getResponseField('resourceShare.name') as unknown as string;
  }

  public get owningAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.UpdateResourceShare.resourceShare.owningAccountId'),
        outputPath: 'resourceShare.owningAccountId',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          name: this.__input.name,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceShare.resourceShare.owningAccountId', props);
    return resource.getResponseField('resourceShare.owningAccountId') as unknown as string;
  }

  public get allowExternalPrincipals(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.UpdateResourceShare.resourceShare.allowExternalPrincipals'),
        outputPath: 'resourceShare.allowExternalPrincipals',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          name: this.__input.name,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceShare.resourceShare.allowExternalPrincipals', props);
    return resource.getResponseField('resourceShare.allowExternalPrincipals') as unknown as boolean;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.UpdateResourceShare.resourceShare.status'),
        outputPath: 'resourceShare.status',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          name: this.__input.name,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceShare.resourceShare.status', props);
    return resource.getResponseField('resourceShare.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.UpdateResourceShare.resourceShare.statusMessage'),
        outputPath: 'resourceShare.statusMessage',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          name: this.__input.name,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceShare.resourceShare.statusMessage', props);
    return resource.getResponseField('resourceShare.statusMessage') as unknown as string;
  }

  public get tags(): shapes.RamTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.UpdateResourceShare.resourceShare.tags'),
        outputPath: 'resourceShare.tags',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          name: this.__input.name,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceShare.resourceShare.tags', props);
    return resource.getResponseField('resourceShare.tags') as unknown as shapes.RamTag[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.UpdateResourceShare.resourceShare.creationTime'),
        outputPath: 'resourceShare.creationTime',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          name: this.__input.name,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceShare.resourceShare.creationTime', props);
    return resource.getResponseField('resourceShare.creationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.UpdateResourceShare.resourceShare.lastUpdatedTime'),
        outputPath: 'resourceShare.lastUpdatedTime',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          name: this.__input.name,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceShare.resourceShare.lastUpdatedTime', props);
    return resource.getResponseField('resourceShare.lastUpdatedTime') as unknown as string;
  }

  public get featureSet(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceShare',
        service: 'RAM',
        physicalResourceId: cr.PhysicalResourceId.of('RAM.UpdateResourceShare.resourceShare.featureSet'),
        outputPath: 'resourceShare.featureSet',
        parameters: {
          resourceShareArn: this.__input.resourceShareArn,
          name: this.__input.name,
          allowExternalPrincipals: this.__input.allowExternalPrincipals,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateResourceShare.resourceShare.featureSet', props);
    return resource.getResponseField('resourceShare.featureSet') as unknown as string;
  }

}

